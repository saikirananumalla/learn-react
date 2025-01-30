import { useState } from 'react';
import { ItemListProps } from '../../types/arrObj';

type ArtWorkListType = {
  id: number;
  title: string;
  seen: boolean;
}

let nextId = 3;
const initialList : ArtWorkListType[] = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

function toggleList(aList: ArtWorkListType[], artWorkId: number, nextSeen: boolean): ArtWorkListType[] {
  return aList.map(e=> {
    if (e.id === artWorkId) {
      return {...e, seen: nextSeen}
    }
    else {
      return e
    }
  })
}

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );


  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    const tmpList = toggleList(myList, artworkId, nextSeen);
    setMyList(tmpList);
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    const tmpList = toggleList(yourList, artworkId, nextSeen)
    setYourList(tmpList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
