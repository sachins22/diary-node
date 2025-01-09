import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import AsyncHandler from '../utils/AsyncHandler.js';
import DiaryEntry from '../models/diary.model.js';



// Create a new diary entry
const PostEntry = AsyncHandler(async (req, res) => {
  const { id, title, content, date } = req.body;

  if (!id || !title || !content || !date) {
    throw new ApiError(400, 'Missing required fields');
  }


  const newEntry = new DiaryEntry({
    id,
    title,
    content,
    date,
  });

  await newEntry.save();
  console.log(newEntry)
  return res
    .status(200)
    .json(new ApiResponse(200, newEntry, 'Diary Entry created successfully'));
});

// Get all diary entries
const GetAllEntries = AsyncHandler(async (req, res) => {
  const entries = await DiaryEntry.find();

  if (!entries.length) {
    throw new ApiError(404, 'No entries found');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, entries, 'All diary entries retrieved successfully'));
});

// Get a specific diary entry by ID
const GetEntryById = AsyncHandler(async (req, res) => {
  const entry = await DiaryEntry.findOne({ id: req.params.id });

  if (!entry) {
    throw new ApiError(404, 'Entry not found');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, entry, 'Diary Entry retrieved successfully'));
});

// Update a diary entry
const UpdateEntry = AsyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    throw new ApiError(400, 'Missing required fields');
  }

  const updatedEntry = await DiaryEntry.findOneAndUpdate(
    // { id: req.params.id },
    { title, content, date: new Date().toISOString().split('T')[0] },
    { new: true }
  );

  if (!updatedEntry) {
    throw new ApiError(404, 'Entry not found');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedEntry, 'Diary Entry updated successfully'));
});

// Delete a diary entry
const DeleteEntry = AsyncHandler(async (req, res) => {
  const deletedEntry = await DiaryEntry.findOneAndDelete({ id: req.params.id });

  if (!deletedEntry) {
    throw new ApiError(404, 'Entry not found');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, 'Diary Entry deleted successfully'));
});

export{
    PostEntry,
    GetAllEntries,
    GetEntryById,
    UpdateEntry,
    DeleteEntry
}