import "@mantine/core/styles.css";
import "../public/styles.css";
import { siteTheme, colors } from './theme';
import { 
  MantineProvider,
  AppShell,
  Center,
  Container,
  Space,
  Tabs,
  Text,
  Title,
} from '@mantine/core';

import { Home } from './pages/HomeTab';
import { Contact } from './pages/ContactTab';
import { About } from './pages/AboutTab';
import { Services } from './pages/ServicesTab';


function App() {
  return (
    <MantineProvider theme={siteTheme}>
      <AppShell>
        <Container size='md' p='md'>
          <Space h="xl" />
          <Center>
            <Title style={{ fontVariant: 'small-caps', color: colors[8], fontWeight: '500' }}>Oakes Consulting</Title>
          </Center>
          <Center>
            <Title order={4} mt='-4' style={{ fontVariant: 'small-caps', color: colors[6], fontWeight: '500'}}>Strategic Advisory & Consulting Services</Title>
          </Center>
          <Space h="xl" />
          <Tabs color={colors[5]} defaultValue="home">
            <Tabs.List grow justify="flex-end">
              <Tabs.Tab value="home">
                <Text style={{ fontVariant: 'small-caps' }}>Home</Text>
              </Tabs.Tab>
              <Tabs.Tab value="services">
                <Text style={{ fontVariant: 'small-caps' }}>Services</Text>
              </Tabs.Tab>
              <Tabs.Tab value="about">
                <Text style={{ fontVariant: 'small-caps' }}>About</Text>
              </Tabs.Tab>
              <Tabs.Tab value="contact">
                <Text style={{ fontVariant: 'small-caps' }}>Contact</Text>
              </Tabs.Tab>
            </Tabs.List>
            <Space h="xl" />
            <Tabs.Panel value="home">
              <Home />
            </Tabs.Panel>
            <Tabs.Panel value="about">
              <About />
            </Tabs.Panel>
            <Tabs.Panel value="services">
            <Services service/>
            </Tabs.Panel>
            <Tabs.Panel value="contact">
              <Contact />
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
