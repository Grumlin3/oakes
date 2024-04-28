import { Title, Text, Space, Box, Divider, Group, Stack } from '@mantine/core'
import { Icon24Hours, IconLayersIntersect, IconTrendingUp } from '@tabler/icons-react'
import three from '../../public/AdobeStock_435970069.jpg'
import two from '../../public/AdobeStock_745174148.jpg'
import one from '../../public/AdobeStock_757769540.jpg'
import { colors } from '../theme'
import { renderHighlightedText } from '../utils'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks'

const home = [
  { 
    icon: <Icon24Hours color={colors[8]} size={30}/>,
    title: "Modern Strategies for Today’s Programming",
    text: 'Patrick R. Oakes Consulting redefines records management by strategically leveraging information as a vital asset for business growth, compliance, and efficiency. Beyond traditional approaches, we empower businesses to navigate legal and regulatory complexities, ensuring their success. By streamlining processes and adopting cutting-edge strategies, we transform records management into a powerful tool for reducing risks and costs, enhancing business intelligence, compliance, and operational efficiency.'
  },
  { 
    icon: <IconLayersIntersect color={colors[8]} size={30}/>,
    title: 'A New Paradigm Of Information Cultivation',
    text: "Imagine a world where every piece of information is trusted and used confidently to move the business forward. Our vision is to lead businesses into this new reality by wielding records management as a powerful tool to maximize data value while minimizing redundant, obsolete, and transitory (ROT) information. We champion the cause of records &amp; information management (RIM) by embedding best practices into the DNA of your organization and complemented by comprehensive training and awareness."
  },
  { 
    icon: <IconTrendingUp color={colors[8]} size={30}/>,
    title: 'A Diverse Portfolio OF Success',
    text: "Patrick R. Oakes Consulting is proud to partner with a broad spectrum of sectors, including corporate giants, government entities, and spirited nonprofits. Our expertise is universal, yet our solutions are tailored. We understand the unique challenges and opportunities within various industries, equipping organizations with the tools, knowledge, and strategy to manage their information more effectively and securely."
  }
]

export default ({searchQuery}: any) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }))
  const isMobile = useMediaQuery('(max-width: 36em)');
  const carouselHeight = isMobile ? '100px' : '210px';

  return (
    <Box>
      <Carousel
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
            <div style={{ width: '100%', height: carouselHeight, overflow: 'hidden', position: 'relative' }}>
              <img src={one} style={{ width: '100%', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}/>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={{ width: '100%', height: carouselHeight, overflow: 'hidden', position: 'relative' }}>
              <img src={two} style={{ width: '100%', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
          <div style={{ width: '100%', height: carouselHeight, overflow: 'hidden', position: 'relative' }}>
            <img src={three} style={{ width: '100%', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </Carousel.Slide>
      </Carousel>
      {home.map((item) => (
        <Stack mb='-20px' key={item.title}>
          <Space h="md" />
          <Group>
            {item.icon}
            <Title order={3} style={{ color: colors[8], fontVariant: 'small-caps', fontWeight: '400', whitespace: 'normal', maxWidth: '85%' }}><strong>{item.title}</strong></Title>
          </Group>
          <Divider color={colors[8]} p='xs'/>
          <Text size="sm" mt='-20px'>
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