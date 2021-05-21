import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: '/photo.jpg',
      name: 'Miguel Gonzalez',
      profession: 'FrontEnd & UI Designer Developer',
      bio: '❤ Desarrollador FrontEnd, Diseño de interfaces, Maquetación, UI, UX, Design First to Mobile.',
      address: 'Calle 17 #30-35, Ciudad Verde, Soacha, Cundinamarca, Colombia',
      social: [
        {name: 'github', url: 'https://github.com/Miguel122343'},
        {name: 'facebook', url: 'https://www.facebook.com/profile.php?id=100017555028400'},
        {name: 'Instagram', url: 'https://www.instagram.com/Miguel122343/'},
      ],
      experience: [
        {jobTitle: 'FrontEnd', company: 'InnovaTech', startDate: 'Jul 2020', endDate: 'Present', jobDescription: 'Desarrollo e integración de Maqueta. Forme Parte Del Equipo de Desarrollador FrontEnd'},
        {jobTitle: 'FrontEnd', company: 'Inversiones Git de Venezuela', startDate: 'September 2019', endDate: 'Jan 2020', jobDescription: 'Forme Parte Del Equipo de Desarrollador FrontEnd'},
      ],
      education: [
        {degree: '1° y 2° año de Bachillerato', institution: 'U.E.Instituto Eduardo Rohl,', startDate: 'Oct 2014', endDate: 'Jul 2016', description: 'Estudios de 1° y 2° año de Bachiler.'},
        {degree: '3°, 4° y 5° año de Bachillerato', institution: 'U.E. Antonio Sandoval', startDate: 'Oct 2016', endDate: 'Jun 2019', description: 'Estudios de 3°, 4° y 5° año de Bachiller, Obteniendo el Bachillerato a mis 17 años.'},
      ],
      certificate: [
        {name: 'Bachillerato', institution: 'U.E. Antonio Sandoval', date: 'Jun 2019', description: 'Certificado de promoción de bachiller de la república bolivariana de venezuela' }
      ],
      skills: [
        {name: 'HTML5', percentage: '90%'},
        {name: 'CSS', percentage: '70%'},
        {name: 'JavaScript', percentage: '70%'},
        {name: 'Laravel', percentage: '60%'},
        {name: 'Vue', percentage: '70%'},
        {name: 'React', percentage: '60%'},
        {name: 'Bootstrap 4.5', percentage: '90%'},
        {name: 'Bootstrap 5', percentage: '70%'},
        {name: 'Tailwind', percentage: '40%'}

      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social}
              create={person.created}/>
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
