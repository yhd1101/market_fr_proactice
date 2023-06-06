// import i18n from 'i18next'
// import { initReactI18next } from "react-i18next";
//
// import langEn from "./lang.en"
// import langKo from "./lang.ko"
//
// const resources = {
//     "en-US" : {
//         translation: langEn
//     },
//
//     "ko-KR" : {
//         translation: langKo
//     },
//     jp: {},
//     cn: {}
// }
//
// i18n
//     .use(initReactI18next)
//     .init({
//         resources: resources,
//
//         lng: 'en-US',
//         fallbackLng: {
//             "en-US" : ["en-US"],
//             default : ["ko-KR"]
//         },
//         debug: true,
//         defaultNS: 'translations',
//         ns: 'translations',
//         keySeparator: false,
//         interpolation : {
//             escapeValue : false
//         },
//         react : {
//             useSuspense: false
//         }
//     })
//
// export default i18n



import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import langEn from './lang.en';
import langKo from './lang.ko';

const resource =  {
    'en-US': {
        translation: langEn
    },
    'ko-KR': {
        translation: langKo
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources: resource,
        // 초기 설정 언어
        lng: 'en-US',
        fallbackLng: {
            'ko-KR':['ko-KR'],
            default:['en-US']
        },
        debug: true,
        defaultNS: 'translation',
        ns: 'translation',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    })

export default i18n;