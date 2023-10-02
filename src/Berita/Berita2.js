import React, { Suspense } from 'react';
import Loader from '../Loader/Loader';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const Navbar = React.lazy(() => import('../Navbar/Navbar'));

export default function Berita1() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Box pt={'6rem'}>
          <Box background={'white'} rounded={'xl'} p={'10'}>
            <Heading fontSize={'3xl'} textAlign={'start'}>
              Painting house merupakan bisnis kursus dan juga penjualan lukisan
            </Heading>
            <SimpleGrid mt={'1rem'} columns={{ sm: 1, md: 2 }} spacing={0}>
              <Box maxW={{ sm: '200', md: '500' }} pt={'1rem'}>
                <img src="/berita 2/1.png" alt="" />
              </Box>
              <Text
                color={'black'}
                fontSize={'16px'}
                textAlign={'start'}
                pt={'1rem'}
              >
                Painting house merupakan bisnis kursus dan juga penjualan
                lukisan. Founder dari painting house adalah Aprilisfiya
                Handayani. Usaha ini disupport oleh pendanaan P2MW dengan tahap
                bertumbuh. Kursus lukis yang ditawarkan untuk umum jadi untuk
                yang ingin mendaftar dapat secara langsung dafatr pada link
                pendafatar yang tersedia di ig dan website resmi kami. Kursus
                dimulai dari kelas Beginner dimana, akan ada pengenalan seni
                lukis dasar ke beberapa media lukis seperti kain, kanvas, dan
                topi. Untuk kelas Intermediate memberikan nilai plus seperti
                teknik-teknik lukis dan pengenalan lukisan pada bahan alami.
                Dikelas ini akan ada melukis diatas kanvas namun bahan yang
                digunakan adalah mix dari bahan alami. Selain itu ada kelas
                advance yaitu kelas pendalaman teknik lukis.
                <br />
                <br />
                Usaha ini bekerjasama dengan beberapa influencer ternama seperti
                Selly dan Mutiara. Influencer mengaku puas dengan produk yang
                dikirimkan, bahkan mereka secara pribadi membagikan momen ketika
                mengenakan produk tersebut. Seperti yang dilakukan selly lewat
                unggahan di sosial medianya @sellyalsa Whila Nurayu Febrika,
                memposting vidio maupun foto secara berulang padahal dalm
                kontrak hanya cukup 1 postingan, hal ini karena influencer juga
                merasa puas akan produk mereka pakai. Jadi bukan hanya sekedar
                endors namun mereka mengapresiasi nilai seni yang ada pada
                karya. Bisnis ini mampu memiliki daya tarik karena banyak
                pilihan pelatihan yang bervariasi dari segi media maupun dari
                segi teknik.
                <br />
                <br />
                Perkembangannya mulai dari penggunaan cat berbahan dasar akrilik
                saja menjadi cat yang lebih ramah lingkungan seperti menggunakan
                bahan alami dan pewarna alami. Harga yang ditawarkan untuk karya
                dan kursus sangatlah terjangkau. Untuk kursus kami menawarkan
                mulai dari 80 ribuan saja dan untuk karya kami mulai dari harga
                50 ribuan saja.
                <br />
                <br />
              </Text>
            </SimpleGrid>
          </Box>
        </Box>
      </Suspense>
    </>
  );
}
