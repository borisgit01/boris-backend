import * as admin from 'firebase-admin';
import { db } from '../database';

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = user.user_id;
        await db.query(
            'delete from listings where id=? and user_id=?',
            [id, userId],
        );
        return { message: 'Success!' };
    }
}