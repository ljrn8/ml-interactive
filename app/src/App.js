import Title from "./components/Title";
import svmRandom from "./assets/svmRandom.png";
import XYPredictor from "./components/Predictor";
import Appendix from "./components/Appendix";

import flower from "./assets/flower-svgrepo-com.svg";
import sun from "./assets/light-mode-svgrepo-com.svg";
import softGraph from "./assets/softGraph.png";
import svmMoons from "./assets/svmMoons.png";
import randomForest from "./assets/RandomForest.png";

import arrow from "./assets/back-svgrepo-com.svg";

/*
 * TODO
 *  optional:
 *    add latex
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
	  <title>Interactive ML</title>
	  <Title image={flower} />
      <Appendix arrow={arrow} />

      <button id="color-switcher" onClick={() => switchColors()}>
        <img src={sun} alt=" >> invert colors << " />
      </button>
      <div className="section" id="About">
        <p>
          This website is a beginner project im using to develope skills in web
          frameworks, data science and machine learning. Dont actually use this
          website for learning about these models as the explanations are pretty
          bad.
        </p>
        <p>
          You can view the jupyter notebook used to create the models and
          diagrams either from within the git repo or on google collab{" "}
          <a href="https://colab.research.google.com/drive/13G2f7gqCxqQL72dSehzz9lSDlnvZIKQc?usp=sharing">
            here
          </a>
        </p>
      </div>


      <div className="section" id="Softmax">

        <img src={flower} alt="..." class="flower"></img>
        <img src={flower} alt="..." class="flower"></img>
        <img src={flower} alt="..." class="flower"></img>
        <hr></hr>


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
          instead of 2 classes.
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
       <img src={flower} alt="..." class="flower"></img>
        <img src={flower} alt="..." class="flower"></img>
        <img src={flower} alt="..." class="flower"></img>
        <hr></hr>
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
        <p>You may use the slider to see predictions made by the same model</p>
        <XYPredictor
          classifier={"SVC"}
          labels={["square", "triangle"]}
          Yrange={[-1, 2]}
          Xrange={[-2, 3]}
        />
      </div>

      <div className="section" id="Random-Forest">
       <img src={flower} alt="..." class="flower"></img>
        <img src={flower} alt="..." class="flower"></img>
        <img src={flower} alt="..." class="flower"></img>
        <hr></hr>
        <h1>Random Forest</h1>
        <p>
          A Random Forest classifier is another popular algorithm known as an
          'ensemble'. Multiple 'child' models are to vote on the best class and
          all class votes are collated into the final prediction.
        </p>
        <div className="graph">
          <img id="softGraph" src={randomForest} alt="..."></img>
        </div>
        <p>
          The sub models in question are know as <b>decision trees</b> that make
          predictions based of a set of non-paramtetric 'gates' for each input
          feature. The model throws samples down different directions of the
          decision tree based off these trained threshold values.
        </p>
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
