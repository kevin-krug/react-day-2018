// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Code,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import SvgLogo from './components/icon.svg.jsx';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >

        <Slide transition={['zoom']} bgColor="secondary">
          <SvgLogo></SvgLogo>
          <Heading size={1} fit caps lineHeight={1.5} textColor="primary">
            React Day Berlin 2018
          </Heading>
            <Link textColor="primary" href="https://reactday.berlin">https://reactday.berlin</Link>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <List>
            <ListItem margin="20px auto">Tip Top Testing in JavaScript</ListItem>
            <ListItem margin="20px auto">Feature Driven Architecture</ListItem>
            <ListItem margin="20px auto">Structure Your App's Story With Sagas and Selectors</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            Tip Top Testing in JavaScript (How write good tests)
          </Heading>
          <Text size={6} textColor="primary">
            Jack Franklin, Thread, UK
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Setup, Evoke, Assert</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <CodePane
                  lang="js"
                  theme="dark"
                  source={require("./assets/test.example")}
                  margin="20px auto"
                  overflow="overflow"
                  style={{ fontSize: '1.8rem' }}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Keep unit tests as a unit</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            ..with Mocks / Spies
          </Heading>
          <CodePane
                  lang="js"
                  source={require("./assets/spy.example")}
                  margin="20px auto"
                  overflow="overflow"
                  style={{ fontSize: '1.8rem' }}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Common Gotcha! in Jest Mocks wouldn't be cleared between tests
          </Heading>
          <CodePane
                  lang="js"
                  source={require("./assets/clearmocks.example")}
                  margin="20px auto"
                  overflow="overflow"
                  style={{ fontSize: '1.8rem' }}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            .. but avoid using beforeEach for the setup (hard to debug)
          </Heading>
          <CodePane
                  lang="js"
                  source={require("./assets/setup.example")}
                  margin="20px auto"
                  overflow="overflow"
                  style={{ fontSize: '1.8rem' }}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Stick to contract / public API</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <CodePane
                  lang="js"
                  theme="dark"
                  source={require("./assets/contract.example")}
                  margin="20px auto"
                  overflow="overflow"
                  style={{ fontSize: '1.8rem' }}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>When writing new tests, test that they fail</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Can you spot the problem with this test?
          </Heading>
          <CodePane
                  lang="js"
                  source={require("./assets/noassertion.example")}
                  margin="20px auto"
                  overflow="overflow"
                  style={{ fontSize: '1.8rem' }}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Fix bugs with short feedback loops</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text margin="40px auto" textColor="primary" italic>
            There's a bug where the price filtering max price limit is not used
          </Text>
          <Text textAlign="left" textColor="primary">
            1 . Prove it in a failing test
          </Text>
          <CodePane
                  lang="js"
                  source={require("./assets/failingtest.example")}
                  margin="20px auto"
                  overflow="overflow"
                  style={{ fontSize: '1.8rem' }}
          />
          <Text textAlign="left" textColor="primary">❗❗ TEST FAILURE</Text>
          <Text textAlign="left" textColor="primary">
            2. Fix the bug without changing the test
          </Text>
          <Text textAlign="left" textColor="primary">
            3. Rerun the test
          </Text>
          <Text textAlign="left" textColor="primary">✅ TEST PASSED Expected [], got []</Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
            <Text textColor="primary" textAlign="left">✔️ Robost Code</Text>
            <Text textColor="primary" textAlign="left">✔️ Avoids Regression (Bugs accidentally surfacing again)</Text>
        </Slide>


        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote><Quote>🚦 Red, Green Refactor (Confident Refactoring)</Quote></BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <List ordered>
            <ListItem margin="20px auto">Write the test and see it fail.</ListItem>
            <ListItem margin="20px auto">Write whatever code it takes to make it pass.</ListItem>
            <ListItem margin="20px auto">Rewrite the code until you're happy, using the tests to guide you.</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Only one rule for testing React components</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Which test is better?
          </Heading>
          <CodePane
                  lang="js"
                  source={require("./assets/badreact.example")}
                  margin="20px auto"
                  overflow="overflow"
                  style={{ fontSize: '1.8rem' }}
          />
          <Heading size={6} textColor="primary" caps>
            Or:
          </Heading>
          <CodePane
                  lang="js"
                  source={require("./assets/badreact.example")}
                  margin="20px auto"
                  overflow="overflow"
                  style={{ fontSize: '1.8rem' }}
          />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text textAlign="left" textColor="primary">👎 Reaches into the component to read some state</Text>
          <Code textColor="primary">expect(wrapper.getState().isDisabled).toEqual(true)</Code>
          <Text margin="100px 0 0 0" textAlign="left" textColor="primary">👍 Reads the component as the user would.</Text>
          <Code textColor="primary">expect(wrapper.find('button').prop('disabled')).toEqual(true)</Code>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" textAlign="left" caps>How to write good tests :
          </Heading>
          <List ordered>
            <ListItem margin="40px auto">Remember what makes a good test: setup, invocation, assertion</ListItem>
            <ListItem margin="40px auto">Avoid brittle tests: test the public contract, not internal details.</ListItem>
            <ListItem margin="40px auto">When it comes to React, the framework doesn't matter if you test like a user (Test Props and do NOT reach into state)</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            Feature Driven Architecture
          </Heading>
          <Text size={6} textColor="primary">
            Oleg Isonen, Webflow, US
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            Structure Your App's Story With Sagas and Selectors
          </Heading>
          <Text size={6} textColor="primary">
            Rebecca Hill, WeTransfer, NL
          </Text>
        </Slide>

      </Deck>
    );
  }
}
