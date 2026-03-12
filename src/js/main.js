/**
 * ビア博いわき 公式サイト - メインJavaScript v2.1
 * Vite対応 + 二層ナビ + 新着ニュース + ロゴ動的変更 + SNSリンク
 */

document.addEventListener('DOMContentLoaded', () => {
    initNav();   // ナビゲーションを動的生成（全ページ共通）
    initInfo();  // ★追加: 共通情報（日程・時間等）の一括反映
    initHamburgerMenu();
    initDropdowns();
    initAccordion();
    initModal();
    initLogo(); // ロゴの動的切り替え
    initSNS();  // SNSリンク

    // ページ固有の処理
    if (document.getElementById('news-list')) loadNewsData();
    if (document.getElementById('news-detail')) initNewsDetail();
    if (document.getElementById('news-all-list')) loadNewsList();

    // タイムテーブル画像のクリック拡大（トップページ用）
    const timetableContainer = document.querySelector('.timetable-img-container');
    if (timetableContainer) {
        timetableContainer.addEventListener('click', () => {
            const img = timetableContainer.querySelector('img');
            if (img && window.initModal) {
                const modal = document.querySelector('.modal');
                const modalImg = modal?.querySelector('img');
                if (modal && modalImg) {
                    modalImg.src = img.src;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    }
});

/**
 * 共通情報（日程・場所・料金など）を info.json から読み込んで全ページに反映
 * クラス名が一致する要素のHTMLを書き換える
 */
async function initInfo() {
    try {
        const response = await fetch('/data/info.json');
        if (!response.ok) throw new Error('Info data not found');
        const info = await response.json();

        // クラス名とJSONキーのマッピング（.info-[key] に反映）
        const keys = [
            'event_name', 'event_name_en', 'catchphrase',
            'date_short', 'date_html', 'time_html',
            'venue_name', 'venue_address', 'fee_html', 'organizer'
        ];

        keys.forEach(key => {
            document.querySelectorAll(`.info-${key}`).forEach(el => {
                el.innerHTML = info[key];
            });
        });

    } catch (e) {
        console.error('info.jsonの読み込みに失敗しました:', e);
    }
}

/**
 * ナビゲーションを全ページ共通で動的生成

 * ここを変更するだけで全ページのナビが更新される
 */
function initNav() {
    const navList = document.querySelector('.nav-list');
    if (!navList) return;

    navList.innerHTML = `
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

    `;
}


/**
 * ロゴ画像の初期化・切り替え
 */
function initLogo() {
    const isTop = window.location.pathname === '/' ||
        window.location.pathname.endsWith('/index.html') ||
        window.location.pathname.endsWith('/');

    const logoSrc = isTop ? '/assets/img/logo1.png' : '/assets/img/logo2.png';

    // ヘッダーロゴは常にlogo3（左上のロゴ）
    document.querySelectorAll('.logo').forEach(el => {
        el.innerHTML = `<img src="/assets/img/logo3.png" alt="ビア博いわき" class="logo-img">`;
    });
}

/**
 * SNSリンクの追加・更新
 */
function initSNS() {
    const FACEBOOK_URL = 'https://www.facebook.com/share/1Dox9zMMon/';
    const INSTAGRAM_URL = 'https://www.instagram.com/beer_expo_iwaki?igsh=a3d5M3U2endramh2';

    // 1. ヘッダーナビゲーションへの追加
    const navList = document.querySelector('.nav-list');
    if (navList && !navList.querySelector('.nav-sns')) {
        const li = document.createElement('li');
        li.className = 'nav-item nav-sns';
        li.innerHTML = `
            <a href="${FACEBOOK_URL}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Facebook">
                <span style="font-family: sans-serif; font-weight: bold;">f</span>
            </a>
            <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="nav-sns-link" aria-label="Instagram">
                <span>📷</span>
            </a>
        `;

        // PC表示ではリストの最後に追加
        if (window.innerWidth > 768) {
            navList.insertAdjacentHTML('beforeend', li.outerHTML);
        } else {
            // モバイルでは一旦追加しない、または別のコンテナに追加することを検討
            // レイアウトを壊さないために、ここではスキップするか、nav-list内ではなく専用の場所に置く
            // 現状はレイアウト優先でモバイルナビ内には追加しない
        }
    }

    // 2. フッターSNSリンクの更新
    const footerSocial = document.querySelector('.footer-social');
    if (footerSocial) {
        footerSocial.innerHTML = `
            <a href="${FACEBOOK_URL}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">f</a>
            <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram">📷</a>
        `;
    }
}

/**
 * ハンバーガーメニュー（モバイル）
 */
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    if (!hamburger || !navList) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
        document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
    });

    // ナビリンククリックでメニューを閉じる
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // ドロップダウンリンクでなければ閉じる
            if (!link.parentElement.classList.contains('has-dropdown')) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

/**
 * ドロップダウンナビ（二層対応）
 * タッチデバイス（スマホのPC表示含む）も正しく動作するようhover検知を追加
 */
function initDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

    // タッチデバイス判定（スマホのPC表示モードでも検知）
    const isTouchDevice = () =>
        window.matchMedia('(hover: none)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0;

    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');

        link.addEventListener('click', (e) => {
            // モバイル幅 OR タッチデバイスの場合はドロップダウン展開
            if (window.innerWidth <= 768 || isTouchDevice()) {
                e.preventDefault();
                item.classList.toggle('active');
                // 他のドロップダウンを閉じる
                dropdownItems.forEach(other => {
                    if (other !== item) other.classList.remove('active');
                });
            }
        });
    });

    // ページ上の他の場所をタップしたらすべて閉じる
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-item.has-dropdown')) {
            dropdownItems.forEach(item => item.classList.remove('active'));
        }
    });

    // リサイズ時にモバイルドロップダウン状態をリセット
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && !isTouchDevice()) {
            dropdownItems.forEach(item => item.classList.remove('active'));
        }
    });
}

