// ==========================================
// 1. قاعدة بيانات مدرسة الأخوّة الابتدائية
// ==========================================
const DB_KEY = "ALUKHUWAH_SCHOOL_DB_V8";

const rawClassesData = [
  { id: 1, name: "الصف الأول", section: "الشعبة أ", students: [
    [1, "إبراهيم علي الجاسم"], [2, "إسماعيل أمور الموح"], [3, "اسامه إبراهيم الوهب"], [4, "أيهم محمد الحاج محمد"], [5, "جمعة عبد المنعم الحاج محمد"],
    [6, "زيد محمد شريف ابوكشه"], [7, "سعد محمد علي الأحمد"], [8, "صهيب احمد العثمان"], [9, "عبد الرحمن محمد سعيد العثمان"], [10, "عبد الرحمن خليل شحود"],
    [11, "عبد الله محمد العبد الكريم"], [12, "عبد الوهاب محمد شيخ علي"], [13, "عبد الوهاب عمر الفياض"], [14, "عمر بلال العثمان"], [15, "عمران رضوان الجبولي"],
    [16, "عيسى إبراهيم العبود"], [17, "محمد عمران حاجي أحمد"], [18, "محمد عبد الله حمدو الشهابي"], [19, "محمد حسن الابراهيم"], [20, "محمد وضاح الدوش"],
    [21, "محمد المعتصم بالله علاء الدين العثمان الراغب"], [22, "محمد زين قشقوش"], [23, "محمد يحيى أحمد السيد"], [24, "مصطفى رضا قلعه جي"], [25, "مصعب حسين دركزنلي"],
    [26, "معاذ مصعب العلبي"], [27, "نور الدين محمد خالد غبوره"], [28, "يمان احمد الحاج حمدو"], [29, "يوسف عبد القادر النجار"], [30, "إبراهيم عبود موسى الخليف الموسى"]
  ]},
  { id: 2, name: "الصف الثاني", section: "الشعبة أ", students: [
    [31, "أحمد ياسين الشواخ"], [32, "أنس محمد شيخ عبد الحميد القصاب"], [33, "بيبرس مروان الخليل"], [34, "تيم براء حاج طالب"], [35, "حامد محمود الخضر"],
    [36, "حمزة مصطفى الحاج محمد"], [37, "سعد الدين علاء شيخ عبد الحميد قصاب"], [38, "عبد العزيز أحمد الواكي"], [39, "عبد اللطيف محمد صبحي حميدي"], [40, "عبد الله جمال الياسين"],
    [41, "عبد الناصر أحمد الخضر"], [42, "عبد الناصر أحمد الطالب"], [43, "عز الدين محمد عثمان الراغب"], [44, "عمار عبد الحميد أبوكشه"], [45, "عمر جعفر قدور"],
    [46, "عمر عدنان الجزاع"], [47, "عمر علي المصري"], [48, "عمر حسان الخالوصي"], [49, "محمد يحيى حوير"], [50, "محمد محمد إسماعيل الأحمد"],
    [51, "محمد سلامي الباشا"], [52, "مصطفى أحمد شحود العبسي"], [53, "ميار عماد أبو كشه"], [54, "نديم خليل شحود"], [55, "يزن محمد علاء الحاج محمد"]
  ]},
  { id: 3, name: "الصف الثاني", section: "الشعبة ب", students: [
    [56, "إبراهيم عبد الرحمن الطويل"], [57, "إلياس محمد مردود"], [58, "أمير محمد شحود العبسي"], [59, "حسن الجاسم"], [60, "حسين الجاسم"],
    [61, "زين خميس العابدين"], [62, "زين العابدين سليم الأخرس"], [63, "سعد محمد رأفت الحاج عبيد الحجار"], [64, "سعيد محمد أبو كشة"], [65, "عمر فايز الرجا"],
    [66, "عمر محمد جميل الطالب"], [67, "فاروق محمد مطر"], [68, "قصي أحمد المحمد علي العبد الله"], [69, "قيس محمد المحمد علي العبد الله"], [70, "كرم محمد سعيد طالب"],
    [71, "محمد عمار العثمان الراغب"], [72, "محمد احمد شيخ عبد الحميد القصاب"], [73, "محمد خالد العكلة"], [74, "محمد يامن احمد العثمان"], [75, "محمود محمد الغريب"],
    [76, "مصطفى علاء الدين مخزوم بركات"], [77, "مصطفى محمد شحود العبسي"], [78, "نجم الدين عبد الله الكحاط"], [79, "هيثم مصعب احمد الغزال"], [80, "يوسف قتيبه الابراهيم"]
  ]},
  { id: 4, name: "الصف الثالث", section: "الشعبة أ", students: [
    [81, "إسماعيل عبد القادر بكداش"], [82, "أحمد سامر الشهابي"], [83, "أحمد أحمد الحسين"], [84, "براء عامر ألفين"], [85, "تيم الله محمود العمر السكيف"],
    [86, "جمال سليمان مراد الخلف"], [87, "جمعه عبد المعطي حاج محمد"], [88, "جود يامن العكيل"], [89, "حسام أحمد الخليفة"], [90, "حسين محمد النجار"],
    [91, "شهم محمد سعيد الراغب"], [92, "صلاح الدين عبد القادر النجار"], [93, "عبد الرؤوف إبراهيم الحزوري"], [94, "عبد اللطيف بلال العثمان"], [95, "عبد الله أحمد الطه الذنون"],
    [96, "غسان غسان حصري"], [97, "فيصل مضر أحمد"], [98, "محمد علي النجار"], [99, "محمد علي العثمان"], [100, "محمد عمر الفياض"],
    [101, "محمود إبراهيم العبود"], [102, "يزن وائل محمد آغا"], [103, "يمان محمد سعيد العثمان"]
  ]},
  { id: 5, name: "الصف الثالث", section: "الشعبة ب", students: [
    [104, "أوس فايز الرجا"], [105, "أيوب حسين كل حسين"], [106, "أيوب خالد المديفر"], [107, "بدر وليد الخلف"], [108, "حسين سلامي الباشا"],
    [109, "حمزة عيادي حامد"], [110, "داني موسى موسى"], [111, "عبد الرحمن خالد فهد"], [112, "عبد الرحمن عبد الواحد الأحمد"], [113, "عيسى أحمد العيسى"],
    [114, "فايز حسين دركزنلي"], [115, "قتيبه مصطفى الجاسم"], [116, "محمد إسماعيل الحاج محمد"], [117, "محمد عيادي حامد"], [118, "محمد عادل الضاهر"],
    [119, "محمد نور وليد الحزوري"], [120, "محمود أحمد الدرويش"], [121, "معتصم فوزي طيار"], [122, "وليد احمد العثمان"], [123, "يوسف ديبو المنصور"],
    [124, "عبد الرحمن محمد حازم أبو مغاره"]
  ]},
  { id: 6, name: "الصف الرابع", section: "الشعبة أ", students: [
    [125, "احمد جمال الأحمد"], [126, "أحمد محمد رأفت الحاج عبيد الحجار"], [127, "أويس جهاد الوهوب"], [128, "سعيد حمزة ابوكشة"], [129, "عادل احمد علبي"],
    [130, "عبد الحميد علاء شيخ عبد الحميد قصاب"], [131, "عبد الحميد محمد المحمد علي العبد الله"], [132, "عبد الرحمن محمد العلي"], [133, "عبد العزيز عبد الكريم البكاري"], [134, "علي جهاد الوهوب"],
    [135, "علي صطام عبد الرزاق"], [136, "محمد عمر الرجب"], [137, "محمد احمد الحاج حمدو"], [138, "محمد جمال الخلف"], [139, "محمود عمر الرجب"],
    [140, "محمود عمر الشهابي"], [141, "مصطفى خليل شحود العبسي"], [142, "يزن عبد الحكيم الحمدان"], [143, "يوسف عبد الرحمن مشرف الشيخ دندل"]
  ]},
  { id: 7, name: "الصف الرابع", section: "الشعبة ب", students: [
    [144, "إبراهيم عبود موسى الخليف الموسى"], [145, "أحمد حسن الابراهيم"], [146, "أحمد محمد إسماعيل الأحمد"], [147, "براء عبد الرحمن غالي"], [148, "جود محمد علاء الحاج محمد"],
    [149, "حسين علي النجار"], [150, "حسين محمد محمد شيخو"], [151, "حمزة مصعب العلبي"], [152, "رشيد جمال السعيدي"], [153, "سلطان خالد فهد"],
    [154, "عبد الله مراد الخلف"], [155, "عبد الله حسن السواس"], [156, "علي أسعد الربيع"], [157, "عمران محمد سعيد العثمان"], [158, "قصي إبراهيم الحجار"],
    [159, "محمد مصطفى الحمدان"], [160, "محمد محمد محمد شيخو"], [161, "محمد علاء كرمو"], [162, "محمد أحمد الشهابي"], [163, "مصطفى محمد سعيد الراغب"],
    [164, "ميسرة أحمد وليد دعاس"], [165, "نجم مصعب المصري"], [166, "همام شريف الحمدو الصالح"]
  ]},
  { id: 8, name: "الصف الخامس", section: "الشعبة أ", students: [
    [167, "أحمد صلاح الدين النعوس"], [168, "أيمن رضوان الجبولي"], [169, "حمزة محمد شريف ابوكشه"], [170, "حمزة محمد بطحيش"], [171, "حمزة جمال الخلف"],
    [172, "حمزة محمد الرجيب"], [173, "حمزه بكري مخزوم"], [174, "خالد قتيبه الابراهيم"], [175, "زكريا محمد ربيع السكر"], [176, "زيد وائل محمد آغا"],
    [177, "سراج محمود الطويل"], [178, "صالح علاء الدين مخزوم بركات"], [179, "عبد الرحمن الحاج زينو"], [180, "عمر نعمان رمضان"], [181, "محرّم أحمد محمد عبد اللطيف المحمد"],
    [182, "محمد محمود حاج معروف"], [183, "محمد عبد الواحد الأحمد"], [184, "محمد نورس الجاسم"], [185, "محمد نور محمد الحداد"], [186, "مصطفى إبراهيم الحزوري"],
    [187, "ياسر عبد الله العبد الله"], [188, "يزن محمود موسى الرحيم"], [189, "يوسف حمزة مراد"]
  ]},
  { id: 9, name: "الصف السادس", section: "الشعبة أ", students: [
    [190, "أحمد يوسف النعمة"], [191, "أحمد اصطيف محمد"], [192, "براء عيسى الشهابي"], [193, "براء محمود السويد"], [194, "بهاء محمود السويد"],
    [195, "حسن عبد اللطيف السكر"], [196, "زيد ماضي نعسان الياسين"], [197, "عبد الإله مصطفى الحاج محمد"], [198, "عبد الحميد محمد شيخ عبد الحميد القصاب"], [199, "عبد الرحمن عبد المعطي العجل"],
    [200, "عبد الرحمن حسن الأحمد"], [201, "عبد الرحمن محمود العمر السكيف"], [202, "عبد الهادي علي العثمان"], [203, "عمر محمود الرومو"], [204, "عمر جمال السعيدي"],
    [205, "مجد أحمد الخليفة"], [206, "محمد عبد الحميد أبو كشه"], [207, "محمد عماد العلي"], [208, "محمد فادي الخطيب"], [209, "محمد بكر مصطفى خيال"],
    [210, "محمد يحيى عماد أبو كشه"], [211, "محمود أحمد عمر المعراوي"], [212, "مصطفى محمد النجار"], [213, "هادي مصطفى خلاصي"], [214, "هاشم محمد مردود"],
    [215, "يزن محمد وليد الحاج احمد النعمة"], [216, "محمد أحمد بكداش"]
  ]},
  { id: 10, name: "الصف السابع", section: "الشعبة أ", students: [
    [217, "المعتصم بالله اصطيف محمد"], [218, "أحمد عامر الحداد"], [219, "اسامه محمد شريف ابوكشه"], [220, "أسيد عبد الحميد الابراهيم"], [221, "حارث حازم البرغش"],
    [222, "حيدر شحود"], [223, "صلاح بركات الخليفة"], [224, "عبد الرحمن محمود الطويل"], [225, "عبد الماجد عماد الحاج حسن"], [226, "علي عماد العلي"],
    [227, "قيصر علي المصيخ"], [228, "محمد موسى موسى"], [229, "محمد محمد الحاج محمد"], [230, "محمد محمود المحمد علي"], [231, "محمد سراج عبود موسى الخليف الموسى"],
    [232, "محمد صبري محمد صباغ"], [233, "محمد نور عبد الغني أبو عمرو"], [234, "همام حازم البرغش"], [235, "يامن محمد المحمد"], [236, "يعقوب مصعب احمد الغزال"],
    [237, "عبد الملك إبراهيم العساف"]
  ]},
  { id: 11, name: "الصف الروضة مسائي", section: "الشعبة أ", students: [
    [238, "اسراء عبد الوهاب اسكيف"], [239, "البراء مالك الحاج عبيد الحجار"], [240, "ايلين يامن العكيل"], [241, "أحمد براء العلبي"], [242, "أحمد محمد علي الخضر"],
    [243, "أحمد قسورة محمد العكله"], [244, "أسيل عبد المعطي الحاج محمد"], [245, "أيمن عبد المنعم الحاج محمد"], [246, "آدم عبد اللطيف فرواتي"], [247, "بيان أيمن أيوب"],
    [248, "درة عبد الله العبد الوهاب الحزوري"], [249, "رضوان برهان الحماد"], [250, "رغد محمد رأفت الحاج عبيد الحجار"], [251, "زهراء محمد نور واكي"], [252, "زيد عبد الحميد أبو كشه"],
    [253, "زين محمود العسلي"], [254, "سارة خليل شحود"], [255, "سدره محمد حمدو القدور"], [256, "سرحان اصطيف محمد"], [257, "سلام حسن الحسن الحامد"],
    [258, "سيلا حسين العليوي"], [259, "عامر محمد اسكيف"], [260, "عبد الحميد حسين حسين العلي الابو كشة"], [261, "عبد الرحمن صفوان العلاوي"], [262, "عبد الكريم ظافر درويش"],
    [263, "فاطمة عبد الوهاب اسكيف"], [264, "محمد عبد اللطيف فرواتي"], [265, "محمد بلال عثمان"], [266, "محمد بلال حسين العليوي"], [267, "مصطفى أحمد الشيخ ديبو"],
    [268, "معاذ محمود الحاج محمد"], [269, "ميلا بلال صطوف العثمان"], [270, "يوسف بكري الحسكير"], [271, "يونس عبد الرحمن مشرف الشيخ دندل"]
  ]},
  { id: 12, name: "الصف الأول مسائي", section: "الشعبة أ", students: [
    [272, "إيفا سامر نعوس"], [273, "إيلاف خليل شحود العبسي"], [274, "أحمد محمد محمد القاسم"], [275, "أروى فايز الرجا"], [276, "أمل أحمد غاوي"],
    [277, "آيه خالد الأبرش"], [278, "تاليا عبد الرحمن القصاب"], [279, "تسنيم سليم الاخرس"], [280, "جنات أحمد المصطفى"], [281, "جيهان ظافر درويش"],
    [282, "ربيعة أحمد الدوش"], [283, "رندة وليد العبد الرحيم الدوش"], [284, "ريتاج إبراهيم العبود"], [285, "ريم عبد الله علواش"], [286, "سارة محمد رأفت الحاج عبيد الحجار"],
    [287, "صباح حمزة ابوكشة"], [288, "صفاء غسان الشويله"], [289, "عائشة سهل العثمان"], [290, "عائشة عبد الكريم الشيخ حبيب"], [291, "عبادة عبد الحميد أبو كشه"],
    [292, "عبير محمد ديب الشامي النجار"], [293, "عمر محمد خضر السباعي"], [294, "غزل حسن الحسن الحامد"], [295, "فاطمة محمود العبد الغني"], [296, "فاطمة الزهراء أسامة الموسى الأحمد"],
    [297, "فاطمة الزهراء بكري مخزوم"], [298, "قطر الندى عبد الوهاب اسكيف"], [299, "قمر عبد الرحمن الطويل"], [300, "لانا مصطفى نومة محمد الحاج ناصر"], [301, "لؤلؤة مالك الحاج عبيد الحجار"],
    [302, "ليال سامر الشهابي"], [303, "ليان أيمن أيوب"], [304, "لين عبد الله المصطو العبد الله"], [305, "ماريا صلاح الدين النعوس"], [306, "ماريا حسان عباس"],
    [307, "محمد أمير فادي اليونس"], [308, "مريم صلاح الدين النعوس"], [309, "مريم محمد علي الخضر"], [310, "مريم حسام نعمة"], [311, "مريم عبد الرحمن مشرف الشيخ دندل"],
    [312, "مريم نور محمد العبد الكريم"], [313, "معتصم بالله محمد الغريب"], [314, "نابغة محمد القاسم"], [315, "هادية خالد كردي"], [316, "هدى سهل العثمان"],
    [317, "وفاء محمود شيخ عبد الحميد القصاب"], [318, "وفاء خالد فهد"], [319, "ياسمين الشام محمد صطوف العثمان"], [320, "ياقوت عبد الإله الراوي"]
  ]},
  { id: 13, name: "الصف الثاني مسائي", section: "الشعبة أ", students: [
    [321, "ابتهال يوسف أبو كشة"], [322, "اسراء احمد شيخ عبد الحميد القصاب"], [323, "ايلاف عبد الله شيخ عبد الحميد القصاب"], [324, "أبرار أحمد الشيخ ديبو"], [325, "آلاء محمد نور واكي"],
    [326, "بتول محمد العبد الكريم"], [327, "تسنيم محمود السلو"], [328, "جميلة أحمد الواكي"], [329, "حبيبة حسن الابراهيم"], [330, "حسناء أحمد الطالب"],
    [331, "رتيل وليد العبد الرحيم الدوش"], [332, "رزان بدر عبد الرحمن"], [333, "رفيده نورس الجاسم"], [334, "روعه أحمد الحاج محمد"], [335, "سارة سامر الشهابي"],
    [336, "ساره عامر الحداد"], [337, "سدره مصطفى نومة محمد الحاج ناصر"], [338, "سديل محمد محمد القاسم"], [339, "سيلار أحمد السكر"], [340, "شام عبد الرحمن القدور السيد عمر"],
    [341, "غنى حسان سكر"], [342, "فدوى حسام نعمة"], [343, "كوثر محمد صطوف العثمان"], [344, "لانا حسن العليوي"], [345, "لمياء علاء كرمو"],
    [346, "مها بكري الحسكير"], [347, "ميس عمر الحاج محمد"], [348, "نرجس نادر الجاسم"], [349, "نغم إبراهيم العبود"], [350, "نوال مصطفى الجاسم"],
    [351, "هديل عمر أبو زيد"], [352, "همسة محمود الأحمد"]
  ]},
  { id: 14, name: "الصف الثالث مسائي", section: "الشعبة أ", students: [
    [353, "ابتسام مصطفى نومة محمد الحاج ناصر"], [354, "اميره عبد الرحمن السكر"], [355, "إسلام محمد شيخ علي"], [356, "إيليان مصطفى الحمدان"], [357, "أليسا أحمد المحمد علي العبد الله"],
    [358, "تسنيم عبد المعطي العجل"], [359, "تقى أحمد ياسر الحاج إبراهيم"], [360, "جود عمار الأحمد"], [361, "خديجة اصطيف محمد"], [362, "دانيه محمود الطويل"],
    [363, "رقية عبد الإله الراوي"], [364, "سجود عمر الحاج محمد"], [365, "سلام أحمد حماد"], [366, "صهواء أحمد السويد"], [367, "عفاف فادي الخطيب"],
    [368, "غنى خليل شحود"], [369, "فاطمة أحمد الشهابي"], [370, "لارين علاء الدين العثمان الراغب"], [371, "لجين عبد الباسط الناشف"], [372, "ماريا محمد علي الأحمد"],
    [373, "ماريا محمد ديب الشامي النجار"], [374, "ماريا إبراهيم الوهب"], [375, "مارية محمود الحداد"], [376, "مريم أحمد العباس"], [377, "ناديه مصطفى الطالب"],
    [378, "نسرين فادي اليونس"], [379, "هاجر موسى الدرام"], [380, "هاجر محمد نشطي"], [381, "هبة الله عادل حاج حسن"], [382, "وفاء رضا قلعه جي"],
    [383, "يسرى خالد كسار"], [384, "يمامة مالك الحاج عبيد الحجار"], [385, "يمامة أسامة النعوس"]
  ]},
  { id: 15, name: "الصف الرابع مسائي", section: "الشعبة أ", students: [
    [386, "اسلام احمد شيخ عبد الحميد القصاب"], [387, "أسماء ادريس الدالي"], [388, "أسينات خالد العبد الرحيم الدوش"], [389, "أمل محمد الخلوف الحسين"], [390, "بتول سارية موسى"],
    [391, "تيجان حسن المواس"], [392, "حبيبه رجب الرجب"], [393, "رغد حمزة مراد"], [394, "رؤى محمد سكر"], [395, "ريم عماد الحاج حسن"],
    [396, "زهور أحمد الطه الذنون"], [397, "سلسبيل مصطغى نجار"], [398, "سناء حسن سعيد المحمد علي"], [399, "شام ياسين الشواخ"], [400, "صباح محمد أبو كشة"],
    [401, "عائشة محمد النجار"], [402, "عائشة محمد علي الحسين"], [403, "عسل محمد سعيد طالب"], [404, "فاطمة علاء الدين العثمان الراغب"], [405, "فاطمة الزهراء محمد شيخ علي"],
    [406, "فرح حسان سكر"], [407, "ماريا أنور زويرخ منصور"], [408, "مآب خالد العبد الرحيم الدوش"], [409, "مريم عمران حاجي أحمد"], [410, "مريم فادي اليونس"],
    [411, "نسيم إبراهيم العبود"], [412, "نهيدة إبراهيم كريم"], [413, "هاجر إباء وليد دشراوي"], [414, "هند نورس الجاسم"], [415, "وفاء عبد الحميد أبو كشه"],
    [416, "وفاء محمد حمدو القدور"], [417, "يمنى يحيى حوير"], [418, "يمنى محمد محمد القاسم"]
  ]},
  { id: 16, name: "الصف الخامس مسائي", section: "الشعبة أ", students: [
    [420, "أمينة مصطغى نجار"], [421, "تسنيم محمود الحاج محمد"], [422, "حلا عمر العثمان"], [423, "حنين إبراهيم حسن المحمد علي"], [424, "خديجة احمد العثمان"],
    [425, "رفيف مصطفى صباغ"], [426, "رهام فيصل الجاسم"], [427, "رهف احمد علبي"], [428, "رؤى عمر أبو زيد"], [429, "ريان أحمد العباس"],
    [430, "ريحانة مالك الحاج عبيد الحجار"], [431, "ريماس جعفر قدور"], [432, "سما عبد الله حمدو الشهابي"], [433, "سنا نور عمران حاجي أحمد"], [434, "شام أحمد حماد"],
    [435, "عائشة علي النجار"], [436, "غنى شريف نعساني"], [437, "فاطمة الزهراء عبود موسى الخليف الموسى"], [438, "ليان فراس حاج حمد"], [439, "ماريا خالد الرجب"],
    [440, "ماريا محمد مطر"], [441, "ماريا حمزة مراد"], [442, "مرام عبد القادر بكداش"], [443, "ميرا خالد العكلة"], [444, "نور محمد المحمد علي العبد الله"],
    [445, "نور الإسلام وليد الخلف"]
  ]},
  { id: 17, name: "الصف السادس مسائي", section: "الشعبة أ", students: [
    [446, "ايمان مضر أحمد"], [447, "أسماء ياسين الشواخ"], [448, "أسيل علي المصري"], [449, "أماني مصطفى الحمدان"], [450, "أنهار عمر الشهابي"],
    [451, "آمنة محمد نور واكي"], [452, "جود عماد الحاج حسن"], [453, "حسناء عبد الله العبد الله"], [454, "حنين محمد العكله"], [455, "رزان مصطفى صباغ"],
    [456, "رغداء إسماعيل الحاج محمد"], [457, "ريتاج خليل شحود العبسي"], [458, "سارة عبد الإله الراوي"], [459, "سدن حمزة مراد"], [460, "شهد محمد وسيم الشهابي"],
    [461, "شيماء سلامي الباشا"], [462, "عائشة محمد العبد الكريم"], [463, "عائشة محمد مطر"], [464, "عائشة محمد الخلوف الحسين"], [465, "علا محمد طلال القاسم"],
    [466, "فاطمة محمد الحاج محمد"], [467, "لارين حسن السواس"], [468, "لجين عبد الهادي العثمان"], [469, "ماريا وائل محمد آغا"], [470, "ميسم حسن الحاج عبيد الحجار"],
    [471, "نور مضر أحمد"], [472, "هدى عبد القادر بكداش"], [473, "يقين أحمد ياسر الحاج إبراهيم"]
  ]},
  { id: 18, name: "الصف السابع مسائي", section: "الشعبة أ", students: [
    [474, "بيري سلامي الباشا"], [475, "جود محمد صباغ"], [476, "خديجة إبراهيم العبود"], [477, "رقية عبد الرحمن مشرف الشيخ دندل"], [478, "روى محمد البدوي"],
    [479, "ساره محمد العبد الكريم"], [480, "سعاد أحمد قره حسين الشهابي"], [481, "شام صفوان العلاوي"], [482, "شهيرة عثمان العثمان"], [483, "عائشة محمد الشهابي"],
    [484, "عائشه عامر الحداد"], [485, "غزل محمد المحمد علي العبد الله"], [486, "ماريا أحمد حماد"], [487, "نورجان مصطفى شيخ ديبو"], [488, "هبه علاء الدين مخزوم بركات"]
  ]}
];

