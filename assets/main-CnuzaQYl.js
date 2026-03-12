import"./modulepreload-polyfill-B5Qt9EMX.js";document.addEventListener("DOMContentLoaded",()=>{u(),p(),m(),v(),y(),g(),w(),h(),document.getElementById("news-list")&&k(),document.getElementById("news-detail")&&L(),document.getElementById("news-all-list")&&b();const e=document.querySelector(".timetable-img-container");e&&e.addEventListener("click",()=>{const a=e.querySelector("img");if(a&&window.initModal){const n=document.querySelector(".modal"),t=n==null?void 0:n.querySelector("img");n&&t&&(t.src=a.src,n.classList.add("active"),document.body.style.overflow="hidden")}})});async function p(){try{const e=await fetch("./data/info.json");if(!e.ok)throw new Error("Info data not found");const a=await e.json();["event_name","event_name_en","catchphrase","date_short","date_html","time_html","venue_name","venue_address","fee_html","organizer"].forEach(t=>{document.querySelectorAll(`.info-${t}`).forEach(s=>{s.innerHTML=a[t]})})}catch(e){console.error("info.jsonの読み込みに失敗しました:",e)}}function u(){const e=document.querySelector(".nav-list");e&&(e.innerHTML=`
        <!-- ================= PC用メニュー ================= -->
        <li class="nav-item has-dropdown only-pc">
            <a href="/about/" class="nav-link">ビア博とは</a>
            <ul class="dropdown">
                <li><a href="/about/" class="dropdown-link">ビア博いわきとは</a></li>
                <li><a href="/guide/" class="dropdown-link">初めての方へ</a></li>
                <li><a href="/about/outline.html" class="dropdown-link">開催概要</a></li>
            </ul>
        </li>
        <li class="nav-item has-dropdown only-pc">
            <a href="/ticket/" class="nav-link">チケット</a>
            <ul class="dropdown">
                <li><a href="/ticket/" class="dropdown-link">ビア博いわき参加方法</a></li>
                <li><a href="/ticket/buy.html" class="dropdown-link">チケット購入（近日公開）</a></li>
            </ul>
        </li>
        <li class="nav-item only-pc">
            <a href="/timetable/" class="nav-link">タイムテーブル</a>
        </li>
        <li class="nav-item has-dropdown only-pc">
            <a href="/exhibitors/" class="nav-link">出店情報</a>
            <ul class="dropdown">
                <li><a href="/exhibitors/beers.html" class="dropdown-link">ブルワリー</a></li>
                <li><a href="/exhibitors/foods.html" class="dropdown-link">フード</a></li>
                <li><a href="/exhibitors/drinks.html" class="dropdown-link">ドリンク</a></li>
            </ul>
        </li>
        <li class="nav-item has-dropdown only-pc">
            <a href="/access/" class="nav-link">アクセス</a>
            <ul class="dropdown">
                <li><a href="/access/" class="dropdown-link">地図・アクセス方法</a></li>
                <li><a href="/access/parking.html" class="dropdown-link">近隣の駐車場</a></li>
            </ul>
        </li>
        <li class="nav-item only-pc">
            <a href="/news/" class="nav-link">ニュース</a>
        </li>
        <li class="nav-item has-dropdown only-pc">
            <a href="/guide/" class="nav-link">ご利用ガイド</a>
            <ul class="dropdown">
                <li><a href="/contact/" class="dropdown-link">お問い合わせ</a></li>
                <li><a href="/guide/faq.html" class="dropdown-link">よくある質問</a></li>
            </ul>
        </li>

        <!-- ================= スマホ用メニュー ================= -->
        <li class="nav-item only-sp"><a href="/about/outline.html" class="nav-link">イベント概要</a></li>
        <li class="nav-item only-sp"><a href="/ticket/" class="nav-link">チケット</a></li>
        <li class="nav-item only-sp"><a href="/timetable/" class="nav-link">タイムテーブル</a></li>
        <li class="nav-item only-sp"><a href="/exhibitors/" class="nav-link">出店情報</a></li>
        <li class="nav-item only-sp"><a href="/access/" class="nav-link">アクセス</a></li>
        <li class="nav-item only-sp"><a href="/news/" class="nav-link">ニュース</a></li>
        <li class="nav-item only-sp"><a href="/contact/" class="nav-link">お問い合わせ</a></li>

    `)}function w(){window.location.pathname==="/"||window.location.pathname.endsWith("/index.html")||window.location.pathname.endsWith("/"),document.querySelectorAll(".logo").forEach(e=>{e.innerHTML='<img src="/assets/img/logo3.png" alt="ビア博いわき" class="logo-img">'})}function h(){const e="https://www.facebook.com/share/1Dox9zMMon/",a="https://www.instagram.com/beer_expo_iwaki?igsh=a3d5M3U2endramh2",n=document.querySelector(".nav-list");if(n&&!n.querySelector(".nav-sns")){const s=document.createElement("li");s.className="nav-item nav-sns",s.innerHTML=`
            <a href="${e}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Facebook">
                <span style="font-family: sans-serif; font-weight: bold;">f</span>
            </a>
            <a href="${a}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Instagram">
                <span>📷</span>
            </a>
        `,window.innerWidth>768&&n.insertAdjacentHTML("beforeend",s.outerHTML)}const t=document.querySelector(".footer-social");t&&(t.innerHTML=`
            <a href="${e}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">f</a>
            <a href="${a}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram">📷</a>
        `)}function m(){const e=document.querySelector(".hamburger"),a=document.querySelector(".nav-list");!e||!a||(e.addEventListener("click",n=>{n.stopPropagation();const t=a.classList.contains("active");e.classList.toggle("active"),a.classList.toggle("active"),document.body.style.overflow=t?"":"hidden"}),a.addEventListener("click",n=>{const t=n.target.closest("a");if(!t)return;const s=t.closest(".nav-item.has-dropdown");s&&t.classList.contains("nav-link")&&window.innerWidth<=768&&!s.classList.contains("active")||(n.preventDefault(),e.classList.remove("active"),a.classList.remove("active"),document.body.style.overflow="",setTimeout(()=>{window.location.href=t.href},50))}),document.addEventListener("click",n=>{a.classList.contains("active")&&!a.contains(n.target)&&!e.contains(n.target)&&(e.classList.remove("active"),a.classList.remove("active"),document.body.style.overflow="")}))}function v(){const e=document.querySelectorAll(".nav-item.has-dropdown"),a=()=>window.matchMedia("(hover: none)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0;e.forEach(n=>{n.querySelector(".nav-link").addEventListener("click",s=>{(window.innerWidth<=768||a())&&(n.classList.contains("active")||(s.preventDefault(),n.classList.add("active"),e.forEach(o=>{o!==n&&o.classList.remove("active")})))})}),document.addEventListener("click",n=>{n.target.closest(".nav-item.has-dropdown")||e.forEach(t=>t.classList.remove("active"))}),window.addEventListener("resize",()=>{window.innerWidth>768&&!a()&&e.forEach(n=>n.classList.remove("active"))})}function y(){document.querySelectorAll(".accordion-header").forEach(a=>{a.addEventListener("click",()=>{const n=a.parentElement,t=n.classList.contains("active");n.classList.toggle("active",!t)})})}function g(){const e=document.querySelector(".modal"),a=e==null?void 0:e.querySelector("img"),n=e==null?void 0:e.querySelector(".modal-close");if(!e)return;document.querySelectorAll("[data-modal-src], .gallery-item img, .map-image").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.modalSrc||s.src;a&&(a.src=o),e.classList.add("active"),document.body.style.overflow="hidden"})}),n==null||n.addEventListener("click",()=>t()),e.addEventListener("click",s=>{s.target===e&&t()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&t()});function t(){e.classList.remove("active"),document.body.style.overflow=""}}async function k(){const e=document.querySelector("#news-list");if(!e)return;try{const n=await fetch("../data/news.json");if(!n.ok){const s=await fetch("./data/news.json");if(!s.ok)throw new Error("News data not found");const o=await s.json();return a(e,o)}const t=await n.json();return a(e,t)}catch(n){console.warn("ニュースデータの読み込みに失敗しました:",n),e.innerHTML='<p class="text-center" style="padding: 1rem; color: #666;">ニュース情報を読み込み中...</p>'}function a(n,t){const s=t.sort((i,l)=>i.pinned&&!l.pinned?-1:!i.pinned&&l.pinned?1:new Date(l.date)-new Date(i.date)),c=window.innerWidth<=768?5:8,r=s.slice(0,c);n.innerHTML=r.map(i=>`
            <a href="/news/?slug=${i.slug}" class="news-item ${i.pinned?"pinned":""}">
                <span class="news-date">${d(i.date)}</span>
                <span class="news-category cat-${i.category}">${f(i.category)}</span>
                <span class="news-item-title">${i.title}</span>
            </a>
        `).join("")}}async function L(){const e=document.querySelector("#news-detail");if(!e)return;const n=new URLSearchParams(window.location.search).get("slug");if(!n){e.innerHTML="<p>ニュースが見つかりません。</p>";return}try{const s=await fetch("../data/news.json");if(!s.ok){const c=await fetch("./data/news.json");if(!c.ok)throw new Error("News data not found");const r=await c.json();return t(e,r,n)}const o=await s.json();return t(e,o,n)}catch(s){console.error("ニュース詳細の読み込みに失敗しました:",s),e.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}function t(s,o,c){const r=o.find(i=>i.slug===c);if(!r){s.innerHTML="<p>ニュースが見つかりません。</p>";return}document.title=`${r.title} | ビア博いわき`,s.innerHTML=`
            <article class="news-detail">
                <header class="news-detail-header">
                    <div class="news-detail-meta">
                        <span class="news-date">${d(r.date)}</span>
                        <span class="news-category cat-${r.category}">${f(r.category)}</span>
                    </div>
                    <h1 class="news-detail-title">${r.title}</h1>
                </header>
                <div class="news-detail-body">
                    ${r.content||"<p>詳細情報は準備中です。</p>"}
                </div>
                <div style="margin-top: 2rem; text-align: center;">
                    <a href="/news/" class="btn btn-secondary">← ニュース一覧へ戻る</a>
                </div>
            </article>
        `}}async function b(){const e=document.querySelector("#news-all-list");if(!e)return;try{const n=await fetch("../data/news.json");if(!n.ok){const s=await fetch("./data/news.json");if(!s.ok)throw new Error("News data not found");const o=await s.json();return a(e,o)}const t=await n.json();return a(e,t)}catch(n){console.error("ニュース一覧の読み込みに失敗しました:",n),e.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}function a(n,t){const s=t.sort((o,c)=>o.pinned&&!c.pinned?-1:!o.pinned&&c.pinned?1:new Date(c.date)-new Date(o.date));n.innerHTML=s.map(o=>`
            <a href="/news/?slug=${o.slug}" class="news-item ${o.pinned?"pinned":""}">
                <span class="news-date">${d(o.date)}</span>
                <span class="news-category cat-${o.category}">${f(o.category)}</span>
                <span class="news-item-title">${o.title}</span>
            </a>
        `).join("")}}function d(e){const a=new Date(e),n=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0");return`${n}.${t}.${s}`}function f(e){return{event:"イベント",ticket:"チケット",shop:"出店",info:"お知らせ"}[e]||"お知らせ"}async function $(){const e=document.querySelector("#shops-list");if(!e)return;try{const n=await fetch("../data/shops.json");if(!n.ok){const s=await fetch("./data/shops.json");if(!s.ok)throw new Error("Shops data not found");const o=await s.json();return a(e,o)}const t=await n.json();return a(e,t)}catch(n){console.error("ショップ一覧の読み込みに失敗しました:",n),e.innerHTML="<p>準備中</p>"}function a(n,t){n.innerHTML=t.map(s=>`
            <div class="shop-card">
                <div class="shop-logo">
                    ${s.logo?`<img src="${s.logo}" alt="${s.name}">`:'<span style="font-size: 2rem;">🍺</span>'}
                </div>
                <div class="shop-info">
                    <h3 class="shop-name">${s.name}</h3>
                    <p class="shop-region">${s.region}</p>
                    <p class="shop-style">${s.style}</p>
                    ${s.sns?`<a href="${s.sns}" target="_blank" class="shop-sns">SNS</a>`:""}
                </div>
        `).join("")}}async function S(){const e=document.querySelector("#beers-list");if(!e)return;try{const n=await fetch("../data/beers.json");if(!n.ok){const s=await fetch("./data/beers.json");if(!s.ok)throw new Error("Beers data not found");const o=await s.json();return a(e,o)}const t=await n.json();return a(e,t)}catch(n){console.error("ビール一覧の読み込みに失敗しました:",n),e.innerHTML="<p>準備中</p>"}function a(n,t){n.innerHTML=t.map(s=>`
            <div class="card">
                <div class="card-body">
                    <span class="tag tag-primary">${s.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${s.name}</h3>
                    <p class="card-text">
                        <strong>スタイル:</strong> ${s.style}<br>
                        <strong>ABV:</strong> ${s.abv}<br>
                        <strong>価格:</strong> ${s.price}
                    </p>
                </div>
        `).join("")}}async function E(){const e=document.querySelector("#foods-list");if(!e)return;try{const n=await fetch("../data/foods.json");if(!n.ok){const s=await fetch("./data/foods.json");if(!s.ok)throw new Error("Foods data not found");const o=await s.json();return a(e,o)}const t=await n.json();return a(e,t)}catch(n){console.error("フード一覧の読み込みに失敗しました:",n),e.innerHTML="<p>準備中</p>"}function a(n,t){n.innerHTML=t.map(s=>`
            <div class="card">
                <div class="card-body">
                    <span class="tag">${s.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${s.name}</h3>
                    <p class="card-text">
                        <strong>価格:</strong> ${s.price}
                        ${s.allergen?`<br><small>⚠️ ${s.allergen}</small>`:""}
                    </p>
            </div>
        `).join("")}}document.querySelector("#shops-list")&&$();document.querySelector("#beers-list")&&S();document.querySelector("#foods-list")&&E();
