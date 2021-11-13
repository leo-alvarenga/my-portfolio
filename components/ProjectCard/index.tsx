import Image from "next/image";

import { Project } from "../../libs/types";

import styles from './ProjectCard.module.css';

const ProjectCard = (props : Project) : JSX.Element => {
    
    return (
        <a href={props.href} className={styles.card} target="_blank">
            <div className={styles.cardWrapper}>
                <h2>
                    {props.name}
                </h2>

                <h4>
                    {props.description}
                </h4>

                <div className={styles.technologyList}>
                    <ul>
                        {
                            props.technologies.map((tech, index) => {
                                return (<li key={`${index}`}>
                                    <Image
                                        src={tech.src}
                                        alt={tech.alt}
                                        width={30}
                                        height={30}
                                    />
                                </li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
