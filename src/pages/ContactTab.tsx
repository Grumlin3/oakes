import { Box, Title, Text, Textarea, Button, Space, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconAt, IconMail, IconPhone } from '@tabler/icons-react';
import { useCallback } from "react";
import { colors } from '../theme';

export const Contact = () => {
  const form = useForm({
    initialValues: {
      name: '',
      employer: '',
      email: '',
      query: '',
    },

    validate: {
      name: (value) => (value.trim() === '') ? 'Name require' : null,
      employer: (value) => (value.trim() === '') ? 'Company name required' : null,
      email: (value) => (value.trim() === '') ? 'Email required' : null,
      query: (value) => (value.trim() === '') ? 'Please tell us about your interest' : null
    },
  })

  const googleFormUrl='https://docs.google.com/forms/d/e/1FAIpQLSceFF8Uymm3_UNrBih8a_uHoaUMT-P_HrtMp1BzumDdq_vdvg/formResponse?'
  const sendInfo = useCallback(
      async ({ name, employer, email, query }: any) => {
          await fetch(
            googleFormUrl +
              new URLSearchParams({
                "entry.796953387": name,
                "entry.1997181444": employer,
                "entry.768626585": email,
                "entry.9454861": query,
              }),
            {
              mode: "no-cors",
            }
          )
          form.reset()
      }, []
    )

  return (
    <Box>
      <Title order={2} style={{ color: colors[6], fontVariant: 'small-caps', fontWeight: '400' }}>Get in touch with us</Title>
      <Space h="md" />
      <Text size='sm'>If you're facing challenges with your Records Management system, we're here to help. Reach out to see how Oakes Consulting can assist in elevating your organization's records management strategies.</Text>
      <Space h="md" />
      <Title order={4} style={{ color: colors[6], fontWeight: '400' }}>Simplify connection with our contact form.</Title>
      <Text size='sm'>Just fill in your name, email, company and role, and let us know how we can assist you.</Text> 
      <Space h="md" />
      <form onSubmit={form.onSubmit((values) => sendInfo(values))}>
        <Text size='sm' fw={300} style={{ fontVariant: 'small-caps'}}>Name</Text>
        <TextInput
          size='sm'
          variant='filled'
          {...form.getInputProps('name', { type: 'input' })}
        />
        <Space h="sm" />
        <Text size='sm' fw={300} style={{ fontVariant: 'small-caps'}}>Email</Text>

        <TextInput
          size='sm'
          variant='filled'
          {...form.getInputProps('email', { type: 'input' })}
        />
        <Space h="sm" />
        <Text size='sm' fw={300} style={{ fontVariant: 'small-caps'}}>Company</Text>

        <TextInput
          size='sm'
          variant='filled'
          {...form.getInputProps('employer', { type: 'input' })}
        />
        <Space h="sm" />
        <Text size='sm' fw={300} style={{ fontVariant: 'small-caps'}}>Tell us how we can help.</Text>

        <Textarea
          size='sm'
          autosize
          variant='filled'
          placeholder=""
          {...form.getInputProps('query', { type: 'input' })}
          />
        <Group justify="left" mt='lg'>
          <Button color={colors[6]} type="submit" style={{ fontVariant: 'small-caps'}}>Submit</Button>
        </Group>
      </form>
      <Space h="xl" />
      <Text size='md' c='dimmed'><IconMail size={19}/> P.O. Box 31225, Seattle WA, 98103</Text>
      <Text size='md' c='dimmed'><IconPhone size={19}/> 303.669-6244</Text>
      <Text size='md' c='dimmed'><IconAt size={19}/> info@proconsulting.com</Text>
      <Space h="xl" />
      <Space h="xl" />
    </Box>
  )
}


