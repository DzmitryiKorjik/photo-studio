import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
};

const server = createServer(async (req, res) => {
  const filePath = resolve(`../${req.url === '/' ? 'index.html' : req.url}`);
  const ext = extname(filePath);
  const mimeType = mimeTypes[ext] || 'text/plain';

  try {
    const content = await readFile(filePath, 'utf-8');
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(content);
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000');
});
// run with `node server.mjs`