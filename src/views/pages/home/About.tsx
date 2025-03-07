import PageContainer from 'src/components/container/PageContainer';
import HeaderAlert from '../../../components/home/shared/header/HeaderAlert';
import HpHeader from '../../../components/home/shared/header/HpHeader';
import Leadership from '../../../components/home/shared/leadership';
import Reviews from '../../../components/home/shared/reviews';
import Pricing from '../../../components/home/shared/pricing';
import C2a from '../../../components/home/shared/c2a';
import Footer from '../../../components/home/shared/footer';
import Banner from '../../../components/home/about/banner';
import Process from '../../../components/home/about/process';
import KeyMetric from '../../../components/home/about/key-metric';
import ScrollToTop from '../../../components/home/shared/scroll-to-top';

const About = () => {
  return (
    <PageContainer title="About" description="this is About">
      <HeaderAlert />
      <HpHeader />
      <Banner />
      <Process />
      <KeyMetric />
      <Leadership />
      <Reviews />
      <Pricing />
      <C2a />
      <Footer />
      <ScrollToTop />
    </PageContainer>
  );
};

export default About;
