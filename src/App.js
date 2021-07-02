import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import Container from './components/Container/Container';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <main className="App">
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statData} />
        <Statistics stats={statData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </main>
  );
}

export default App;
