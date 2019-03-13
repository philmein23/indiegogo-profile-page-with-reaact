import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { perksData } from "./data";

import "./styles.css";

function App() {
  let [data, setData] = useState(null);

  useEffect(() => {
    setData(perksData);
  });

  return (
    <main className="grid-layout" id="container">
      <div className="image-container">
        <img
          className="main-image"
          src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,f_auto,w_695/v1548854411/m98iuciunahlrrubqutd.jpg"
          title="image"
        />
      </div>
      <div>
        <div className="funding-header">Funding</div>
        <div>
          <h1>Micro Drone 4.0: Small, Intelligent, Autonomous</h1>
        </div>
        <p>
          A palm-sized autonomous drone under $200 that captures smooth aerial
          video
        </p>
        <div>Project Owner Info....</div>
        <div className="donation-metrics">
          <div>
            <span className="dollar-value">$459,652</span>
            USD raised by 2903 backers
          </div>
          <div className="progress-bar">
            <span className="bar" />
          </div>
          <div className="bottom-data">
            <div>
              612% of $75000
              <span className="flexible-goal">flexible goal</span>
            </div>
            <div>14 days left</div>
          </div>
        </div>
        <div className="donate-actions">
          <div className="donate-button">
            <button className="back-it">Back It</button>
          </div>
          <div className="other-buttons" />
        </div>
      </div>

      <div>
        <div className="overview">Overview</div>
        <div className="image-text-container">
          <div className="width-30">
            <img
              className="overview-image"
              src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_240,w_320/v1550155396/ilio4ya8t0jl2go9qid9.jpg"
              title="image-2"
            />
          </div>
          <div className="width-70">
            <div className="overview-description">
              <div>
                Micro Drone 4.0 is our next generation palm-sized Drone,
                bridging the gap between entry level and very expensive
                professional videography quadcopters. By studying your feedback
                of our prior drones and competitor reviews, we developed three
                key features to create a mainstream drone for everyone:
              </div>

              <div>
                ➀ Automatic Self-Hovering: Eliminate steep piloting learning
                curve
              </div>
              <div>
                ➁ Buttery Smooth Video: Eliminate shaky footage disappointment
              </div>
              <div>
                ➂ Affordable Price: Eliminate need to buy professional drones
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="width-60">
          <div className="featured-in-title">Featured In</div>
          <div className="featured-in-content">
            <div className="svg-star width-20">
              <svg
                viewBox="0 0 40 80"
                id="badge-collections"
                width="100%"
                height="100%"
              >
                <title>Collection Badge</title>
                <path
                  d="M0 3.995A4 4 0 0 1 4 0h32c2.21 0 4 1.783 4 3.995V80L20 66.667 0 80V3.995zM20 48l-7.053 3.708 1.347-7.854-5.707-5.562 7.886-1.146L20 30l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854L20 48z"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div className="width-80">
              <a className="link">Indiegogo Team Favorites Collection</a>
            </div>
          </div>
        </div>
      </div>
      <div className="perks">
        <div className="width-60">
          <div>Select a perk</div>
          {data &&
            data.length &&
            data.map(perk => {
              return <div>{perk.perkName}</div>;
            })}
        </div>
      </div>
    </main>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// <main className="flex-layout" id="container">
//   <div className="item-row justify-center">
//     <div className="width-40 image-container">
//       <img
//         className="main-image"
//         src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,f_auto,w_695/v1548854411/m98iuciunahlrrubqutd.jpg"
//         title="image"
//       />
//     </div>
//     <div className="width-40 funding-info">
//       <div className="funding-header">Funding</div>
//       <div>
//         <h1>Micro Drone 4.0: Small, Intelligent, Autonomous</h1>
//       </div>
//       <p>
//         A palm-sized autonomous drone under $200 that captures smooth aerial
//         video
//       </p>
//       <div>Project Owner Info....</div>
//       <div className="donation-metrics">
//         <div>
//           <span className="dollar-value">$459,652</span>
//           USD raised by 2903 backers
//         </div>
//         <div className="progress-bar">
//           <span className="bar" />
//         </div>
//         <div className="bottom-data">
//           <div>
//             612% of $75000
//             <span className="flexible-goal">flexible goal</span>
//           </div>
//           <div>14 days left</div>
//         </div>
//       </div>
//       <div className="donate-actions">
//         <div className="donate-button">
//           <button className="back-it">Back It</button>
//         </div>
//         <div className="other-buttons" />
//       </div>
//     </div>
//   </div>
//   <div className="item-row justify-center">
//     <div className="width-40">
//       <div className="overview">Overview</div>
//       <div className="image-text-container">
//         <div className="width-30">
//           <img
//             className="overview-image"
//             src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_240,w_320/v1550155396/ilio4ya8t0jl2go9qid9.jpg"
//             title="image-2"
//           />
//         </div>
//         <div className="width-70">
//           <div className="overview-description">
//             <div>
//               Micro Drone 4.0 is our next generation palm-sized Drone,
//               bridging the gap between entry level and very expensive
//               professional videography quadcopters. By studying your
//               feedback of our prior drones and competitor reviews, we
//               developed three key features to create a mainstream drone for
//               everyone:
//             </div>

//             <div>
//               ➀ Automatic Self-Hovering: Eliminate steep piloting learning
//               curve
//             </div>
//             <div>
//               ➁ Buttery Smooth Video: Eliminate shaky footage disappointment
//             </div>
//             <div>
//               ➂ Affordable Price: Eliminate need to buy professional drones
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="width-40">
//       <div className="width-60">
//         <div className="featured-in-title">Featured In</div>
//         <div className="featured-in-content">
//           <div className="svg-star width-20">
//             <svg
//               viewBox="0 0 40 80"
//               id="badge-collections"
//               width="100%"
//               height="100%"
//             >
//               <title>Collection Badge</title>
//               <path
//                 d="M0 3.995A4 4 0 0 1 4 0h32c2.21 0 4 1.783 4 3.995V80L20 66.667 0 80V3.995zM20 48l-7.053 3.708 1.347-7.854-5.707-5.562 7.886-1.146L20 30l3.527 7.146 7.886 1.146-5.707 5.562 1.347 7.854L20 48z"
//                 fill-rule="evenodd"
//               />
//             </svg>
//           </div>
//           <div className="width-80">
//             <a className="link">Indiegogo Team Favorites Collection</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </main>
