import { Box, Container, Heading, Stack, SimpleGrid } from '@chakra-ui/react';
import MoreBerita from './MoreBerita';
import '../bgstyle.css';

export default function Berita() {
  return (
    <Box px={4} py={'8rem'} id="berita" className="bg-profile">
      <Box>
        <Stack
          spacing={4}
          as={Container}
          maxW={'6xl'}
          textAlign={'center'}
          className="bg-profile-text"
        >
          <Heading fontSize={'5xl'}>Berita</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
            <MoreBerita
              Children1={
                'Keterampilan Melukis Itu Bebas, Tidak Harus di Atas Canvas!'
              }
              Children2={
                'Kesibukan dalam menjadi asisten laboratorium akuntansi FEB UMM, tidak menjadi hambatan dalam menyalurkan hobi dan rasa ingin belajar tentang seni dua dimensi yakni seni melukis. '
              }
              link={'/berita-1'}
            />
            <MoreBerita
              Children1={
                'Painting house merupakan bisnis kursus dan juga penjualan lukisan'
              }
              Children2={
                'Founder dari painting house adalah Aprilisfiya Handayani. Usaha ini disupport oleh pendanaan P2MW dengan tahap bertumbuh. '
              }
              link={'/berita-2'}
            />
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
}
