import Graph from './Graph'

function Section3() {
  return (
    <div className="section3">
      <div className="card-con">
        <div className="card">
          <i class="ri-gamepad-fill"></i>
          <p className='titel'>Professional hard courts <span className="highlight">with tournament-grade lighting & climate control play in perfect conditions, in</span> any season.</p>
          <div className="switch-con">
            <label class="switch">
              <input type="checkbox" checked />
              <span class="slider round"></span>
            </label>
            <span class="mode-text">Game Mode</span>
          </div>
        </div>
        <div className="card card-img">
          <button className="btn btn-h">Private & Group Lessons</button>
        </div>
        <div className="card">
          <div className="titel">100+</div>
          <p>Pro Coaches</p>
          <span className='dc'>Certified professionals ready to boost your game from first serve to tournament level.</span>

          <Graph />
        </div>
      </div>
    </div>

  )
}


export default Section3