import { generatePageMetadata } from "@/lib/metadata";
import { getDictionary, type Lang } from "@/lib/i18n";
import { Lock, Key, RefreshCw, Shield, Database, Eye } from "lucide-react";
import { ProductHero } from "@/components/products/product-hero";
import { ProductCapability } from "@/components/products/product-capability";
import { GradientCard } from "@/components/ui/gradient-card";

const caps_es = [
  { Icon: Lock, title: "Cifrado Fernet AES", description: "Todos los secretos, tokens y datos sensibles cifrados con algoritmo simétrico verificable." },
  { Icon: Key, title: "Gestión centralizada de secretos", description: "Un único punto de custodia para todas las credenciales de la plataforma." },
  { Icon: RefreshCw, title: "Rotación automática de claves", description: "Claves que rotan periódicamente sin intervención manual ni exposición de secretos." },
  { Icon: Shield, title: "Sin secretos en texto plano", description: "Ningún secreto se almacena en código fuente, variables de entorno ni archivos de configuración." },
  { Icon: Database, title: "Cifrado en reposo", description: "Datos de clientes y configuración sensible protegidos con cifrado en disco." },
  { Icon: Eye, title: "Auditoría de acceso", description: "Registro de cada acceso a secretos con trazabilidad completa para cumplimiento." },
];

const caps_en = [
  { Icon: Lock, title: "Fernet AES encryption", description: "All secrets, tokens and sensitive data encrypted with verifiable symmetric algorithm." },
  { Icon: Key, title: "Centralized secret management", description: "Single custody point for all platform credentials." },
  { Icon: RefreshCw, title: "Automatic key rotation", description: "Keys that rotate periodically without manual intervention or secret exposure." },
  { Icon: Shield, title: "No plaintext secrets", description: "No secrets stored in source code, environment variables or configuration files." },
  { Icon: Database, title: "At-rest encryption", description: "Client data and sensitive configuration protected with disk encryption." },
  { Icon: Eye, title: "Access auditing", description: "Logging of every secret access with full traceability for compliance." },
];

interface Props { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  return generatePageMetadata({ lang: lang as Lang, slug: "products/citadel", metaKey: "products" });
}

export default async function CitadelPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Lang);
  const p = dict.products.citadel;
  const caps = lang === "es" ? caps_es : caps_en;

  return (
    <div className="flex flex-col">
      <ProductHero product={p} color="text-amber-400" iconBg="bg-amber-500/15" />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl space-y-12">
          <GradientCard><h2 className="mb-3 text-lg font-semibold text-foreground">{dict.products.purpose_label}</h2><p className="text-sm leading-relaxed text-secondary">{p.purpose}</p></GradientCard>
          <GradientCard><h2 className="mb-3 text-lg font-semibold text-foreground">{dict.products.problem_label}</h2><p className="text-sm leading-relaxed text-secondary">{p.problem}</p></GradientCard>
          <div className="rounded-2xl border border-border bg-surface/40 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-lg font-semibold text-foreground">{dict.products.capabilities}</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {caps.map(({ Icon, title, description }, i) => (
                <ProductCapability key={title} icon={<Icon className="h-4 w-4 text-accent" />} title={title} description={description} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
