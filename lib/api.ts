import axios from 'axios';
import { Note, CreateNoteDto } from '@/types/note';

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
});

api.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  
  if (token && token !== 'undefined') {
    const cleanToken = token.trim().replace(/^["'](.+(?=["']$))["']$/, '$1');
    config.headers.Authorization = `Bearer ${cleanToken}`;
  }
  
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  
  return config;
});

export const fetchNotes = async (tag?: string, search?: string, page: number = 1) => {
  try {
    const params: Record<string, any> = {
      page: Number(page),
      // 🔥 limit: 10 ВИДАЛЕНО!
    };

    if (tag && tag !== 'all') {
      params.tag = tag;
    }

    if (search && search.trim()) {
      params.search = search.trim();
    }

    const { data } = await api.get('/notes', { params });
    return data;
  } catch (error: any) {
    console.error("🔥 ДЕТАЛІ ВАЛІДАЦІЇ:", JSON.stringify(error.response?.data, null, 2));
    throw error;
  }
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get(`/notes/${id}`);
  return data.data || data.note || data;
};

export const createNote = async (note: CreateNoteDto): Promise<Note> => {
  const { data } = await api.post('/notes', note);
  return data.data || data.note || data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};

export default api;