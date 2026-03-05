import NotesClient from './Notes.client';

export default async function FilterPage({ params }: { params: Promise<{ slug: string[] }> }) {
  
  const resolvedParams = await params;
  
  const currentTag = resolvedParams.slug[0];

  return (
    <div>
      <NotesClient tag={currentTag} />
    </div>
  );
}