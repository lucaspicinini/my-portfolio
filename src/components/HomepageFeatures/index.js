import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Server-side',
    Svg: require('@site/static/img/server-side.svg').default,
    description: (
      <>
        Sou um explorador do Node.js, sendo minha stack mais familiar para
        o desenvolvimento back-end. Você pode conferir o meu trabalho na
        tradução do livro open-source <a href="https://github.com/lucaspicinini/learn-nodejs-hard-way" target='blank'>Learn Node.js The Hard Way</a>. Possuo
        conhecimento básico em Java ☕.
      </>
    ),
  },
  {
    title: 'Client-side',
    Svg: require('@site/static/img/client-side.svg').default,
    description: (
      <>
        Já trabalhei com as seguintes ferramentas na construção do
        front-end em aplicações e projetos: Bootstrap, Tailwind, React
        e Docusaurus. Conhecimento sólido em HTML, CSS e JavaScript.
      </>
    ),
  },
  {
    title: 'Devops',
    Svg: require('@site/static/img/devops.svg').default,
    description: (
      <>
        Bom conhecimento de base em Linux, Docker, containers, yml files e
        na utilização de linguagens, como Lua e Python, para scripts básicos
        de automação/configuração.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
