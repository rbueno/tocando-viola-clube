/* eslint-disable react/jsx-filename-extension */
/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx, Box, Container, Image, Text, Heading, Grid,
} from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import SectionHeading from 'components/section-heading';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import ricardoVignini from 'assets/images/tocando-depoimento-ricardo-vignini.png';
import leviRamiro from 'assets/images/tocando-depoimento-levi-ramiro.png';
import ivanVilella from 'assets/images/tocando-depoimento-ivan-vilella.png';
import seuOliveira from 'assets/images/tocando-depoimento-seu-oliveira.png';


SwiperCore.use([Navigation, Pagination]);

const OurTeam = () => (
  <Box as="section" id="team" sx={styles.section}>
    <Container>
      <SectionHeading
        sx={styles.heading}
        title="Depoimentos"
        description="Confira o que dizem quem conhece o trabalho do Zé Helder."
      />
    </Container>
    <Box marginLeft={10} marginRight={10}>

      <Grid sx={styles.grid}>
        <Box
          className="service-card"
          sx={styles.serviceCard}
        >
          <Box className="service-icon" sx={styles.icon}>
            <Image src={ricardoVignini} alt="" />
          </Box>
          <Heading as="h3">Ricardo Vignini</Heading>
          <Text as="p">"Zé Helder é a pessoa que tem a melhor didática que eu já conheci"</Text>
          <AudioPlayer
            controls
            src="https://observatorioluneta.com/tocando_files/Depoimentos-Ze-Helder-Ricardo-Vignini.mp3"
          />
        </Box>
        <Box
          className="service-card"
          sx={styles.serviceCard}
        >
          <Box className="service-icon" sx={styles.icon}>
            <Image src={leviRamiro} alt="" />
          </Box>
          <Heading as="h3">Levi Ramiro</Heading>
          <Text as="p">"O Zé tem um histórico dentro da área da pedagógica de viola e música indiscutível"</Text>
          <AudioPlayer
            controls
            src="https://observatorioluneta.com/tocando_files/Depoimentos-Ze-Helder-Levi-Ramiro.mp3"
          />
        </Box>
        <Box
          className="service-card"
          sx={styles.serviceCard}
        >
          <Box className="service-icon" sx={styles.icon}>
            <Image src={ivanVilella} alt="" />
          </Box>
          <Heading as="h3">Ivan Vilella</Heading>
          <Text as="p">"Zé Helder levou a viola para os conservatórios de Minas. Além de ser professor, é um músico notável"</Text>
          <AudioPlayer
            controls
            src="https://observatorioluneta.com/tocando_files/Depoimentos-Ze-Helder-Ivan-Vilella.mp3"
          />
        </Box>
        <Box
          className="service-card"
          sx={styles.serviceCard}
        >
          <Box className="service-icon" sx={styles.icon}>
            <Image src={seuOliveira} alt="" />
          </Box>
          <Heading as="h3">Seu Oliveira</Heading>
          <Text as="p">" Professor e maestro com raiz caipira. Se quiser aprender viola, procure Zé Helder "</Text>
          <AudioPlayer
            controls
            src="https://observatorioluneta.com/tocando_files/Depoimento-Ze-Helder-Seu-Oliveira.mp3"
          />
        </Box>
        
      </Grid>
    </Box>
  </Box>
);

export default OurTeam;

const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  services: {
    pt: ['80px', null, null, null, null, null, '140px'],
    '.service-card:nth-of-type(2)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(320.89deg, #25D9D9 10.83%, rgba(37, 217, 217, 0.5) 88.7%)',
      },
    },
    '.service-card:nth-of-type(3)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)',
      },
    },
    '.service-card:nth-of-type(4)': {
      '.service-icon': {
        backgroundImage:
          'linear-gradient(322.63deg, #FF9066 9.94%, rgba(255, 144, 102, 0.5) 91.14%)',
      },
    },
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '60px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr 1fr',
    ],
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
