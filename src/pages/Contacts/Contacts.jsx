import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';

import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

export default function Contacts() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  const handleRedirect = () => {
    setTabIndex(0);
  };

  return (
    <Box as="section">
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        maxW="700px"
        mr="auto"
        ml="auto"
        p={3}
      >
        <Tabs
          p="20px"
          variant="enclosed"
          w={'100%'}
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList>
            <Tab p={4} _selected={{ color: 'white', bg: '#f08282' }}>
              Add contact
            </Tab>
            <Tab p={4} _selected={{ color: 'white', bg: '#f08282' }}>
              All contacts
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ContactForm />
            </TabPanel>
            <TabPanel>
              <Filter />
              <ContactList redirect={handleRedirect} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}
