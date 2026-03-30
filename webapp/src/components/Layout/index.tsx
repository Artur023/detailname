import { Link, Outlet } from 'react-router-dom';
import * as router from '../../lib/routes';
import css from './index.module.scss';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>ModelNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={router.getAllModelsRoute()}>
              All Models
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={router.getNewModelRoute()}>
              New Model
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
