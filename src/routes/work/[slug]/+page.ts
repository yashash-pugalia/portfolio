import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getWorkBySlug } from "$lib/resume-work-content";

export const load: PageLoad = ({ params }) => {
  const work = getWorkBySlug(params.slug);
  if (!work) error(404);
  return { work };
};
