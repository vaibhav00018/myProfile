import React, { useRef } from 'react'
import logo from './logo.svg';

import './App.css';
import '../src/css/font-awesome/css/all.min.css'
import '../src/css/bootstrap.min.css'
import '../src/css/aos.css'
import '../src/css/main.css'
import profile from '../src/images/avatar.jpg'
import { useReactToPrint } from 'react-to-print';

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (

    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}
const ComponentToPrint = React.forwardRef((props, ref) => {
  return (

    <div id="top" ref={ref}>
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <div className="cover-bg text-white">
            <div className="header">
              <div className="">
                <div className="avatar hover-effect bg-white shadow-sm p-1"><img src={profile} width="100"
                  height="100" /></div>
              </div>
              <div className=" text-md-start">
                <h2 className="h4 mt-1">Vaibhav Jain</h2>
                <div>Full Stack Developer</div>
                <div className="text-small mb-1">React | TypeScript | .Net | SQL | Azure</div>
                <div className="text-small mb-1">Technical Lead at Hashedin By Deloitte</div>
              </div>
              <div className="site-nav">
                <nav role="navigation">
                  <ul className="nav justify-content-center iconLink">
                    <li className="nav-item firstLi"><i
                      className="fa fa-envelope"></i>vaibhav8147@gmail.com
                    </li>
                    <li className="nav-item"><i className="fab fa-linkedin"></i>www.linkedin.com/in/vj92
                    </li>
                    {/* <li className="nav-item"><i
                      className="fab fa-github" ></i>https://github.com/vaibhav00018
                    </li> */}
                    <li className="nav-item"><i className="fab fa-telegram"></i>+91-8147850448
                    </li>
                  </ul>
                </nav>

              </div>

            </div>
          </div>
          <div className="about-section  px-3">
            <div className="aboutmesec">
              <div className="aboutme">
                <p >I have 8 years of experience in working with multiple domain and tech fields. I have good hands on experience in UI tech stacks, microsoft technologies, cloud services, monitoring and analyzing hosted applications. </p>
              </div>
              <div class="verticalAbout">
                <div class="border-right"></div>
              </div>
              <div className="aboutExp" >
                <div >
                  <div className="expNav"><div className="">
                    <div className="">Total Experience</div>
                  </div>
                    <div className="">
                      <div className="">8 Years</div>
                    </div>
                  </div>
                  <div className="expNav">
                    <div className="">
                      <div className="">Current Organization</div>
                    </div>
                    <div className="">
                      <div className="">Deloitte</div>
                    </div>
                  </div>
                  <div className="expNav">
                    <div className="">
                      <div className="">Current Designation</div>
                    </div>
                    <div className="">
                      <div className="">Tech Lead</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none" />
          <div className="skillExp pagebreak">
            <div className="skills-section px-3  skillList">
              <h2 className="h6">Professional Skills</h2>
              <div className="">
                <div>
                  <div className="mb-2"><span>ReactJs</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary expertSkill" role="progressbar"></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>.Net Core & Framework</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary expertSkill" role="progressbar" ></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>JavaScript / TypeScript</span>
                    <div className="progress my-1 ">
                      <div className="progress-bar bg-primary expertSkill" role="progressbar" ></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2"><span>SQL Database</span>
                    <div className="progress my-1 ">
                      <div className="progress-bar bg-primary expertSkill" role="progressbar"></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>Azure</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary mediamSkill" role="progressbar"></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>Micro Services</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary expertSkill" role="progressbar" ></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>Dev-Ops/ CICD</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary mediamSkill" role="progressbar" ></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>Unit testing</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary expertSkill" role="progressbar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="work-experience-section experience">
              <h2 className="h6">Work Experience</h2>
              <div className="timeline">
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h6 mb-1">Tech Lead <span className="text-muted h6">at Hashedin By Deloitte (Jan, 2019 - Present)</span></div>
                    <div>Worked in various domains and lead the team with multiple clients like Honeywell, HCSC. Consistant on
                      performing well and have good hands on experience in React, .Net core microservices, Azure capabilities and dev-ops tools.
                    </div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h6 mb-1">Software Engineer <span className="text-muted h6">at Epicor Software (May, 2017 - Jan, 2019)</span></div>
                    <div>Worked with the product team for in-house product that worked on the supply chain management and provided the
                      customer support on the tickets.
                    </div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h6 mb-1">Software Engineer <span className="text-muted h6">at Century Link pvt Ltd (Jan, 2016 - May, 2017)</span></div>
                    <div>Worked as a software engineer with multiple external service for google maps and splunk to identify the fiber optics available in the USA
                      and to collect the data from the customer and monitor it for better experience.
                    </div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h6 mb-1">Associate Software Engineer <span className="text-muted h6">at Harman International (May, 2014 - Jan, 2016)</span></div>
                    <div>Worked with some CMS tool to provide customer real time app and website creation without having tech knowledge with simple drag and drop components.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="d-print-none " />
          <div className="page-break"></div>
          <div className="page2">
            <div className="skills-section px-3 education">
              <h2 className="h6">Education</h2>
              <hr className="d-print-none" />
              <div className="mb-3">
                <h6> Bachelor of Engineering</h6>
                <div className="text-muted text-small">Information Technology</div>
                <div className="text-muted text-small">SVCE | Indore | 2009-2013</div>

              </div>
              <h2 className="h6">Achievement</h2>
              <hr className="d-print-none" />
              <div className="mb-3">
                <p className="text-muted text-small">Been consistently recognized in the multiple awards and received twice top impactor in the organizations.
                </p><p className="text-muted text-small">Certified Azure Developer.</p>
                <p className="text-muted text-small">Provided multiple sessions to the new joiners and fresher as part of mentor.</p>
              </div>
            </div>
            <div className="education-section projects">
              <h2 className="h6">Projects & Experience</h2>
              <div className="timeline projectCard">
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h6 mb-1">HCSC <span className="text-muted h6">Claims (ReactJs | MicroFrontEnd | Web API | Concourse | Mule | ELK )</span></div>
                    <div className="text-muted text-small mb-2">HCSC is member owned health insurance company where claim experience one of the major tool for get status of the claims for the user.</div>
                    <div><ul>
                      <li>Scaled monolethic application to Micro front end application.</li>
                      <li>Provided better user experience web site to the customer for process their claims and details views of it.</li>
                      <li>Setup the CI/CD pipeline and monitoring the application.</li>
                      <li>Design the responsive web site to support multiple devices and browsers.</li>
                    </ul></div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h6 mb-1">Honeywell <span className="text-muted h6">Prowatchv (ReactJs | WebAPI | Microservices | Azure | SQL server | Monitoring)</span></div>
                    <div className="text-muted text-small mb-2">Prowatch is a complete suite of 40+ microservices that help honeywell to monitor the camera/video for an enterprise and manage the covid situation on the enterprise.</div>
                    <div><ul>
                      <li>
                        Created multiple microservices in the dot core and monitoring those services.
                      </li>
                      <li>
                        Build rich react application with various feature to manage life cycle inside the organizations.
                      </li>
                      <li>
                        Created multiple dashboard to monitoring the health of employee in the covid situation.
                      </li>
                    </ul></div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h6 mb-1">CenturyLink <span className="text-muted h6">FiberLink (JavaScript | ASP.net | Oracle DB | Splunk )</span>
                    </div>
                    <div className="text-muted text-small mb-2">With Centurylink fiberlink project help the centurylink employee to provide the fiber capacity with the location and more details along with that.</div>
                    <div>
                      <li>
                        Build a website with React and dotnet framework to identify the fiber capacity at the locations.
                      </li>
                      <li>
                        Used the google map api service to point the latitude and longitude to get the required informations.
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='hrEnd'/>
          <div className='signoff' >
            Vaibhav Jain
          </div>
        </div>
      </div>
    </div>
  )
});

export default App;