const defaultSubjects = [
  "اللغة العربية",
  "الرياضيات",
  "العلوم",
  "اللغة الإنجليزية",
  "التربية الإسلامية",
  "الاجتماعيات",
  "الحاسوب",
];

const defaultDatabase = {
  users: [
    {
      username: "مدرسة الاخوة",
      password: "1234",
      role: "admin",
      title: "مدير المدرسة",
      allowedSubjects: [],
    },
    {
      username: "أحمد",
      password: "1234",
      role: "teacher",
      title: "معلم رياضيات",
      allowedSubjects: ["الرياضيات"],
    },
    {
      username: "سعاد",
      password: "1234",
      role: "teacher",
      title: "معلمة لغة عربية",
      allowedSubjects: ["اللغة العربية"],
    },
  ],
  classes: rawClassesData.map((cls) => ({
    id: cls.id,
    name: cls.name,
    section: cls.section,
    subjects: [...defaultSubjects],
    students: cls.students.map(([id, name]) => ({
      id: id,
      code: String(id),
      name: name,
      grades: ["", "", "", "", "", "", ""],
    })),
  })),
};

function loadDatabase() {
  const saved = localStorage.getItem(DB_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    parsed.classes.forEach((cls, cIdx) => {
      if (!cls.subjects)
        cls.subjects = [...defaultDatabase.classes[0].subjects];
      cls.students.forEach((st, sIdx) => {
        if (!st.code) st.code = `ST${cIdx + 1}0${sIdx + 1}`;
      });
    });
    parsed.users.forEach((u) => {
      if (!u.title) u.title = u.role === "admin" ? "مدير المدرسة" : "معلم";
      if (!u.allowedSubjects) u.allowedSubjects = [];
    });
    return parsed;
  } else {
    localStorage.setItem(DB_KEY, JSON.stringify(defaultDatabase));
    return JSON.parse(JSON.stringify(defaultDatabase));
  }
}

