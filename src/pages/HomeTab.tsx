import { Box, Text, Grid, Card, Title, Space, List, ThemeIcon, rem, Center } from '@mantine/core';
import home from '../../public/homebackground.jpg';
import { IconChecks } from '@tabler/icons-react';

export const Home = () => {

  return (
    <Box>
      <Grid gutter='xl'>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <Space h="xl" />
          <Title style={{ color: "##0063FF"}}>Your partners in trust</Title>
          <Space h="md" />
          {/* <Text  style={{ textAlign: 'justify' }} size='sm' color="theme.9">Our consultancy stands on the pillar of independence, ensuring that our evaluations and recommendations are conducted without any vendor bias. This impartial stance, however, does not preclude us from leveraging strong relationships with various vendors, developed over years of industry engagement. Such connections are instrumental in addressing our clients' complex records management needs effectively.</Text> */}
          <Space h="md" />
          <Text  style={{ textAlign: 'justify' }} size='sm' color="theme.9">Tailoring solutions to the nuanced requirements of each client's situation is at the heart of our practice. With decades of industry experience as our foundation, we are poised to develop innovative solutions for the challenges you face in managing, organizing, classifying, and ensuring legal compliance of both paper-based and electronic records, alongside other essential documents.</Text>
          <Space h="md" />
          <Text color="theme.9" size="sm">Operations and Program Manager with 20 years of managing stakeholder relationships, developing comprehensive solutions to streamline operations, and improve customer experience.</Text>
          <Space h="md" />
          <Text color="theme.9" size="sm">Able to navigate ambiguous environments, take initiative to problem solve and create pathways ofr the team and organizational success. Focused on results as an effectual leader with ability to analyze and organization's critical business requirements, identify both opportunities and deficiencies, and develop and innovative solution to ensure compliance and elevate the end user experience.</Text>

        </Grid.Col>
        <Grid.Col span={{ base: 0, md: 6, lg: 4 }}>
          <Center>
          <Space h={{ base: 0, sm: 480, lg: 540 }}/>
          <List
            spacing="xs"
            size="xl"
            center
     
            icon={
              <ThemeIcon color="#white" size={36} radius="md">
                <IconChecks style={{  color: "#0063FF", width: rem(40), height: rem(40) }} />
              </ThemeIcon>
            }
          >
            <List.Item style={{  color: "#0063FF" }}>collaboration</List.Item>
            <List.Item style={{  color: "#0063FF" }}>compliance</List.Item>
            <List.Item style={{  color: "#0063FF" }}>security</List.Item>
            <List.Item style={{  color: "#0063FF" }}>solutions</List.Item>
            <List.Item style={{  color: "#0063FF" }}>support</List.Item>
          </List>
          </Center>
    
        </Grid.Col>        
      </Grid>
      <Space h={{ base: 30, sm: 0, lg: 0 }}/>
      <Center>
        <Card shadow="sm" padding="lg" radius="md" withBorder w='80%'>
          <img src={home}style={{ width: '100%' }} />
        </Card>
      </Center>
      <Space h="xl" />
      <Space h="xl" />
    </Box>
  )
}