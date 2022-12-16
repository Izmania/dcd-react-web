// // Vue
// <ul id="news">
//   <li v-for="news in someNews">{{ news.title }}</li>
// </ul>

// // Angular
// <ul id="news">
//   <li *ngFor="let news of someNews">{{ news.title }}</li>
// </ul>

// React
<ul id="news">
  { someNews.map((news) => <li>{news.title}</li>) }
</ul>