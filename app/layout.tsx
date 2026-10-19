import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Nosso Cofrinho | Sonhar juntos, conquistar juntos", description: "Transforme metas financeiras em conquistas com o Nosso Cofrinho." };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}
