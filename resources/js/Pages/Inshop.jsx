import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';
import "./style.css"

export default function Inshop({ auth }) {
  return (
    <div className="containers">
      <Link href={route('dashboard')} className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white" > Вернуться на главную страницу</Link>
      <h3 className='h3'>Интернет-магазин</h3>

      <ul className="navshop">
        <li className="active">
          <Link href={route("catalog")}> Каталог </Link>
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




  )
}



