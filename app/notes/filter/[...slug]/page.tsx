import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const filterValue = params.slug[0]; 
  const title = `Notes filtered by ${filterValue} | NoteHub`;
  
  return {
    title,
    description: `Browse all notes categorized as ${filterValue}`,
    openGraph: {
      title,
      images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
    },
  };
}

export default function FilterPage({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1>Filter: {params.slug[0]}</h1>
    </div>
  );
}