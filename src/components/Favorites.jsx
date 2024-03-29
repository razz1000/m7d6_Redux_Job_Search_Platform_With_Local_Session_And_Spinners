import Button from "react-bootstrap/Button";
import { FaTimes } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
/* import { connect } from "react-redux"; */
import { removeFromCartAction } from "../redux/actions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/* const mapStateToProps = (state) => ({
  favorite: state.favorite.content,
});
 */

/* const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (indexToRemove) => {
    dispatch(removeFromCartAction(indexToRemove));
  },
}); */

const Favorites = ({}) => {
  const [jobLength, setJobLength] = useState([]);

  const favorite = useSelector((state) => state.favorite.content);
  const dispatch = useDispatch();

  useEffect(() => {
    setJobLength(favorite.length);
  }, []);

  useEffect(() => {
    setJobLength(favorite.length);
  }, [favorite.length]);

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favorite.map((job, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  dispatch(removeFromCartAction(i));
                }}
              >
                <FaTimes />
              </Button>
              <hr></hr>
              {job.title}
              <hr></hr>
              {job.company_name}
              <hr></hr>
              <p>ID: {job._id}</p>

              <hr></hr>

              <Link to={`/${job.company_name}`}>READ MORE</Link>
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold">
          Total jobs added to favorites: {jobLength}
        </Col>
      </Row>
    </Row>
  );
};

export default Favorites;
