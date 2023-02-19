import { GlobalStyle } from './GlobalStyle';

import { Section } from './Section/Section';
import { Layout } from './Layout/Layout';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';


export const App = () => {
  return (
    <main>
      <GlobalStyle />

      <Section>
        <Layout>
          <Profile user={user} />
        </Layout>
      </Section>

      <Section>
        <Layout>
          <Statistics title="Upload stats" stats={data} />
        </Layout>
      </Section>

      <Section>
        <Layout>
          <FriendList friends={friends} />
        </Layout>
      </Section >

      <Section>
        <Layout>
          <TransactionHistory items={transactions} />
        </Layout>
      </Section>
    </main>
  );
};
