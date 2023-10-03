import Link from "next/link";

import classes from '../topnavigation/topnavigation.css';

function TopNavigation() {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>React meetups</div>
        <nav>
          <ul>
            <li>
              <Link href='/'>All Meetups</Link>
            </li>
            <li>
              <Link href='/new-meetup'>Add New Meetups</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}