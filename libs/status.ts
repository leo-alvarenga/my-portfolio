import { db } from "../config";
import { collection, query, getDocs, DocumentData } from "@firebase/firestore";

import { Status } from "./types";
import USE_MOCK, { mockGetSingleRandomStatus } from "./mock";

export const getSingleRandomStatus = async () : Promise<Status> => {
    if (USE_MOCK)
        return await mockGetSingleRandomStatus();

    const q = query(collection(db, 'status'));

    const snapshot : DocumentData[] = [];
    const status : Status[] = [];

    (await getDocs(q)).forEach((doc) => {
        snapshot.push(doc.data());
    });

    const max = snapshot.length;

    for (let i = 0; i < max; ++i) {
        const temp = snapshot[i];
        
        status.push({
            title: temp['title'],
            src: temp['src'],
        });
    }

    if (max > 1) {
        return status[Math.floor(Math.random() * max)];
    }

    return status[0];
};