import Link from 'next/link';

import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <NowPlaying />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">主页</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              关于
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              周报
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/Donghong_x">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/plxdhong">GitHub</ExternalLink>
          <ExternalLink href="https://space.bilibili.com/23505112">
            Bilibili
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">
              好物分享
            </a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-500 hover:text-gray-600 transition">
              留言
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              代码片段
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-gray-500 hover:text-gray-600 font-bold transition">
          赞助商
        </div>
        <div className="flex flex-col flex-wrap justify-between md:flex-row">
          <div className="flex-1 max-w-xs m-5">
            <ExternalLink href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral">
              <img src="/logos/youpaiyun.png"></img>
            </ExternalLink>
          </div>
          <div className="flex-1 max-w-xs mb-20 md:mb-5 m-5">
            <ExternalLink href="https://www.oracle.com">
              <img className="h-full" src="/logos/oracle.svg"></img>
            </ExternalLink>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
        <ExternalLink href="https://beian.miit.gov.cn/">
          蜀ICP备20004683号
        </ExternalLink>
        <a
          className="flex text-gray-500 hover:text-gray-600 transition"
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51018302000034">
            <img className="object-cover" src="/beian.png"/>
            川公网安备 51018302000034号
        </a>
      </div>
    </footer>
  );
}
