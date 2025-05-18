import { redirect, type ServerLoadEvent } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event: ServerLoadEvent) => {
  if (!event.locals.user) {
    return redirect(302, '/');
  }

  console.log('User:', event.locals.user);
  return {
    user: event.locals.user,
  };
}) satisfies PageServerLoad;