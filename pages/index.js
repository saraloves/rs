import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="Index">
          <p>Hello I want to get styled</p>
          <Link href="/login">
            <a>Would you like to log in?</a>
          </Link>
          <Button color="danger">Hello!</Button>
          <style jsx>{`
            p {
              color:red;
            }

            a {
              color:blue;
            }

            a:hover {
              opacity: 0.6;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}

export default Index;


