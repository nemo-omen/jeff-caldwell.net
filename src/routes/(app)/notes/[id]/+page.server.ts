import type { PageServerLoad } from "../../../$types";

export const load: PageServerLoad = async ({ params, fetch }) => {
  const { id } = params;

  console.log(id);

  return {
    id,
  };
};