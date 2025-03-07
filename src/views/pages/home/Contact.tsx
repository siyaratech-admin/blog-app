import PageContainer from 'src/components/container/PageContainer';
import HeaderAlert from '../../../components/home/shared/header/HeaderAlert';
import HpHeader from '../../../components/home/shared/header/HpHeader';

import C2a from '../../../components/home/shared/c2a';
import Footer from '../../../components/home/shared/footer';
import Banner from '../../../components/home/contact/banner';
import Form from '../../../components/home/contact/form';
import ScrollToTop from '../../../components/home/shared/scroll-to-top';

const Contact = () => {
    return (
        <PageContainer title="Contact" description="this is Contact">

            {/* <HeaderAlert /> */}
            <HpHeader />
            <Banner />
            <Form />
            {/* <C2a /> */}
            <Footer />
            <ScrollToTop />
        </PageContainer>
    );
};

export default Contact;
