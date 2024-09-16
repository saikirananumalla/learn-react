function Profile({scientist, size=70}) {
  return (
      <section className= "profile">
        <h2>{scientist.name}</h2>
      <img
          className="avatar"
          src={'https://i.imgur.com/' + scientist.imageId + 's.jpg'}
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
          <b>Awards: scientist.noOfAwards </b>
          {scientist.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {scientist.discvery}
        </li>
      </ul>
      </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile />
      <Profile />
    </div>
  );
}
