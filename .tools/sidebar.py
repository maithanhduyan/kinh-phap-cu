import json
import os

# Đọc dữ liệu từ file data.json
with open("data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

# Nhóm các bài theo category_name và lưu lại thông tin cần thiết
categories = {}
for post in posts:
    cat_name = post["category_name"]
    if cat_name not in categories:
        categories[cat_name] = {
            "pham": post["pham"],  # dùng để tạo link danh mục
            "posts": []
        }
    categories[cat_name]["posts"].append(post)

# Tạo nội dung cho sidebar.js
lines = []
lines.append("export const sidebar = [")
lines.append("  '/',")
lines.append("  {")
lines.append("    text: 'Phẩm',")
lines.append("    children: [")

# Lặp qua các danh mục (trong data.json có thể có nhiều danh mục)
for cat_name, cat_data in categories.items():
    pham = cat_data["pham"]
    lines.append("      {")
    lines.append(f"        text: \"{cat_name}\",")
    lines.append(f"        link: \"/category/{pham}/\",")
    lines.append("        children: [")

    # Sắp xếp các bài theo số (chuyển number về int để sắp xếp đúng thứ tự)
    sorted_posts = sorted(cat_data["posts"], key=lambda x: int(x["number"]))
    for post in sorted_posts:
        number = post["number"]
        lines.append("          {")
        lines.append(f"            text: \"Bài Kệ {number}\",")
        lines.append(f"            link: \"/posts/bai-ke-{number}.md\",")
        lines.append("          },")
    lines.append("        ]")
    lines.append("      },")
lines.append("    ]")
lines.append("  },")
lines.append("]")

sidebar_content = "\n".join(lines)

# Tạo thư mục ../docs/.vuepress/ nếu chưa có
output_dir = "../docs/.vuepress/"
os.makedirs(output_dir, exist_ok=True)

# Ghi nội dung vào file sidebar.js
sidebar_path = os.path.join(output_dir, "sidebar.js")
with open(sidebar_path, "w", encoding="utf-8") as f:
    f.write(sidebar_content)

print(f"Created {sidebar_path}")
