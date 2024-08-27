<html
  key="1"
  lang="ru"
>
  <head>
    <meta charSet="utf-8" />
    <title>
      Интернет-магазин. Каталог с пагинацией.
    </title>
    <meta
      content="Интернет-магазин. Каталог с пагинацией"
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
      href="css/main.css"
      rel="stylesheet"
      type="text/css"
    />
  </head>
  <body data-page="catalogPag">
    <div className="container">
      <h1>
        Каталог с пагинацие. Интернет-магазин
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ul className="nav nav-pills">
        <li>
          <a href="/catalog">
            Каталог
          </a>
        </li>
        <li>
          <a href="catalog.html">
            Каталог с фильтрами
          </a>
        </li>
        <li className="active">
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
      <div className="row">
        <div className="btn-group col-md-6">
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
        <div className="btn-group col-md-6">
          <button
            className="btn btn-default js-theme"
            data-theme="big"
            title="Большие фото"
            type="button"
          >
            <span className="glyphicon glyphicon-th-large" />
          </button>
          <button
            className="btn btn-default js-theme"
            data-theme="compact"
            title="Компактный вид"
            type="button"
          >
            <span className="glyphicon glyphicon-th" />
          </button>
          <button
            className="btn btn-default js-theme"
            data-theme="list"
            title="Списком"
            type="button"
          >
            <span className="glyphicon glyphicon-list" />
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-2">
          Товаров на странице:
          <select
            className="form-control col-md-3"
            id="pages-limit"
          >
            <option value="2">
              2
            </option>
            <option value="3">
              3
            </option>
            <option value="5">
              5
            </option>
            <option value="10">
              10
            </option>
            <option value="100">
              100
            </option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ul
            className="pagination"
            id="pagination"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          Показаны товары:{' '}
          <span id="goods-info" />
        </div>
      </div>
      <ul
        className="list-unstyled"
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
      id="goods-template-compact"
      type="text/template"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: '        <% _.each(goods, function(item) { %>        <li class="good-item row">            <div class="col-md-4">                <img class="good-item__img" src="img/goods/<%= item.photo %>" />            </div>            <div class="col-md-8">                <div class="good-item__id">Артикул <%= item.good_id %></div>                <div class="good-item__name"><%- item.good %></div>                <div class="good-item__price"><%= item.price %> руб.</div>                <button                    class="good-item__btn-add btn btn-info btn-sm js-add-to-cart"                    data-id="<%= item.good_id %>"                    data-name="<%- item.good %>"                    data-price="<%= item.price %>"                >Добавить в корзину</button>            </div>        </li>        <% }); %>    '
      }}
      id="goods-template-big"
      type="text/template"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: '        <br />        <br />        <% _.each(goods, function(item) { %>        <li class="row">            <div class="col-md-12">                <p>                    Артикул <%= item.good_id %>, <%- item.good %>. Цена: <%= item.price %> руб.                    <a                        class="btn btn-link btn-sm js-add-to-cart"                        data-id="<%= item.good_id %>"                        data-name="<%- item.good %>"                        data-price="<%= item.price %>"                    >Добавить в корзину</a>                </p>            </div>        </li>        <% }); %>    '
      }}
      id="goods-template-list"
      type="text/template"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: '        <% if (page !== 1) { %>        <li data-page="1"><a href>&laquo;</a></li>        <li data-page="<%= page-1 %>"><a href>&lt;</a></li>        <% } %>        <% for (var i = 1; i <= countPages; i++) { %>        <li data-page="<%= i %>" <%= (i === page) ? \' class="active"\' : \'\' %>><a href><%= i %></a></li>        <% } %>        <% if (page !== countPages) { %>        <li data-page="<%= page + 1 %>"><a href>&gt;</a></li>        <li data-page="<%= countPages %>"><a href>&raquo;</a></li>        <% } %>    '
      }}
      id="pagination-template"
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
      src="js/vendor/underscore.min.js"
      type="text/javascript"
    />
    <script
      src="js/modules/catalogPag.js"
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