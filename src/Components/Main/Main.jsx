import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img1 from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgScr: img1,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is considered to be one of the most beautiful places on the planet. The “Pearl of the Pacific,” as it is known, is an island paradise, with a crystal clear lagoon, superb coral reefs, vast stretches of white sandy beach and luxuriant forests of lush green tropical vegetation.The “Pearl of the Pacific,” as it is known, is an island paradise, with a crystal clear lagoon.',
  },

  {
    id: 2,
    imgScr: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Machu Picchu , Ancient fortress city of the Incas in the Andes Mountains, south-central Peru. Perched near Cuzco in a narrow saddle between two sharp peaks, at an elevation of 7,710 ft (2,350 m), it escaped detection by the Spaniards.',
  },

  {
    id: 3,
    imgScr: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc. however, they are separated from land by an expanse of water.',
  },

  {
    id: 4,
    imgScr: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Cappadocia is a region spreading an area covering the provinces particularly to Nevsehir, Kirsehir, Nigde, Aksaray and Kayseri. The region of Cappadocia is a place where nature and history integrates. While geographical events created fairy chimneys the people carved houses and churches inside these chimneys.',
  },

  {
    id: 5,
    imgScr: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'Guanajuato (Spanish pronunciation: [gwanaˈxwato], Otomi: Ndänuë) is a municipality in central Mexico and the capital of the state of the same name. It is part of the macroregion of the Bajío. It is located in a narrow valley, which makes its streets narrow and winding, alleys and squares have earned this wonderful city the nomination as a World Heritage Site.',
  },

  {
    id: 6,
    imgScr: img6,
    destTitle: 'Clinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'Cinque Terre, the five towns, is a string of five ancient fishing villages perched high on the Italian Riviera just south of Genoa in northwest Italy. The tiny villages were until recently linked only by mule tracks and accessible only by rail or water.The Cinque Terre represent one of the most pristine and extensive Mediterranean natural and semi-natural areas of Liguria.',
  },

  {
    id: 7,
    imgScr: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkor Wat is an architectural masterpiece and the largest religious monument in the world – covering an area four times the size of Vatican City. It was built by the Khmer King Suryavarman II in the first half of the 12th century, around the year 1110-1150, making Angkor Wat almost 900 years old.',
  },

  {
    id: 8,
    imgScr: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.',
  },

  {
    id: 9,
    imgScr: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali Island has many places of interest such as rice paddies, beautiful panorama, volcanoes, tourism activities as well as attractions. Also, it also has a beautiful jungle, long sandy beaches, warm blue water, crashing surf and friendly people.Things Bali is Famous For. Bali is home to some of the most beautiful beaches in the world.',
  },
]

const Main = () => {
    //lets create a react hook to add a scroll animations....
  
    useEffect(()=>{
      Aos.init({duration: 2000})
  
    }, [])

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right"className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgScr, destTitle, location, grade, fees, description })=>{
            return (
              <div key={id} data-aos="fade-up"
               className="singleDestination">

                <div className="imageDiv">
                  <img src={imgScr} alt=
                  {destTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">
                      {destTitle}
                    </h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon"/>
                      <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      DETAILS <HiOutlineClipboardCheck  className="icon"/>
                    </button>

                </div>
                </div>
            )         
          })
        }

      </div>

    </section>
  )
}

export default Main