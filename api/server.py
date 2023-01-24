from flask import Flask, request
import joblib

app = Flask(__name__)

# load sklearn models
softmax = joblib.load('./softmax.joblib')
svc = joblib.load('./svc.joblib')
random_forest = joblib.load('./random_forest.joblib')


@app.route("/predict")
def predict():
    classifier = request.args['classifier']
    y = float(request.args['y'])
    x = float(request.args['x'])

    if classifier == 'Softmax':
        clf = softmax
    elif classifier == 'SVC':
        clf = svc
    elif classifier == 'RandomForest':
        clf = random_forest

    # early stop if no clf
    assert clf

    scores = clf.predict_proba([[x, y]])[0]
    return list(scores.round(3))


if __name__ == "__main__":
    app.run(debug=True)
