// کامپوننت اصلی FullPage - FullPage component
import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import img1 from './images/P1.jpg';
import img2 from './images/P2.jpg';
import img3 from './images/P3.webp';
import img4 from './images/P4.jpg';
import img5 from './images/1.jpg';
import img6 from './images/2.jpg';
import img7 from './images/3.jpg';
import img8 from './images/4.jpg';

const FullPage = () => {
  useEffect(() => {
    // راه‌اندازی fullpage.js - Initialize fullpage.js
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      navigationTooltips: ['صفحه نخست', 'خدمات ما', 'محصولات ما', 'جزییات', 'تماس با ما', 'درباره ما'],
      showActiveTooltip: true,
    });
  }, []);

  return (
    <div id="fullpage">
      {/* سکشن اول: منو - Section 1: Menu */}
      <section className="section s1">
        <ul>
          <li><a href="/">صفحه نخست</a></li>
          <li><a href="/">خدمات </a></li>
          <li><a href="/">محصولات </a></li>
          <li><a href="/">تماس با ما</a></li>
          <li><a href="/">درباره ما</a></li>
        </ul>
      </section>

      {/* سکشن دوم: خدمات - Section 2: Services */}
      <section className="section s2">
        <div className="sectionTwo">
          <h1>زیبا و <span>دلنشین</span></h1>
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-car"></i>
                <h4>تزئینات</h4>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-tools"></i>
                <h4>تعمیرات</h4>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-palette"></i>
                <h4>رنگ آمیزی</h4>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fas fa-exchange-alt"></i>
                <h4>تغییرات</h4>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* سکشن سوم: محصولات - Section 3: Products */}
      <section className="section s3">
        <div className="sectionThree">
          <h1>کلاسیک و <span>پرقدرت</span></h1>
          <ul>
            <li>
              <a href="/">
                <img src={img1} alt="" />
                <h4>تزئینات</h4>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={img2} alt="" />
                <h4>تعمیرات</h4>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={img3} alt="" />
                <h4>رنگ آمیزی</h4>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={img4} alt="" />
                <h4>تغییرات</h4>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* سکشن چهارم: اسلایدها - Section 4: Slides */}
      <section className="section s2">
        <div className="slide"><h1> رانندگی پر سرعت و <a href="/">مطمئن</a></h1></div>
        <div className="slide"><h1>زیباترین و <a href="/">بروزترین</a></h1></div>
        <div className="slide"><h1>آرام و <a href="/">پر قدرت</a></h1></div>
        <div className="slide"><h1>سریع و با <a href="/">صلابت</a></h1></div>
      </section>

      {/* سکشن پنجم: فرم تماس - Section 5: Contact Form */}
      <section className="section s4">
        <div className="sectionFour">
         <h1>چشم نواز و <span>خیره کننده</span></h1>
          <form action="">
            <input type="text" placeholder="نام و نام خانوادگی" />
            <input type="text" placeholder="موضوع" />
            <textarea placeholder="چیزی بنویسید"></textarea>
            <input type="submit" value="ارسال" />
          </form>
        </div>
      </section>

      {/* سکشن ششم: فوتر - Section 6: Footer */}
      <section className="section s5">
        <div className="footer">
          {/* بخش درباره ما - About Us */}
          <div className="div footer-about">
            <h2>درباره ما</h2>
            <p>
              نمایشگاه اتومبیل ما با هدف ارائه بهترین خودروهای جدید و کارکرده، تجربه‌ای متفاوت را برای مشتریان رقم می‌زند.  
              ما با تیمی مجرب و متعهد، شما را در انتخاب مناسب‌ترین خودرو یاری می‌کنیم.  
              از خودروهای لوکس تا اقتصادی، مجموعه‌ای متنوع برای سلایق مختلف ارائه داده‌ایم.  
              کیفیت، قیمت مناسب و خدمات پس از فروش، سه اصل اساسی ما هستند.  
              منتظر دیدار شما در نمایشگاه هستیم!
            </p>
          </div>

          {/* بخش آخرین خودروها - Latest Cars */}
          <div className="footer-car">
            <h2>آخرین خودروها</h2>
            <ul>
              <li><a href="/"><img src={img5} alt="" /></a></li>
              <li><a href="/"><img src={img6} alt="" /></a></li>
              <li><a href="/"><img src={img7} alt="" /></a></li>
              <li><a href="/"><img src={img8} alt="" /></a></li>
              <li><a href="/"><img src={img1} alt="" /></a></li>
              <li><a href="/"><img src={img2} alt="" /></a></li>
              <li><a href="/"><img src={img3} alt="" /></a></li>
              <li><a href="/"><img src={img4} alt="" /></a></li>
            </ul>
          </div>

          {/* بخش کپی رایت - Copyright */}
          <div className="copy-right">
            <h4>این وب‌سایت متعلق به نمایشگاه اتومبیل می‌باشد. هرگونه استفاده غیرمجاز از مطالب آن، بدون کسب اجازه، مشمول پیگرد قانونی خواهد بود.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullPage;
