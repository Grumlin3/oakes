import { Box, Text, Grid, Card, Title, Space, Blockquote, Center } from '@mantine/core';
import home from '../../public/homebackground.jpg';
import { IconQuote } from '@tabler/icons-react';

export const Home = () => {

  return (
    <Box>
      <Grid gutter='xl'>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <img src={home}style={{ width: '100%' }} />
          </Card>
          <Space h="md" />
          <Title>Your partner in trust</Title>
          <Space h="xs" />
          <Text  style={{ textAlign: 'justify' }} size='sm'>Tailoring solutions to the nuanced requirements of each client's situation is at the heart of our practice. With decades of industry experience as our foundation, we are poised to develop innovative solutions for the challenges you face in managing, organizing, classifying, and ensuring legal compliance of both paper-based and electronic records, alongside other essential documents.</Text>
          <Space h="md" />
          <Text size="sm">Operations and Program Manager with 20 years of managing stakeholder relationships, developing comprehensive solutions to streamline operations, and improve customer experience.</Text>
          <Space h="md" />
        </Grid.Col>
        <Grid.Col span={{ base: 0, md: 6, lg: 4 }}>
          <Blockquote  maw={400} cite="– Apex Dynamics Group" icon={<IconQuote />}>
            Our experience with Oakes Consulting was exemplary. Patrick's depth of knowledge, professionalism, and meticulous approach significantly elevated our records management practices. His guidance not only ensured compliance but also optimized our processes, resulting in tangible improvements in efficiency and organization. We highly recommend Oakes Consulting to any organization seeking expertise in records management.
          </Blockquote>
        </Grid.Col>        
      </Grid>
    </Box>
  )
}