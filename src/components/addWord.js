import { Component } from "react";
import { connect } from "react-redux";
import classes from "./css/Form.module.css";
import { addWord } from "../actions/words";

class AddWord extends Component {
  constructor(props) {
    super(props);
    this.onChangeWord = this.onChangeWord.bind(this);
    this.saveWord = this.saveWord.bind(this);
    this.state = {
      word: "",
      message: "",
    };
  }

  onChangeWord(e) {
    const word = e.target.value;
    this.setState({
      word: word,
    });
  }

  saveWord(e) {
    e.preventDefault();
    const { word } = this.state;
    this.props
      .addWord(word)
      .then((data) => {
        this.setState({
          word: data.word,
        });
        console.log(data);
      })
      .catch((e) => {
        this.setState({
          message: e.response.data,
        });
      });
  }

  render() {
    return (
      <div>
        <div className={classes.form}>
          <form>
            <label>
              <p>Enter word:</p>
              <input
                className="form-control"
                type="text"
                name="word"
                value={this.state.word}
                onChange={this.onChangeWord}
              />
            </label>
            <button onClick={this.saveWord} className={classes.btn}>
              Submit
            </button>
          </form>
        </div>
        <div className={classes.errorMessage}>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}
export default connect(null, { addWord })(AddWord);
