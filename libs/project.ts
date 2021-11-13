import { collection, query, getDocs, where, DocumentData } from "@firebase/firestore";

import { db } from "../config";
import { Skill, Repo, Project } from "./types";

import USE_MOCK, { mockGetAllProjects } from "./mock";

/**
 * Get all existing projects.
 * @returns An array containing all existing projects.
 */
export const getAllProjects = async () : Promise<Project[]> => {
    if (USE_MOCK)
        return await mockGetAllProjects();

    const projs : Repo[] = [];
    const projects : Project[] = [];

    const q = query(collection(db, 'projects'));

    let temp;

    (await getDocs(q)).forEach(async (doc) => {
        temp = doc.data();

        projs.push({
            name: temp['name'],
            description: temp['description'],
            href: temp['href'],
            technologies: temp['technologies'],
        });
    });

    let techs : string[];

    for (let i = 0; i < projs.length; ++i) {
        const repo = projs[i];

        techs = repo.technologies;

        projects.push({
            name: repo.name,
            description: repo.description,
            href: repo.href,
            technologies: await getAllProjectTechnologies(techs),
        });
    }

    return projects;
};

/**
 * Utility method.
 * 
 * Converts an array of strings (each string being the name of a technology) into an array
 * of type `Skill`.
 * @param technologies An array of strings. Each element must be the name of a technology
 * @returns An `Skill` array.
 */
export const getAllProjectTechnologies = async (technologies : string[]) : Promise<Skill[]> => {
    let techs : Skill[] = [];

    for (let i = 0; i < technologies.length; ++i) {
        const tech = technologies[i];

        const q = query(collection(db, 'skills'), where('title', '==', tech));

        const snapshot : DocumentData[] = [];

        (await getDocs(q)).forEach((doc) => {
            snapshot.push(doc.data());
        });

        techs.push({
            title: snapshot[0]['title'],
            src: snapshot[0]['src'],
            alt: snapshot[0]['alt'],
        });
    }

    return techs;
};