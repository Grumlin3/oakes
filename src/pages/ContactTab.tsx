import { Box, Title, Text, Textarea, Button, Space, Group, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconAt, IconMail } from '@tabler/icons-react'
import { useCallback } from "react"
import { colors } from '../theme'
import { renderHighlightedText } from '../utils'

export default ({searchQuery}: any) => {
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

  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSditr8VldQyyrndZKOpQyUgWzTzR3pCQQbUbss8hJ89mKfSHQ/formResponse?'
  const sendInfo = useCallback(
      async ({ name, employer, email, query }: any) => {
          await fetch(
            googleFormUrl +
              new URLSearchParams({
                "entry.1416258321": name,
                "entry.425906072": employer,
                "entry.1086547357": email,
                "entry.2113273261": query,
              }),
            {
              mode: "no-cors",
            }
          )
          form.reset()
      }, []
    )

  const contactUs = "If you're facing challenges with Records Management or need an operational audit, we're here to help. Reach out to see how we can assist in elevating your organization's records management strategies."

  return (
    <Box>
      <Title order={2} style={{ color: colors[8], fontVariant: 'small-caps', fontWeight: '400' }}><strong>Get in touch with us</strong></Title>
      <Space h="xs" />
      <Text size='sm'>
        {renderHighlightedText(contactUs, searchQuery)}

      </Text>
      <Space h="md" />
      <Text color={colors[8]} size='sm'>Simplify connection with our contact form.</Text> 
      <Text size='sm'>Please provide the following information and let us know how we can assist you.</Text> 
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
        <Text size='sm' fw={300} style={{ fontVariant: 'small-caps'}}>Tell us how we can help</Text>

        <Textarea
          size='sm'
          autosize
          variant='filled'
          placeholder=""
          {...form.getInputProps('query', { type: 'input' })}
          />
        <Group justify="left" mt='lg'>
          <Button color={colors[8]} type="submit" style={{ fontVariant: 'small-caps'}}>Submit</Button>
        </Group>
      </form>
      <Space h="lg" />

      <Group m='xs'>
        <IconMail color={colors[8]} size={30}/> 
        <Text size='md' c='dimmed' style={{ fontVariant: 'small-caps' }}>P.O. Box 31225, Seattle WA, 98103</Text>
      </Group>

      <Group m='xs'>
        <IconAt color={colors[8]} size={30}/> 
        <Text size='md' c='dimmed' style={{ fontVariant: 'small-caps' }}>patrickroakesconsulting@gmail.com</Text>
      </Group>
     
      <Space h="xl" />
      <Space h="xl" />
    </Box>
  )
}