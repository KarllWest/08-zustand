'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useNoteStore } from '@/lib/store/noteStore';
import { createNote } from '@/lib/api';

export default function NoteForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { draft, setDraft, resetDraft } = useNoteStore();

  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      resetDraft();
      router.push('/notes');
    },
  });

  return (
    <form onSubmit={(e) => { e.preventDefault(); mutation.mutate(draft); }}>
      <label htmlFor="title">Title</label>
      <input 
        id="title" name="title" 
        value={draft.title} 
        onChange={(e) => setDraft({ title: e.target.value })} 
        required 
      />

      <label htmlFor="tag">Tag</label>
      <select id="tag" name="tag" value={draft.tag} onChange={(e) => setDraft({ tag: e.target.value as any })}>
        {['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'].map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="content">Content</label>
      <textarea
        id="content" 
        name="content"
        value={draft.content}
        onChange={(e) => setDraft({ content: e.target.value })}
        required
      />

      <button type="button" onClick={() => router.back()}>Cancel</button>
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}