import { Sidebar } from '@/components/Sidebar';
import { NextRouter, useRouter } from 'next/router';
import { ReactNode } from 'react';
import { BarFriends } from '../BarFriends';
import styles from './styles.module.sass';
interface LayoutProps {
  children: ReactNode;
}

function verifyPathName(router: NextRouter) {
  if (router.pathname === 'login' || router.pathname === 'register') {
    return false;
  }
  return true;
}

export function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <div className={styles.layout}>
      {verifyPathName(router) && <Sidebar />}
      <main>
        <div className={styles.mainContainer}>{children}</div>
      </main>
      <BarFriends />
    </div>
  );
}
