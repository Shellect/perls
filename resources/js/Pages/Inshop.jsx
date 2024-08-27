import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link} from '@inertiajs/react';
import "./style.css"

export default function Inshop({ auth }) {
    return (
        <Link
        href={route('dashboard')}
        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
    >
       <h1 className='h1'> Вернуться на главную страницу</h1>
        <p></p>

        <html
  key="1"
  lang="en"
>
  <head>
    <meta charSet="utf-8" />
    
    <link
      href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&subset=latin,cyrillic-ext"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="css/bootstrap.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="css/main.css"
      rel="stylesheet"
      type="text/css"
    />
  </head>
  <body>
    <div className="containers">
      <h3 className='h3'><b>
        Интернет-магазин</b>
      </h3>
      <br />
      <ul className="navshop">
        <li className="active">
          <a href="/catalog"> <b>
            Каталог
            </b></a>
        </li>
        
        <li>
          <a
            href="cart.html"
            rel="nofollow"
          ><b>
            Корзина
            </b><span
              className="badge"
              id="total-cart-count"
            />
          </a>
          
        </li>
      </ul>
      <br />
      <ul
        
      >
        <div className='vit'>
      <img className='imgs' src="https://ae01.alicdn.com/kf/HTB1dyd1aMZC2uNjSZFnq6yxZpXat/-.jpg" alt="" />
      <img className='imgs' src='https://avatars.mds.yandex.net/i?id=2736783e3f7a21d22f9c3fdc4f49fd3fcc763758-10701944-images-thumbs&n=13'></img>
      <img className='imgs' src='https://avatars.mds.yandex.net/i?id=5abc70f99058bdc5f9917e123306cd34_l-12445014-images-thumbs&n=13'></img>
      </div>
      </ul>
    </div>
    <script
      src="js/vendor/jquery.min.js"
      type="text/javascript"
    />
    <script
      src="js/vendor/underscore.min.js"
      type="text/javascript"
    />
    <script
      src="js/modules/catalog.js"
      type="text/javascript"
    />
    <script
      src="js/modules/cart.js"
      type="text/javascript"
    />
    <script
      src="js/modules/main.js"
      type="text/javascript"
    />
  </body>
</html>

       </Link>
    
    )
}



