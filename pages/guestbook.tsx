import prisma from 'lib/prisma';
import Container from 'components/Container';
import Guestbook from 'components/Guestbook';

export default function GuestbookPage({ fallbackData }) {
  return (
    <Container
      title="留言 – Rainballs"
      description="在我的数字留言板上注册并留下你想说的"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          留言板
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          留下你想说的吧，无论是建议、还是信息、或者是感受、甚至约我打游戏？
          我很期待哟(＾Ｕ＾)ノ~ＹＯ
        </p>
        <Guestbook fallbackData={fallbackData} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc'
    }
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString()
  }));

  return {
    props: {
      fallbackData
    },
    revalidate: 60
  };
}
