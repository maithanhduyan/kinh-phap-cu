# Cấu trúc Dự án như sau:

```
../docs
├── .vuepress
│   ├── client.js
│   ├── components
│   │   └── ArticleList.vue
│   ├── config.js
│   ├── head.js
│   ├── layouts
│   │   ├── Article.vue
│   │   ├── Category.vue
│   │   ├── Tag.vue
│   │   └── Timeline.vue
│   ├── navbar.js
│   ├── sidebar.js
│   └── styles
│       ├── index.css
│       └── index.scss
├── get-started.md
└── posts
    ├── bai-ke-1.md
    ├── bai-ke-10.md
    ├── bai-ke-100.md
    ├── bai-ke-101.md
    ├── bai-ke-102.md
    ├── bai-ke-103.md
    ├── bai-ke-104.md
    ├── bai-ke-105.md
    ├── bai-ke-106.md
    ├── bai-ke-107.md
    ├── bai-ke-108.md
    ├── bai-ke-109.md
    ├── bai-ke-11.md
    ├── bai-ke-110.md
    ├── bai-ke-111.md
    ├── bai-ke-112.md
    ├── bai-ke-113.md
    ├── bai-ke-114.md
    ├── bai-ke-115.md
    ├── bai-ke-116.md
    ├── bai-ke-117.md
    ├── bai-ke-118.md
    ├── bai-ke-119.md
    ├── bai-ke-12.md
    ├── bai-ke-120.md
    ├── bai-ke-121.md
    ├── bai-ke-122.md
    ├── bai-ke-123.md
    ├── bai-ke-124.md
    ├── bai-ke-125.md
    ├── bai-ke-126.md
    ├── bai-ke-127.md
    ├── bai-ke-128.md
    ├── bai-ke-129.md
    ├── bai-ke-13.md
    ├── bai-ke-130.md
    ├── bai-ke-131.md
    ├── bai-ke-132.md
    ├── bai-ke-133.md
    ├── bai-ke-134.md
    ├── bai-ke-135.md
    ├── bai-ke-136.md
    ├── bai-ke-137.md
    ├── bai-ke-138.md
    ├── bai-ke-139.md
    ├── bai-ke-14.md
    ├── bai-ke-140.md
    ├── bai-ke-141.md
    ├── bai-ke-142.md
    ├── bai-ke-143.md
    ├── bai-ke-144.md
    ├── bai-ke-145.md
    ├── bai-ke-146.md
    ├── bai-ke-147.md
    ├── bai-ke-148.md
    ├── bai-ke-149.md
    ├── bai-ke-15.md
    ├── bai-ke-150.md
    ├── bai-ke-151.md
    ├── bai-ke-152.md
    ├── bai-ke-153.md
    ├── bai-ke-154.md
    ├── bai-ke-155.md
    ├── bai-ke-156.md
    ├── bai-ke-157.md
    ├── bai-ke-158.md
    ├── bai-ke-159.md
    ├── bai-ke-16.md
    ├── bai-ke-160.md
    ├── bai-ke-161.md
    ├── bai-ke-162.md
    ├── bai-ke-163.md
    ├── bai-ke-164.md
    ├── bai-ke-165.md
    ├── bai-ke-166.md
    ├── bai-ke-167.md
    ├── bai-ke-168.md
    ├── bai-ke-169.md
    ├── bai-ke-17.md
    ├── bai-ke-170.md
    ├── bai-ke-171.md
    ├── bai-ke-172.md
    ├── bai-ke-173.md
    ├── bai-ke-174.md
    ├── bai-ke-175.md
    ├── bai-ke-176.md
    ├── bai-ke-177.md
    ├── bai-ke-178.md
    ├── bai-ke-18.md
    ├── bai-ke-180.md
    ├── bai-ke-181.md
    ├── bai-ke-182.md
    ├── bai-ke-183.md
    ├── bai-ke-184.md
    ├── bai-ke-185.md
    ├── bai-ke-186.md
    ├── bai-ke-187.md
    ├── bai-ke-188.md
    ├── bai-ke-189.md
    ├── bai-ke-19.md
    ├── bai-ke-190.md
    ├── bai-ke-191.md
    ├── bai-ke-192.md
    ├── bai-ke-193.md
    ├── bai-ke-194.md
    ├── bai-ke-195.md
    ├── bai-ke-196.md
    ├── bai-ke-197.md
    ├── bai-ke-198.md
    ├── bai-ke-199.md
    ├── bai-ke-2.md
    ├── bai-ke-20.md
    ├── bai-ke-200.md
    ├── bai-ke-201.md
    ├── bai-ke-202.md
    ├── bai-ke-203.md
    ├── bai-ke-204.md
    ├── bai-ke-205.md
    ├── bai-ke-206.md
    ├── bai-ke-207.md
    ├── bai-ke-208.md
    ├── bai-ke-209.md
    ├── bai-ke-21.md
    ├── bai-ke-210.md
    ├── bai-ke-211.md
    ├── bai-ke-212.md
    ├── bai-ke-213.md
    ├── bai-ke-214.md
    ├── bai-ke-215.md
    ├── bai-ke-216.md
    ├── bai-ke-217.md
    ├── bai-ke-218.md
    ├── bai-ke-219.md
    ├── bai-ke-22.md
    ├── bai-ke-220.md
    ├── bai-ke-221.md
    ├── bai-ke-222.md
    ├── bai-ke-223.md
    ├── bai-ke-224.md
    ├── bai-ke-225.md
    ├── bai-ke-226.md
    ├── bai-ke-227.md
    ├── bai-ke-228.md
    ├── bai-ke-229.md
    ├── bai-ke-23.md
    ├── bai-ke-230.md
    ├── bai-ke-231.md
    ├── bai-ke-232.md
    ├── bai-ke-233.md
    ├── bai-ke-234.md
    ├── bai-ke-235.md
    ├── bai-ke-236.md
    ├── bai-ke-237.md
    ├── bai-ke-238.md
    ├── bai-ke-239.md
    ├── bai-ke-24.md
    ├── bai-ke-240.md
    ├── bai-ke-241.md
    ├── bai-ke-242.md
    ├── bai-ke-243.md
    ├── bai-ke-244.md
    ├── bai-ke-245.md
    ├── bai-ke-246.md
    ├── bai-ke-247.md
    ├── bai-ke-248.md
    ├── bai-ke-249.md
    ├── bai-ke-25.md
    ├── bai-ke-250.md
    ├── bai-ke-251.md
    ├── bai-ke-252.md
    ├── bai-ke-253.md
    ├── bai-ke-254.md
    ├── bai-ke-255.md
    ├── bai-ke-256.md
    ├── bai-ke-257.md
    ├── bai-ke-258.md
    ├── bai-ke-259.md
    ├── bai-ke-26.md
    ├── bai-ke-260.md
    ├── bai-ke-261.md
    ├── bai-ke-262.md
    ├── bai-ke-263.md
    ├── bai-ke-264.md
    ├── bai-ke-265.md
    ├── bai-ke-266.md
    ├── bai-ke-267.md
    ├── bai-ke-268.md
    ├── bai-ke-269.md
    ├── bai-ke-27.md
    ├── bai-ke-270.md
    ├── bai-ke-271.md
    ├── bai-ke-272.md
    ├── bai-ke-273.md
    ├── bai-ke-274.md
    ├── bai-ke-275.md
    ├── bai-ke-276.md
    ├── bai-ke-277.md
    ├── bai-ke-278.md
    ├── bai-ke-279.md
    ├── bai-ke-28.md
    ├── bai-ke-280.md
    ├── bai-ke-281.md
    ├── bai-ke-282.md
    ├── bai-ke-283.md
    ├── bai-ke-284.md
    ├── bai-ke-285.md
    ├── bai-ke-286.md
    ├── bai-ke-287.md
    ├── bai-ke-288.md
    ├── bai-ke-289.md
    ├── bai-ke-29.md
    ├── bai-ke-290.md
    ├── bai-ke-291.md
    ├── bai-ke-292.md
    ├── bai-ke-293.md
    ├── bai-ke-294.md
    ├── bai-ke-295.md
    ├── bai-ke-296.md
    ├── bai-ke-297.md
    ├── bai-ke-298.md
    ├── bai-ke-299.md
    ├── bai-ke-3.md
    ├── bai-ke-30.md
    ├── bai-ke-300.md
    ├── bai-ke-301.md
    ├── bai-ke-302.md
    ├── bai-ke-303.md
    ├── bai-ke-304.md
    ├── bai-ke-305.md
    ├── bai-ke-306.md
    ├── bai-ke-307.md
    ├── bai-ke-308.md
    ├── bai-ke-309.md
    ├── bai-ke-31.md
    ├── bai-ke-310.md
    ├── bai-ke-311.md
    ├── bai-ke-312.md
    ├── bai-ke-313.md
    ├── bai-ke-314.md
    ├── bai-ke-315.md
    ├── bai-ke-316.md
    ├── bai-ke-317.md
    ├── bai-ke-318.md
    ├── bai-ke-319.md
    ├── bai-ke-32.md
    ├── bai-ke-320.md
    ├── bai-ke-321.md
    ├── bai-ke-322.md
    ├── bai-ke-323.md
    ├── bai-ke-324.md
    ├── bai-ke-325.md
    ├── bai-ke-326.md
    ├── bai-ke-327.md
    ├── bai-ke-328.md
    ├── bai-ke-329.md
    ├── bai-ke-33.md
    ├── bai-ke-330.md
    ├── bai-ke-331.md
    ├── bai-ke-332.md
    ├── bai-ke-333.md
    ├── bai-ke-334.md
    ├── bai-ke-335.md
    ├── bai-ke-336.md
    ├── bai-ke-337.md
    ├── bai-ke-338.md
    ├── bai-ke-339.md
    ├── bai-ke-34.md
    ├── bai-ke-340.md
    ├── bai-ke-341.md
    ├── bai-ke-342.md
    ├── bai-ke-343.md
    ├── bai-ke-344.md
    ├── bai-ke-345.md
    ├── bai-ke-346.md
    ├── bai-ke-347.md
    ├── bai-ke-348.md
    ├── bai-ke-349.md
    ├── bai-ke-35.md
    ├── bai-ke-350.md
    ├── bai-ke-351.md
    ├── bai-ke-352.md
    ├── bai-ke-353.md
    ├── bai-ke-354.md
    ├── bai-ke-355.md
    ├── bai-ke-356.md
    ├── bai-ke-357.md
    ├── bai-ke-358.md
    ├── bai-ke-359.md
    ├── bai-ke-36.md
    ├── bai-ke-360.md
    ├── bai-ke-361.md
    ├── bai-ke-362.md
    ├── bai-ke-363.md
    ├── bai-ke-364.md
    ├── bai-ke-365.md
    ├── bai-ke-366.md
    ├── bai-ke-367.md
    ├── bai-ke-368.md
    ├── bai-ke-369.md
    ├── bai-ke-37.md
    ├── bai-ke-370.md
    ├── bai-ke-371.md
    ├── bai-ke-372.md
    ├── bai-ke-373.md
    ├── bai-ke-374.md
    ├── bai-ke-375.md
    ├── bai-ke-376.md
    ├── bai-ke-377.md
    ├── bai-ke-378.md
    ├── bai-ke-379.md
    ├── bai-ke-38.md
    ├── bai-ke-380.md
    ├── bai-ke-381.md
    ├── bai-ke-382.md
    ├── bai-ke-383.md
    ├── bai-ke-384.md
    ├── bai-ke-385.md
    ├── bai-ke-386.md
    ├── bai-ke-387.md
    ├── bai-ke-388.md
    ├── bai-ke-389.md
    ├── bai-ke-39.md
    ├── bai-ke-390.md
    ├── bai-ke-391.md
    ├── bai-ke-392.md
    ├── bai-ke-393.md
    ├── bai-ke-394.md
    ├── bai-ke-395.md
    ├── bai-ke-396.md
    ├── bai-ke-397.md
    ├── bai-ke-398.md
    ├── bai-ke-399.md
    ├── bai-ke-4.md
    ├── bai-ke-40.md
    ├── bai-ke-400.md
    ├── bai-ke-401.md
    ├── bai-ke-402.md
    ├── bai-ke-403.md
    ├── bai-ke-404.md
    ├── bai-ke-405.md
    ├── bai-ke-406.md
    ├── bai-ke-407.md
    ├── bai-ke-408.md
    ├── bai-ke-409.md
    ├── bai-ke-41.md
    ├── bai-ke-410.md
    ├── bai-ke-411.md
    ├── bai-ke-412.md
    ├── bai-ke-413.md
    ├── bai-ke-414.md
    ├── bai-ke-415.md
    ├── bai-ke-416.md
    ├── bai-ke-417.md
    ├── bai-ke-418.md
    ├── bai-ke-419.md
    ├── bai-ke-42.md
    ├── bai-ke-420.md
    ├── bai-ke-421.md
    ├── bai-ke-422.md
    ├── bai-ke-423.md
    ├── bai-ke-43.md
    ├── bai-ke-44.md
    ├── bai-ke-45.md
    ├── bai-ke-46.md
    ├── bai-ke-47.md
    ├── bai-ke-48.md
    ├── bai-ke-49.md
    ├── bai-ke-5.md
    ├── bai-ke-50.md
    ├── bai-ke-51.md
    ├── bai-ke-52.md
    ├── bai-ke-53.md
    ├── bai-ke-54.md
    ├── bai-ke-55.md
    ├── bai-ke-56.md
    ├── bai-ke-57.md
    ├── bai-ke-58.md
    ├── bai-ke-59.md
    ├── bai-ke-6.md
    ├── bai-ke-60.md
    ├── bai-ke-61.md
    ├── bai-ke-62.md
    ├── bai-ke-63.md
    ├── bai-ke-64.md
    ├── bai-ke-65.md
    ├── bai-ke-66.md
    ├── bai-ke-67.md
    ├── bai-ke-68.md
    ├── bai-ke-69.md
    ├── bai-ke-7.md
    ├── bai-ke-70.md
    ├── bai-ke-71.md
    ├── bai-ke-72.md
    ├── bai-ke-73.md
    ├── bai-ke-74.md
    ├── bai-ke-75.md
    ├── bai-ke-76.md
    ├── bai-ke-77.md
    ├── bai-ke-78.md
    ├── bai-ke-79.md
    ├── bai-ke-8.md
    ├── bai-ke-80.md
    ├── bai-ke-81.md
    ├── bai-ke-82.md
    ├── bai-ke-83.md
    ├── bai-ke-84.md
    ├── bai-ke-85.md
    ├── bai-ke-86.md
    ├── bai-ke-87.md
    ├── bai-ke-88.md
    ├── bai-ke-89.md
    ├── bai-ke-9.md
    ├── bai-ke-90.md
    ├── bai-ke-91.md
    ├── bai-ke-92.md
    ├── bai-ke-93.md
    ├── bai-ke-94.md
    ├── bai-ke-95.md
    ├── bai-ke-96.md
    ├── bai-ke-97.md
    ├── bai-ke-98.md
    ├── bai-ke-99.md
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
        {{ info.title }}
      </header>

      <hr />

      <div class="article-info">
        <!-- <span v-if="info.author" class="author">Author: {{ info.author }}</span> -->

        <!-- <span v-if="info.date && !isTimeline" class="date"
          >Date: {{ new Date(info.date).toLocaleDateString() }}</span
        > -->

        <!-- <span v-if="info.category" class="category"
          >Category: {{ info.category.join(", ") }}</span
        > -->

        <!-- <span v-if="info.tag" class="tag">Tag: {{ info.tag.join(", ") }}</span> -->
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

  text-align: center;

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

// const articles = useBlogType("article");
const categoryMap = useBlogCategory("category");
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <ArticleList :items="categoryMap.currentItems ?? []" />
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
            <!-- {{ name }}
            <span class="category-num">
              {{ items.length }}
            </span> -->
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
import { useBlogType } from "@vuepress/plugin-blog/client";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
import ArticleList from "../components/ArticleList.vue";

const timelines = useBlogType("timeline");
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

