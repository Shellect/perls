<html
  key="1"
  lang="en"
>
  <head>
    <meta charSet="UTF-8" />
    <meta
      content="width=device-width, initial-scale=1.0"
      name="viewport"
    />
    <title>
      Document
    </title>
  </head>
  <body>
    <div className="container">
      <h2>
        Интернет-магазин
      </h2>
      <br />
      <ul className="nav nav-pills">
        <li>
          <a href="/catalog">
            Каталог
          </a>
        </li>
        <li className="active">
          <a
            href="Cart.jsx"
            rel="nofollow"
          >
            Корзина
            <span
              className="badge"
              id="total-cart-count"
            />
          </a>
        </li>
      </ul>
      <br />
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>
                Артикул
              </th>
              <th>
                Название
              </th>
              <th>
                Цена
              </th>
              <th>
                Количество
              </th>
              <th>
                Сумма
              </th>
              <th />
            </tr>
          </thead>
          <tbody id="cart">
            <tr>
              <td colSpan="6">
                <img
                  alt=""
                  src="img/loading.gif"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        Итого:{' '}
        <span id="total-cart-summa">
          0
        </span>
        {' '}руб.
      </div>
      <br />
      <button
        className="btn btn-info"
        id="order"
      >
        Оформить заказ
      </button>
    </div>
  </body>
</html>
