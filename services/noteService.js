import { ID } from "react-native-appwrite";
import databaseService from "./dataBaseService";
// Appwrite database and collection id
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  // Get Notes
  async getNotes() {
    const response = await databaseService.listDocuments(dbId, colId);
    
    // Safety 1: Handle Errors
    if (response.error) return { error: response.error };

    // Safety 2: If it's already wrapped (Scenario A), pass it.
    if (response.data) return response; 

    // Safety 3: If it's raw (Scenario B), wrap it ourselves.
    // This guarantees the screen NEVER crashes with "undefined".
    return { data: response.documents || [] }; 
  },

  // Add Note (You will need this back soon)
  async addNote(text) {
     if (!text) return { error: "Note text cannot be empty" };

     const data = {
       text: text,
       Created_AT: new Date().toISOString(),
      //  user_id: userId // If you have a user_id attribute
     };
     const response = await databaseService.createDocument(
      dbId, colId, data ,ID.unique());
    if (response?.error){
      return {error: response.error}
    }
     return {data: response};
  },
  //Update note
  async updateNote (id ,text){
    const response = await databaseService.updateDocument(dbId , colId,id,
      {
        text
      });
    if (response?.error){
      return {error: response.error};
    }
    return {data: response};
  },
  //Delete note
  async deleteNote (id){
    const response = await databaseService.deleteDocument(dbId , colId , id);
    if (response?.error){
      return {error: response.error};
    }
    return {success: true};
  },
};

export default noteService;