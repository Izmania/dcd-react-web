function SayHello() {
  // Sebelum mengembalikan React element, Anda bisa menuliskan banyak kode JavaScript di sini.
  // Biasanya kode yang dituliskan seputar persiapan data untuk ditampilkan pada React element.

  return <p>Hello, World!</p>;
}

// ============> Penggunaan
<SayHello />; // akan menampilkan ui <p>Hello, World!</p>
<SayHello />; // akan menampilkan ui <p>Hello, World!</p>
<SayHello />; // akan menampilkan ui <p>Hello, World!</p>
<SayHello />; // akan menampilkan ui <p>Hello, World!</p>
// SayHello(); // wrong practice!!

// ============> with parameter
function SayHello(props) {
  const name = props.name;
  const company = props.company;

  return (
    <p>
      Hello, {name} from {company}!
    </p>
  );
}

// ============> Penggunaan
<SayHello name="Bill" company="Microsoft" />; // <p>Hello, Bill from Microsoft!</p>
<SayHello name="Steve" company="Apple" />; // <p>Hello, Steve from Apple!</p>
<SayHello name="Mark" company="Facebook" />; // <p>Hello, Mark from Facebook!</p>

// ============> Best Practive
// - Jangan kirim data banyak pake obj JS, ribet
const profile = {
  name: "Dicoding Indonesia",
  username: "dicoding",
  bio: "Bangun Karirmu Sebagai Developer Profesional",
  isVerified: true,
};
<InstagramProfile profile={profile} />; // sebisa mungkin, hindari praktik seperti ini

// - menggunakan object destructuring dalam mengakses nilai propertinya.
function InstagramProfile({ name, username, bio, isVerified }) {
  return (
    <div className="container">
      <dl>
        <dt>Name: </dt>
        <dd>{name}</dd>
        <dt>Username: </dt>
        <dd>{username}</dd>
        <dt>Bio: </dt>
        <dd>{bio}</dd>
        <dt>Verified: </dt>
        <dd>{isVerified ? "yes" : "no"}</dd>
      </dl>
    </div>
  );
}

// - data di dalam komponen yang bertugas untuk menampung perubahan bukanlah props, melainkan state.
