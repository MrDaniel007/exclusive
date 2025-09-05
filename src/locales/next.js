import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
    resources: {
        kg: {
            translation:{
                home: "Башкы бет",
                contact: "байланыш"
            }
        },
            
        en: {translation:{
            home: "Home",
            contact: "Contact"
            
        }},
           
        ru: { translation:{
            home: "Главная",
            contact: "Контакт"

        }}
    },
    lng: "kg"
})

export default i18n