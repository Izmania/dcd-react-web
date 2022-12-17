<button onClick={increaseValue}>
  Increase Value
</button>

// iberikan nilai id dan dibungkus dengan anonymous function. Inilah cara ketika Anda hendak memberikan nilai argumen pada fungsi event handler ketika dipanggil [9].
function DeleteButton({ id, onDelete }) {
  return <button className='contact-item__delete' onClick={() => onDelete(id)}>X</button>
}