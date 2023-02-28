import Boom from "@hapi/boom";
//import { fakeListings } from "./fake-data";
import { db } from '../database';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        //const listing = fakeListings.find(listing => listing.id === id);
        const { results } = await db.query(
            'select * from listings where id=?',
            [id],
        );
        const listing = results[0];
        if(!listing) throw Boom.notFound(`Listing does not exist with id ${id}`);
        return listing;
    }
}