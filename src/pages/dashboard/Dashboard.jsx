import React, { useState } from 'react'
import './dashboard.scss'
import Dropdown from '../../components/dropdown/Dropdown'
import PieChart from '../../components/charts/PieChart'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import BarChart1 from '../../components/charts/BarChart1';
import BarChart2 from '../../components/charts/Barchart2';
import Data from '../../data/Data'


const Dashboard = () => {

  const { amount } = Data();
  const { coach } = Data();
  const { student } = Data();
  const { schedule } = Data();

  const Student = new Set(student.map(item => item.id));
  const countStudent = Student.size;

  const Coach = new Set(coach.map(item => item.id));
  const countCoach = Coach.size;

  const categories = ["All", "Classes", "Meetings", "Events"];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='Dashboard'>
      <div className="first">
        <div className="active">
          <div className="table">
            <div className="table-cell-head">
              ACTIVE STUDENTS
            </div>
            <div className="table-cell-body">
              {countStudent}
            </div>
          </div>
          <div className="table">
            <div className="table-cell-head">
              ACTIVE COACHES
            </div>
            <div className="table-cell-body">
              {countCoach}
            </div>
          </div>
        </div>
        <div className="action">
          <div className="head">
            QUICK ACTIONS
          </div>
          <div className="btndiv">
            <div className="btn">+ Add new student</div>
            <div className="btn">Collect fees</div>
            <div className="btn">+ Add new enquiry</div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="summary">
          <div className="head">
            <div className="name">
              FEES PAYMENT SUMMARY
            </div>
            <div className="dropdown">
              <Dropdown />
            </div>
          </div>
          <PieChart />
          <div className="legand">
            <div className="legend-box">
              <div className="head">
                <div className="color1"><FaSquare /></div>
                <div style={{ color: "#9f9f9f" }}>{amount[0].label} </div>
              </div>
              <div className="amount">
                ₹{amount[0].amount} by {amount[0].student} students
              </div>
            </div>
            <div className="legend-box">
              <div className="head">
                <div className="color2"><FaSquare /></div>
                <div style={{ color: "#9f9f9f" }}>{amount[1].label}</div>
              </div>
              <div className="amount">
                ₹{amount[1].amount} by {amount[1].student} students
              </div>
            </div>
          </div>
        </div>
        <div className="growth">
          <div className="head">
            <div className="name">
              MONTH-ON-MONTH GROWTH
            </div>
            <div className="dropdown">
              <Dropdown />
              <FaRegArrowAltCircleDown className='down' />
            </div>
          </div>
          <div className="chart">
            <div style={{ width: "100%", height: "auto" }}>
              <BarChart1 />
            </div>
            <div style={{ width: "100%", height: "auto" }}>
              <BarChart2 />
            </div>
          </div>
        </div>
      </div>
      <div className="third">
        <div className="head">
          <div className="name">
            UPCOMING SCHEDULE
          </div>
          <div className="btndiv">
            {categories.map((category, index) => (
              <div key={index} className={`btn ${selectedCategory === category ? 'active' : ''}`} onClick={() => handleCategoryClick(category)}>
                {category}
              </div>
            ))}
          </div>
          <div className="icondiv">
            <FiFilter fontSize={"1.2rem"} />
          </div>
          <div className='dots'><TbDots fontSize={"2rem"} /></div>
        </div>
        {schedule.map((sch, index) => {
          if (selectedCategory === 'All' || sch.category === selectedCategory) {
            return (
              <div className="body" key={index}>
                <input type="checkbox" />
                <div className="category">
                  <div className="cbtn">{sch.category.charAt(0)}</div>
                </div>
                <div className="date">{sch.date}</div>
                <div className="time">{sch.time}</div>
                <div className="name">{sch.name}</div>
                <div className="tag">
                  <div className="tagbtn">{sch.tag}</div>
                </div>
                <div className="change">{sch.name}</div>
                <div className="btn">
                  <button>View</button>
                </div>
              </div>
            );
          }
          return null; 
        })}
      </div>
    </div>
  )
}

export default Dashboard