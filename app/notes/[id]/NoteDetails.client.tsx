'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Note } from '@/types/note';
import { deleteNote } from '@/lib/api';

interface NoteDetailsProps {
  note: Note;
}

export default function NoteDetails({ note }: NoteDetailsProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteNote(note.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      router.push('/notes');
    },
  });

  return (
    <article style={{ padding: '20px', maxWidth: '600px' }}>
      <button
        onClick={() => router.back()}
        style={{ marginBottom: '20px', cursor: 'pointer' }}
      >
        ← Back
      </button>

      <h1>{note.title}</h1>
      <div style={{ margin: '10px 0', color: '#666' }}>
        <span>Category: <strong>{note.tag || 'General'}</strong></span>
      </div>
      <hr />
      <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
        {note.content}
      </div>

      <button
        onClick={() => mutation.mutate()}
        disabled={mutation.isPending}
        style={{ marginTop: '20px', cursor: 'pointer' }}
      >
        {mutation.isPending ? 'Deleting...' : 'Delete note'}
      </button>
    </article>
  );
}