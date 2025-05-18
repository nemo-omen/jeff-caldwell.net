import PocketBase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
  const url = 'https://pocketbase.jeff-caldwell.net';
  event.locals.pb = new PocketBase(url);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
  const model = event.locals.pb.authStore.model;

  try {
    if (event.locals.pb.authStore.isValid) {
      await event.locals.pb.collection('users').authRefresh();
      event.locals.user = structuredClone(model);
    }
  } catch (e) {
    event.locals.pb.authStore.clear();
    event.locals.user = null;
  }
  const response = await resolve(event);
  response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false, sameSite: 'Lax' }));
  return response;
};