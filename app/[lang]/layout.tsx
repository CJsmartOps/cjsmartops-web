import { getDictionary, type Lang } from "@/lib/i18n";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default async function LangLayout({
  children, params,
}: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  return <>
    <Navbar lang={lang as Lang} />
    <main className="flex-1">{children}</main>
    <Footer lang={lang as Lang} />
  </>;
}
