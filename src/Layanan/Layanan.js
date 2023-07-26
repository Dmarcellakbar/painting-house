import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';

import '../bgstyle.css';

const Card = ({ heading, description, image, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bgColor={'white'}
      shadow={'dark-lg'}
      textAlign={'center'}
    >
      <Stack align={'center'} spacing={2}>
        <Flex w={230} h={150}>
          {image}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Layanan() {
  return (
    <Box py={'5rem'} id="Product" className="bg-layanan">
      <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Layanan Kami
        </Heading>
        <Text color={'black'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Berikut ini beberapa aktivitas yang sudah dilakukan Painting House
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex
          flexWrap="wrap"
          gridGap={6}
          justify="center"
          px={{ base: '2rem', md: 0 }}
        >
          <Card
            heading={'Pelatihan melukis diatas kanvas'}
            image={<Image src="1.png" w={'100%'} h={'100%'} />}
            description={'Pelatihan melukis diatas kanvas'}
            href={'#'}
          />
          <Card
            heading={'Pelatihan melukis tekstil'}
            image={<Image src="2.png" w={'100%'} h={'100%'} />}
            description={'Pelatihan melukis tekstil'}
            href={'#'}
          />
          <Card
            heading={'Pelatihan Melukis daun kering'}
            image={<Image src="3.png" w={'100%'} h={'100%'} />}
            description={'Pelatihan Melukis daun kering'}
            href={'#'}
          />
          <Card
            heading={'Pelatihan Eco Printing'}
            image={<Image src="4.png" w={'100%'} h={'100%'} />}
            description={'Pelatihan Eco Printing'}
            href={'#'}
          />
          <Card
            heading={'Produk eco Printing'}
            image={<Image src="5.png" w={'100%'} h={'100%'} />}
            description={'Produk eco Printing'}
            href={'#'}
          />
          <Card
            heading={'Produk Lukisan tekstil'}
            image={<Image src="6.png" w={'100%'} h={'100%'} />}
            description={'Produk eco Printing'}
            href={'#'}
          />
          <Card
            heading={'Produk Lukisan dari pelepah pisang'}
            image={<Image src="7.png" w={'100%'} h={'100%'} />}
            description={'Produk eco Printing'}
            href={'#'}
          />
          <Card
            heading={'Produk Lukisan daun kering'}
            image={<Image src="8.png" w={'100%'} h={'100%'} />}
            description={'Produk eco Printing'}
            href={'#'}
          />
          <Card
            heading={'Produk lukisan diatas kanvas'}
            image={<Image src="9.png" w={'100%'} h={'100%'} />}
            description={'Produk eco Printing'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
