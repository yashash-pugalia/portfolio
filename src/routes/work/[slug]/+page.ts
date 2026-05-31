import { error } from "@sveltejs/kit";
import { getWorkById } from "$lib/resume-work-content";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const work = getWorkById(params.slug);
  if (!work) error(404);
  return { work };
};
