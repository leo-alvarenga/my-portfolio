import { IPost, IPostPreview, MiniPost, Skill } from "./types";

/**
 * Controls the use of actual data or mock data.
 * 
 * __Obs:__ Always change it to _false_ before pushing the project to production.
 * @constant
 */
const USE_MOCK : boolean = true;

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

export const MOCK_SINGLE_SKILL : Skill = {
    title: 'JavaScript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
    alt: 'JavaScript Badge',
};

export const MOCK_SKILL_LIST : Skill[] = [
    {
        title: 'JavaScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
        alt: 'JavaScript Badge',
    },
    {
        title: 'JavaScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
        alt: 'JavaScript Badge',
    },
    {
        title: 'JavaScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
        alt: 'JavaScript Badge',
    },
    {
        title: 'JavaScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
        alt: 'JavaScript Badge',
    },
    {
        title: 'JavaScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
        alt: 'JavaScript Badge',
    },
    {
        title: 'JavaScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
        alt: 'JavaScript Badge',
    }
];

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

export default USE_MOCK;