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
            <Heading fontSize={'2xl'} textAlign={'start'}>
              Keterampilan Melukis Itu Bebas, Tidak Harus di Atas Canvas!
            </Heading>
            <Box maxW={{ sm: '200', md: '500' }} pt={'1rem'}>
              <img src="/berita 1/1.jpg" alt="" />
            </Box>
            <Text
              color={'black'}
              fontSize={'16px'}
              textAlign={'start'}
              pt={'1rem'}
            >
              Kesibukan dalam menjadi asisten laboratorium akuntansi FEB UMM,
              tidak menjadi hambatan dalam menyalurkan hobi dan rasa ingin
              belajar tentang seni dua dimensi, yakni seni melukis. Untuk
              mewadahi hal ini, sebanyak 9 orang asisten lab akuntansi kompak
              mendaftar sebagai peserta kursus lukis di Painting House.
              <br />
              <br />
              Painting House merupakan salah satu usaha dalam mewadahi
              penyaluran hobi dan rasa ingin belajar seni yang menyediakan jasa
              kursus melukis dengan waktu yang fleksibel. Inilah yang menjadi
              keunggulan Painting House, terutama dalam mewadahi mahasiswa yang
              memiliki kesibukan yang tidak terjadwal.
              <br />
              <br />
              Bukan di atas canvas pada umumnya, namun media yang digunakan
              berupa topi dan hijab. Didampingi oleh mentor yang profesional,
              para peserta kursus sibuk menggoreskan kuas. Sebuah hijab dan topi
              yang semula polos berubah memiliki motif lukisan indah. Para
              peserta bebas memilih tema dalam melukis.
              <br />
              <br />
              Salah satu peserta dalam kurus ini, ada Fadly (20) yang saat ini
              menempuh semester 5 mengakui melukis memang menjadi hobinya. Hanya
              saja ekspresi seni itu biasanya dia tuangkan di atas canvas.
              Sedangkan kali ini media yang digunakan berupa topi. Tentu saja
              ini menjadi tantangan tersendiri.
              <br />
              <br />
              Tak hanya tertantang, Fadly dan beberapa peserta mengaku merasakan
              sensasi berbeda saat berkarya di topi dan hijab. Hal itu meliputi
              tata cara melukis hingga teknik membuat cat melekat sempurna.
              Selain itu, cat yang tergores di kain kerap kali susah hilang
              sehingga dibutuhkan konsentrasi dalam menggoreskan kuas.
              <br />
              <br />
              "Buat adrenalin kita naik begitu, untuk mencoba hal-hal baru.
              Ternyata lebih susah dan tricky yang ini (melukis di atas topi)
              daripada pakai canvas. Kalau salah lukis, catnya susah hilang dan
              harus lebih tricky buat timpa pakai warna yang lain" ujar remaja
              itu.
            </Text>
            <SimpleGrid mt={'1rem'} columns={{ sm: 1, md: 2 }} spacing={2}>
              <Box maxW={{ sm: '200', md: '500' }}>
                <img src="/berita 1/2.jpg" alt="" />
              </Box>
              <Box maxW={{ sm: '200', md: '500' }}>
                <img src="/berita 1/3.jpg" alt="" />
              </Box>
              <Box maxW={{ sm: '200', md: '500' }}>
                <img src="/berita 1/4.jpg" alt="" />
              </Box>
              <Box maxW={{ sm: '200', md: '500' }}>
                <img src="/berita 1/5.jpg" alt="" />
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Suspense>
    </>
  );
}
