import React, {useState} from 'react';
import {Headline, Searchbar} from 'react-native-paper';

const ChoresList = () => {
  const [searchQuery, setSearchQuery] = useState(true);

  const _onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <Headline>All Chores</Headline>
      <Searchbar
        placeholder="Filter tags..."
        onChangeText={_onChangeSearch}
        value={searchQuery}
      />
    </>
  );
};

export default ChoresList;
