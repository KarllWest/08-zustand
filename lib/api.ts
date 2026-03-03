import axios from 'axios';
import { Note, CreateNoteDto } from '@/types/note';

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
});

api.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN; 
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchNotes = async (category?: string): Promise<Note[]> => {
  const url = category && category !== 'all' ? `/notes?category=${category}` : '/notes';
  
  try {
    const response = await api.get(url);
    const result = response.data;
    if (result && Array.isArray(result.notes)) {
      return result.notes;
    }
    if (Array.isArray(result)) return result;
    
    return [];
  } catch (error) {
    console.error("Fetch notes error:", error);
    return []; 
  }
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get(`/notes/${id}`);
  return data.data || data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};

export const createNote = async (note: CreateNoteDto): Promise<Note> => {
  const { data } = await api.post('/notes', note);
  return data.data || data;
};