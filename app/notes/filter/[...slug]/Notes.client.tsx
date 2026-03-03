'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';

export default function NotesClient({ category }: { category: string }) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  
  const [page, setPage] = useState(1);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); 
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  const { data, isLoading } = useQuery({
    queryKey: ['notes', category, debouncedSearch, page],
    queryFn: () => fetchNotes(category),
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', gap: '10px' }}>
        <SearchBox value={search} onChange={setSearch} />
        
        <button 
          onClick={() => router.push('/notes/action/create')}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          + New Note
        </button>
      </div>

      {isLoading ? (
        <p>Loading notes...</p>
      ) : (
        <>
          <NoteList notes={data || []} />
          
          <div style={{ marginTop: '20px' }}>
            <Pagination 
              currentPage={page} 
              totalPages={10} 
              basePath={`/notes/filter/${category}?page=`} 
            />
          </div>
        </>
      )}
    </div>
  );
}