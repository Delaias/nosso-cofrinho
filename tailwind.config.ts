import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"], theme: { extend: { colors: { navy: "#0b1025", purple: "#8452f6", lilac: "#ba9dff", mint: "#62ebbd" } } }, plugins: [] } satisfies Config;
