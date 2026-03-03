'use client';
import { Note } from '@/types/note';

export default function NoteDetails({ note }: { note: Note }) {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}