function saveDatabase() {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
  showSaveIndicator();
}

function showSaveIndicator() {
  const badge = document.getElementById("save-status");
  badge.textContent = "⏳ جاري الحفظ...";
  setTimeout(() => {
    badge.textContent = "✓ تم الحفظ في قاعدة البيانات";
  }, 300);
}

let db = loadDatabase();
let currentUser = null;
let selectedClassId = null;

function isAdmin() {
  return currentUser && currentUser.role === "admin";
}

function canEditSubject(subjectName) {
  if (isAdmin()) return true;
  if (!currentUser || currentUser.role !== "teacher") return false;
  const teacherObj = db.users.find((u) => u.username === currentUser.username);
  if (
    !teacherObj ||
    !teacherObj.allowedSubjects ||
    teacherObj.allowedSubjects.length === 0
  ) {
    return true;
  }
  return teacherObj.allowedSubjects.includes(subjectName);
}

// ==========================================
// 2. عناصر واجهة المستخدم
// ==========================================
const mainHeader = document.getElementById("main-header");
const loginPage = document.getElementById("login-page");
const classesPage = document.getElementById("classes-page");
const adminDashboardPage = document.getElementById("admin-dashboard-page");
const studentsPage = document.getElementById("students-page");
const studentReportPage = document.getElementById("student-report-page");

