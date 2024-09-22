import { Heading, Text } from '@chakra-ui/layout';
import Container from '@/layouts/container';
import { ContentWrapper } from '@/layouts/contentWrapper';

const Blog = () => {
  return (
    <Container title="Blog | Uday Gaidhane">
      <ContentWrapper>
        <Heading as="h1" variant="h2">
          Blog 🖊
        </Heading>
        <Text>
          This page will soon be my digital garden
          <span>🌱</span>
        </Text>
        <Text>
          It will be home to all of my thoughts and ideas around tech.{' '}
        </Text>
      </ContentWrapper>
    </Container>
  );
};

export default Blog;
