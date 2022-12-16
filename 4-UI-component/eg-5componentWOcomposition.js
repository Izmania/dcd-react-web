function FilterableProductTable() {
  return (
    <div className="container">
      <div className="search-bar__container">
        <input type="text" placeholder="Search..." />
        <div className="search-bar__in_stock_checkbox">
          <input type="checkbox" />
          <label>Only show products in stock</label>
        </div>
      </div>
      <div className="product-table__container">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr>
            <td colSpan="2">
              <strong>Sporting Goods</strong>
            </td>
          </tr>
          <tr>
            <td>Football</td>
            <td>$49.99</td>
          </tr>
          <tr>
            <td>Baseball</td>
            <td>$9.99</td>
          </tr>
          <tr>
            <td>Basketball</td>
            <td>$29.99</td>
          </tr>
          <tr>
            <td colSpan="2">
              <strong>Electronics</strong>
            </td>
          </tr>
          <tr>
            <td>iPod Touch</td>
            <td>$99.99</td>
          </tr>
          <tr>
            <td>iPhone 5</td>
            <td>$399.99</td>
          </tr>
          <tr>
            <td>Nexus 7</td>
            <td>$199.99</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
