import Container from 'components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container
      title="好物 – Rainballs"
      description="我的好物分享"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          好物分享
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          这有我当前用于写代码、分析事情、娱乐的工具们。
          我有我喜欢的午餐安利！
          还有我喜欢的零食和实用小工具！
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
