import PageContainer from 'src/components/container/PageContainer';
import Banner from 'src/components/home/homepage/banner/Banner';
import HeaderAlert from 'src/components/home/shared/header/HeaderAlert';
import HpHeader from 'src/components/home/shared/header/HpHeader';
import Features from 'src/components/home/homepage/features/Features';
import DefendFocus from 'src/components/home/homepage/defend-focus';
import Leadership from 'src/components/home/shared/leadership';
import PowerfulDozens from 'src/components/home/homepage/powerful-dozens';
import Reviews from 'src/components/home/shared/reviews';
import ExceptionalFeature from 'src/components/home/homepage/exceptional-feature';
import Pricing from 'src/components/home/shared/pricing';
import FAQ from 'src/components/home/homepage/faq';
import C2a from 'src/components/home/shared/c2a';
import Footer from 'src/components/home/shared/footer';
import ScrollToTop from 'src/components/home/shared/scroll-to-top';

const HomePage = () => {
  return (
    <PageContainer title="Homepage" description="this is Homepage">
      <HeaderAlert />
      <HpHeader />
      <Banner />
      <Features />
      <DefendFocus />
      <Leadership />
      <PowerfulDozens />
      <Reviews />
      <ExceptionalFeature />
      <Pricing />
      <FAQ />
      {/* <C2a /> */}
      <Footer />
      <ScrollToTop />
    </PageContainer>
  );
};

export default HomePage;
