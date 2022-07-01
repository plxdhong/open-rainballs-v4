import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse md:flex-row items-start h-[460px] md:h-[500px] bg-two-people bg-no-repeat bg-right-bottom bg-contain">
          <div className="flex flex-col pr-8 z-one z-40 md:h-2/4 ">
            <h1 className="font-oz font-normal text-8xl md:text-5xl tracking-tight mb-0 text-black dark:text-white">
              雨球
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mt-4">
              <span className="font-serif font-bold">Rainballs</span>
            </h2>
            <p className="font-serif text-pink-400 dark:text-gray-200 mb-2">
              [ˈreɪnˈbɑlz]彩虹, 雨球, 五彩斑斓的生活
            </p>
            <p className="font-serif text-yellow-600 dark:text-gray-200 mb-12">
              由DHSAY和JASAY共同创造。有美食、有旅行、有生活、有计算机编程专业知识等。👀 期待未来的生活、项目也希望一路上能认识更多的朋友。
            </p>
          </div>
          
          <div className="justify-self-center w-[300px] md:w-[400px] mb-10 sm:mb-0 mr-auto">
            <img
              alt="pic"
              src="/welcome.svg"
            />
          </div>
        </div>
        <h3 className="font-serif font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          推荐阅读
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="npm pngquant failed——新blog爬坑记录"
            slug="my-new-blog"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="古镇云月"
            slug="qiong-lai-life"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          <BlogPostCard
            title="来看星星吧"
            slug="see-stars-in-pl"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
        </div>
        <Link href="/blog">
          <a className="font-serif flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            所有文章
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <h3 className="font-serif font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          推荐视频
        </h3>
        <p className="font-serif text-gray-600 dark:text-gray-400 mb-4">
          一段精心制作的视频似乎比一篇用心打造的文章更能说明问题，即使Rainballs中的文章已经集成嵌入式交互组件，但是视频往往能带来更多维度的信息。
          这里会列出一些我喜欢的视频和我创作的视频~
        </p>
        <VideoCard
          index="01"
          href="https://youtu.be/u7eiNnw6Kwc?t=6750"
          length="04:45"
          title="Imagine-安智煐(脸红主唱)@平昌冬奥开幕式"
        />
        <VideoCard
          index="02"
          href="https://youtu.be/I9uVg-feZoM"
          length="06:10"
          title="东京奥运会奥运图标设计"
        />
        <VideoCard
          index="03"
          href="https://www.bilibili.com/video/BV1D541157eC?share_source=copy_web"
          length="03:50"
          title="片っぽ-eill MV"
        />
        <VideoCard
          index="04"
          href="https://www.2021chengdu.com/activity/news/newsDetail?id=11270&lang=zh&cid=focus"
          length="05:42"
          title="世界是我们——成都大运会"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://space.bilibili.com/23505112"
          className="font-serif flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
          所有视频
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </a>
        <span className="h-16" />
        <Subscribe />
      </div>
    </Container>
  );
}
