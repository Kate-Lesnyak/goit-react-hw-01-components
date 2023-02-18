
import { Profile } from './Profile/Profile';
import { StatisticsList } from './Statistics/StatisticsList';
import { Section } from './Section/Section';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';


export const App = () => {
  return (
    <main>
      <Section>
        <Profile user={user} />
      </Section>

      <Section title="Upload stats">
        <StatisticsList stats={data} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section >

      <Section>
        <TransactionHistory items={transactions} />
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
