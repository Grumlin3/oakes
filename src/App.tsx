import React, { useRef, useState } from 'react'
import "@mantine/core/styles.css"
import "../public/styles.css"
import { siteTheme, colors } from './theme'
import {
  MantineProvider,
  AppShell,
  Center,
  Container,
  Space,
  Tabs,
  Text,
  TextInput,
  Button,
  Group,
  Stack,
  Box,
  Title
} from '@mantine/core'

import Home from './pages/HomeTab'
import Contact from './pages/ContactTab'
import About from './pages/AboutTab'
import Services from './pages/ServicesTab'
import Faqs from './pages/FaqsTab'

// import { IconSearch } from '@tabler/icons-react'

import '@mantine/carousel/styles.css';
import { searchMap } from './utils'
import { useMediaQuery } from '@mantine/hooks'

// import logo from '../public/OakesLogo.jpg'

function App() {
  const isSmallerThanLarge = useMediaQuery('(max-width: 62em)');
  const [activeTab, setActiveTab] = useState<string>('home')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [lastSearchQuery, setLastSearchQuery] = useState<string>('')
  const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    home: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    faqs: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  }

  const handleSearch = () => {
    const normalizedQuery = searchQuery.toLowerCase().trim()
    setLastSearchQuery(normalizedQuery)

    if (searchMap[normalizedQuery as keyof typeof searchMap]) {
      setActiveTab(searchMap[normalizedQuery as keyof typeof searchMap].tab)
      setSearchQuery('')
      return
    }

    for (const tabKey in refs) {
      const content = refs[tabKey].current
      if (content && content.innerText.toLowerCase().includes(normalizedQuery)) {
        setActiveTab(tabKey)
        setSearchQuery('')
        return
      }
    }
  }

  const handleChangeTab = (value: string | null) => {
    if (value !== null) {
      setActiveTab(value)
    }
  }

  return (
    <MantineProvider theme={siteTheme}>
      <AppShell>
        <Container size='md' p='md'>
              <Stack style={{ color: colors[8], fontVariant: 'small-caps'}} onClick={() => setActiveTab('home')}>
                <Center >
                  <Title mt='xs' style={{ fontFamily: 'PT Serif, serif', fontWeight: '900' }}>Patrick R. Oakes</Title>
                </Center>
                {!isSmallerThanLarge ? 
                  (<Center>
                    <Title mt='-16px' mb='lg' order={2} style={{ fontFamily: 'PT Serif, serif', fontWeight: 100 }}>Strategic Advisory & Consulting Services</Title>
                  </Center>) : 
                  (
                    <Stack>
                      <Center>
                        <Title mt='-16px' order={2} style={{ fontFamily: 'PT Serif, serif', fontWeight: 100 }}>Strategic Advisory</Title>
                      </Center>
                      <Center>
                      <Title mt='-16px' mb='lg' order={2} style={{ fontFamily: 'PT Serif, serif', fontWeight: 100 }}>& Consulting Services</Title>
                      </Center>
                    </Stack>
                  )
                }
              </Stack>
          <Space h="sm" />
          <Tabs color={colors[8]} value={activeTab} onChange={handleChangeTab}>
            <Tabs.List>
              <Group justify="space-between" className='tabsList'>
                  {!isSmallerThanLarge && (
                    <Tabs.Tab value="home">
                      <Text style={{ fontVariant: 'small-caps'}}>Home</Text>
                    </Tabs.Tab>
                  )}
                  <Tabs.Tab value="services" >
                    <Text style={{ fontVariant: 'small-caps' }}>Services</Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="faqs">
                    <Text style={{ fontVariant: 'small-caps' }}>FAQs</Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="about">
                    <Text style={{ fontVariant: 'small-caps' }}>About</Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="contact">
                    <Text style={{ fontVariant: 'small-caps' }}>Contact</Text>
                  </Tabs.Tab>
                {/* <Group pb='sm'>
                  <Center>
                    <TextInput
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.currentTarget.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          handleSearch();
                        }
                      }}
                    />
                    <Button color={colors[8]} onClick={handleSearch}><IconSearch /></Button>
                  </Center>
                </Group> */}
              </Group>
            </Tabs.List>
            <Space h="xl" />
            <Tabs.Panel value="home" ref={refs.home}>
              <Home searchQuery={lastSearchQuery} />
            </Tabs.Panel>
            <Tabs.Panel value="services" ref={refs.services}>
              <Services searchQuery={lastSearchQuery} />
            </Tabs.Panel>
            <Tabs.Panel value="about" ref={refs.about}>
              <About searchQuery={lastSearchQuery} />
            </Tabs.Panel>
            <Tabs.Panel value="faqs" ref={refs.faqs}>
              <Faqs searchQuery={lastSearchQuery} />
            </Tabs.Panel>
            <Tabs.Panel value="contact" ref={refs.contact}>
              <Contact searchQuery={lastSearchQuery} />
            </Tabs.Panel>
          </Tabs>
        </Container>
        <AppShell.Footer>
          <Space h="xl" />
          <Center>
            <Text c='dimmed' size='xs'>
              ©2024 Oakes Consulting. All rights reserved.
            </Text>
          </Center>
          <Space h="xl" />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  )
}

export default App;
