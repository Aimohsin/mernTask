import React,{Component} from 'react';
import './page-design.css';
import image1 from '../images/home_23.jpg';
import image2 from '../images/home_25.jpg';
import image3 from '../images/home_27.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default class pageDesign extends Component{
    render(){
        return(
            <div>
                <section id="latest-work">
                <ul>
                    <li>
                        <img src={image1} />
                        <h3>Groenland</h3>
                        <p class="tags">Les glaces du Sud Groenland</p>
                        <div className="row">
                            <div className="col-6">
                            <i style={{marginRight:'10px'}} class="far fa-calendar"></i>
                                13 jours 
                            </div>
                            <div className="col-6">
                            <i style={{marginRight:'10px'}} class="fas fa-spinner"></i>
                                Modere
                            </div>
                        </div>
                        <p style={{marginTop: '40px', borderTop: '2px solid #000000'}}>A patir de</p>
                        <h2>2 995 $</h2>
                    </li>
                    <li>
                        <img src={image2} />
                        <h3>Norvege</h3>
                        <p class="tags">Entre montagnes et fjords les iles Lofoten</p>
                        <div className="row">
                            <div className="col-6">
                            <i style={{marginRight:'10px'}} class="far fa-calendar"></i>
                                13 jours
                            </div>
                            <div className="col-6">
                            <i style={{marginRight:'10px'}} class="fas fa-spinner"></i>
                                Modere
                            </div>
                        </div>
                        <p style={{marginTop: '40px', borderTop: '2px solid #000000'}}>A patir de</p>
                        <h2>2 445 $</h2>
                    </li>
                    <li>
                        <img src={image3} />
                        <h3>Spitzberg</h3>
                        <p class="tags">Texas Bar</p>
                        <div className="row">
                            <div className="col-6">
                            <i style={{marginRight:'10px'}} class="far fa-calendar"></i>
                                13 jours
                            </div>
                            <div className="col-6">
                            <i style={{marginRight:'10px'}} class="fas fa-spinner"></i>
                                Modere
                            </div>
                        </div>
                        <p style={{marginTop: '40px', borderTop: '2px solid #000000'}}>A patir de</p>
                        <h2>5 995 $</h2>
                    </li>
                </ul>
            </section>
            </div>
        )
    }
}