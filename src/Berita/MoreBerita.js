import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function MoreBerita({ Children1, Children2, link }) {
  return (
    <>
      <Box background={'white'} boxShadow={'dark-lg'} rounded={'xl'} p={'4'}>
        <Heading fontSize={'2xl'} textAlign={'start'}>
          {Children1}
        </Heading>
        <Text color={'black'} fontSize={'16px'} textAlign={'start'} pt={'1rem'}>
          {Children2}
        </Text>
        <a href={link}>
          <Text
            color={'Blue'}
            fontSize={'16px'}
            textAlign={'end'}
            fontWeight={'bold'}
            pt={'2rem'}
          >
            Selengkapnya disini...
          </Text>
        </a>
      </Box>
    </>
  );
}
