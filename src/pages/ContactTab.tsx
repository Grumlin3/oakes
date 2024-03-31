import { Box, Text, Textarea, Button, Space, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useCallback } from "react";

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
      <form onSubmit={form.onSubmit((values) => sendInfo(values))}>
        <Text size='sm' fw={300} style={{ fontVariant: 'small-caps' }}>Name</Text>
        <TextInput
          size='sm'
          variant='filled'
          {...form.getInputProps('name', { type: 'input' })}
        />
        <Space h="sm" />
        <Text size='sm' fw={300} style={{ fontVariant: 'small-caps' }}>Email</Text>

        <TextInput
          size='sm'
          variant='filled'
          {...form.getInputProps('email', { type: 'input' })}
        />
        <Space h="sm" />
        <Text size='sm' fw={300} style={{ fontVariant: 'small-caps' }}>Company</Text>

        <TextInput
          size='sm'
          variant='filled'
          {...form.getInputProps('employer', { type: 'input' })}
        />
        <Space h="sm" />
        <Text size='sm' fw={300} style={{ fontVariant: 'small-caps' }}>Tell us how we can help</Text>

        <Textarea
          size='sm'
          autosize
          variant='filled'
          placeholder=""
          {...form.getInputProps('query', { type: 'input' })}
          />
        <Group justify="left" mt='lg'>
          <Button type="submit" variant='outline'>Submit</Button>
        </Group>
      </form>
    </Box>
  )
}


