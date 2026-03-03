'use client';

import { Note } from '@/types/note';
import css from './NotePreview.module.css'; 

interface NotePreviewProps {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewProps) {
  return (
    <div className={css.previewContainer}>
      <h2 className={css.title}>{note.title}</h2>
      <hr />
      <div className={css.content}>
        <p>{note.content}</p>
      </div>
      <div className={css.footer}>
        {note.tag && <span className={css.tag}>#{note.tag}</span>}
      </div>
    </div>
  );
}