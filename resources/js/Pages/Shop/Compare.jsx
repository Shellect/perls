<html
  key="1"
  lang="ru"
>
  <head>
    <meta charSet="utf-8" />
    <title>
      Интернет-магазин. Сравнение товаров
    </title>
    <meta
      content="Интернет-магазин. Страница сравнения товаров"
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
  <body data-page="compare">
    <div className="container">
      <h1>
        Сравнение товаров. Интернет-магазин.
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
          <a href="catalog.jsx ">
            Каталог с фильтрами
          </a>
        </li>
        <li>
          <a href="catalog-pag.jsx">
            Каталог с пагинацией
          </a>
        </li>
        <li
          className="active"
          id="compare-tab"
        >
          <a href="compare.jsx">
            Сравнение товаров
            <span className="badge" />
          </a>
        </li>
        <li>
          <a href="cart.jsx">
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
      <br />
      <div
        className="col-md-12"
        id="goods"
      >
        <table
          className="compare-table table table-bordered table-hover"
          data-compare="all"
          id="compare-table"
        >
          <thead>
            <tr />
          </thead>
          <tbody />
        </table>
      </div>
    </div>
    <script
      dangerouslySetInnerHTML={{
        __html: '        <th>            Показывать свойства:            <% _.each(buttons, function(button) { %>            <div class="radio">                <label>                    <input type="radio" class="js-compare-filter" name="filters" value="<%= button.value %>" <%= button.checked ? \' checked\' : \'\' %>>                    <%= button.title %>                </label>            </div>            <% }); %>        </th>    '
      }}
      id="compare-filters-template"
      type="text/template"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: '        <% _.each(goods, function(good) { %>        <th>            <div class="compare-table__good"><%= good.good %></div>            <img class="compare-table__photo" src="/img/goods/<%= good.photo %>" />            <div class="compare-table__price"><%= good.price %> руб.</div>            <div class="compare-table__remove js-compare-remove" data-id="<%= good.good_id %>">Удалить из сравнения</div>        </th>        <% }); %>    '
      }}
      id="compare-header-template"
      type="text/template"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: '        <% _.each(props, function(prop) { %>        <tr <%= prop.equal ? \'class="-equal"\' : \'\' %>>            <td><%= prop.prop %></td>            <% _.each(goods, function(goodId) { %>            <td><%= (_.findWhere(prop.values, {goodId: goodId}) || {value: \'&mdash;\'}).value %></td>            <% }); %>        </tr>        <% }); %>    '
      }}
      id="compare-props-template"
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