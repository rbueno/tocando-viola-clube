/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import tocandoVideoIcon from 'assets/images/tocando-video.png';
import tocandoDownload from 'assets/images/tocando-download.png';
import tocandoPodcast from 'assets/images/tocando-podcast.png';
import tocandoPlayAlong from 'assets/images/tocando-play-along.png';
import tocandoLives from 'assets/images/tocando-lives.png';
import tocandoMais from 'assets/images/tocando-mais.png';

const data = [
  {
    id: 1,
    icon: tocandoVideoIcon,
    title: 'Video',
    description: `Video aula com recursos gráficos`,
  },
  {
    id: 2,
    icon: tocandoDownload,
    title: 'Material para download',
    description: `PDF bem estrutura com tablaturas e partituras.`,
  },
  {
    id: 3,
    icon: tocandoPodcast,
    title: 'Podcast',
    description: `Entrevistas e conversas enriquecedoras em um formato descontraído e dinâmico.`,
  },
  {
    id: 4,
    icon: tocandoPlayAlong,
    title: 'Play along',
    description: `Uma forma eficaz para práticar o que aprendermos no clube.`,
  },
  {
    id: 5,
    icon: tocandoLives,
    title: 'Lives',
    description: `Frequêntemente temos lives ondes os membros tem acesso a conteúdo exclusivo.`,
  },
  {
    id: 6,
    icon: tocandoMais,
    title: 'Muito mais',
    description: `O clube é dinâmico e frequentemente temos interações diferenciadas.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Tocandô Viola Clube"
          description="Conheça um pouco mais do que você terá acesso ao entrar em nosso clube."
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
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
