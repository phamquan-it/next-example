import dayjs from "dayjs";
import { useRouter } from "next/router"

const FormatDateFromLocale = (dateTime:string)=>{
    const router = useRouter();
    return dayjs(dateTime).format((router.locale == "vi")?"DD/MM/YYYY":"YYYY/MM/DD")
}
export default FormatDateFromLocale;