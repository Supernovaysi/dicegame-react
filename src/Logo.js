import logoImg from './assets/logo.png';

function Logo({className}) {
  return(
    <img className = {className} src = {logoImg} alt = 'logo' />
  );
}

export default Logo;