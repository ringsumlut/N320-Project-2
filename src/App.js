import "./App.css";
import React from "react";
import Heroes from "./components/data.json";
import Modal from "react-modal";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedHero: 1,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  };
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="App">
        <h1>Dota 2 Heores</h1>
        <div className="posts">
          {Heroes.heroes.map((hero, index) => {
            let roles = hero.role.join();
            return (
              <>
                <img
                  className="hImage"
                  src={hero.image}
                  alt="detail"
                  onClick={this.handleOpenModal.bind(this, hero)}
                ></img>
                {/* <h4>{hero.name}</h4>
                <p>Primary Attribute: {hero.primaryAttribute}</p>
                <p>Attack Type: {hero.attackType}</p>
                <p key={index}>Role(s): {roles} </p> */}
              </>
            );
          })}
          <Modal
            isOpen={this.state.showModal}
            className="Modal"
            overlayClassName="Overlay"
            ariaHideApp={false}
            onRequestClose={this.handleCloseModal}
          >
            <div>
              <img
                src={Heroes.heroes[this.state.selectedHero].image}
                alt="detail"
              ></img>
              <h4>{Heroes.heroes[this.state.selectedHero].name}</h4>
              <p>
                Primary Attribute:{" "}
                {Heroes.heroes[this.state.selectedHero].primaryAttribute}
              </p>
              <p>
                Attack Type: {Heroes.heroes[this.state.selectedHero].attackType}
              </p>
              <p>Role(s): {Heroes.heroes[this.state.selectedHero].roles}</p>
            </div>
            <button className="backBtn" onClick={this.handleCloseModal}>
              Back
            </button>
          </Modal>
        </div>
      </div>
    );
  }
}
