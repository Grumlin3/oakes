import { Timeline, Text, Box, Space, Title, Grid, Stack, Group, Divider } from '@mantine/core'
import { IconAccessPoint, IconCertificate, IconShieldHalfFilled, IconUsers, IconWorldCheck  } from '@tabler/icons-react'
import { colors } from '../theme'
import { renderHighlightedText } from '../utils'
import patrick from '../../public/patrick.jpg'
import { useMediaQuery } from '@mantine/hooks'

export const about = [
  {
    icon: <IconWorldCheck size={30} />,
    value: 'Decades of Industry Leadership',
    short: 'Crafting Global Solutions',
    long: "With over 20 years of experience, Patrick R. Oakes Consulting brings a wealth of knowledge and expertise to the table. Our history of creating global programs for industry leaders in retail and technology showcases our ability to navigate complex records management challenges and deliver solutions that are not just effective but transformative."
  },
  {
    icon: <IconUsers size={30} />,
    value: 'Client-Centric Solutions',
    short: 'Needs Based Strategies',
    long: "Our approach is rooted in understanding the unique needs and challenges of our clients. Byadopting a policy by design mentality, we ensure that the solutions we develop are scalable, automated, and tailored to reduce legal and regulatory risks while minimizing costs. Our dedication to client satisfaction and maintaining low overhead ensures that we deliver high-quality, cost-effective services."
  },
  {
    icon: <IconAccessPoint size={30} />,
    value: 'Intelligent Connections',
    short: 'Leveraging Relationships for Comprehensive Solutions',
    long: "Patrick R Oakes Consulting prides itself on its extensive network of contacts, which spans across corporate, government, and nonprofit sectors. This vast network not only enriches our understanding of the records management landscape but also allows us to bring innovative and holistic solutions to our clients, ensuring they receive the best possible advice and services."
  },
  {
    icon: <IconShieldHalfFilled size={30} />,
    value: 'Excellence and Trust',
    short: 'The Foundation of Our Success',
    long: "At the heart of Patrick R. Oakes Consulting is our unwavering commitment to excellence and trust. By focusing on delivering results and leading effectively, we strive to exceed expectations and provide services that truly make a difference. Our ability to analyze critical business requirements, identify opportunities and deficiencies, and develop innovative solutions is what sets us apart and drives our continued success and growth."
  }
]

export default ({searchQuery}: any) => {
  const isSmallerThanLarge = useMediaQuery('(max-width: 61em)');

  return (
    <Box>
     
        <Grid overflow='hidden'>
        <Grid.Col span={{ base: 12, xs: 12, sm: 5, md: 5, lg: 5, xl: 5 }}>
            <img src={patrick} style={{ width: isSmallerThanLarge ? '80%' : '100%', margin: 'auto', display: 'block' }}/>
            <Space h="md" />
            <Stack>
              <Title order={3} style={{ fontVariant: 'small-caps', color: colors[8]  }}>Accreditations</Title>
              <Divider mt='-10px' />
              <Group>
                <IconCertificate color={colors[8]} size={30} />
                <Title order={5} style={{ whitespace: 'normal', maxWidth: '85%' }}>Certified Records Analyst <br/> Institute of Certified Records Managers (ICRM)</Title>
              </Group>
              <Group>
                <IconCertificate color={colors[8]} size={30} />
                <Title order={5} style={{ whitespace: 'normal', maxWidth: '85%' }}>Masters in Nonprofit Management <br/> Regis University</Title>
              </Group>

              <Title order={3} style={{ fontVariant: 'small-caps', color: colors[8] }}>Certificates</Title>
              <Divider mt='-10px' />
              <Group>
                <IconCertificate color={colors[8]} size={30} />
                <Title order={5} style={{ whitespace: 'normal', maxWidth: '85%' }}>Records & Information Management <br/> ARMA International</Title>
              </Group>
              <Group>
                <IconCertificate color={colors[8]} size={30} />
                <Title order={5} style={{ whitespace: 'normal', maxWidth: '85%' }}>Program Management</Title>
              </Group>
              <Group>
                <IconCertificate color={colors[8]} size={30} />
                <Title order={5} style={{ whitespace: 'normal', maxWidth: '85%' }}>Leadership Development</Title>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 12, sm: 7, md: 7, lg: 7, xl: 7 }}>
            <Timeline active={6} bulletSize={50} lineWidth={2} color={colors[8]}>
              {about.map((item) => (
                <Timeline.Item key={item.value} bullet={item.icon} title={<Title order={3} style={{ color: colors[8], fontVariant: 'small-caps', fontWeight: '400' }}><strong>{item.value}</strong></Title>}>
                  <Text size='sm' pr='lg' style={{ textAlign: 'justify', marginTop: isSmallerThanLarge ? '20px' : '0px', marginLeft: isSmallerThanLarge ? '-20px' : '0px' }}>
                    {renderHighlightedText(item.long, searchQuery)}
                  </Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </Grid.Col>
        </Grid>

      <Space h="xl" />
      <Space h="xl" />
    </Box>
  )
}
