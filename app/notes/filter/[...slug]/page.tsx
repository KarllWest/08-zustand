import { fetchNotes } from '@/lib/api/notes';
import NoteList from '@/components/NoteList/NoteList';
import NotesPageComponent from '@/components/NotesPage/NotesPage';

export default async function FilterPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const category = slug?.[0] || 'all';

  try {
    const notes = await fetchNotes(category);
    return (
      <NotesPageComponent>
        <NoteList notes={notes} />
      </NotesPageComponent>
    );
  } catch (error) {
    return (
      <NotesPageComponent>
        <p style={{ color: 'red' }}>Помилка API (403). Потрібен токен авторизації.</p>
      </NotesPageComponent>
    );
  }
}