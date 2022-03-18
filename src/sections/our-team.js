/* eslint-disable react/jsx-filename-extension */
/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx, Container, Flex, Box,
} from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import SectionHeading from 'components/section-heading';
// import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/images/patternBG.png';

const packages = [
  {
    name: 'Com taxa de adesão',
    description: 'Primeiro mês: R$ 49,90',
    priceWithUnit: 'R$ 19,90',
    buttonText: 'Assinar',
    points: [
      {
        // icon: <IoIosCheckmarkCircle />,
        text: 'No primeiro mês você pagará um total de R$ 49,90, e nos meses seguintes pagará apenas R$ 19,90 mensal.',
        isAvailable: true,
      },
      // {
      //   // icon: <IoIosCheckmarkCircle />,
      //   text:
      //     'Free access for all kind of exercise corrections with downloads.',
      //   isAvailable: true,
      // },
      // {
      //   // icon: <IoIosCheckmarkCircle />,
      //   text: 'Total assessment corrections with free download access system',
      //   isAvailable: true,
      // },
      // {
      //   // icon: <IoIosCloseCircle />,
      //   text: 'Unlimited download of courses on the mobile app contents',
      //   isAvailable: false,
      // },
      // {
      //   // icon: <IoIosCloseCircle />,
      //   text: 'Download and print courses and exercises in PDF',
      //   isAvailable: false,
      // },
    ],
  },
  {
    header: 'Recomendado',
    name: 'Sem taxa de adesão',
    description: 'Economize R$ 30,00',
    priceWithUnit: 'R$ 238,80',
    buttonText: 'Assinar',
    points: [
      {
        // icon: <IoIosCheckmarkCircle />,
        text: 'Este plano não possui taxa de adesão. Você pagará um valor único mensal de R$ 238,80 anual.',
        isAvailable: true,
      },
      // {
      //   // icon: <IoIosCheckmarkCircle />,
      //   text:
      //     'Free access for all kind of exercise corrections with downloads.',
      //   isAvailable: true,
      // },
      // {
      //   // icon: <IoIosCheckmarkCircle />,
      //   text: 'Total assessment corrections with free download access system',
      //   isAvailable: true,
      // },
      // {
      //   // icon: <IoIosCheckmarkCircle />,
      //   text: 'Unlimited download of courses on the mobile app contents',
      //   isAvailable: true,
      // },
      // {
      //   // icon: <IoIosCheckmarkCircle />,
      //   text: 'Download and print courses and exercises in PDF',
      //   isAvailable: true,
      // },
    ],
  },
];
export default function Package() {
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>

      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Preço da Assinatura"
          description="Confira os planos:"
        />
      </Container>
      <Flex
        sx={{
          justifyContent: 'center',
          flexWrap: ['wrap', null, null, 'nowrap'],
          color: '',
        }}
      >
        {packages.map(packageData => (
          <PriceCard data={packageData} key={packageData.name} />
        ))}
      </Flex>

    </Box>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
  heading: {
    color: '#fff',
  },
};
