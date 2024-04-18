import { Title, Text, Space, Box, Stack, Blockquote } from '@mantine/core'
import { IconQuote } from '@tabler/icons-react'
import { colors } from '../theme'
import { renderHighlightedText } from '../utils'
import stages from '../../public/stages.jpg'
import gears from '../../public/rimgears.jpg'

const faqs = [
  {
    question: "What is Records & Information Management?",
    answer: "Simply put, Records & Information Management or RIM, is knowing what records you have, where to locate them, and how long to keep them.",
    img: <img src={stages} style={{ width: '70%', display: 'block', margin: 'auto' }} />

  },
  {
    question: "Why is it important?",
    answer: "RIM helps preserve the integrity, accessibility, and value of a Company’s information. Adopting RIM best practices, it allows for employees to help the Company: Reduce risks associated with government, regulatory, and legal noncompliance; Reduce the risk of unnecessary documents or records containing confidential information being misused; and Save money and operate more efficiently."
  },
  {
    question: "Who is responsible for Records Management?",
    answer: "Everyone who creates, receives, accesses, uses, stores, or disposes of business records has a duty to understand and participate in the management of business records."
  },
  {
    question: "What is a Records & Information Management Program?",
    answer: "A RIM Program helps preserve the integrity, accessibility, and value of a Company’s information. It provides individual and team guidance, training, and support to enable you to preserve useful, important Company records and get rid of unnecessary, outdated materials that are no longer needed."
  },
  {
    question: "What are the benefits of a RIM Program?",
    answer: "Protects essential business records (e.g., IP, Corporate Records, and Financials); Reduces compliance & litigation risks; Ensures data quality and hygiene; Cuts costs; and Enables people and systems to operate more efficiently."
  },
  {
    question: "Does Records & Information Management have an ISO?",
    answer: "Yes, the International Organization for Standardization (ISO) is ISO 15489.",
    img: <img src={gears} style={{ width: '30%', display: 'block', margin: 'auto' }} />

  }
]

export default ({searchQuery}: any) => {
  console.log('searchQuery faqs', searchQuery)
  return (
    <Box>
      <Title order={2} style={{ color: colors[8], fontVariant: 'small-caps', fontWeight: '400' }}><strong>Frequently Asked Questions</strong></Title>
      {faqs.map((item) => (
        <Stack key={item.question}>
          <Space h="md" />
          <Box size='grow'>
            <Blockquote icon={<IconQuote />} color={colors[8]}>
              {renderHighlightedText(item.question, searchQuery)}
            </Blockquote>
          </Box>
          <Text size='sm' pr='lg' style={{ textAlign: 'justify' }}>
            {renderHighlightedText(item.answer, searchQuery)}
          </Text>
          {item.img && item.img} 
        </Stack>
      ))}
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </Box>
  )
}