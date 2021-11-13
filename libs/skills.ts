import { db } from "../config";

import { Skill } from "./types";
import USE_MOCK, { mockGetAllSkills } from "./mock";
import { query, collection, DocumentData, getDocs } from "@firebase/firestore";

/**
 * Get all existing skills.
 * @returns An array containing all existing skills.
 */
export const getAllSkills = async () : Promise<Skill[]> => {
    if (USE_MOCK)
        return await mockGetAllSkills();

    // create an empty query, to select all docs from the 'skills' collection
    const q = query(collection(db, 'skills'));

    const snapshot : DocumentData[] = [];
    
    (await getDocs(q)).forEach((doc) => (
        snapshot.push(doc.data())
    ));

    const skills = snapshot.map((doc) => (
        { 
            title: doc['title'],
            src: doc['src'],
            alt: doc['alt'],
        }
    ));

    return skills;
};