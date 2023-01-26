import React from 'react';
import './BlogView.scss';

function BlogView() {
  return (
    <div className="page page-blog">
      <div className="blog">
        <p className="title">
          <a
            href="https://medium.com/swlh/creating-a-football-heat-map-react-component-with-recharts-ff310162cee0"
            rel="noreferrer"
          >
            Creating a Football Heat Map React Component with Recharts
          </a>
        </p>
        <p className="date">Sep 18, 2019</p>
        <p className="abstract">
          Heat maps are a great visualisation to start with when exploring sports event data that includes coordinates,
          allowing viewers to immediately focus on areas of the field that matter most.
        </p>
      </div>
      <div className="blog">
        <p className="title">
          <a
            href="https://blog.bitsrc.io/11-javascript-charts-and-data-visualization-libraries-for-2018-f01a283a5727"
            title="11 Javascript Data Visualization Libraries for 2018"
            target="_blank"
            rel="noreferrer"
          >
            11 Javascript Data Visualization Libraries for 2018
          </a>
        </p>
        <p className="date">Sep 11, 2018</p>
        <p className="abstract">
          we can use neat data visualization methods that leverage the brain’s ability to identify and process data in a
          visual way. To help you get started and easily add beautiful data visualization to your favorite application,
          here are some of the best Javascript data visualization libraries around in 2018 (unranked). Feel free to
          comment and add your own suggestions and insights!
        </p>
      </div>
      <div className="blog">
        <p className="title">
          <a
            href="https://medium.com/@arcthur/re-designed-chart-for-react-fbb31cf78415#.gc1k19sdv"
            title="Re-designed Chart for React"
            target="_blank"
            rel="noreferrer"
          >
            Re-designed Chart for React
          </a>
        </p>
        <p className="date">Jan 29, 2016</p>
        <p className="abstract">
          Over the past few years, our team were satisfied with React and Redux in some projects, which are almost web
          applications involved to data presentation or operation. The projects need use a lot of charts which is so
          painful that we decided to create new chart library for React...
        </p>
      </div>
    </div>
  );
}

export default BlogView;
