import React from "react";
import { Link } from '@inertiajs/react';

export default function () {
  return (
    <div className="container">

      <ul className="nav nav-pills">
        <li><Link href="/catalog"> Каталог </Link> </li>
        <li className="active"> <Link href="catalog.html"> Каталог с фильтрами </Link> </li>
        <li> <Link href="catalog-pag.html"> Каталог с пагинацией </Link> </li>
        <li id="compare-tab"> <Link href="compare.html"> Сравнение товаров <span className="badge" /> </Link> </li>
        <li><Link href="cart.html"> Корзина <span className="badge" id="total-cart-count" /> </Link> </li>
        <li> <Link href="order.html"> Оформление заказа </Link> </li>
      </ul>
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
  );
}