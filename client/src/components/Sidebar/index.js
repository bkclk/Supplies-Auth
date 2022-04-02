import React, { useState, useEffect } from "react";
import { Container, CatH1, CatRow } from "./Sidebar.style";
import { selectedCategoryId } from "../../store/actions";
import { connect } from "react-redux";
import axios from "../../axios";
const Sidebar = (props) => {
  const [categories, setCategories] = useState([]);
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      const token = JSON.parse(localStorage.getItem("userToken"));
      const response = await axios.get("/categories", {
        headers: { Authorization: `Bearer ${token.token}` },
      });

      setCategories(response.data);
    }

    fetchCategories();
  }, []);

  const onSelect = (category) => {
    setActiveBtn(!activeBtn);

    props.selectedCategoryId(category);
  };
  const renderList = () => {
    if (!categories) return <div>Loading...</div>;
    else {
      return categories.map((category) => (
        <CatRow
          key={category.id}
          activeBtn={category.id === props.selectedId}
          onClick={() => onSelect(category)}
        >
          {category.categoryName}
        </CatRow>
      ));
    }
  };

  return (
    <>
      <Container>
        <CatH1>Catagories</CatH1>
        {renderList()}
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedId: state.selectedId,
    token: state.token,
  };
};
export default connect(mapStateToProps, { selectedCategoryId })(Sidebar);
