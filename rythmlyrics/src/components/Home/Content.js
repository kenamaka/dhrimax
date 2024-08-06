import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import about from "../assets/images/headtwoo.jpg";
import clare from "../assets/images/clare.jpg";
import smj from "../assets/images/smj.jpg";
import hunters from "../assets/images/hunters.jpeg";
import bjazz from "../assets/images/bjazz.jpg";
import naomi from "../assets/images/Naomi.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaArrowLeft } from "react-icons/fa";
const Content = ({
  dsmj,
  dabout,
  dsheyi,
  dclare,
  dbjazz,
  handleClose,
  id,
  dnaomi,
}) => {
  const Bjazz = () => {
    return (
      <>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
        >
          <div class="row mb-5">
            <div class="col-12">
              <div class="text-left pb-1">
                <h2 class=" h1 site-section-heading blue">About Bjazz</h2>
              </div>
            </div>
            <div class="col-md-6 ml-auto mb-5 order-md-2" data-aos="fade">
              <img src={bjazz} alt="Image" class="img-fluid rounded" />
            </div>
            <div class="col-md-6 order-md-1" data-aos="fade">
              <div class="row">
                <div class="col-12 mb-4">
                  <p className="blue">
                    OLUWABUNMI SAMSON FAKEYE also known as BJAZZ. A profound
                    music minister of the gospel. He is an instructor, educator/
                    director of music, and Pianist. He is also a recording and
                    award-winning musician who hails from the southwest of
                    Nigeria, Oyo state Ibadan. He has to his credit a couple of
                    recorded singles (Tell It All, No Need to Worry, Loruko
                    Jesu, and Walking by Faith) He is known for his exploits in
                    music production and creativity. He is a certified Pianist,
                    Vocal Instructor, Educator, and Composer from MUSON (Music
                    Society Of Nigeria) Lagos, Nigeria. He has successfully
                    worked alongside Grammy Award Nominees / Winning gospel
                    artists, likes of Kurt Carr, Phil Thompson, Datruth, Micah
                    Stampley, Lenny LeBlanc, Don Moen, Ron Kenoly, and also a
                    list of Nigerian gospel and circular artists such as Kenny
                    K'ore, Infinity Group, Freke Umoh, Sammie Okposo, Glowreeyah
                    Braimah, Tim Godfrey, Segun Obey, Nathaniel Bassey,
                    Joepraize, Steve Crown Eben, FAZE, P-Square, J-Martins, Muma
                    Gee, Brymo, Lily Perez, IBK, Isaac Geralds and the list goes
                    on. On a track record of choirs, he has worked with/ trained
                    in Nigeria and beyond, such as - Joyous Celebration Choir
                    (JCC South Africa), The Avalanche (Coza), ExaltedTribe
                    (Harvesters International Christian Center Gbagada Campus)
                    onetime awarded best choir in Nigeria. Other none religious
                    bodies and platforms, such as MTN Project Fame, The Gospel
                    Award reality show, and The Ignite reality show (Akwa Ibom
                    State). He has also worked with religious institutions,
                    which include Covenant University (CU choir) and Redeemers
                    University (Run choir). He has successfully produced and
                    directed one of the biggest gospel concerts NAWIRAS (Nations
                    Will Rise And Sing) by renowned gospel artist Steve Crown in
                    the northern part of the country, Abuja. Where over five
                    thousand people together from different parts of the world
                    worship. He is the C. E. O of a renowned music institution
                    in Abuja, Nigeria ( Bjazz Vocal Academy) An expression of
                    BVA, where raw talent and fresh creative minds are
                    discovered to the world on a professional music platform.
                    This exercise has gone across different states in Nigeria
                    today such as Uyo, Lagos, Kaduna, Nasarawa, and Abuja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </>
    );
  };
  const SMJ = () => {
    return (
      <>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
        >
          <div class="row mb-5">
            <div class="col-12">
              <div class="text-left pb-1">
                <h2 class=" h1 site-section-heading blue">About SMJ</h2>
              </div>
            </div>
            <div class="col-md-6 ml-auto mb-5 order-md-2" data-aos="fade">
              <img src={smj} alt="Image" class="img-fluid rounded" />
            </div>
            <div class="col-md-6 order-md-1" data-aos="fade">
              <div class="row">
                <div class="col-12 mb-4">
                  <p className="blue">
                    Samuel Emmanuel Giveson,better known as SMJ,hails from
                    Akwa-Ibom state, Nigeria.He live is lagos. He is a multi
                    talented musician who started playing the drums at the age
                    of three(3) and the keyboard at the age of five(5). SMJ has
                    been involved in the music industry for over a decade,
                    primarily with The Extreme crew owned by Dr. Tim Godfrey. He
                    has worked with several renowned international artists such
                    as Travis Greene, Micah Stampley, Kirk Franklin, Phil
                    Thompson, JJ Hairston, Israel Houghton, and Tye Tribbett,
                    and has toured with them. Despite his extensive experience
                    and growth in the industry, SMJ remains humble and
                    down-to-earth. He is widely recognized for his hard work and
                    dedication, always putting in his best effort in everything
                    he does. In March 2020, SMJ hosted his first-ever concert,
                    The Outsider Concert, in Lagos, Nigeria, which was a
                    resounding success. The event featured Dr. Tim Godfrey,
                    XtremeCrew, KennyBlaq, Masterkraft, EmmaOhMyGod, and many
                    other notable guests. SMJ has received numerous awards for
                    his exceptional work, including the Best Afro Gospel
                    Producer of the Year at the Beatz Awards in 2017, 2018,2021
                    and the most recent beat awards(2022) He also recently
                    played for Phil Thompson and Travis Greene at the largest
                    worship gathering in the world, The Experience 2023, after
                    which he proceeded to go on an African tour with Travis
                    Greene.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </>
    );
  };

  const Clare = () => {
    return (
      <>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
        >
          <div class="row mb-5">
            <div class="col-12">
              <div class="text-left pb-1">
                <h2 class="blue h1 site-section-heading">About Clare</h2>
              </div>
            </div>
            <div class="col-md-6 ml-auto mb-5 order-md-2" data-aos="fade">
              <img src={clare} alt="Image" class="img-fluid rounded" />
            </div>
            <div class="col-md-6 order-md-1" data-aos="fade">
              <div class="row">
                <div class="col-12 mb-4">
                  <p className="blue">
                    Clare Ezeakacha is a Filmmaker, Content Developer, Voice
                    Artist, Child advocate and founder of Clare Cares
                    Foundation. She makes short films as tools for advocacy to
                    create awareness about social issues. She has a Bachelors
                    degree in Computer Science, a PGD in Mass Communication, a
                    mini MBA in non-profit leadership (LBS) and an MSC in
                    Information Technology. She started her career as an IT
                    officer in KPMG, then transitioned into radio where she
                    worked as a Radio Personality, producing and voicing jingles
                    and political programs. Clare debuted her career in film,
                    with a directorial short titled "Arima" (a vignette on
                    rape), thereafter producing a few more short films and
                    feature-length movies. As a mentor and child advocate, she
                    started the Clare Cares Foundation, highlighting the
                    struggle for education and protecting the rights of children
                    in Nigeria and beyond. She is a good manager of people and
                    events. She has keen interest on planning and management of
                    events. Her foundation organizes educational seminars to
                    sensitize the youths against vices such as rape and child
                    abuse and raise funds from members, corporate organizations,
                    philanthropists, international donor agencies, and
                    government support programmes for social impact projects.
                    Clare Ezeakacha supports children in rural areas and uses
                    her voice as a tool for creating change in society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </>
    );
  };

  const Naomi = () => {
    return (
      <>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
        >
          <div class="row mb-5">
            <div class="col-12">
              <div class="text-left pb-1">
                <h2 class="blue h1 site-section-heading">About Naomi</h2>
              </div>
            </div>
            <div class="col-md-6 ml-auto mb-5 order-md-2" data-aos="fade">
              <img src={naomi} alt="Image" class="img-fluid rounded" />
            </div>
            <div class="col-md-6 order-md-1" data-aos="fade">
              <div class="row">
                <div class="col-12 mb-4">
                  <p className="blue">
                    Naomi is one of the top Vocal Coaches in Nigeria. And a
                    unique gospel artist. NaomiClassik hails from Delta state,
                    Nigeria, The daughter of Apostle, (Godfrey Obe). Naomi is
                    one of the top Vocal Coaches in Nigeria. And a unique gospel
                    artist. She’s worked and shared the same platform with great
                    international gospel icons such as Tasha Cobbs, Israel
                    Houghton, Travis Greene, Israel Houghton, Phil Thompson, JJ
                    hairston, Kim burell, kurt carr, and Nigerian icons; Sammie
                    Okposo, Tim Godfrey, Asu Ekiye and a lot more. Naomi Classik
                    is internationally recognized as a Vocal Coach, she also
                    headlines 3 great projects; “All About Jesus” , “NEXT
                    GENERATION MOVE” AND ” FOR THE GIRL “ The movement “All
                    About Jesus” is a self given task to the kingdom of God,
                    which she has hosted in in 9 states in Nigeria and London,
                    United Kingdom. NEXT GENERATION MOVE; This movement, is
                    taking the gospel to the streets through music!! And the
                    project has been to so many locations in Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </>
    );
  };
  const About = () => {
    return (
      <>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
        >
          <div class="row mb-5">
            <div class="col-12">
              <div class="text-left pb-1">
                <h2 class=" h1 site-section-heading blue">
                  About RHYTHM and LYRICS Project
                </h2>
              </div>
            </div>
            <div class="col-md-6 ml-auto mb-5 order-md-2" data-aos="fade">
              <img src={about} alt="Image" class="img-fluid rounded" />
            </div>
            <div class="col-md-6 order-md-1" data-aos="fade">
              <div class="row">
                <div class="col-12 mb-4">
                  <p className="blue">
                    This project is developed and created just for you if you
                    want embrace stardom with the full expreion of your craft.
                    So many people are musically gifted across the
                    country(Nigeria) and the rest of Africa down to the other
                    continents of the world in anticipation of a real platform
                    to stardom. So there is a need to capture numerous music
                    talents in ONE BIG STAGE for ONE BIG MUSIC REALITY SHOW.
                    Here we are: DRHIHMAKX CO.LTD is literally called DREAM
                    MAXIMIZATION COMPANY.We are keen about you maximizing your
                    dreams in full expression.We have created a platform called
                    RHYTHM & LYRICS PROJECT...where singers and music
                    instrumentalists converge in our unique competition for the
                    emergence of the DUET SUPER BAND. In respect to this aim,the
                    exceptionally music-talented individuals are worthy of
                    global visibility/recognition at the end of the season.
                  </p>
                </div>
                <div class="col-md-12 mb-md-5 mb-0 col-lg-6">
                  <div class="unit-4">
                    <div class="unit-4-icon mr-4 mb-3">
                      <span class="text-secondary icon-phonelink"></span>
                    </div>
                    <div>
                      <h3 className="blue">Our Mission</h3>
                      <p className="blue">
                        Create a platform for synergy in music symphony and
                        embrace creativity by bringing visibility/recognition to
                        the exceptionally talented individuals globally.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 mb-md-5 mb-0 col-lg-6">
                  <div class="unit-4">
                    <div class="unit-4-icon mr-4 mb-3">
                      <span class="text-secondary icon-extension"></span>
                    </div>
                    <div>
                      <h3 className="blue">Vision</h3>
                      <p className="blue">
                        Maximize the dreams of musically talented folks beyond
                        expectations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </>
    );
  };

  const Sheyi = () => {
    return (
      <>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          duration={2}
        >
          <div class="row mb-5">
            <div class="col-12">
              <div class="text-left pb-1">
                <h2 class="blue h1 site-section-heading">
                  About Sheyi Hunters
                </h2>
              </div>
            </div>
            <div class="col-md-6 ml-auto mb-5 order-md-2" data-aos="fade">
              <img src={hunters} alt="Image" class="img-fluid rounded" />
            </div>
            <div class="col-md-6 order-md-1" data-aos="fade">
              <div class="row">
                <div class="col-12 mb-4">
                  <p className="blue">
                    Seyi Hunter is a content creator, Nollywood filmmaker,
                    actress, an entrepreneur and founder of Miss Bikini Nigeria
                    international pageant. She’s a strong political advocate.
                    She is a great lover of good music and has been a music
                    producer at a time.Her passion for good music is top notch.
                    Seyi Hunter Foundation was founded in 2014. The goal is to
                    clothe and feed indigent children, of which most of the
                    children assisted through the foundation are orphans. In
                    2021 She started the women Empowerment program. The main
                    focus is to raise start up funds for indigent women,
                    training, help pregnant women pay anti natal. She has a
                    Diploma in Industrial & Labour Relations and BA in
                    Performing Arts. She has helped many young girls in
                    achieving their dreams of being international models through
                    her beauty pageant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </>
    );
  };

  return (
    <>
      <div class="site-section">
        <div className="container  pb-5">
          <div className="row p-4 back-btn">
            <NavLink
              className="btn btn-primary"
              to="#"
              onClick={() => handleClose()}
              id={id}
            >
              {" "}
              <FaArrowLeft />
            </NavLink>
            {/* <Link activeClass="active" to="judges" spy={true} smooth={true} offset={-100} duration={600}>
            <FaArrowLeft />
            </Link> */}
          </div>
          <br />
        </div>
        <div class="container">
          {dsmj && <SMJ />}
          {dbjazz && <Bjazz />}
          {dclare && <Clare />}
          {dsheyi && <Sheyi />}
          {dabout && <About />}
          {dnaomi && <Naomi />}
        </div>
      </div>
    </>
  );
};

export default Content;
