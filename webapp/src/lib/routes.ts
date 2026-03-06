export type ViewIdeaRouteParams = typeof viewDetailRouteParams;

const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};

export const getAllDetailsRoute = () => '/';
export const VIEW_DETAIL_ROUTE = '/details/:detailNick';
export const viewDetailRouteParams = getRouteParams({ detailNick: true });
export const getViewDetailRoute = ({ detailNick }: ViewIdeaRouteParams) => `/details/${detailNick}`;
