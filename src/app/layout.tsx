import React from 'react';
import WelcomePage from './page';

function Layout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href='#'>WelcomePage</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <WelcomePage />
      </main>
    </div>
  );
}

export default Layout;