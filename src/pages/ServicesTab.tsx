import { Accordion, Text, Card, Space, Box, Center } from '@mantine/core';
import { IconListDetails, IconScale, IconAdjustmentsCheck, IconClockRecord, IconFiles } from '@tabler/icons-react';
import img from '../../public/services.jpg';

export const services = [
  {
    icon: <IconListDetails size={30} />,
    value: 'Needs Assessment',
    short: <Text>Pinpoint and scale records management needs</Text>,
    long: <Text c='dimmed'>A comprehensive assessment of your organization's current records management practices, identifying gaps and areas for improvement. Our team will help you understand the volume, type, and sensitivity of the records you manage, enabling the development of a tailored, scalable records management program that meets both current and future needs.</Text>
  },
  {
    icon: <IconFiles size={30} />,
    value: 'Record Management Policies',
    short: <Text>Craft policies centering integrity, access, and confidentiality</Text>,
    long: <Text c='dimmed'>Developing robust records management policies is crucial for maintaining the integrity, confidentiality, and accessibility of information. Our experts will work with you to craft bespoke policies that align with industry standards and regulatory requirements, ensuring your records management processes are both efficient and compliant.</Text>
  },
  {
    icon: <IconClockRecord size={30} />,
    value: 'Retention Schedules',
    short:<Text>Implement retention timelines to meet compliance and operational needs</Text>,
    long: <Text c='dimmed'>Efficiently manage the lifecycle of your records with customized retention schedules that balance legal compliance and operational needs. Our service ensures your organization retains records for the appropriate duration, optimizing storage resources while minimizing risk related to information over-retention or premature destruction.</Text>
  },
  {
    icon: <IconAdjustmentsCheck size={30} />,
    value: 'Privacy & Audit Compliance',
    short: <Text>Stringent adherence to privacy laws, safeguarding against breaches</Text>,
    long: <Text c='dimmed'>Our privacy compliance service focuses on ensuring your records management practices conform to the latest privacy laws and regulations. We provide guidance on safeguarding sensitive information, reducing the risk of data breaches, and maintaining trust with your stakeholders through rigorous compliance measures.</Text>
  },
  {
    icon: <IconScale size={30} />,
    value: 'Litigation Support',
    short:<Text>Crucial litigation documentation management</Text>,
    long: <Text c='dimmed'>Our litigation support service provides essential assistance in managing documentation for legal proceedings. We offer strategic advice on document retention, retrieval, and organization, ensuring you have the necessary support for efficient and effective litigation management.</Text>
  },
]

export const Services = (menuSelection: any) => {
  return (
    <Box>
      <Center>
          <Card shadow="sm" padding="lg" radius="md" withBorder w='80%'>
            <img src={img}style={{ width: '100%' }} />
          </Card>
      </Center>

        <Space h="xl" />
        <Accordion defaultValue={ menuSelection || services[0].value }>
        {services.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control icon={item.icon}><>{item.value}{item.short}</></Accordion.Control>
            <Accordion.Panel>{item.long}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
  </Box>
  )
}
