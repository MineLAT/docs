import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  page: string;
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    page: '/config',
    title: 'Configuración',
    Svg: require('@site/static/img/config-logo.svg').default,
    description: (
      <>
        Entre algunas cosas básicas, la configuración de un servidor es parte
        importante para saber mantener una modalidad debido a que es el mínimo
        requisito para cualquier entusiasta de servidores de Minecraft.
      </>
    ),
  },
  {
    page: '/dev',
    title: 'Programación',
    Svg: require('@site/static/img/dev-logo.svg').default,
    description: (
      <>
        Sin incurrir mucho en el tema, mediante la programación de cosas básicas
        y saber manejar el código de cosas referentes a Minecraft es posible
        adquirir una base para mayor conocimiento.
      </>
    ),
  },
  {
    page: '/build',
    title: 'Construcción',
    Svg: require('@site/static/img/build-logo.svg').default,
    description: (
      <>
        Gran parte del atractivo de un servidor es la forma en como este se
        presenta ante la comunidad, es por ello que mediante la construcción
        profesional de estructuras puedes lograr una mejor imagen además de
        creaciones increibles dentro del juego.
      </>
    ),
  },
];

function Feature({page, title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <a href={page}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      </a>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
