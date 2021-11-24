import * as admin from 'firebase-admin';
import { deleteUser } from './delete_user';

const getBackupBucket = () => admin.storage().bucket('backup.lunasea.app');

export { deleteUser, getBackupBucket };
