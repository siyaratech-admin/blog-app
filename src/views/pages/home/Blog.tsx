import PageContainer from 'src/components/container/PageContainer';
import HeaderAlert from '../../../components/home/shared/header/HeaderAlert';
import HpHeader from '../../../components/home/shared/header/HpHeader';
import C2a from '../../../components/home/shared/c2a';
import Footer from '../../../components/home/shared/footer';
import Banner from '../../../components/home/blog/banner';
import ScrollToTop from '../../../components/home/shared/scroll-to-top';
import BlogListing from 'src/components/apps/blog/BlogListing';
import { Container } from '@mui/system';
import { BlogProvider } from 'src/context/BlogContext';

const BlogPage = () => {
  return (
    <>
      <BlogProvider>
        <PageContainer title="Blog" description="this is Blog">
          {/* <HeaderAlert /> */}
          <HpHeader />
          <Banner />
          <Container maxWidth="lg" sx={{ mt: 5 }}>
            <BlogListing />
          </Container>
          {/* <C2a /> */}
          <Footer />
          <ScrollToTop />
        </PageContainer>
      </BlogProvider>
    </>
  );
};

export default BlogPage;
