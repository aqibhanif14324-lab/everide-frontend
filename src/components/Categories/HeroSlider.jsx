import './Categories.css';

const HeroCategories = () => {
  return (
   <div className='container'>
     <section className="categories ">
      <a href="/fr/ski-snow" className="category-card">
        <picture>
          <source
            srcSet="https://static.everide.app/I8vMgWQxc7rksaJ5Y4JlUc2x2qoiIDeQNfb6s1nI2wQ/rs:fill:512:512:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMV8xNjgwNjAwMDU2LTE2ODA2MDAwNTYtOGIzMmUuanBn.webp"
            type="image/webp"
            width={150}
            height={150}
          />
          <source
            srcSet="https://static.everide.app/f6-eG3Zdkuuv7C50_TZjSsZaiRIm97_ihCdsLlXEI6U/rs:fill:512:512:1/q:75/g:ce/...jpg"
            type="image/jpeg"
          />
          <img
            src="https://static.everide.app/f6-eG3Zdkuuv7C50_TZjSsZaiRIm97_ihCdsLlXEI6U/rs:fill:512:512:1/q:75/g:ce/...jpg"
            alt="SKI | SNOW"
            className="category-img"
          />
        </picture>
        <span className="category-label">ski | snow</span>
      </a>

      <a href="/fr/materiel-alpinisme-occasion" className="category-card">
        <picture>
          <source
            srcSet="https://static.everide.app/qnPScG2zm0w7gcjLfxoX4MQWfhdVZNp3NyWueYKnAgk/rs:fill:512:512:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMzhfMTY4MDYwMDI1Ny0xNjgwNjAwMjU3LWExODQxLmpwZw.webp"
            type="image/webp"
          />
          <source
            srcSet="https://static.everide.app/zmrPaaraw4N3X5wXm6FgFf90erlX9aTQMBEKmetcGK0/rs:fill:512:512:1/q:75/g:ce/...jpg"
            type="image/jpeg"
          />
          <img
            src="https://static.everide.app/zmrPaaraw4N3X5wXm6FgFf90erlX9aTQMBEKmetcGK0/rs:fill:512:512:1/q:75/g:ce/...jpg"
            alt="ESCALADE | ALPINISME"
            className="category-img"
          />
        </picture>
        <span className="category-label">escalade | alpinisme</span>
      </a>

      <a href="/fr/equipement-outdoor-occasion" className="category-card">
        <picture>
          <img
            src="https://static.everide.app/q58ZM1OiCDzTjNZkodDyMuGld7QkMIXvwjc3RH2hnwY/rs:fill:512:512:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMzEwXzE2ODA2MDExODEtMTY4MDYwMTE4MS0zNGNmOC5qcGc.webp" // Replace with full image URL
            alt="RANDO | BIVOUAC"
            className="category-img"
          />
        </picture>
        <span className="category-label">rando | bivouac</span>
      </a>

      <a href="/fr/ski-snow" className="category-card">
        <picture>
          <source
            srcSet="https://static.everide.app/I8vMgWQxc7rksaJ5Y4JlUc2x2qoiIDeQNfb6s1nI2wQ/rs:fill:512:512:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMV8xNjgwNjAwMDU2LTE2ODA2MDAwNTYtOGIzMmUuanBn.webp"
            type="image/webp"
          />
          <source
            srcSet="https://static.everide.app/f6-eG3Zdkuuv7C50_TZjSsZaiRIm97_ihCdsLlXEI6U/rs:fill:512:512:1/q:75/g:ce/...jpg"
            type="image/jpeg"
          />
          <img
            src="https://static.everide.app/f6-eG3Zdkuuv7C50_TZjSsZaiRIm97_ihCdsLlXEI6U/rs:fill:512:512:1/q:75/g:ce/...jpg"
            alt="SKI | SNOW"
            className="category-img"
          />
        </picture>
        <span className="category-label">ski | snow</span>
      </a>

      <a href="/fr/materiel-alpinisme-occasion" className="category-card">
        <picture>
          <source
            srcSet="https://static.everide.app/qnPScG2zm0w7gcjLfxoX4MQWfhdVZNp3NyWueYKnAgk/rs:fill:512:512:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMzhfMTY4MDYwMDI1Ny0xNjgwNjAwMjU3LWExODQxLmpwZw.webp"
            type="image/webp"
          />
          <source
            srcSet="https://static.everide.app/zmrPaaraw4N3X5wXm6FgFf90erlX9aTQMBEKmetcGK0/rs:fill:512:512:1/q:75/g:ce/...jpg"
            type="image/jpeg"
          />
          <img
            src="https://static.everide.app/zmrPaaraw4N3X5wXm6FgFf90erlX9aTQMBEKmetcGK0/rs:fill:512:512:1/q:75/g:ce/...jpg"
            alt="ESCALADE | ALPINISME"
            className="category-img"
          />
        </picture>
        <span className="category-label">escalade | alpinisme</span>
      </a>

      <a href="/fr/equipement-outdoor-occasion" className="category-card">
        <picture>
          <img
            src="https://static.everide.app/q58ZM1OiCDzTjNZkodDyMuGld7QkMIXvwjc3RH2hnwY/rs:fill:512:512:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMzEwXzE2ODA2MDExODEtMTY4MDYwMTE4MS0zNGNmOC5qcGc.webp" // Replace with full image URL
            alt="RANDO | BIVOUAC"
            className="category-img"
          />
        </picture>
        <span className="category-label">rando | bivouac</span>
      </a>
      <a href="/fr/equipement-outdoor-occasion" className="category-card">
        <picture>
          <img
            src="https://static.everide.app/q58ZM1OiCDzTjNZkodDyMuGld7QkMIXvwjc3RH2hnwY/rs:fill:512:512:1/q:75/g:ce/czM6Ly9ldmVyaWRlLXN0YXRpYy9jYXRhbG9nc19pbWFnZXMvY2F0YWxvZ3NfaW1hZ2VfMzEwXzE2ODA2MDExODEtMTY4MDYwMTE4MS0zNGNmOC5qcGc.webp" // Replace with full image URL
            alt="RANDO | BIVOUAC"
            className="category-img"
          />
        </picture>
        <span className="category-label">rando | bivouac</span>
      </a>
      
    </section>
   </div>
  );
};

export default HeroCategories;
