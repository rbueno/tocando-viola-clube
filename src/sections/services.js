/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import tunningFork from 'assets/images/tuning-fork.png';
import knowledge from 'assets/images/knowledge.png';

const data = [
  {
    id: 1,
    icon: tunningFork,
    title: 'Paixão pela arte!',
    description: `Aprenda a tocar viola caipira de forma leve e simples, tendo desde o início a paixão pelo processo e a percepção clara do seu progresso`,
  },
  {
    id: 2,
    icon: knowledge,
    title: 'Conhecimento filtrado!',
    description: `Para o seu momento de aprendizado musical, para que você acesse de verdade as técnicas que vão não só te destravar, mas te cativar para aprender todos os dias MESMO QUE você não saiba nada de música e tudo isso SEM TER QUE gastar muito tempo ou dinheiro, ATRAVÉS DE uma nova experiência de aprender no seu tempo e espaço!`,
  },
  // {
  //   id: 4,
  //   icon: icon3,
  //   title: 'Business Enterprise',
  //   description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  // },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Toda a arte da viola caipira do tradicional ao excepcional com técnicas simples de quem vai compartilhar com você mais de duas décadas de pesquisa, ensino e muita prática"
          // description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      // 'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(2, 1fr)',
    ],
  },
};
