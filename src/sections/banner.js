/* eslint-disable react/jsx-filename-extension */
/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx, Box, Container, Button, Image,
} from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import illustration from 'assets/images/banner-illustration.png';
import bannerBg from 'assets/images/campo-tocando.png';

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
    pt: [105, null, null, 140, 15, null, 170],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
      color: '#fff',
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  illustration: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['none', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)'],
  },
};


const Banner = () => (
  <Box as="section" id="home" sx={styles.section}>
    <Container>
      <Box sx={styles.contentWrapper}>
        {/* <SectionHeading
          sx={styles.heading}
          title="Toda a arte da viola caipira do tradicional ao excepcional com técnicas simples de quem vai compartilhar com você mais de duas décadas de pesquisa, ensino e muita prática"
          description="Zé Helder"
        /> */}
        <Box as="figure">
        <iframe src="https://player.vimeo.com/video/13506593?h=bdae1ab97e&title=0&byline=0&portrait=0" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Banner;
