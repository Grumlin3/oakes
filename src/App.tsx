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
  Box
} from '@mantine/core'

import Home from './pages/HomeTab'
import Contact from './pages/ContactTab'
import About from './pages/AboutTab'
import Services from './pages/ServicesTab'
import Faqs from './pages/FaqsTab'

import { IconSearch } from '@tabler/icons-react'

import { searchMap } from './utils'

import logo from '../public/OakesLogo.jpg'

function App() {
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
            <Group>
              <img src={logo} className="logo"/>
              <Text className="tagline">Strategic Advisory<br/>& Consulting Services</Text>
            </Group>
          <Space h="sm" />
          <Tabs color={colors[5]} value={activeTab} onChange={handleChangeTab}>
            <Tabs.List className="mobile-tabs">
              <Group justify="space-between" className='tabsList'>
                <Group>
                  <Tabs.Tab value="home">
                    <Text>Home</Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="services" >
                    <Text className='tabsBreak'>Services</Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="about">
                    <Text>About</Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="faqs">
                    <Text>FAQs</Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="contact">
                    <Text>Contact</Text>
                  </Tabs.Tab>
                </Group>
                <Group>
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
                    <Button color={colors[6]} onClick={handleSearch}><IconSearch /></Button>
                  </Center>
                </Group>
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
