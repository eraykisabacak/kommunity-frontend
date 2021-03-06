import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import Login from './login/login-form';
import Signup from './login/signup-form';
import { Card, Title } from '@/components/ui';

const Auth = () => {
  return (
    <div className="container">
      <Header />
      <div className="flex justify-around py-24">
        <div className="w-4/12">
          <Card shadow="lg">
            <Title type="h5">New member?</Title>
            <Title type="h6">Signup now!</Title>
            <Signup />
          </Card>
        </div>
        <div className="w-4/12">
          <Card shadow="lg">
            <Title type="h6">Existing member?</Title>
            <Title type="h5">Login to your account</Title>
            <Login />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
