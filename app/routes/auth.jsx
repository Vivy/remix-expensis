import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div>
      <Link to='/'>Home Page</Link>
      <Link to='/pricing'>PricingPage</Link>
      <h1>Authentification Page</h1>
    </div>
  );
};

export default Auth;
