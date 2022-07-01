import { allSnippets } from 'contentlayer/generated';
import Container from 'components/Container';
import FunctionCard from 'components/FunctionCard';
import { pick } from 'lib/utils';
import type { InferGetStaticPropsType } from 'next';

export default function Snippets({
  snippets
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="代码片段 – Rainballs"
      description="保存了一些代码————完整的小工具、简单的功能模块、小脚本"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          代码片段
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          这里保存了一些过去的代码以及一些现在正在使用的代码，
          有一些是完整的小工具，有些是一些简单的功能模块，还有一些是一些小脚本。
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {snippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const snippets = allSnippets.map((snippet) =>
    pick(snippet, ['slug', 'title', 'logo', 'description'])
  );

  return { props: { snippets } };
}
