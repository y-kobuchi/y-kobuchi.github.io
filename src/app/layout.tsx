import { FC, ReactNode } from 'react';
import Link from 'next/link';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Yuma Kobuchi. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
