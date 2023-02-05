/* eslint-disable no-undef */
import Link from 'next/link';
import { useState } from 'react';
import { TbChevronsRight, TbChevronsLeft } from 'react-icons/tb';
import { RiDashboardFill } from 'react-icons/ri';
import { GiPointySword } from 'react-icons/gi';
import { IoPodium } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';
import styles from './styles.module.sass';

export function Sidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const theme: ThemeType = 'dark';
  const name = 'Leonardo Reis';

  function handleSidebar() {
    setIsOpenSidebar((state) => !state);
  }

  return (
    <>
      <div className={`${styles.action}  ${isOpenSidebar ? styles.open : ''}`}>
        <button type="button" onClick={handleSidebar}>
          {!isOpenSidebar && <TbChevronsRight />}
          {isOpenSidebar && <TbChevronsLeft />}
        </button>
      </div>
      <div
        className={`${styles.sidebar} ${theme === 'dark' ? styles.dark : styles.white} ${
          isOpenSidebar ? styles.open : ''
        }`}>
        <div className={styles.sidebarContainer}>
          <header>
            <div className={styles.user}>
              <div className={styles.image}>
                <h4>{name[0]}</h4>
              </div>
              <h4>Leonardo Reis</h4>
            </div>
          </header>
          <main>
            <section>
              <span>Quiz</span>
              <ul>
                <li>
                  <Link href="/inicio">
                    <RiDashboardFill /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/inicio">
                    <GiPointySword />
                    Desafios
                  </Link>
                </li>
                <li>
                  <Link href="/inicio">
                    {' '}
                    <IoPodium /> Ranking
                  </Link>
                </li>
                <li>
                  <Link href="/inicio">
                    <FaUserFriends /> Amigos
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <span>Configurações</span>
              <ul>
                <li>
                  <Link href="/inicio">Dashboard</Link>
                </li>
                <li>
                  <Link href="/inicio">Dashboard</Link>
                </li>
                <li>
                  <Link href="/inicio">Dashboard</Link>
                </li>
                <li>
                  <Link href="/inicio">Dashboard</Link>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
