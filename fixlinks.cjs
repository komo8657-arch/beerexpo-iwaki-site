const fs = require('fs');
const fix = (f, pat, rep) => {
    if(!fs.existsSync(f)) return;
    let c = fs.readFileSync(f, 'utf8');
    if(c.includes(pat)) {
        c = c.replace(new RegExp(pat.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), rep);
        fs.writeFileSync(f, c);
        console.log('Fixed ' + f);
    } else {
        console.log('Not found in ' + f);
    }
};
fix('index.html', '<a href="/ticket/" class="btn btn-primary">', '<a href="/tickets.html" class="btn btn-primary">');
fix('guide/index.html', 'src="/image/guide/guide1.png"', 'src="/image/guide/guide1.jpg"');
fix('ticket/index.html', 'src="/assets/img/ticket-buy.png"', 'src="/assets/img/ticket-buy.png"'); // 確認用
