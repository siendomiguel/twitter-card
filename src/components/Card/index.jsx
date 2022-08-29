import './styles.css';

function Card () {
 return (
  <div className='main-twitter'>
    <div className='card-tweet'>
      <div className='avatar'>
        <img src="https://pbs.twimg.com/profile_images/1509724487490674691/aaYWGgYc_400x400.jpg" alt="Avatar" />
      </div>
      <div className="contain">
        <div className="header-contain">
          <p id="name">Siendo Miguel 🇻🇪</p>
          <p id="username">@siendomiguel</p>
          <p id="date">· 25 jul.</p>
          <img src="https://cdn-icons-png.flaticon.com/512/6704/6704979.png" alt="image menu" />
        </div>
        <div className="text-contain">
          <p id='text-contain'>Axie Origin ha demostrado nuevamente que aún se encuentra en fase alpha. <br /> <br />

            Al comienzo de la season, escalabas en el leaderboard por los axies que tenías en el equipo, ya a 3 días de finalizar la season, ahora lo único que hace la diferencia son las runas y charms que consigas.
          </p>
          <p className="hashtags" id='hashtags'>#AxieOrigin #Axie</p>
        </div>
      </div>

    </div>
  </div>
 )
}

export { Card }
