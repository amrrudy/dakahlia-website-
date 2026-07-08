import { useEffect, useRef } from 'react'
import debounce from 'lodash/debounce'
import * as THREE from 'three'

/**
 * EggChick3D — a procedural Three.js scene that morphs an egg into a chick
 * as the user scrolls. Built entirely from primitives (no external models).
 *
 * Scroll phases (progress 0 → 1):
 *   0.00–0.35  glossy egg, gently bobbing
 *   0.35–0.65  shell halves split open, crack widens
 *   0.65–1.00  chick rises out, wings flap, egg fades back
 */
export default function EggChick3D({ className = '' }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef(0)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    // ── Scene & camera ──
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0.3, 7)

    // ── Lighting (soft studio) ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const key = new THREE.DirectionalLight(0xfff6e0, 2.2)
    key.position.set(4, 6, 5)
    scene.add(key)
    const rim = new THREE.DirectionalLight(0x62bc54, 1.4)
    rim.position.set(-5, 2, -4)
    scene.add(rim)
    const fill = new THREE.PointLight(0xe2e01b, 1.0, 30)
    fill.position.set(-3, -2, 4)
    scene.add(fill)

    // ── Egg profile (lathe) ──
    const eggPts: THREE.Vector2[] = []
    for (let i = 0; i <= 32; i++) {
      const t = i / 32
      const angle = t * Math.PI
      // asymmetric egg: pointier top, rounder bottom
      const r = Math.sin(angle) * (0.95 - 0.18 * Math.cos(angle))
      const y = -Math.cos(angle) * 1.35
      eggPts.push(new THREE.Vector2(r, y))
    }
    const eggGeo = new THREE.LatheGeometry(eggPts, 64)
    const shellMat = new THREE.MeshStandardMaterial({
      color: 0xfdf6e9, roughness: 0.32, metalness: 0.05,
    })

    // group that holds the two shell halves
    const eggGroup = new THREE.Group()
    scene.add(eggGroup)

    // top & bottom shell halves (clip the lathe by scaling+offset trick → use 2 separate lathes)
    const topPts = eggPts.filter((p) => p.y >= 0)
    const botPts = eggPts.filter((p) => p.y <= 0)
    const topHalf = new THREE.Mesh(new THREE.LatheGeometry(topPts, 64), shellMat)
    const botHalf = new THREE.Mesh(new THREE.LatheGeometry(botPts, 64), shellMat.clone())
    eggGroup.add(topHalf, botHalf)

    // jagged crack ring (thin torus-ish line) revealed mid-morph
    const crackMat = new THREE.MeshBasicMaterial({ color: 0xcdbb8a, transparent: true, opacity: 0 })
    const crackGeo = new THREE.TorusGeometry(0.82, 0.025, 8, 48)
    const crack = new THREE.Mesh(crackGeo, crackMat)
    crack.rotation.x = Math.PI / 2
    eggGroup.add(crack)

    // ── Chick (stylized, built from spheres) ──
    const chick = new THREE.Group()
    const chickYellow = new THREE.MeshStandardMaterial({ color: 0xf6c945, roughness: 0.55, metalness: 0 })
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.62, 32, 32), chickYellow)
    body.scale.set(1, 0.9, 1)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 32), chickYellow)
    head.position.set(0, 0.62, 0.04)
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.26, 4), new THREE.MeshStandardMaterial({ color: 0xe8862e, roughness: 0.5 }))
    beak.position.set(0, 0.66, 0.42)
    beak.rotation.x = Math.PI / 2
    // eyes
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.3 })
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), eyeMat)
    const eyeR = eyeL.clone()
    eyeL.position.set(-0.15, 0.72, 0.34)
    eyeR.position.set(0.15, 0.72, 0.34)
    // wings
    const wingGeo = new THREE.SphereGeometry(0.28, 24, 24)
    const wingL = new THREE.Mesh(wingGeo, chickYellow)
    const wingR = new THREE.Mesh(wingGeo, chickYellow)
    wingL.scale.set(0.45, 0.8, 1); wingR.scale.set(0.45, 0.8, 1)
    wingL.position.set(-0.6, 0.05, 0); wingR.position.set(0.6, 0.05, 0)
    chick.add(body, head, beak, eyeL, eyeR, wingL, wingR)
    chick.scale.setScalar(0.001)
    chick.position.y = -0.2
    scene.add(chick)

    // ── Golden particle dust ──
    const COUNT = 90
    const pGeo = new THREE.BufferGeometry()
    const pos = new Float32Array(COUNT * 3)
    const seed = new Float32Array(COUNT)
    for (let i = 0; i < COUNT; i++) {
      const a = Math.random() * Math.PI * 2
      const rad = 1.4 + Math.random() * 2.6
      pos[i * 3] = Math.cos(a) * rad
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5
      pos[i * 3 + 2] = Math.sin(a) * rad
      seed[i] = Math.random() * Math.PI * 2
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0xe2e01b, size: 0.07, transparent: true, opacity: 0.8,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    // ── Animation loop ──
    let raf = 0
    const clock = new THREE.Clock()
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const time = clock.getElapsedTime()
      const p = progressRef.current

      // phase helpers
      const split = clamp01((p - 0.35) / 0.3)   // 0.35→0.65
      const hatch = clamp01((p - 0.6) / 0.4)     // 0.60→1.0

      // egg gently bobs + rotates
      eggGroup.rotation.y = time * 0.4
      eggGroup.position.y = Math.sin(time * 1.2) * 0.08

      // shell halves split apart
      topHalf.position.y = lerp(0, 1.6, split)
      botHalf.position.y = lerp(0, -0.6, split)
      topHalf.rotation.z = lerp(0, 0.5, split)
      botHalf.rotation.z = lerp(0, -0.3, split)
      // egg fades out as chick hatches
      const eggOpacity = 1 - hatch
      ;(topHalf.material as THREE.MeshStandardMaterial).transparent = true
      ;(botHalf.material as THREE.MeshStandardMaterial).transparent = true
      ;(topHalf.material as THREE.MeshStandardMaterial).opacity = eggOpacity
      ;(botHalf.material as THREE.MeshStandardMaterial).opacity = eggOpacity
      crackMat.opacity = Math.sin(split * Math.PI) * 0.9

      // chick rises and grows
      const cs = lerp(0.001, 1.15, hatch)
      chick.scale.setScalar(cs)
      chick.position.y = lerp(-0.2, 0.05, hatch)
      chick.rotation.y = time * 0.5
      // wing flap once hatched
      const flap = hatch > 0.5 ? Math.sin(time * 6) * 0.4 : 0
      wingL.rotation.z = 0.3 + flap
      wingR.rotation.z = -0.3 - flap

      // particles drift upward, swirl
      const arr = pGeo.attributes.position.array as Float32Array
      for (let i = 0; i < COUNT; i++) {
        arr[i * 3 + 1] += 0.004 + Math.sin(time + seed[i]) * 0.001
        if (arr[i * 3 + 1] > 2.6) arr[i * 3 + 1] = -2.6
      }
      pGeo.attributes.position.needsUpdate = true
      particles.rotation.y = time * 0.08

      renderer.render(scene, camera)
    }

    if (reduced) {
      // render a single static frame at the "chick" state
      progressRef.current = 1
      renderer.render(scene, camera)
    } else {
      animate()
    }

    // ── Scroll → progress ──
    const onScroll = () => {
      const rect = mount.getBoundingClientRect()
      const vh = window.innerHeight
      // progress as the hero scrolls through the first viewport
      const raw = 1 - (rect.top + rect.height * 0.5) / vh
      progressRef.current = clamp01(raw * 1.4)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // ── Resize ──
    const onResize = debounce(() => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }, 150)
    window.addEventListener('resize', onResize)

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      onResize.cancel()
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      eggGeo.dispose(); crackGeo.dispose(); pGeo.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className={className} aria-hidden="true" />
}
