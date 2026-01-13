import { join } from "node:path";

export default function Page() {
	return "Hello World";
}

export function test(a: string, b: string) {
  console.log(join(process.cwd(), a, b));
}