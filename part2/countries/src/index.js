import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const dummyData = {
  "name": {
      "common": "Papua New Guinea",
      "official": "Independent State of Papua New Guinea",
      "nativeName": {
          "eng": {
              "official": "Independent State of Papua New Guinea",
              "common": "Papua New Guinea"
          },
          "hmo": {
              "official": "Independen Stet bilong Papua Niugini",
              "common": "Papua Niu Gini"
          },
          "tpi": {
              "official": "Independen Stet bilong Papua Niugini",
              "common": "Papua Niugini"
          }
      }
  },
  "tld": [
      ".pg"
  ],
  "cca2": "PG",
  "ccn3": "598",
  "cca3": "PNG",
  "cioc": "PNG",
  "independent": true,
  "status": "officially-assigned",
  "unMember": true,
  "currencies": {
      "PGK": {
          "name": "Papua New Guinean kina",
          "symbol": "K"
      }
  },
  "idd": {
      "root": "+6",
      "suffixes": [
          "75"
      ]
  },
  "capital": [
      "Port Moresby"
  ],
  "altSpellings": [
      "PG",
      "Independent State of Papua New Guinea",
      "Independen Stet bilong Papua Niugini"
  ],
  "region": "Oceania",
  "subregion": "Melanesia",
  "languages": {
      "eng": "English",
      "hmo": "Hiri Motu",
      "tpi": "Tok Pisin"
  },
  "translations": {
      "ara": {
          "official": "دولة بابوا غينيا الجديدة",
          "common": "بابوا غينيا الجديدة"
      },
      "ces": {
          "official": "Nezávislý stát Papua Nová Guinea",
          "common": "Papua-Nová Guinea"
      },
      "cym": {
          "official": "Independent State of Papua New Guinea",
          "common": "Papua New Guinea"
      },
      "deu": {
          "official": "Unabhängiger Staat Papua-Neuguinea",
          "common": "Papua-Neuguinea"
      },
      "est": {
          "official": "Paapua Uus-Guinea Iseseisvusriik",
          "common": "Paapua Uus-Guinea"
      },
      "fin": {
          "official": "Papua-Uuden-Guinean Itsenäinen valtio",
          "common": "Papua-Uusi-Guinea"
      },
      "fra": {
          "official": "État indépendant de Papouasie-Nouvelle-Guinée",
          "common": "Papouasie-Nouvelle-Guinée"
      },
      "hrv": {
          "official": "Nezavisna Država Papui Novoj Gvineji",
          "common": "Papua Nova Gvineja"
      },
      "hun": {
          "official": "Pápua Új-Guinea Független Állam",
          "common": "Pápua Új-Guinea"
      },
      "ita": {
          "official": "Stato indipendente di Papua Nuova Guinea",
          "common": "Papua Nuova Guinea"
      },
      "jpn": {
          "official": "パプアニューギニア独立国",
          "common": "パプアニューギニア"
      },
      "kor": {
          "official": "파푸아뉴기니 독립국",
          "common": "파푸아뉴기니"
      },
      "nld": {
          "official": "Onafhankelijke Staat Papoea -Nieuw-Guinea",
          "common": "Papoea-Nieuw-Guinea"
      },
      "per": {
          "official": "مملکت مستقل پاپوآ گینهٔ نو",
          "common": "پاپوآ گینه نو"
      },
      "pol": {
          "official": "Niezależne Państwo Papui-Nowej Gwinei",
          "common": "Papua-Nowa Gwinea"
      },
      "por": {
          "official": "Estado Independente da Papua Nova Guiné",
          "common": "Papua Nova Guiné"
      },
      "rus": {
          "official": "Независимое Государство Папуа-Новой Гвинеи",
          "common": "Папуа — Новая Гвинея"
      },
      "slk": {
          "official": "Nezávislý štát Papua-Nová Guinea",
          "common": "Papua-Nová Guinea"
      },
      "spa": {
          "official": "Estado Independiente de Papúa Nueva Guinea",
          "common": "Papúa Nueva Guinea"
      },
      "swe": {
          "official": "Den oberoende staten Papua Nya Guinea",
          "common": "Papua Nya Guinea"
      },
      "urd": {
          "official": "آزاد ریاستِ پاپوا نیو گنی",
          "common": "پاپوا نیو گنی"
      },
      "zho": {
          "official": "巴布亚新几内亚",
          "common": "巴布亚新几内亚"
      }
  },
  "latlng": [
      -6,
      147
  ],
  "landlocked": false,
  "borders": [
      "IDN"
  ],
  "area": 462840,
  "demonyms": {
      "eng": {
          "f": "Papua New Guinean",
          "m": "Papua New Guinean"
      },
      "fra": {
          "f": "Papouasienne",
          "m": "Papouasien"
      }
  },
  "flag": "🇵🇬",
  "maps": {
      "googleMaps": "https://goo.gl/maps/ChGmzZBjZ3vnBwR2A",
      "openStreetMaps": "https://goo.gl/maps/ChGmzZBjZ3vnBwR2A"
  },
  "population": 8947027,
  "gini": {
      "2009": 41.9
  },
  "fifa": "PNG",
  "car": {
      "signs": [
          "PNG"
      ],
      "side": "left"
  },
  "timezones": [
      "UTC+10:00"
  ],
  "continents": [
      "Oceania"
  ],
  "flags": {
      "png": "https://flagcdn.com/w320/pg.png",
      "svg": "https://flagcdn.com/pg.svg"
  },
  "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/pg.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/pg.svg"
  },
  "startOfWeek": "monday",
  "capitalInfo": {
      "latlng": [
          -9.45,
          147.18
      ]
  },
  "postalCode": {
      "format": "###",
      "regex": "^(\\d{3})$"
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App dummyData={dummyData} />
  </React.StrictMode>,
  document.getElementById('root')
);
