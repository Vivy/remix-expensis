import { Link } from '@remix-run/react';

export default function Home() {
  return (
    <div>
      <Link to='/pricing'>Pricing Page</Link>
      <span>OR</span>
      <Link to='/auth'>Authentification Page</Link>
      <h1>Home page</h1>
    </div>
  );
}
