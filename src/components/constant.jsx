import python from "../assets/icons/skills-icon/python.svg";
import ml from "../assets/icons/skills-icon/ml.png";
import html from "../assets/icons/skills-icon/html.svg";
import css from "../assets/icons/skills-icon/css.svg";

// projectImages
import project1 from "../assets/images/projectImages/project1.png";
import project2 from "../assets/images/projectImages/project2.png";

export const Projects = {
  RainfallPrediction: {
    image: project1,
    title: "Rainfall Prediction System",
    subTitle: "Machine Learning Forecasting System",
    githubLink: "https://github.com/Shaikarif11/Rainfall-Prediction-System",
    insights: {
      desc: "Built a machine learning system to predict whether rainfall will occur the next day using historical weather data. Performed extensive weather data preprocessing and feature engineering to optimize prediction accuracy. Developed a real-time prediction interface powered by a Flask backend and a modern HTML/CSS frontend.",
      category: "Machine Learning, Flask, Web Application",
      techStack: [python, ml, html, css],
      reportLink: "",
    },
  },
  LiverDiseasePrediction: {
    image: project2,
    title: "Liver Disease Prediction System",
    subTitle: "End-to-End Predictive Healthcare System",
    githubLink: "https://github.com/Shaikarif11/Liver-Disease-Prediction-System",
    insights: {
      desc: "Developed an end-to-end machine learning application to predict liver disease using patient medical records. Implemented a robust data preprocessing pipeline, trained and optimized classification models, and built a real-time Flask web application to support medical dataset analysis and clinical decision making.",
      category: "Healthcare, Machine Learning, Flask API",
      techStack: [python, ml],
      reportLink: "",
    },
  },
};
