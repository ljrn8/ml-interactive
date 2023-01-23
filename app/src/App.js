import Title from "./components/Title";
import svmRandom from "./assets/svmRandom.png";
import XYPredictor from "./components/Predictor";
import Appendix from "./components/Appendix";

import flower from "./assets/flower.png";
import softGraph from "./assets/softGraph.png";
import svmMoons from "./assets/svmMoons.png";
import RandomForest from "./assets/RandomForest.png";

/*
 * TODO
 *
 * replace flower with svg graphic = orange
 *  git stasking on github
 * add third accent color
 *  top right fix a up arrow and color switcher
 *
 */

function App() {
  const switchColors = () => {
    const bgCol = getColor("--background-color");
    const fgCol = getColor("--foreground-color-primary");
    setColor("--background-color", fgCol);
    setColor("--foreground-color-primary", bgCol);
  };

  const getColor = (variable) =>
    getComputedStyle(document.documentElement).getPropertyValue(variable);

  const setColor = (variable, newColor) =>
    document.documentElement.style.setProperty(variable, newColor);

  return (
    <div className="App">
      <Title image={flower} />
      <Appendix />
      <button id="color-switcher" onClick={() => switchColors()}>
        <img src={flower} alt="invert colors" />
      </button>
      <div className="section" id="About">
        <p>
          This website is a beginner project im using to develope skills in web
          developement, data science and machine learning. Dont actually use
          this website for learning about these models. TODO :: link to collab
          here
        </p>
      </div>

      <div className="section" id="Softmax">
        <h1>Softmax</h1>
        <p>
          Also recognized as multinomal logistic regression, Softmax regression
          uses a single layer of weights and biases and a softmax function to
          classify multiple classes <b>linearly.</b> <br></br>
          The below diagram shows the softmax classification used on the iris
          dataset, where iris flowers are plotted by there petal width against
          there length. With green being iris virginica, orange being iris
          versicolour and blue being iris setosa.
        </p>
        <div className="graph">
          <img id="softGraph" src={softGraph} alt="..."></img>
        </div>
        <p>
          Softmax regession requires that after the paramatized layer, all
          resultant scores per class be fed through the softmax function, such
          that all scores add to 0, as if it were a logistic prediction of 3
          instead of 2.
        </p>
        <p>
          below you can adjust the sliders to see real time predictions made by
          The same model
        </p>
        <XYPredictor
          classifier={"Softmax"}
          labels={["Iris Setosa", "Iris Versicolour", "Iris Virginica"]}
          Yrange={[0, 7]}
          Xrange={[0, 3]}
        />
      </div>

      <div className="section" id="SVM">
        <h1>SVM</h1>
        <p>
          Support vector machine is a powerful algorithm that optimizes its
          decision boundary by finding the maximum distance between vectors of
          differering classes: support vectors. Additionally, SVM will add
          polynomial features to the data such to reveal a clearer, linearly
          seperable boundary in higher dimensional space, hence the curves in
          the graphs below.
        </p>
        <div className="graph">
          <img id="softGraph" src={svmRandom} alt="..."></img>
        </div>
        <p>
          In a cartesion space, SVM only really shines when the boundary between
          classes isnt immediantly linear, we can see a better exploitation of
          this trait here:
        </p>
        <div className="graph">
          <img id="softGraph" src={svmMoons} alt="..."></img>
        </div>
        <p>
          +add latex+ You may use the slider to see predictions made by the same
          model
        </p>
        <XYPredictor
          classifier={"SVC"}
          labels={["square", "triangle"]}
          Yrange={[-1, 2]}
          Xrange={[-2, 3]}
        />
      </div>

      <div className="section" id="Random-Forest">
        <h1>Random Forest</h1>
        <p> exp 1 </p>
        <div className="graph">
          <img id="softGraph" src={RandomForest} alt="..."></img>
        </div>
        <p> exp 2 </p>
        <XYPredictor
          classifier={"RandomForest"}
          labels={["square", "triangle"]}
          Yrange={[-1, 2]}
          Xrange={[-2, 3]}
        />
      </div>
    </div>
  );
}

export default App;
