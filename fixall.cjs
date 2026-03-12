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
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            // Script replacement (Vite assets or old assets/js)
            content = content.replace(/<script type="module" crossorigin src="\/assets\/main-[^"]+"><\/script>/g, '<script type="module" src="/src/js/main.js"></script>');
            content = content.replace(/<script type="module" crossorigin src="\/assets\/[^"]+"><\/script>/g, '<script type="module" src="/src/js/main.js"></script>');
            content = content.replace(/<script src="assets\/js\/main\.js"><\/script>/g, '<script type="module" src="/src/js/main.js"></script>');
            content = content.replace(/<script src="\/assets\/js\/main\.js"><\/script>/g, '<script type="module" src="/src/js/main.js"></script>');
            
            // CSS replacement
            content = content.replace(/<link rel="stylesheet" crossorigin href="\/assets\/main-[^"]+">/g, '<link rel="stylesheet" href="/src/css/style.css">');
            content = content.replace(/<link rel="stylesheet" crossorigin href="\/assets\/ticket_index-[^"]+">/g, '<link rel="stylesheet" href="/src/css/ticket.css">');
            content = content.replace(/<link rel="stylesheet" crossorigin href="\/assets\/style-[^"]+">/g, '<link rel="stylesheet" href="/src/css/style.css">');

            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Final Fix:', fullPath);
            }
        }
    }
}

processDir('.');