/**
 * アコーディオン（FAQ）
 */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
        });
    });
}

/**
 * モーダル（画像拡大）
 */
function initModal() {
    const modal = document.querySelector('.modal');
    const modalImg = modal?.querySelector('img');
    const modalClose = modal?.querySelector('.modal-close');

    if (!modal) return;

    // ギャラリーアイテムやマップ画像のクリック
    document.querySelectorAll('[data-modal-src], .gallery-item img, .map-image').forEach(el => {
        el.addEventListener('click', () => {
            const src = el.dataset.modalSrc || el.src;
            if (modalImg) modalImg.src = src;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // モーダルを閉じる
    modalClose?.addEventListener('click', () => closeModal());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * ギャラリータブ
 */
function initGalleryTabs() {
    const tabs = document.querySelectorAll('.gallery-tab');
    const contents = document.querySelectorAll('.gallery-content');

    if (tabs.length === 0) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            contents.forEach(content => {
                content.style.display = content.dataset.year === target ? 'grid' : 'none';
            });
        });
    });
}

/**
 * 新着ニュースを読み込み・表示（トップページ用）
 */
async function loadNewsData() {
    const newsList = document.querySelector('#news-list');
    if (!newsList) return;

    try {
        const response = await fetch('/data/news.json');
        if (!response.ok) throw new Error('News data not found');
        const news = await response.json();

        // ピン留め優先、その後日付降順でソート
        const sortedNews = news.sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return new Date(b.date) - new Date(a.date);
        });

        // PC: 8件、SP: 5件
        const isMobile = window.innerWidth <= 768;
        const displayCount = isMobile ? 5 : 8;
        const displayNews = sortedNews.slice(0, displayCount);

        newsList.innerHTML = displayNews.map(item => `
            <a href="/news/?slug=${item.slug}" class="news-item ${item.pinned ? 'pinned' : ''}">
                <span class="news-date">${formatDate(item.date)}</span>
                <span class="news-category cat-${item.category}">${getCategoryLabel(item.category)}</span>
                <span class="news-item-title">${item.title}</span>
            </a>
        `).join('');

    } catch (error) {
        console.warn('ニュースデータの読み込みに失敗しました:', error);
        newsList.innerHTML = '<p class="text-center" style="padding: 1rem; color: #666;">ニュース情報を読み込み中...</p>';
    }
}

/**
 * ニュース詳細ページ
 */
async function initNewsDetail() {
    const detailContainer = document.querySelector('#news-detail');
    if (!detailContainer) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    if (!slug) {
        detailContainer.innerHTML = '<p>ニュースが見つかりません。</p>';
        return;
    }

    try {
        const response = await fetch('/data/news.json');
        if (!response.ok) throw new Error('News data not found');
        const news = await response.json();

        const item = news.find(n => n.slug === slug);
        if (!item) {
            detailContainer.innerHTML = '<p>ニュースが見つかりません。</p>';
            return;
        }

        document.title = `${item.title} | ビア博いわき`;

        detailContainer.innerHTML = `
            <article class="news-detail">
                <header class="news-detail-header">
                    <div class="news-detail-meta">
                        <span class="news-date">${formatDate(item.date)}</span>
                        <span class="news-category cat-${item.category}">${getCategoryLabel(item.category)}</span>
                    </div>
                    <h1 class="news-detail-title">${item.title}</h1>
                </header>
                <div class="news-detail-body">
                    ${item.content || '<p>詳細情報は準備中です。</p>'}
                </div>
                <div style="margin-top: 2rem; text-align: center;">
                    <a href="/news/" class="btn btn-secondary">← ニュース一覧へ戻る</a>
                </div>
            </article>
        `;

    } catch (error) {
        console.error('ニュース詳細の読み込みに失敗しました:', error);
        detailContainer.innerHTML = '<p>ニュースの読み込みに失敗しました。</p>';
    }
}

