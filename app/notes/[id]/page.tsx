import { Metadata } from 'next';
import { fetchNoteById } from '@/lib/api/notes'; 

interface Props {
  params: Promise<{ id: string }>; 
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; 
  
  try {
    const note = await fetchNoteById(resolvedParams.id); 
    
    return {
      title: note.title,
      description: note.content?.substring(0, 160) || "No content",
      openGraph: {
        title: note.title,
        images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
      },
    };
  } catch (error) {
    return { title: 'Note not found' };
  }
}

export default async function NotePage({ params }: Props) {
  const resolvedParams = await params; 
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Note ID: {resolvedParams.id}</h1>
      <p>Тут будуть деталі вашої нотатки.</p>
    </div>
  );
}