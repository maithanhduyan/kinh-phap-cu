# Cấu trúc Dự án như sau:

```
../docs
├── .vuepress
│   ├── client.js
│   ├── components
│   │   └── ArticleList.vue
│   ├── config.js
│   ├── layouts
│   │   ├── Article.vue
│   │   ├── Category.vue
│   │   ├── Tag.vue
│   │   └── Timeline.vue
│   ├── navbar.js
│   ├── sidebar.js
│   └── styles
│       └── index.css
├── get-started.md
└── posts
    ├── bai-ke-1.md
    ├── bai-ke-10.md
    └── markdown.md
```

# Danh sách chi tiết các file:

## File ../docs\.vuepress\components\ArticleList.vue:

```
<script setup>
defineProps({
  /** Article items */
  items: {
    type: Array,
    required: true,
  },
  /** Whether is timeline or not */
  isTimeline: Boolean,
});
</script>

<template>
  <div class="article-wrapper">
    <div v-if="!items.length">Nothing in here.</div>

    <article
      v-for="{ info, path } in items"
      :key="path"
      class="article"
      @click="$router.push(path)"
    >
      <header class="title">
        {{
          (isTimeline ? `${new Date(info.date).toLocaleDateString()}: ` : "") +
          info.title
        }}
      </header>

      <hr />

      <div class="article-info">
        <span v-if="info.author" class="author">Author: {{ info.author }}</span>

        <span v-if="info.date && !isTimeline" class="date"
          >Date: {{ new Date(info.date).toLocaleDateString() }}</span
        >

        <span v-if="info.category" class="category"
          >Category: {{ info.category.join(", ") }}</span
        >

        <span v-if="info.tag" class="tag">Tag: {{ info.tag.join(", ") }}</span>
      </div>

      <div v-if="info.excerpt" class="excerpt" v-html="info.excerpt" />
    </article>
  </div>
</template>

<style lang="scss">
@use "@vuepress/theme-default/styles/mixins";

.article-wrapper {
  text-align: center;
  @include mixins.content_wrapper;
}

.article {
  position: relative;

  box-sizing: border-box;

  width: 100%;
  margin: 0 auto 1.25rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--c-border);
  border-radius: 0.4rem;
  color: var(--c-text);

  text-align: start;

  @media (max-width: 419px) {
    border-radius: 0;
  }

  &:hover {
    cursor: pointer;
  }

  .title {
    position: relative;

    display: inline-block;

    font-size: 1.28rem;
    line-height: 2rem;

    &::after {
      content: "";

      position: absolute;
      bottom: 0;
      inset-inline-start: 0;

      width: 100%;
      height: 2px;

      background: var(--c-brand);

      visibility: hidden;

      transition: transform 0.3s ease-in-out;
      transform: scaleX(0);
    }

    &:hover {
      &::after {
        visibility: visible;
        transform: scaleX(1);
      }
    }

    a {
      color: inherit;
    }
  }

  .article-info {
    display: flex;
    flex-shrink: 0;

    > span {
      margin-inline-end: 0.5em;
      line-height: 1.8;
    }
  }

  .excerpt {
    h1 {
      display: none;
    }

    h2 {
      font-size: 1.2em;
    }

    h3 {
      font-size: 1.15em;
    }
  }
}
</style>

```

## File ../docs\.vuepress\layouts\Article.vue:

```
<script setup>
import { useBlogType } from "@vuepress/plugin-blog/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import ArticleList from "../components/ArticleList.vue";

const articles = useBlogType("article");
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <ArticleList :items="articles.items" />
      </main>
    </template>
  </ParentLayout>
</template>

```

## File ../docs\.vuepress\layouts\Category.vue:

```
<script setup>
import { useBlogCategory } from "@vuepress/plugin-blog/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { RouteLink, useRoute } from "vuepress/client";
import ArticleList from "../components/ArticleList.vue";

const route = useRoute();
const categoryMap = useBlogCategory("category");
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div class="category-wrapper">
          <RouteLink
            v-for="({ items, path }, name) in categoryMap.map"
            :key="name"
            :to="path"
            :active="route.path === path"
            class="category"
          >
            {{ name }}
            <span class="category-num">
              {{ items.length }}
            </span>
          </RouteLink>
        </div>

        <ArticleList :items="categoryMap.currentItems ?? []" />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use "@vuepress/theme-default/styles/mixins";

.category-wrapper {
  @include mixins.content_wrapper;

  & {
    padding-top: 1rem !important;
    padding-bottom: 0 !important;
    font-size: 14px;
  }

  a {
    color: inherit;
  }

  .category {
    display: inline-block;
    vertical-align: middle;

    overflow: hidden;

    margin: 0.3rem 0.6rem 0.8rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.25rem;

    cursor: pointer;

    transition: background 0.3s, color 0.3s;

    @media (max-width: 419px) {
      font-size: 0.9rem;
    }

    .category-num {
      display: inline-block;

      min-width: 1rem;
      height: 1.2rem;
      margin-inline-start: 0.2em;
      padding: 0 0.1rem;
      border-radius: 0.6rem;

      font-size: 0.7rem;
      line-height: 1.2rem;
      text-align: center;
    }

    &.route-link-active {
      background: var(--c-brand);
      color: var(--c-bg);

      .category-num {
        color: var(--c-bg);
      }
    }
  }
}
</style>

```

## File ../docs\.vuepress\layouts\Tag.vue:

```
<script setup>
import { useBlogCategory } from "@vuepress/plugin-blog/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import { RouteLink, useRoute } from "vuepress/client";
import ArticleList from "../components/ArticleList.vue";

const route = useRoute();
const tagMap = useBlogCategory("tag");
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <!-- <div class="tag-wrapper">
          <RouteLink
            v-for="({ items, path }, name) in tagMap.map"
            :key="name"
            :to="path"
            :active="route.path === path"
            class="tag"
          >
            {{ name }}
            <span class="tag-num">
              {{ items.length }}
            </span>
          </RouteLink>
        </div> -->

        <ArticleList :items="tagMap.currentItems ?? []" />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
@use "@vuepress/theme-default/styles/mixins";

.tag-wrapper {
  @include mixins.content_wrapper;
  & {
    padding-top: 1rem !important;
    padding-bottom: 0 !important;
    font-size: 14px;
  }

  a {
    color: inherit;
  }

  .tag {
    display: inline-block;
    vertical-align: middle;

    overflow: hidden;

    margin: 0.3rem 0.6rem 0.8rem;
    padding: 0.4rem 0.8rem;
    border-radius: 0.25rem;

    cursor: pointer;

    transition: background 0.3s, color 0.3s;

    @media (max-width: 419px) {
      font-size: 0.9rem;
    }

    .tag-num {
      display: inline-block;

      min-width: 1rem;
      height: 1.2rem;
      margin-inline-start: 0.2em;
      padding: 0 0.1rem;
      border-radius: 0.6rem;

      font-size: 0.7rem;
      line-height: 1.2rem;
      text-align: center;
    }

    &.route-link-active {
      background: var(--c-brand);
      color: var(--c-bg);

      .tag-num {
        color: var(--c-bg);
      }
    }
  }
}
</style>

```

## File ../docs\.vuepress\layouts\Timeline.vue:

```
<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'

const timelines = useBlogType('timeline')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <h1 class="timeline-title">Timeline</h1>

        <ArticleList :items="timelines.items" is-timeline />
      </main>
    </template>
  </ParentLayout>
</template>

<style lang="scss">
.timeline-title {
  padding: 0;
  text-align: center;
}
</style>

```
