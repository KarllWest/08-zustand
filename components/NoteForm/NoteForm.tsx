'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useNoteStore, NoteTag } from '@/lib/store/noteStore';
import { createNote } from '@/lib/api';
import css from './NoteForm.module.css';

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
    <form className={css.form} onSubmit={(e) => { e.preventDefault(); mutation.mutate(draft); }}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          className={css.input}
          id="title"
          name="title"
          value={draft.title}
          onChange={(e) => setDraft({ title: e.target.value })}
          required
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select
          className={css.select}
          id="tag"
          name="tag"
          value={draft.tag}
          onChange={(e) => setDraft({ tag: e.target.value as NoteTag })}
        >
          {['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'].map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          className={css.textarea}
          id="content"
          name="content"
          value={draft.content}
          onChange={(e) => setDraft({ content: e.target.value })}
          required
        />
      </div>

      <div className={css.actions}>
        <button className={css.cancelButton} type="button" onClick={() => router.back()}>Cancel</button>
        <button className={css.submitButton} type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
}
