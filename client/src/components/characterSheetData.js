import React from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { withRouter } from "react-router-dom";
import "../styles/characterSheet.css";

class CharacterSheetData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {},
      id: "",
      loading: true,
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    axios
      .get(`/character/${params.id}`)
      .then((res) => {
        this.setState({
          character: res.data,
          loading: false,
        });
      })
      .catch(function (error) {
        console.log("Fetching error", error);
      });
  }

  render() {
    const { character, loading } = this.state;
    if (loading) {
      return (
        <div id="character_sheet">
          <Spinner />
        </div>
      );
    }
    return (
      <div id="charactersheet_detail">
        <div id="frofile_block">
          <div className="b_g" id="basic_info_block">
            <p>NAME: {character.name}</p>
            <p>RACE: {character.race}</p>
            <p>CLASS: {character.class}</p>
            <p>LEVEL: {character.level}</p>
          </div>
          <div id="cha_pic_block"></div>
        </div>

        <div id="cha_core_info">
          <div className="block" id="block_01">
            <div id="core_skill_block ">
              <div className="core_skill b_g">
                <div className="box_title"><p>STRENGTH</p></div>
                <div className="core_skill_dice border">+10</div>
                <div className="core_skill_value border"><p>{character.strength}</p></div>
              </div>
              <div className="core_skill b_g">
                <div className="box_title"><p>DEXTERITY</p></div>
                <div className="core_skill_dice border"></div>
                <div className="core_skill_value border"><p>{character.dexterity}</p></div>
              </div>
              <div className="core_skill b_g">
                <div className="box_title"><p>CONSTITUTION</p></div>
                <div className="core_skill_dice border"></div>
                <div className="core_skill_value border"><p>{character.constitution}</p></div>
              </div>
              <div className="core_skill b_g">
                <div className="box_title"><p>INTELLIGENCE</p></div>
                <div className="core_skill_dice border"></div>
                <div className="core_skill_value border"><p>{character.intelligence}</p></div>
              </div>
              <div className="core_skill b_g">
                <div  className="box_title"><p>WISDOM</p></div>
                <div className="core_skill_dice border"></div>
                <div className="core_skill_value border"><p>{character.wisdom}</p></div>
              </div>
              <div className="core_skill b_g">
                <div  className="box_title"><p>CHARISMA</p></div>
                <div className="core_skill_dice border"></div>
                <div className="core_skill_value border"><p>{character.charisma}</p></div>
              </div>
            </div>
            <div id="skill_2">
              <div className="skill_2_col b_g" id="inspiration_box">
                <div  className="box_title"><p>INSPIRATION</p></div>
                <div className="value_box border b_g" id="inspiration"></div>
              </div>
              <div className="skill_2_col b_g" id="pro_bonus_box">
                <div  className="box_title"><p>PROFICIENCY BONUS</p></div>
                <div className="value_box border b_g" id="pro_bonus"></div>
              </div>
              <div className="skill_2_col b_g" id="saving_throws">
                <div className="content" id="saving_throws_content">
                  <ul>
                    <li>
                      <div></div>
                    </li>
                    <li>
                      <div></div>
                    </li>
                    <li>
                      <div></div>
                    </li>
                    <li>
                      <div></div>
                    </li>
                    <li>
                      <div></div>
                    </li>
                    <li>
                      <div></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="skill_2_col b_g" id="skill_details">
                <div className="content" id="skill_details_content">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="block" id="block_02">
            <div id="hit_block">
              <div className="hit_block0" id="quick_info">
                <div className="quick_info0 b_g"></div>
                <div className="quick_info0 b_g"></div>
                <div className="quick_info0 b_g"></div>
              </div>
              <div id="cur_points" className="b_g"></div>
              <div className="hit_block0 b_g" id="tem_points"></div>
              <div className="hit_block0" id="dice">
                <div className="dice_block b_g" id="hiit_dice"></div>
                <div className="dice_block b_g"></div>
              </div>
            </div>
            <div id="atk_spl" className="b_g"></div>
          </div>
        
          <div className="block" id="block_03">
            <div className="block_03_00 b_g"></div>
            <div className="block_03_00 b_g"></div>
            <div className="block_03_00 b_g"></div>
            <div className="block_03_00 b_g"></div>
          </div>
        </div>
       
      </div>
      
    );
  }
}

export default withRouter(CharacterSheetData);
