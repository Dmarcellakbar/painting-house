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

import '../bgstyle.css';

export default function CallToActionWithVideo() {
  return (
    <Box py={'10rem'} id="home" className="bg-hero">
      <Container maxW={'5xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
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
                Painting House
              </Text>
              <br />
              <Text as={'span'} color={'#45459B'} fontWeight={'bold'}>
                Creative Education and Fashion
              </Text>
            </Heading>
            <Text color={'black'}>
              Painting House menjual lukisan dan memberikan layanan jasa kursus
              melukis dengan teknik melukis di berbagai media seperti melukis
              diatas kanvas, topi dan hijab.
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
                >
                  Contact
                </Button>
              </a>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            {/* <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          /> */}
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'dark-lg'}
              shadow={'dark-lg'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={'animate.png'}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
