import { WhatsAppIcon } from "@/components/BrandIcons";
import { whatsappLink } from "@/lib/site";
import styles from "./WhatsAppFab.module.css";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hello Himidi Graphics, I'd like to talk about a design project.")}
      className={styles.fab}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
