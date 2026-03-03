import css from './Home.module.css';

export default function Home() {
  return (
    <main className={css.main}>
      <h1>Welcome to NoteHub</h1>
      <p>This is where your notes will appear.</p>
    </main>
  );
}