import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { navbar } from './navbar'
import { sidebar } from './sidebar'
import { head } from './head'

export default defineUserConfig({
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
  }),

  plugins: [
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

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
        },

      ],

      // type: [
      //   {
      //     key: 'article',
      //     // Remove archive articles
      //     filter: (page) => !page.frontmatter.archive,
      //     layout: 'Article',
      //     frontmatter: () => ({
      //       title: 'Article',
      //       sidebar: true,
      //     }),
      //     // Sort pages with time and sticky
      //     sorter: (pageA, pageB) => {
      //       if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
      //         return pageB.frontmatter.sticky - pageA.frontmatter.sticky

      //       if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

      //       if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

      //       if (!pageB.frontmatter.date) return 1
      //       if (!pageA.frontmatter.date) return -1

      //       return (
      //         new Date(pageB.frontmatter.date).getTime() -
      //         new Date(pageA.frontmatter.date).getTime()
      //       )
      //     },
      //   },

      // ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler({
    // viteOptions: {},
    // vuePluginOptions: {},
  }),
})
