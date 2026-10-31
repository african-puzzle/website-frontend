#!/bin/zsh
# PNG (1206x2622) -> WebP 720x1565 (Lanczos, cwebp -q 85).
# usage: zsh convert.sh <raw folder with <lang>/<theme>/*.png> <public/images/app folder>
# needs: cwebp (brew install webp) and uv (Pillow comes from `uv run --with pillow`)
set -eu
uv run --quiet --with pillow python - "$1" "$2" <<'PY'
import pathlib, subprocess, sys, tempfile
from PIL import Image
raw, dest = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
with tempfile.TemporaryDirectory() as tmp:
    for png in sorted(raw.glob("*/*/*.png")):
        out = dest / png.relative_to(raw).with_suffix(".webp")
        out.parent.mkdir(parents=True, exist_ok=True)
        small = pathlib.Path(tmp) / "s.png"
        Image.open(png).convert("RGB").resize((720, 1565), Image.LANCZOS).save(small)
        subprocess.run(["cwebp", "-quiet", "-q", "85", str(small), "-o", str(out)], check=True)
PY
