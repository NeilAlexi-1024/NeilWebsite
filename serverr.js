const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.write("<!doctype html>");
  res.write("<html><head><meta charset='utf-8'><title>Profile</title></head><body>");
  res.write("<h1 style='margin:0; font-size:48px;'>NEIL ALEXI V. TERRIBLE</h1>");
  res.write("<div style='margin-top:8px;'>BSIT-BA 4102</div>");
  res.write("<div style='margin-top:8px;'>FEAR DOES NOT MAKE US WEAK, FOR IT IS THE ONLY THING WE MUST CONQUER TO SUCCEED.</div>");
  res.write("</body></html>");

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});