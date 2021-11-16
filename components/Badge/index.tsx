import Image from 'next/image';

import { BadgeProps } from '../../libs/types';

import styles from './Badge.module.css';

const Badge = (props : BadgeProps) : JSX.Element => {
    const handleLinkClick = (text : string | undefined) => {
        if (text !== undefined) {
            navigator?.clipboard?.writeText(text);
        }
    };

    return (
        props.href
        ? (
            <a href={props.href} target="_blank" rel="noreferrer" onClick={() => handleLinkClick(props.href)}>
                <div className={styles.linkBadgeWrapper}>
                    <Image
                        className={styles.imageContainer}
                        src={props.src}
                        alt={props.alt}
                        width={80}
                        height={80}
                    />
                    
                    <h2>
                        {props.title}
                    </h2>
                </div>
            </a>
        )
        : (
            <div className={styles.badgeWrapper}>
                <Image
                    className={props.src?.includes('github') ? styles.imageContainer : ''}
                    src={props.src}
                    alt={props.alt}
                    width={80}
                    height={80}
                />
                
                <h2>
                    {props.title}
                </h2>
            </div>
        )
    );
};

export default Badge;