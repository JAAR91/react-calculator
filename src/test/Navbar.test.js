import TestRenderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('creates the navbar', () => {
  const navTest = TestRenderer.create(
    <nav>
      <p>
        Math Magicians
      </p>
      <ul>
          <li key={link.id}>
            <NavLink>Home</NavLink>
            <NavLink>Calculator</NavLink>
            <NavLink>Quotes</NavLink>
          </li>
      </ul>
    </nav>
  );
  expect(Navbar).toEqual(navTest.toJSON());
});
