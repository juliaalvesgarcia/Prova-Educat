import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import RoutesApp  from '../src/Routes';

function App() {
  return (
    <div className="App">
      <Layout>
        <RoutesApp />
      </Layout>
    </div>
  );
}

export default App;