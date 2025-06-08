import fs from "fs/promises";

const AppendFile = async () => {
  await fs.appendFile("log.txt", `${Date.now()}\n`, "utf8");
  const data = await fs.readFile("log.txt", "utf8");

  return (
    <main className="">
      <div><p>Mostra uma operação do lado do servidor<br />
      que adiciona e carrega um conteúdo de uma arquivo TXT para ser exibido na página.</p></div>
      <div className="my-4" style={{ whiteSpace: 'pre-wrap' }}>{data}</div>
      <br />
    </main>
  );
}

export default AppendFile;