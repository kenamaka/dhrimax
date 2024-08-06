import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Agree = () => {
  return (
    <>
         <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOut="animate_fadeOUt"
        duration={2}
      >
      <div class="terms">
        <h2 class="section_title blue">
          Terms &amp; Conditions
          <hr />
        </h2>
        <div class="content blue">
          <p>
            TERMS AND CONDITIONS OF ENTRY AND PARTICIPATION FOR THE RHYTHM AND
            LYRICS PROJECT (The Invasion of Sound and Vocals) includes secrets,
            creativity, intrigue and confidential and proprietary material,
            rules and information.
          </p>
          <br />
          <p>
            The services of the Participant will bring the Participant into
            close contact with many confidential and proprietary affairs,
            information and material of the Producer and the Series not readily
            available to the public. Any disclosure or misappropriation thereof,
            could affect the game play for the participants, eliminate the
            surprise, tension and outcome of the Series for the viewing public,
            and result in significant damage to the Series and the Producers.
          </p>
          <p>
            The Participant agrees to keep and retain in the strictest
            confidence all information and materials disclosed to or obtained by
            the Participant concerning or relating to the Series, including,
            without limitation: game rules, game play, game outcomes, trade
            secrets, operational methods, contestant auditions and selection,
            contestant identity and information, contestant elimination, the
            outcome of any episode of the Series, and any other information or
            material relating to the Producer, the Series, the game and/or the
            contestants (collectively, “Confidential Information”).
          </p>
          <p>
            The Participant agrees that the Participant shall not disclose any
            Confidential Information such as telephone numbers, addresses, etc,
            to any individual or entity, directly or indirectly, for the period
            from the date of this Agreement until the final episode of the
            Series. The foregoing notwithstanding, the Participant agrees that
            the Participant shall not disclose any trade secrets or business
            affairs of the Producer to any individual or entity at any time.
          </p>
          <p>
            The Participant further agrees that any Confidential Information of
            which the Participant becomes aware will only be used in connection
            with the Participant’s Services and only for the express and
            exclusive purpose for which the Producer has instructed the
            Participant to use the Confidential Information.
          </p>
          <p>
            The Participant understands and agrees that the Producer solely will
            control issuance of all publicity, press releases and press
            conferences related to the Series.
          </p>
          <p>
            The Participant agrees not to participate, directly or indirectly,
            in any publicity, press releases or press conference, or speak with
            the press in any respect in connection with the Series without the
            express consent of the Producer.
          </p>
          <p>
            The Participant also agrees not to sell any life rights or stories
            to any third party to the extent that they relate to or include any
            information concerning the Series and further agrees not to
            participate in any manner in the preparation, production or drafting
            of any materials produced by third parties that relate to the
            Series, including without limitations, books, magazine articles,
            newspaper articles, television shows, Internet websites and any
            other form of media, without the express prior written consent of
            the Producer.
          </p>
          <p>
            It is agreed that the Participant will receive no remuneration for
            his/her contribution or participation in auditions.
          </p>
          <p>
            The Participant also agrees to the recording of his/her contribution
            and/or participation in the auditions as well as interviews and
            processes leading to and comprising the audition process for
            reference, publicity and/or broadcast purposes.
          </p>
          <p>
            Furthermore, the Participant agrees that all copyright and all other
            rights in and to the recordings made belong to the Producer and its
            successors and he/she has no claim to any broadcast material arising
            from his/her contribution or participation.
          </p>
          <p>
            Any infringement of this Agreement will result in the Producer
            instituting legal proceedings against the Participant in respect of
            the above.
          </p>
          <p>
            The Participant hereby acknowledges and certifies that the
            Participant has read and understands this Agreement, that the
            consequences and implications of its breach have been explained to
            the Participant, and that the Participant agrees to abide by the
            terms of this agreement.
          </p>
          <br />
          <h3>IT IS AGREED AND UNDERSTOOD</h3>
          <p>I hereby acknowledge and confirm that:</p>
          <ol type="1">
            <li>
              I have read and agree to be bound by the conditions set out in
              this document entitled RHYTHM AND LYRICS (The Invasion of Sound) - Application Form;
            </li>
            <li>
              I have answered all of the questions on the application form
              fully, honestly and accurately and I confirm I have not misled or
              attempted to mislead the Producers in any way as to my identity,
              experiences or in any other way;
            </li>
            <li>
              If any of the information I have given in the application form is
              found to be false, the Producers will be entitled to exclude me
              from  RHYTHM AND LYRICS (The Invasion of Sound) audition process.
            </li>
            <li>
              If I am short listed by the Producers, I am prepared to undergo
              psychological and medical screening. I understand that the full
              details of this will be explained to me in advance.
            </li>
            <li>
              If I am short-listed I also agree to authorize the Producers to
              conduct background checks in order to verify any of the
              information I have supplied. I understand that consenting to these
              checks is no guarantee of being chosen to participate.
            </li>
            {/* <li>
              Even if I am selected as a contestant, the Producers have no
              obligation to produce the program and even if the program is made
              there will be no obligation on the Producers or any broadcaster to
              broadcast it;
            </li> */}
            {/* <li>
              All decisions by the Producers concerning selection of the
              contestants are final and no reasons will be given. I agree not to
              challenge or appeal against those decisions.
            </li> */}
            <li>
              If I am selected to participate in  RHYTHM AND LYRICS (The Invasion of Sound) production, I
              agree to enter into a formal agreement with the Producers and/or
              any other relevant party, the terms and conditions of which will
              be necessary to protect the rights of the Producers and/or such
              other entity involved in the production of The Voice Nigeria.
            </li>
          </ol>
        </div>
        <NavLink  to="/signup" className="btn  agree">I have read and accepted the T’s and C’s</NavLink>
        <NavLink to="/" className="btn bg-danger text-dark agree"><FaTimes/> Dismiss</NavLink>
        </div>
        </AnimationOnScroll>
    </>
  );
};

export default Agree;
