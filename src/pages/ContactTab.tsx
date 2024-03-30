import { Box, Textarea, Button, Switch, Title, Grid, Text, Space, Center, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import oakes from '../../public/dalleoakes.jpg';


export const Contact = () => {
  const form = useForm({
    initialValues: {
      query: '',
      service1: false,
      service2: false,
      service3: false,

    },

    validate: {
      query: (value) => (value.trim() === '') ? 'Please tell us about your interest' : null
    },
  });

  const sendInfo = (values: any) => {
    console.log('values', values)
    window.open(`mailto:patrick@oakesconsulting.com?subject=${values.subject || 'Consulting inquiry'}&body=${values.query}`);
  }

  return (
    <Box>
      {/* <Center>
        <Title order={5} style={{ color: "#176c84"}}>Contact (123) 456-7890, or email us below to get in touch</Title>
      </Center>
      <Space h="xl" />
      <form onSubmit={form.onSubmit((values) => sendInfo(values))}>
        <Grid>
          <Grid.Col span={4.5} offset={1.5} >
          <Text fw={500} color="theme.9">What services are you interested in?</Text>
          <Switch
            mt='md'
            label="Information Management Services"
            color="theme.7"
            {...form.getInputProps('service1', { type: 'checkbox' })}
          />
          <Switch
            mt='md'
            label="Secure Records Services"
            color="theme.7"

            {...form.getInputProps('service2', { type: 'checkbox' })}
          />
          <Switch
            mt='md'
            label="Compliance Services"
            color="theme.7"
            {...form.getInputProps('service3', { type: 'checkbox' })}
          />
          </Grid.Col>
          <Grid.Col span={4.5}>
            <Text size='sm' mb='md'>Tell us how we can help.</Text>
            <Textarea
              size='sm'
              autosize
              variant='filled'
              placeholder=""
              {...form.getInputProps('form')}
            />
            <Group justify="right" mt='md'>
              <Button type="submit" variant='outline'>Submit</Button>
            </Group>

          </Grid.Col>



        </Grid>
      </form>
      <Space h="xl" />
      <Space h="md" />
      <Center>
        <Title order={3} style={{ color: "#176c84"}}>We look forward to hearing from you.</Title>
      </Center> */}
      <Title order={3} style={{ color: "#176c84"}}>Tell us how we can help</Title>
      <Space h="lg" />
      <form onSubmit={form.onSubmit((values) => sendInfo(values))}>
        <Textarea
          size='sm'
          autosize
          variant='filled'
          placeholder=""
          {...form.getInputProps('form')}
        />
        <Text mt='sm' size='xs' color="theme.9">Which services would you like to hear more about?</Text>
          <Switch
            mt='md'
            label="Information Management Services"
            color="theme.7"
            {...form.getInputProps('service1', { type: 'checkbox' })}
          />
          <Switch
            mt='md'
            label="Secure Records Services"
            color="theme.7"

            {...form.getInputProps('service2', { type: 'checkbox' })}
          />
          <Switch
            mt='md'
            label="Compliance Services"
            color="theme.7"
            {...form.getInputProps('service3', { type: 'checkbox' })}
          />
        <Group justify="left" mt='lg'>
          <Button type="submit" variant='outline'>Submit</Button>
        </Group>
      </form>
    </Box>
  )
}


