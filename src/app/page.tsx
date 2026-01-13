import { join } from "node:path";

// artificially inflate the bundle size
export { fakeModules } from "@/fakeModules";

export default function Page() {
	return "Hello World";
}

export function test(a: string, b: string) {
  console.log(join(process.cwd(), a, b));
}