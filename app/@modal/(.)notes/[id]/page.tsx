'use client';

import { use } from 'react'; 
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import NotePreview from '@/components/NotePreview/NotePreview';

interface NoteModalPageProps {
  params: Promise<{ id: string }>; 
}

export default function NoteModalPage({ params }: NoteModalPageProps) {
  const router = useRouter();

  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview noteId={id} />
    </Modal>
  );
}