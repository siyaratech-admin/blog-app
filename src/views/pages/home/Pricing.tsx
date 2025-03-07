import PageContainer from 'src/components/container/PageContainer';
import HeaderAlert from '../../../components/home/shared/header/HeaderAlert';
import HpHeader from '../../../components/home/shared/header/HpHeader';
import Pricing from '../../../components/home/shared/pricing';
import C2a from '../../../components/home/shared/c2a';
import Footer from '../../../components/home/shared/footer';
import Banner from '../../../components/home/pricing/Banner';
import ScrollToTop from '../../../components/home/shared/scroll-to-top';

const PricingPage = () => {
    return (
        <PageContainer title="Pricing" description="this is Pricing">

            <HeaderAlert />
            <HpHeader />
            <Banner />
            <Pricing />
            {/* <C2a /> */}
            <Footer />
            <ScrollToTop />
        </PageContainer>
    );
};

export default PricingPage;
