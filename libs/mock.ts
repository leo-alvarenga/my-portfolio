import { IPost, IPostPreview, MiniPost, Project, Skill, Status } from "./types";

/**
 * Controls the use of actual data or mock data.
 * 
 * __Obs:__ Always change it to _false_ before pushing the project to production.
 * @constant
 */
const USE_MOCK : boolean = false;

/**
 * Mock data for a single Post object.
 * @constant
 */
export const MOCK_SINGLE_POST : IPost = {
    id: 'mock-post-1',
    title: 'A simple mock post',
    date: Date(),
    subheading: 'Just existing...',
    content: 'A simple string of content for testing porposes',
};

/**
 * Mock data for multiple Post Previews.
 * @constant
 */
export const MOCK_MULTIPLE_POST_PREVIEW : IPostPreview[] = [
	{
		id: 'mock-post-1',
        title: 'A simple mock post',
        date: Date(),
        subheading: 'Just existing...',
	},
    {
		id: 'mock-post-2',
        title: 'A second mock post',
        date: Date(),
        subheading: 'A second mock post, just to make sure',
	},
    {
		id: 'mock-post-3',
        title: 'Yet another mock post',
        date: Date(),
        subheading: 'Third time is the charm...',
	},
];

/**
 * Mock data for a single skill object.
 * @constant
 */
export const MOCK_SINGLE_SKILL : Skill = {
    title: 'JavaScript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
    alt: 'JavaScript Badge',
};

/**
 * Mock data for multiple skills.
 * @constant
 */
export const MOCK_SKILL_LIST : Skill[] = [
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

/**
 * Mock data for multiple projects.
 * @constant
 */
export const MOCK_MULTIPLE_PROJECTS : Project[] = [
    {
        name: 'Projeto 1',
        description: 'Projeto mockado para ser testado.',
        href: 'https://github.com/',
        technologies: MOCK_SKILL_LIST,
    },

    {
        name: 'Projeto 2',
        description: 'Putro projeto mockado para ser testado.',
        href: 'https://github.com/',
        technologies: MOCK_SKILL_LIST,
    },

    {
        name: 'Projeto 3',
        description: 'Mais um projeto mockado para ser testado.',
        href: 'https://github.com/',
        technologies: [ ...MOCK_SKILL_LIST, ...MOCK_SKILL_LIST],
    },

];

/**
 * Mock data for a single status object.
 * @constant
 */
export const MOCK_SINGLE_STATUS : Status = {
    title: 'Aperfeiçoando meu conhecimento em TypeScript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
};

/**
 * Gets all mock post Ids.
 * @returns A JS `Promise` carrying an array of possible paths.
 */
export const mockGetAllPostIds = async () : Promise<Array<string | { params: { [key: string]: string } }>> => {
    const out : Array<string | { params: { [key: string]: string } }> = MOCK_MULTIPLE_POST_PREVIEW.map(post => '/post/' + post.id);

    return out;
};

/**
 * Gets all mock posts as post previews.
 * @returns A JS `Promise` carrying an array of all the existing posts as post previews.
 */
export const mockGetAllPostPreviews = async () : Promise<IPostPreview[]> => {
    return MOCK_MULTIPLE_POST_PREVIEW;
};

/**
 * Gets all mock posts as mini posts, ready to be displayed in the `Home` page.
 * @returns A JS `Promise` carrying an array of all the mock posts as mini post.
 */
export const mockGetAllPostPreviewsAsMiniPosts = async () : Promise<MiniPost[]> => {
    const out : MiniPost[] = (await mockGetAllPostPreviews()).map(({ id, title, date, subheading }) => (
        {
            title: title,
            date: date,
            subheading: subheading,
            href: '/post/' + id,
        }
    ));

    return out;
};

/**
 * Retrieve a mock post.
 * @returns A JS `Promise` carrying the data of said post.
 */
export const mockGetPostById = async (id : string) : Promise<IPost> => {
    return MOCK_SINGLE_POST;
};

/**
 * Gets all mock skills.
 * @returns A JS `Promise` carrying an array of all the mock skills.
 */
export const mockGetAllSkills = async () : Promise<Skill[]> => {
    return MOCK_SKILL_LIST;
};

export const mockGetAllProjects = async () : Promise<Project[]> => {
    return MOCK_MULTIPLE_PROJECTS;
};

export const mockGetSingleRandomStatus = async () : Promise<Status> => {
    return MOCK_SINGLE_STATUS;
};

export default USE_MOCK;