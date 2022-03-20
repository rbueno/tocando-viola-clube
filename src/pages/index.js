/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Faq from 'sections/faq'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Tocandô Viola Clube"
          description="Clube com aulas de viola caipira com o renomado professor e músico Zé Helder."
        />
        <Banner />
        <Services />
        <WhyUs />
        <OtherServices />
        <Testimonials />
        <OurTeam />
        <Faq />
        {/* <SubscribeUs /> */}
      </Layout>
    </ThemeProvider>
  );
}
