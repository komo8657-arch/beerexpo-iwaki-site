import"./modulepreload-polyfill-B5Qt9EMX.js";document.addEventListener("DOMContentLoaded",()=>{f(),p(),h(),m(),v(),y(),u(),w(),document.getElementById("news-list")&&g(),document.getElementById("news-detail")&&k(),document.getElementById("news-all-list")&&L();const e=document.querySelector(".timetable-img-container");e&&e.addEventListener("click",()=>{const n=e.querySelector("img");if(n&&window.initModal){const s=document.querySelector(".modal"),a=s==null?void 0:s.querySelector("img");s&&a&&(a.src=n.src,s.classList.add("active"),document.body.style.overflow="hidden")}})});async function p(){try{const e=await fetch("/data/info.json");if(!e.ok)throw new Error("Info data not found");const n=await e.json();["event_name","event_name_en","catchphrase","date_short","date_html","time_html","venue_name","venue_address","fee_html","organizer"].forEach(a=>{document.querySelectorAll(`.info-${a}`).forEach(t=>{t.innerHTML=n[a]})})}catch(e){console.error("info.jsonの読み込みに失敗しました:",e)}}function f(){const e=document.querySelector(".nav-list");e&&(e.innerHTML=`
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

    `)}function u(){window.location.pathname==="/"||window.location.pathname.endsWith("/index.html")||window.location.pathname.endsWith("/"),document.querySelectorAll(".logo").forEach(e=>{e.innerHTML='<img src="/assets/img/logo3.png" alt="ビア博いわき" class="logo-img">'})}function w(){const e="https://www.facebook.com/share/1Dox9zMMon/",n="https://www.instagram.com/beer_expo_iwaki?igsh=a3d5M3U2endramh2",s=document.querySelector(".nav-list");if(s&&!s.querySelector(".nav-sns")){const t=document.createElement("li");t.className="nav-item nav-sns",t.innerHTML=`
            <a href="${e}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Facebook">
                <span style="font-family: sans-serif; font-weight: bold;">f</span>
            </a>
            <a href="${n}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Instagram">
                <span>📷</span>
            </a>
        `,window.innerWidth>768&&s.insertAdjacentHTML("beforeend",t.outerHTML)}const a=document.querySelector(".footer-social");a&&(a.innerHTML=`
            <a href="${e}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">f</a>
            <a href="${n}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram">📷</a>
        `)}function h(){const e=document.querySelector(".hamburger"),n=document.querySelector(".nav-list");!e||!n||(e.addEventListener("click",()=>{e.classList.toggle("active"),n.classList.toggle("active"),document.body.style.overflow=n.classList.contains("active")?"hidden":""}),n.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>{s.parentElement.classList.contains("has-dropdown")||(e.classList.remove("active"),n.classList.remove("active"),document.body.style.overflow="")})}))}function m(){const e=document.querySelectorAll(".nav-item.has-dropdown"),n=()=>window.matchMedia("(hover: none)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0;e.forEach(s=>{s.querySelector(".nav-link").addEventListener("click",t=>{(window.innerWidth<=768||n())&&(t.preventDefault(),s.classList.toggle("active"),e.forEach(o=>{o!==s&&o.classList.remove("active")}))})}),document.addEventListener("click",s=>{s.target.closest(".nav-item.has-dropdown")||e.forEach(a=>a.classList.remove("active"))}),window.addEventListener("resize",()=>{window.innerWidth>768&&!n()&&e.forEach(s=>s.classList.remove("active"))})}function v(){document.querySelectorAll(".accordion-header").forEach(n=>{n.addEventListener("click",()=>{const s=n.parentElement,a=s.classList.contains("active");s.classList.toggle("active",!a)})})}function y(){const e=document.querySelector(".modal"),n=e==null?void 0:e.querySelector("img"),s=e==null?void 0:e.querySelector(".modal-close");if(!e)return;document.querySelectorAll("[data-modal-src], .gallery-item img, .map-image").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.modalSrc||t.src;n&&(n.src=o),e.classList.add("active"),document.body.style.overflow="hidden"})}),s==null||s.addEventListener("click",()=>a()),e.addEventListener("click",t=>{t.target===e&&a()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&a()});function a(){e.classList.remove("active"),document.body.style.overflow=""}}async function g(){const e=document.querySelector("#news-list");if(e)try{const n=await fetch("/data/news.json");if(!n.ok)throw new Error("News data not found");const a=(await n.json()).sort((i,l)=>i.pinned&&!l.pinned?-1:!i.pinned&&l.pinned?1:new Date(l.date)-new Date(i.date)),o=window.innerWidth<=768?5:8,r=a.slice(0,o);e.innerHTML=r.map(i=>`
            <a href="/news/?slug=${i.slug}" class="news-item ${i.pinned?"pinned":""}">
                <span class="news-date">${c(i.date)}</span>
                <span class="news-category cat-${i.category}">${d(i.category)}</span>
                <span class="news-item-title">${i.title}</span>
            </a>
        `).join("")}catch(n){console.warn("ニュースデータの読み込みに失敗しました:",n),e.innerHTML='<p class="text-center" style="padding: 1rem; color: #666;">ニュース情報を読み込み中...</p>'}}async function k(){const e=document.querySelector("#news-detail");if(!e)return;const s=new URLSearchParams(window.location.search).get("slug");if(!s){e.innerHTML="<p>ニュースが見つかりません。</p>";return}try{const a=await fetch("/data/news.json");if(!a.ok)throw new Error("News data not found");const o=(await a.json()).find(r=>r.slug===s);if(!o){e.innerHTML="<p>ニュースが見つかりません。</p>";return}document.title=`${o.title} | ビア博いわき`,e.innerHTML=`
            <article class="news-detail">
                <header class="news-detail-header">
                    <div class="news-detail-meta">
                        <span class="news-date">${c(o.date)}</span>
                        <span class="news-category cat-${o.category}">${d(o.category)}</span>
                    </div>
                    <h1 class="news-detail-title">${o.title}</h1>
                </header>
                <div class="news-detail-body">
                    ${o.content||"<p>詳細情報は準備中です。</p>"}
                </div>
                <div style="margin-top: 2rem; text-align: center;">
                    <a href="/news/" class="btn btn-secondary">← ニュース一覧へ戻る</a>
                </div>
            </article>
        `}catch(a){console.error("ニュース詳細の読み込みに失敗しました:",a),e.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}}async function L(){const e=document.querySelector("#news-all-list");if(e)try{const n=await fetch("/data/news.json");if(!n.ok)throw new Error("News data not found");const a=(await n.json()).sort((t,o)=>t.pinned&&!o.pinned?-1:!t.pinned&&o.pinned?1:new Date(o.date)-new Date(t.date));e.innerHTML=a.map(t=>`
            <a href="/news/?slug=${t.slug}" class="news-item ${t.pinned?"pinned":""}">
                <span class="news-date">${c(t.date)}</span>
                <span class="news-category cat-${t.category}">${d(t.category)}</span>
                <span class="news-item-title">${t.title}</span>
            </a>
        `).join("")}catch(n){console.error("ニュース一覧の読み込みに失敗しました:",n),e.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}}function c(e){const n=new Date(e),s=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),t=String(n.getDate()).padStart(2,"0");return`${s}.${a}.${t}`}function d(e){return{event:"イベント",ticket:"チケット",shop:"出店",info:"お知らせ"}[e]||"お知らせ"}async function b(){const e=document.querySelector("#shops-list");if(e)try{const n=await fetch("/data/shops.json");if(!n.ok)throw new Error("Shops data not found");const s=await n.json();e.innerHTML=s.map(a=>`
            <div class="shop-card">
                <div class="shop-logo">
                    ${a.logo?`<img src="${a.logo}" alt="${a.name}">`:'<span style="font-size: 2rem;">🍺</span>'}
                </div>
                <div class="shop-info">
                    <h3 class="shop-name">${a.name}</h3>
                    <p class="shop-region">${a.region}</p>
                    <p class="shop-style">${a.style}</p>
                    ${a.sns?`<a href="${a.sns}" target="_blank" class="shop-sns">SNS</a>`:""}
                </div>
            </div>
        `).join("")}catch(n){console.error(n),e.innerHTML="<p>出店情報を読み込み中...</p>"}}async function $(){const e=document.querySelector("#beers-list");if(e)try{const n=await fetch("/data/beers.json");if(!n.ok)throw new Error("Beers data not found");const s=await n.json();e.innerHTML=s.map(a=>`
            <div class="card">
                <div class="card-body">
                    <span class="tag tag-primary">${a.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${a.name}</h3>
                    <p class="card-text">
                        <strong>スタイル:</strong> ${a.style}<br>
                        <strong>ABV:</strong> ${a.abv}<br>
                        <strong>価格:</strong> ${a.price}
                    </p>
                </div>
            </div>
        `).join("")}catch(n){console.error(n),e.innerHTML="<p>ビール情報を読み込み中...</p>"}}async function S(){const e=document.querySelector("#foods-list");if(e)try{const n=await fetch("/data/foods.json");if(!n.ok)throw new Error("Foods data not found");const s=await n.json();e.innerHTML=s.map(a=>`
            <div class="card">
                <div class="card-body">
                    <span class="tag">${a.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${a.name}</h3>
                    <p class="card-text">
                        <strong>価格:</strong> ${a.price}
                        ${a.allergen?`<br><small>⚠️ ${a.allergen}</small>`:""}
                    </p>
                </div>
            </div>
        `).join("")}catch(n){console.error(n),e.innerHTML="<p>フード情報を読み込み中...</p>"}}document.querySelector("#shops-list")&&b();document.querySelector("#beers-list")&&$();document.querySelector("#foods-list")&&S();
