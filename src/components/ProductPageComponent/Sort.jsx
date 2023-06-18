import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../context/filter_context";

const Sort = () => {

    const { filter_products, grid_view, setGridView, setListView } = useFilterContext();

    return (
        <Wrapper className="sort-section">
            {/* 1st column */}
            <div className="sorting-list--grid">
                <button className={grid_view ? "sort-btn active" : "sort-btn"} onClick={setGridView}>
                    <BsFillGridFill className="icon" />
                </button>
                <button className={grid_view ? "sort-btn" : "sort-btn active"} onClick={setListView}>
                    <BsList className="icon" />
                </button>
            </div>
            {/* 2nd column */}
            <div className="product-data">
                {
                    filter_products.length
                } products available
            </div>
            {/* 3rd column */}
            <div className="sort-selection">
                <form action="#">
                    <label htmlFor="sort"></label>
                    <select name="sort" id="sort" className="sort-selection--style">
                        <option value="lowest">Price(lowest to highest)</option>
                        <br />
                        <option value="lowest">Price(highest to lowest)</option>
                        <br />
                        <option value="lowest">Price(a-z)</option>
                        <br />
                        <option value="lowest">Price(z-a)</option>
                    </select>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort