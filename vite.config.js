import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        outline: resolve(__dirname, 'about/outline.html'),
        guide: resolve(__dirname, 'guide/index.html'),
        faq: resolve(__dirname, 'guide/faq.html'),
        ticket: resolve(__dirname, 'ticket/index.html'),
        access: resolve(__dirname, 'access/index.html'),
        parking: resolve(__dirname, 'access/parking.html'),
        timetable: resolve(__dirname, 'timetable/index.html'),
        exhibitors: resolve(__dirname, 'exhibitors.html'),
        'exhibitors/beers': resolve(__dirname, 'exhibitors/beers.html'),
        'exhibitors/foods': resolve(__dirname, 'exhibitors/foods.html'),
        'exhibitors/drinks': resolve(__dirname, 'exhibitors/drinks.html'),
        shops: resolve(__dirname, 'shops.html'),
        news: resolve(__dirname, 'news/index.html'),
        newsDetail: resolve(__dirname, 'news/detail.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
