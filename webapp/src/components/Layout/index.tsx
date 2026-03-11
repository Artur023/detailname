import { Link, Outlet } from 'react-router-dom';
import { getAllDetailsRoute } from '../../lib/routes';
import css from './index.module.scss';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>DetailNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllDetailsRoute()}>
              All Details
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
