export type ViewIdeaRouteParams = typeof viewModelRouteParams;

const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};

export const VIEW_DETAIL_ROUTE = '/models/:modelNick';
export const viewModelRouteParams = getRouteParams({ modelNick: true });
export const getAllModelsRoute = () => '/';
export const getViewModelRoute = ({ modelNick }: ViewIdeaRouteParams) => `/models/${modelNick}`;
export const getNewModelRoute = () => `/models/news`;
