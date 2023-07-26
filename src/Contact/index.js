import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

import { FaWhatsapp } from 'react-icons/fa';
import '../bgstyle.css';

export default function CallToActionWithVideo() {
  return (
    <Box pt={'2rem'} id="home" className="bg-hero">
      <Container maxW={'5xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              height={'550px'}
              rounded={'2xl'}
              boxShadow={'dark-lg'}
              shadow={'dark-lg'}
              overflow={'hidden'}
              bgColor={'white'}
              p={'0.5rem'}
            >
              <Image
                alt={'painting class image'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={'paintingclass.jpeg'}
              />
            </Box>
          </Flex>

          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}
                fontWeight={'extrabold'}
              >
                Oil Painting Class
              </Text>
              <br />
              <Text as={'span'} color={'#45459B'} fontWeight={'bold'}>
                Untuk Pemula
              </Text>
            </Heading>
            <Text color={'black'} fontWeight={'bold'}>
              Day: Sunday Morning (09.00 - 12.00 WIB)
              <br />
              Address: Jl. Bendungan, Sigura-Gura No.33, Kota Malang
              <br />
              Cost: Rp. 450.000
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=+6283837026096"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'purple'}
                  bg={'#45459B'}
                  _hover={{ bg: 'red.500' }}
                  leftIcon={<FaWhatsapp h={4} w={4} color={'gray.300'} />}
                >
                  Ikhda
                </Button>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+6285607682564"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'purple'}
                  bg={'#45459B'}
                  _hover={{ bg: 'red.500' }}
                  leftIcon={<FaWhatsapp h={4} w={4} color={'gray.300'} />}
                >
                  Aprilis
                </Button>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
