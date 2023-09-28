import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectsSection.css';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const ProjectsSection = () => {
  return (
    <section className='projects container'>
        <h3 className="title">Projects</h3>

				<div className='project'>
					<div className='project-content'>
						<div className='line'></div>
						<div>
							<h4>HeroApp</h4>
							<p>React, Javascript, HTML, Bootstrap, CSS</p>
							<p>
								App que recupera heroes de un json y los muestra en varias pantallas con 
								una barra de busqueda y filtros para bucar los heroes 
							</p>

							<div className='buttons-grid'>
								<button className='button-outlined'>Code</button>
								<button className='button'>
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									Page
								</button>
							</div>

						</div>
					</div>

					<div className='image-carrousel'>
						<img src="https://via.placeholder.com/640x360" alt="" className='image'/>
						<img src="https://via.placeholder.com/640x360" alt="" className='image'/>
					</div>
				</div>
				<div className='project'>
					<div className='project-content'>
						<div className='line'></div>
						<div>
							<h4>HeroApp</h4>
							<p>React, Javascript, HTML, Bootstrap, CSS</p>
							<p>
								App que recupera heroes de un json y los muestra en varias pantallas con 
								una barra de busqueda y filtros para bucar los heroes 
							</p>

							<div className='buttons-grid'>
								<button className='button-outlined'>Code</button>
								<button className='button'>
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									Page
								</button>
							</div>

						</div>
					</div>

					<div className='image-carrousel'>
						<img src="https://via.placeholder.com/360x360" alt="" className='image'/>
						<img src="https://via.placeholder.com/640x360" alt="" className='image'/>
					</div>
				</div>
        
    </section>
  )
}
