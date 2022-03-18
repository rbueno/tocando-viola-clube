/* eslint-disable react/jsx-filename-extension */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Flex } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import illustration from 'assets/images/subscribe-bg.png';

const SubscribeUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://api.whatsapp.com/send?phone=553584120636&text=Ol%C3%A1%20pessoal%20do%20Tocand%C3%B4%20Viola%20Clube!%20Estou%20com%20uma%20d%C3%BAvida."
    window.open(url, '_blank')
  };

  return (
    <Box as="section" sx={styles.section} variant="section.subscribe">
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Dúvidas?"
            description="Contate-nos no WhatsApp e tire todas as suas dúvidas"
          />
          <Box as="form" sx={styles.subscribe} onSubmit={handleSubmit}>
            <Flex sx={styles.inputGroup}>
              <Button variant="primary">Chama no WhatsApp</Button>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

const styles = {
  section: {
    background: [
      'none',
      null,
      null,
      `#F8F0EA url(${illustration}) no-repeat center bottom / contain`,
    ],
    pt: [8, null, null, null, 10],
    pb: [8, null, null, 9, 11],
  },
  contentWrapper: {
    backgroundColor: '#fff',
    borderRadius: 15,
    p: [null, null, null, '40px 110px 50px', '50px 50px', '40px'],
    gap: '50px',
    display: ['block', null, 'grid', 'block', 'grid'],
    alignItems: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)'],
  },
  heading: {
    textAlign: ['center', null, 'left', 'center', 'left'],
    mb: ['30px', null, null, null, 0],
    ml: 0,
    h2: {
      fontSize: [6, null, null, null, null, 8, 9],
    },
    p: {
      lineHeight: 1.87,
      marginTop: 1,
      ml: ['auto', null, null, null, 0],
      mr: ['auto', null, null, null, 0],
      maxWidth: 420,
    },
  },
  subscribe: {
    '.email-input': {
      mr: [0, null, null, '15px'],
      minHeight: ['50px', '50px', '60px'],
    },
    button: {
      minHeight: ['50px', '50px', '60px'],
      fontSize: ['14px', '14px', '16px'],
      mt: ['15px', null, null, 0],
    },
  },
  inputGroup: {
    flexDirection: ['column', null, null, 'row'],
  },
  checkbox: {
    mt: ['24px'],
    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.14,
      color: rgba('#9095AD', 0.9),
      zIndex: 10,
      svg: {
        path: {
          fill: '#EFF3F7',
        },
      },
      '&.checked': {
        svg: {
          path: {
            fill: 'primary',
          },
        },
      },
    },
  },
};
