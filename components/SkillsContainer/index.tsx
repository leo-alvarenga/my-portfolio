import { SkillListProps } from '../../libs/types';

import styles from './SkillsContainer.module.css';

import Badge from '../Badge';

const SkillsContainer = (props : SkillListProps) : JSX.Element => {
    return (
        <div className={styles.container}>

            <ul>
                {
                    props.skills?.map((skill, index) => (
                        <li key={`${index}`}>
                            <Badge
                                title={skill.title}
                                src={skill.src}
                                alt={skill.alt}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SkillsContainer;