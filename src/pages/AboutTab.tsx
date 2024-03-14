import { Timeline, Text, Grid, Box, Title, Space } from '@mantine/core';
import { IconFileText, IconNotebook, IconCalendarMonth, IconLock, IconFileSearch, IconGavel } from '@tabler/icons-react';


export const About = () => {
  return (
    <Box>
      <Grid>
        <Grid.Col span={9} offset={1.5}>
        {/* <Title order={2} style={{ color: "#5da5bd"}}>Some of our services</Title> */}
        {/* <Space h="xl" /> */}
        <Timeline active={5} bulletSize={50} lineWidth={2}>
          <Timeline.Item bullet={<IconFileText size={30} />} title="Records Management Program Needs Assessment">
            <Text color="theme.9" size="sm" fw={700}>Conducted to identify the specific needs, strengths, and areas for improvement within the organization's records management practices.</Text>
            <Text color="dimmed" size="sm">Focus areas include digital and physical record-keeping systems, compliance requirements, and efficiency optimization.</Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconNotebook size={30} />} title="Records Management Policies">
            <Text color="theme.9" size="sm" fw={700}>Development of comprehensive policies aimed at enhancing records accuracy, accessibility, and privacy.</Text>
            <Text color="dimmed" size="sm">Policies cover data retention, destruction protocols, and emergency recovery plans.</Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconCalendarMonth size={30} />} title="Records Retention Schedules">
            <Text color="theme.9" size="sm" fw={700}>Legal research and development of retention schedules to ensure compliance with industry standards and legal requirements.</Text>
            <Text color="dimmed" size="sm">Schedules are tailored to various document types, with clear guidelines on retention periods and disposal methods.</Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconLock size={30} />} title="Privacy Compliance">
            <Text color="theme.9" size="sm" fw={700}>Review and adjustments to ensure full compliance with FIPPA, PHIA, & PIPEDA Acts, protecting sensitive information and personal data.</Text>
            <Text color="dimmed" size="sm">Includes the implementation of controls and training programs to prevent data breaches and unauthorized access.</Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconFileSearch size={30} />} title="Compliance Audit">
            <Text color="theme.9" size="sm" fw={700}>A thorough examination of records management practices to identify compliance gaps and areas for improvement.</Text>
            <Text color="dimmed" size="sm">Audit outcomes guide the refinement of policies and procedures, ensuring ongoing compliance and efficiency.</Text>
          </Timeline.Item>

          <Timeline.Item bullet={<IconGavel size={30} />} title="Litigation Support">
            <Text color="theme.9" size="sm" fw={700}>Providing essential documentation and records management support for litigation processes, reducing risks and enhancing preparedness.</Text>
            <Text color="dimmed" size="sm">Strategies include efficient document retrieval systems and secure, accessible records storage solutions.</Text>
          </Timeline.Item>
        </Timeline>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
