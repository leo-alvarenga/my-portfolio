import ProjectCard from "../ProjectCard";

import { Project } from "../../libs/types";

import styles from './ProjectList.module.css';

interface IProps {
    projects: Project[];
};

const ProjectList = (props : IProps) : JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <h2>
                Projetos
            </h2>
            <ul className={styles.list}>
                {
                    props.projects.map((proj, index) => (
                        <li className={styles.listItem} key={`${index}`}>
                            <ProjectCard
                                name={proj.name}
                                description={proj.description}
                                href={proj.href}
                                technologies={proj.technologies}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProjectList;