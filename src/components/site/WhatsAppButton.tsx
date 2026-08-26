import { MessageCircle } from "lucide-react";

const whatsappNumber = "254716972103";

export function WhatsAppButton() {
  return (
    <div className="fixed inset-x-0 bottom-5 z-40 pointer-events-none sm:bottom-6">
      <div className="mx-auto flex max-w-7xl justify-end px-5 sm:px-8 lg:px-10">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group pointer-events-auto relative flex items-center gap-3"
        >
          <span className="whitespace-nowrap bg-white px-3.5 py-2 text-sm font-medium text-ink-900 shadow-[0_8px_30px_-10px_rgba(11,14,20,0.35)] transition-[opacity,transform] duration-300 ease-out-expo group-hover:-translate-x-1">
            We&apos;re here to help
          </span>
          <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.8)] transition-transform duration-300 ease-out-expo group-hover:scale-105">
            <span className="absolute inset-0 rounded-full bg-[#25D366] whatsapp-pulse" aria-hidden />
            <MessageCircle className="relative h-7 w-7 fill-current" aria-hidden />
          </span>
        </a>
      </div>
    </div>
  );
}
