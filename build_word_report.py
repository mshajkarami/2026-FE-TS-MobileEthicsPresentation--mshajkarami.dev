import docx
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def create_report():
    doc = docx.Document()

    # تنظیم حاشیه‌های استاندارد (۲.۵ سانتی‌متر معادل حدود ۱ اینچ)
    for section in doc.sections:
        section.top_margin = Inches(0.9)
        section.bottom_margin = Inches(0.9)
        section.left_margin = Inches(0.9)
        section.right_margin = Inches(0.9)
        section.page_width = Inches(8.27)  # A4
        section.page_height = Inches(11.69) # A4

    def set_cell_background(cell, fill_hex):
        shading = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
        cell._tc.get_or_add_tcPr().append(shading)

    def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
        tcPr = cell._tc.get_or_add_tcPr()
        tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
        tcPr.append(tcMar)

    def add_p(text, font_size=13, is_bold=False, align=WD_ALIGN_PARAGRAPH.JUSTIFY, color=RGBColor(30, 41, 59), space_after=6, space_before=0, line_spacing=1.5):
        p = doc.add_paragraph()
        p.alignment = align
        p.paragraph_format.line_spacing = line_spacing
        p.paragraph_format.space_after = Pt(space_after)
        p.paragraph_format.space_before = Pt(space_before)
        
        # فعال‌سازی RTL بر روی پاراگراف
        pPr = p._p.get_or_add_pPr()
        pPr.append(parse_xml(f'<w:bidi {nsdecls("w")}/>'))

        run = p.add_run(text)
        run.bold = is_bold
        run.font.size = Pt(font_size)
        run.font.color.rgb = color
        
        # اعمال فونت B Nazanin برای کاراکترهای فارسی و لاتین
        rPr = run._r.get_or_add_rPr()
        rFonts = parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="B Nazanin" w:hAnsi="B Nazanin" w:cs="B Nazanin"/>')
        rPr.append(rFonts)
        rPr.append(parse_xml(f'<w:rtl {nsdecls("w")}/>'))
        return p

    def add_heading(text, level=1):
        if level == 1:
            size = 16
            color = RGBColor(15, 23, 42)
            space_before = 14
            space_after = 6
        elif level == 2:
            size = 14.5
            color = RGBColor(30, 58, 138)
            space_before = 10
            space_after = 4
        else:
            size = 13.5
            color = RGBColor(51, 65, 85)
            space_before = 8
            space_after = 3

        return add_p(text, font_size=size, is_bold=True, align=WD_ALIGN_PARAGRAPH.RIGHT, color=color, space_before=space_before, space_after=space_after, line_spacing=1.3)

    # ------------------ صفحه ۱: کادر اطلاعات رسمی و مقدمه جامع ------------------
    # هدر رسمی دانشگاه
    add_p("دانشگاه فنی و حرفه‌ای (ملی مهارت) استان اصفهان • دانشکده فنی شهید محسن مهاجر", font_size=12, is_bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, color=RGBColor(71, 85, 105), space_after=2)
    add_p("گزارش نهایی پروژه پژوهشی درس اخلاق حرفه‌ای مهندسی", font_size=12, is_bold=False, align=WD_ALIGN_PARAGRAPH.CENTER, color=RGBColor(100, 116, 139), space_after=10)

    # کادر عنوان پژوهش
    title_table = doc.add_table(rows=1, cols=1)
    title_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = title_table.cell(0, 0)
    set_cell_background(cell, "0F172A")
    set_cell_margins(cell, top=160, bottom=160, left=200, right=200)
    
    tp = cell.paragraphs[0]
    tp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    tp.paragraph_format.line_spacing = 1.3
    tp.paragraph_format.space_after = Pt(4)
    tpPr = tp._p.get_or_add_pPr()
    tpPr.append(parse_xml(f'<w:bidi {nsdecls("w")}/>'))
    trun = tp.add_run("کالبدشکافی اخلاق در زیست‌بوم نرم‌افزارهای موبایل")
    trun.bold = True
    trun.font.size = Pt(17)
    trun.font.color.rgb = RGBColor(248, 250, 252)
    rPr = trun._r.get_or_add_rPr()
    rPr.append(parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="B Nazanin" w:hAnsi="B Nazanin" w:cs="B Nazanin"/>'))
    rPr.append(parse_xml(f'<w:rtl {nsdecls("w")}/>'))

    sub_p = cell.add_paragraph()
    sub_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    sub_p.paragraph_format.line_spacing = 1.2
    sub_p.paragraph_format.space_after = Pt(0)
    subPr = sub_p._p.get_or_add_pPr()
    subPr.append(parse_xml(f'<w:bidi {nsdecls("w")}/>'))
    srun = sub_p.add_run("تحلیل تجربی ۵.۸ میلیون بازخورد کاربران در گوگل پلی، ۱۶ بُعد اخلاقی، و چارچوب توسعه مسئولانه")
    srun.font.size = Pt(11)
    srun.font.color.rgb = RGBColor(148, 163, 184)
    srPr = srun._r.get_or_add_rPr()
    srPr.append(parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="B Nazanin" w:hAnsi="B Nazanin" w:cs="B Nazanin"/>'))
    srPr.append(parse_xml(f'<w:rtl {nsdecls("w")}/>'))

    add_p("", font_size=6, space_after=4)

    # مشخصات دانشجو و استاد
    meta_table = doc.add_table(rows=2, cols=2)
    meta_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    for r in range(2):
        for c in range(2):
            cell = meta_table.cell(r, c)
            set_cell_background(cell, "F8FAFC")
            set_cell_margins(cell, top=80, bottom=80, left=120, right=120)

    # پر کردن سلول‌های متادیتا
    def set_meta_cell(cell, label, val):
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        p.paragraph_format.line_spacing = 1.2
        pPr = p._p.get_or_add_pPr()
        pPr.append(parse_xml(f'<w:bidi {nsdecls("w")}/>'))
        r1 = p.add_run(label + ": ")
        r1.bold = True
        r1.font.size = Pt(11)
        r1.font.color.rgb = RGBColor(30, 41, 59)
        r1._r.get_or_add_rPr().append(parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="B Nazanin" w:hAnsi="B Nazanin" w:cs="B Nazanin"/>'))
        r2 = p.add_run(val)
        r2.font.size = Pt(11)
        r2.font.color.rgb = RGBColor(71, 85, 105)
        r2._r.get_or_add_rPr().append(parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="B Nazanin" w:hAnsi="B Nazanin" w:cs="B Nazanin"/>'))

    set_meta_cell(meta_table.cell(0, 0), "استاد راهنما و مدرس", "سرکار خانم آرزو صبری")
    set_meta_cell(meta_table.cell(0, 1), "نگارنده و پژوهشگر", "محمد صالح حاج‌کرمی")
    set_meta_cell(meta_table.cell(1, 0), "مقطع و رشته تحصیلی", "کارشناسی مهندسی کامپیوتر")
    set_meta_cell(meta_table.cell(1, 1), "تاریخ موعد تحویل", "۲۱ آذرماه ۱۴۰۵")

    add_p("", font_size=8, space_after=6)

    # چکیده پژوهش
    add_heading("چکیده اجرایی پژوهش", level=2)
    add_p(
        "در عصر حاضر با نفوذ فراتر از ۸۵ درصدی تلفن‌های هوشمند در بافت روزمره جامعه، نرم‌افزارهای موبایل به صمیمی‌ترین ابزار تعاملی تاریخ بشریت مبدل شده‌اند. این نفوذ فراگیر هرچند مزایای بی‌شماری آفریده، اما به دلیل انحصار شرکت‌های فناوری و سرعت سرسام‌آور توسعه که فراتر از توان نهادهای ناظر سنتی است، چالش‌های اخلاقی بی‌سابقه‌ای شامل نقض فاحش حریم خصوصی، تبعیض‌های الگوریتمی، تضعیف سلامت روان و سرقت هویت را پدید آورده است. این گزارش جامع، یافته‌های مقاله مرجع منتشرشده در سال ۲۰۲۴ توسط انتشارات Springer Nature در ژورنال معتبر Empirical Software Engineering را با تکیه بر تحلیل میدانی ۵,۸۶۴,۱۸۸ نظر کاربران در گوگل پلی استور واکاوی می‌کند. در این اثر، با عبور از رویکردهای محدود سنتی، یک ماتریس ۱۶ بُعدی از دغدغه‌های اخلاقی کاربران استخراج شده و مرزهای سرایت آسیب‌های نرم‌افزاری به جهان فیزیکی تبیین می‌گردد. همچنین با اتکا به مدل‌های یادگیری عمیق نظیر BERT و دقت F1 برابر با ۰.۹۴، یک چارچوب عملیاتی چهارگانه برای مهندسان نرم‌افزار موبایل ارائه می‌شود تا ملاحظات اخلاقی از یک مفهوم انتزاعی به معیارهای مهندسی در چرخه CI/CD تبدیل گردند.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    # ۱. مقدمه و بیان مسئله
    add_heading("۱. مقدمه و بیان مسئله: چرایی بحران اخلاق در نرم‌افزارهای موبایل", level=1)
    add_p(
        "سیستم‌های نرم‌افزاری مدرن، صرفاً خطوطی از کدهای اجرایی برای پردازش داده‌ها نیستند، بلکه محیط‌هایی هستند که ساختار تصمیم‌گیری، تعاملات اجتماعی، روانی و اقتصادی میلیاردها انسان را شکل می‌دهند. در اکوسیستم موبایل، این اثرگذاری به مراتب عمیق‌تر از نرم‌افزارهای دسکتاپ است؛ زیرا دستگاه‌های هوشمند به صورت ۲۴ ساعته در مجاورت فیزیکی کاربران قرار داشته و به حساس‌ترین حسگرها شامل موقعیت مکانی لحظه‌ای (GPS)، دوربین، میکروفون، اطلاعات زیستی و فهرست مخاطبان دسترسی دارند.",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "با این حال، توسعه نرم‌افزارهای تجاری در سال‌های اخیر به سمتی سوق یافته که در ادبیات مهندسی از آن تحت عنوان «اقتصاد توجه (Attention Economy)» یاد می‌شود. در این الگو، درآمد پلتفرم‌ها مستقیماً با میزان زمان صرف‌شده توسط کاربر و حجم داده‌های استخراج‌شده گره خورده است. چنین معماری بیزینسی، توسعه‌دهندگان را به سمت طراحی الگوهای فریبنده (Dark Patterns)، لوپ‌های دوپامینی اعتیادآور و جمع‌آوری بی‌رویه اطلاعات شخصی سوق داده است. از سوی دیگر، سرعت بالای چرخه‌های انتشار سریع نرم‌افزار موجب شده است که نهادهای قانون‌گذار دولتی و استانداردهای حقوقی همواره چند گام عقب‌تر از فناوری‌های نوین حرکت کنند. بنابراین، آخرین و حیاتی‌ترین سد دفاعی برای حفظ کرامت، سلامت روان و امنیت شهروندان، تصمیمات فنی و وجدان حرفه‌ای خود مهندسان نرم‌افزار است.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    # ------------------ صفحه ۲: متدولوژی و تکامل چارچوب اخلاقی ------------------
    add_heading("۲. مشخصات و روش‌شناسی پژوهش تجربی مرجع (Springer Nature 2024)", level=1)
    add_p(
        "پژوهش مورد استناد در این گزارش با عنوان رسمی «The best ends by the best means: ethical concerns in app reviews» توسط نیلام تیخوری (Neelam Tjikhoeri)، لورن اولسون (Lauren Olson) و امیترزا گازمن (Emitza Guzman) از دانشکده علوم دانشگاه وریج آمستردام (Vrije Universiteit Amsterdam) هلند به انجام رسیده و در سال ۲۰۲۴ در ژورنال معتبر Empirical Software Engineering منتشر شده است. نویسندگان این پژوهش برای نخستین بار در حوزه مهندسی نرم‌افزار، به جای بررسی‌های خرد و تک‌موردی، صدای مستقیم و بی‌واسطه کاربران را در مقیاسی کلان به عنوان منبع استخراج الزامات اخلاقی مورد تحلیل قرار دادند.",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "این پژوهش به دنبال پاسخ‌گویی به سه سؤال اساسی بوده است: نخست اینکه کاربران چه مقولاتی از دغدغه‌های اخلاقی را در بازخوردهای خود ابراز می‌کنند و این دغدغه‌ها در بستر زمان چگونه تحت تأثیر وقایع اجتماعی دچار نوسان می‌شود (RQ1)؛ دوم آنکه نظرات حاوی مضامین اخلاقی چه ویژگی‌های آماری متمایزی از قبیل امتیاز رضایت، طول کلمات و محبوبیت اجتماعی ثبت می‌کنند (RQ2)؛ و سومین مسئله بررسی پتانسیل خودکارسازی و استفاده از پردازش زبان طبیعی برای رصد پیوسته این چالش‌ها در مهندسی نرم‌افزار است (RQ3).",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    add_heading("۲.۱. پایگاه داده و فرآیند نمونه‌گیری تجربی", level=2)
    add_p(
        "دیتاست اولیه این تحقیق شامل ۵,۸۶۴,۱۸۸ نظر واقعی از کاربران گوگل پلی استور به عنوان بزرگ‌ترین فروشگاه برنامه‌های اندرویدی در جهان است. محققان به منظور پوشش دامنه‌های مختلف رفتاری، ۱۰ اپلیکیشن پیشرو در ۴ حوزه راهبردی را برگزیدند: شبکه‌های اجتماعی و اشتراک محتوا (تیک‌تاک، فیس‌بوک، اینستاگرام)، رسانه‌های ویدیویی (یوتیوب)، شبکه‌های حرفه‌ای و استخدامی (لینکدین)، پلتفرم‌های ارتباطات سازمانی (زوم)، اقتصاد اشتراکی و خدمات شهری (اوبر، وینتد) و زیست‌بوم خانه‌های هوشمند و دستیارهای صوتی (الکسا، گوگل هوم).",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "از آنجا که در دور اول ارزیابی تصادفی مشخص گردید تنها ۲ درصد نظرات عمومی حاوی نکات اخلاقی هستند، محققان با استفاده از تکنیک Snowballing فهرستی متشکل از ۱۰۹ کلمه کلیدی تخصصی را تدوین نموده و غلظت نظرات اخلاقی را در نمونه نهایی به ۳۰ درصد ارتقا دادند. سپس نمونه‌ای شاخص مشتمل بر ۳,۱۰۱ نظر برای حاشیه‌نویسی دقیق انتخاب شد. برای تضمین اتکاپذیری علمی، دو ارزیاب مستقل طی ۹ دوره آزمایشی، کدهای اخلاقی را ارزیابی کردند تا ضریب توافق به شاخص فوق‌العاده Cohen's Kappa = 0.91 دست یافت که نشان‌دهنده دقت بالای متدولوژی تحقیق است.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    add_heading("۲.۲. تحول چارچوب اخلاقی: گذار از نظریه رایت به زیست‌بوم مدرن موبایل", level=2)
    add_p(
        "نقطه آغازین نظری این پژوهش، چارچوب ارزیابی اثرات اخلاقی فناوری اطلاعات دیوید رایت (Wright, 2011) بود. با این حال، پژوهشگران به سرعت دریافتند که چارچوب رایت پیش از ظهور گسترده اکوسیستم موبایل و شبکه‌های اجتماعی مبتنی بر الگوریتم تدوین شده و برخی مفاهیم آن بسیار انتزاعی و دانشگاهی هستند. مفاهیمی نظیر «طراحی حساس به ارزش» یا «کرامت انسانی و جایگزینی تماس انسانی» در کلام عامیانه کاربران استورها دیده نمی‌شد. از این رو، محققان با حفظ مقولات پایه (شامل پایداری، ایمنی، دسترس‌پذیری، پاسخگویی، شفافیت، حریم خصوصی و تبعیض)، ۹ دغدغه اخلاقی حاد و نوین را مستقیماً از نظرات کاربران استخراج و به مدل افزودند: طراحی اعتیادآور، سرقت هویت و حساب‌های جعلی (Catfishing)، سانسور سازمان‌یافته، سرقت معنوی محتوا، تبلیغات گمراه‌کننده، آزار سایبری و قلدری، محتوای نامناسب و مستهجن، اخبار جعلی و گمراه‌کننده، و کلاهبرداری مالی.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    # ------------------ صفحه ۳: ماتریس ۱۶ بعدی و تفکیک درونی/بیرونی ------------------
    add_heading("۳. ماتریس ۱۶ بُعدی دغدغه‌های اخلاقی و تحلیل آماری نظرات (RQ1)", level=1)
    add_p(
        "تحلیل تفصیلی نمونه نهایی نشان داد که برخلاف دیدگاه‌های سنتی که اخلاق نرم‌افزار را عمدتاً در سرقت پسورد و نشت داده خلاصه می‌کردند، دغدغه نخست و مطلق کاربران با فراوانی ۹.۹ درصد، «سانسور و سرکوب محتوا (Censorship)» است. کاربران به شدت نسبت به حذف بدون توضیح پست‌ها، پنهان‌سازی دیدگاه‌های منتقد (Shadow-banning) و تعصبات اعمال‌شده در فکت‌چکینگ پلتفرم‌ها معترض بوده‌اند.",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "رتبه‌های بعدی فراوانی به ترتیب به «سرقت هویت (۶.۱٪)» و «ایمنی جانی کاربر (۶.۱٪)» اختصاص دارد. پدیده سرقت هویت به ویژه در اینستاگرام و فیس‌بوک در قالب جعل پروفایل و فریب دیگران برای اخذ وجه یا روابط ناسالم تبلور یافته است. در جایگاه‌های بعدی، طراحی اعتیادآور (۵.۹٪)، حریم خصوصی و شنود مخفیانه (۵.۷٪)، تبعیض نژادی و الگوریتمی (۵.۵٪)، کلاهبرداری مالی (۵.۳٪)، محتوای نامناسب و خشن (۵.۰٪) و اطلاعات گمراه‌کننده (۵.۰٪) قرار دارند.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    # جدول خلاصه ابعاد اخلاقی
    add_heading("جدول ۱: توزیع شاخص‌های آماری ابعاد اخلاقی بر اساس پژوهش ESE 2024", level=3)
    table = doc.add_table(rows=9, cols=5)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    headers = ["بُعد اخلاقی", "سهم نسبی", "میانگین ستاره", "طول کلمات", "میانگین لایک"]
    
    # سرستون‌ها
    for c, h in enumerate(headers):
        cell = table.cell(0, c)
        set_cell_background(cell, "1E293B")
        set_cell_margins(cell, top=80, bottom=80, left=80, right=80)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        pPr = p._p.get_or_add_pPr()
        pPr.append(parse_xml(f'<w:bidi {nsdecls("w")}/>'))
        run = p.add_run(h)
        run.bold = True
        run.font.size = Pt(10.5)
        run.font.color.rgb = RGBColor(255, 255, 255)
        run._r.get_or_add_rPr().append(parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="B Nazanin" w:hAnsi="B Nazanin" w:cs="B Nazanin"/>'))

    # داده‌های جدول
    data = [
        ("سانسور و سرکوب محتوا", "۹.۹٪", "۱.۱۸", "۴۲.۸", "۱.۶۹"),
        ("سرقت هویت و جعل اکانت", "۶.۱٪", "۲.۵۸", "۴۲.۹", "۸.۹۲"),
        ("ایمنی جانی و مخاطرات فیزیکی", "۶.۱٪", "۱.۷۷", "۶۸.۱", "۴.۸۷"),
        ("طراحی اعتیادآور و لوپ عصبی", "۵.۹٪", "۴.۰۴", "۱۸.۵", "۰.۷۸"),
        ("حریم خصوصی و شنود داده", "۵.۷٪", "۱.۵۵", "۳۳.۱", "۵.۵۵"),
        ("تبعیض الگوریتمی و نژادی", "۵.۵٪", "۱.۳۳", "۲۹.۹", "۵.۷۲"),
        ("کلاهبرداری و فریب مالی", "۵.۳٪", "۱.۹۸", "۲۸.۷", "۳.۱۱"),
        ("دسترس‌پذیری برای توانیابان", "۱.۵٪", "۲.۳۷", "۳۶.۷", "۱۰۸.۵"),
    ]

    for row_idx, row_data in enumerate(data, start=1):
        bg = "F8FAFC" if row_idx % 2 == 1 else "FFFFFF"
        for col_idx, text_val in enumerate(row_data):
            cell = table.cell(row_idx, col_idx)
            set_cell_background(cell, bg)
            set_cell_margins(cell, top=60, bottom=60, left=60, right=60)
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            pPr = p._p.get_or_add_pPr()
            pPr.append(parse_xml(f'<w:bidi {nsdecls("w")}/>'))
            run = p.add_run(text_val)
            run.font.size = Pt(10)
            run.font.color.rgb = RGBColor(30, 41, 59)
            if col_idx == 0:
                run.bold = True
            run._r.get_or_add_rPr().append(parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="B Nazanin" w:hAnsi="B Nazanin" w:cs="B Nazanin"/>'))

    add_p("", font_size=6, space_after=4)

    add_heading("۳.۱. تفکیک حیاتی دغدغه‌های درونی و بیرونی (Internal vs External)", level=2)
    add_p(
        "یکی از برجسته‌ترین دستاوردهای مفهومی این مقاله، مرزبندی دقیق میان دغدغه‌های درونی و بیرونی است. در ۹۲ درصد از کل نظرات مورد بررسی، تخلف اخلاقی در قلمرو درون نرم‌افزار رخ داده است (Internal)؛ نظیر بسته شدن ناحق یک حساب، عدم شفافیت در دسترسی به گالری، یا انتشار محتوای توهین‌آمیز در بخش نظرات. اما در ۸ درصد موارد، تصمیمات الگوریتمی و باگ‌های اخلاقی نرم‌افزار مستقیماً به جهان فیزیکی سرایت کرده و حیات مادی انسان‌ها را دستخوش بحران کرده‌اند (External).",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "بیشترین سهم دغدغه‌های بیرونی در اپلیکیشن اوبر (Uber) ثبت شد؛ جایی که کاربران از خطرات فیزیکی هولناک نظیر آزار جنسی مسافران توسط رانندگان، انحراف به مسیرهای مرگبار، رها کردن مسافر در بیابان و ایجاد موقعیت‌های تصادف به علت پاپ‌آپ‌های ناگهانی اپلیکیشن حین رانندگی گزارش داده‌اند. همچنین در تیک‌تاک، ترویج وایرال چالش‌های خطرناک از قبیل آتش زدن آینه‌ها یا مصرف بیش از حد داروها توسط نوجوانان، نمونه بارز سرایت کد غیراخلاقی به مرگ و جراحت در دنیای واقعی است. این تمایز به تیم‌های مهندسی هشدار می‌دهد که نقص‌های اخلاقی باید در بالاترین سطح اولویت ریسک قرار گیرند.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    # ------------------ صفحه ۴: رفتارشناسی، دسترس‌پذیری و هوش مصنوعی ------------------
    add_heading("۴. رفتارشناسی کاربران هنگام نقض اخلاق و آنومالی دسترس‌پذیری (RQ2)", level=1)
    add_p(
        "ارزیابی شاخص‌های کمی در بخش RQ2 ثابت کرد که رویارویی با نقض اخلاق، رفتار نگارشی کاربران را به شدت دگرگون می‌سازد. نخست، میانگین امتیاز نظرات اخلاقی به ۱.۸۹ ستاره سقوط می‌کند که در قیاس با میانگین ۲.۶۱ ستاره برای نظرات غیر اخلاقی، نشانگر یک ریزش شدید و پایدار در رضایت کاربر است. در این میان، دغدغه سانسور با میانگین ۱.۱۷ ستاره، خشمگین‌ترین طیف کاربران را تشکیل داده است.",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "دومین شاخص، حجم کلمات متن نظر است. در حالی که طول میانگین نظرات عادی ۲۷.۸ کلمه است، نظرات حاوی دغدغه اخلاقی با میانگین ۳۹.۳ کلمه به ثبت رسیده‌اند. دغدغه ایمنی جانی با میانگین ۶۸.۱ کلمه در صدر قرار دارد. این افزایش طول بیانگر آن است که کاربر هنگام مواجهه با بی‌عدالتی یا احساس خطر، وقت صرف کرده و با درد و تشریح جزییات، رنج خود را به جامعه بازگو می‌کند. سومین شاخص، تایید و لایک جمعی (Up-votes) است که در نظرات اخلاقی بیش از ۵ برابر نظرات عادی ثبت شده است (۱۶.۱۴ لایک در برابر ۳.۱۲ لایک عادی).",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    add_heading("۴.۱. پدیده دسترس‌پذیری (Accessibility): اوج همبستگی و وجدان جمعی جامعه", level=2)
    add_p(
        "شگفت‌انگیزترین یافته آماری کل مقاله مربوط به دغدغه دسترس‌پذیری برای افراد دارای معلولیت، کم‌بینایان و ناشنوایان است. این مقوله تنها ۱.۵ درصد از کل شکایات را به خود اختصاص داده بود، اما در شاخص تایید جمعی رکوردی دست‌نیافتنی بر جای گذاشت: میانگین خیره‌کننده ۱۰۸.۵ لایک به ازای هر نظر! (نزدیک‌ترین دسته بعدی شفافیت با ۴۸.۴ لایک بود).",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "این آنومالی یک درس بنیادین برای مهندسان نرم‌افزار دارد: توانیابان از نظر جمعیت آماری در اقلیت هستند، اما وجدان جمعی جامعه نسبت به محروم‌سازی آن‌ها فوق‌العاده حساس است. وقتی کاربری در استور می‌نویسد که برنامه فاقد زیرنویس برای برادر ناشنوایش است یا دکمه پرداخت توسط صفحه‌خوان TalkBack خوانده نمی‌شود، موجی از حمایت و خشم سایر کاربران برانگیخته می‌شود. طراحی فراگیر (Inclusive Design) دیگر یک قابلیت جانبی نیست، بلکه پیش‌شرط مشروعیت اخلاقی محصول است.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    add_heading("۵. اتوماسیون پایش اخلاقی با پردازش زبان طبیعی و مدل BERT (RQ3)", level=1)
    add_p(
        "با توجه به حجم میلیونی نظرات و عدم امکان بررسی دستی توسط تیم‌های پشتیبانی، پژوهشگران کارایی مدل‌های سنتی یادگیری ماشین (Random Forest, SVM, Naive Bayes, Logistic Regression) و مدل یادگیری عمیق ترنسفورمر BERT را بررسی کردند. نتایج آزمون‌ها نشان داد که مدل BERT با دقت، فراخوانی و امتیاز F1 برابر با ۰.۹۴ توانسته است با دقتی کم‌نظیر نظرات اخلاقی را از نظرات عادی تفکیک کند. همچنین در طبقه‌بندی باینری برای تشخیص خطرات فیزیکی و بیرونی (External)، مدل به امتیاز اعجاب‌انگیز F1 = 0.97 دست یافت.",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "این یافته اثبات می‌کند که فناوری‌های پردازش متن می‌توانند به عنوان ناظر اخلاقی در خطوط ادغام و استقرار مداوم (CI/CD) به کار گرفته شوند. تیم‌های توسعه می‌توانند سیستم‌های پایش بلادرنگی طراحی کنند که پس از انتشار هر به‌روزرسانی در گوگل پلی، به محض دریافت نخستین سیگنال‌های مربوط به رفتارهای خطرناک یا نقص‌های اخلاقی، هشدارهای خودکار برای مهندسان و تیم‌های پاسخگویی صادر نمایند.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    # ------------------ صفحه ۵: توصیه‌های مهندسی، نتیجه‌گیری و مراجع ------------------
    add_heading("۶. چارچوب عملیاتی چهارگانه برای مهندسان نرم‌افزار موبایل", level=1)
    add_p(
        "نویسندگان بر اساس نتایج این مطالعه عظیم تجربی، چهار توصیه ملموس و عملیاتی را برای جامعه مهندسی نرم‌افزار و توسعه‌دهندگان موبایل تدوین کرده‌اند:",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "۱. بازطراحی و استانداردسازی سیستم‌های گزارش تخلفات (Reporting Systems): ایجاد محدودیت‌های کاراکتری شدید (نظیر سقف ۱۴۰ حرف در تیک‌تاک) عملاً امکان شرح وقایع پیچیده آزار یا کلاهبرداری را سلب می‌کند. سیستم‌های نرم‌افزاری باید امکان ضمیمه‌سازی شواهد، دسته‌بندی‌های شفاف همراه با مثال عینی و داشبورد زنده پیگیری تیکت را برای کاربر فراهم سازند.",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "۲. شفافیت کامل در درخواست مجوزها و اصل حداقل دسترسی (Least Privilege): معضل درخواست مجوزهای مازاد (Over-permission) در اپ‌های اندرویدی یکی از سرچشمه‌های اصلی بی‌اعتمادی است. توسعه‌دهنده باید از درخواست مجوزهای حساس پیش از لحظه نیاز قطعی اجتناب نموده و علت اخذ دسترسی را با لحنی ساده و صادقانه پیش از نمایش پنجره سیستمی شرح دهد.",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "۳. مهار الگوهای اعتیادآور و ارج نهادن به سلامت روان (Digital Wellbeing): حذف لودهای بی‌پایان به سبک دستگاه‌های قمار، تعبیه مکث‌های آگاهانه (Mindful Friction) پس از ۴۵ دقیقه استفاده مداوم و فراهم‌سازی گزینه خاموش کردن پخش خودکار، احترام عملی به زمان و اعصاب کاربر است.",
        font_size=13, is_bold=False, line_spacing=1.5
    )
    add_p(
        "۴. تعهد بدون قید و شرط به استانداردهای دسترس‌پذیری (WCAG 2.2): تکمیل اتریبیوت‌های ContentDescription در Jetpack Compose و کدهای XML، تست مداوم با صفحه‌خوان TalkBack و پشتیبانی پیش‌فرض از زیرنویس ویدیوها باید به عنوان یک چک‌لیست الزامی قبل از هر ریلیز نرم‌افزاری لحاظ شود.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    add_heading("۷. نتیجه‌گیری نهایی", level=1)
    add_p(
        "این پژوهش به وضوح نشان داد که رضایت کاربر و بقای پایدار یک محصول نرم‌افزاری، فراتر از سرعت بارگذاری صفحات یا بهینه‌سازی کدهای الگوریتمی است. امروزه اخلاق حرفه‌ای به عنوان شاخص بنیادین کیفیت نرم‌افزار شناخته می‌شود. ضرب‌المثل کهن که عنوان این پژوهش بر آن استوار است یادآور می‌شود: «The best ends by the best means»؛ شرافتمندانه‌ترین اهداف تجاری و والاترین ایده‌های مهندسی تنها زمانی ارزش واقعی خلق می‌کنند که با پاک‌ترین ابزارها و در سایه پاسداشت کرامت و امنیت جامعه انسانی توسعه یابند.",
        font_size=13, is_bold=False, line_spacing=1.5
    )

    add_heading("مراجع و منابع علمی (References)", level=2)
    refs = [
        "Tjikhoeri, N., Olson, L., & Guzmán, E. (2024). The best ends by the best means: ethical concerns in app reviews. Empirical Software Engineering, 29(6), 138. https://doi.org/10.1007/s10664-024-10463-7",
        "Wright, D. (2011). A framework for the ethical impact assessment of information technology. Ethics and Information Technology, 13(3), 199–226.",
        "Obie, H. O., Hussain, W., Xia, X., et al. (2021). A first look at human values-violation in app reviews. In Proc. IEEE/ACM 43rd International Conference on Software Engineering: SEIS (pp. 29–38).",
        "Gray, C. M., Kou, Y., Battles, B., et al. (2018). The dark (patterns) side of UX design. In Proc. 2018 CHI Conference on Human Factors in Computing Systems (pp. 1–14).",
        "Zuboff, S. (2019). The age of surveillance capitalism: The fight for a human future at the new frontier of power. Profile books.",
    ]
    for ref in refs:
        p = doc.add_paragraph()
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
        p.paragraph_format.line_spacing = 1.15
        p.paragraph_format.space_after = Pt(4)
        run = p.add_run(ref)
        run.font.size = Pt(9.5)
        run.font.color.rgb = RGBColor(71, 85, 105)
        run._r.get_or_add_rPr().append(parse_xml(f'<w:rFonts {nsdecls("w")} w:ascii="Times New Roman" w:hAnsi="Times New Roman"/>'))

    output_path = r"d:\mshajkarami\mobile-ethics-presentation\گزارش_جامع_اخلاق_در_توسعه_نرم_افزار_موبایل.docx"
    doc.save(output_path)
    print("Report saved successfully at:", output_path)

if __name__ == "__main__":
    create_report()
