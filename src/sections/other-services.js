/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import tocandoVideoIcon from 'assets/images/video.png';
import tocandoDownload from 'assets/images/download.png';
import tocandoPodcast from 'assets/images/podcast.png';
import tocandoPlayAlong from 'assets/images/playalong.png';
import tocandoLives from 'assets/images/lives.png';
import tocandoMais from 'assets/images/muito-mais.png';

const data = [
  {
    id: 1,
    icon: tocandoVideoIcon,
    title: 'Video',
    description: `Videoaulas com recursos gráficos e a opção de mudança de velocidade. Novos materiais com frequência.!`,
  },
  {
    id: 2,
    icon: tocandoDownload,
    title: 'Material para download',
    description: `PDF com as tablaturas e partituras das músicas para você estudar quando quiser.`,
  },
  {
    id: 3,
    icon: tocandoPodcast,
    title: 'Podcast',
    description: `Entrevistas e conversas enriquecedoras em um formato descontraído e dinâmico com grandes nomes da viola caipira no Brasil.`,
  },
  {
    id: 4,
    icon: tocandoPlayAlong,
    title: 'Play along',
    description: `Uma forma eficaz para praticar as músicas do Tocandô Viola Clube.`,
  },
  {
    id: 5,
    icon: tocandoLives,
    title: 'Lives',
    description: `Locais para encontros online entre os membros do Tocandô Viola Clube.`,
  },
  {
    id: 6,
    icon: tocandoMais,
    title: 'Muito mais',
    description: `O Tocandô Viola Clube é dinâmico. Frequentemente temos interações diferenciadas e atualizações.`,
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
