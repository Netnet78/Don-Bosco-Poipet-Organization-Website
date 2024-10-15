import PocketBase from 'pocketbase';

let pb: PocketBase | null = null;
/**
 * Initializes a PocketBase client and performs various operations on the 'users' collection.
 *
 * This function demonstrates the following PocketBase operations:
 * - Creating a PocketBase client instance
 * - Fetching a paginated list of records from the 'users' collection
 * - Fetching all records from the 'users' collection
 * - Fetching the first record that matches a specific filter
 *
 * @returns {Promise<void>} - A Promise that resolves when the operations are complete.
 */
const PocketBaseInitialize = (): PocketBase => {
    if (!pb) {
        pb = new PocketBase('http://127.0.0.1:8090');
    }
    return pb;
}

export {PocketBaseInitialize};