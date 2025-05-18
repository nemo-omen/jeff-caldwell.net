import { error, redirect, type ServerLoadEvent } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event: ServerLoadEvent) => {
  if (event.locals.user) {
    redirect(302, '/admin');
  }

  return;
}) satisfies PageServerLoad;


export const actions = {
  login: async (event) => {
    const formData = await event.request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      await event.locals.pb.collection('users').authWithPassword(email, password);
      if (!localStorage.pb?.authStore?.model?.verified) {
        event.locals.pb.authStore.clear();
        error(401, 'That is not a valid email or password');
      }
    } catch (err) {
      console.error('Login error:', err);
      error(500, err.message);
    }

    redirect(302, '/admin');
  },
};