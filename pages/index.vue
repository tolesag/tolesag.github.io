<template>
  <div>
    <v-app-bar dense>
      <v-toolbar-title>توله سگ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain> چرا توله سگ </v-btn>
      <v-btn plain> توکنومیکس </v-btn>
      <v-btn plain> نقشه راه </v-btn>
      <v-btn plain> سوالات متداول </v-btn>
      <v-spacer></v-spacer>
      <v-btn plain> خرید </v-btn>
    </v-app-bar>

    <div>
      <v-container fluid>
        <v-row class="align-center">
          <v-col class="align-center">
            <br />
            <h1 class="text-center pt-30" dir="ltr">$TOLE</h1>
            <h1 class="text-center pt-10">
              اولین توکن غیر متمرکز فارسی بر روی شبکه اتریوم و بایننس
              <span>(BSC)</span>
            </h1>
            <br />
            <div class="text-center">
              <v-btn class="mx-2" fab large plain>
                <v-icon> mdi-telegram </v-icon>
              </v-btn>
              <v-btn class="mx-2" fab large plain>
                <img
                  style="color: white"
                  width="64"
                  height="64"
                  src="~assets/pancakeswap-cake-logo.png"
                />
              </v-btn>
              <v-btn class="mx-2" fab large plain>
                <img
                  style="color: white"
                  width="64"
                  height="64"
                  src="~assets/img_5.png"
                />
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row
          ><v-col> <div class="banner"></div> </v-col
        ></v-row>
      </v-container>
    </div>
    <div>
      <h2 class="text-center">توکنومیکس</h2>
      <div>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="3" xl="3">
            <v-card class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img
                height="250"
                :src="require('~/assets/routing.svg')"
              ></v-img>
              <v-card-title>عرضه اولیه</v-card-title>
              <v-card-text>
                <div style="text-align: justify; height: 5rem">
                  <div>۱،۰۰۰،۰۰۰،۰۰۰،۰۰۰،۰۰۰ توکن</div>
                  <div>۵۰ درصد کل توکن ها سوزانده شده است</div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="3" xl="3">
            <v-card class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img height="250" :src="require('~/assets/target.svg')"></v-img>
              <v-card-title>۱۰٪ مالیات بر معاملات</v-card-title>
              <v-card-text>
                <div style="text-align: justify; height: 5rem">
                  <div>در هر تراکنش</div>
                  <div>۵٪ به نقدینگی اضافه می شود</div>
                  <div>۵٪ بین دارندگان توزیع می شود</div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="3" xl="3">
            <v-card class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img height="250" :src="require('~/assets/team.svg')"></v-img>
              <v-card-title>سود از نگه داشتن</v-card-title>
              <v-card-text>
                <div style="text-align: justify; height: 5rem">
                  در هر معامله ۵ درصد کل معامله بین همه کیف پول ها تقسیم و اضافه
                  میشود.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="3" xl="3">
            <v-card class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
              <v-img height="250" :src="require('~/assets/idea.svg')"></v-img>
              <v-card-title>کیف پول خیریه</v-card-title>
              <v-card-text>
                <div style="text-align: justify; height: auto">
                  ۵ درصد از توکن های اولیه ۲.۵ درصد برای تأمین اعتبار پروژه
                  سرمایه گذاری خواهد شد. ۲.۵ درصد دیگر مربوط به کیف پول خیریه
                  میباشد که به صورت هفتگی به پناهگاه های حیوانات واریز خواهد شد.
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
    <div>
      <h2 class="text-center">نقشه راه</h2>
      <br />
      <v-timeline align-top>
        <v-timeline-item icon="mdi-clock-start" fill-dot>
          <v-card dark color="green lighten-1">
            <v-card-title class="title"> <p>تابستان ۱۴۰۰</p> </v-card-title>
            <v-card-text class="white text--primary pt-10">
              <p>ایجاد قرارداد</p>
              <p>قرارداد تأیید شده در BSCScan</p>
              <p>لیست شده در صرافی pancakeswap</p>
              <p>سوزاندن LP (نقدینگی بی خطر است)</p>
              <p>لیست در CoinMarketCap (بدون ردیابی)</p>
              <p>لیست شده در CoinGecko</p>
              <p>لیست شده در Blockfolio</p>
              <p>بهبود وب سایت</p>
              <p>انشتار برگه سفید</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item icon="mdi-lightbulb-group" fill-dot>
          <v-card dark color="green lighten-1">
            <v-card-title class="title"> <p>پاییز ۱۴۰۰</p> </v-card-title>
            <v-card-text class="white text--primary pt-10">
              <p>لیست در CoinMarketCap (پیگیری شده)</p>
              <p>برنامه مارکتینگ گسترده</p>
              <p>اولین رویداد حمایت مالی IRL</p>
              <p>فروشگاه رسمی کالا</p>
              <p>لیست در صرافی متمرکز</p>
              <p>توسعه مفهوم</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item icon="mdi-lightbulb-group" fill-dot>
          <v-card dark color="green lighten-1">
            <v-card-title class="title"> <p>زمستان ۱۴۰۰</p> </v-card-title>
            <v-card-text class="white text--primary pt-10">
              <p>لیست در CoinMarketCap (پیگیری شده)</p>
              <p>برنامه مارکتینگ گسترده</p>
              <p>اولین رویداد حمایت مالی IRL</p>
              <p>فروشگاه رسمی کالا</p>
              <p>لیست در صرافی متمرکز</p>
              <p>توسعه مفهوم</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div class="pt-15">
      <h2 class="text-center pb-10">سوالات متداول</h2>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h4>چگونه می توانم توله سگ را بخرم؟</h4>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              می توانید راهنمای کامل گام به گام و توضیح دهنده فیلم ما را اینجا
              ببینید!
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h4>توکن توله سگ چیست؟</h4>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              توله سگ در بهار ۱۴۰۰ به عنوان اولین توکن فارسی بر روی شبکه بلاکچین
              اتریوم و بایننس راه اندازی شد ، که به عنوان یک توکن خیریه به صورت
              ماهانه به پناهگاه های حیوانات کمک می کند! از هر معامله ۱۰ درصد
              مالیات دریافت میشود ۵ درصد برای نقدینگی سوزانده می شود و ۵ درصد
              بین دارندگان توزیع می شود تا به سرمایه گذاران پاداش داده شود.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h4>شناسه رسمی توکن بر روی شبکه بلاکچین چیست؟</h4>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              قرارداد رسمی <span dir="ltr">$ُTOLE</span> را می توانید آز آدرس
              های زیر مشاهده کنید:
            </p>
            <div><a href="">0x000000000000000000000000000000000000dead</a></div>
            <div><a href="">0x000000000000000000000000000000000000dead</a></div>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h4>چرا توکن توله سگ در کیف پول نشان داده نمی شود؟؟</h4>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>باید آن را به عنوان "توکن سفارشی" اضافه کنید.</p>
            <p>
              ۱- بر روی دکمه نشانه جستجو ضربه بزنید و چیزی را تایپ کنید. هنگامی
              که گزینه "add custom token" را مشاهده کردید ، بر روی آن کلیک کنید.
            </p>
            <p>
              ۲- شناسه توکن سفارشی را بسته به شبکه ای که انتخاب کرده اید (اتریوم
              یا بایننس) از سایت دریافت کنید.
            </p>
            <p>
              ۳- آدرس توکن را وارد نمایید بقیه فیلد ها به صورت اوتوماتیک پر
              خواهد شد
            </p>
            <p>
              4) اکنون رمز باید در کیف پول شما قابل مشاهده باشد. اگر هنوز سوالی
              دارید ، می توانید در تلگرام بپرسید.
            </p>
            <a
              href="https://community.trustwallet.com/t/how-to-add-a-custom-token/213"
              >منبع</a
            >
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h4>چرا قیمت دلاری توکن توله سگ در کیف پول نمایش داده نمیشود؟</h4>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              این مبلغ از سایت هایی مانند CoinMarketCap و CoinGecko گرفته می
              شود. از آنجا که توله سگ هنوز جدید است ، این سرویس ها هنوز شاخص
              توکن توله سگ را فهرست بندی نکرده اند.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <h4>چرا توکن توله سگ امن است؟</h4>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p>
              از آنجا که از قرارداد در شبکه بلاکچین منتشر شده (اساساً امکان
              تغییر آن وجود ندارد) ، توسعه دهندگان نمی توانند دوباره وارد سیستم
              شوند و کد را دستکاری کنند. این بدان معنی است که زمین بازی یک بازی
              عادلانه است و توکن می تواند تا زمانی که جامعه از آن حمایت میکند
              رشد کند. علاوه بر این ، مالیاتی که به نقدینگی اضافه می شود ،
              بالشتک بزرگتر و بزرگتری ایجاد می کند و با افزایش معاملات توکن ،
              نوسانات قیمت کاهش میابد و به طور موثر معامله توکن "راحت تر و راحت
              تر" می شود.
            </p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div>
      <v-footer dark padless>
        <v-card
          width="100%"
          flat
          tile
          class="indigo lighten-1 white--text text-center"
        >
          <v-card-text>
            <v-btn class="mx-4 white--text" icon>
              <a href="" class="white--text text-decoration-none"
                ><v-icon size="24px"> mdi-instagram </v-icon></a
              >
            </v-btn>
            <v-btn class="mx-4 white--text" icon>
              <a href="" class="white--text text-decoration-none"
                ><v-icon size="24px"> mdi-telegram </v-icon></a
              >
            </v-btn>
            <v-btn class="mx-4 white--text" icon>
              <a href="" class="white--text text-decoration-none"
                ><v-icon size="24px"> mdi-twitter </v-icon></a
              >
            </v-btn>
            <v-btn class="mx-4 white--text" icon>
              <a href="" class="white--text text-decoration-none"
                ><v-icon size="24px"> mdi-reddit </v-icon></a
              >
            </v-btn>

            <v-btn class="mx-4 white--text" icon>
              <a href="" class="white--text text-decoration-none"
                ><v-icon size="24px"> mdi-facebook </v-icon></a
              >
            </v-btn>
            <v-btn class="mx-4 white--text" icon>
              <a href="" class="white--text text-decoration-none"
                ><v-icon size="24px"> mdi-github </v-icon>
              </a>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>ToleSag</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.banner {
  background-image: url('~assets/artboard___2_3x.png');
  min-height: 80vh;
  background-size: contain;
  background-position: center;
}
</style>
