/*
 * https://reactrouter.com/6.30.1/upgrading/v5#upgrade-to-react-router-v51
 * React-router v6 added hooks and removed the need for `withRouter`
 * but it didn't remove the need to refactor absolutely everything
 * into functional components.
 */

import { ComponentType } from 'react';
import { useLocation, useParams } from 'react-router';

type MinimalLocation = {
  pathname?: string;
};

export type RouteComponentProps = {
  params: Readonly<Record<string, string>>;
  location: MinimalLocation;
};

type ParamsProvidedByHoc = keyof RouteComponentProps;

export function withRouter<T extends RouteComponentProps>(
  Component: ComponentType<T>,
): ComponentType<Omit<T, ParamsProvidedByHoc>> {
  return function WithRouteParams(props: Omit<T, ParamsProvidedByHoc>) {
    const params = useParams();
    const location = useLocation();
    return <Component {...(props as T)} params={params} location={location} />;
  };
}