const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const welcomeUser = document.getElementById("welcome-user");
const userRoleBadge = document.getElementById("user-role-badge");
const navAdminPanelBtn = document.getElementById("nav-admin-panel-btn");
const exportClassXlsxBtn = document.getElementById("export-class-xlsx-btn");
const addStudentForm = document.getElementById("add-student-form");
const adminClassSubjectsPanel = document.getElementById(
  "admin-class-subjects-panel",
);

const classesGrid = document.getElementById("classes-grid");
const tableHeadersRow = document.getElementById("table-headers-row");
const studentsTableBody = document.getElementById("students-table-body");
const currentClassTitle = document.getElementById("current-class-title");

// ==========================================
// 3. تسجيل دخول الموظفين والاستعلام للطلاب
// ==========================================
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const matchedUser = db.users.find(
    (u) => u.username === username && u.password === password,
  );

  if (matchedUser) {
    currentUser = {
      username: matchedUser.username,
      role: matchedUser.role,
      title: matchedUser.title,
      allowedSubjects: matchedUser.allowedSubjects,
    };
    loginError.classList.add("hidden");
    applyUserPermissionsUI();
    showPage("classes");
  } else {
    loginError.classList.remove("hidden");
  }
});

// بحث الطالب بالكود الشخصي
document
  .getElementById("student-search-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const codeInput = document
      .getElementById("student-code-input")
      .value.trim()
      .toUpperCase();
    const searchError = document.getElementById("student-search-error");

    let foundStudent = null;
    let foundClass = null;

    db.classes.forEach((cls) => {
      cls.students.forEach((st) => {
        if (st.code && st.code.toUpperCase() === codeInput) {
          foundStudent = st;
          foundClass = cls;
        }
      });
    });

    if (foundStudent && foundClass) {
      searchError.classList.add("hidden");
      renderStudentReportPage(foundStudent, foundClass);
      showPage("report");
    } else {
      searchError.classList.remove("hidden");
    }
  });

