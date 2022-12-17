// Correct!
this.setState((previousState) => {
  return {
    count: previousState.count + 1,
  }
});

// Don't!
this.state.count = this.state.count + 1;

// parameter beruba objek
// reset the count value
this.setState({
  count: 0
});

// parameter beruba fungsi
// increase the count value
this.setState((previousState) => {
  return {
    count: previousState.count + 1
  }
});

// fungsi this.setState() menggunakan teknik "menggabungkan" [update pada data tertentu saja] bukan mengganti keseluruhan nilai state.