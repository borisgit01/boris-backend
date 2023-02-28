import { db } from '../database';

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'delete from listings where id=?',
            [id],
        );
        return { message: 'Success!' };
    }
}