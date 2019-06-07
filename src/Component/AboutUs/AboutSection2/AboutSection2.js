import React, { Component } from 'react'
import './AboutSection2.css'
import logo from '../../../Images/Warren.png'
import logo1 from '../../../Images/person1.png'
import logo2 from '../../../Images/person2.png'
import logo3 from '../../../Images/person3.png'

export default class AboutSection2 extends Component {
    state = {
        data: [

            { Class_Styel: 'M_C_I Main_Class_Image ', image: logo, header: 'Mr. Warren', partitle: 'Owner', param: 'Warren Carson is a President of the company and manages all the back end of the business.', facebook: 'fab fa-facebook-f', twitter: 'fab fa-instagram', mail: 'fab fa-linkedin' },
            { Class_Styel: 'M_C_I Main_Class_Image ', image: logo1, header: 'Mr. Rob', partitle: 'Co-Owner', param: 'Rob is a partner and handles labour section of the business.', facebook: 'fab fa-facebook-f', twitter: 'fab fa-twitter', mail: 'fas fa-envelope' },
            // { Class_Styel: 'Main_Class_Image ', image: logo2, header: 'Stephan Hawk', partitle: 'Projects Manager', param: 'Stephan is important managerment. He has 22 years for manager all projects and customers.…', facebook: 'fab fa-facebook-f', twitter: 'fab fa-twitter', mail: 'fas fa-envelope' },
            // { Class_Styel: 'Main_Class_Image ', image: logo3, header: 'Thomas Ford', partitle: 'President', param: 'Mr. Thomas has 25 years long career in the construction industry, being a renown…', facebook: 'fab fa-facebook-f', twitter: 'fab fa-twitter', mail: 'fas fa-envelope' }
        ]
    }

    render() {
        return (
            <div className="Main_Selection_fluid">
                <div className="container">
                    <h1>EXPERTS</h1>
                    <div className="row mx-0">

                        {this.state.data.map(description => {
                            return (

                                <div className="col-lg-6 Colume_styling">
                                    <div className={description.Class_Styel}>
                                        <div class="hover14 column">
                                            <div>
                                                <figure><img src={description.image} /></figure>
                                            </div>
                                        </div>
                                        <div className="Sub_Class_Image">
                                            <h2>{description.header}</h2>
                                            <p>{description.partitle}</p>
                                            <p>{description.param}</p>
                                            <ul class="Under pl-0">
                                                <a href="https://www.facebook.com/mrwarrenc/"><i class={description.facebook}></i></a>
                                                <a href="https://www.instagram.com/mrwarrenc/"><i class={description.twitter}></i></a>
                                                <a href="https://www.linkedin.com/in/mrwarrenc/"><i class={description.mail}></i></a>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
