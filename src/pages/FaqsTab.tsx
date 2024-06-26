import { Title, Text, Space, Box, Grid, Accordion } from '@mantine/core'
import { colors } from '../theme'
import stages from '../../public/RIM Program Assets.jpg'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@mantine/hooks'

import img from '../../public/vertical.jpg'
import video from '../../public/rim.mp4'

const faqs = [
  {
    question: "What is Records & Information Management?",
    answer: "Records & Information Management or RIM, is knowing what records you have, where to locate them, and how long to keep them.",
  },
  {
    question: "Why is it important?",
    answer: "RIM helps preserve the integrity, accessibility, and value of a company’s information. Adopting RIM best practices allows for employees to help the company: reduce risks associated with government, regulatory, and legal noncompliance; reduce the risk of unnecessary documents or records containing confidential information being misused; and save money and operate more efficiently.",
  },
  {
    question: "Who is responsible for Records Management?",
    answer: "Everyone who creates, receives, accesses, uses, stores, or disposes of business records has a duty to understand and participate in the management of business records.",
  },
  {
    question: "What is a Records & Information Management Program?",
    answer: "A RIM Program helps preserve the integrity, accessibility, and value of a company’s information. It provides individual and team guidance, training, and support to enable you to preserve useful, important company records and get rid of unnecessary, outdated materials that are no longer needed.",
    img: <img src={stages} style={{ width: '70%', display: 'block', margin: 'auto' }} />,
  },
  {
    question: "What are the benefits of a RIM Program?",
    answer: "Protects essential business records (e.g., IP, Corporate Records, and Financials); reduces compliance & litigation risks; ensures data quality and hygiene; cuts costs; and enables people and systems to operate more efficiently.",
  },
  {
    question: "Does Records & Information Management have an ISO?",
    answer: "Yes, the International Organization for Standardization (ISO) is ISO 15489.",
    img: <video autoPlay loop src={video} style={{ width: '100%', display: 'block', margin: 'auto', clipPath: 'inset(1px 1px)' }}></video>,
  }
]

export default ({ searchQuery }: any) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(faqs[0].question);
  const isSmallerThanLarge = useMediaQuery('(max-width: 62em)');

  useEffect(() => {
    let found = false;
    faqs.forEach(faq => {
      if (faq.question.toLowerCase().includes(searchQuery.toLowerCase())) {
        setActiveAccordion(faq.question);
        found = true;
      }
    });
    if (!found) {
      setActiveAccordion(null)
    }
  }, [searchQuery]);

  return (
    <Box>
      <Grid overflow='hidden'>
      {!isSmallerThanLarge && 
          <Grid.Col span={{ base: 0, xs: 0, sm: 0, md: 0, lg: 3, xl: 3 }}>
            <div style={{ width: '200px', overflow: 'hidden', height: '100%' }}>
              <img src={img} style={{ height: '100%', width: '150%', objectFit: 'cover', position: 'relative', left: '-62%', top: '-25%' }} />
            </div>
          </Grid.Col>}
        <Grid.Col span={{ base: 12, md: 9, lg: 9 }}>
          <Accordion value={activeAccordion} onChange={setActiveAccordion}>
            {faqs.map((item) => (
              <Accordion.Item key={item.question} value={item.question}>
                <Accordion.Control>
                  <Title order={3} style={{ color: colors[8], fontVariant: 'small-caps', fontWeight: '400' }}><strong>{item.question}</strong></Title>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size='sm' p='xs'>
                    {item.answer}
                  </Text>
                  {item.img && item.img}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
          <Space h='50px'/>
        </Grid.Col>
      </Grid>
    </Box>
  )
}