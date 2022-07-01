import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Rainballs">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          451 – 我们因为合理的原因拒绝了你的访问！
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          有可能你所查找的资料已经变了位置或者已被删除，
          也有可能你输错了地址，
          你能再次确认你输入的地址是否正确吗？
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            返回主页
          </a>
        </Link>
      </div>
    </Container>
  );
}
