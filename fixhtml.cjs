const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        if (item === 'node_modules' || item === 'dist' || item === 'public' || item.startsWith('.')) continue;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.html') && item !== 'index.html' || (dir === '.' && item !== 'index.html' && item.endsWith('.html'))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            if (content.match(/<script type="module" crossorigin src="\/assets\/[^"]+"><\/script>/)) {
                content = content.replace(/<script type="module" crossorigin src="\/assets\/[^"]+"><\/script>/g, '<script type="module" src="/src/js/main.js"></script>');
                changed = true;
            }
            if (content.match(/<link rel="stylesheet" crossorigin href="\/assets\/main-[^"]+">/)) {
                content = content.replace(/<link rel="stylesheet" crossorigin href="\/assets\/main-[^"]+">/g, '<link rel="stylesheet" href="/src/css/style.css">');
                changed = true;
            }
            if (content.match(/<link rel="stylesheet" crossorigin href="\/assets\/ticket_index-[^"]+">/)) {
                content = content.replace(/<link rel="stylesheet" crossorigin href="\/assets\/ticket_index-[^"]+">/g, '<link rel="stylesheet" href="/src/css/ticket.css">');
                changed = true;
            }

            if (changed) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed:', fullPath);
            }
        }
    }
}

processDir('.');
