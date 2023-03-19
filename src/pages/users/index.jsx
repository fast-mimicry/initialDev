import { Header } from 'src/components/Header';
import { Footer } from "src/components/Footer";
import { Users as UsersComponent } from "src/components/Users";
import Head from 'next/head';

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersComponent />
      <Footer />
    </div>
  )
};

export default Users;