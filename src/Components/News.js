import React, { Component } from 'react'
import NewsItem from './NewsItem'
import propTypes from 'prop-types'


export class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "Fastmail.com"
    },
    "author": "Neil Jenkins",
    "title": "Introducing passkey support to Fastmail",
    "description": "You can now create passkeys for your Fastmail account, giving you a quicker, more secure way to log in.",
    "url": "https://www.fastmail.com/blog/introducing-passkeys/",
    "urlToImage": "https://www.fastmail.com/assets/images/Passkey-Blog@2x-dLLgw5EJsR-1200.png",
    "publishedAt": "2024-08-14T03:43:47Z",
    "content": "From today, were pleased to announce you can create passkeys for your Fastmail account, giving you a faster, more secure way to log in. Open the Privacy &amp; Security settings in your account to get… [+8769 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "heise online"
    },
    "author": "Frank Schräer",
    "title": "Mittwoch: Cyberkriminelle vor langer Haftstrafe, Handy-Rasterfahndung unzulässig",
    "description": "Exploit-Kit Angler vor Gericht + Standortdaten sind Privatsache + Truth Social mit miserablen Finanzen + Cyberangriffe auf US-Wahlkampfteams + Bit-Rauschen",
    "url": "https://www.heise.de/news/Mittwoch-Cyberkriminelle-vor-langer-Haftstrafe-Handy-Rasterfahndung-unzulaessig-9834071.html",
    "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/5/1/0/6/1/mittwoch-ca2c24c15e3ffaa5.webp",
    "publishedAt": "2024-08-14T04:15:00Z",
    "content": "Fast 10 Jahre lang wurden die Cyberkriminellen hinter dem Exploit-Kit Angler gesucht. Per Malvertising hätten sie Malware verteilt und persönliche Daten abgegriffen, die im Darknet verkauft wurden. J… [+6340 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Wesley Hilliard)",
    "title": "US may seek Google breakup or data share after search monopolization ruling",
    "description": "The US DOJ ruled Google is an illegal monopolist, which could result in breaking up the parent company Alphabet or requiring data sharing with rivals while undercutting Google Gemini's advantage.Google on the Apple App StoreGoogle is a word synonymous with se…",
    "url": "https://appleinsider.com/articles/24/08/14/us-may-seek-google-breakup-or-data-share-after-search-monopolization-ruling",
    "urlToImage": "https://photos5.appleinsider.com/gallery/60687-124896-Goog-xl.jpg",
    "publishedAt": "2024-08-14T01:14:04Z",
    "content": "Google on the Apple App Store\r\nThe US DOJ ruled Google is an illegal monopolist, which could result in breaking up the parent company Alphabet or requiring data sharing with rivals while undercutting… [+1827 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AppleInsider"
    },
    "author": "news@appleinsider.com (Andrew Orr)",
    "title": "How to create widgets for personal & emergency contacts on iPhone",
    "description": "Setting up widgets on your iPhone for contact and emergency information provides essential details at a glance without needing to unlock it. Here's how to do it and why it's helpful.How to create widgets for personal & emergency contacts on iPhoneAlthough you…",
    "url": "https://appleinsider.com/inside/ios/tips/how-to-create-widgets-for-personal-emergency-contacts-on-iphone",
    "urlToImage": "https://photos5.appleinsider.com/gallery/60541-124550-contact-header-xl.jpg",
    "publishedAt": "2024-08-14T03:05:04Z",
    "content": "How to create widgets for personal &amp; emergency contacts on iPhone\r\nSetting up widgets on your iPhone for contact and emergency information provides essential details at a glance without needing t… [+3546 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yanko Design"
    },
    "author": "Sarang Sheth",
    "title": "Compact Shaver the size of an AirPods Case is the perfect Pocket EDC for Grooming on-the-go",
    "description": "Compact Shaver the size of an AirPods Case is the perfect Pocket EDC for Grooming on-the-goDid you ever think a clipper could become a part of your EDC? Well, this one can. I’m sure this sounds relatable. You wake up...",
    "url": "https://www.yankodesign.com/2024/08/13/compact-shaver-the-size-of-an-airpods-case-is-the-perfect-pocket-edc-for-grooming-on-the-go/",
    "urlToImage": "https://www.yankodesign.com/images/design_news/2024/08/auto-draft/zera_m_compact_shaver_1.jpg",
    "publishedAt": "2024-08-14T01:45:51Z",
    "content": "Did you ever think a clipper could become a part of your EDC? Well, this one can.\r\nI’m sure this sounds relatable. You wake up to notice you’re running late for work. You have time to brush your teet… [+5280 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Phandroid - News for Android"
    },
    "author": "Tyler Lee",
    "title": "Pixel 9 will be the first Pixel phone to ship without the latest version of Android",
    "description": "It looks like the Google Pixel 9 will be the first Pixel phone that will not ship with the latest version of Android, which is a shame.\nThe post Pixel 9 will be the first Pixel phone to ship without the latest version of Android appeared first on Phandroid.",
    "url": "https://phandroid.com/2024/08/14/pixel-9-will-be-the-first-pixel-phone-to-ship-without-the-latest-version-of-android/",
    "urlToImage": "https://phandroid.com/wp-content/uploads/2024/08/Pixel9Pro_4.jpg",
    "publishedAt": "2024-08-14T04:15:08Z",
    "content": "The Google Pixel 9 series is here. For the most part, it looks like its going to be a great handset, but we have some bad news. It appears that the Pixel 9 will not be shipping with the latest versio… [+1190 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Faz.net"
    },
    "author": "Nina rehfeld",
    "title": "Äffchen im Zuckerschock: Die Apple-TV+-Serie „Bad Monkey“",
    "description": "Bittersüß: Apple TV+ adaptiert Carl Hiaasens Karibik-Krimi „Bad Monkey“ mit Vince Vaughn als bösartig charmantem Plappermäulchen.",
    "url": "https://www.faz.net/aktuell/feuilleton/medien/apple-tv-adaptiert-carl-hiaasens-karibik-krimi-bad-monkey-19917135.html",
    "urlToImage": "https://media0.faz.net/ppmedia/aktuell/521618994/1.9917134/facebook_teaser/redet-wie-ein-wasserfall-vince.jpg",
    "publishedAt": "2024-08-14T04:47:37Z",
    "content": "Da ist das pausenlose, sarkastische Geplapper, mit dem sich Vince Vaughns Figur die Welt vom Leibe halten will. Da sind Kalauer dieser Qualität: Rosa konnte sich nicht erinnern, wann sie zuletzt in G… [+4074 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iMore"
    },
    "author": "heyimjoew@gmail.com (Joe Wituschek)",
    "title": "The Apple Watch needs to steal the Pixel Watch 3's Loss of Pulse Detection feature",
    "description": "The Apple Watch has a lot of great health features, but Google's new Loss of Pulse Detection with the Pixel Watch 3 came out of nowhere.",
    "url": "https://www.imore.com/health-fitness/apple-watch/the-apple-watch-needs-to-steal-the-pixel-watch-3s-loss-of-pulse-detection-feature",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/eu6HWHTarJGCC8aaxyB56U-1200-80.jpg",
    "publishedAt": "2024-08-14T01:27:06Z",
    "content": "The Apple Watch has generally been the smartwatch that introduced major health and safety features to the world. The Pixel Watch, the Galaxy Watch, and basically every other smartwatch have generally… [+2600 chars]"
    },
    {
    "source": {
    "id": "bloomberg",
    "name": "Bloomberg"
    },
    "author": "Leah Nylen, Anna Edgerton",
    "title": "DOJ Considers Push to Break Up GOOGLE!",
    "description": "A rare bid to break up Alphabet Inc.’s Google is one of the options being considered by the Justice Department after a landmark court ruling found that the company monopolized the online search market, according to people with knowledge of the deliberations.",
    "url": "https://www.bloomberg.com/news/articles/2024-08-13/doj-considers-seeking-google-goog-breakup-after-major-antitrust-win/",
    "urlToImage": "https://www.bnnbloomberg.ca/resizer/v2/EHKYEZBEAH24CWIRUBIQOWHL3M.jpg?smart=true&auth=932c34bbf98d61a7338ac56fe435b7b19761eff947c9a3bbe789b5b5e7f5c39b&width=1200&height=630",
    "publishedAt": "2024-08-14T02:49:37Z",
    "content": "(Bloomberg) -- A rare bid to break up Alphabet Inc.s Google is one of the options being considered by the Justice Department after a landmark court ruling found that the company monopolized the onlin… [+6530 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "20 Minutes"
    },
    "author": "20 Minutes avec AFP (20 Minutes)",
    "title": "Technologie : Pour combler son retard, Google présente son nouveau smartphone dopé à l’IA",
    "description": "Gemini, principal modèle d’IA de Google, est désormais intégré au cœur des smartphones, pour communiquer directement avec la machine",
    "url": "https://www.20minutes.fr/high-tech/4105758-20240814-technologie-combler-retard-google-presente-nouveau-smartphone-dope-ia",
    "urlToImage": "https://img.20mn.fr/KCmBtoC3SNCQX8gAOtHfRyk/1444x920_mountain-view-california-august-13-an-attendee-holds-the-new-google-pixel-9-phones-during-the-made-by-google-event-at-google-headquarters-on-august-13-2024-in-mountain-view-california-google-announced-new-pixel-phones-watches-and-ai-features-during-the-made-by-google-event-justin-sullivan-getty-images-afp-photo-by-justin-sullivan-getty-images-north-america-getty-images-via-afp",
    "publishedAt": "2024-08-14T04:20:14Z",
    "content": "Google continue de miser sur lIA. Le géant de la tech a présenté mardi ses nouveaux smartphones Pixel dopés à lintelligence artificielle générative, graal actuel de la Silicon Valley.\r\nA Mountain Vie… [+2693 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New Atlas"
    },
    "author": "C.C. Weiss",
    "title": "Slick, versatile mini-camper van out-flexes new Volkswagen California",
    "description": "The Volkswagen California may remain the global icon of compact, space-efficient van life, but there are a number of other smart pop-top mini-camper vans out there capable of providing a similar, if not superior, experience. Increasingly, those vans are being…",
    "url": "https://newatlas.com/automotive/citroen-holidays-mini-camper-van/",
    "urlToImage": "https://assets.newatlas.com/dims4/default/6c9ecb2/2147483647/strip/true/crop/3118x1637+0+193/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F65%2F59%2Ffcbb0ae447e29aa34144973a7026%2F2024-citron-holidays2.jpg&na.image_optimisation=0",
    "publishedAt": "2024-08-14T04:47:00Z",
    "content": "The Volkswagen California may remain the global icon of compact, space-efficient van life, but there are a number of other smart pop-top mini-camper vans out there capable of providing a similar, if … [+5469 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "La Vanguardia"
    },
    "author": "Edgar Otero",
    "title": "Todos los estándares y protocolos WiFi: diferencias y ventajas de cada uno",
    "description": "En esta guía te voy a explicar cuáles son todos los estándares y protocolos WiFi que han salido al mercado hasta la fecha. Además, te explico un poco sobre las características de cada uno, así como las mejoras que introdujeron en su momento. También te voy a …",
    "url": "https://www.lavanguardia.com/andro4all/operadoras/estandares-y-protocolos-wifi",
    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/08/historia-del-wifi.jpg?width=1200",
    "publishedAt": "2024-08-14T03:30:44Z",
    "content": "Logotipo oficial de WiFi 6 junto a unos rayos que simbolizan su enorme capacidad de transferencia\r\nEn esta guía te voy a explicar cuáles son todos los estándares y protocolos WiFi que han salido al m… [+6735 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Nextpit.de"
    },
    "author": "Stefan Möllenhoff",
    "title": "Google Gemini Live: Mondlandung-Moment für KI-Smartphones?",
    "description": "Googles Gemini Live ist gelandet – und damit geht das bislang spektakulärste KI-Feature für Consumer in Serie. Ist das der Mondlandung-Moment für KI?",
    "url": "https://www.nextpit.de/google-gemini-live-mondlandung-moment-fuer-ki-smartphones",
    "urlToImage": "https://fs.npstatic.com/userfiles/7446224/image/google-gemini-hero.jpg",
    "publishedAt": "2024-08-14T04:30:01Z",
    "content": "Was ist Gemini und wenn ja, wie viele?\r\nEinen Schritt zurück: Unter dem Dach namens Gemini vereint Google etwas verwirrend viele unterschiedliche Dinge. Einmal gibt es da die generativen KI-Modelle G… [+6287 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digiday"
    },
    "author": "Ronan Shields",
    "title": "Criteo is holding M&A discussions with Skai to bolster its retail media play",
    "description": "Investing hundreds of millions of dollars in the outfit, formerly known as Kenshoo, would enhance its turnaround strategy with new measurement capabilities.",
    "url": "http://digiday.com/media-buying/criteo-is-holding-ma-discussions-with-skai-to-bolster-its-retail-media-play/",
    "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2023/04/upfront-exec-money-digiday.jpg",
    "publishedAt": "2024-08-14T04:01:00Z",
    "content": "Criteo is in M&amp;A talks with Skai, a company formerly known as Kenshoo, with the negotiations potentially leading to a deal worth hundreds of millions of dollars, according to sources as the Franc… [+3295 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digiday"
    },
    "author": "Antoinette Siu",
    "title": "Breaking down influencer marketing, from Joe Rogan to Selena Gomez to MrBeast",
    "description": "As investment in influencers takes up a bigger share of marketing and media budgets, it's worth exploring the differences among the several types of influencers that have emerged across different platforms — all the way from TikTok personalities to podcast ho…",
    "url": "http://digiday.com/marketing/breaking-down-influencer-marketing-from-joe-rogan-to-selena-gomez-to-mrbeast/",
    "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2024/08/creators-ai-digiday.jpg",
    "publishedAt": "2024-08-14T04:01:00Z",
    "content": "As investment in influencers takes up a bigger share of marketing and media budgets, it’s worth exploring the differences among the several types of influencers that have emerged across different pla… [+9028 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Esat Dedezade, Contributor, \n Esat Dedezade, Contributor\n https://www.forbes.com/sites/esatdedezade/",
    "title": "Google’s New AI Features Could (And Should) Make Apple Nervous",
    "description": "The tech giant doubles down on AI alongside the launch of its new Pixel 9 Series, with a slew of innovative features that should appeal to the masses.",
    "url": "https://www.forbes.com/sites/esatdedezade/2024/08/13/googles-new-ai-features-could-and-should-make-apple-nervous/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66bbbcb3d29fb0f757017154/0x0.jpg?format=jpg&crop=3865,2175,x0,y0,safe&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-08-14T01:26:33Z",
    "content": "The Made By Google launch event saw the official unveiling of the Pixel 9 series and Pixel 9 Pro Fold, but it was the tech giants slew of new AI features that stole Tuesdays show, firmly intensifying… [+8221 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "David Bloom, Senior Contributor, \n David Bloom, Senior Contributor\n https://www.forbes.com/sites/dbloom/",
    "title": "As Cable Nets’ Value Written Down, 2024 Streaming Revenues Up 27%",
    "description": "Streaming-video revenues for 2024's first half jumped to nearly $23 billion, and AVOD ad revenues rose by half, while other entertainment sectors continue to decline.",
    "url": "https://www.forbes.com/sites/dbloom/2024/08/13/as-cable-nets-value-written-down-2024-streaming-revenues-up-27/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66bbee7ea5881e236f7e35f1/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-08-14T00:15:01Z",
    "content": "getty\r\nThe transition from legacy broadcast and cable television to a streaming-dominated future has been particularly stark the past few days. First, Warner Bros. Discovery and Paramount Global wrot… [+3803 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Erik Kain, Senior Contributor, \n Erik Kain, Senior Contributor\n https://www.forbes.com/sites/erikkain/",
    "title": "Today’s ‘Wordle’ #1152 Hints, Clues And Answer For Wednesday, August 14th",
    "description": "Looking for help with today's New York Times Wordle? Here are hints, clues and commentary to help you solve today's Wordle and sharpen your guessing game.",
    "url": "https://www.forbes.com/sites/erikkain/2024/08/13/todays-wordle-1152-hints-clues-and-answer-for-wednesday-august-14th/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/654ac7d9543b3152d167c85e/0x0.jpg?format=jpg&crop=2629,1480,x0,y135,safe&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-08-14T01:30:00Z",
    "content": "How to solve today's Wordle.\r\nSOPA Images/LightRocket via Getty Images\r\nLooking for Tuesdays Wordle hints, clues and answer? You can find them here:\r\nForbesTodays Wordle #1151 Hints, Clues And Answer… [+2924 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Todd Holmes, Contributor, \n Todd Holmes, Contributor\n https://www.forbes.com/sites/toddholmes/",
    "title": "Twisters And Its Marketing Campaign Storms The Box Office",
    "description": "The marketing campaign for Twisters is helping the new film to pack a punch worthy of an EF-5 tornado! So, what marketing elements have been the keys to its success?",
    "url": "https://www.forbes.com/sites/toddholmes/2024/08/13/twisters-and-its-marketing-campaign-storms-the-box-office/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66bb9563e691cfe96ef23bdb/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "2024-08-14T00:26:04Z",
    "content": "Glen Powell, Lee Isaac Chung, Daisy Edgar-Jones and Anthony Ramos at the \"Twisters\" Los Angeles ... [+] premiere held at Westwood Regency Village Theatre on July 11, 2024 in Los Angeles, California. … [+11069 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Olhardigital.com.br"
    },
    "author": "Kelvin Leão Nunes da Costa",
    "title": "10 melhores filmes de ninjas para ver online",
    "description": "É fã dos ninjas e suas habilidades furtivas e combates acrobáticos? Selecionamos os 10 melhores filmes para assistir online.\nO post 10 melhores filmes de ninjas para ver online apareceu primeiro em Olhar Digital.",
    "url": "https://olhardigital.com.br/2024/08/14/cinema-e-streaming/10-melhores-filmes-de-ninjas-para-ver-online/",
    "urlToImage": "https://img.odcdn.com.br/wp-content/uploads/2024/08/2-14-scaled.jpg",
    "publishedAt": "2024-08-14T04:00:00Z",
    "content": "A figura dos ninjas desperta um fascínio duradouro. Originalmente guerreiros furtivos e especializados em espionagem e combate no Japão feudal, os ninjas têm inspirado uma ampla gama de mídias, inclu… [+6038 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Netaful.jp"
    },
    "author": "コグレマサト",
    "title": "「iPhone SE 4」はApple Intelligenceのため8GB RAMを搭載する可能性が高い",
    "description": "「iPhone SE 4」は、Apple Intelligenceを搭載するために8GB RAMを搭載する可能性が高いとMacRumorsが報じています。iPhone SE 4 Likely to Feature 8GB...\n投稿 「iPhone SE 4」はApple Intelligenceのため8GB RAMを搭載する可能性が高い は ネタフル に最初に表示されました。",
    "url": "https://netaful.jp/iphone/0155045.html",
    "urlToImage": "https://netaful.jp/wp-content/uploads/2024/02/iphone-se-di.jpg",
    "publishedAt": "2024-08-14T00:00:00Z",
    "content": "iPhone SE 4Apple Intelligence8GB RAMMacRumorsiPhone SE 4 Likely to Feature 8GB of RAM for Apple Intelligence\r\nNext year’s iPhone SE 4 will almost certainly come with 8GB of RAM, up from 4GB in the 20… [+300 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Sspai.com"
    },
    "author": "克莱德",
    "title": "Google 硬件发布会回顾：Gemini 分量管饱，AI 体验保真",
    "description": "每年的 Google 硬件发布会就像是「对答案」，并且我们会发现自己之前收到的「小抄」可能是学霸送出来的。查看全文",
    "url": "https://sspai.com/post/91450",
    "urlToImage": "https://cdnfile.sspai.com/2024/8/14/article/00fd88d2-3aa8-c2d4-c69c-b7cdf5ac3196.jpeg",
    "publishedAt": "2024-08-14T03:01:23Z",
    "content": "Google \r\nGoogle Pixel 9 Pixel Watch 3Pixel Buds Pro 2 \r\nGemini \r\n Google I/O 2024 Google GeminiGoogle AI Google Rick Osterloh AI Pixel 8 Pro Zoom Enhance \r\n Gemini Workspace \r\nGemini Google Gemini Ke… [+2201 chars]"
    },
    {
    "source": {
    "id": "die-zeit",
    "name": "Die Zeit"
    },
    "author": "ZEIT ONLINE: Wirtschaft - Simon Sales Prado",
    "title": "Pixel 9: Google setzt bei neuen Smartphones auf Künstliche Intelligenz",
    "description": "Bei der Vorstellung der neuen Pixel-Modelle legt Google den Fokus auf KI. Anders als Meta und Apple hat das Unternehmen offenbar keine Probleme mit der EU-Gesetzgebung.",
    "url": "https://www.zeit.de/wirtschaft/2024-08/google-kuenstliche-intelligenz-pixel-9",
    "urlToImage": "https://img.zeit.de/wirtschaft/2024-08/google-pixel-9-kuenstliche-intelligenz/wide__1300x731",
    "publishedAt": "2024-08-14T02:56:26Z",
    "content": "Auch Google setzt bei seinen neuen Smartphones auf KI-Funktionen. Die Software soll zum Beispiel den Inhalt von E-Mails und Telefonanrufen zusammenfassen oder Textvorschläge machen, sagte Gerätechef … [+2370 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SamMobile"
    },
    "author": "Abid Iqbal Shaik",
    "title": "Hate Gemini button in Google Messages? You can disable it",
    "description": "Samsung is slowly retiring its in-house Messages app in favor of Google Messages to improve RCS adoption. However, not everyone likes the Google Messages app, and one of their reasons could be the dedicated button for Gemini. You can soon disable the Gemini b…",
    "url": "https://www.sammobile.com/news/google-messages-gets-gemini-button-disable-option/",
    "urlToImage": "https://www.sammobile.com/wp-content/uploads/2024/06/Google-Gemini-2-720x405.jpg",
    "publishedAt": "2024-08-14T03:49:17Z",
    "content": "Samsung is slowly retiring its in-house Messages app in favor of Google Messages to improve RCS adoption. However, not everyone likes the Google Messages app, and one of their reasons could be the de… [+1567 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Unwire.hk"
    },
    "author": "唐美鳳",
    "title": "為支援 Apple Intelligence 功能 iPhone SE 4 或增至 8GB RAM",
    "description": "iPhone SE 是 Apple 手機產品中定位最低，售價亦最便宜的型號，因此規格配置亦比較弱。以 2022 年推出的 iPhone SE 第三代為例，Apple 只為它配備 4GB RAM，但在傳聞明年推出的 iPhone SE 第四代，RAM 容量將會增加一倍至 8GB，原因與人工智能有關。\nThe post 為支援 Apple Intelligence 功能 iPhone SE 4 或增至 8GB RAM appeared first on 香港 unwire.hk 玩生活．樂科技.",
    "url": "https://unwire.hk/2024/08/14/iphone-se-4-8gb-ram-apple-intelligence/mobile-phone/",
    "urlToImage": "https://cdn.unwire.hk/wp-content/uploads/2024/08/04-13-694x390.jpg",
    "publishedAt": "2024-08-14T02:00:03Z",
    "content": "iPhone SE Apple 2022 iPhone SE Apple 4GB RAM iPhone SE RAM 8GB\r\n Mark Gurman Power On 9 iPhone 16 iPhone SE Apple Intelligence iPhone 15 iPhone 15 Pro Pro Max Apple Intelligence 8GB RAM 6GB RAM iPhon… [+217 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Thenewslens.com"
    },
    "author": "中央通訊社",
    "title": "巴黎長榮桂冠酒店拒掛五星旗，中國網紅抗議無效，廚師：本來有掛，台籍總經理要求剪掉",
    "description": "張教官透過地陪訪談一名自稱在巴黎長榮桂冠酒店擔任中餐行政主廚的楊姓廚師。楊姓廚師稱，酒店18日把各國國旗掛上，當時他有看到五星旗，但隔天回來就沒有了。楊姓廚師並稱，酒店告訴他，是蘇姓總經理18日看到五星旗指示工作人員剪掉的；蘇總是台灣人，台灣總公司派來的，蘇總才有權去做這個決策。",
    "url": "https://www.thenewslens.com/article/206570",
    "urlToImage": "https://image1.thenewslens.com/2024/8/4s5gk4uhopav1xrmxs72uewg3etu4g.jpg?fm=jpg&format=crop&h=630&q=70&w=1200",
    "publishedAt": "2024-08-14T01:42:36Z",
    "content": "2050 ESG ESG ESG \r\nApple Microsoft 2030 AI NVIDIA 2025 \r\nIFRS FoundationISSB S1 S2 2024 \r\n ESG \r\n ESG \r\n IFRS \r\nESG \r\nESG 0 1\r\n ESG \r\nESG ESG \r\n ESG"
    },
    {
    "source": {
    "id": null,
    "name": "Thenewslens.com"
    },
    "author": "中央通訊社",
    "title": "美解禁對沙烏地阿拉伯軍售攻擊性武器，盼利雅德助化解加薩衝突",
    "description": "現在美國、英國和以色列一直在打擊葉門「青年運動」相關目標，沙烏地則在一旁作壁上觀。為尋找長期解決方案，美國國務卿布林肯（Antony Blinken）多次出訪沙烏地，商討一旦利雅德承認以色列，美國將採取的一系列獎勵措施。",
    "url": "https://www.thenewslens.com/article/206574",
    "urlToImage": "https://image1.thenewslens.com/2024/8/qjz4ggstrtnowkklsjpno4bh1qwvmc.jpg?fm=jpg&format=crop&h=630&q=70&w=1200",
    "publishedAt": "2024-08-14T01:56:36Z",
    "content": "2050 ESG ESG ESG \r\nApple Microsoft 2030 AI NVIDIA 2025 \r\nIFRS FoundationISSB S1 S2 2024 \r\n ESG \r\n ESG \r\n IFRS \r\nESG \r\nESG 0 1\r\n ESG \r\nESG ESG \r\n ESG"
    },
    {
    "source": {
    "id": null,
    "name": "Thenewslens.com"
    },
    "author": "中央通訊社",
    "title": "「程序員變外賣員」：刻劃中國底層困境，徐崢新片《逆行人生》評價兩極",
    "description": "2018年徐崢主演的《我不是藥神》在中國民間引起反響與思考，對於《逆行人生》是否可能有如《我不是藥神》一樣在社會層面引起改變？徐崢回應，電影更多時候不能直接解決問題，而是提出問題，在情感層面引發觀眾的共鳴和思考。",
    "url": "https://www.thenewslens.com/article/206579",
    "urlToImage": "https://image1.thenewslens.com/2024/8/kpyi73wgnozhc25mdwv7hhg6qdgdzn.jpg?fm=jpg&format=crop&h=630&q=70&w=1200",
    "publishedAt": "2024-08-14T02:22:18Z",
    "content": "2050 ESG ESG ESG \r\nApple Microsoft 2030 AI NVIDIA 2025 \r\nIFRS FoundationISSB S1 S2 2024 \r\n ESG \r\n ESG \r\n IFRS \r\nESG \r\nESG 0 1\r\n ESG \r\nESG ESG \r\n ESG"
    },
    {
    "source": {
    "id": null,
    "name": "Queerty.com"
    },
    "author": "Carson Mlnarik",
    "title": "Luke Evans is in love & he doesn’t care who knows it!",
    "description": "\"We're building a life together. We're happy, and I'm very grateful that I met that person.\"",
    "url": "https://www.queerty.com/luke-evans-is-in-love-he-doesnt-care-who-knows-it-20240813",
    "urlToImage": "https://adabgmwwup.cloudimg.io/v7/_queerty-prodweb_/2024/08/gettyimages-2041445576-scaled.jpg?auto=format&auto=compress&fit=crop&gravity=smart&w=1200&h=630&force_format=jpeg&wat=1&wat_gravity=southeast&wat_pad=70",
    "publishedAt": "2024-08-14T01:00:00Z",
    "content": "Luke Evans is in love, and he doesn’t care who knows it!\r\nIn a new interview with Out, the Good Grief actor gushed about partner Fran Tomas whom he called “the best part of me” and the life they’ve b… [+2459 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AdExchanger"
    },
    "author": "AdExchanger Guest Columnist",
    "title": "Who Stands To Benefit In Search Ads Following Google’s Antitrust Verdict?",
    "description": "With the huge ruling from the US Department of Justice that Google is a “monopolist” when it comes to search, the regulatory future of online search is being questioned – a scary thought for many marketers. The crux of the case is that Google pays companies t…",
    "url": "http://www.adexchanger.com/data-driven-thinking/who-stands-to-benefit-in-search-ads-following-googles-antitrust-verdict/",
    "urlToImage": "https://live-adexchanger.pantheonsite.io/wp-content/uploads/2024/08/Tory-Lariar-NAMER-Monks-e1723573503937.jpg",
    "publishedAt": "2024-08-14T04:35:09Z",
    "content": "With the huge ruling from the US Department of Justice that Google is a monopolist when it comes to search, the regulatory future of online search is being questioned a scary thought for many markete… [+5312 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Autocar"
    },
    "author": "Autocar",
    "title": "My Week In Cars: New Steve Cropley/Matt Prior podcast (ep.101)",
    "description": "Steve Cropley and Matt Prior talk Jaguar's rejuvenation, the unexceptional Toyota Hilux, and more\n\nEpisode 101 of the Autocar podcast My Week In Cars finds your hosts Matt Prior and  Steve Cropley back in the studio* (*Steve's dining room) for a chat about Ja…",
    "url": "https://www.autocar.co.uk/car-news/podcasts-my-week-in-cars/my-week-cars-new-steve-cropleymatt-prior-podcast-ep101",
    "urlToImage": "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/mwic-ep101-jaguar.jpg",
    "publishedAt": "2024-08-14T04:00:45Z",
    "content": "Episode 101 of the Autocar podcast My Week In Cars finds your hosts Matt Prior and  Steve Cropley back in the studio* (*Steve's dining room) for a chat about Jaguar's upcoming rejuvenation, a rather … [+331 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Just Jared"
    },
    "author": "Just Jared",
    "title": "Vince Vaughn Attends 'Bad Monkey' Premiere with Wife Kyla Weber After Receiving Star on Hollywood Walk of Fame",
    "description": "Vince Vaughn is back on the red carpet! The 54-year-old actor was joined by wife Kyla Weber at the premiere of his new Apple TV+ series Bad Monkey on Monday (August 12) held at the Billy Wilder Theater at The Hammer Museum in Los Angeles. Fellow cast members …",
    "url": "https://www.justjared.com/2024/08/13/vince-vaughn-attends-bad-monkey-premiere-with-wife-kyla-weber-after-receiving-star-on-hollywood-walk-of-fame/",
    "urlToImage": "https://cdn01.justjared.com/wp-content/uploads/headlines/2024/08/vince-bad-premiere.jpg",
    "publishedAt": "2024-08-14T02:06:40Z",
    "content": "Vince Vaughn is back on the red carpet!\r\nThe 54-year-old actor was joined by wife Kyla Weber at the premiere of his new Apple TV+ series Bad Monkey on Monday (August 12) held at the Billy Wilder Thea… [+1074 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Natalie.mu"
    },
    "author": "音楽ナタリー",
    "title": "Mrs. GREEN APPLE「familie」MV公開に向けてティザーフォト公開",
    "description": "Mrs. GREEN APPLEの新曲「familie」のミュージックビデオのティザーフォト#1が公開された。",
    "url": "https://natalie.mu/music/news/586434",
    "urlToImage": "https://ogre.natalie.mu/media/news/music/2024/0814/familie_TeaserPhoto_01.jpg?impolicy=twitter_card_face_crop",
    "publishedAt": "2024-08-14T01:54:00Z",
    "content": "@natalie_mu\r\nMrs. GREEN APPLEfamilieMVhttps://t.co/TiI236FeaF\r\n#MrsGREENAPPLE # #familie https://t.co/qnYIJodahq"
    },
    {
    "source": {
    "id": null,
    "name": "Natalie.mu"
    },
    "author": "音楽ナタリー",
    "title": "Mrs. GREEN APPLE若井滉斗＆藤澤涼架、明日の「ラヴィット！」に生出演",
    "description": "明日8月15日朝8:00よりTBS系で生放送されるバラエティ「ラヴィット！」に、Mrs. GREEN APPLEの若井滉斗（G）と藤澤涼架（Key）が出演する。",
    "url": "https://natalie.mu/music/news/586457",
    "urlToImage": "https://ogre.natalie.mu/media/news/music/2024/0406/MrsGREENAPPLE_art202404.jpg?impolicy=twitter_card_face_crop",
    "publishedAt": "2024-08-14T03:33:00Z",
    "content": "CDTVNumber_iME:IKARALiSAGEMN"
    },
    {
    "source": {
    "id": null,
    "name": "Santalab.me"
    },
    "author": "SANTA@管理人",
    "title": "何故か最新版である「iOS 17.6.1 / iPadOS 17.6.1」のSHSHが発行停止し、数時間後に再開される。",
    "description": "先週リリースされたばかりの「iOS 17.6.1 / iPadOS 17.6.1」ですが、何故か…SHSHの発行が停止し、その数時間後に再開されるという出来事が発生しています。既にSHSH発行は再開されているため現時点で問題はないのですが、…",
    "url": "https://tools4hack.santalab.me/news-for-some-reason-ios1761-ipados1761-shsh-stopped.html",
    "urlToImage": "https://tools4hack.santalab.me/media/uploads/2024/08/news-for-some-reason-ios1761-ipados1761-shsh-stopped.jpg",
    "publishedAt": "2024-08-14T03:45:57Z",
    "content": "iOS 17.6.1 / iPadOS 17.6.1SHSHSHSHiOS 17.xSHSH3\r\nSHSHsta\r\niOS 17.6.1 SHSH\r\n88iOS 17.6.1 / iPadOS 17.6.1SHSHiOS 17.6.1 / iPadOS 17.6.1SHSHiOS 17.6 / iPadOS 17.6SHSH\r\niOS 17.6.1 / iPadOS 17.6.1SHSHiOS … [+660 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "AFP",
    "title": "Asian markets extend gains as US inflation data boost rate hopes",
    "description": "Equities marched higher Wednesday after hopes for a Federal Reserve interest rate cut next month were boosted by data showing US wholesale prices rose less...",
    "url": "https://finance.yahoo.com/news/asian-markets-extend-gains-us-025227505.html",
    "urlToImage": "https://media.zenfs.com/en/afp.com/4353e0444fbd17be95e98f0073ed5340",
    "publishedAt": "2024-08-14T02:52:27Z",
    "content": "Oil prices are being supported by worries about the Middle East crisis, though the gains have been tempered by healthy output from key producers (DAVID MCNEW)\r\nEquities marched higher Wednesday after… [+5018 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Lupa.cz"
    },
    "author": "redakce@lupa.cz (Lupa.cz: Jaromír Novák)",
    "title": "Krátké vlny: Letní kyberstřípky",
    "description": "Malware, který vyřadil vytápění, Apple v Rusku likviduje VPN, ukrajinský hacktivismus, rizikovost Huawei u evropského soudu. I v létě se v oblasti kyberbezpečnosti dějí zajímavé věci.",
    "url": "https://www.lupa.cz/clanky/kratke-vlny-letni-kyberstripky/",
    "urlToImage": "https://i.iinfo.cz/images/364/kyberneticka-bezpecnost-hacker_watermark-lupa-cz.webp",
    "publishedAt": "2024-08-14T04:30:00Z",
    "content": "Zatímco návrh nového zákona o kybernetické bezpenosti se z vlády posunul k projednání do Poslanecké snmovny (snmovní tisk . 759) a Evropská komise ukonila veejnou konzultaci nad návrhem provádcího op… [+6612 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Paul Tan's Automotive News"
    },
    "author": "Anthony Lim",
    "title": "GWM Tank 300 – first 100 units of SUV delivered to Malaysian customers within first month of its launch",
    "description": "Great Wall Motor (GWM) Malaysia has announced that it has delivered 100 units of the GWM Tank 300, doing so within a month of the model’s launch in mid-July. This comes after the company said […]\nThe post GWM Tank 300 – first 100 units of SUV delivered to Mal…",
    "url": "https://paultan.org/2024/08/14/gwm-tank-300-first-100-units-of-suv-delivered-to-malaysian-customers-within-first-month-of-its-launch/",
    "urlToImage": "https://paultan.org/image/2024/08/GWM-Tank-300-deliveries-1200x700.jpg",
    "publishedAt": "2024-08-14T03:14:57Z",
    "content": "Great Wall Motor (GWM) Malaysia has announced that it has delivered 100 units of the GWM Tank 300, doing so within a month of the model’s launch in mid-July. This comes after the company said at the … [+1892 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Jessica Rendall",
    "title": "Google Intensifies Health Tracking With 'Loss of Pulse Detection'",
    "description": "The new feature for Pixel Watch 3 will call emergency services if you're unresponsive. Here's how Google built it and what a cardiologist thinks.",
    "url": "https://www.cnet.com/tech/mobile/google-intensifies-health-tracking-with-loss-of-pulse-detection/",
    "urlToImage": "https://www.cnet.com/a/img/resize/b4e3387d8864dec7eddcb02ac7401d93ca49ece4/hub/2024/08/12/c1e616e5-ddec-4524-8b87-830b2a6a7f64/no-pulse-detection-feature-1.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2024-08-14T03:00:11Z",
    "content": "Google is sharpening its health-feature teeth to catch more than everyday wellness and irregular heartbeats. At the company's Made by Google event on Tuesday, it announced Loss of Pulse Detection, a … [+3397 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Technews.tw"
    },
    "author": "邱 倢芯",
    "title": "秋天要到了，盤點 9 月蘋果將發表哪些新品",
    "description": "距離秋季僅剩下一個月的時間，每年 9 月蘋果都會舉辦秋季新品發表會；不過今年除了 iPhone 16 系列外，外傳還有許多新產品將於今年的發表會中亮相。 Pro 版 iPhone 16 高階版的 iPhone 16 對比於去年的產品將會有大幅度的硬體升級，包括： 拉大顯示器尺寸。Pro 型號從 6....",
    "url": "https://technews.tw/2024/08/14/apple-event-2024/",
    "urlToImage": "https://img.technews.tw/wp-content/uploads/2023/09/17104738/apple-event-tim-cook1.jpeg",
    "publishedAt": "2024-08-14T02:58:09Z",
    "content": "9 iPhone 16 \r\nPro iPhone 16\r\n iPhone 16 \r\n<ul><li>Pro 6.1 6.3 Pro Max 6.7 6.9 </li><li></li><li> 1,200 4,800 5 </li><li>A18 Pro AI </li></ul>iPhone 16iPhone 16 Plus\r\niPhone 16 iPhone 16 Plus Pro iPho… [+802 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Technews.tw"
    },
    "author": "MoneyDJ",
    "title": "全球 AI PC 第二季出貨 880 萬台、蘋果市占 60% 稱霸",
    "description": "根據市調機構 Canalys 最新統計，2024 年第二季（4-6 月）全球能夠執行 AI 任務的 PC 出貨量達到 880 萬台，對總體出貨的占比來到 14%、高於 Q1 的 7%。 Canalys定義的AI PC，指的是內建網路處理器（NPU）等AI專門晶片組或區塊的桌機和筆電。這些AI專用晶片...",
    "url": "https://technews.tw/2024/08/14/14-percent-of-pcs-shipped-globally-in-q2-2024-were-ai-capable/",
    "urlToImage": "https://img.technews.tw/wp-content/uploads/2024/07/17094126/lenovo-ai-pc.jpg",
    "publishedAt": "2024-08-14T02:15:57Z",
    "content": "Canalys 2024 4-6 AI PC 880 14% Q1 7%\r\nCanalysAI PCNPUAIAIAMDXDNANeural EngineIntelAI BoostQualcommHexagon\r\nSourceCanalys\r\nCanalysApple Inc.Neural EngineMQ2AI PC60%Apple IntelligenceAI\r\nMicrosoftWindo… [+161 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Technews.tw"
    },
    "author": "MoneyDJ",
    "title": "AI 續旺，台灣主要 IT 廠營收今年高、增幅 2 年來最大",
    "description": "AI 需求續旺，帶動台灣主要 IT 廠營收連 5 個月增長、創 2 年來最大增幅，月營收規模連 5 個月高於 1 兆元（台幣，以下同）創今年來新高水準。 日經新聞13日報導，因AI相關需求續旺，帶動供應大量產品、半導體給蘋果（Apple）、微軟（Microsoft）、輝達（Nvidia）等客戶的台灣...",
    "url": "https://finance.technews.tw/2024/08/14/taiwans-major-it-factories-revenue-increases-for-5-consecutive-months/",
    "urlToImage": "https://img.technews.tw/wp-content/uploads/2016/05/shutterstock_104531981.jpg",
    "publishedAt": "2024-08-14T01:13:25Z",
    "content": "AI IT 5 2 5 1 \r\n13AIAppleMicrosoftNvidia20247Asia30019IT14,06221.6%54210%22022623.0%5120231114,261\r\n4EMSAIEMS722%5,72343%1,242iPhone3%10%PC726%\r\nAI744.7%2,569743.6%6.7%\r\nMoneyDJ shutterstock"
    },
    {
    "source": {
    "id": null,
    "name": "Smzdm.com"
    },
    "author": null,
    "title": "百亿补贴：Apple 苹果 iPhone 15 Plus 5G手机 5128元",
    "description": "百亿补贴:Apple 苹果 iPhone 15 Plus 5G手机 5128元,什么值得买甄选出拼多多优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
    "url": "https://www.smzdm.com/p/122161850/",
    "urlToImage": "https://y.zdmimg.com/202408/14/66bc2444a8dda8190.jpg_d250.jpg",
    "publishedAt": "2024-08-14T04:40:07Z",
    "content": "iPhone 15 Plus IP68 201g7.8mm\r\niPhone 15 Plus 6.7 OLED XDR 2796×1290460ppi2000100%DCI-P360HziPhone 15Plus A16 6 CPU5GPU 16 iPhone 14 Plus 263550%LightningUSB-C\r\niPhone 15 Plus 4800f1.62400120021200f2… [+17 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CinemaBlend"
    },
    "author": "Riley Utley",
    "title": "‘I Can’t Believe The Stuff We Get To Do Nowadays:’ Bill Lawrence Explains Why Shows Like Ted Lasso And Shrinking Couldn’t Have Been Made Years Ago",
    "description": "Bill Lawrence opens up about why shows like Ted Lasso, Shrinking and Bad Monkey couldn't have been made earlier in his career.",
    "url": "https://www.cinemablend.com/interviews/bill-lawrence-explains-why-shows-ted-lasso-shrinking-couldnt-been-made-years-ago",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/GSpqjboqFhY69jA5oafcea-1200-80.jpg",
    "publishedAt": "2024-08-14T03:22:00Z",
    "content": "When you look at a list of Apple TV+’s best shows\r\n, two prominent entries come from super producer Bill Lawrence. I’m, of course, talking about Ted Lasso and Shrinking, and now, the showrunner is ad… [+4834 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CinemaBlend"
    },
    "author": "Riley Utley",
    "title": "Everyone Else Is Having A Brat Summer, But It’s Becoming Clear Emily Ratajkowski Is Having A Shaboozey Summer",
    "description": "While Charli XCX and Brat Summer are having a moment, Emily Ratajkowski is seemingly having a Shaboozey summer as dating rumors swirl.",
    "url": "https://www.cinemablend.com/television/everyone-else-having-brat-summer-but-becoming-clear-emily-ratajkowski-having-shaboozey-summer",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/dxQExWPxZar7xDcBNgyNYZ-1200-80.jpg",
    "publishedAt": "2024-08-14T00:22:26Z",
    "content": "While everyone’s been having a Brat summer and doing the “Apple” dance, Emily Ratajkowski is spending the season with a different singer. I write this because there have been reports that she’s been … [+2634 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Maketecheasier.com"
    },
    "author": "Laura Tucker",
    "title": "Google Announces Pixel 9 Series and More",
    "description": "Google introduced the Pixel 9 series and a new Pixel Watch and Pixel Buds Pro, as well as changes to Gemini at the Made by Google event.",
    "url": "https://www.maketecheasier.com/google-announces-pixel-9-series/",
    "urlToImage": "https://www.maketecheasier.com/assets/uploads/2024/08/google-pixel-9-series-featured.jpg",
    "publishedAt": "2024-08-14T02:13:36Z",
    "content": "Google beat Apple to the punch. While Apple is widely expected to release new iPhones and Apple Watches next month, Google jumped in ahead of them, introducing the Pixel 9 series of phones and a new … [+3491 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iMore"
    },
    "author": "heyimjoew@gmail.com (Joe Wituschek)",
    "title": "The Pixel 9 ripped off the iPhone's SOS via satellite feature and that's a good thing",
    "description": "Google may be ripping off Apple with the Pixel 9's new SOS via satellite feature, but these features should be on every phone.",
    "url": "https://www.imore.com/phones/the-pixel-9-ripped-off-the-iphones-sos-via-satellite-feature-and-thats-a-good-thing",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/kLqgH94v6TdzTCr8APUmLU-1200-80.png",
    "publishedAt": "2024-08-14T00:56:51Z",
    "content": "One of the main reasons I didn't keep my iPhone 13 mini and upgraded to the iPhone 14 Pro was because the iPhone 14 series was when Apple added Emergency SOS via satellite to its flagship smartphone.… [+3176 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ozbargain.com.au"
    },
    "author": "Soled Out",
    "title": "Open Box CTO Model with 16GB RAM Apple 13\" MacBook Pro with Touch Bar M1 256GB Space Grey $1099 (RRP $1999) + Delivery @ Bpctech",
    "description": "Credit to @Kenji777\nOpen box Macbook PRO Touch Bar M1 16GB 256GB for $1,099. I believe it is a 2020 model. \nYou can also add an iPad 9th Gen ipad Wi-Fi 64BG Silver for $299",
    "url": "https://www.ozbargain.com.au/node/861510",
    "urlToImage": "https://files.ozbargain.com.au/n/10/861510l.jpg?h=23b2a27a",
    "publishedAt": "2024-08-14T02:14:33Z",
    "content": "All trademarks are owned by their respective owners.OzBargain is an independent community website which has no association with nor endorsement by the respective trademark owners.\r\nCopyright © 2006-2… [+32 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "International Business Times"
    },
    "author": "AFP News",
    "title": "Google Launches New Pixel 9 Phones As AI Race Heats Up",
    "description": "Google on Tuesday unveiled new Pixel 9 smartphones, its latest salvo in the scramble by Big Tech to corner the market on nascent artificial intelligence. The Silicon Valley search giant has been racing against Microsoft, OpenAI and others to lead in AI since …",
    "url": "https://www.ibtimes.com/google-launches-new-pixel-9-phones-ai-race-heats-3739726",
    "urlToImage": "https://d.ibtimes.com/en/full/4541556/google-has-been-racing-against-microsoft-openai-others-lead-ai.jpg",
    "publishedAt": "2024-08-14T03:48:22Z",
    "content": "Google on Tuesday unveiled new Pixel 9 smartphones, its latest salvo in the scramble by Big Tech to corner the market on nascent artificial intelligence.\r\nThe Silicon Valley search giant has been rac… [+3256 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "International Business Times"
    },
    "author": "AFP News",
    "title": "Asian Markets Extend Gains As US Inflation Data Boost Rate Hopes",
    "description": "Equities marched higher Wednesday after hopes for a Federal Reserve interest rate cut next month were boosted by data showing US wholesale prices rose less than forecast last month.",
    "url": "https://www.ibtimes.com/asian-markets-extend-gains-us-inflation-data-boost-rate-hopes-3739723",
    "urlToImage": "https://d.ibtimes.com/en/full/4541674/oil-prices-are-being-supported-worries-about-middle-east-crisis-though-gains-have-been-tempered.jpg",
    "publishedAt": "2024-08-14T02:57:06Z",
    "content": "Equities marched higher Wednesday after hopes for a Federal Reserve interest rate cut next month were boosted by data showing US wholesale prices rose less than forecast last month.\r\nHowever, Tokyo w… [+4817 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Overclockers.ru"
    },
    "author": "ddr22",
    "title": "Для работы функций Apple Intelligence iPhone SE 4 возможно, будет поставляться с чипсетом A18",
    "description": "Ожидается, что Apple выпустит недорогой iPhone SE 4 в 2025 году, который будет оснащен интеллектом Apple, представляющим собой набор генеративных функций искусственного интеллекта",
    "url": "https://overclockers.ru/blog/ddr77/show/173990/Dlya-raboty-funkcij-Apple-Intelligence-iPhone-SE-4-budet-postavlyat-sya-s-A18",
    "urlToImage": "https://overclockers.ru/st/legacy/blog/145016/549709_O.jpeg",
    "publishedAt": "2024-08-14T02:22:04Z",
    "content": ", Apple iPhone SE 4 , 2025 . , Apple Intelligence, , . , , iPhone SE 4 A18 8 . Apple OLED-, iPhone 16. , , , iPhone SE 4, 2025 , iPhone 14 Apple Intelligence. \r\n, iPhone SE 4 Face ID USB-C. , , 3- TS… [+5 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iphone-mania.jp"
    },
    "author": "FT729",
    "title": "Apple Watchアクティビティチャレンジ〜8月25日に「国立公園チャレンジ」",
    "description": "Appleが、例年8月下旬に開催しているApple Watchのアクティビティチャレンジ、「国立公園チャレンジ」を今年は8月25日に開催すると海外メディアが伝えています。 20分以上のワークアウトでチャレンジ達成 202 […]",
    "url": "https://iphone-mania.jp/iwatch-584612/",
    "urlToImage": "https://iphone-mania.jp/uploads/2024/08/14/national-parks-challenge-2024.jpg_1200.png",
    "publishedAt": "2024-08-14T02:46:15Z",
    "content": "©\r\nCopyright(c) 2013- 2024 iPhone Mania All Rights Reserved."
    },
    {
    "source": {
    "id": null,
    "name": "Iphone-mania.jp"
    },
    "author": "FT729",
    "title": "iPad mini 7がM1かM2を搭載して今秋発表か〜Mシリーズ移行予想が増加",
    "description": "9to5Macが、今秋に発表される可能性が高いApple製品という記事の中で、iPad mini 7はApple Intelligenceに対応させるため搭載チップがMシリーズに変更される可能性があると記しています。 i […]",
    "url": "https://iphone-mania.jp/ipadmini-584609/",
    "urlToImage": "https://iphone-mania.jp/uploads/2024/06/16/143871a54e03d06e97ab88053cb4c462.jpg",
    "publishedAt": "2024-08-14T00:12:01Z",
    "content": "9to5MacAppleiPad mini 7Apple IntelligenceM\r\niPad mini 7iPad mini 6\r\niPad mini 7A9to5MacM\r\nA17 ProApple IntelligenceA18M1M2\r\niPad mini 7MM1iPad AirM2M1\r\nM1iPad AiriPad mini 7M1\r\nM2Apple Intelligence\r\n… [+139 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Kocpc.com.tw"
    },
    "author": "Rocky",
    "title": "尷尬，Google 直播使用 Galaxy S24 Ultra 展示 Gemini AI 功能時發生 2 次失敗",
    "description": "各大品牌發表會都會希望把錯誤率降到最低，但偶爾還是會發生。在稍早的 Google 發表會中，除了發表 Pixel 9 系列、Pixel 9 Pro Fold、Pixel Watch 3、Pixel Buds Pro 2，中間還出現一個小插曲，Google 在展示最新 Gemini AI 功能時，其使用的 Galaxy S24 Ultra 突然無法正常運作，還發生二次，還好最後有準備備用機，才快速化解這個尷尬。\nThe post 尷尬，Google 直播使用 Galaxy S24 Ultra 展示 Gemini A…",
    "url": "https://www.kocpc.com.tw/archives/560321",
    "urlToImage": "https://www.kocpc.com.tw/wp-content/uploads/2024/08/20240814110151_0_2cb774.png",
    "publishedAt": "2024-08-14T03:11:44Z",
    "content": "Google Pixel 9 Pixel 9 Pro FoldPixel Watch 3Pixel Buds Pro 2Google Gemini AI  Galaxy S24 Ultra \r\nPixel 9  Jess CarpenterDave Citron Galaxy S24 Ultra Gemini Advanced Sabrina Carpenter San Francisco \r\n… [+491 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Xataka.com.mx"
    },
    "author": "Klau Tenorio",
    "title": "Muchos creyeron que por ser gratis era una estafa: ahora este servicio de streaming es más visto que Max, Paramount y Apple TV",
    "description": "Dicen que cuando algo es gratis, es mejor desconfiar. Pero Tubi se convirtió en la excepción que confirma la regla.\n\nLuego de una etapa de desconfianza del público estadounidense, la plataforma de streaming, propiedad de Fox, ya superó a la mayoría de sus com…",
    "url": "https://www.xataka.com.mx/streaming/muchos-creyeron-que-ser-gratis-era-estafa-ahora-este-servicio-streaming-visto-que-max-paramount-apple-tv",
    "urlToImage": "https://i.blogs.es/aaa376/tubi-programacion-2/840_560.png",
    "publishedAt": "2024-08-14T00:01:52Z",
    "content": "Dicen que cuando algo es gratis, es mejor desconfiar. Pero Tubi se convirtió en la excepción que confirma la regla.\r\nLuego de una etapa de desconfianza del público estadounidense, la plataforma de st… [+3741 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNA"
    },
    "author": null,
    "title": "Shunning home markets, South Korean retailers pile-up on US stocks",
    "description": "SEOUL: South Korea's mom-and-pop investors are defying last week's global financial markets rout by pouring even more funds into US stocks, a years-long trend that analysts and investors bet will continue due to the depressed value proposition at home. South …",
    "url": "https://www.channelnewsasia.com/business/shunning-home-markets-south-korean-retailers-pile-us-stocks-4545041",
    "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--LX_AYLry--/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2024-08-14t001336z_2_lynxmpek7d001_rtroptp_3_southkorea-dailylife.jpg?itok=wexWiaeZ",
    "publishedAt": "2024-08-14T00:04:24Z",
    "content": "SEOUL: South Korea's mom-and-pop investors are defying last week's global financial markets rout by pouring even more funds into US stocks, a years-long trend that analysts and investors bet will con… [+4824 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Cnbeta.com.tw"
    },
    "author": null,
    "title": "Google称Pixel 9的Gemini AI可帮助用户避免不了解或不信任的供应商",
    "description": "在今天介绍新款 Pixel 9 机型时，Google不失时机地嘲讽了一把Apple Intelligence。所有新款 Pixel 9 设备都集成了Google的人工智能技术 Gemini，Google还推出了一系列新的人工智能功能。\r\n\n与Apple Intelligence一样，Gemini 也是通过设备上的处理能力工作的，但Google明确指出，Gemini 有足够的能力回答复杂的询问，而无需将任务交给其他人工智能服务。这一评论是对苹果计划在Siri中添加 ChatGPT 集成的嘲讽，因为 ChatGPT …",
    "url": "https://www.cnbeta.com.tw/articles/tech/1442128.htm",
    "urlToImage": "https://www.cnbeta.com.tw//www.youtube.com/embed/ixZAvDCysNw\" frameborder=\"0\"></iframe></p><p>与Apple Intelligence一样，Gemini 也是通过设备上的处理能力工作的，但Google<a href=\"https://blog.google/products/pixel/google-pixel-9-new-ai-features/#pixel9phones\" uid=\"88\" original=\"true\" translated=\"true\">明确指出</a>，Gemini 有足够的能力回答复杂的询问，而无需将任务交给其他人工智能服务。这一评论是对苹果计划在Siri中添加 ChatGPT 集成的嘲讽，因为 ChatGPT 将能做 Siri 做不到的事情。</p><blockquote uid=\"92\" original=\"true\" translated=\"true\"><p>Gemini 与Google应用程序和Android系统深度集成，可以处理复杂的查询，而无需将任务交给你可能不了解或不信任的第三方人工智能提供商。</p></blockquote><p>苹果将使用 ChatGPT 来从头开始生成文本，而这正是Apple Intelligence无法做到的。苹果确实添加了写作工具，但它仅限于改写已经写好的内容，以改变语气或风格。ChatGPT 还能生成 Image Playground 无法生成的图片，例如逼真的内容，还能处理生成菜谱等请求。</p><p>当用户向 Siri 提出 Siri 无法处理的问题时，个人助理会请求允许将其交给 ChatGPT 处理。ChatGPT 的集成完全是可选的，OpenAI 将与苹果公司合作，免费提供给iPhone用户。</p><p>有传言称，苹果还计划在 iPhone 上添加 Gemini 集成，允许 iPhone 用户选择自己喜欢的人工智能服务。目前还不太清楚 Apple Intelligence 是否没有能力处理全文生成和逼真图像创建，或者说，考虑到人们对人工智能创建内容的看法，苹果是否认为这些功能并不完善，不应该触碰。</p><p style=\"text-align: center;\"><img src=\"https://static.cnbetacdn.com/article/2024/0814/8f4719b01f21627.webp",
    "publishedAt": "2024-08-14T01:35:29Z",
    "content": "Apple IntelligenceGemini GoogleGemini Siri ChatGPT ChatGPT Siri \r\nGemini GoogleAndroid\r\nChatGPT Apple IntelligenceChatGPT Image Playground \r\n Siri Siri ChatGPT ChatGPT OpenAI iPhone\r\n iPhone Gemini i… [+125 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Cnbeta.com.tw"
    },
    "author": null,
    "title": "iPhone 16 将加入的“捕捉”按键能做什么？",
    "description": "此前多个传言称，iPhone 16机型将配备一个全新的按键，该按键的设计目的是为了在横向模式下更方便地拍摄照片。苹果公司内部称这个按钮为\"捕捉按钮\"，它将是迄今为止推出的最先进的按钮之一，支持多种手势并能对压力做出反应。以下是传言中该按钮的所有功能：\r\n\n<ul><li>拍摄图像或视频时，轻按按钮即可自动对焦。\r\n</li><li>用力按下按钮即可拍照。\r\n</li><li>左右滑动按钮可放大或缩小。\r\n</li><li>此外，还可能有一种手势用于在照片模式和视频模式之间切换，类似于在iPhone相机应用中通过按…",
    "url": "https://www.cnbeta.com.tw/articles/tech/1442130.htm",
    "urlToImage": "https://static.cnbetacdn.com/article/2024/0814/c20abf5e4dfdbbe.jpg",
    "publishedAt": "2024-08-14T01:35:53Z",
    "content": "iPhone iPhone \r\n iPhone CAD -Mark Gurman Pro \r\n\"\" Vision Pro \r\niPhone 16 Apple Intelligence A18 8GB"
    },
    {
    "source": {
    "id": null,
    "name": "Ithome.com"
    },
    "author": null,
    "title": "绿米 Aqara 风琴智能窗帘电机 C4 发布：双电机驱动 / 支持语音控制",
    "description": "IT之家 8 月 14 日消息，绿米今天推出了 Aqara 风琴智能窗帘电机 C4，其支持左右两边窗帘独立控制，采用双直流电机协同驱动，与苹果 Apple Home 兼容。目前，该产品已经在线下 Aqara Home 智能家居体验馆开启预订。IT之家汇总该产品主要信息如下：该窗帘电机采用双电机驱动，支持单边单控，可实现“无界妙控”，即左右两边窗帘自由独立控制。同时，用户可以自定义窗帘开合点，不规则窗台也能让帘布居中或在转角处开合，弯型轨道（L 型 / U 型轨）预计 10 月份支持。其采用四向双层轨道，材质为定制…",
    "url": "https://www.ithome.com/0/788/373.htm",
    "urlToImage": null,
    "publishedAt": "2024-08-14T03:34:51Z",
    "content": "IT 8 14 Aqara C4 Apple Home Aqara Home \r\nIT\r\nL / U 10 \r\n 8 27dB App\r\n / Siri / iPhoneApple Watch \r\nIT"
    },
    {
    "source": {
    "id": null,
    "name": "Ithome.com"
    },
    "author": null,
    "title": "谷歌火力全开：Pixel 9 系列新品发布会上频频暗讽苹果",
    "description": "IT之家 8 月 14 日消息，谷歌在今天凌晨的 Pixel 9 发布会上不仅展示了新一代 Pixel 手机和先进的 AI 功能，还频频暗讽竞争对手苹果。尽管科技公司在发布会中对比竞争对手并不罕见，但谷歌此次的“隔空喊话”似乎格外频繁。这或许是因为谷歌在 AI 领域取得了显著优势，而苹果在这方面才刚刚起步。谷歌 Gemini AI 是此次发布会的重头戏。谷歌高管萨米尔・萨马特（Sameer Samat）宣称，Gemini 支持 45 种语言和 200 多个国家和地区，并强调其将支持更多旧款和非旗舰安卓设备。萨马特…",
    "url": "https://www.ithome.com/0/788/308.htm",
    "urlToImage": null,
    "publishedAt": "2024-08-14T00:00:50Z",
    "content": "IT 8 14 Pixel 9 Pixel AI AI \r\nGemini AI Sameer SamatGemini 45 200 Gemini Apple Intelligence\r\nGemini Gemini AI OpenAI ChatGPT Siri Siri ChatGPT \r\nIT Gemini AI Dave Citron\r\nPixel 9 Pro Pixel 9 Pro XL i… [+120 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ithome.com"
    },
    "author": null,
    "title": "科技昨夜今晨 0814：谷歌年度机皇 Pixel 9 系列手机发布；警方通报“外卖小哥下跪”事件；《黑神话：悟空》性能测试工具上架",
    "description": "“科技昨夜今晨”时间，大家好，现在是 2024 年 8 月 14 日星期三，今天的重要科技资讯有：1、《黑神话：悟空》官方性能测试工具免费上架 Steam，你的电脑能不能玩一测便知游戏科学官方 8 月 13 日在 Steam 上架了一款《黑神话：悟空性能测试工具》。这是专为《黑神话：悟空》开发的一款 PC 基准测试软件，通过一段实时渲染的游戏内场景，初步检测玩家在体验游戏时的硬件性能和系统兼容性。>> 查看详情2、苹果 iPhone 等原型机流入二手市场，被曝存在大量内部重要数据Wired 于 8 月 10 日发…",
    "url": "https://www.ithome.com/0/788/312.htm",
    "urlToImage": null,
    "publishedAt": "2024-08-14T00:21:05Z",
    "content": "2024 8 14 \r\n1 Steam\r\n 8 13 Steam PC &gt;&gt; \r\n2 iPhone \r\nWired 8 10 Matthew Bryant eBay Time Capsule&gt;&gt; \r\n3 iPhone SE 4 8GB RAM Apple Intelligence \r\n MacRumors AI Apple Intelligence iPhone SE 4… [+799 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ithome.com"
    },
    "author": null,
    "title": "UFCS 融合快充：QCY 45W 迷你氮化镓充电器 45.9 元（京东 54.9 元）",
    "description": "QCY 于 6 月 18 日推出了一款 45W 氮化镓闪充充电器，可选多彩配色，首发价 54.9 元。今日天猫旗舰店活动价仅需 45.9 元。天猫 UFCS 融合快充认证，QCY 45W 迷你氮化镓充电器券后 45.9 元领 24 元券京东旗舰店同款京报价 54.9 元。该充电器支持手机、笔记本充电，拥有 UFCS 融合快充认证，还支持 BC 1.2、APPLE 2.4、AFC 、SCP、FCP、PE+2.0、PPS、PD 2.0、PD 3.0、QC 2.0、QC 3.0、QC4+、UFCS、DCP 1.5 协议…",
    "url": "https://www.ithome.com/0/788/358.htm",
    "urlToImage": null,
    "publishedAt": "2024-08-14T02:50:03Z",
    "content": "QCY 6 18  45W 54.9 45.9 \r\n UFCS QCY 45W 45.9 24 \r\n 54.9 \r\nUFCS  BC 1.2APPLE 2.4AFC SCPFCPPE+2.0PPSPD 2.0PD 3.0QC 2.0QC 3.0QC4+UFCSDCP 1.5 \r\n90 100V-240V \r\nQCY 45W  43*34.8*35.8mm USB-C 54.9 IT\r\nUFCS … [+19 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Arigato-ipod.com"
    },
    "author": "アイアリ",
    "title": "Apple TV+でドラマ「サニー」第7話と、「ウーマン・イン・ブルー」「タイム・バンディット」最新エピソードの配信開始",
    "description": "Apple TV+で、Apple Originals 3作品の最新エピソードが配信開始されています。 サニー エピソード7『豹変したアイツ』35分 次回（8月21日配信）：エピソード8『ゴミかゴミじゃないか』36分 ウー […]\nThe post Apple TV+でドラマ「サニー」第7話と、「ウーマン・イン・ブルー」「タイム・バンディット」最新エピソードの配信開始 first appeared on アイアリ.",
    "url": "https://arigato-ipod.com/2024/08/apple-tv-plus-new-episode-240814.html",
    "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2024/08/240814appletvplusnewep.webp",
    "publishedAt": "2024-08-14T01:17:47Z",
    "content": "Apple TV+で、Apple Originals 3作品の最新エピソードが配信開始されています。\nサニー\n\nエピソード7『豹変したアイツ』35分\n次回（8月21日配信）：エピソード8『ゴミかゴミじゃないか』36分\nウーマン・イン・ブルー\n\nエピソード4『アルマ』55分\n次回（8月21日配信）：エピソード5『アンヘレス』56分\nタイム・バンディット\n\n<ul>\n<li>エピソード7『氷河時代』… [+299 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Arigato-ipod.com"
    },
    "author": "アイアリ",
    "title": "Apple TV+で新作ドラマシリーズ「バッド・モンキー」の配信開始。第1話無料",
    "description": "Apple TV+で新作ドラマシリーズ「バッド・モンキー」が配信開始されています。 カール・ハイアセンのベストセラー小説を原作としたコメディです。 南フロリダで刑事から転身したレストランの衛生調査官が、欲と腐敗の世界に引 […]\nThe post Apple TV+で新作ドラマシリーズ「バッド・モンキー」の配信開始。第1話無料 first appeared on アイアリ.",
    "url": "https://arigato-ipod.com/2024/08/apple-tv-plus-bad-monkey-release.html",
    "urlToImage": "https://arigato-ipod.com/wp/wp-content/uploads/2024/08/240814badmonkey.webp",
    "publishedAt": "2024-08-14T01:10:16Z",
    "content": "Apple TV+で新作ドラマシリーズ「バッド・モンキー」が配信開始されています。\n\nカール・ハイアセンのベストセラー小説を原作としたコメディです。\n\n\n 南フロリダで刑事から転身したレストランの衛生調査官が、欲と腐敗の世界に引き込まれる。そこでは、旅行客が釣りの最中に損傷した腕を発見していた。そう、そしてサルがいる。\r\n\n\n\n\n\n「テッド・ラッソ：破天荒コーチがゆく」「シュリンキング：悩めるセ… [+1264 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Prtimes.jp"
    },
    "author": null,
    "title": "豪州発レザーブランドMAISON de SABREから新トラベルコレクション「AIRPLANE MODE」が登場！",
    "description": "[メゾン・ド・サブレ株式会社]\n[画像1: https://prcdn.freetls.fastly.net/release_image/48866/61/48866-61-539e7c243f3e8a62d5c4480330d0cd9b-650x430.jpg?width=536&quality=85%2C75&format=jpeg&auto=webp&fit=bounds&...",
    "url": "https://prtimes.jp/main/html/rd/p/000000061.000048866.html",
    "urlToImage": "https://prcdn.freetls.fastly.net/release_image/48866/61/48866-61-a50303f49ad155ef95fd848ddba6ed25-300x300.jpg?format=jpeg&auto=webp&fit=bounds&width=2400&height=1260",
    "publishedAt": "2024-08-14T01:09:01Z",
    "content": "CEO\r\nAIRPLANE MODE8159\r\n63\r\nPacific Caviar\r\nCamel\r\nPecan Brown\r\nSABRÉMOJI \r\n8\r\nMAISON de SABRÉ\r\n2017Forbes Asia 30 Under 30Retail &amp; Ecommerce 20201312018Make Your Mark\r\n MAISON de SABRÉ\r\nDriTan\r\n… [+304 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Newmobilelife.com"
    },
    "author": "Andy",
    "title": "彭博 Mark Gurman：蘋果在 AI 比 Google 落後最少 2-3 年",
    "description": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1723596038732\"} -->\nGoogle 發佈最新 Pixel 9 系列手機，同時公佈 Pro 版的 AI 功能，當中引來很多的關注。彭博知名記者，經常準確爆出蘋果消息的 Mark Gurman 在 X 表示：「看完 Google 最新的 AI 發佈後，認為蘋果比 Google 在這領域落後最少 2-3 年」。\n<!-- /wp:paragraph -->\n\n<!-- wp:…",
    "url": "https://www.newmobilelife.com/2024/08/14/mark-gurman-apple-2-3-years-behind-google/",
    "urlToImage": "https://static.newmobilelife.com/wp-content/uploads/2024/07/appleIntelligence.webp",
    "publishedAt": "2024-08-14T00:48:00Z",
    "content": "<!-- wp:paragraph {\"canvasClassName\":\"cnvs-block-core-paragraph-1723596038732\"} -->\nGoogle 發佈最新 Pixel 9 系列手機，同時公佈 Pro 版的 AI 功能，當中引來很多的關注。彭博知名記者，經常準確爆出蘋果消息的 Mark Gurman 在 X 表示：「看完 Google 最新的 AI 發佈後，認為… [+648 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ferra.ru"
    },
    "author": "Булат Кармак",
    "title": "Инсайдер раскрыл отличия iPhone 16 от 16 Pro и назвал объем оперативки у iPhone SE 4",
    "description": "Инсайдер под ником Anthony поделился в X.com ключевыми отличиями между базовым iPhone 16 и премиальным iPhone 16 Pro.",
    "url": "https://www.ferra.ru/news/mobile/insaider-raskryl-otlichiya-iphone-16-ot-16-pro-i-nazval-obem-operativki-u-iphone-se-4-13-08-2024.htm",
    "urlToImage": "https://www.ferra.ru/imgs/2024/08/13/13/6560816/be37d36bce1e44910e35f93e753601651450d957.jpg",
    "publishedAt": "2024-08-14T04:01:56Z",
    "content": ", iPhone 16 6.1- , iPhone 16 Pro 6.3- .\r\n Pro- 48 , iPhone 16 12 .\r\n 27- , Pro- 40-. , iPhone 16 , iPhone 16 Pro .\r\nAnthony iPhone SE 4. , 8 , Apple A18 Bionic ."
    },
    {
    "source": {
    "id": null,
    "name": "SiliconANGLE News"
    },
    "author": "Duncan Riley",
    "title": "FTC enters Google v. Epic Games case and hints that Google should be broken up",
    "description": "The U.S. Federal Trade Commission is reportedly considering breaking up Google LLC following its intervention via amicus brief into the Epic Games Inc. v. Google case regarding Google’s practices relating to competition and payments in its Play store. The cas…",
    "url": "https://siliconangle.com/2024/08/13/ftc-enters-google-v-epic-games-case-hints-google-broken/",
    "urlToImage": "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/03/ftc.jpg",
    "publishedAt": "2024-08-14T00:37:44Z",
    "content": "The U.S. Federal Trade Commission is reportedly considering breaking up Google LLC following its intervention via amicus brief into the Epic Games Inc. v. Google case regarding Google’s practices rel… [+3149 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SiliconANGLE News"
    },
    "author": "Duncan Riley",
    "title": "FTC enters Google vs Epic Games case and hints that Google should be broken up",
    "description": "The U.S. Federal Trade Commission is allegedly considering breaking up Google LLC following its intervention via amicus brief into the Epic Games Inc. vs. Google case regarding Google’s practices relating to competition and payments in its Play store. The cas…",
    "url": "https://siliconangle.com/2024/08/13/ftc-enters-google-vs-epic-games-case-hints-google-broken/",
    "urlToImage": "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/03/ftc.jpg",
    "publishedAt": "2024-08-14T00:37:44Z",
    "content": "The U.S. Federal Trade Commission is allegedly considering breaking up Google LLC following its intervention via amicus brief into the Epic Games Inc. vs. Google case regarding Google’s practices rel… [+3170 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iz.ru"
    },
    "author": "Валерий Кодачигов",
    "title": "Apple утратила лидерство на российском рынке планшетов",
    "description": "Компания Apple потеряла первое место на российском рынке планшетов. Об этом свидетельствуют данные компании-партнера нескольких производителей электроники, с которыми ознакомились «Известия».",
    "url": "https://iz.ru/1742445/2024-08-14/apple-utratila-liderstvo-na-rossiiskom-rynke-planshetov",
    "urlToImage": "http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2024-08/KE205253%20copy.jpg?itok=0ddO1jGH",
    "publishedAt": "2024-08-14T00:45:00Z",
    "content": "Apple . - , «».\r\n 2024- 2023- «» 8% iPad 2- Readme. (10%) Honor. Apple 13% .\r\n Apple , Apple diHouse .\r\n«Apple , . , Apple , », .\r\n Apple , - , Mobile Research Group . App Store Apple Pay, . , , «» .… [+49 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Minatokobe.com"
    },
    "author": "酔いどれ",
    "title": "iOS 18とmacOS Sequoiaで登場！iPhone Mirroringの新機能「ジグルモード」でホーム画面を自由自在に編集",
    "description": "Appleは毎年、新しいソフトウェアアップデートを発表し、その中でユーザー体験をさらに向上させる新機能を導入しています。2024年の秋に一般公開される予定のiOS 18とmacOS Sequoiaも例外ではありません。 これらのアップデートの中でも注目すべき機能の一つが、「iPhoneミラーリング」と呼ばれる機能です。この機能を使うことで、MacからiPhoneをリモート操作できるだけでなく、iPhoneのホーム画面をカスタマイズすることが可能になりました。 特に、新たに追加された「ジグルモード」は、ホーム画面の…",
    "url": "https://minatokobe.com/wp/ios/ios-18/post-98848.html",
    "urlToImage": "https://minatokobe.com/wp/wp-content/uploads/2024/08/jiggle-mode.jpg",
    "publishedAt": "2024-08-14T00:04:11Z",
    "content": "1990Mac IIci MacMac Studio M1 MAX + Studio Display,16inch MacBook Pro M1 Pro 2021, iPhone 15 Pro Max, iPhone 13 Pro Max, 12.9inch iPad Pro 2021, iPad Air,  Apple Watch Ultra, 1HomePodApple TV 4KApple… [+43 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TechNode"
    },
    "author": "Steven Lee",
    "title": "Google 发布 Pixel Studio 本地 AI 文生图应用",
    "description": "Google 在 Pixel 9 系列手机发布会上推出名为 Pixel Studio 的全新图像生成应用，并表示将预装在每台 Pixel 9 系列手机上。 用户可以在 Pixel Studio 应用中输入提示词，要求其生成图片。Pixel Studio 应用采用本地运行生成，基于 Google 自己的",
    "url": "https://cn.technode.com/post/2024-08-14/google-pixel-studio-ai/",
    "urlToImage": "https://cn.technode.com/wp-content/blogs.dir/18/files/2024/08/google-pixel-studio-ai-1.webp",
    "publishedAt": "2024-08-14T01:36:35Z",
    "content": "Google Pixel 9 Pixel Studio Pixel 9 \r\nPixel Studio Pixel Studio Google Imagen 3 2 \r\nPixel Studio Google Tensor G4 SoC Gemini \r\nGoogle Gemini overlay \r\nPixel Studio iPhone Image Playground Apple Intel… [+20 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ithome.com.tw"
    },
    "author": "陳曉莉",
    "title": "Pixel 9系列亮相，深度整合Google Gemini",
    "description": "新聞\r\nGoogle周二（8/13）發布了新一代的Android手機Pixel 9，包括Google Pixel 9、Google Pixel 9 Pro、Google  Pixel 9 Pro XL，以及Google Pixel 9 Pro Fold，它們全都搭載Android 14作業系統，並深度整合Google Gemini人工智慧技術，而且擁有長達7年的Android更新服務，售價自799美元到1,700美元不等。Pixel 9系列即日起開放預購，並計畫於8月22日或9月4日出貨。\r\n\nPixel 9系列…",
    "url": "https://www.ithome.com.tw/news/164459",
    "urlToImage": "https://s4.itho.me/sites/default/files/field/image/0814-pixel_9-960-2.jpg",
    "publishedAt": "2024-08-14T04:08:54Z",
    "content": "Google8/13AndroidPixel 9Google Pixel 9Google Pixel 9 ProGoogle  Pixel 9 Pro XLGoogle Pixel 9 Pro FoldAndroid 14Google Gemini7Android7991,700Pixel 982294\r\nPixel 91,099Google Pixel 9 Pro XL6.86.3799Goo… [+340 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Isuta.jp"
    },
    "author": "manami",
    "title": "【淡路島】かわいいキティちゃんの“絵付け体験”ができる施設って知ってる？当日持ち帰りOKだからお土産にも",
    "description": "最近は、オリジナルTシャツやキーホルダーのカスタムなど、手軽にトライできるDIYが流行中。\n\n世界にひとつしかない個性的なグッズは、作っている時間までも素敵な思い出になりますよね。\n\n兵庫・淡路島にある屋内複合施設「HELLO KITTY SMILE（ハローキティスマイル）」では、プロジェクションマッピングや謎解き、レストランでの食事を楽しめるほか、素焼き絵付けが体験できるんです！\n\n思い思いのままに絵付けしたキャラクターは当日持ち帰れるから、お土産にもぴったりですよ。\n\n乙姫のハローキティに会える淡路島の「HE…",
    "url": "https://isuta.jp/623060",
    "urlToImage": "https://isuta.jp/wp-content/uploads/2024/08/media_33672cd021d906c4dca3285fffed84daf6ae639a.webp",
    "publishedAt": "2024-08-14T03:00:00Z",
    "content": "@_coromomo_ / Instagram\r\nTDIY\r\nHELLO KITTY SMILE\r\nHELLO KITTY SMILE\r\n@nami_v / Instagram\r\nAWAJI HELLO KITTY APPLE LAND\r\nHELLO KITTY SMILEHELLO KITTY SHOW BOXHELLO KITTY APPLE HOUSE3\r\n11 \r\n@nami_v / I… [+313 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Investing.com"
    },
    "author": "Reuters",
    "title": "Shunning home markets, South Korean retailers pile-up on US stocks",
    "description": "Shunning home markets, South Korean retailers pile-up on US stocks",
    "url": "https://www.investing.com/news/economy-news/shunning-home-markets-south-korean-retailers-pileup-on-us-stocks-3570432",
    "urlToImage": "https://i-invdn-com.investing.com/news/indicatornews_1_800x533_L_1413124982.jpg",
    "publishedAt": "2024-08-14T00:16:36Z",
    "content": "By Jihoon Lee and Cynthia Kim\r\nSEOUL (Reuters) - South Korea's mom-and-pop investors are defying last week's global financial markets rout by pouring even more funds into U.S. stocks, a years-long tr… [+4903 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "El Financiero"
    },
    "author": "Bloomberg / Leah Nylen y Anna Edgerton",
    "title": "EU estudia darle ‘crank’ a Google por violar leyes antimonopolio: Estas son las opciones para desmantelarla",
    "description": "Los abogados del Departamento de Justicia han tenido consultas con empresas afectadas por las prácticas de Google para determinar los pasos a seguir.",
    "url": "https://www.elfinanciero.com.mx/tech/2024/08/13/departamento-de-justicia-de-eu-estudia-desmantelar-google-por-violar-leyes-antimonopolio/",
    "urlToImage": "https://www.elfinanciero.com.mx/resizer/kArnyzk_SC2Vp79xm-zVxdb8J9A=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/PDBK5QIWS5ETNPQQTOXAXWKAQA.jpeg",
    "publishedAt": "2024-08-14T01:06:24Z",
    "content": "Tras un fallo judicial que determinó que Googlemonopoliza el mercado de búsquedas en Internet, el Departamento de Justicia de Estados Unidos estaría considerando distintas opciones, y entre ellas est… [+3684 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digital Journal"
    },
    "author": "AFP",
    "title": "Asian markets extend gains as US inflation data boost rate hopes",
    "description": "Equities marched higher Wednesday after hopes for a Federal Reserve interest rate cut next month were boosted by data showing US wholesale prices rose less than forecast last month. However, Tokyo went into retreat after news that the Japanese prime minister …",
    "url": "https://www.digitaljournal.com/world/asian-markets-extend-gains-as-us-inflation-data-boost-rate-hopes/article",
    "urlToImage": "https://www.digitaljournal.com/wp-content/uploads/2024/08/f980dda70de7d49f1ba2be07bef5e1aa0ba4976f.jpg",
    "publishedAt": "2024-08-14T02:54:58Z",
    "content": "Oil prices are being supported by worries about the Middle East crisis, though the gains have been tempered by healthy output from key producers - Copyright Getty Images North America/AFP DAVID MCNEW… [+5046 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Viola Koegst",
    "title": "Frieden durch Vertrag? Kann man mit Putin verhandeln?",
    "description": "Auch in der Ukraine sind immer mehr Menschen der Meinung, der Krieg sollte durch Verhandlungen beendet werden. Aber wie sinnvoll ist das? Und könnte es einen „eingefrorenen Konflikt“ herbeiführen? WELT-Korrespondent Pavel Lokshin ordnet die Lage im historisch…",
    "url": "https://www.welt.de/podcasts/article252985516/Podcast-Frieden-durch-Vertrag-Kann-man-mit-Putin-verhandeln.html",
    "urlToImage": "https://img.welt.de/img/podcasts/mobile252986802/6657937717-ci16x9-w1200/Vladimir-Putin.jpg",
    "publishedAt": "2024-08-14T02:55:31Z",
    "content": "Abonnieren Sie den Podcast unter anderem bei SpotifyLink wird in einem neuen Tab geöffnet\r\n, Apple PodcastsLink wird in einem neuen Tab geöffnet\r\noder Amazon MusicLink wird in einem neuen Tab geöffne… [+848 chars]"
    },
    {
    "source": {
    "id": "la-nacion",
    "name": "La Nacion"
    },
    "author": null,
    "title": "George Clooney fue lapidario cuando le preguntaron por Quentin Tarantino: “Estuvo hablando basura sobre mí”",
    "description": "El actor de La gran estafa apuntó sus cañones contra el popular director de Tiempos violentos",
    "url": "https://www.lanacion.com.ar/espectaculos/personajes/george-clooney-fue-lapidario-cuando-le-preguntaron-por-quentin-tarantino-estuvo-hablando-basura-nid13082024/",
    "urlToImage": "https://resizer.glanacion.com/resizer/v2/george-L55I5FC73ZGETO5FA23SIDAYGU.jpg?auth=f7ddd43167817a8ea471b504df456b5046f044811959f5465ad841fa9fe5e55e&width=768&quality=70&smart=false",
    "publishedAt": "2024-08-14T02:34:02Z",
    "content": "George Clooney y Brad Pitt están a muy poco tiempo de distancia de estrenar Wolfs, el film que los reúne una vez más en pantalla. Por ese motivo, ambos se encuentran sumergidos en la entrevistas de r… [+3684 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Olhardigital.com.br"
    },
    "author": "Rodrigo Mozelli",
    "title": "Pixel Buds Pro 2: conheça o novo fone do Google",
    "description": "Novo modelo tem design similar ao seu antecessor, porém, são mais leves e 27% menores\nO post Pixel Buds Pro 2: conheça o novo fone do Google apareceu primeiro em Olhar Digital.",
    "url": "https://olhardigital.com.br/2024/08/13/reviews/pixel-buds-pro-2-conheca-o-novo-fone-do-google/",
    "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2024/08/Buds-Lifestyle_2_cropped-for-KW.width-1000.format-webp.png",
    "publishedAt": "2024-08-14T00:26:33Z",
    "content": "O Google anunciou, nesta terça-feira (13), além de seus novos smartphones e do Pixel Watch 3, os Pixel Buds Pro 2, novos fones de ouvido intra-auriculares da big tech. E eles têm uma grande novidade:… [+2856 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Reuters",
    "title": "AI PCs made up 14% of quarterly personal computer shipments, Canalys says",
    "description": "PC providers and chipmakers have pinned high hopes on devices that can perform AI tasks directly on the system, bypassing the cloud, as the industry slowly emerges from its worst slump in years. Apple commands about 60% of the AI PC market, the research firm …",
    "url": "https://economictimes.indiatimes.com/tech/artificial-intelligence/ai-pcs-made-up-14-of-quarterly-personal-computer-shipments-canalys-says/articleshow/112510830.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-112510977,width-1200,height-630,imgsize-34798,overlay-ettech/photo.jpg",
    "publishedAt": "2024-08-14T03:31:54Z",
    "content": "AI PCs accounted for 14% of all personal computers shipped in the second quarter with Apple leading the way, research firm Canalys said on Tuesday, as added artificial intelligence capabilities help … [+1471 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Business Standard"
    },
    "author": "Bloomberg",
    "title": "US Justice Dept considers rare antitrust move: Breaking up Google",
    "description": "The move would be Washington's first push to dismantle a company for illegal monopolisation since unsuccessful efforts to break up Microsoft Corp. two decades ago",
    "url": "https://www.business-standard.com/world-news/us-justice-dept-considers-a-rare-antitrust-move-breaking-up-google-124081400070_1.html",
    "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-08/14/thumb/fitandfill/400X400/1723599862-9133.jpg",
    "publishedAt": "2024-08-14T01:48:17Z",
    "content": "The move would be Washington's first push to dismantle a company for illegal monopolisation since unsuccessful efforts to break up Microsoft Corp. two decades ago\r\nA forced breakup of Google would be… [+6868 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Www.nzz.ch"
    },
    "author": "Marlen Oehler (oeh), Simon Schaffer (ssi)",
    "title": "NZZ AKZENT - Der Skrupellose aus dem Bunker: Mit Yahya Sinwar als neuem Chef radikalisiert sich die Hamas weiter – und pflegt engen Kontakt zu Iran",
    "description": "Nach dem Attentat auf den vorherigen Politbüro-Chef übernimmt nun der Hamas-Chef des Gazastreifens die politischen Geschäfte der gesamten Hamas. Dabei ist Yahya Sinwar der Hauptverantwortliche des Terrorangriffs vom 7. Oktober.",
    "url": "https://www.nzz.ch/podcast/neuer-chef-der-hamas-yahya-sinwar-podcast-nzz-akzent-ld.1843353",
    "urlToImage": "https://img.nzz.ch/2024/06/12/2b6b5907-ad48-48e1-9605-b28fac143b50.jpeg?width=1200&height=674&fit=bounds&quality=75&auto=webp&crop=5000,2812,x0,y162&wmark=nzz",
    "publishedAt": "2024-08-14T03:30:00Z",
    "content": "Hören und abonnieren Sie den Podcast «NZZ Akzent» auch auf Spotify,Apple Podcasts oder Castbox.\r\nHaben Sie ein Feedback zum Podcast? Sagen Sie uns Ihre Meinung.\r\nIn dieser Podcast-Episode:\r\nMan werde… [+1638 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Anja Ettel, Philipp Vetter",
    "title": "Kurssprung bei Starbucks und Geld verdienen mit gesundem Schlaf",
    "description": "In der heutigen Folge von „Alles auf Aktien“ sprechen die Finanzjournalisten Anja Ettel und Philipp Vetter über zwei Nachrichten aus der Rüstungs-Branche, den Chipotle-Boom bei Starbucks und den neuen Mut der Regulatoren im Umgang mit den Tech-Giganten.",
    "url": "https://www.welt.de/podcasts/alles-auf-aktien/article252991580/Boersen-Podcast-Pixel-9-Das-kann-das-neue-KI-Telefon-von-Google.html",
    "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile252977234/5627938037-ci16x9-w1200/Philipp-Vetter-und-Anja-Ettel.jpg",
    "publishedAt": "2024-08-14T02:52:58Z",
    "content": "Außerdem geht es um ResMed, Eli Lilly, Novo Nordisk, Burger King, Coca Cola, Starbucks, Chipotle Mexican Grill, Rheinmetall, Renk, Volkswagen, Google, Meta, Bytedance, Alphabet, Amazon und Apple.\r\nHi… [+27 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Businessinsider.com.pl"
    },
    "author": null,
    "title": "Strateg wieszczy załamanie rynków. \"Współczuję wielu inwestorom\"",
    "description": "Według Paula Dietricha bańka technologiczna stymulowana przez sztuczną inteligencję może wkrótce pęknąć. \"Współczuję wielu szeregowym inwestorom\" — mówi strateg inwestycyjny.",
    "url": "https://businessinsider.com.pl/gielda/wiadomosci/strateg-wieszczy-zalamanie-rynkow-wspolczuje-wielu-inwestorom/7031e6b",
    "urlToImage": "https://ocdn.eu/pulscms-transforms/1/qWSk9kpTURBXy9hYTNiYTUwYjUzYTE3ODEzNGNmNTVjZmMwNzgzMWQ5Mi5qcGeSlQPM8gDNHBzND9KTBc0EsM0Cdt4AAaEwAQ",
    "publishedAt": "2024-08-14T04:22:38Z",
    "content": "Ostatnia katastrofa na giedzie moe oznacza pocztek koca szau wywoanego wród inwestorów przez sztuczn inteligencj. Paul Dietrich, gówny strateg inwestycyjny doradców B. Riley Wealth Portfolio, od mies… [+3136 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "New York times",
    "title": "U.S. Said to Consider a Breakup of Google to Address Search Monopoly\nThe Justice Department and state attorneys general are discussing various scenarios to remedy Google’s dominance in online search, including a breakup of the company",
    "description": "Google was found last week to have violated antitrust law by illegally maintaining a monopoly in internet search. Now discussions over how to fix those violations have begun. Justice Department officials are considering what remedies to ask a federal judge to…",
    "url": "https://freerepublic.com/focus/f-news/4258320/posts",
    "urlToImage": null,
    "publishedAt": "2024-08-14T04:26:09Z",
    "content": "Skip to comments.\r\nU.S. Said to Consider a Breakup of Google to Address Search Monopoly\r\nThe Justice Department and state attorneys general are discussing various scenarios to remedy Googles dominanc… [+2273 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "Fox News",
    "title": "These Caffeinated Ramen Noodles Are Specifically Made for Gamers",
    "description": "First, there was 5-Hour Energy BBQ sauce. Now, there's another caffeinated meal on the block: Caffeinated Noodles. In late July, Nippon launched Boost Noodles, a ramen created by a young developer who wanted to solve the age-old problem of how you can eat ram…",
    "url": "https://freerepublic.com/focus/f-chat/4258314/posts",
    "urlToImage": null,
    "publishedAt": "2024-08-14T04:01:54Z",
    "content": "Skip to comments.\r\nThese Caffeinated Ramen Noodles Are Specifically Made for GamersFox News ^\r\n | August 2, 2024\r\n | Emily Price\r\nPosted on 08/13/2024 9:01:54 PM PDT by nickcarraway\r\nFirst, there was… [+3191 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Star Online"
    },
    "author": "Nico Grant",
    "title": "Google debuts AI-powered phones in latest attempt to best the iPhone",
    "description": "Google is hoping the AI features will help the four new phones – including the Pixel 9, Pixel 9 Pro and the double-wide Pixel 9 Fold – finally overcome consumer apathy to its smartphone ambitions. Read full story",
    "url": "https://www.thestar.com.my/tech/tech-news/2024/08/14/google-debuts-ai-powered-phones-in-latest-attempt-to-best-the-iphone",
    "urlToImage": "https://apicms.thestar.com.my/uploads/images/2024/08/14/2857375.jpg",
    "publishedAt": "2024-08-14T04:00:00Z",
    "content": "MOUNTAIN VIEW, California: When Google released its first Android smartphone in 2008, the companys founders slid onstage in roller skates. One of them, Larry Page, said the device was as advanced as … [+4760 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Star Online"
    },
    "author": "Leah Nylen, Anna Edgerton",
    "title": "US considers a rare antitrust move: Breaking up Google",
    "description": "A rare bid to break up Alphabet Inc’s Google is one of the options being considered by the Justice Department after a landmark court ruling found that the company monopolised the online search market, according to people with knowledge of the deliberations. R…",
    "url": "https://www.thestar.com.my/tech/tech-news/2024/08/14/us-considers-a-rare-antitrust-move-breaking-up-google",
    "urlToImage": "https://apicms.thestar.com.my/uploads/images/2024/08/14/2857345.jpg",
    "publishedAt": "2024-08-14T03:30:00Z",
    "content": "A rare bid to break up Alphabet Incs Google is one of the options being considered by the Justice Department after a landmark court ruling found that the company monopolised the online search market,… [+6364 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hkej.com"
    },
    "author": "信報財經新聞",
    "title": "蘋果抽佣｜Patreon訂閱費蘋果抽佣三成 限作者保收入要加價45%",
    "description": "（Apple Inc.）近日要求Patreon必須切換到旗下計費系統，否則應用程式將面臨App Store下架風險。Patreon發文提醒所有創作者，平台11月4日起改變訂閱規則，須收取蘋果要求的三成佣金。",
    "url": "http://ejtech.hkej.com/%e7%a7%91%e6%8a%80%e5%8b%95%e6%85%8b/%e8%98%8b%e6%9e%9c%e6%8a%bd%e4%bd%a3%ef%bd%9cpatreon%e8%a8%82%e9%96%b1%e8%b2%bb%e8%98%8b%e6%9e%9c%e6%8a%bd%e4%bd%a3%e4%b8%89%e6%88%90-%e9%99%90%e4%bd%9c%e8%80%85%e4%bf%9d%e6%94%b6%e5%85%a5%e8%a6%81/",
    "urlToImage": "http://ejtech.hkej.com/wp-content/uploads/2024/08/0814_P02.jpg",
    "publishedAt": "2024-08-14T01:57:05Z",
    "content": "EJ Tech \r\nPatreonApple Inc.PatreonApp StorePatreon11416iOSIn-App Purchase\r\nPatreon11Patreon\r\n11 Android\r\nPatreon100.80.598.6111iOS10Patreon0.8App Store36.2iOS14.545%\r\nPatreon30%Epic GamesiOSApp Store… [+162 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Twit.tv"
    },
    "author": "TWiT",
    "title": "MacBreak Weekly 934: Screws, Not Glues",
    "description": "The upcoming M4 Mac Mini is rumored to sport a new slimmer design. Apple is facing scrutiny for its decision to charge a 30% commission on Patreon subscriptions. macOS Sequoia is adding permission prompts for screenshots and recording apps. And a cool Nintend…",
    "url": "https://twit.tv/shows/macbreak-weekly/episodes/934",
    "urlToImage": "https://elroy.twit.tv/sites/default/files/images/episodes/2024/08/852879/hero/MBW0934_thumbnail.jpg",
    "publishedAt": "2024-08-14T00:29:00Z",
    "content": "The upcoming M4 Mac Mini is rumored to sport a new slimmer design. Apple is facing scrutiny for its decision to charge a 30% commission on Patreon subscriptions. macOS Sequoia is adding permission pr… [+946 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": null,
    "title": "China's Huawei is reportedly set to release new AI chip to challenge Nvidia amid U.S. sanctions",
    "description": "Huawei is reportedly planning to introduce a new AI chip which it claimed is on par with Nvidia's H100.",
    "url": "https://www.cnbc.com/2024/08/14/chinas-huawei-set-to-release-ai-new-chip-to-challenge-nvidia-wsj-says.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107409217-1714614891293-gettyimages-1270415483-sg108778_2020090321633634.jpeg?v=1714614913&w=1920&h=1080",
    "publishedAt": "2024-08-14T03:42:30Z",
    "content": "Chinese technology giant Huawei is set to challenge Nvidia with a new artificial intelligence chip amid U.S. sanctions that had sought to curb the Chinese tech giant's technological progress, accordi… [+2531 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": null,
    "title": "CNBC Daily Open: Wall Street soars; Starbucks ousts CEO",
    "description": "Wall Street rose after producer prices came in softer than expected, raising hopes of a rate cut.",
    "url": "https://www.cnbc.com/2024/08/14/cnbc-daily-open-wall-street-soarsstarbucks-ousts-ceo.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107231400-1682520258941-gettyimages-1485421674-img_0274_bbavvkva.jpeg?v=1723596586&w=1920&h=1080",
    "publishedAt": "2024-08-14T01:15:37Z",
    "content": "This report is from today's CNBC Daily Open, our international markets newsletter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like what yo… [+5688 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Purepeople.com.br"
    },
    "author": "Purepeople BR",
    "title": "Em primeiro lugar em quase 100 países: o novo thriller de ação com Matt Damon conquista as paradas de streaming",
    "description": "Matt Damon e Doug Liman formaram uma dupla dos sonhos há mais de 20 anos com \" A Identidade ...",
    "url": " https://www.purepeople.com.br/noticia/em-primeiro-lugar-em-quase-100-paises-o-novo-thriller-de-acao-com-matt-damon-conquista-as-paradas-de-streaming_a395162/1 ",
    "urlToImage": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2024/08/14/1294480978-4512001-em-primeiro-lugar-em-quase-100-paises-o-1400x823-2.png",
    "publishedAt": "2024-08-14T04:52:19Z",
    "content": "Matt Damon e Doug Liman formaram uma dupla dos sonhos há mais de 20 anos com \"A Identidade Bourne\". Em 2002, o ator e diretor lançou este thriller de ação que revolucionou o gênero e foi o primeiro d… [+1936 chars]"
    },
    {
    "source": {
    "id": "the-irish-times",
    "name": "The Irish Times"
    },
    "author": "Ed Power",
    "title": "Bad Monkey review: Vince Vaughn atones for his atrocious True Detective with a freewheeling crime caper",
    "description": "Television: Carl Hiaasen’s sloppy sleuth almost always gets his man – and, even when he doesn’t, is too busy cracking wise for anyone to care",
    "url": "https://www.irishtimes.com/culture/tv-radio/2024/08/14/bad-monkey-review-vince-vaughn-atones-for-his-atrocious-true-detective-with-a-freewheeling-crime-caper/",
    "urlToImage": "https://www.irishtimes.com/resizer/v2/CX2YNWM3UUFMALRFSCWDRRERNE.jpg?smart=true&auth=fcc390cce3c2121c1a20b6080c8fea92fd2c705f35ed8334a4b3d6c28edc5f48&width=1200&height=630",
    "publishedAt": "2024-08-14T01:00:00Z",
    "content": "Vince Vaughns last foray into small-screen noir was the atrocious second season of True Detective, in 2015. Hes on steadier ground in Bill Lawrences enjoyably gonzo adaptation of Carl Hiaasens Florid… [+2869 chars]"
    },
    {
    "source": {
    "id": "marca",
    "name": "Marca"
    },
    "author": "marca.com",
    "title": "Without Leo Messi, Inter Miami loses a 0-2 lead to get kicked out of the Leagues Cup",
    "description": "The Copa America final injury was too harsh on Lionel Messi, his ankle was clearly swollen and everybody in Miami knew what was coming. As one of the best players in history, Messi",
    "url": "https://www.marca.com/en/football/leagues-cup/2024/08/14/66bc32bf46163fc8498b4578.html",
    "urlToImage": "https://phantom-marca.unidadeditorial.es/9f984c89e7081d147d00652392ec346e/resize/1200/f/webp/assets/multimedia/imagenes/2024/08/14/17236097110084.jpg",
    "publishedAt": "2024-08-14T04:34:44Z",
    "content": "The Copa America final injury was too harsh on Lionel Messi, his ankle was clearly swollen and everybody in Miami knew what was coming. As one of the best players in history, Messi is not longer as y… [+1910 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Wccftech"
    },
    "author": "Ali Salman",
    "title": "Google Followed Samsung To Fix One Of The Biggest Authentication Issues With The Pixel 9 Series",
    "description": "Google announced the Pixel 9 series with some major upgrades, and to be fair, the general design language is pretty similar to that of the iPhone lineup. However, the new design does make the Pixel look more premium and a proper flagship, something that Googl…",
    "url": "https://wccftech.com/pixel-9-fingerprint-scanner/",
    "urlToImage": "https://cdn.wccftech.com/wp-content/uploads/2024/08/Pixel-9.jpg",
    "publishedAt": "2024-08-14T04:02:11Z",
    "content": "Google announced the Pixel 9 series with some major upgrades, and to be fair, the general design language is pretty similar to that of the iPhone lineup. However, the new design does make the Pixel l… [+1834 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ibtimes.com.au"
    },
    "author": "AFP news",
    "title": "Asian Markets Extend Gains As US Inflation Data Boost Rate Hopes",
    "description": "Equities marched higher Wednesday after hopes for a Federal Reserve interest rate cut next month were boosted by data showing US wholesale prices rose less than forecast last month.",
    "url": "https://www.ibtimes.com.au/asian-markets-extend-gains-us-inflation-data-boost-rate-hopes-1850602",
    "urlToImage": "https://d.ibtimes.com.au/en/full/1856851/oil-prices-are-being-supported-worries-about-middle-east-crisis-though-gains-have-been-tempered.jpg",
    "publishedAt": "2024-08-14T02:57:11Z",
    "content": "Equities marched higher Wednesday after hopes for a Federal Reserve interest rate cut next month were boosted by data showing US wholesale prices rose less than forecast last month.\r\nHowever, Tokyo w… [+4817 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Iz.ru"
    },
    "author": "Антон Белый",
    "title": "Эксперты объяснили непопулярность у россиян гаджетов Google",
    "description": "Компания Google 13 августа провела свою ежегодную презентацию Made by Google, которую посвятила линейке продуктов из серии Pixel: смартфонам Pixel 9, часам Pixel Watch 3 и наушникам Pixel Buds Pro 2. Помимо этого, на презентации активно рассказывали о возможн…",
    "url": "https://iz.ru/1742453/2024-08-14/eksperty-obiasnili-nepopuliarnost-u-rossiian-gadzhetov-google",
    "urlToImage": "http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2024-08/2024-08-13T214419Z_716673346_RC25F9AFI1IX_RTRMADP_3_GOOGLE-HARDWARE%20copy.jpg?itok=ah_mYGPL",
    "publishedAt": "2024-08-14T02:45:00Z",
    "content": "Google 13 Made by Google, Pixel: Pixel 9, Pixel Watch 3 Pixel Buds Pro 2. , Gemini, Android 15.\r\n - , Google . , , Mobile Research Group , , Google Samsung Apple.\r\n« Pixel : , . - 2025 , , Google Sam… [+147 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Hannah Lambert",
    "title": "Georgia city to pay $55,000, train officers on free speech after veteran arrested for 'panhandling'",
    "description": "A Georgia police department must train officers on the First Amendment after the city settled with an Army veteran who alleged his free speech rights were violated.",
    "url": "https://www.foxnews.com/media/georgia-city-pay-55000-train-officers-free-speech-after-veteran-arrested-panhandling",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/08/panhandling-alpharetta-ga.gif",
    "publishedAt": "2024-08-14T00:00:16Z",
    "content": "A city in Georgia will change its free speech policies and pay $55,000 to settle a lawsuit, more than two years after police arrested a veteran for allegedly panhandling.\r\nJeff Gray, an Army veteran … [+3489 chars]"
    }
    ]
    static defaultProps = {
      category : 'general',
    }

    static propTypes = {
      category : propTypes.string,
    }
    constructor(){
      super();
      console.log("Hello i am a constructor from news item");
      this.state={
        articles : this.articles,
        loading : false,
        page : 1

      }
    }
    
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=8a0f1635245e4ffd9a71e60ff820b9e7&page=1&pageSize=10`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles})
    }
    handleNextClick = async ()=>{
      this.props.setProgress(0);
      console.log("next clicked");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=8a0f1635245e4ffd9a71e60ff820b9e7&page=${this.state.page+1}&pageSize=10`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      
      this.setState({
       page: this.state.page + 1,
       articles: parsedData.articles
      })
      this.props.setProgress(100);
    }
    handlePrevClick = async ()=>{
      console.log("previous clicked");
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=8a0f1635245e4ffd9a71e60ff820b9e7&page=${this.state.page-1}&pageSize=10`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      
      this.setState({
       page: this.state.page - 1,
       articles: parsedData.articles
      })
    }
    

  render() {
    return (
      <div className="container my-3">
        <h2>Read today's top headlines here</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
             <NewsItem  title={element.title?element.title.slice(0, 45):""} 
                       description={element.description?element.description.slice(0, 88):""}
                       imageUrl={element.urlToImage}
                       newsUrl={element.url}
                       author={element.author}
                       date={element.publishedAt}/>
             </div>

          })}
          {/* <div className="col-md-4">
      <NewsItem title="Introducing passkey support to Fastmail" 
                description="You can now create passkeys for your Fastmail account, giving you a quicker, more secure way to log in"
                imageUrl="https://www.fastmail.com/assets/images/Passkey-Blog@2x-dLLgw5EJsR-1200.png"/>
      </div> */}
      {/* <div className="col-md-4">
      <NewsItem title="How to create widgets for personal & emergency contacts on iPhone" description="Setting up widgets on your iPhone for contact and emergency information provides essential..." imageUrl="https://photos5.appleinsider.com/gallery/60541-124550-contact-header-xl.jpg"/>
      </div> */}
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" class="btn btn-primary btn-sm" onClick={this.handlePrevClick}>&larr; Previous</button>
      <button type="button" class="btn btn-primary btn-sm" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News
