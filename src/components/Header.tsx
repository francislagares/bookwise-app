import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { signOut } from 'auth';

const Header = () => {
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href='/'>
        <Image src='/assets/icons/logo.svg' alt='logo' width={40} height={40} />
      </Link>

      <ul className='flex flex-row items-center gap-8'>
        <li>
          <form
            action={async () => {
              'use server';

              await signOut();
            }}
            className='mb-10'
          >
            <Button>Logout</Button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
