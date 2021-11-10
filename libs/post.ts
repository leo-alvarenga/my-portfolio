import { IPost, IPostPreview, MiniPost } from "./types";
import USE_MOCK, { MOCK_SINGLE_POST, MOCK_MULTIPLE_POST_PREVIEW, mockGetAllPostIds, mockGetAllPostPreviews, mockGetAllPostPreviewsAsMiniPosts, mockGetPostById } from "./mock";

/**
 * Utility function.
 * 
 * Converts a post title to a properly formatted post Id.
 * @param title
 * @returns A properly formatted post id
 */
export const convertTitleToId = (title : string) : string => {
    const t = title.toLowerCase();
    let out : string = '';

    for (let i = 0; i < t.length; ++i) {
        if (t.charCodeAt(i) > 96 && t.charCodeAt(i) < 123) {
            out += t.charAt(i);
        } else {
            out += '-';
        }
    }

    return out;
};

/**
 * Gets all existing post Ids.
 * @returns A JS `Promise` carrying an array of possible paths.
 */
export const getAllPostIds = async () : Promise<Array<string | { params: { [key: string]: string } }>> => {
    if (USE_MOCK)
        return await mockGetAllPostIds();

    const out : Array<string | { params: { [key: string]: string } }> = MOCK_MULTIPLE_POST_PREVIEW.map(post => '/post/' + post.id);

    return out;
};

/**
 * Gets all existing posts as post previews.
 * @returns A JS `Promise` carrying an array of all the existing posts as post previews.
 */
export const getAllPostPreviews = async () : Promise<IPostPreview[]> => {
    if (USE_MOCK)
        return await mockGetAllPostPreviews();

    return MOCK_MULTIPLE_POST_PREVIEW;
};

/**
 * Gets all existing posts as mini posts, ready to be displayed in the `Home` page.
 * @returns A JS `Promise` carrying an array of all the existing posts as mini post.
 */
export const getAllPostPreviewsAsMiniPosts = async () : Promise<MiniPost[]> => {
    if (USE_MOCK)
        return await mockGetAllPostPreviewsAsMiniPosts();

    const out : MiniPost[] = (await getAllPostPreviews()).map(({ id, title, date, subheading }) => (
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
 * Retrieve a post using its Id as search term.
 * @returns A JS `Promise` carrying the data of said post.
 */
export const getPostById = async (id : string) : Promise<IPost> => {
    if (USE_MOCK)
        return await mockGetPostById(id);

    return MOCK_SINGLE_POST;
};