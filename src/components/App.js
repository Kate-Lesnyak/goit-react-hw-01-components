import { GlobalStyle } from './GlobalStyle';

import { Section } from './Section/Section';
import { Layout } from './Layout/Layout';

import { Profile } from './Profile/Profile';
import { StatisticsList } from './Statistics/StatisticsList';
import { StatisticsTitle } from './Statistics/StatisticsTitle';

import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';

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
          <StatisticsTitle title="Upload stats" />
          <StatisticsList stats={data} />
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

//  return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
