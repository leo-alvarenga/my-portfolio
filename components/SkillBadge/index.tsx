import Image from 'next/image';

import { Skill } from '../../libs/types';

import styles from './SkillBadge.module.css';

const SkillBadge = (props : Skill) : JSX.Element => {
    return (
        <div className={styles.badgeWrapper}>
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
    );
};

export default SkillBadge;