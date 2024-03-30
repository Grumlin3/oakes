import "@mantine/core/styles.css";
import "../public/styles.css";
import { theme } from './theme';
import { 
  MantineProvider,
  AppShell,
  Center,
  Container,
  Menu,
  Space,
  Tabs,
  Text,
  Title,
} from '@mantine/core';
import { useState } from 'react';

import { Home } from './pages/HomeTab';
import { Contact } from './pages/ContactTab';
import { About } from './pages/AboutTab';
import { Services, services } from './pages/ServicesTab';
import { Say } from './pages/SayTab';
import { IconChecks } from '@tabler/icons-react';


function App() {
  const [service, setService] = useState<undefined | string>(undefined);
  return (
    <MantineProvider theme={theme}>
      <AppShell>
        <Container size='md' p='md'>
          <Space h="xl" />
          <Center>
            <Title style={{ fontVariant: 'small-caps', color: "#176c84" }}>Oakes Consulting</Title>
          </Center>
          {/* <Center>
              <Title order={3} style={{ color: "#5da5bd"}}><IconChecks/>collaboration <IconChecks/> compliance <IconChecks/> solutions</Title>
          </Center> */}
          <Space h="xl" />
          <Tabs defaultValue="home">
            <Tabs.List grow justify="flex-end">
              <Tabs.Tab value="home">
                <Text fw={700}>Home</Text>
              </Tabs.Tab>
              <Tabs.Tab value="about">
                <Text fw={700}>About</Text>
              </Tabs.Tab>
              <Tabs.Tab value="services">
              {/* <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target> */}
                <Text fw={700}>Services</Text>
                {/* </Menu.Target>
                <Menu.Dropdown>
                  {services.map((service) => (
                    <Menu.Item key={service.value} leftSection={service.icon} onClick={() => setService}>
                      {service.value}
                    </Menu.Item>
                  ))}              
                </Menu.Dropdown>
              </Menu> */}
              </Tabs.Tab>
              {/* <Tabs.Tab value="say">
                <Text fw={700}>What People Say</Text>
              </Tabs.Tab> */}
              <Tabs.Tab value="contact">
                <Text fw={700}>Contact</Text>
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

            {/* <Tabs.Panel value="say">
              <Say />
            </Tabs.Panel> */}

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
