import fs from 'fs/promises';

export default async function HomePage() {
  await fs.appendFile('log.txt', `<div>Home page accessed ${Date.now()}  \n <br /></div>`, 'utf8');
  const data = await fs.readFile('log.txt', 'utf8');

  return (
    <main className="">
      <div>{data}</div>
      <br />
    
    </main>
  );
}
