import { Timeline, Text, Grid, Box, Blockquote, Space } from '@mantine/core';
import { IconPaw, IconQuote, IconTrophy, IconNotebook, IconCalendarMonth, IconLock, IconFileSearch, IconGavel } from '@tabler/icons-react';


export const About = () => {
  return (
    <Box>
        <Text color="theme.9" size="sm" fw={700}>Operations and Program Manager with 20 years of managing stakeholder relationships, developing comprehensive solutions to streamline operations, and improve customer experience.</Text>
        <Space h="md" />
        <Text color="theme.9" size="sm" fw={700}>Able to navigate ambiguous environments, take initiative to problem solve and create pathways ofr the team and organizational success. Focused on results as an effectual leader with ability to analyze and organization's critical business requirements, identify both opportunities and deficiencies, and develop and innovative solution to ensure compliance and elevate the end user experience.</Text>

      {/* <Grid>
        <Grid.Col span={7}> */}
      <Space h="xl" />
        <Timeline active={6} bulletSize={50} lineWidth={2}>
          {/* <Timeline.Item bullet={<IconFileText size={30} />} title="Program Management">
            <Text color="theme.9" size="sm" fw={700}>Excellence in Execution</Text>
            <Text color="dimmed" size="sm">Our Program Management service ensures your projects are delivered on time, within budget, and to the highest quality standards. With a focus on strategic alignment and clear communication, we streamline processes and mobilize resources effectively to achieve your organizational goals. Our expert team brings a proactive approach to identifying potential hurdles and implementing solutions, ensuring seamless progress from start to finish.</Text>
          </Timeline.Item> */}

          <Timeline.Item bullet={<IconNotebook size={30} />} title="Information Governance">
          {/* <Grid>
          <Grid.Col span={7}> */}
            <Text color="theme.9" size="sm" fw={700}>Data Integrity and Compliance</Text>
            <Text color="dimmed" size="sm"> Our Information Governance service safeguards your data assets, ensuring compliance with legal and regulatory requirements. We help you establish policies that enhance data quality, security, and privacy, while maximizing value from your information assets. With our guidance, you can navigate the complexities of data management, reducing risks and promoting a culture of accountability and transparency.</Text>
          {/* </Grid.Col>
          <Grid.Col span={5}> */}

            <Blockquote color="theme.2" cite="– Louie aka Lucifer" icon={<IconQuote />} mt="xl">
          "If I had to rate my human on belly rub skills and treat selection, they'd be the undisputed leader of the pack. Seriously, those belly rubs are like a masterclass in bliss, hitting all the right spots every single time. And the treats? Gourmet doesn't even begin to cover it."
          </Blockquote>
          {/* </Grid.Col>
          </Grid> */}

          </Timeline.Item>

          <Timeline.Item bullet={<IconCalendarMonth size={30} />} title="Policy & System Implementation">
            <Text color="theme.9" size="sm" fw={700}>Transformative Technology Solutions</Text>
            <Text color="dimmed" size="sm">ntegrated Policy and System Implementation" seamlessly merges strategic policy planning with practical tech solutions. This approach ensures policies are effectively translated into operational systems, aligning technology with organizational goals. It ensures compliance, efficiency, and strategic advancement, streamlining the journey from policy development to system execution for enhanced organizational coherence and performance.</Text>

            {/* <Text color="dimmed" size="sm">Our Policy & System Implementation service delivers cutting-edge technology solutions tailored to your specific needs. We specialize in seamless integration of new systems with existing infrastructure, minimizing disruption and maximizing efficiency. Our hands-on approach and technical expertise ensure a smooth transition, enabling you to leverage the full potential of new technologies to drive business growth.</Text> */}
          </Timeline.Item>

          {/* <Timeline.Item bullet={<IconLock size={30} />} title="Strategic Planning">
            <Text color="theme.9" size="sm" fw={700}>Visionary Leadership and Insight</Text>
            <Text color="dimmed" size="sm">ur Strategic Planning service provides the roadmap for your organization's success. We collaborate with you to define clear, achievable goals and devise strategies to overcome challenges and capitalize on opportunities. With a focus on sustainability and adaptability, our strategic planning ensures you stay ahead in a constantly evolving marketplace, ready to pivot towards future growth.</Text>
          </Timeline.Item> */}

          <Timeline.Item bullet={<IconFileSearch size={30} />} title="Training and Development">
            <Text color="theme.9" size="sm" fw={700}>Empowering Your Team for Success</Text>
            <Text color="dimmed" size="sm">Our Training and Development service enhances the skills, knowledge, and performance of your team. We offer bespoke training programs designed to meet the specific needs of your organization, fostering a culture of continuous learning and improvement. By investing in your people, we help you build a more competent, confident, and competitive workforce.</Text>
          </Timeline.Item>

          {/* <Timeline.Item bullet={<IconGavel size={30} />} title="Policy Implementation">
            <Text color="theme.9" size="sm" fw={700}>Effective Policies, Exceptional Outcomes</Text>
            <Text color="dimmed" size="sm">Our Policy Implementation service ensures that your organizational policies are applied effectively, aligning operations with your strategic vision. We assist in translating policy frameworks into actionable plans, monitoring compliance, and evaluating impact. Our expert guidance helps you to create a cohesive, efficient, and compliant organizational environment.</Text>
          </Timeline.Item> */}

          <Timeline.Item bullet={<IconGavel size={30} />} title="Risk Management">
            <Text color="theme.9" size="sm" fw={700}>Minimizing Risks, Maximizing Opportunities</Text>
            <Text color="dimmed" size="sm">Our Risk Management service provides a comprehensive approach to identifying, assessing, and mitigating risks. By integrating risk management into your strategic planning, we help protect your assets, reputation, and sustainability. Our proactive strategies not only minimize potential threats but also uncover opportunities for innovation and competitive advantage.</Text>
          </Timeline.Item>
        </Timeline>
        {/* </Grid.Col> */}
        {/* <Grid.Col span={5}>
        <Blockquote color="theme.8" cite="– Indiana Bones" icon={<IconPaw />} mt="xl">
            "The consulting services shine in innovation and strategy, easily leading the field. Missteps are rare and minor, yet the outstanding results are undeniable, showcasing unparalleled mastery and leadership. A true trendsetter, this consultancy earns both respect and admiration for its skill and insight."          </Blockquote>
          <Blockquote color="theme.2" cite="– Louie aka Lucifer" icon={<IconTrophy />} mt="xl">
          "If I had to rate my human on belly rub skills and treat selection, they'd be the undisputed leader of the pack. Seriously, those belly rubs are like a masterclass in bliss, hitting all the right spots every single time. And the treats? Gourmet doesn't even begin to cover it."
          </Blockquote>

          <Blockquote color="theme.5" cite="– Arthur" icon={<IconAward />} mt="xl">
          "From the enthusiastic barks around the neighborhood, it's clear I've been missing out on some top-tier human companionship. Word on the street is, you're the legend behind the most euphoric belly rubs and the purveyor of the crème de la crème of treats. My tail's wagging just thinking about it."
          </Blockquote>
          </Grid.Col> */}
      {/* </Grid> */}
    </Box>
  )
}
