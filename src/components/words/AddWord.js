import { Component } from "react";
import { connect } from "react-redux";
import classes from "../css/Form.module.css";
import { addWord } from "../../actions/words";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      .then((response) => {
        console.log(response);
        this.setState({
          word: "",
        });
        this.setState({
          message: response.message,
        });
        toast.success(response.message);
      })
      .catch((error) => {
        const responseData = error.response.data;
        this.setState({
          message: responseData.message,
        });
        toast.error(responseData.message);
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
        <ToastContainer />;
      </div>
    );
  }
}

export default connect(null, { addWord })(AddWord);
