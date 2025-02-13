import json
import os

def json_to_markdown(json_data, output_dir="../docs/posts/"):
    os.makedirs(output_dir, exist_ok=True)

    for item in json_data:
        file_name = f"bai-ke-{item['number']}.md"
        file_path = os.path.join(output_dir, file_name)

        markdown_content = f"""---
date: {item['created_at']}
update: {item['updated_at']}

title: Bài kệ {item['number']} - {item['category_name'].replace('-', ' ').title()}
category:
  - {item['pham']}
  - {item['category_name']}
tag:
  - {item['pham']}
---

# Bài kệ {item['number']} - {item['pham'].replace('-', ' ').title()}

![An image](/{item['img_url']})

{item['content']}
"""

        with open(file_path, "w", encoding="utf-8") as md_file:
            md_file.write(markdown_content)
        print(f"Created {file_path}")

# Đọc dữ liệu từ file data.json
with open("data_merged.json", "r", encoding="utf-8") as json_file:
    json_data = json.load(json_file)
# json_data =""

# Chuyển đổi dữ liệu từ JSON sang Markdown
json_to_markdown(json_data)
