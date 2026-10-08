import styles from "./PageIntro.module.css";

type Props = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

export default function PageIntro({ eyebrow, title, children }: Props) {
  return (
    <header className={styles.intro}>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {children && <p className={`lead ${styles.lead}`}>{children}</p>}
      </div>
    </header>
  );
}
