// الوصف
// التحدي:
// اكتب برنامجًا يقوم بما يلي:

// إنشاء متغير يمثل سعر منتج (number).
// إنشاء متغير يمثل نسبة الضريبة (number).
// حساب السعر النهائي بعد إضافة الضريبة.
// طباعة السعر قبل الضريبة، قيمة الضريبة المضافة، والسعر النهائي.
// أضف خطوة للتحقق إذا كان السعر النهائي أكبر من 100 وطبع رسالة “مرتفع” أو “مقبول”.
// الخطوات لحل المسألة:
// إنشاء المتغيرات:

// متغير productPrice يحتوي على قيمة السعر الأساسي.
// متغير taxRate يحتوي على نسبة الضريبة (كمثال: 0.15 أي 15%).
// حساب الضريبة:

// أنشئ متغيرًا جديدًا باسم taxAmount ليخزن قيمة الضريبة (السعر × نسبة الضريبة).
// حساب السعر النهائي:

// أنشئ متغيرًا باسم finalPrice ليخزن المجموع الكلي (السعر + الضريبة).
// الطباعة:

// استخدم console.log لعرض:
// السعر الأساسي.
// قيمة الضريبة.
// السعر النهائي.
// التحقق من السعر النهائي:

// إذا كان finalPrice > 100 اطبع “السعر مرتفع”.
// إذا كان أقل أو يساوي 100 اطبع “السعر مقبول”.
// الهدف من التحدي:
// التعامل مع الأرقام: العمليات الحسابية الأساسية (الضرب، الجمع).
// فهم مفهوم المتغيرات المرتبطة بالأرقام: مثل استخدام متغير لحساب قيمة بناءً على متغيرات أخرى.
// التفرعات الشرطية: استخدام if لتحديد مسار بناءً على شروط.


let productPrice = 100;
let taxRate = 0.15;
let taxAmount = productPrice * taxRate;
let finalPrice = productPrice + taxAmount;
console.log("Product price :", productPrice);
console.log("Tax Amount :", taxAmount);
console.log("Final price :", finalPrice);
if (finalPrice > 100) {
    console.log("The product is expensive");
    } else {
        console.log("The price is acceptable");
        }