import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Docs ExB',
    customCss: [
      './src/styles/custom.css',
    ],
    logo: {
      src: './src/assets/logo.svg',
      replacesTitle: true
    },
    social: {
      github: 'https://github.com/MaestroMiyagi/my-starlight-exb'
    },
    sidebar: [{
      label: 'Introducción',
      link: '/intro/'
    }, {
      label: 'Inicio',
      autogenerate: {
        directory: 'start'
      }
    }, {
      label: 'HTML',
      autogenerate: {
        directory: 'html'
      }
    }]
  }), sitemap(), robotsTxt()]
});