function applyUserPermissionsUI() {
  if (isAdmin()) {
    welcomeUser.textContent = `مرحباً، سيادة ${currentUser.username}`;
    userRoleBadge.textContent = "👑 صلاحية كاملة (المدير)";
    userRoleBadge.className = "role-badge role-admin";
    navAdminPanelBtn.classList.remove("hidden");
    exportClassXlsxBtn.classList.remove("hidden");
    addStudentForm.classList.remove("hidden");
    adminClassSubjectsPanel.classList.remove("hidden");
    renderTeachersListForAdmin();
    renderTeacherSubjectsCheckboxes();
  } else {
    const teacherTitle = currentUser.title ? ` (${currentUser.title})` : "";
    welcomeUser.textContent = `مرحباً، الأستاذ/ة ${currentUser.username}${teacherTitle}`;
    userRoleBadge.textContent = `👨‍🏫 معلم: ${currentUser.title || "عام"}`;
    userRoleBadge.className = "role-badge role-teacher";
    navAdminPanelBtn.classList.add("hidden");
    exportClassXlsxBtn.classList.add("hidden");
    addStudentForm.classList.add("hidden");
    adminClassSubjectsPanel.classList.add("hidden");
  }
}

document.getElementById("logout-btn").addEventListener("click", function () {
  currentUser = null;
  selectedClassId = null;
  loginForm.reset();
  showPage("login");
});

document
  .getElementById("back-to-login-btn")
  .addEventListener("click", function () {
    showPage("login");
  });

navAdminPanelBtn.addEventListener("click", function () {
  showPage("admin-dashboard");
  if (sideMenu.classList.contains("open")) {
    toggleMobileMenu();
  }
});

document
  .getElementById("back-from-admin-btn")
  .addEventListener("click", function () {
    showPage("classes");
  });

// ==========================================
// 4. صلاحيات المدير (نقل الطلاب، المواد، المعلمون)
// ==========================================

function renderTeacherSubjectsCheckboxes() {
  const container = document.getElementById("teacher-subjects-checkboxes");
  if (!container) return;
  container.innerHTML = "";

  let allSubjectsSet = new Set();
  db.classes.forEach((cls) => {
    if (cls.subjects) {
      cls.subjects.forEach((subj) => allSubjectsSet.add(subj));
    }
  });

  if (allSubjectsSet.size === 0) {
    container.innerHTML =
      "<small style='color:var(--text-muted);'>لا توجد مواد دراسية مسجلة حالياً.</small>";
    return;
  }

  allSubjectsSet.forEach((subj) => {
    const label = document.createElement("label");
    label.className = "subject-checkbox-label";
    label.innerHTML = `
      <input type="checkbox" name="teacher-subject-item" value="${subj}">
      <span>${subj}</span>
    `;
    container.appendChild(label);
  });
}

