const React = require('react');
const Layout = require('./src/components/layout').default;
const { Provider, defaultTheme } = require('@adobe/react-spectrum');

module.exports = {
  wrapPageElement: ({ element, props }) => <Layout {...props}>{element}</Layout>,
  wrapRootElement: ({ element }) => <Provider theme={defaultTheme}>{element}</Provider>
}