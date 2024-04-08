import { Timeline, Text, Box, Space, Title } from '@mantine/core';
import { IconNotebook  } from '@tabler/icons-react';
import { colors } from '../theme';

export const about = [
  {
    value: 'Decades of Industry Leadership',
    short: 'Crafting Global Solutions',
    long: 'With over 20 years of experience, Oakes Consulting brings a wealth of knowledge and expertise to the table. Our history of creating global programs for industry leaders in retail and technology showcases our ability to navigate complex records management challenges and deliver solutions that are not just effective but transformative.'
  },
  {
    value: 'Client-Centric Solutions',
    short: 'Needs Based Strategies',
    long: 'Our approach is rooted in understanding the unique needs and challenges of our clients. By adopting a policy by design mentality, we ensure that the solutions we develop are scalable, automated, and tailored to reduce legal and regulatory risks while minimizing costs. Our dedication to client satisfaction and maintaining low overhead ensures that we deliver high-quality, cost-effective services.'
  },
  {
    value: 'Intelligent Connections',
    short: 'Leveraging Relationships for Comprehensive Solutions',
    long: 'Oakes Consulting prides itself on its extensive network of contacts, which spans across corporate, government, and nonprofit sectors. This vast network not only enriches our understanding of the records management landscape but also allows us to bring innovative and holistic solutions to our clients, ensuring they receive the best possible advice and services.'
  },
  {
    value: 'Excellence and Trust',
    short: 'The Foundation of Our Success',
    long: 'At the heart of Oakes Consulting is our unwavering commitment to excellence and trust. By focusing on delivering results and leading effectively, we strive to exceed expectations and provide services that truly make a difference. Our ability to analyze critical business requirements, identify opportunities and deficiencies, and develop innovative solutions is what sets us apart and drives our continued success and growth.'
  }

]

export const About = () => {
  return (
    <Box>
      <Timeline active={6} bulletSize={50} lineWidth={2} color={colors[6]}>
      {about.map((item) => (
        <Timeline.Item bullet={<IconNotebook size={30} />} title={<Title order={3} style={{ color: colors[6], fontVariant: 'small-caps', fontWeight: '400' }}>{item.value}</Title>}>
          <Text mt='-4' mb='2'>{item.short}</Text>
          <Text size='sm' pr='lg'>{item.long}</Text>
        </Timeline.Item>
      ))}
      </Timeline>
      <Space h="xl" />
      <Space h="xl" />
    </Box>
  )
}
