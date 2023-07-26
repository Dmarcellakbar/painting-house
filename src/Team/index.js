import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';

import './team.css';

export default function gridListWith() {
  return (
    <Box id="Team" className="bg-profile" py={'8rem'}>
      <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Team Painting House
        </Heading>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Box
            role={'group'}
            p={6}
            maxW={'280px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            bgColor={'white'}
            shadow={'dark-lg'}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image src="avatar2.png" alt="Avatar" w={'100%'} h={'100%'} />
                </div>
                <div className="flip-card-back">
                  <Heading size="lg" fontSize="25px" mb={'1rem'}>
                    Muhammad Rafli Ragil Adi Putra
                  </Heading>
                  <Heading size="lg" fontSize="20px" mb={'1rem'}>
                    Founder
                  </Heading>
                  <p>Manajemen organisasi yang teratur dan tersistem</p>
                </div>
              </div>
            </div>
            <Text textAlign={'center'} fontWeight={'bold'}>
              Muhammad Rafli Ragil Adi Putra
            </Text>
            <Text textAlign={'center'}>Founder</Text>
          </Box>

          <Box
            role={'group'}
            p={6}
            maxW={'280px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            bgColor={'white'}
            shadow={'dark-lg'}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image src="avatar.png" alt="Avatar" w={'100%'} h={'100%'} />
                </div>
                <div className="flip-card-back">
                  <Heading size="lg" fontSize="25px" mb={'1rem'}>
                    Ikhdazahrotunni Saaul Mufidah
                  </Heading>
                  <Heading size="lg" fontSize="25px" mb={'1rem'}>
                    Finance
                  </Heading>
                  <p>
                    Me-manage keuangan dan membuat laporan keuangan dalam
                    menarik investor
                  </p>
                </div>
              </div>
            </div>
            <Text textAlign={'center'} fontWeight={'bold'}>
              Ikhdazahrotunni Saaul Mufidah
            </Text>
            <Text textAlign={'center'}>Finance</Text>
          </Box>

          <Box
            role={'group'}
            p={6}
            maxW={'280px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            bgColor={'white'}
            shadow={'dark-lg'}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image src="avatar.png" alt="Avatar" w={'100%'} h={'100%'} />
                </div>
                <div className="flip-card-back">
                  <Heading size="lg" fontSize="25px" mb={'1rem'}>
                    Sinta Krismaya
                  </Heading>
                  <Heading size="lg" fontSize="20px" mb={'1rem'}>
                    Marketing
                  </Heading>
                  <p>
                    Public speaking dan skill marketing dalam me-lobby konsumen
                    dan pelanggan
                  </p>
                </div>
              </div>
            </div>
            <Text textAlign={'center'} fontWeight={'bold'}>
              Sinta Krismaya
            </Text>
            <Text textAlign={'center'}>Marketing</Text>
          </Box>

          <Box
            role={'group'}
            p={6}
            maxW={'280px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            bgColor={'white'}
            shadow={'dark-lg'}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image src="avatar.png" alt="Avatar" w={'100%'} h={'100%'} />
                </div>
                <div className="flip-card-back">
                  <Heading size="lg" fontSize="25px" mb={'1rem'}>
                    Aprilisfiya Handayani
                  </Heading>
                  <Heading size="lg" fontSize="20px" mb={'1rem'}>
                    Supervisor Tutor
                  </Heading>
                  <Text>
                    Melukis dan memiliki relasi terhadap seniman yang menjadi
                    tutor dalam Painting House
                  </Text>
                </div>
              </div>
            </div>
            <Text textAlign={'center'} fontWeight={'bold'}>
              Aprilisfiya Handayani
            </Text>
            <Text textAlign={'center'}>Supervisor Tutor</Text>
          </Box>

          <Box
            role={'group'}
            p={6}
            maxW={'280px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            bgColor={'white'}
            shadow={'dark-lg'}
          >
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image src="avatar.png" alt="Avatar" w={'100%'} h={'100%'} />
                </div>
                <div className="flip-card-back">
                  <Heading size="lg" fontSize="25px" mb={'1rem'}>
                    Caterina Aruli Iskandar
                  </Heading>
                  <Heading size="lg" fontSize="20px" mb={'1rem'}>
                    IT
                  </Heading>
                  <Text>
                    Mengelola sosial media dengan tujuan branding bisnis
                  </Text>
                </div>
              </div>
            </div>
            <Text textAlign={'center'} fontWeight={'bold'}>
              Caterina Aruli Iskandar
            </Text>
            <Text textAlign={'center'}>IT</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
