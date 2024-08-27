<html
  key="1"
  lang="en"
>
  <head>
    <meta charSet="utf-8" />
    <title>
      Интернет-магазин. Каталог.
    </title>
    <meta
      content="Интернет-магазин. Каталог с фильтрами и сортировками"
      name="description"
    />
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
      href="components/jquery-ui/jquery-ui.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="css/main.css"
      rel="stylesheet"
      type="text/css"
    />
  </head>
  <body data-page="catalogDB">
    <div className="container">
      <br />
      <br />
      <ul className="nav nav-pills">
        <li>
          <a href="/catalog">
            Каталог
          </a>
        </li>
        <li className="active">
          <a href="catalog.html">
            Каталог с фильтрами
          </a>
        </li>
        <li>
          <a href="catalog-pag.html">
            Каталог с пагинацией
          </a>
        </li>
        <li id="compare-tab">
          <a href="compare.html">
            Сравнение товаров
            <span className="badge" />
          </a>
        </li>
        <li>
          <a href="cart.html">
            Корзина
            <span
              className="badge"
              id="total-cart-count"
            />
          </a>
        </li>
        <li>
          <a href="order.html">
            Оформление заказа
          </a>
        </li>
      </ul>
      <br />
      <div
        className="col-md-12"
        id="filters"
      >
        <div className="btn-group">
          <button
            className="btn btn-default active js-category"
            data-category="0"
            type="button"
          >
            Все категории
          </button>
          <button
            className="btn btn-default js-category"
            data-category="1"
            type="button"
          >
            Кольца
          </button>
          <button
            className="btn btn-default js-category"
            data-category="2"
            type="button"
          >
            Серьги
          </button>
          <button
            className="btn btn-default js-category"
            data-category="3"
            type="button"
          >
            Броши
          </button>
        </div>
        <br />
        <br />
        <form
          id="filters-form"
          role="form"
        >
          <div className="col-md-4">
            <h4>
              Бренды
            </h4>
            <div id="brands">
              <div className="checkbox">
                <label>
                  <input
                    defaultValue="1"
                    name="brands[]"
                    type="checkbox"
                  />
                  {' '}AUTORE
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    defaultValue="2"
                    name="brands[]"
                    type="checkbox"
                  />
                  {' '}TASAKI
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    defaultValue="3"
                    name="brands[]"
                    type="checkbox"
                  />
                  {' '}MIZUKI
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    defaultValue="4"
                    name="brands[]"
                    type="checkbox"
                  />
                  {' '}ANNOUSHKA
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h4>
              Фильтр по ценам
            </h4>
            <div id="prices-label">
              0 - 0 руб.
            </div>
            <br />
            <input
              defaultValue="5000"
              id="min-price"
              name="min_price"
              type="hidden"
            />
            <input
              defaultValue="50000"
              id="max-price"
              name="max_price"
              type="hidden"
            />
            <div id="prices" />
          </div>
          <div className="col-md-4">
            <h4>
              Сортировка
            </h4>
            <br />
            <select
              className="form-control"
              id="sort"
              name="sort"
            >
              <option value="price_asc">
                По цене, сначала дешевые
              </option>
              <option value="price_desc">
                По цене, сначала дорогие
              </option>
              <option value="rating_desc">
                По популярности
              </option>
              <option value="good_asc">
                По названию, A-Z
              </option>
              <option value="good_desc">
                По названию, Z-A
              </option>
            </select>
          </div>
        </form>
      </div>
      <br />
      <br />
      <ul
        className="col-md-12"
        id="goods"
      >
        <img
          alt=""
          src="img/loading.gif"
        />
      </ul>
    </div>
    <script
      dangerouslySetInnerHTML={{
        __html: '        <% _.each(goods, function(item) { %>        <li class="small-good-item row">            <div class="col-md-2">                <img class="small-good-item__img" src="img/goods/<%= item.photo %>" />            </div>            <div class="col-md-10">                <div class="small-good-item__id">Артикул <%= item.good_id %></div>                <div class="small-good-item__name"><%- item.good %> (рейтинг <%= item.rating %>)</div>                <div class="small-good-item__brand">Бренд: <%- item.brand %></div>                <div class="small-good-item__price"><%= item.price %> руб.</div>                <button                    class="small-good-item__btn-add btn btn-info btn-sm js-add-to-cart"                    data-id="<%= item.good_id %>"                    data-name="<%- item.good %>"                    data-price="<%= item.price %>"                >Добавить в корзину</button>                <button                    class="btn btn-link btn-sm js-add-to-compare"                    data-id="<%= item.good_id %>"                    data-category-id="<%= item.category_id %>"                >Добавить к сравнению</button>            </div>        </li>        <% }); %>    '
      }}
      id="goods-template"
      type="text/template"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: '        <% _.each(brands, function(item) { %>        <div class="checkbox"><label><input type="checkbox" name="brands[]" value="<%= item.id %>"> <%= item.brand %></label></div>        <% }); %>    '
      }}
      id="brands-template"
      type="text/template"
    />
    <script
      src="js/vendor/jquery.min.js"
      type="text/javascript"
    />
    <script
      src="js/vendor/jquery.cookie.js"
      type="text/javascript"
    />
    <script
      src="components/jquery-ui/jquery-ui.min.js"
      type="text/javascript"
    />
    <script
      src="js/vendor/underscore.min.js"
      type="text/javascript"
    />
    <script
      src="js/modules/catalogDB.js"
      type="text/javascript"
    />
    <script
      src="js/modules/cart.js"
      type="text/javascript"
    />
    <script
      src="js/modules/compare.js"
      type="text/javascript"
    />
    <script
      src="js/modules/main.js"
      type="text/javascript"
    />
  </body>
</html>