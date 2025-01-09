import mongoose from "mongoose";

const diaryEntrySchema = new mongoose.Schema({
    id: { 
        type: String,
         required: true 
        },
    title: { 
        type: String,
         required: true 
        },
    content: {
         type: String,
          required: true
         },
    date: { 
        type: String, 
        required: true
     },
  });
  
const DiaryEntry = mongoose.model('DiaryEntry', diaryEntrySchema);

export default DiaryEntry;