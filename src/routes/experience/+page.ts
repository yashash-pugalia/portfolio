import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

/** Merged into `/work` (Work). */
export const load: PageLoad = () => {
  throw redirect(301, "/work");
};