window.transferStudent = function (studentId) {
  if (!isAdmin()) return;
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  const studentIndex = currentClass.students.findIndex(
    (s) => s.id === studentId,
  );
  if (studentIndex === -1) return;
  const student = currentClass.students[studentIndex];

  const otherClasses = db.classes.filter((c) => c.id !== selectedClassId);
  if (otherClasses.length === 0) {
    alert("لا توجد صفوف أخرى لنقل الطالب إليها!");
    return;
  }

  let promptText = `نقل الطالب: (${student.name})\nاختر رقم الصف المراد النقل إليه:\n`;
  otherClasses.forEach((cls, idx) => {
    promptText += `${idx + 1}: ${cls.name} (${cls.section || "الشعبة أ"})\n`;
  });

  const choice = prompt(promptText);
  if (!choice) return;
  const choiceNum = parseInt(choice) - 1;
  if (isNaN(choiceNum) || choiceNum < 0 || choiceNum >= otherClasses.length) {
    alert("رقم الصف غير صحيح!");
    return;
  }

  const targetClass = otherClasses[choiceNum];

  currentClass.students.splice(studentIndex, 1);

  while (student.grades.length < targetClass.subjects.length) {
    student.grades.push("");
  }
  if (student.grades.length > targetClass.subjects.length) {
    student.grades = student.grades.slice(0, targetClass.subjects.length);
  }

  targetClass.students.push(student);
  saveDatabase();
  renderStudentsTable();
  alert(
    `تم نقل الطالب (${student.name}) بنجاح إلى ${targetClass.name} (${targetClass.section || "الشعبة أ"})!`,
  );
};

function renderClassSubjectsManager() {
  if (!isAdmin()) return;
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  const container = document.getElementById("class-subjects-chips");
  container.innerHTML = "";

  currentClass.subjects.forEach((subj, idx) => {
    const chip = document.createElement("div");
    chip.className = "subject-chip";
    chip.innerHTML = `
            <span>${subj}</span>
            <button class="delete-subject-btn" title="حذف المادة" onclick="deleteClassSubject(${idx})">×</button>
        `;
    container.appendChild(chip);
  });
}

document
  .getElementById("add-class-subject-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isAdmin()) return;

    const input = document.getElementById("new-subject-name");
    const subName = input.value.trim();
    if (!subName) return;

    const currentClass = db.classes.find((c) => c.id === selectedClassId);
    if (!currentClass) return;

    currentClass.subjects.push(subName);
    currentClass.students.forEach((st) => {
      if (!st.grades) st.grades = [];
      while (st.grades.length < currentClass.subjects.length) {
        st.grades.push("");
      }
    });

    saveDatabase();
    input.value = "";
    renderClassSubjectsManager();
    renderStudentsTable();
    renderTeacherSubjectsCheckboxes();
  });

window.deleteClassSubject = function (subjectIndex) {
  if (!isAdmin()) return;
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  if (currentClass.subjects.length <= 1) {
    alert("لا يمكن حذف جميع المواد! يجب أن تبقى مادة واحدة على الأقل.");
    return;
  }

  if (
    !confirm(
      `هل أنت متأكد من حذف مادة (${currentClass.subjects[subjectIndex]}) من هذا الصف؟`,
    )
  )
    return;

  currentClass.subjects.splice(subjectIndex, 1);
  currentClass.students.forEach((st) => {
    if (st.grades) st.grades.splice(subjectIndex, 1);
  });

  saveDatabase();
  renderClassSubjectsManager();
  renderStudentsTable();
  renderTeacherSubjectsCheckboxes();
};

document
  .getElementById("add-class-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isAdmin()) return;

    const nameInput = document.getElementById("new-class-name");
    const sectionInput = document.getElementById("new-class-section");
    const name = nameInput.value.trim();
    const section = sectionInput.value.trim();

    if (!name || !section) return;

    db.classes.push({
      id: Date.now(),
      name: `الصف ${name}`,
      section: section,
      subjects: [...defaultSubjects],
      students: [],
    });

    saveDatabase();
    nameInput.value = "";
    sectionInput.value = "";
    renderClassesList();
    renderTeacherSubjectsCheckboxes();
  });

window.deleteClass = function (event, classId) {
  event.stopPropagation();
  if (!isAdmin()) return;

  const targetClass = db.classes.find((c) => c.id === classId);
  if (!targetClass) return;

  if (
    !confirm(
      `هل أنت متأكد من حذف (${targetClass.name} - ${targetClass.section}) بجميع طلابه؟`,
    )
  )
    return;

  db.classes = db.classes.filter((c) => c.id !== classId);
  saveDatabase();
  renderClassesList();
  renderTeacherSubjectsCheckboxes();
};

document
  .getElementById("clear-all-grades-btn")
  .addEventListener("click", function () {
    if (!isAdmin()) return;

    if (
      !confirm(
        "تحذير للمدير:\nهل تريد تصفير جميع العلامات في كافة الصفوف والشعب؟\n(ملاحظة: ستتم المحافظة على أسماء الطلاب وأكوادهم).",
      )
    )
      return;

    db.classes.forEach((cls) => {
      cls.students.forEach((st) => {
        st.grades = new Array(cls.subjects.length).fill("");
      });
    });

    saveDatabase();
    renderClassesList();
    alert("تم تصفير جميع العلامات بنجاح!");
  });

function renderTeachersListForAdmin() {
  if (!isAdmin()) return;
  const listContainer = document.getElementById("teachers-list");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  db.users
    .filter((u) => u.role === "teacher")
    .forEach((t) => {
      const subsText =
        t.allowedSubjects && t.allowedSubjects.length > 0
          ? t.allowedSubjects.join(", ")
          : "جميع المواد";
      const chip = document.createElement("div");
      chip.className = "teacher-chip";
      chip.innerHTML = `
            <div>
              <strong>👨‍🏫 ${t.username}</strong> (${t.password})<br>
              <small><b>الصفة:</b> ${t.title || "غير محدد"} | <b>المواد المسموحة:</b> ${subsText}</small>
            </div>
            <button class="delete-teacher-btn" onclick="deleteTeacher('${t.username}')">×</button>
        `;
      listContainer.appendChild(chip);
    });
}

