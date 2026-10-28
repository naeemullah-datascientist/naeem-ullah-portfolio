from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

root = Path(__file__).resolve().parents[1]
out = root / 'dist' / 'assets' / 'og-preview.png'
canvas = Image.new('RGB', (1200, 630), '#060806')
draw = ImageDraw.Draw(canvas)

glow = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
for box, color in [((-160, 80, 860, 220), (70, 112, 24, 120)), ((420, 400, 1400, 600), (52, 90, 20, 130))]:
    glow_draw.rounded_rectangle(box, radius=90, fill=color)
glow = glow.rotate(-32, expand=False).filter(ImageFilter.GaussianBlur(28))
canvas = Image.alpha_composite(canvas.convert('RGBA'), glow)
draw = ImageDraw.Draw(canvas)
draw.rounded_rectangle((58, 58, 1142, 572), radius=28, fill=(18, 30, 20, 235), outline=(148, 192, 91, 150), width=2)

font_path = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
bold_path = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
font = lambda size, bold=False: ImageFont.truetype(bold_path if bold else font_path, size)
draw.text((120, 112), 'NAEEM ULLAH', fill=(163, 201, 101), font=font(18, True))
draw.text((120, 170), 'AI Engineer', fill=(237, 234, 222), font=font(68, True))
draw.text((120, 270), 'Production systems across agents, RAG & automation', fill=(190, 203, 178), font=font(28))
draw.text((120, 418), 'Agents · RAG · Automation · Vision · Voice', fill=(226, 222, 211), font=font(23))
draw.text((930, 516), 'naeem-ullah.pages.dev', fill=(159, 189, 108), font=font(14))

portrait = Image.open(root / 'dist' / 'assets' / 'naeem-portrait.png').convert('RGB')
side = min(portrait.size)
left = (portrait.width - side) // 2
top = (portrait.height - side) // 2
portrait = portrait.crop((left, top, left + side, top + side)).resize((184, 184))
mask = Image.new('L', (184, 184), 0)
ImageDraw.Draw(mask).ellipse((0, 0, 183, 183), fill=255)
canvas.paste(portrait, (930, 114), mask)
draw = ImageDraw.Draw(canvas)
draw.ellipse((927, 111, 1117, 301), outline=(163, 204, 95), width=3)
canvas.convert('RGB').save(out, optimize=True)
print(out)
