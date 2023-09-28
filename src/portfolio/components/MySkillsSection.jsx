import { faCubes, faSquare, faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import "./MySkillsSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const MySkillsSection = () => {
  return (
    <section className="skills-section container">
      <div>
        <h3 className="title">My Skills</h3>
        <p className="title-p">Professional competencies</p>
        <p>
          An aspiring web developer committed to staying current with the latest
          tech trends and continuously enhancing my skills.
        </p>
      </div>

      <div className="skills">
        <div className="filter">
          <div className="filter-item filter-item-selected">
            
              <FontAwesomeIcon icon={faWindowRestore} className="icon"/>
            
            <p>Frond-end</p>
          </div>
          <div className="filter-item">
            <FontAwesomeIcon icon={faCubes} className="icon"/>
            <p>Back-end</p>
          </div>
        </div>


        <div className="skills-grid">

          <div className="grid-item">
            <FontAwesomeIcon icon={faSquare} className="icon" />
            <p className="title-p">React</p>
            <p>Basic</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faSquare} className="icon" />
            <p className="title-p">React</p>
            <p>Basic</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faSquare} className="icon" />
            <p className="title-p">React</p>
            <p>Basic</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faSquare} className="icon" />
            <p className="title-p">React</p>
            <p>Basic</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faSquare} className="icon" />
            <p className="title-p">React</p>
            <p>Basic</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faSquare} className="icon" />
            <p className="title-p">React</p>
            <p>Basic</p>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faSquare} className="icon" />
            <p className="title-p">React</p>
            <p>Basic</p>
          </div>


        </div>
      </div>

    </section>
  );
};
