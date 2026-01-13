import { join } from "node:path";

// artificially inflate the bundle size
export { fakeModules } from "@/fakeModules";

export default function Page() {
	return "Hello World!";
}

export function test(c: string, a: string, b: string) {
	console.log(join(a, b, c));
}
