import SidebarNotes from '@/components/SidebarNotes/SidebarNotes';

interface FilterSidebarProps {
  params: Promise<{ slug: string[] }>;
}

export default async function FilterSidebarPage({ params }: FilterSidebarProps) {
  const resolvedParams = await params;
  
  const currentCategory = resolvedParams.slug?.[0] || 'all';

  return (
    <aside>
      <SidebarNotes />
      <div style={{ marginTop: '20px', padding: '0 16px', fontSize: '12px', color: '#666' }}>
        Active: <strong>{currentCategory}</strong>
      </div>
    </aside>
  );
}