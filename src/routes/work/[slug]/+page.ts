import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getWorkById } from "$lib/resume-work-content";

export const load: PageLoad = ({ params }) => {
  const work = getWorkById(params.slug);
  if (!work) error(404);
  return { work };
};
