import { Accordion, Text, Grid, Card, Space, Box, Center } from '@mantine/core';
import { IconFileText, IconNotebook, IconCalendarMonth, IconLock, IconListDetails, IconChecklist, IconGavel } from '@tabler/icons-react';
import img from '../../public/services.jpg';

export const services = [
  {
    icon: <IconListDetails size={30} />,
    value: 'Needs Assessment',
    description:
    <>
      <Text color="theme.9" size="sm" fw={700}>Pinpoint and scale records management needs</Text>
      <Text c='dimmed'>A comprehensive assessment of your organization's current records management practices, identifying gaps and areas for improvement. Our team will help you understand the volume, type, and sensitivity of the records you manage, enabling the development of a tailored, scalable records management program that meets both current and future needs.</Text>
    </>
  },
  {
    icon: <IconChecklist size={30} />,
    value: 'Record Management Policies',
    description:
    <>
      <Text color="theme.9" size="sm" fw={700}>Craft policies centering integrity, access, and confidentiality</Text>
      <Text c='dimmed'>Developing robust records management policies is crucial for maintaining the integrity, confidentiality, and accessibility of information. Our experts will work with you to craft bespoke policies that align with industry standards and regulatory requirements, ensuring your records management processes are both efficient and compliant.</Text>
    </>
  },
  {
    icon: <IconCalendarMonth size={30} />,
    value: 'Retention Schedules',
    description:
    <>
      <Text color="theme.9" size="sm" fw={700}>Implement retention timelines to meet compliance and operational needs</Text>
      <Text c='dimmed'>Efficiently manage the lifecycle of your records with customized retention schedules that balance legal compliance and operational needs. Our service ensures your organization retains records for the appropriate duration, optimizing storage resources while minimizing risk related to information over-retention or premature destruction.</Text>
    </>
  },
  {
    icon: <IconLock size={30} />,
    value: 'Privacy & Audit Compliance',
    description:
    <>
      <Text color="theme.9" size="sm" fw={700}>Stringent adherence to privacy laws, safeguarding against breaches</Text>
      <Text c='dimmed'>Our privacy compliance service focuses on ensuring your records management practices conform to the latest privacy laws and regulations. We provide guidance on safeguarding sensitive information, reducing the risk of data breaches, and maintaining trust with your stakeholders through rigorous compliance measures.</Text>
    </>
  },
  // {
  //   icon: <IconFileSearch size={30} />,
  //   value: 'Compliance Audit',
  //   description:
  //   <>
  //     <Text color="theme.9" size="sm" fw={700}>Audit and mend compliance discrepancies</Text>
  //     <Text c='dimmed'>Audit services are designed to identify and rectify compliance discrepancies in your records management system. Through a thorough examination of your processes and policies, we ensure your practices are up to standard, helping you avoid legal penalties and enhance operational efficiency.</Text>
  //   </>
  // },
  {
    icon: <IconGavel size={30} />,
    value: 'Litigation Support',
    description:
    <>
      <Text color="theme.9" size="sm" fw={700}>Crucial litigation documentation management</Text>
      <Text c='dimmed'>Our litigation support service provides essential assistance in managing documentation for legal proceedings. We offer strategic advice on document retention, retrieval, and organization, ensuring you have the necessary support for efficient and effective litigation management.</Text>
    </>
  },
]

export const Services = (menuSelection: any) => {
  console.log('menuSelection', menuSelection)
  return (
    <Box>
      <Center>
          <Card shadow="sm" padding="lg" radius="md" withBorder w='80%'>
            <img src={img}style={{ width: '100%' }} />
          </Card>
      </Center>
    {/* <Grid gutter='xl'>
      <Grid.Col span={6}> */}
        <Space h="xl" />
        <Accordion defaultValue={ menuSelection || services[0].value }>
        {services.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control style={{ color: "#176c84"}} icon={item.icon}>{item.value}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      {/* </Grid.Col>
      <Grid.Col span={6}>
        <Space h="xl" />
        <Card shadow="sm" padding="lg" radius="md" withBorder >
            <img src={img}style={{ width: '100%' }} />
          </Card>
      </Grid.Col>
    </Grid> */}
    <Space h="xl" />
    <Space h="xl" />
  </Box>

    // <Grid>
    //       <Card shadow="sm" padding="lg" radius="md" withBorder >
    //         <img src={img}style={{ width: '100%' }} />
    //       </Card>

    //   <Grid.Col span={9} offset={1.5}>
    //   <Accordion defaultValue={ menuSelection || services[0].value }>
    //     {services.map((item) => (
    //       <Accordion.Item key={item.value} value={item.value}>
    //         <Accordion.Control style={{ color: "#176c84"}} icon={item.icon}>{item.value}</Accordion.Control>
    //         <Accordion.Panel>{item.description}</Accordion.Panel>
    //       </Accordion.Item>
    //     ))}
    //   </Accordion>
    //   </Grid.Col>
    // </Grid>
  )
}
