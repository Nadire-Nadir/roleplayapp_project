import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { LEVEL_OPTIONS, SKILL_OPTIONS } from "../config";

import "../styles/addCharacter.css";
import "../styles/form.css";


class AddCharacter extends React.Component {
  constructor(props) {
    super(props);

    this.take = this.take.bind(this);
    this.publish = this.publish.bind(this);

    this.state = {
      name: "",
      race: "",
      class: "",
      level: "",
      strength: "",
      dexterity: "",
      constitution: "",
      intelligence: "",
      wisdom: "",
      charisma: "",
      status: "",
      message: "",
    };
  }

  take = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "name":
        return this.setState({ name: e.target.value });
      case "race":
        return this.setState({ race: e.target.value });
      case "class":
        return this.setState({ class: e.target.value });
      case "level":
        return this.setState({ level: e.target.value });
      case "strength":
        return this.setState({ strength: e.target.value });
      case "dexterity":
        return this.setState({ dexterity: e.target.value });
      case "constitution":
        return this.setState({ constitution: e.target.value });
      case "intelligence":
        return this.setState({ intelligence: e.target.value });
      case "wisdom":
        return this.setState({ wisdom: e.target.value });
      case "charisma":
        return this.setState({ charisma: e.target.value });

      default:
        return this.setState({
          name: "",
          race: "",
          class: "",
          level: "",
          strength: "",
          dexterity: "",
          constitution: "",
          intelligence: "",
          wisdom: "",
          charisma: "",
        });
    }
  };

  publish = (e) => {
    e.preventDefault();
    const newCharacter = {
      name: this.state.name,
      race: this.state.race,
      class: this.state.class,
      level: this.state.level,
      strength: this.state.strength,
      dexterity: this.state.dexterity,
      constitution: this.state.constitution,
      intelligence: this.state.intelligence,
      wisdom: this.state.wisdom,
      charisma: this.state.charisma,
    };
    axios
      .post("/create-character", newCharacter, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        this.props.history.push("/");
        this.setState({ status: "ok", message: "Published successfully!" });
      })
      .catch((error) => {
        this.setState({ status: "no", message: "Publishing failed!" });
        console.log("User auth error: " + error);
      });
  };

  render() {
    return (      
          <div id="add_character">
            <div id="add_character_content">
              <div className="character_form_group">
                <label className="add_character_form">
                  Character Name:
                  <input
                    onChange={this.take}
                    name="name"
                    value={this.state.name}
                    type="text"
                    className="character_input basic_input"
                    placeholder="Inter name"
                  >
                  </input>
                </label>
              </div>
              <div className="character_form_group">
                <label className="add_character_form">
                  Choose Race:
                  <select
                    onChange={this.take}
                    name="race"
                    value={this.state.race}
                    type="text"
                    className="character_input basic_input"
                    placeholder="">
                    <option defaultValue="race">
                      choose your race
                    </option>
                    <option value="human">Human</option>
                    <option value="elf">Elf</option>
                    <option value="dwarf">Dwarf</option>
                    <option value="halfling">Halfling</option> 
                    <option value="half-orc">Half-Orc</option>
                    <option value="half-elf">Half-Elf</option>
                  </select>
                </label>
              </div>

              <div className="character_form_group">
                <label className="add_character_form">
                  Choose Class:                
                  <select
                    onChange={this.take}
                    name="class"
                    value={this.state.class}
                    type="text"
                    className="character_input basic_input"
                    placeholder=""
                  >
                  <option defaultValue="class">
                      choose your class
                  </option>
                  <option value="wizard">Wizard</option>
                  <option value="fighter">Fighter</option>
                  <option value="paladin">Paladin</option>
                  <option value="rogue">Rogue</option> 
                  <option value="ranger">Ranger</option>
                  <option value="cleric">Cleric</option>
                  </select>
                </label>
              </div>

              <div className="character_form_group">
                <label className="add_character_form">
                  Choose Starting Level:
                  <select
                    onChange={this.take}
                    name="level"
                    value={this.state.level}
                    type="number"
                    className="character_input basic_input"
                    placeholder=""
                  >
                    {LEVEL_OPTIONS.map((item) => {
                      return(
                      <option key={item}>{item}</option>
                      )
                    })}
                  </select>
                </label>
              </div>
              <br />

              <div className="character_form_group">
                <label className="add_character_form">
                  Strength 
                  <select
                    onChange={this.take}
                    name="strength"
                    value={this.state.strength}
                    type="number"
                    className="character_input skill_input"
                    placeholder=""
                  >
                    {SKILL_OPTIONS.map((item) => {
                      return(
                        <option key={item}>{item}</option>
                      )
                    })}
                  </select>
                </label>
              </div>

              <div className="character_form_group">
                <label className="add_character_form">
                  Dexterity
                  <select
                    onChange={this.take}
                    name="dexterity"
                    value={this.state.dexterity}
                    type="number"
                    className="character_input skill_input"
                    placeholder=""
                  >
                    {SKILL_OPTIONS.map((item) => {
                      return(
                        <option key={item}>{item}</option>
                      )
                    })}
                  </select>
                </label>
              </div>

              <div className="character_form_group">
                <label className="add_character_form">
                  Constitution
                  <select
                    onChange={this.take}
                    name="constitution"
                    value={this.state.constitution}
                    type="number"
                    className="character_input skill_input"
                    placeholder=""
                  >
                     {SKILL_OPTIONS.map((item) => {
                      return(
                        <option key={item}>{item}</option>
                      )
                    })}
                  </select>
                </label>
              </div>

              <div className="character_form_group">
                <label className="add_character_form">
                  Intelligence
               
                  <select
                    onChange={this.take}
                    name="intelligence"
                    value={this.state.intelligence}
                    type="number"
                    className="character_input skill_input"
                    placeholder=""
                  >
                     {SKILL_OPTIONS.map((item) => {
                      return(
                        <option key={item}>{item}</option>
                      )
                    })}
                  </select>
                </label>
              </div>

              <div className="character_form_group">
                <label className="add_character_form">
                  Wisdom
                  <select
                    onChange={this.take}
                    name="wisdom"
                    value={this.state.wisdom}
                    type="number"
                    className="character_input skill_input"
                    placeholder=""
                  >
                     {SKILL_OPTIONS.map((item) => {
                      return(
                        <option key={item}>{item}</option>
                      )
                    })}
                  </select>
                </label>
              </div>

              <div className="character_form_group">
                <label className="add_character_form">
                  Charisma
                
                  <select
                    onChange={this.take}
                    name="charisma"
                    value={this.state.charisma}
                    type="number"
                    className="character_input skill_input"
                    placeholder=""
                  >
                    {SKILL_OPTIONS.map((item) => {
                      return(
                        <option key={item}>{item}</option>
                      )
                    })}
                  </select>
                </label>
              </div>
              <br />

              <div className="character_form_group" id="create_character_btn_div">
                
                <button
                  id="create_character_btn"
                  className="action_btns"
                  type="button"
                  onClick={this.publish}
                >
                  CREATE CHARACTER
                </button>
              </div>
            </div>
          </div>       
    );
  }
}

export default withRouter(AddCharacter);
