#!/usr/bin/env bash
# Run this once after unzipping: bash download-images.sh
# Downloads all site images from Pexels into public/images/

set -e
DIR="$(cd "$(dirname "$0")" && pwd)/public/images"
mkdir -p "$DIR"

dl() {
  local FILE="$DIR/$1"
  local URL="$2"
  if [ -f "$FILE" ]; then
    echo "✓ $1 (exists)"
  else
    echo "↓ $1"
    curl -sL --max-time 30 "$URL" -o "$FILE" && echo "  ✓ done" || echo "  ✗ failed"
  fi
}

# ── Hero & backgrounds ──────────────────────────────────────────────────────
dl hero-poultry-farm.jpg      "https://images.pexels.com/photos/35877061/pexels-photo-35877061.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1400&fit=crop"
dl green-farmland.jpg         "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1400&fit=crop"
dl poultry-barn.jpg           "https://images.pexels.com/photos/35877057/pexels-photo-35877057.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1100&fit=crop"
dl solar-green.jpg            "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1200&fit=crop"
dl flock-chickens.jpg         "https://images.pexels.com/photos/27083552/pexels-photo-27083552.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&fit=crop"

# ── Companies ───────────────────────────────────────────────────────────────
dl food-processing.jpg        "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop"
dl agricultural-chemicals.jpg "https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop"
dl community-people.jpg       "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop"
dl team-meeting.jpg           "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop"

# ── Careers portraits ────────────────────────────────────────────────────────
dl portrait-1.jpg             "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop"
dl portrait-2.jpg             "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop"
dl portrait-3.jpg             "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop"

echo ""
echo "All images downloaded to public/images/"
echo "Run: npm run build"
