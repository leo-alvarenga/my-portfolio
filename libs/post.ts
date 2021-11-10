import { query, collection, DocumentData, getDocs, where } from "@firebase/firestore";

import { db } from "../config";

import { IPost, IPostPreview, MiniPost } from "./types";
import USE_MOCK, { MOCK_SINGLE_POST, mockGetAllPostIds, mockGetAllPostPreviews, mockGetAllPostPreviewsAsMiniPosts, mockGetPostById } from "./mock";

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
 * Get all existing posts.
 * @returns A JS `Promise` carrying an array containing all existing posts.
 */
export const getAllPost = async () : Promise<IPost[]> => {
    const snapshot : DocumentData[] = [];

    const q = query(collection(db, 'posts'));

    (await getDocs(q)).forEach((doc) => {
        snapshot.push(doc.data())
    });

    const posts : IPost[] = snapshot.map((doc) => (
        {
            id: doc['id'],
            title: doc['title'],
            date: doc['date'],
            subheading: doc['subheading'],
            content: doc['content'],
        }
    ));
    return posts;
};

/**
 * Gets all existing post Ids.
 * @returns A JS `Promise` carrying an array of possible paths.
 */
export const getAllPostIds = async () : Promise<Array<string | { params: { [key: string]: string } }>> => {
    if (USE_MOCK)
        return await mockGetAllPostIds();

    const out : Array<string | { params: { [key: string]: string } }> = (await getAllPostPreviews()).map(post => '/post/' + post.id);

    return out;
};

/**
 * Gets all existing posts as post previews.
 * @returns A JS `Promise` carrying an array of all the existing posts as post previews.
 */
export const getAllPostPreviews = async () : Promise<IPostPreview[]> => {
    if (USE_MOCK)
        return await mockGetAllPostPreviews();

    const posts = await getAllPost();


    return posts.map((post) => (
        {
            id: post['id'],
            title: post['title'],
            date: post['date'],
            subheading: post['subheading'],
        }
    ));
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

    const q = query(collection(db, 'posts'), where('id', '==', id));

    const results : DocumentData[] = [];

    (await getDocs(q)).forEach((doc) => results.push(doc.data()));

    return {
        id: results[0]['id'],
        title: results[0]['title'],
        date: results[0]['date'],
        subheading: results[0]['subheading'],
        content: results[0]['content'],
    };
};