document
  .getElementById("add-teacher-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isAdmin()) return;

    const username = document
      .getElementById("new-teacher-username")
      .value.trim();
    const password = document
      .getElementById("new-teacher-password")
      .value.trim();
    const title = document.getElementById("new-teacher-title").value.trim();

    const checkboxes = document.querySelectorAll(
      'input[name="teacher-subject-item"]:checked',
    );
    const allowedSubjects = Array.from(checkboxes).map((cb) => cb.value);

    if (!username || !password || !title) return;
    if (db.users.some((u) => u.username === username)) {
      alert("اسم المستخدم موجود مسبقاً!");
      return;
    }

    db.users.push({
      username,
      password,
      role: "teacher",
      title,
      allowedSubjects,
    });
    saveDatabase();
    document.getElementById("new-teacher-username").value = "";
    document.getElementById("new-teacher-password").value = "";
    document.getElementById("new-teacher-title").value = "";

    document
      .querySelectorAll('input[name="teacher-subject-item"]')
      .forEach((cb) => (cb.checked = false));

    renderTeachersListForAdmin();
  });

window.deleteTeacher = function (username) {
  if (!isAdmin()) return;
  if (!confirm(`هل أنت متأكد من حذف حساب المعلم (${username})؟`)) return;

  db.users = db.users.filter(
    (u) => !(u.username === username && u.role === "teacher"),
  );
  saveDatabase();
  renderTeachersListForAdmin();
};

// ==========================================
// 5. تصدير نتائج Excel (XLSX)
// ==========================================
function buildClassSheetData(cls) {
  const headerRow = [
    "الرقم",
    "كود الطالب",
    "اسم الطالب",
    "الصف",
    "الشعبة",
    ...cls.subjects,
    "المجموع",
    "المعدل المئوي (%)",
  ];

  const rows = [headerRow];

  cls.students.forEach((student, idx) => {
    const { total, avg } = calculateStudentStats(student.grades);
    const gradesRow = [];
    cls.subjects.forEach((_, i) => {
      gradesRow.push(
        student.grades[i] !== "" && student.grades[i] !== undefined
          ? student.grades[i]
          : "",
      );
    });
    rows.push([
      idx + 1,
      student.code || "",
      student.name,
      cls.name,
      cls.section || "الشعبة أ",
      ...gradesRow,
      total,
      `${avg}%`,
    ]);
  });

  return rows;
}

document
  .getElementById("export-all-xlsx-btn")
  .addEventListener("click", function () {
    if (!isAdmin()) return;
    if (typeof XLSX === "undefined") {
      alert("مكتبة الإكسل غير متوفرة حالياً.");
      return;
    }

    const workbook = XLSX.utils.book_new();
    db.classes.forEach((cls, index) => {
      const sheetData = buildClassSheetData(cls);
      const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
      worksheet["!views"] = [{ rightToLeft: true }];
      let sheetName = `${cls.name} - ${cls.section || index + 1}`.substring(
        0,
        31,
      );
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    });

    XLSX.writeFile(workbook, "نتائج_مدرسة_الأخوة_الابتدائية_الشاملة.xlsx");
  });

exportClassXlsxBtn.addEventListener("click", function () {
  if (!isAdmin()) return;
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  const workbook = XLSX.utils.book_new();
  const sheetData = buildClassSheetData(currentClass);
  const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
  worksheet["!views"] = [{ rightToLeft: true }];

  const sheetName = `${currentClass.name} ${currentClass.section || ""}`
    .trim()
    .substring(0, 31);
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  XLSX.writeFile(
    workbook,
    `نتائج_${currentClass.name}_${currentClass.section || ""}.xlsx`,
  );
});

// ==========================================
// 6. عرض الصفوف الدراسية وجدول الطلاب
// ==========================================
function renderClassesList() {
  classesGrid.innerHTML = "";

  db.classes.forEach((cls) => {
    const sectionName = cls.section || "الشعبة أ";
    const deleteBtnHTML = isAdmin()
      ? `<button class="delete-class-btn" onclick="deleteClass(event, ${cls.id})">حذف الصف</button>`
      : "";

    const card = document.createElement("div");
    card.className = "class-card";
    card.innerHTML = `
            <div class="card-top-bar">
                <span class="class-badge">📌 ${sectionName}</span>
                ${deleteBtnHTML}
            </div>
            <h3>${cls.name}</h3>
            <p>اضغط لفتح قائمة الطلاب ورصد العلامات والتقديرات</p>
            <div class="class-stats">
                <span>👥 عدد الطلاب: ${cls.students.length}</span>
                <span>📚 ${cls.subjects.length} مواد</span>
            </div>
        `;
    card.addEventListener("click", () => openClassPage(cls.id));
    classesGrid.appendChild(card);
  });
}

function openClassPage(classId) {
  selectedClassId = classId;
  const currentClass = db.classes.find((c) => c.id === classId);
  if (!currentClass) return;

  const sectionLabel = currentClass.section ? ` (${currentClass.section})` : "";
  currentClassTitle.textContent = `كشف العلامات والتقديرات: ${currentClass.name}${sectionLabel}`;
  renderClassSubjectsManager();
  renderStudentsTable();
  showPage("students");
}

function renderTableHeaders() {
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  let subjectsHeadersHTML = "";
  currentClass.subjects.forEach((subj) => {
    subjectsHeadersHTML += `<th>${subj}</th>`;
  });

  const adminHeaderCell = isAdmin() ? `<th>إجراءات المدير</th>` : "";

  tableHeadersRow.innerHTML = `
        <th>#</th>
        <th>كود الطالب</th>
        <th class="student-name-col">اسم الطالب</th>
        ${subjectsHeadersHTML}
        <th>المجموع</th>
        <th>المعدل</th>
        ${adminHeaderCell}
    `;
}

function renderStudentsTable() {
  renderTableHeaders();
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  studentsTableBody.innerHTML = "";

  currentClass.students.forEach((student, index) => {
    const tr = document.createElement("tr");
    const { total, avg } = calculateStudentStats(student.grades);

    let inputsHTML = "";
    currentClass.subjects.forEach((subj, i) => {
      const val = student.grades[i] !== undefined ? student.grades[i] : "";
      const isAllowed = canEditSubject(subj);
      const disabledAttr = isAllowed
        ? ""
        : "disabled title='غير مسموح لك بتعبئة هذه المادة'";
      const disabledClass = isAllowed ? "" : "disabled-grade-input";

      inputsHTML += `
                <td>
                    <input 
                        type="text" 
                        list="estimations-list"
                        class="grade-input ${disabledClass}" 
                        placeholder="درجة أو تقدير"
                        value="${val}" 
                        ${disabledAttr}
                        oninput="updateGrade(${student.id}, ${i}, this.value)"
                    >
                </td>
            `;
    });

    let adminActionsCell = "";
    if (isAdmin()) {
      adminActionsCell = `
        <td>
          <div class="admin-row-actions">
            <button class="btn btn-cyan btn-sm" onclick="transferStudent(${student.id})" title="نقل الطالب إلى صف آخر">نقل</button>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">حذف</button>
          </div>
        </td>
      `;
    }

    tr.innerHTML = `
            <td>${index + 1}</td>
            <td><b>${student.code || "--"}</b></td>
            <td class="student-name-col">${student.name}</td>
            ${inputsHTML}
            <td class="total-cell" id="total-${student.id}">${total}</td>
            <td><span class="avg-badge" id="avg-${student.id}">${avg}%</span></td>
            ${adminActionsCell}
        `;

    studentsTableBody.appendChild(tr);
  });
}

