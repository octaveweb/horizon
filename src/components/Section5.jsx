import React from 'react'

function Section5() {
    return (
        <div className="section5">
            <div className="card-um">
                <div className="card-u">
                    <div className="tag">
                        <button className="tag-b">Services</button>
                    </div>
                    <p className='titel'>Explore our full range of coaching, training, and tennis experiences. From first serve to match point - we've got the right program for you.</p>
                    <button className="btn btn-h">Explore More</button>

                </div>
                <div className="card-u">
                    <div className="tag tag-d">
                        <button className="btn tag-b">Training Programs</button>
                    </div>


                    <div className="bottom">
                        <p className='titel'>Programs designed for all ages and abilities.</p>

                        <button className="btn btn-h">
                            <i class="ri-arrow-right-up-long-line"></i>
                        </button>
                    </div>

                </div>
                <div className="card-u">
                    <div className="img">
                        <div className="tag tag-d">
                            <button className="btn tag-b">Court Access</button>
                        </div>
                        <p className='titel'>Hourly Court Rental</p>

                    </div>
                    <div className="bottom">
                        <p>Step into a space built for players to grow, compete, and thrive.</p>
                        <div className="slide">
                            <button className="btn btn-h">
                               <i class="ri-arrow-left-line"></i>
                            </button>
                            <button className="btn btn-h">
                               <i class="ri-arrow-right-line"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section5