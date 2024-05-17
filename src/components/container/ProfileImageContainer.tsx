"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './ProfileImageContainer.module.css';

const ProfileImageContainer = () => {
    const pathname = usePathname();

    if (pathname !== '/') {
        return null;
    }

    return (
        <>
            <Image
                src="/profile.png"
                alt="Developer profile"
                width={450}
                height={700}
                priority
                className={styles.profileSm}
            />
            <Image
                src="/profile.png"
                alt="Developer profile"
                width={600}
                height={1024}
                priority
                className={styles.profileMd}
            />
        </>
    );
};

export default ProfileImageContainer;