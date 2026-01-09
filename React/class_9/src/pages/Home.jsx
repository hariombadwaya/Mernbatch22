
import SingleCart from "../components/SingleCart";
import "./Home.css";

function Home({ products, setCartItem, cartItem, itemQuantity, setItemQuantity, inputValue, button, currPage,  setCurrPage }) {
  console.log("products", products);

  const opArray = products.filter((item) => item?.description?.toLowerCase().includes(inputValue?.toLowerCase(), 0));


  const handlePrevious = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };
  const handleNext = () => {
    if (currPage < button.length) {
      setCurrPage(currPage + 1);
    }
  };
  return (
    <>    <div>
      {
        inputValue !== undefined ? (
          <div>
            {
              opArray?.length === 0 ? (<p>No matching item exist type to right i</p>) : (<div className="product-grid">
                {
                  opArray?.map((it, index) => (
                    <SingleCart
                      key={index}
                      item={it}
                      setCartItem={setCartItem}
                      cartItem={cartItem}
                      itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}
                    />
                  ))
                }
              </div>)
            }


          </div>
        ) :
          <div className="product-grid">
            {
              products.map((it, index) => (
                <SingleCart
                  key={index}
                  item={it}
                  setCartItem={setCartItem}
                  cartItem={cartItem}
                  itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}
                />
              ))
            }
          </div>
      }


    </div>
      <div>
      <button onClick={handlePrevious} disabled={currPage === 1}>Previous</button>
        {
          button.map((i) => {
            return (<button>{i}</button>)
          })
        }
        <button     onClick={handleNext}
          disabled={currPage === button.length}>Next</button>

      </div></>
  );
}

export default Home;
