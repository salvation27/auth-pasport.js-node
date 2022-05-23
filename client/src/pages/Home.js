import React from 'react'

const Home = ({user}) => {
  return (
    <div>
      <h3>Home</h3>
      {user && <div className="posts">Скрытый Контент</div>}
    </div>
  );
}

export default Home