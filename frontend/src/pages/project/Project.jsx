import React, { useEffect } from 'react';
import './Project.css';
import Headings from '../../component/Headings/Headings';
import MyWork from '../../component/MyWork/MyWork';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading, SetPortfolioData } from '../../redux/createSlice';
import axios from 'axios';

function Project() {
  const dispatch = useDispatch();
  const { portfolioData, loading } = useSelector((state) => state.root);

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading()); // Show loading before API call
      const response = await axios.get(`${window.location.origin}/api/getData`); // Replace with localhost link
      dispatch(SetPortfolioData(response.data.projects)); // Assuming portfolioData contains a "projects" array
      dispatch(HideLoading()); // Hide loading after success
    } catch (error) {
      dispatch(HideLoading()); // Ensure loading is hidden on error
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <div className='projects'>
      <Headings tittle="Project I" span="Made" />
      <p></p>
      {loading && (
  <div className="spinner-container">
    <div className="spinner"></div>
    <div className="loading-text">Loading...</div>
  </div>
)}
 {/* Display loading state */}
      <div className="project-container">
        {portfolioData &&
          portfolioData.map((project, index) => (
            <MyWork
              key={index}
              tittle={project.tittle}
              img={project.img}
              disc={project.disc}
              url={project.url}
            />
          ))}
      </div>
    </div>
  );
}

export default Project;
