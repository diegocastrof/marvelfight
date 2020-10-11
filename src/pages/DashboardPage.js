import React from 'react';
import CharacterList from '../components/CharacterList'
import SearchFilter from '../components/SearchFilter'


const DashboardPage = () => (
  <div>
    <SearchFilter />
    <CharacterList />
  </div>
)

export default DashboardPage