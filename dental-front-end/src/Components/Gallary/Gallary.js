import React, { useState, useEffect, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import DztImageGalleryComponent from "reactjs-image-gallery";
import FlipAnimate  from 'react-reveal/Flip';
import axios from "axios";



const photos = [
  {
    src: "assets/images/gallery/1.jpg",
    width: 3,
    height: 2,
    category: "Whitening",
  },
  {
    src: "assets/images/gallery/3.jpg",
    width: 3,
    height: 2,
    category: "Checkup",
  },
  {
    src: "assets/images/gallery/4.jpg",
    width: 3,
    height: 2,
    category: "Checkup",
  },
  {
    src: "assets/images/gallery/6.jpg",
    width: 3,
    height: 2,
    category: "Checkup",
  },
  {
    src: "assets/images/gallery/8.jpg",
    width: 3,
    height: 2,
    category: "Whitening",
  },
  {
    src: "assets/images/gallery/5.jpg",
    width: 3,
    height: 2,
    category: "Whitening",
  },
  {
    src: "assets/images/gallery/7.jpg",
    width: 3,
    height: 2,
    category: "Whitening",
  },
  {
    src: "assets/images/gallery/2.jpg",
    width: 3,
    height: 2,
    category: "Checkup",
  },
  {
    src: "assets/images/gallery/9.jpg",
    width: 3,
    height: 2,
    category: "Checkup",
  },
];

 const GalleryImg = () => {

  const [Images, setImages] = useState([]);
  const [FilterValue, setFilterValue] = useState(photos);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
const [data,setData] = useState([])
    var config ={
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    }
    useEffect(() => {
      axios
    
          .get("http://localhost:4000/Appointment/")
          .then(res => {
            setData(res.data)
            
           
          })
    }, [])
    console.log(data)
    
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    // axios.get(`http:Localhost/gallery/`).then((response) => {
      // console.log("images", response.data);
      //   setImages(response.data.results);
      //   setFilterValue(response.data.results);
    // });
  }, []);

  const ChangeHandaler = (category) => {
    
    const FilterData = photos.filter((val) => {
      return val.category === category;
    });
    setFilterValue(FilterData);
  };
  
   
  return (
    <>
      <section className="bg-lighter">
        <div className="container">
          <div className="section-title text-center mt-0">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h2 className="mt-0 line-height-1">
                  Our <span className="text-theme-colored">Gallery</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  autem
                  <br /> voluptatem obcaecati!
                </p>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="row">
              <div className="col-md-12 ">
                {/* <!-- Portfolio Filter --> */}
                <div className="portfolio-filter text-center">
                  <a
                    href="#design"
                    className="active"
                    data-filter="*"
                    onClick={() => setFilterValue(photos)}
                  >
                    All
                  </a>
                  <a
                    href="#branding"
                    className=""
                    data-filter=".branding"
                    onClick={() => ChangeHandaler("Checkup")}
                  >
                    Checkup
                  </a>
                  <a
                    href="#design"
                    className=""
                    data-filter=".design"
                    onClick={() => ChangeHandaler("Whitening")}
                  >
                    Whitening
                  </a>
                  {/* <a href="#photography" className="" data-filter=".photography">Whitening</a> */}
                </div>
                <div
                  className="gallery-isotope default-animation-effect grid-3 gutter-small clearfix"
                  data-lightbox="gallery"
                >
                  <Gallery  width="100px" photos={FilterValue} onClick={openLightbox} />

                  <ModalGateway>
                    {viewerIsOpen ? (
                      <Modal onClose={closeLightbox}>
                        <Carousel
                          currentIndex={currentImage}
                          views={FilterValue.map((x) => (
                            {
                            ...x,
                            srcset : x.srcSet,
                            caption: x.title,
                          }
                          ))}
                          />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </div>
                {/* <!-- End Portfolio Gallery Grid --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryImg;
