import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConvertDate from "components/convert-date";
import styles from "styles/post-header.module.css";

export default function PostHeader({ title, subtitle, publish = "" }: any) {
    return (
        <div className={styles.stack}>
            <p className={styles.subtitle}>{subtitle}</p>
            <h1 className={styles.title}>{title}</h1>
            {publish && (
                <div className={styles.publish}>
                    <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
                    <ConvertDate dateISO={publish} />
                </div>
            )}
        </div>
    );
}
