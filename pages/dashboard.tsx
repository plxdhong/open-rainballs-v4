import Link from 'next/link';

import Analytics from 'components/metrics/Analytics';
import Container from 'components/Container';
import GitHub from 'components/metrics/Github';
import TopTracks from 'components/TopTracks';

export default function Dashboard() {
  return (
    <Container
      title="数据 – Rainballs"
      description="Rainballs运行数据详情页"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          数据
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            这里会显示Rainballs以及相关的运行数据。
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Analytics />
          <GitHub />
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          最爱收听
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          快来Spotify听听我最爱的音乐，看看有没有你也喜欢的？
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
