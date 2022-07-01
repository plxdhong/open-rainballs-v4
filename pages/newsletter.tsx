import Container from 'components/Container';
import Subscribe from 'components/Subscribe';

export default function Newsletter() {
  return (
    <Container
      title="周报 – Rainballs"
      description="关于计算机、技术、结构设计、音乐、游戏、生活等的一些想法."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          周报
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          我会在周报里面讲一些我最近在做的事情，以及一些读到的文章，总之会分享一些新奇的东西。
        </p>
        <Subscribe />
      </div>
    </Container>
  );
}
