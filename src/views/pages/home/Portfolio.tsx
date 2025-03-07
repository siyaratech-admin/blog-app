import PageContainer from 'src/components/container/PageContainer';
import HeaderAlert from '../../../components/home/shared/header/HeaderAlert';
import HpHeader from '../../../components/home/shared/header/HpHeader';
import C2a from '../../../components/home/shared/c2a';
import Footer from '../../../components/home/shared/footer';
import Banner from '../../../components/home/portfolio/Banner';
import ScrollToTop from '../../../components/home/shared/scroll-to-top';
import GalleryCard from '../../../components/apps/userprofile/gallery/GalleryCard';
import { Box, Container } from '@mui/material';
import { UserDataProvider } from "src/context/UserDataContext/index";

const PricingPage = () => {
  return (
    <UserDataProvider>
      <PageContainer title="Portfolio" description="this is Portfolio">
        <HeaderAlert />
        <HpHeader />
        <Banner />
        <Box my={3}>
          <Container maxWidth="lg">
            <GalleryCard />
          </Container>
        </Box>
        {/* <C2a /> */}
        <Footer />
        <ScrollToTop />
      </PageContainer>
    </UserDataProvider>
  );
};

export default PricingPage;
