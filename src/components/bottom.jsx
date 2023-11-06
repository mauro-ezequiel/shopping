import "../style/bottom.css";

export function Bottom() {
  return (
    <div className="dark ">
      <h1 className="t"> Contact </h1>
      <div className="container">
        <div className="lin">
          <h2 className="par">Puedes contactarme en las siguientes redes:</h2>
        </div>
        <div className="link">
          <a href="https://github.com/mauro-ezequiel" target="-blank">
            <i className="git bo bi-github"></i>
          </a>

          <a href="https://wa.me/541150941389" target="-blank">
            <i className="w git bo bi-whatsapp" />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#search/from%3A%40jooble.org+in%3Aanywhere/FMfcgzGtwCtTwJMFtBCXBlHLrcdTZmpk"
            target="-blank"
          >
            <i className="g git bo  bi-envelope-at-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
