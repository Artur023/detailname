export const getAllDetailsRoute = (): string => '/';

export const VIEW_DETAIL_ROUTE = '/details/:detailNick';
export const getViewDetailRoute = (detailNick: string) => `/details/${detailNick}`;
