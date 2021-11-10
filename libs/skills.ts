import { Skill } from "./types";
import USE_MOCK, { MOCK_SKILL_LIST } from "./mock";

const SKILL_LIST : Skill[] = [
    {
        title: 'HTML5',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
        alt: 'HTML5 Badge',
    },
    {
        title: 'CSS3',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
        alt: 'CSS3 Badge',
    },
    {
        title: 'JavaScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
        alt: 'JavaScript Badge',
    },
    {
        title: 'React.js',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
        alt: 'Reactjs Badge',
    },
    {
        title: 'Node.js',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
        alt: 'Nodejs Badge',
    },
    {
        title: 'Express',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
        alt: 'Express Badge',
    },

    {
        title: 'Python',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        alt: 'Python Badge',
    },
    {
        title: 'C',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
        alt: 'C Badge',
    },
    {
        title: 'Java',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
        alt: 'Java Badge',
    }
];

export const getAllSkills = async () : Promise<Skill[]> => {
    if (USE_MOCK)
        return SKILL_LIST;

    return MOCK_SKILL_LIST;
};