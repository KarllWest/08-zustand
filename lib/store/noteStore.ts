import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

interface NoteDraft {
  title: string;
  content: string;
  tag: NoteTag;
}

interface NoteState {
  draft: NoteDraft;
  setDraft: (update: Partial<NoteDraft>) => void;
  resetDraft: () => void;
}

export const useNoteStore = create<NoteState>()(
  persist(
    (set) => ({
      draft: { title: '', content: '', tag: 'Todo' },
      setDraft: (update) => set((state) => ({ 
        draft: { ...state.draft, ...update } 
      })),
      resetDraft: () => set({ 
        draft: { title: '', content: '', tag: 'Todo' } 
      }),
    }),
    { name: 'note-draft-storage' }
  )
);