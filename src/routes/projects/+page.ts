import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

/** Renamed to `/work`. */
export const load: PageLoad = () => {
  throw redirect(301, "/work");
};
