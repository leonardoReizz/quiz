import { useState } from 'react';
import { TbChevronsRight, TbChevronsLeft } from 'react-icons/tb';

import styles from './styles.module.sass';

export function BarFriends() {
  const [isOpenBarFriend, setIsOpenbarFriend] = useState<boolean>(false);

  function handleBarFriend() {
    setIsOpenbarFriend((state) => !state);
  }
  return (
    <>
      <div className={`${styles.action}  ${isOpenBarFriend ? styles.open : ''}`}>
        <button type="button" onClick={handleBarFriend}>
          {isOpenBarFriend && <TbChevronsRight />}
          {!isOpenBarFriend && <TbChevronsLeft />}
        </button>
      </div>
      <div className={`${styles.barFriends} ${isOpenBarFriend ? styles.open : ''}`}>
        <div className={styles.barFriendsContainer}>
          <h3>Social</h3>
          <div className={styles.friends}></div>
          <div className={styles.chat}></div>
        </div>
      </div>
    </>
  );
}
