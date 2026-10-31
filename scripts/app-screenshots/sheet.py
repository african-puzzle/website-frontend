# usage: uv run --with pillow python sheet.py <out.png> <webp folder> <theme>  -> one row per language, six screens, labelled lang/theme/screen
import sys
from PIL import Image, ImageDraw
n = ['programmes-tab', 'contacts-tab', 'measurements', 'albums-tab', 'rendez-vous-tab', 'collaborators']
langs = ['fr', 'en', 'pcm', 'hi', 'ar']
W, H, L = 240, 522, 18
root, theme = sys.argv[2], sys.argv[3]
out = Image.new('RGB', (W * 6, (H + L) * len(langs)), (255, 255, 255))
d = ImageDraw.Draw(out)
for r, lang in enumerate(langs):
    for i, k in enumerate(n):
        y = r * (H + L)
        d.text((i * W + 4, y + 3), f'{lang}/{theme}/{k}', fill=(0, 0, 0))
        try: out.paste(Image.open(f'{root}/{lang}/{theme}/{k}.webp').convert('RGB').resize((W, H)), (i * W, y + L))
        except FileNotFoundError: d.text((i * W + 4, y + L + 4), 'missing', fill=(200, 0, 0))
out.save(sys.argv[1])
