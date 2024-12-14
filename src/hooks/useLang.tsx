import { useState } from "react";
import { es, en } from "@/app/lang";

export default function useLang(selectedLang: string) {
    const [lang, setLang] = useState(selectedLang === "es" ? es : en);

    function changeLang(newLang: string) {
        setLang(newLang === "es" ? es : en);
    }

    return {
        lang,
        changeLang,
    };
}
