(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{d(),c(),m(),h(),f(),w(),p(),u(),document.getElementById("news-list")&&v(),document.getElementById("news-detail")&&y(),document.getElementById("news-all-list")&&g();const n=document.querySelector(".timetable-img-container");n&&n.addEventListener("click",()=>{const a=n.querySelector("img");if(a&&window.initModal){const t=document.querySelector(".modal"),e=t==null?void 0:t.querySelector("img");t&&e&&(e.src=a.src,t.classList.add("active"),document.body.style.overflow="hidden")}})});async function c(){try{const n=await fetch("/data/info.json");if(!n.ok)throw new Error("Info data not found");const a=await n.json();["event_name","event_name_en","catchphrase","date_short","date_html","time_html","venue_name","venue_address","fee_html","organizer"].forEach(t=>{document.querySelectorAll(`.info-${t}`).forEach(e=>{e.innerHTML=a[t]})})}catch(n){console.error("info.jsonの読み込みに失敗しました:",n)}}function d(){const n=document.querySelector(".nav-list");n&&(n.innerHTML=`
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

    `)}function p(){window.location.pathname==="/"||window.location.pathname.endsWith("/index.html")||window.location.pathname.endsWith("/"),document.querySelectorAll(".logo").forEach(n=>{n.innerHTML='<img src="/assets/img/logo3.png" alt="ビア博いわき" class="logo-img">'})}function u(){const n="https://www.facebook.com/share/1Dox9zMMon/",a="https://www.instagram.com/beer_expo_iwaki?igsh=a3d5M3U2endramh2",t=document.querySelector(".nav-list");if(t&&!t.querySelector(".nav-sns")){const s=document.createElement("li");s.className="nav-item nav-sns",s.innerHTML=`
            <a href="${n}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Facebook">
                <span style="font-family: sans-serif; font-weight: bold;">f</span>
            </a>
            <a href="${a}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Instagram">
                <span>📷</span>
            </a>
        `,window.innerWidth>768?t.insertAdjacentHTML("beforeend",s.outerHTML):t.appendChild(s)}const e=document.querySelector(".footer-social");e&&(e.innerHTML=`
            <a href="${n}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">f</a>
            <a href="${a}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram">📷</a>
        `)}function m(){const n=document.querySelector(".hamburger"),a=document.querySelector(".nav-list");!n||!a||(n.addEventListener("click",()=>{n.classList.toggle("active"),a.classList.toggle("active"),document.body.style.overflow=a.classList.contains("active")?"hidden":""}),a.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{t.parentElement.classList.contains("has-dropdown")||(n.classList.remove("active"),a.classList.remove("active"),document.body.style.overflow="")})}))}function h(){const n=document.querySelectorAll(".nav-item.has-dropdown"),a=()=>window.matchMedia("(hover: none)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0;n.forEach(t=>{t.querySelector(".nav-link").addEventListener("click",e=>{(window.innerWidth<=768||a())&&(e.preventDefault(),t.classList.toggle("active"),n.forEach(s=>{s!==t&&s.classList.remove("active")}))})}),document.addEventListener("click",t=>{t.target.closest(".nav-item.has-dropdown")||n.forEach(e=>e.classList.remove("active"))}),window.addEventListener("resize",()=>{window.innerWidth>768&&!a()&&n.forEach(t=>t.classList.remove("active"))})}function f(){document.querySelectorAll(".accordion-header").forEach(n=>{n.addEventListener("click",()=>{const a=n.parentElement,t=a.classList.contains("active");a.classList.toggle("active",!t)})})}function w(){const n=document.querySelector(".modal"),a=n==null?void 0:n.querySelector("img"),t=n==null?void 0:n.querySelector(".modal-close");if(!n)return;document.querySelectorAll("[data-modal-src], .gallery-item img, .map-image").forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.modalSrc||s.src;a&&(a.src=o),n.classList.add("active"),document.body.style.overflow="hidden"})}),t==null||t.addEventListener("click",()=>e()),n.addEventListener("click",s=>{s.target===n&&e()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&e()});function e(){n.classList.remove("active"),document.body.style.overflow=""}}async function v(){const n=document.querySelector("#news-list");if(n)try{const a=await fetch("/data/news.json");if(!a.ok)throw new Error("News data not found");const t=(await a.json()).sort((o,l)=>o.pinned&&!l.pinned?-1:!o.pinned&&l.pinned?1:new Date(l.date)-new Date(o.date)),e=window.innerWidth<=768?5:8,s=t.slice(0,e);n.innerHTML=s.map(o=>`
            <a href="/news/?slug=${o.slug}" class="news-item ${o.pinned?"pinned":""}">
                <span class="news-date">${i(o.date)}</span>
                <span class="news-category cat-${o.category}">${r(o.category)}</span>
                <span class="news-item-title">${o.title}</span>
            </a>
        `).join("")}catch(a){console.warn("ニュースデータの読み込みに失敗しました:",a),n.innerHTML='<p class="text-center" style="padding: 1rem; color: #666;">ニュース情報を読み込み中...</p>'}}async function y(){const n=document.querySelector("#news-detail");if(!n)return;const a=new URLSearchParams(window.location.search).get("slug");if(!a){n.innerHTML="<p>ニュースが見つかりません。</p>";return}try{const t=await fetch("/data/news.json");if(!t.ok)throw new Error("News data not found");const e=(await t.json()).find(s=>s.slug===a);if(!e){n.innerHTML="<p>ニュースが見つかりません。</p>";return}document.title=`${e.title} | ビア博いわき`,n.innerHTML=`
            <article class="news-detail">
                <header class="news-detail-header">
                    <div class="news-detail-meta">
                        <span class="news-date">${i(e.date)}</span>
                        <span class="news-category cat-${e.category}">${r(e.category)}</span>
                    </div>
                    <h1 class="news-detail-title">${e.title}</h1>
                </header>
                <div class="news-detail-body">
                    ${e.content||"<p>詳細情報は準備中です。</p>"}
                </div>
                <div style="margin-top: 2rem; text-align: center;">
                    <a href="/news/" class="btn btn-secondary">← ニュース一覧へ戻る</a>
                </div>
            </article>
        `}catch(t){console.error("ニュース詳細の読み込みに失敗しました:",t),n.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}}async function g(){const n=document.querySelector("#news-all-list");if(n)try{const a=await fetch("/data/news.json");if(!a.ok)throw new Error("News data not found");const t=(await a.json()).sort((e,s)=>e.pinned&&!s.pinned?-1:!e.pinned&&s.pinned?1:new Date(s.date)-new Date(e.date));n.innerHTML=t.map(e=>`
            <a href="/news/?slug=${e.slug}" class="news-item ${e.pinned?"pinned":""}">
                <span class="news-date">${i(e.date)}</span>
                <span class="news-category cat-${e.category}">${r(e.category)}</span>
                <span class="news-item-title">${e.title}</span>
            </a>
        `).join("")}catch(a){console.error("ニュース一覧の読み込みに失敗しました:",a),n.innerHTML="<p>ニュースの読み込みに失敗しました。</p>"}}function i(n){const a=new Date(n),t=a.getFullYear(),e=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0");return`${t}.${e}.${s}`}function r(n){return{event:"イベント",ticket:"チケット",shop:"出店",info:"お知らせ"}[n]||"お知らせ"}async function k(){const n=document.querySelector("#shops-list");if(n)try{const a=await fetch("/data/shops.json");if(!a.ok)throw new Error("Shops data not found");const t=await a.json();n.innerHTML=t.map(e=>`
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
            </div>
        `).join("")}catch(a){console.error(a),n.innerHTML="<p>出店情報を読み込み中...</p>"}}async function L(){const n=document.querySelector("#beers-list");if(n)try{const a=await fetch("/data/beers.json");if(!a.ok)throw new Error("Beers data not found");const t=await a.json();n.innerHTML=t.map(e=>`
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
            </div>
        `).join("")}catch(a){console.error(a),n.innerHTML="<p>ビール情報を読み込み中...</p>"}}async function b(){const n=document.querySelector("#foods-list");if(n)try{const a=await fetch("/data/foods.json");if(!a.ok)throw new Error("Foods data not found");const t=await a.json();n.innerHTML=t.map(e=>`
            <div class="card">
                <div class="card-body">
                    <span class="tag">${e.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${e.name}</h3>
                    <p class="card-text">
                        <strong>価格:</strong> ${e.price}
                        ${e.allergen?`<br><small>⚠️ ${e.allergen}</small>`:""}
                    </p>
                </div>
            </div>
        `).join("")}catch(a){console.error(a),n.innerHTML="<p>フード情報を読み込み中...</p>"}}document.querySelector("#shops-list")&&k();document.querySelector("#beers-list")&&L();document.querySelector("#foods-list")&&b();
