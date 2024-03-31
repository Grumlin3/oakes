import "@mantine/core/styles.css";
import "../public/styles.css";
import { theme } from './theme';
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
    <MantineProvider theme={theme}>
      <AppShell>
        <Container size='md' p='md'>
          <Space h="xl" />
          <Center>
            <Title style={{ fontVariant: 'small-caps', color: "#0063FF" }}>Oakes Consulting</Title>
          </Center>
          <Space h="xl" />
          <Tabs defaultValue="home">
            <Tabs.List grow justify="flex-end">
              <Tabs.Tab value="home">
                <Text size='lg' fw={500} style={{ fontVariant: 'small-caps' }}>Home</Text>
              </Tabs.Tab>
              <Tabs.Tab value="services">
                <Text size='lg' fw={500} style={{ fontVariant: 'small-caps' }}>Services</Text>
              </Tabs.Tab>
              <Tabs.Tab value="about">
                <Text size='lg' fw={500} style={{ fontVariant: 'small-caps' }}>About</Text>
              </Tabs.Tab>
              <Tabs.Tab value="contact">
                <Text size='lg' fw={500} style={{ fontVariant: 'small-caps' }}>Contact</Text>
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
          <Center>
            <Text c='dimmed' size='xs'>
              ©2024 Patrick R Oakes Consulting. All rights reserved.
            </Text>
          </Center>
          <Space h="xl" />
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  )
}

export default App;
