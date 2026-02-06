import { database } from './appwrite';
const databaseService = {
  // List Documents
  async listDocuments(dbId, colId, queries = []) {
    try {
      const response = await database.listDocuments(dbId, colId, queries);
      
      // CRITICAL: You must return { data: ... } here!
      // If you just 'return response;', your screen will crash.
      return { data: response.documents || [], error: null }; 
      
    } catch (error) {
      console.error('Error fetching documents:', error.message);
      return { error: error.message };
    }
  },
  //Create document
  async createDocument(dbId,colId,data , id='null'){
    try {
      
      const response = await database.createDocument(dbId ,colId, id ||undefined, data);
      return response;
    }catch (error){
      console.error('error creating document' , error.message);
      return{
        error : error.message,
      };
    }
  },
  //Update document
  async updateDocument(dbId,colId,id,data){
    try {
      return await database.updateDocument(dbId,colId,id,data);
    } catch (error) {
      console.error('error updating document' , error.message);
      return{
        error : error.message,
      };
    }
  },
  //Delete document
  async deleteDocument(dbId,colId,id){
    try {
      await database.deleteDocument(dbId , colId ,id);
      return {success : true };
    } catch (error) {
      console.error('error deleting document' , error.message);
      return{
        error : error.message,
      };
    }
  }
};

export default databaseService;