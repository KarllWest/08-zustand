import { Metadata } from 'next';
import { fetchNoteById } from '@/lib/api/notes'; 

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const note = await fetchNoteById(params.id); 
  
  return {
    title: note.title,
    description: note.content.substring(0, 160),
    openGraph: {
      title: note.title,
      images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
    },
  };
}

export default function NotePage() {
  return <div>Note details...</div>;
}