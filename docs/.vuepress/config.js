import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { navbar } from './navbar'
import { sidebar } from './sidebar'
import { head } from './head'
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({

  base: isProd === 'production' ? '/kinh-phap-cu/' : '/',
  lang: 'vi-VN',

  title: 'Kinh Pháp Cú',
  description: 'Kinh Pháp Cú',

  theme: defaultTheme({
    logo: '/img/icon/buddha_vector_icon.png',
    head: head,
    navbar: navbar,
    sidebar: sidebar,
    tip: 'Mẹo',
    warning: 'Chú ý',
    danger: 'Nguy hiểm',
    backToHome: 'Về trang chủ',
    notFound: [
      'Không tìm thấy trang',
    ],
    openInNewWindow: 'Mở trong cửa sổ mới',
    toggleColorMode: 'Chuyển đổi chế độ màu',
    toggleSidebar: 'Chuyển đổi thanh bên',

    footer: "Kinh Pháp Cú © 2025 | Built with VuePress",
    displayFooter: true,
    lastUpdated: false,
    contributors: false,
  }),

  plugins: [
    blogPlugin({
      // Chỉ xử lý các file dưới thư mục posts là bài viết
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Cấu hình lấy thông tin bài viết
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
        // Các trường thông tin khác...
      }),

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: true,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: true,
          }),
          sorter: (pageA, pageB) => {
            const titleA = pageA.frontmatter.title || pageA.title || ''
            const titleB = pageB.frontmatter.title || pageB.title || ''
            return titleA.localeCompare(titleB)
          }
        },


      ],

      type: [
        {
          key: 'article',
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Article',
            sidebar: false,
          }),
          // Sắp xếp bài viết theo ngày mới nhất đứng trước
          sorter: (pageA, pageB) => {
            if (!pageA.frontmatter.date) return 1
            if (!pageB.frontmatter.date) return -1
            return new Date(pageB.frontmatter.date) - new Date(pageA.frontmatter.date)
          },
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),

})
