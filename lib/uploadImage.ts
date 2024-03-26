import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile(
        "65f5fad71c5a6c7beb55",
        ID.unique(),
        file
    );
    return fileUploaded;
}

export default uploadImage;