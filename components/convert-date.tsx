import { format, parseISO } from "date-fns";
import ja from "date-fns/locale/ja";

export default function ConvertDate({ dateISO }: any) {
    return <time dateTime={dateISO}>{format(parseISO(dateISO), "yyyy/MM/dd", { locale: ja })}</time>;
}
