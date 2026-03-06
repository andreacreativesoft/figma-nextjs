const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/ID Bogdan/.claude/projects/D--ACSD-Projects-figma-to-wordpress/9deaa19e-c97d-4822-b86d-39835267fe61/tool-results/mcp-5be42bdf-4e8a-4b8c-930a-c739f16b4daa-get_metadata-1772639718241.txt'));
const text = data[0].text;
// Find frame tags with id and name
const re = /<frame\s+id="([^"]+)"\s+name="([^"]+)"/g;
let m;
while ((m = re.exec(text)) !== null) {
  console.log(m[1] + ': ' + m[2]);
}
