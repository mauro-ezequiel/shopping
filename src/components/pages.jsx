export function Pages({ setCurentP, proPorPage, curentP, totalP }) {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalP / proPorPage); i++) {
    pageNum.push(i);
  }

  const former = () => {
    setCurentP(curentP - 1);
  };
  const following = () => {
    setCurentP(curentP + 1);
  };

  const specificPage = (x) => {
    setCurentP(x);
  };

  return (
    <nav
      className="pagination is-centered x "
      role="navigation"
      aria-label="pagination"
    >
      <button
        className={`pagination-previous${curentP === 1 ? "is-disabled" : ""}`}
        onClick={former}
      >
        former
      </button>
      <button
        className={`pagination-next ${
          curentP >= pageNum.length ? "is-disabled" : ""
        }`}
        onClick={following}
      >
        following
      </button>
      <ul className="pagination-list">
        {pageNum.map((noPage) => (
          <li key={noPage}>
            <a
              className={`pagination-link ${
                noPage === curentP ? "is-current" : ""
              }`}
              onClick={() => specificPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
