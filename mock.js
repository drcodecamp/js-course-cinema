const movieList = [
  {
    _id: "6264a78278e7ce632f4fe2fe",
    category: ["playing"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650763919/academy/tutorials/Everything%20Everywhere.jpg",
    yearOfRelease: 2021,
    name: "הכול בכל מקום בבת אחת",
    date: "2022-04-03",
    time: "22:00",
    description:
      'אוולין, מהגרת סינית באמריקה, מוצאת עצמה נסחפת אל תוך הרפתקה מטורפת, בה היא לבדה יכולה להציל את העולם מהכחדה על ידי מעבר בין מימדים ועולמות מקבילים. מעשיית מדע בדיוני ופעולה מצחיקה שכמוה מעולם לא ראיתם, בכיכובם של השחקנית האגדית מישל יאו ("נמר דרקון", "עשיר בהזמנה") וצוות שחקנים מפתיע שכולל את ג\'יימי לי קרטיס וג\'ני סלייט. הסרט, שכבר הפך לשיחת היום בין מבקרי הקולנוע מובילים בארה"ב, הוא פרי מוחם של צמד הבמאים דן קוואן ודניאל שיינרט ("הדניאלס") ששיגעו את עולם הקולנוע לפני מספר שנים עם סרטם הראשון המבריק והפרוע "אולר שוויצרי", והמפיקים אנתוני וג\'ו רוסו (היוצרים של סרטי "הנוקמים" ו"קפטן אמריקה").',
    rows: [],
  },
  {
    _id: "6264a78278e7ce632f4fe2ff",
    category: ["playing"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650763933/academy/tutorials/The%20Unbearable%20Weight%20of%20Massive%20Talent.jpg",
    yearOfRelease: 2021,
    name: "משקלו הבלתי נסבל של כישרון ענק",
    description:
      "ניקולס קייג' מככב כ… ניקולס קייג', בקומדיית האקשן החדשה. בעודו עומד בפני משבר כלכלי ויצירתי, הגרסה המדומיינת של קייג' נענית להצעה להופיע ביום הולדתו של מעריץ שרוף ומסוכן (פדרו פסקל) בעבור מיליון דולר. הדברים יוצאים לגמרי משליטה כאשר קייג' מגויס על ידי סוכנת CIA (טיפאני האדיש) ונדרש להפיח שוב חיים בדמויות איקוניות אשר גילם בעבר, על מנת להציל את עצמו ואת היקרים לו. עם קריירה רבת שנים, שעתה נראית כאילו נבנתה במיוחד עבור הרגע הזה, השחקן המעוטר ורב ההשפעה חייב להיכנס לנעלי הדמות של חייו: ניקולס קייג'.",
    date: "2022-04-03",
    time: "22:00",
    rows: [],
  },
  {
    _id: "6264a78278e7ce632f4fe2f8",
    category: ["playing"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650763945/academy/tutorials/NORTHMAN.jpg",
    yearOfRelease: 2022,
    name: "מלך הצפון",
    description:
      'אפוס אקשן מדובר ועטור כוכבים העוקב אחר נסיך ויקינגי צעיר במסעו לנקום את רצח אביו. עם אלכסנדר סקארסגארד (טרזן) בתפקיד הנסיך הוויקינגי אמלת\', זוכת האוסקר ניקול קידמן, אניה טיילור-ג\'וי (גמביט המלכה), איתן הוק (יום אימונים מסוכן), ווילם דפו (ספיידרמן) וביורק. סרטו של הבימאי המוערך רוברט אגרס ("המכשפה", "המגדלור")',
    date: "2022-04-04",
    time: "21:15",
    rows: [],
  },
  {
    _id: "6264a78278e7ce632f4fe299",
    category: ["playing"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650763955/academy/tutorials/Fantastic%20Beasts.jpg",
    yearOfRelease: 2022,
    name: "חיות הפלא: הסודות של דמבלדור",
    description:
      "חוזרים אל העולם של הארי פוטר מאת ג' ק' רולינג: \"חיות הפלא: הסודות של דמבלדור\" הוא הפרק השלישי בסאגת הסרטים שמגלה את כל הסודות של עולם הקסמים.",
    date: "2022-04-04",
    time: "21:15",
    rows: [],
  },
  {
    _id: "6264a78278e7ce632f4fe2XX",
    category: ["playing"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650763973/academy/tutorials/ourstory.jpg",
    yearOfRelease: 2022,
    name: "הסיפור שלנו",
    description:
      'קומדיה רומנטית מוזיקלית בכיכובם של לי בירן ואליאנה תדהר. הוא סוכן אמנים מלא אמביציה וחסר עכבות, היא זמרת ויוצרת חסרת ביטחון שכותבת למגירה. כדי לגלות מי הם באמת, הם יצטרכו קודם כל למצוא אחד את השנייה, להתגבר על ההבדלים ביניהם ולתת לאהבה למוזיקה לעשות את השאר. "הסיפור שלנו" יספר את סיפורם של אנשים צעירים שמוצאים, ביחד ולחוד, את האומץ להתנער ממי שהעולם קבע שהם אמורים להיות כדי להתחבר לחלומות, לרצונות ולתשוקות שלהם. צעירים שמחליטים, לראשונה, להגדיר את עצמם בעצמם.',
    date: "2022-04-04",
    time: "21:15",
    rows: [],
  },
  {
    _id: "626456978e7ce632f4fe2f8",
    category: ["playing"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650763967/academy/tutorials/therun.jpg",
    yearOfRelease: 2022,
    name: "הבריחה מפרטוריה",
    description:
      "מהמפיקים של ״מלון מומבאי״ ו-״בחזרה מטואיצ׳י״ מגיע מותחן עוצר נשימה המבוסס על סיפור אמיתי. זהו אחד מסיפורי הבריחה מכלא המרתקים ביותר שהתרחשו בעולם. ג׳נקין וחברו הטוב ביותר לי, מושלכים לבית כלא שמור ומאובטח ע״י בית המשפט אחרי שהואשמו ונתפסו בפעולת טרור כביכול נגד משטר האפרטהייד. עם כושר המצאה מרתק, ייצור מפתחות מעץ לעשר דלתות פלדה שונות, ובניית מתקנים מתוחכמים כדי לפתוח את דלתות הכלא מרחוק, ולמרות המעקב הקפדני של הסוהרים אחרי כל תנועותיהם, הם מתקדמים צעד אחר צעד, כדי לנסות להגיע לחופש ... האם כוח הרצון והאמונה בדרך שלהם ובצדקתם, יעזרו להם להצליח במשימה שנראית בלתי אפשרית.",
    date: "2022-04-04",
    time: "21:15",
    rows: [],
  },
  {
    _id: "6264a78278e7ce632f44f0fp",
    category: ["playing", "kids"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650763980/academy/tutorials/Sonic%20the%20Hedgehog.jpg",
    yearOfRelease: 2022,
    name: "סוניק הסרט 2",
    date: "2022-04-04",
    description:
      "סיפורו של פרדי לופין, יורש העצר למשפחת אנשי זאב גאים. נואש להפוך להיות איש זאב בעצמו, פרדי מופתע כאשר ליום הולדתו ה-13 במה שאמור להיות הטרנספורמציה הראשונה שלו הכול מסתבך, במקום מהפך לזאב אכזרי הוא הופך ל... כלב פודל. בדיוק שפרדי חושב שהמצב לא יכול להיות גרוע יותר הוא עובר כנגד רצונו טיפול יופי, נזרק לרחוב ומושלך לכלא כלבים. האם פרדי וחברתו החדשה בטי, שיודעת ומכירה את החיים ברחוב, יצליחו להימלט? מי האיש המרושע אשר עוקב אחריו? למרות החיצוניות הוורודה, המפונפנת והחמודה שלו, האם פרדי יוכל להוכיח לכולם שהוא 100% זאב?",
    time: "14:45",
    rows: [],
  },
  {
    _id: "626r4as78278e7ce632f44df0fp",
    category: ["playing", "kids"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650764025/academy/tutorials/wolf.jpg",
    yearOfRelease: 2022,
    name: "100% זאב",
    description:
      "סיפורו של פרדי לופין, יורש העצר למשפחת אנשי זאב גאים. נואש להפוך להיות איש זאב בעצמו, פרדי מופתע כאשר ליום הולדתו ה-13 במה שאמור להיות הטרנספורמציה הראשונה שלו הכול מסתבך, במקום מהפך לזאב אכזרי הוא הופך ל... כלב פודל. בדיוק שפרדי חושב שהמצב לא יכול להיות גרוע יותר הוא עובר כנגד רצונו טיפול יופי, נזרק לרחוב ומושלך לכלא כלבים. האם פרדי וחברתו החדשה בטי, שיודעת ומכירה את החיים ברחוב, יצליחו להימלט? מי האיש המרושע אשר עוקב אחריו? למרות החיצוניות הוורודה, המפונפנת והחמודה שלו, האם פרדי יוכל להוכיח לכולם שהוא 100% זאב?",
    date: "2022-04-04",
    time: "14:45",
    rows: [],
  },
  {
    _id: "626r4as78278e7ce632f44tu88red",
    category: ["playing", "kids"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650764016/academy/tutorials/Turning%20Red.jpg",
    yearOfRelease: 2022,
    name: "אדומה אש-מדובב",
    date: "2022-04-04",
    description:
      "סיפורו של פרדי לופין, יורש העצר למשפחת אנשי זאב גאים. נואש להפוך להיות איש זאב בעצמו, פרדי מופתע כאשר ליום הולדתו ה-13 במה שאמור להיות הטרנספורמציה הראשונה שלו הכול מסתבך, במקום מהפך לזאב אכזרי הוא הופך ל... כלב פודל. בדיוק שפרדי חושב שהמצב לא יכול להיות גרוע יותר הוא עובר כנגד רצונו טיפול יופי, נזרק לרחוב ומושלך לכלא כלבים. האם פרדי וחברתו החדשה בטי, שיודעת ומכירה את החיים ברחוב, יצליחו להימלט? מי האיש המרושע אשר עוקב אחריו? למרות החיצוניות הוורודה, המפונפנת והחמודה שלו, האם פרדי יוכל להוכיח לכולם שהוא 100% זאב?",
    time: "15:45",
    rows: [],
  },
  {
    _id: "626r4as78278e7ce6tree3ed",
    category: ["playing", "kids"],
    coverImageUri:
      "https://res.cloudinary.com/dvvx6eoye/image/upload/v1650764031/academy/tutorials/The%20Wishmas%20Tree.jpg",
    yearOfRelease: 2022,
    name: "עץ המשאלות-מדובב",
    description:
      "משאלתה של פוסום צעירה לשלג לא רק מקפיאה את העיר שלה – עיר המשאלות, היא גם מאיימת על חיי כל התושבים. לפני שעץ המשאלות הקסום ינבול וימות, היא חייבת לקחת על עצמה את המשימה לצאת למסע חסר פחד אל עבר הלא נודע. נלחמת בספקות עצמיים, טורפים נעלמים ולבסוף בהיכחדות עצמה כדי להחזיר את המצב לקדמותו, לתקן את הנזק שעשתה ולהציל את העיר שלה!",
    date: "2022-04-04",
    time: "15:45",
    rows: [],
  },
];
