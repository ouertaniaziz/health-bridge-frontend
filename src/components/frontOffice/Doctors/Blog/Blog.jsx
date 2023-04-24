import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
    Button,
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map(tag => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = props => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Col style={{ width: '20%' }} className="m-2">
      <Card>
        <Container maxW={'7xl'} p="12">
          <Link to="/add-blog">
            <Button
              marginTop="5"
              /* flex={1} */
              px={4}
              fontSize={'sm'}
              rounded={'full'}
              bg={'lightblue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
            >
              Add Blog
            </Button>
          </Link>
          <Heading as="h2" marginTop="5">
            Latest articles
          </Heading>
          <Divider marginTop="5" />
          <Wrap spacing="30px" marginTop="5">
            <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
              <Box w="100%">
                <Box borderRadius="lg" overflow="hidden">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Image
                      transform="scale(1.0)"
                      src={
                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                      }
                      alt="some text"
                      objectFit="contain"
                      width="100%"
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: 'scale(1.05)',
                      }}
                    />
                  </Link>
                </Box>
                <Button
                  marginTop="5"
                  /* flex={1} */
                  px={4}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}
                >
                  Modify Blog
                </Button>
                <Button
                  marginTop="5"
                  /* flex={1} */
                  px={4}
                  fontSize={'sm'}
                  rounded={'full'}
                  bg={'blue.400'}
                  color={'white'}
                  boxShadow={
                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                  }
                  _hover={{
                    bg: 'blue.500',
                  }}
                  _focus={{
                    bg: 'blue.500',
                  }}
                 
                >
                  Delete Blog
                </Button>

                <Heading fontSize="xl" marginTop="2">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: 'none' }}
                  >
                    Some blog title
                  </Link>
                </Heading>
                <Text as="p" fontSize="md" marginTop="2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
                <BlogAuthor
                  name="John Doe"
                  date={new Date('2021-04-06T19:01:27Z')}
                />
              </Box>
            </WrapItem>
          </Wrap>
        </Container>
      </Card>
    </Col>
  );
};

export default ArticleList;
