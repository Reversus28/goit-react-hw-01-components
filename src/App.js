import Profile from './components/Profile/Profile';
import user from './user.json';
console.log('user', user);

function App() {
  return (
    <section className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </section>
  );
}

export default App;
