import NextLink from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

export default function NavLogo({ href }) {
    const router = useRouter();
    const isActive = router.asPath === href;
  
    return (
      <NextLink href={href}>
        <a
          className={cn(
            isActive
              ? 'text-gray-800 dark:text-gray-200'
              : 'text-gray-600 dark:text-gray-400',
            'md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-all md:order-first'
          )}
        >
          <img className="h-10" src="/logos/logo.svg" alt="Rainballs Logo" />
        </a>
      </NextLink>
    );
  }