import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';

export default function About() {
  return (
    <Container title="关于 – Rainballs">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          关于我们
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>链接</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/donghong_x">@donghong_x</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/plxdhong">@plxdhong</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://www.rainballs.com">
                <a>https://www.rainballs.com</a>
              </Link>
            </li>
          </ul>
          <h2>简介</h2>
          <p>
          Rainballs.com 由 DHSAY 和 JASAY共同创造。我们喜欢分享生活中热爱的点点滴滴。 
          有美食、有旅行、有生活、有计算机编程专业知识等。
          👀 我们很期待未来的生活、 共同的项目也希望一路上能认识更多的朋友。
          </p>
          <h3>教育</h3>
          <p>
            DHSAY毕业于东北大学。
          </p>
          <h2>自拍</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="DHSAY自拍"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
        <iframe
          height="280"
          src="https://www.google.com/maps/d/embed?mid=1BOGH-yMnE9KGJgVQp63tWjv7R6tDeR5l"
          title="我的旅行地图"
          width="100%"
        />
      </div>
    </Container>
  );
}
