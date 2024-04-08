import { Accordion, Text, Grid, Box, Title } from '@mantine/core';
import { IconAccessible, IconCloudLock, IconDeviceDesktopAnalytics, IconChecklist, IconFileAnalytics } from '@tabler/icons-react';
import { colors } from '../theme';
import img from '../../public/dalle1.jpg'
import { useMediaQuery } from '@mantine/hooks';
import { renderHighlightedText} from '../utils';
import { useState, useEffect } from 'react';

export const services = [
  {
    icon: <IconChecklist size={30} color={colors[6]} />,
    value: 'Compliance Services Assessment',
    short: "Ensuring Your Organization Stays Ahead of Legal Requirements",
    long: "Our compliance services are designed to ensure that your organization not only meets but exceeds the regulatory requirements relevant to your industry. From conducting comprehensive records management program needs assessments to developing robust records management policies, we have you covered. Our team also specializes in the assessment and development of records retention schedules, ensuring your organization maintains compliance while efficiently managing information lifecycle. Through our compliance audit services, we identify gaps and opportunities for improvement, ensuring your records management practices are both compliant and optimized for performance."
  },
  {
    icon: <IconFileAnalytics size={30} color={colors[6]} />,
    value: 'Programming Services',
    short: "Tailoring Records Management to Fit Your Organization",
    long: "In the realm of programming services, Patrick R. Oakes Consulting focuses on the development and assessment of programs that are the backbone of effective records management. We offer organizational assessments to understand your current state, followed by the development of training programs to uplift your team's records management capabilities. Recognizing the need for flexibility and expertise, we also provide interim management roles, ensuring that your organization never skips a beat in its journey towards enhanced records management."
  },
  {
    icon: <IconAccessible size={30} color={colors[6]} />,
    value: 'Accessibility Solutions',
    short: "Streamlining Access to Maximize Efficiency",
    long: "Our accessibility solutions are crafted to ensure that your organization's records are not just stored but are easily retrievable and effectively managed. This includes developing file classification systems and taxonomies that make sense for your business, conducting thorough inventories to know exactly what you have and where, and planning your office and records center spaces for optimal efficiency. These services are pivotal in reducing time spent searching for records and increasing the overall productivity of your organization."
  },
  {
    icon: <IconCloudLock size={30} color={colors[6]} />,
    value: 'Business Continuity',
    short: "Planning for the Unexpected with Confidence",
    long: "Business continuity planning is critical to ensuring your organization can withstand and quickly recover from disruptions. Our services in this area include developing vital records programs, conducting risk assessments, and creating business and resource planning strategies. By identifying your essential records and assessing potential risks, we ensure that your organization is prepared for the unexpected, keeping your operations running smoothly in any scenario."
  },
  {
    icon: <IconDeviceDesktopAnalytics size={30} color={colors[6]} />,
    value: 'Technology Integration',
    short: "Assessing and Implementing the Right Solutions for You",
    long: "In today's digital age, technology plays a crucial role in effective records management. Our technology integration services include comprehensive assessments of your electronic infrastructure and electronic records management readiness, helping you understand where you stand and what improvements can be made. We also assist in the identification and selection of appropriate vendors and software, ensuring that the technological solutions implemented are perfectly suited to your organization's needs."
  },
]

export default ({ searchQuery }: any) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(services[0].value);
  const isSmallerThanLarge = useMediaQuery('(max-width: 62em)');

  useEffect(() => {
    let found = false;
    services.forEach(service => {
      if (service.long.toLowerCase().includes(searchQuery.toLowerCase())) {
        setActiveAccordion(service.value);
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
        <Grid.Col span={{ base: 12, md: 9, lg: 9 }}>
          <Accordion value={activeAccordion} onChange={setActiveAccordion}>
            {services.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.Control icon={item.icon}>
                  <Title order={3} style={{ color: colors[6], fontVariant: 'small-caps', fontWeight: '400' }}>{item.value}</Title>
                  <Text>{item.short}</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size='sm' p='xs' style={{ textAlign: 'justify'}}>
                    {renderHighlightedText(item.long, searchQuery)}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Grid.Col>
        {!isSmallerThanLarge && 
          <Grid.Col span={{ base: 0, xs: 0, sm: 0, md: 0, lg: 3, xl: 3 }}>
            <div style={{ width: '200px', overflow: 'hidden', height: '100%' }}>
              <img src={img} style={{ height: '100%', width: '300%', objectFit: 'cover', position: 'relative', left: '-100%' }} />
            </div>
          </Grid.Col>}
      </Grid>
    </Box>
  )
}