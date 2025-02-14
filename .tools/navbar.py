import json
import os

# Đọc dữ liệu từ file data.json
with open("data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

# Lấy các danh mục duy nhất: key là category_name, value là pham (dùng để tạo link)
categories = {}
for post in posts:
    cat_name = post["category_name"]
    # Nếu danh mục chưa có, lấy giá trị pham từ bài đầu tiên
    if cat_name not in categories:
        categories[cat_name] = post["pham"]

# Tạo nội dung cho navbar.js
lines = []
lines.append("export const navbar = [")
lines.append("  {")
lines.append("    text: 'Phẩm',")
lines.append("    children: [")

# Duyệt qua các danh mục và tạo mục con theo định dạng: { text: "<category_name>", link: "category/<pham>/" }
for cat_name, pham in categories.items():
    lines.append("      {")
    lines.append(f"        text: \"{cat_name}\",")
    lines.append(f"        link: \"category/{pham}/\",")
    lines.append("      },")

lines.append("    ]")
lines.append("  },")
lines.append("]")

navbar_content = "\n".join(lines)

# Tạo thư mục ../docs/.vuepress/ nếu chưa có
output_dir = "../docs/.vuepress/"
os.makedirs(output_dir, exist_ok=True)

# Ghi nội dung vào file navbar.js
navbar_path = os.path.join(output_dir, "navbar.js")
with open(navbar_path, "w", encoding="utf-8") as f:
    f.write(navbar_content)

print(f"Created {navbar_path}")
