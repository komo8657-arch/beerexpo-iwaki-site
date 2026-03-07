(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{p(),f(),h(),w(),v(),y(),u(),m(),document.getElementById("news-list")&&g(),document.getElementById("news-detail")&&L(),document.getElementById("news-all-list")&&k();const e=document.querySelector(".timetable-img-container");e&&e.addEventListener("click",()=>{const n=e.querySelector("img");if(n&&window.initModal){const a=document.querySelector(".modal"),t=a==null?void 0:a.querySelector("img");a&&t&&(t.src=n.src,a.classList.add("active"),document.body.style.overflow="hidden")}})});async function f(){try{const e=await fetch("/data/info.json");if(!e.ok)throw new Error("Info data not found");const n=await e.json();["event_name","event_name_en","catchphrase","date_short","date_html","time_html","venue_name","venue_address","fee_html","organizer"].forEach(t=>{document.querySelectorAll(`.info-${t}`).forEach(s=>{s.innerHTML=n[t]})})}catch(e){console.error("info.jsonの読み込みに失敗しました:",e)}}function p(){const e=document.querySelector(".nav-list");e&&(e.innerHTML=`
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

    `)}function u(){window.location.pathname==="/"||window.location.pathname.endsWith("/index.html")||window.location.pathname.endsWith("/"),document.querySelectorAll(".logo").forEach(e=>{e.innerHTML='<img src="/assets/img/logo3.png" alt="ビア博いわき" class="logo-img">'})}function m(){const e="https://www.facebook.com/share/1Dox9zMMon/",n="https://www.instagram.com/beer_expo_iwaki?igsh=a3d5M3U2endramh2",a=document.querySelector(".nav-list");if(a&&!a.querySelector(".nav-sns")){const s=document.createElement("li");s.className="nav-item nav-sns",s.innerHTML=`
            <a href="${e}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Facebook">
                <span style="font-family: sans-serif; font-weight: bold;">f</span>
            </a>
            <a href="${n}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Instagram">
                <span>📷</span>
            </a>
        `,window.innerWidth>768?a.insertAdjacentHTML("beforeend",s.outerHTML):a.appendChild(s)}const t=document.querySelector(".footer-social");t&&(t.innerHTML=`
            <a href="${e}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">f</a>
            <a href="${n}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram">📷</a>
        `)}function h(){const e=document.querySelector(".hamburger"),n=document.querySelector(".nav-list");!e||!n||(e.addEventListener("click",()=>{e.classList.toggle("active"),n.classList.toggle("active"),document.body.style.overflow=n.classList.contains("active")?"hidden":""}),n.querySelectorAll("a").forEach(a=>{a.addEventListener("click",()=>{a.parentElement.classList.contains("has-dropdown")||(e.classList.remove("active"),n.classList.remove("active"),document.body.style.overflow="")})}))}function w(){const e=document.querySelectorAll(".nav-item.has-dropdown"),n=()=>window.matchMedia("(hover: none)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0;e.forEach(a=>{a.querySelector(".nav-link").addEventListener("click",s=>{(window.innerWidth<=768||n())&&(s.preventDefault(),a.classList.toggle("active"),e.forEach(o=>{o!==a&&o.classList.remove("active")}))})}),document.addEventListener("click",a=>{a.target.closest(".nav-item.has-dropdown")||e.forEach(t=>t.classList.remove("active"))}),window.addEventListener("resize",()=>{window.innerWidth>768&&!n()&&e.forEach(a=>a.classList.remove("active"))})}function v(){document.querySelectorAll(".accordion-header").forEach(n=>{n.addEventListener("click",()=>{const a=n.parentElement,t=a.classList.contains("active");a.classList.toggle("active",!t)})})}function y(){const e=document.querySelector(".modal"),n=e==null?void 0:e.querySelector("img"),a=e==null?void 0:e.querySelector(".modal-close");if(!e)return;document.querySelectorAll("[data-modal-src], .gallery-item img, .map-image").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.modalSrc||s.src;n&&(n.src=o),e.classList.add("active"),document.body.style.overflow="hidden"})}),a==null||a.addEventListener("click",()=>t()),e.addEventListener("click",s=>{s.target===e&&t()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&t()});function t(){e.classList.remove("active"),document.body.style.overflow=""}}async function g(){const e=document.querySelector("#news-list");if(e)try{const n=await fetch("/data/news.json");if(!n.ok)throw new Error("News data not found");const t=(await n.json()).sort((i,l)=>i.pinned&&!l.pinned?-1:!i.pinned&&l.pinned?1:new Date(l.date)-new Date(i.date)),o=window.innerWidth<=768?5:8,r=t.slice(0,o);e.innerHTML=r.map(i=>`
            <a href="/news/?slug=${i.slug}" class="news-item ${i.pinned?"pinned":""}">
                <span class="news-date">${c(i.date)}</span>
                <span class="news-category cat-${i.category}">${d(i.category)}</span>
                <span class="news-item-title">${i.title}</span>
            </a>
        `).join("")}catch(n){console.warn("ニュースデータの読み込みに失敗しました:",n),e.innerHTML='<p class="text-center" style="padding: 1rem; color: #666;">ニュース情報を読み込み中...</p>'}}async function L(){const e=document.querySelector("#news-detail");if(!e)return;const a=new URLSearchParams(window.location.search).get("slug");if(!a){e.innerHTML="<p>ニュースが見つかりません。</p>";return}try{const t=await fetch("/data/news.json");if(!t.ok)throw new Error("News data not found");const o=(await t.json()).find(r=>r.slug===a);if(!o){e.innerHTML="<p>ニュースが見つかりません。</p>";return}document.title=`${o.title} | ビア博いわき`,e.innerHTML=`
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
        `}catch(t){console.error("ニュース詳細の読み込みに失敗しました:",t),e.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}}async function k(){const e=document.querySelector("#news-all-list");if(e)try{const n=await fetch("/data/news.json");if(!n.ok)throw new Error("News data not found");const t=(await n.json()).sort((s,o)=>s.pinned&&!o.pinned?-1:!s.pinned&&o.pinned?1:new Date(o.date)-new Date(s.date));e.innerHTML=t.map(s=>`
            <a href="/news/?slug=${s.slug}" class="news-item ${s.pinned?"pinned":""}">
                <span class="news-date">${c(s.date)}</span>
                <span class="news-category cat-${s.category}">${d(s.category)}</span>
                <span class="news-item-title">${s.title}</span>
            </a>
        `).join("")}catch(n){console.error("ニュース一覧の読み込みに失敗しました:",n),e.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}}function c(e){const n=new Date(e),a=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),s=String(n.getDate()).padStart(2,"0");return`${a}.${t}.${s}`}function d(e){return{event:"イベント",ticket:"チケット",shop:"出店",info:"お知らせ"}[e]||"お知らせ"}async function b(){const e=document.querySelector("#shops-list");if(e)try{const n=await fetch("/data/shops.json");if(!n.ok)throw new Error("Shops data not found");const a=await n.json();e.innerHTML=a.map(t=>`
            <div class="shop-card">
                <div class="shop-logo">
                    ${t.logo?`<img src="${t.logo}" alt="${t.name}">`:'<span style="font-size: 2rem;">🍺</span>'}
                </div>
                <div class="shop-info">
                    <h3 class="shop-name">${t.name}</h3>
                    <p class="shop-region">${t.region}</p>
                    <p class="shop-style">${t.style}</p>
                    ${t.sns?`<a href="${t.sns}" target="_blank" class="shop-sns">SNS</a>`:""}
                </div>
            </div>
        `).join("")}catch(n){console.error(n),e.innerHTML="<p>出店情報を読み込み中...</p>"}}async function S(){const e=document.querySelector("#beers-list");if(e)try{const n=await fetch("/data/beers.json");if(!n.ok)throw new Error("Beers data not found");const a=await n.json();e.innerHTML=a.map(t=>`
            <div class="card">
                <div class="card-body">
                    <span class="tag tag-primary">${t.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${t.name}</h3>
                    <p class="card-text">
                        <strong>スタイル:</strong> ${t.style}<br>
                        <strong>ABV:</strong> ${t.abv}<br>
                        <strong>価格:</strong> ${t.price}
                    </p>
                </div>
            </div>
        `).join("")}catch(n){console.error(n),e.innerHTML="<p>ビール情報を読み込み中...</p>"}}async function $(){const e=document.querySelector("#foods-list");if(e)try{const n=await fetch("/data/foods.json");if(!n.ok)throw new Error("Foods data not found");const a=await n.json();e.innerHTML=a.map(t=>`
            <div class="card">
                <div class="card-body">
                    <span class="tag">${t.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${t.name}</h3>
                    <p class="card-text">
                        <strong>価格:</strong> ${t.price}
                        ${t.allergen?`<br><small>⚠️ ${t.allergen}</small>`:""}
                    </p>
                </div>
            </div>
        `).join("")}catch(n){console.error(n),e.innerHTML="<p>フード情報を読み込み中...</p>"}}document.querySelector("#shops-list")&&b();document.querySelector("#beers-list")&&S();document.querySelector("#foods-list")&&$();
