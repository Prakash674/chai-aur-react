const conf={
  appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId:String(import.meta.env.
  VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId:String(import.meta.env.
  VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId:String(import.meta.env.
  VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId:String(import.meta.env.
    VITE_APPWRITE_BUCKET_ID),
}
export default conf

// VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
// VITE_APPWRITE_PROJECT_ID="660e6beb91670d00fbb2"
// VITE_APPWRITE_DATABASE_ID="660e6ccc5cdc7927585d"
// VITE_APPWRITE_COLLECTION_ID="660e6d0438f185c6c733"
// VITE_APPWRITE_BUCKET_ID="660e79a73439ec59aabd"