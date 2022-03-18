/* eslint-disable react/jsx-filename-extension */
/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx, Box, Container, Heading, Text, Image,
} from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { rgba } from 'polished';
import { LearnMore } from 'components/link';
import zeHelder from 'assets/images/Tocando-viola-clube-ze-helder.png';

const WhyUs = () => (
  <Box as="section" id="why-us" sx={styles.section}>
    <Container>
      <Box sx={styles.illustration}>
        <Image sx={{ borderRadius:"50%" }} src={zeHelder} alt="ze-helder" />
      </Box>
      <Box>
        <Text as="p" sx={styles.textWight400}>
          Zé Helder é formado em Licenciatura Plena em Música pelo Conservatório Brasileiro de Música do Rio de Janeiro e em Comunicação Social pela Univas de Pouso Alegre, e em Contrabaixo Acústico pelo Conservatório Juscelino Kubitschek.
        </Text>
        <Text as="p" sx={styles.textWight600}>
          Integra ainda o grupo pousoalegrense Orelha de Pau (2002) com um CD homônimo, e participou de CDs diversos como músico ou tendo suas composições gravadas por outros intérpretes. Participou de projetos como o Êta Nóis, tocando com Alzira E, Lucina e Ivan Vilela. Com Ivan Zé Helder também dividiu o palco do CCBB no projeto Rock Rural, com shows no Rio de Janeiro e São Paulo junto com grupos como Sá, Rodrix e Guarabyra, O Terço, Zé Geraldo, Matuto Moderno e outros.
        </Text>
        <Text as="p" sx={styles.textWight400}>
        Como professor, foi responsável pela criação de dois cursos de viola caipira: no Conservatório Estadual Juscelino Kubitschek em Pouso Alegre, e no Conservatório Municipal de Guarulhos, onde ainda leciona. Além de inaugurar um curso completo on-line de viola no portal Planeta Música e no Cifra Club, também ministra cursos de curta duração, como no Festival de Música de Londrina, a Oficina de Música de Curitiba, o I Seminário de Viola caipira de Guarulhos e o Curso Intensivo de Férias que realizou por 11 anos ao lado de Ricardo Vignini e Índio Cachoeira, até o falecimento desse último.
        </Text>
        <Text as="p" sx={styles.textWight600}>
          Seu projeto Moda de Rock, duo de viola caipira especializado em adaptar temas de rock com ritmos capiras, marca a história da viola com um trabalho ousado, largamente difundido em programas de TV em rede nacional e nos principais veículos da imprensa em geral. Esse trabalho rendeu três CDs e um DVD e participações de artistas consagrados como Pepeu Gomes, Kiko Loureiro (Megadeth), Andreas Kisser (Sepultura), Robertinho de Recife, Marcos Suzano, Lúcio Maia (Nação Zumbi), Ana Deriggi, Mário Manga, Renato Teixeira, Rodrigo Suricato, André Abujamra e Edgar Scandurra. Moda de Rock radicaliza de vez os rumos que a viola vem tomando, se inserindo em todas as vertentes musicais. Com o Moda de Rock, Zé Helder têm excursionado por todo o Brasil, Estados Unidos, Argentina, México e Canadá.
        </Text>
        <Text as="p" sx={styles.textWight400}>
        Zé Helder explora o mais brasileiro dos instrumentos em composições originais. Seu mais recente disco solo, Assopra o Borralho (Folguedo/Tratore – 2015) foi escolhido como um dos melhores discos independentes do ano pelo jornal Correio Popular de Campinas e em 2020 ficou em segundo lugar no Prêmio Arte Salva da Música Popular Mineira promovido pela Rádio Inconfidência. Esse disco traz a participação especial de Alzira E e co-produção de Ricardo Vignini, seu parceiro no Moda de Rock e no Matuto Moderno, banda com uma história de 15 anos e 5 CDs, em que Zé Helder assume os vocais e a viola desde 2010. O violeiro é endorsee das cordas D’Addario e das violas Rozini.
          <Text as="p" sx={styles.textWight600}>
            No Oco do Bambu (Folguedo/Tratore – 2009), seu trabalho anterior traz as participações de Ivan Vilela, Dani Lasalvia, Índio Cachoeira e vários outros amigos músicos como Guilherme Cordeiro (baixo), Fabrício Santos (violão e guitarra), João César (acordeom) e Diovani Bustamante (bateria), este último também produtor do CD A Montanha (Pedralva – 2004).
          </Text>
        </Text>
      </Box>
    </Container>
  </Box>
);

export default WhyUs;

const styles = {
  section: {
    pt: [11, null, null, 12],
    pb: [8, null, null, 9, null, 11],
  },
  textWight600: {
    color: 'heading',
    fontSize: [1, null, null, 2],
    lineHeight: [1.58, 1.58, 1.58, 2],
    // maxWidth: ['none', 'none', 'none', 'none', 490],
    marginTop: '1rem',
    fontWeight: '600',
  },
  textWight400: {
    color: 'heading',
    fontSize: [1, null, null, 2],
    lineHeight: [1.58, 1.58, 1.58, 2],
    // maxWidth: ['none', 'none', 'none', 'none', 490],
    marginTop: '1rem',
    fontWeight: '400',
  },
  tabs: {
    border: 0,
    '.rc-tabs-nav': {
      mb: [8, null, null, 9, 10, 9, 12],
    },
    '.rc-tabs-nav-wrap': {
      borderBottom: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pb: [3, null, null, 5, null, 6],
    },
    '.rc-tabs-tab-btn': {
      outline: 0,
      alignItems: 'center',
      img: {
        outline: 0,
      },
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
      h4: {
        fontFamily: 'body',
        fontSize: [0, null, null, 17, null, null, 4],
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: ['center', null, null, null, 'left'],
        whiteSpace: ['break-spaces', null, null, null, 'unset'],
      },
    },
    '.rc-tabs-tabpane': {
      display: ['flex', null, null, 'grid'],
      flexDirection: ['column-reverse', null, null, 'unset'],
      alignItems: 'center',
      justifyContent: 'center',
      gridTemplateColumns: [null, null, null, '0.9fr 1.1fr'],
      outline: 0,
      gap: [5, null, null, 11],
      h2: {
        color: 'heading',
        fontSize: [24, null, null, 6, 26, 8, 40],
        fontWeight: 700,
        lineHeight: [1.45, null, null, 1.5],
        letterSpacing: [null, null, null, '0.5px', null, '-1px'],
        textAlign: ['center', null, null, 'left'],
      },
      p: {
        color: 'textSecondary',
        fontSize: [1, null, null, 2, 17],
        lineHeight: [1.87, null, null, 2, 2.48],
        textAlign: ['center', null, null, 'left'],
        mt: [4],
      },
      '.list-item': {
        fontSize: [0, null, null, 1, 2],
        fontWeight: 500,
        lineHeight: [2.8],
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  list: {
    mt: [5],
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: ['repeat(2, 164px)', null, null, 'repeat(2, 180px)'],
  },
  learnMore: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    a: {
      fontSize: [null, null, null, 1, 2],
    },
  },
  illustration: {
    display: ['flex'],
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: [null, null, null, null, null, 'center'],
    img: {
      maxWidth: ['65%', null, null, '100%', null, '90%', '100%'],
    },
  },
};
