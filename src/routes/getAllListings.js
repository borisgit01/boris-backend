//import { fakeListings } from "./fake-data";
import { db } from '../database';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: async (req, h) => {
        //return fakeListings;
        const { results } = await db.query(
            'select * from listings'
        );
        return results;
    }
}