/**
 * ニュース一覧ページ
 */
async function loadNewsList() {
    const listContainer = document.querySelector('#news-all-list');
    if (!listContainer) return;

    try {
        const response = await fetch('/data/news.json');
        if (!response.ok) throw new Error('News data not found');
        const news = await response.json();

        const sortedNews = news.sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            if (!a.pinned && b.pinned) return 1;
            return new Date(b.date) - new Date(a.date);
        });

        listContainer.innerHTML = sortedNews.map(item => `
            <a href="/news/?slug=${item.slug}" class="news-item ${item.pinned ? 'pinned' : ''}">
                <span class="news-date">${formatDate(item.date)}</span>
                <span class="news-category cat-${item.category}">${getCategoryLabel(item.category)}</span>
                <span class="news-item-title">${item.title}</span>
            </a>
        `).join('');

    } catch (error) {
        console.error('ニュース一覧の読み込みに失敗しました:', error);
        listContainer.innerHTML = '<p>ニュースの読み込みに失敗しました。</p>';
    }
}

/**
 * 日付フォーマット
 */
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}.${m}.${d}`;
}

/**
 * カテゴリラベル
 */
function getCategoryLabel(category) {
    const labels = {
        event: 'イベント',
        ticket: 'チケット',
        shop: '出店',
        info: 'お知らせ'
    };
    return labels[category] || 'お知らせ';
}

/**
 * ショップ・ビール・フード一覧読み込み
 */
async function loadShopsData() {
    const container = document.querySelector('#shops-list');
    if (!container) return;
    try {
        const response = await fetch('/data/shops.json');
        if (!response.ok) throw new Error('Shops data not found');
        const shops = await response.json();
        container.innerHTML = shops.map(shop => `
            <div class="shop-card">
                <div class="shop-logo">
                    ${shop.logo ? `<img src="${shop.logo}" alt="${shop.name}">` : `<span style="font-size: 2rem;">🍺</span>`}
                </div>
                <div class="shop-info">
                    <h3 class="shop-name">${shop.name}</h3>
                    <p class="shop-region">${shop.region}</p>
                    <p class="shop-style">${shop.style}</p>
                    ${shop.sns ? `<a href="${shop.sns}" target="_blank" class="shop-sns">SNS</a>` : ''}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p>出店情報を読み込み中...</p>';
    }
}

async function loadBeersData() {
    const container = document.querySelector('#beers-list');
    if (!container) return;
    try {
        const response = await fetch('/data/beers.json');
        if (!response.ok) throw new Error('Beers data not found');
        const beers = await response.json();
        container.innerHTML = beers.map(beer => `
            <div class="card">
                <div class="card-body">
                    <span class="tag tag-primary">${beer.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${beer.name}</h3>
                    <p class="card-text">
                        <strong>スタイル:</strong> ${beer.style}<br>
                        <strong>ABV:</strong> ${beer.abv}<br>
                        <strong>価格:</strong> ${beer.price}
                    </p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p>ビール情報を読み込み中...</p>';
    }
}

async function loadFoodsData() {
    const container = document.querySelector('#foods-list');
    if (!container) return;
    try {
        const response = await fetch('/data/foods.json');
        if (!response.ok) throw new Error('Foods data not found');
        const foods = await response.json();
        container.innerHTML = foods.map(food => `
            <div class="card">
                <div class="card-body">
                    <span class="tag">${food.shop}</span>
                    <h3 class="card-title" style="margin-top: 0.5rem;">${food.name}</h3>
                    <p class="card-text">
                        <strong>価格:</strong> ${food.price}
                        ${food.allergen ? `<br><small>⚠️ ${food.allergen}</small>` : ''}
                    </p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p>フード情報を読み込み中...</p>';
    }
}

// データ読み込み実行
if (document.querySelector('#shops-list')) loadShopsData();
if (document.querySelector('#beers-list')) loadBeersData();
if (document.querySelector('#foods-list')) loadFoodsData();
