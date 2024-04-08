import { Title, Text, Space, Box, Divider, Group, Stack } from '@mantine/core'
import { Icon24Hours, IconLayersIntersect, IconTrendingUp } from '@tabler/icons-react'
import img from '../../public/dalle1.jpg'
import { colors } from '../theme'
import { renderHighlightedText } from '../utils'

const home = [
  { 
    icon: <Icon24Hours color={colors[6]} size={30}/>,
    title: "Modern Strategies for Today’s Programming",
    text: 'Oakes Consulting redefines records management by strategically leveraging information as a vital asset for business growth, compliance, and efficiency. Beyond traditional approaches, we empower businesses to navigate legal and regulatory complexities, ensuring their success. By streamlining processes and adopting cutting-edge strategies, we transform records management into a powerful tool for reducing risks and costs, enhancing business intelligence, compliance, and operational efficiency.'
  },
  { 
    icon: <IconLayersIntersect color={colors[6]} size={30}/>,
    title: 'A New Paradigm Of Information Cultivation',
    text: "Imagine a world where every piece of information is trusted and used confidently to move the business forward. Our vision is to lead businesses into this new reality by wielding records management as a powerful tool to maximize data value while minimizing redundant, obsolete, and transitory (ROT) information. We champion the cause of records &amp; information management (RIM) by embedding best practices into the DNA of your organization and complemented by comprehensive training and awareness."
  },
  { 
    icon: <IconTrendingUp color={colors[6]} size={30}/>,
    title: 'A Diverse Portfolio OF Success',
    text: "Patrick R. Oakes Consulting is proud to partner with a broad spectrum of sectors, including corporate giants, government entities, and spirited nonprofits. Our expertise is universal, yet our solutions are tailored. We understand the unique challenges and opportunities within various industries, equipping organizations with the tools, knowledge, and strategy to manage their information more effectively and securely."
  }
]

export default ({searchQuery}: any) => {
  console.log('searchQuery home', searchQuery)

  return (
    <Box>
      <div style={{ height: '200px', overflow: 'hidden', width: '100%' }}>
          <img src={img} style={{ width: '100%', height: 'auto', objectFit: 'cover', position: 'relative', top: '-33.33%' }} />
      </div>
      {home.map((item) => (
        <Stack key={item.title}>
          <Space h="md" />
          <Group>
            {item.icon}
            <Title order={3} style={{ color: colors[6], fontVariant: 'small-caps', fontWeight: '400' }}>{item.title}</Title>
          </Group>
          <Divider color={colors[6]} p='xs'/>
          <Text size="sm" style={{ textAlign: 'justify' }}>
            {renderHighlightedText(item.text, searchQuery)}
          </Text>
        </Stack>
      ))}
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </Box>
  )
}