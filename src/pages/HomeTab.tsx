import { Box, Text, Grid, Card, Title, Space } from '@mantine/core';
import home from '../../public/homebackground.jpg';

export const Home = () => {

  return (
    <Box>
      <Grid gutter='xl'>
      <Grid.Col span={6}>
          <Space h="xl" />
          <Title style={{ color: "#176c84"}}>Your partners in trust</Title>
          <Space h="md" />
          {/* <Text  style={{ textAlign: 'justify' }} size='sm' color="theme.9">Our consultancy stands on the pillar of independence, ensuring that our evaluations and recommendations are conducted without any vendor bias. This impartial stance, however, does not preclude us from leveraging strong relationships with various vendors, developed over years of industry engagement. Such connections are instrumental in addressing our clients' complex records management needs effectively.</Text> */}
          <Space h="md" />
          <Text  style={{ textAlign: 'justify' }} size='sm' color="theme.9">Tailoring solutions to the nuanced requirements of each client's situation is at the heart of our practice. With decades of industry experience as our foundation, we are poised to develop innovative solutions for the challenges you face in managing, organizing, classifying, and ensuring legal compliance of both paper-based and electronic records, alongside other essential documents.</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Space h="xl" />
          <Card shadow="sm" padding="lg" radius="md" withBorder >
            <img src={home}style={{ width: '100%' }} />
          </Card>
        </Grid.Col>
        
      </Grid>
    </Box>
  )
}
