(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{p(),u(),h(),v(),y(),g(),m(),w(),document.getElementById("news-list")&&k(),document.getElementById("news-detail")&&L(),document.getElementById("news-all-list")&&b();const n=document.querySelector(".timetable-img-container");n&&n.addEventListener("click",()=>{const s=n.querySelector("img");if(s&&window.initModal){const t=document.querySelector(".modal"),a=t==null?void 0:t.querySelector("img");t&&a&&(a.src=s.src,t.classList.add("active"),document.body.style.overflow="hidden")}})});async function u(){try{const n=await fetch("/data/info.json");if(!n.ok)throw new Error("Info data not found");const s=await n.json();["event_name","event_name_en","catchphrase","date_short","date_html","time_html","venue_name","venue_address","fee_html","organizer"].forEach(a=>{document.querySelectorAll(`.info-${a}`).forEach(e=>{e.innerHTML=s[a]})})}catch(n){console.error("info.jsonの読み込みに失敗しました:",n)}}function p(){const n=document.querySelector(".nav-list");n&&(n.innerHTML=`
        <!-- ================= PC用メニュー ================= -->
        <li class="nav-item has-dropdown only-pc">
            <a href="/about/" class="nav-link">ビア博とは</a>
            <ul class="dropdown">
                <li><a href="/about/" class="dropdown-link">ビア博いわきとは</a></li>
                <li><a href="/guide/" class="dropdown-link">初めての方へ</a></li>
                <li><a href="/about/outline.html" class="dropdown-link">開催概要</a></li>
            </ul>
        </li>
        <li class="nav-item only-pc">
            <a href="/ticket/" class="nav-link">チケットについて</a>
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
        <li class="nav-item only-sp"><a href="/ticket/" class="nav-link">チケットについて</a></li>
        <li class="nav-item only-sp"><a href="/timetable/" class="nav-link">タイムテーブル</a></li>
        <li class="nav-item only-sp"><a href="/exhibitors/" class="nav-link">出店情報</a></li>
        <li class="nav-item only-sp"><a href="/access/" class="nav-link">アクセス</a></li>
        <li class="nav-item only-sp"><a href="/news/" class="nav-link">ニュース</a></li>
        <li class="nav-item only-sp"><a href="/guide/faq.html" class="nav-link">よくある質問</a></li>
        <li class="nav-item only-sp"><a href="/contact/" class="nav-link">お問い合わせ</a></li>

    `)}function m(){window.location.pathname==="/"||window.location.pathname.endsWith("/index.html")||window.location.pathname.endsWith("/"),document.querySelectorAll(".logo").forEach(n=>{n.innerHTML='<img src="/assets/img/logo3.png" alt="ビア博いわき" class="logo-img">'})}function w(){const n="https://www.facebook.com/share/1Dox9zMMon/",s="https://www.instagram.com/beer_expo_iwaki?igsh=a3d5M3U2endramh2",t=document.querySelector(".nav-list");if(t&&!t.querySelector(".nav-sns")){const e=document.createElement("li");e.className="nav-item nav-sns",e.innerHTML=`
            <a href="${n}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Facebook">
                <span style="font-family: sans-serif; font-weight: bold;">f</span>
            </a>
            <a href="${s}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Instagram">
                <span>📷</span>
            </a>
        `,window.innerWidth>768&&t.insertAdjacentHTML("beforeend",e.outerHTML)}const a=document.querySelector(".footer-social");a&&(a.innerHTML=`
            <a href="${n}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">f</a>
            <a href="${s}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram">📷</a>
        `)}function h(){const n=document.querySelector(".hamburger"),s=document.querySelector(".nav-list");!n||!s||(n.addEventListener("click",t=>{t.stopPropagation();const a=s.classList.contains("active");n.classList.toggle("active"),s.classList.toggle("active"),document.body.style.overflow=a?"":"hidden"}),s.addEventListener("click",t=>{t.defaultPrevented||!t.target.closest("a")||(n.classList.remove("active"),s.classList.remove("active"),document.body.style.overflow="")}),document.addEventListener("click",t=>{s.classList.contains("active")&&!s.contains(t.target)&&!n.contains(t.target)&&(n.classList.remove("active"),s.classList.remove("active"),document.body.style.overflow="")}))}function v(){const n=document.querySelectorAll(".nav-item.has-dropdown"),s=()=>window.matchMedia("(hover: none)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0;n.forEach(t=>{t.querySelector(".nav-link").addEventListener("click",e=>{s()&&(t.classList.contains("active")||(e.preventDefault(),e.stopPropagation(),t.classList.add("active"),n.forEach(o=>{o!==t&&o.classList.remove("active")})))})}),document.addEventListener("click",t=>{t.target.closest(".nav-item.has-dropdown")||n.forEach(a=>a.classList.remove("active"))}),window.addEventListener("resize",()=>{s()||n.forEach(t=>t.classList.remove("active"))})}function y(){document.querySelectorAll(".accordion-header").forEach(s=>{s.addEventListener("click",()=>{const t=s.parentElement,a=t.classList.contains("active");t.classList.toggle("active",!a)})})}function g(){const n=document.querySelector(".modal"),s=n==null?void 0:n.querySelector("img"),t=n==null?void 0:n.querySelector(".modal-close");if(!n)return;document.querySelectorAll("[data-modal-src], .gallery-item img, .map-image").forEach(e=>{e.addEventListener("click",()=>{const o=e.dataset.modalSrc||e.src;s&&(s.src=o),n.classList.add("active"),document.body.style.overflow="hidden"})}),t==null||t.addEventListener("click",()=>a()),n.addEventListener("click",e=>{e.target===n&&a()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&a()});function a(){n.classList.remove("active"),document.body.style.overflow=""}}async function k(){const n=document.querySelector("#news-list");if(!n)return;try{const t=await fetch("../data/news.json");if(!t.ok){const e=await fetch("./data/news.json");if(!e.ok)throw new Error("News data not found");const o=await e.json();return s(n,o)}const a=await t.json();return s(n,a)}catch(t){console.warn("ニュースデータの読み込みに失敗しました:",t),n.innerHTML='<p class="text-center" style="padding: 1rem; color: #666;">ニュース情報を読み込み中...</p>'}function s(t,a){const e=a.sort((c,l)=>c.pinned&&!l.pinned?-1:!c.pinned&&l.pinned?1:new Date(l.date)-new Date(c.date)),r=window.innerWidth<=768?5:8,i=e.slice(0,r);t.innerHTML=i.map(c=>`
            <a href="/news/?slug=${c.slug}" class="news-item ${c.pinned?"pinned":""}">
                <span class="news-date">${d(c.date)}</span>
                <span class="news-category cat-${c.category}">${f(c.category)}</span>
                <span class="news-item-title">${c.title}</span>
            </a>
        `).join("")}}async function L(){const n=document.querySelector("#news-detail");if(!n)return;const t=new URLSearchParams(window.location.search).get("slug");if(!t){n.innerHTML="<p>ニュースが見つかりません。</p>";return}try{const e=await fetch("../data/news.json");if(!e.ok){const r=await fetch("./data/news.json");if(!r.ok)throw new Error("News data not found");const i=await r.json();return a(n,i,t)}const o=await e.json();return a(n,o,t)}catch(e){console.error("ニュース詳細の読み込みに失敗しました:",e),n.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}function a(e,o,r){const i=o.find(c=>c.slug===r);if(!i){e.innerHTML="<p>ニュースが見つかりません。</p>";return}document.title=`${i.title} | ビア博いわき`,e.innerHTML=`
            <article class="news-detail">
                <header class="news-detail-header">
                    <div class="news-detail-meta">
                        <span class="news-date">${d(i.date)}</span>
                        <span class="news-category cat-${i.category}">${f(i.category)}</span>
                    </div>
                    <h1 class="news-detail-title">${i.title}</h1>
                </header>
                <div class="news-detail-body">
                    ${i.content||"<p>詳細情報は準備中です。</p>"}
                </div>
                <div style="margin-top: 2rem; text-align: center;">
                    <a href="/news/" class="btn btn-secondary">← ニュース一覧へ戻る</a>
                </div>
            </article>
        `}}async function b(){const n=document.querySelector("#news-all-list");if(!n)return;try{const t=await fetch("../data/news.json");if(!t.ok){const e=await fetch("./data/news.json");if(!e.ok)throw new Error("News data not found");const o=await e.json();return s(n,o)}const a=await t.json();return s(n,a)}catch(t){console.error("ニュース一覧の読み込みに失敗しました:",t),n.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}function s(t,a){const e=a.sort((o,r)=>o.pinned&&!r.pinned?-1:!o.pinned&&r.pinned?1:new Date(r.date)-new Date(o.date));t.innerHTML=e.map(o=>{const r=o.pinned===!0,i=`
                <a href="/news/?slug=${o.slug}" class="news-item ${o.pinned?"pinned":""}" ${r?'style="border-bottom: none; padding-bottom: 0.5rem;"':""}>
                    <span class="news-date">${d(o.date)}</span>
                    <span class="news-category cat-${o.category}">${f(o.category)}</span>
                    <span class="news-item-title">${o.title}</span>
                </a>
                ${r?`<div class="news-content-inline" style="padding: 0 var(--spacing-md) 1rem 110px; border-bottom: 1px solid var(--color-border);">${o.content}</div>`:""}
            `;return r?`<div class="news-item-wrapper">${i}</div>`:i}).join("")}}function d(n){const s=new Date(n),t=s.getFullYear(),a=String(s.getMonth()+1).padStart(2,"0"),e=String(s.getDate()).padStart(2,"0");return`${t}.${a}.${e}`}function f(n){return{event:"イベント",ticket:"チケット",shop:"出店",info:"お知らせ"}[n]||"お知らせ"}async function $(){const n=document.querySelector("#shops-list");if(!n)return;try{const t=await fetch("../data/shops.json");if(!t.ok){const e=await fetch("./data/shops.json");if(!e.ok)throw new Error("Shops data not found");const o=await e.json();return s(n,o)}const a=await t.json();return s(n,a)}catch(t){console.error("ショップ一覧の読み込みに失敗しました:",t),n.innerHTML="<p>準備中</p>"}function s(t,a){t.innerHTML=a.map(e=>`
            <div class="shop-card">
                <div class="shop-logo">
                    ${e.logo?`<img src="${e.logo}" alt="${e.name}">`:'<span style="font-size: 2rem;">🍺</span>'}
                </div>
                <div class="shop-info">
                    <h3 class="shop-name">${e.name}</h3>
                    <p class="shop-region">${e.region}</p>
                    <p class="shop-style">${e.style}</p>
                    ${e.sns?`<a href="${e.sns}" target="_blank" class="shop-sns">SNS</a>`:""}
                </div>
        `).join("")}}async function S(){const n=document.querySelector("#beers-list");if(!n)return;try{const t=await fetch("../data/beers.json");if(!t.ok){const e=await fetch("./data/beers.json");if(!e.ok)throw new Error("Beers data not found");const o=await e.json();return s(n,o)}const a=await t.json();return s(n,a)}catch(t){console.error("ビール一覧の読み込みに失敗しました:",t),n.innerHTML="<p>準備中</p>"}function s(t,a){t.innerHTML=a.map(e=>`
            <div class="card">
                <div class="card-body">
                    <span class="tag tag-primary">${e.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${e.name}</h3>
                    <p class="card-text">
                        <strong>スタイル:</strong> ${e.style}<br>
                        <strong>ABV:</strong> ${e.abv}<br>
                        <strong>価格:</strong> ${e.price}
                    </p>
                </div>
        `).join("")}}async function E(){const n=document.querySelector("#foods-list");if(!n)return;try{const t=await fetch("../data/foods.json");if(!t.ok){const e=await fetch("./data/foods.json");if(!e.ok)throw new Error("Foods data not found");const o=await e.json();return s(n,o)}const a=await t.json();return s(n,a)}catch(t){console.error("フード一覧の読み込みに失敗しました:",t),n.innerHTML="<p>準備中</p>"}function s(t,a){t.innerHTML=a.map(e=>`
            <div class="card">
                <div class="card-body">
                    <span class="tag">${e.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${e.name}</h3>
                    <p class="card-text">
                        <strong>価格:</strong> ${e.price}
                        ${e.allergen?`<br><small>⚠️ ${e.allergen}</small>`:""}
                    </p>
            </div>
        `).join("")}}document.querySelector("#shops-list")&&$();document.querySelector("#beers-list")&&S();document.querySelector("#foods-list")&&E();
