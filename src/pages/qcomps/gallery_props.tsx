import { ProfileProps } from "@/types/scientist";

function Profile({scientist, size=70} : ProfileProps) {
  return (
      <section className= "profile">
        <h2>{scientist.name}</h2>
      <img
          className="avatar"
          src={'https://i.imgur.com/' + scientist.imageId + '.jpg'}
          alt={scientist.name}
          width={size}
          height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {scientist.profession}
        </li>
        <li>
          <b>Awards: {scientist.noOfAwards} </b>
          {scientist.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discovery}
        </li>
      </ul>
      </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
            scientist={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdGs', profession: 'physicist and chemist',
               awards: '(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)', noOfAwards: '4', discovery: 'polonium (element)'}}
            size={70} />
      <Profile
            scientist={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2s', profession: 'geochemist',
               awards: '(Miyake Prize for geochemistry, Tanaka Prize)', noOfAwards: '2', discovery: 'a method for measuring carbon dioxide in seawater'}}
            size={70} />
    </div>
  );
}
