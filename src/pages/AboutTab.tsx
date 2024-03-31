import { Timeline, Text, Box, Space } from '@mantine/core';
import { IconNotebook, IconCalendarMonth, IconFileSearch, IconGavel } from '@tabler/icons-react';


export const About = () => {
  return (
    <Box>
      <Timeline active={6} bulletSize={50} lineWidth={2}>
        <Timeline.Item bullet={<IconNotebook size={30} />} title="Information Governance">
          <Text size="sm" fw={700}>Data Integrity and Compliance</Text>
          <Text color="dimmed" size="sm"> Our Information Governance service safeguards your data assets, ensuring compliance with legal and regulatory requirements. We help you establish policies that enhance data quality, security, and privacy, while maximizing value from your information assets. With our guidance, you can navigate the complexities of data management, reducing risks and promoting a culture of accountability and transparency.</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconCalendarMonth size={30} />} title="Policy & System Implementation">
          <Text size="sm" fw={700}>Transformative Technology Solutions</Text>
          <Text color="dimmed" size="sm">ntegrated Policy and System Implementation" seamlessly merges strategic policy planning with practical tech solutions. This approach ensures policies are effectively translated into operational systems, aligning technology with organizational goals. It ensures compliance, efficiency, and strategic advancement, streamlining the journey from policy development to system execution for enhanced organizational coherence and performance.</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconFileSearch size={30} />} title="Training and Development">
          <Text size="sm" fw={700}>Empowering Your Team for Success</Text>
          <Text color="dimmed" size="sm">Our Training and Development service enhances the skills, knowledge, and performance of your team. We offer bespoke training programs designed to meet the specific needs of your organization, fostering a culture of continuous learning and improvement. By investing in your people, we help you build a more competent, confident, and competitive workforce.</Text>
        </Timeline.Item>
        <Timeline.Item bullet={<IconGavel size={30} />} title="Risk Management">
          <Text size="sm" fw={700}>Minimizing Risks, Maximizing Opportunities</Text>
          <Text color="dimmed" size="sm">Our Risk Management service provides a comprehensive approach to identifying, assessing, and mitigating risks. By integrating risk management into your strategic planning, we help protect your assets, reputation, and sustainability. Our proactive strategies not only minimize potential threats but also uncover opportunities for innovation and competitive advantage.</Text>
        </Timeline.Item>
      </Timeline>
      <Space h="xl" />
      <Space h="xl" />
    </Box>
  )
}
