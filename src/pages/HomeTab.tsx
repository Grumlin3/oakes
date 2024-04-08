import { Title, Text, Space, Box } from '@mantine/core'
import home from '../../public/dalle1.jpg'
import { colors } from '../theme'

export const Home = () => {
  return (
    <Box>
      <div style={{ height: '200px', overflow: 'hidden', width: '100%' }}>
          <img src={home} style={{ width: '100%', height: 'auto', objectFit: 'cover', position: 'relative', top: '-33.33%' }} />
      </div>
      <Space h="md" />
      <Title order={3} style={{ color: colors[6], fontVariant: 'small-caps', fontWeight: '400' }}>Transforming the Future of Business Records Management</Title>
      <Text style={{ textAlign: 'justify' }} size='sm'>At the core of every forward-thinking business lies a strategic approach to managing its most vital asset: information. Oakes Consulting isn't just about managing records; it's about redefining the way businesses perceive, handle, and leverage their information for growth, compliance, and efficiency.</Text>
      <Space h="md" />
      <Title order={3} style={{ color: colors[6], fontVariant: 'small-caps', fontWeight: '400' }}>Shaping Tomorrow's Records Management Today</Title>
      <Text size="sm" style={{ textAlign: 'justify' }}>Our mission transcends traditional records management. We're here to empower businesses, guiding them through the complexities of legal and regulatory landscapes, ensuring they not only survive but thrive. By streamlining processes and implementing cutting-edge strategies, we aim to dramatically reduce your risks and costs. Let us transform your records management into a potent tool for business intelligence, compliance, and operational efficiency.</Text>
      <Space h="md" />
      <Title order={3} style={{ color: colors[6], fontVariant: 'small-caps', fontWeight: '400' }}>A New Paradigm of Information Awareness</Title>
      <Text size="sm" style={{ textAlign: 'justify' }}>Imagine a world where every piece of information is at your fingertips - accurately cataloged, securely stored, and easily retrievable. Our vision is to lead businesses into this new reality, minimizing risks like data over-retention, content loss, and unauthorized data dumps. We champion the cause of Records & Information Management (RIM) by embedding best practices into the DNA of your organization, complemented by comprehensive training and resource allocation.</Text>
      <Space h="md" />
      <Title order={3} style={{ color: colors[6], fontVariant: 'small-caps', fontWeight: '400' }}>Who We Stand Beside: A Diverse Portfolio of Success</Title>
      <Text size="sm" style={{ textAlign: 'justify' }}>Oakes Consulting is proud to partner with a broad spectrum of sectors, including corporate giants, government entities, and spirited nonprofits. Our expertise is universal, yet our solutions are tailored. We understand the unique challenges and opportunities within various industries, equipping organizations with the tools, knowledge, and strategy to manage their information more effectively and securely.</Text>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </Box>
  )
}