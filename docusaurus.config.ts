import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MineLatino Network | Documentación',
  tagline: 'Todo lo que necesitas',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.minelatino.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MineLAT', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ docPath }) => {
            return `https://github.com/MineLAT/docs/blob/main/docs/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'MineLatino',
      logo: {
        alt: 'MineLatino Logo',
        src: 'img/minelatino-logo.png',
      },
      items: [
        {
          href: 'https://minelatino.com',
          html: 'INICIO',
          position: 'right',
        },
        {
          href: 'https://minelatino.com/blog',
          html: 'BLOG',
          position: 'right',
        },
        {
          href: 'https://minelatino.shop',
          html: 'TIENDA',
          position: 'right',
        },
        {
          href: 'https://discord.gg/minelatino',
          html: 'DISCORD',
          position: 'right',
        },
        {
          href: 'https://github.com/MineLAT',
          html: 'GITHUB',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SOBRE NOSOTROS',
          items: [
            {
              html: `
                <p>
                  Somos una Network que inicio sus actividades
                  en julio del 2019, y desde entonces, hemos
                  dado lo mejor de nosotros para destacar;
                  ofreciendo lo que muchos servidores de
                  nuestra categoría no ofrecen, es decir:
                  calidad, buena atención al cliente e innovación.
                </p>
                <p>
                  Somos un proyecto respaldado por M.A. CONTRERAS,
                  el cual es un comercio de servicios digitales
                  con más de  7 años de experiencia en el sector.
                </p>
                <p>
                  Este es un proyecto hecho por latinos, para
                  latinos, y en general, toda la comunidad
                  de habla hispana.
                </p>
              `,
            },
          ],
        },
        {
          title: 'LEGAL & INFORMACIÓN',
          items: [
            {
              label: 'MineLatino no está asociado a Mojang',
              href: 'https://minelatino.shop/minelatino-network-no-esta-asociado-a-mojang/',
            },
            {
              label: 'Términos, condiciones & políticas',
              href: 'https://minelatino.shop/politicas/',
            },
            {
              label: 'Política de privacidad',
              href: 'https://minelatino.shop/politica-de-privacidad/',
            },
            {
              label: 'Políticas generales',
              href: 'https://minelatino.com/politicas/',
            },
            {
              label: 'Normas generales',
              href: 'https://minelatino.com/normas-generales/',
            },
            {
              label: 'Sistema de afiliados',
              href: 'https://minelatino.com/partner/',
            },
            {
              label: 'Descargo de responsabilidad',
              to: 'disclaimer',
            },
          ],
        },
        {
          title: 'CONTACTO & DUDAS',
          items: [
            {
              html: `
                <p>
                  Este servidor es administrado por el equipo
                  de desarrollo de MineLatino Network, <b>NO es
                  Mojang ni Microsoft</b>, NO estamos asociados
                  con Mojang ni Microsoft y NO somos apoyados
                  por Mojang ni Microsoft.
                </p>
              `,
            },
            {
              label: 'WhatsApp',
              href: 'https://api.whatsapp.com/send?phone=584129409105',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/minelatserver',
            },
            {
              label: 'Contactar',
              href: 'https://minelatino.shop/contact-us/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MineLatino. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: [
        'groovy',
        'java',
        'javastacktrace',
        'kotlin',
        'properties',
        'yaml',
      ],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