function parseGradeValue(val) {
  if (val === "" || val === undefined || val === null) return null;
  if (!isNaN(val)) return Number(val);

  const textVal = String(val).trim();
  if (textVal === "ممتاز") return 95;
  if (textVal === "جيد جداً" || textVal === "جيد جدا") return 85;
  if (textVal === "جيد") return 75;
  if (textVal === "متوسط") return 65;
  if (textVal === "ضعيف") return 50;

  const parsed = Number(textVal);
  return isNaN(parsed) ? 0 : parsed;
}

window.updateGrade = function (studentId, subjectIndex, value) {
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  const student = currentClass.students.find((s) => s.id === studentId);
  if (!student) return;

  let cleanValue = value.trim();
  if (cleanValue !== "") {
    if (!isNaN(cleanValue)) {
      let num = Number(cleanValue);
      if (num > 100) num = 100;
      if (num < 0) num = 0;
      cleanValue = num;
    }
  }

  student.grades[subjectIndex] = cleanValue;
  saveDatabase();

  const { total, avg } = calculateStudentStats(student.grades);
  document.getElementById(`total-${studentId}`).textContent = total;
  document.getElementById(`avg-${studentId}`).textContent = `${avg}%`;
};

function calculateStudentStats(grades) {
  let total = 0;
  let enteredCount = 0;

  if (!grades) return { total: 0, avg: "0.0" };

  grades.forEach((g) => {
    if (g !== "" && g !== undefined && g !== null) {
      const numericVal = parseGradeValue(g);
      if (numericVal !== null) {
        total += numericVal;
        enteredCount++;
      }
    }
  });

  const avg = enteredCount > 0 ? (total / grades.length).toFixed(1) : "0.0";
  return { total, avg };
}

addStudentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!isAdmin()) return;

  const nameInput = document.getElementById("new-student-name");
  const codeInput = document.getElementById("new-student-code");
  const studentName = nameInput.value.trim();
  const studentCode = codeInput.value.trim().toUpperCase();

  if (!studentName || !studentCode) return;

  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  let codeExists = false;
  db.classes.forEach((cls) => {
    cls.students.forEach((st) => {
      if (st.code && st.code.toUpperCase() === studentCode) codeExists = true;
    });
  });

  if (codeExists) {
    alert("كود الطالب هذا مستخدم مسبقاً لطالب آخر!");
    return;
  }

  currentClass.students.push({
    id: Date.now(),
    code: studentCode,
    name: studentName,
    grades: new Array(currentClass.subjects.length).fill(""),
  });

  saveDatabase();
  nameInput.value = "";
  codeInput.value = "";
  renderStudentsTable();
});

window.deleteStudent = function (studentId) {
  if (!isAdmin()) return;
  if (!confirm("هل أنت متأكد من حذف هذا الطالب وسجل درجاته؟")) return;

  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  currentClass.students = currentClass.students.filter(
    (s) => s.id !== studentId,
  );
  saveDatabase();
  renderStudentsTable();
};

document
  .getElementById("back-to-classes-btn")
  .addEventListener("click", function () {
    showPage("classes");
  });

// ==========================================
// 7. عرض شهادة الطالب الفردية
// ==========================================
function renderStudentReportPage(student, cls) {
  document.getElementById("rep-student-name").textContent = student.name;
  document.getElementById("rep-student-code").textContent =
    student.code || "--";
  document.getElementById("rep-student-class").textContent =
    `${cls.name} (${cls.section || "الشعبة أ"})`;

  const tbody = document.getElementById("report-grades-tbody");
  tbody.innerHTML = "";

  cls.subjects.forEach((subj, idx) => {
    const val =
      student.grades[idx] !== undefined && student.grades[idx] !== ""
        ? student.grades[idx]
        : "لم ترصد بعد";
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td><b>${subj}</b></td>
            <td>${val}</td>
        `;
    tbody.appendChild(tr);
  });

  const { total, avg } = calculateStudentStats(student.grades);
  const maxPoints = cls.subjects.length * 100;
  document.getElementById("rep-total").textContent = `${total} / ${maxPoints}`;
  document.getElementById("rep-avg").textContent = `${avg}%`;
}

function showPage(pageName) {
  loginPage.classList.add("hidden");
  classesPage.classList.add("hidden");
  adminDashboardPage.classList.add("hidden");
  studentsPage.classList.add("hidden");
  studentReportPage.classList.add("hidden");

  if (pageName === "login") {
    mainHeader.classList.add("hidden");
    loginPage.classList.remove("hidden");
  } else if (pageName === "classes") {
    mainHeader.classList.remove("hidden");
    classesPage.classList.remove("hidden");
    renderClassesList();
  } else if (pageName === "admin-dashboard") {
    mainHeader.classList.remove("hidden");
    adminDashboardPage.classList.remove("hidden");
    renderTeachersListForAdmin();
    renderTeacherSubjectsCheckboxes();
  } else if (pageName === "students") {
    mainHeader.classList.remove("hidden");
    studentsPage.classList.remove("hidden");
  } else if (pageName === "report") {
    mainHeader.classList.add("hidden");
    studentReportPage.classList.remove("hidden");
  }
}

document.getElementById("reset-db-btn").addEventListener("click", function () {
  if (!isAdmin()) return;
  if (confirm("تحذير للمدير: هل تريد إعادة ضبط المصنع ومسح كافة البيانات؟")) {
    localStorage.removeItem(DB_KEY);
    db = loadDatabase();
    renderTeachersListForAdmin();
    renderClassesList();
  }
});

// ==========================================
// 8. التحكم بالقائمة الجانبية في شاشات الجوال
// ==========================================
const menuToggleBtn = document.getElementById("menu-toggle-btn");
const sideMenu = document.getElementById("side-menu");
const menuOverlay = document.getElementById("menu-overlay");

function toggleMobileMenu() {
  sideMenu.classList.toggle("open");
  menuOverlay.classList.toggle("open");
}

if (menuToggleBtn && menuOverlay) {
  menuToggleBtn.addEventListener("click", toggleMobileMenu);
  menuOverlay.addEventListener("click", toggleMobileMenu);
}

document.getElementById("logout-btn").addEventListener("click", function () {
  if (sideMenu.classList.contains("open")) {
    toggleMobileMenu();
  }
});
