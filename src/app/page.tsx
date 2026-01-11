import { fakeModules } from "@/fakeModules";
import { join } from "node:path";
import { Client } from "./Client";

export { fakeModules };

export default function Page() {
	return <Client />
}

export function test(a: string, b: string) {
  console.log(join(process.cwd(), a, b));
}