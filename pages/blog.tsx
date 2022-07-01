import { useState } from 'react';

import Container from 'components/Container';
import BlogPost from 'components/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'lib/utils';
import { allBlogs } from 'contentlayer/generated';

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Blog – Rainballs"
      description="关于计算机、技术、结构设计、音乐、游戏、生活等的一些想法."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="font-serif mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Blog
        </h1>
        <p className="font-serif mb-4 text-gray-600 dark:text-gray-400">
          {`我是从15年开始写博客的，那时候主要都是一些学习上的总结。
            从Rainballs创建，我已经写了大概${posts.length}篇博客了。
            如果你想搜索，你可以用下面的搜索之前的文章标题`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="搜索文章"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="搜索文章"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="font-serif mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            最受欢迎文章
            </h3>
            {/*TODO #7 #5 #4 修改最受欢迎文章*/}
            <BlogPost
              title="npm pngquant failed——新blog爬坑记录"
              summary="最近我打算将近期积累的angular经验运用在blog上，重构之前那个难以维护的blog，于是我的爬坑之旅再次来临..."
              slug="my-new-blog"
            />
            <BlogPost
              title="古镇云月"
              summary="有微风，有竹林，有溪流，还有蜻蜓。你可以在白沫江畔等待爱情，也可以在溪水泉边手牵手望着天。陪伴月的云彩是古桥边的云彩，陪伴你的夏天是平乐古镇的夏天..."
              slug="qiong-lai-life"
            />
            <BlogPost
              title="来看星星吧"
              summary="今年的特别情况，让我在小镇待了很久。每晚的例行散步时，抬头看星空，可以看很远很久..."
              slug="see-stars-in-pl"
            />
          </>
        )}
        <h3 className="font-serif mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          所有文章
        </h3>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            没有找到已发布文章.
          </p>
        )}
        {filteredBlogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}
