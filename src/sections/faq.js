/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Heading, Text } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import tunningFork from 'assets/images/tuning-fork.png';
import knowledge from 'assets/images/knowledge.png';
import FaqItem from 'components/cards/faq-item'

const data = [
  {
    id: 1,
    // icon: tunningFork,
    ques: 'O que é o Tocandô Viola Clube?',
    ans: `O Tocandô Viola Clube é um clube com aulas de viola caipira com o renomado professor e música Zé Helder. Tem aulas gravadas, playalong para tocar músicas com acompanhamento, Podcasts exclusivos com grandes nomes do instrumento no Brasil.`,
  },
  {
    id: 2,
    // icon: knowledge,
    ques: 'Quais tipos de materiais tem no Tocandô Viola Clube?',
    ans: `Tem aulas gravadas de conhecimento iniciais, por exemplo, como afinar sua viola caipira, qual a melhor viola caipira devo comprar. Tem aulas gravadas de teoria. Tem aulas com músicas bem conhecidas do repertório de viola caipira. Tudo acompanhado de PDF com as tablaturas (tem aula de como ler tablaturs) e partituras. Além de ter também as músicas em MP3 para as pessoas tocarem junto.`,
  },
  {
    id: 3,
    // icon: knowledge,
    ques: 'Como eu pago as mensalidades do Tocandô Viola Clube?',
    ans: `A única forma de pagamento aceita pela plataforma em que o Tocandô Viola Clube está alocada é por cartão de crédito. O valor da mensalidade é debitado todo mês do cartão de crédito.`,
  },
  {
    id: 4,
    // icon: knowledge,
    ques: 'Qual é o valor da mensal do Tocandô Viola Clube?',
    ans: `R$ 19,90. Apenas no primeiro mês tem a taxa de adesão de R$ 49,90 que já inclui a primeira mensalidade.`,
  },
  {
    id: 5,
    // icon: knowledge,
    ques: 'Tem algum período mínimo de contrato?',
    ans: `Não. Você pode cancelar sua inscrição no Tocandô Viola Clube quando quiser.`,
  },
  
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Perguntas Frequentes"
          description="Confira as principais dúvidas sobreo o Tocando Viola Clube"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            // <Service key={item.id} item={item} />
            <FaqItem key={item.id} faq={item} className="faq-item" />
          ))}
        </Box>
        <Box>
        {/* <SectionHeading
          sx={styles.heading}
          title="Perguntas Frequêntes"
          description="Contate-nos no WhatsApp e tire todas as suas dúvidas"
        /> */}
        <Box sx={styles.loadMore}>
          <Button variant="text" onClick={() => window.open("https://api.whatsapp.com/send?phone=553584120636&text=Ol%C3%A1%20pessoal%20do%20Tocand%C3%B4%20Viola%20Clube!%20Estou%20com%20uma%20d%C3%BAvida.", '_blank')}>Ainda com dúvidas? Chama no WhatsApp</Button>
        </Box>
        {/* <Heading as="h4">Dúvidas?</Heading>
        <Text>Contate-nos no WhatsApp e tire todas as suas dúvidas</Text>
        <Button variant="primary">Chama no WhatsApp</Button> */}
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
  loadMore: {
    paddingTop: [null, null, null, 3],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
