import { Box, Container, Heading, Text, Stack } from '@chakra-ui/react';

import '../bgstyle.css';
import Statistics from './statistic';

export default function Profile() {
  return (
    <Box px={4} py={'8rem'} id="profile" className="bg-profile">
      <Stack
        spacing={4}
        as={Container}
        maxW={'6xl'}
        textAlign={'center'}
        className="bg-profile-text"
      >
        <Heading fontSize={'3xl'}>Painting House</Heading>
        <Text color={'black'} fontSize={'18px'}>
          Painting House termasuk dalam kategori usaha Ekonomi Kreatif dalam 3
          bentuk yaitu penjualan produk kesenian. Art live action, serta layanan
          kursus melukis bagi para pecinta seni. Usaha ini berbeda dengan usaha
          sektor seni yang sudah ada, yakni selain menjual lukisan, painting
          house juga memberikan layanan jasa kursus melukis dengan teknik
          melukis di berbagai media seperti melukis diatas kanvas, topi dan
          hijab. Selain itu akan diajarkan juga melukis dari daun kering dan
          melukis dari cat yang berbahan alami seperti wortel, daun telang dan
          kunyit.
        </Text>
      </Stack>

      <Statistics />
    </Box>
  );
}
