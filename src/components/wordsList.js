import { Component } from "react";
import classes from "./css/Table.module.css";
import { retrieveWords } from "../actions/words";
import { connect } from "react-redux";

class WordsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.retrieveWords();
  }
  render() {
    const { words } = this.props;
    return (
      <div className={classes.table}>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Word</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            {words &&
              words.map((word, index) => (
                <tr key={index}>
                  <td>{word.word}</td>
                  <td>{word.score}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    words: state.words,
  };
};

export default connect(mapStateToProps, {
  retrieveWords,
})(WordsList);
