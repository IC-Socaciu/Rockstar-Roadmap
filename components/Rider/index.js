import React, { useState } from "react";
import { styled } from "styled-components";
import Markdown from "markdown-to-jsx";

export default function Rider() {
  return (
    <>
      <StyledRiderTitle>Technical rider</StyledRiderTitle>
      <MyApp/>
      <StyledRiderBody>
        THE MINIMAL SET UP for small venues, up to 150 people (microphones are
        listed in order of preference)
        <br />
        KICK <br />
        SNARE <br />
        OVERHEAD <br />
        BASS <br />
        GUITARS <br />
        VOCALS <br />
        <br />
        SOUND & LIGHTING
        <br />
        We prefer an overall natural sound with minimal processing and effects.
        The drums need not have clicky attack sound, please use gates only when
        unavoidable and with great care. The vocals are best left without
        reverberation, maybe a bit of the female singer. The male singer has a
        very large dynamic range, please use compression. Lighting can be
        discussed during the soundcheck, it is important though that during the
        show there is always a sufficient light fort he bass and guitar players
        to see the fretboard of their instrument. If avaiable please use special
        effects like stroboskop or fog.
        <br />
        <br />
        EQUIPMENT SHARING & SOUNDCHECK
        <br />
        The drummer always plays his own drumset and will not share his drums
        with the other bands, except. Festivals. Apart from that we might share
        one of our guitar cabinets (4x12“), but this needs to be discussed well
        before the show. We will need an absolute minimum of 45 minutes
        soundcheck, 60 to 90 minutes including the setup would be perfect.
        <br />
        <br />
        ARRIVAL
        <br />
        Please provide detailed directions in x language or english language
        two weeks before the date of the show with the complete adress of the
        venue and a telephone contact. We need a safe parking space fort he van
        close tot he venue. Please provie arrival, soundcheck and doors-open and
        on-stage times. The promoter or antoher person should be at the venue at
        arrival time.
        <br />
        <br />
        FOOD & DRINKS
        <br />
        - hot meals and or normal meals or 12 € for each bandmember for buy-out
        <br />
        - minimum 2 bottles of cooled non-carbonated water per person for the
        stage and backstage
        <br />
        - minimum 12 liter of other cooled drinks ( alcohol!)
        <br />
        - 4 cans of green Monster Energy
        <br />
        - Breakfast for every person fort he morning after the show. (Breakfast
        with 2 breads per person with turkey, nutella, cheese, orange juice, one
        egg per person, sweet cereals, chcolate milk)
        <br />
        <br />
        BACKSTAGE
        <br />
        A sperate room for the band to get some rest before and after the show.
        It would be great to have sofas, tables, chairs, a mirror and sink.
        <br />
        <br />
        SLEEP
        <br />
        A warm, clean, dark and quiet accomodation for all persons with
        mattresses, bath room, shower and mirror. A safe parking place near the
        sleeping accomodation sould be available. (Just for concerts further
        than 200km)
        <br />
        <br />
        MERCHANDISE
        <br />
        A table of approx. 1.5m lenght and a small light or some candles for our
        merchandising in the same room as the show, if possible.
        <br />
        <br />
        MISCELLANEOUS
        <br />
        A guest list of 10 persons.
        <br />
        <br />
        ADVERTISING & PROMOTION
        <br />
        There’s a large amount of promo material we can send to you for
        advertising purposes. Don’t hestitate to write, if you need posters of
        flyer and promo templates, logos or pictures in various file formats.
        Just get in contact with us. There’s no corporate identity in our
        advertising, but a corporate feeling for what the band is. We appreciate
        good design, whether it’s professional or just made from the heart.
        <br />
        <br />
        A sperate room for the band to get some rest before and after the show.
        It would be great to have sofas, tables, chairs, a mirror and sink.
        <br />
        <br />
        SLEEP
        <br />
        A warm, clean, dark and quiet accomodation for all persons with
        mattresses, bath room, shower and mirror. A safe parking place near the
        sleeping accomodation sould be available. (Just for concerts further
        than 200km)
        <br />
        <br />
        MERCHANDISE
        <br />
        A table of approx. 1.5m lenght and a small light or some candles for our
        merchandising in the same room as the show, if possible.
        <br />
        <br />
        MISCELLANEOUS
        <br />
        A guest list of 10 persons.
        <br />
        <br />
        ADVERTISING & PROMOTION
        <br />
        There’s a large amount of promo material we can send to you for
        advertising purposes. Don’t hestitate to write, if you need posters of
        flyer and promo templates, logos or pictures in various file formats.
        Just get in contact with us. There’s no corporate identity in our
        advertising, but a corporate feeling for what the band is. We appreciate
        good design, whether it’s professional or just made from the heart.
        <br />
        <br />
      </StyledRiderBody>
    </>
  );
}

const StyledRiderTitle = styled.h2`
  background-color: yellow;
  margin-top: 150px;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const StyledRiderBody = styled.p`
  color: white;
`;

const MyApp = () => {
  const [showTechnical, setShowTechnical] = useState(true);
  const [showSound, setShowSound] = useState(true);
  const [showEquipment, setShowEquipment] = useState(true);
const [showArrival, setShowArrival] = useState(true);
const [showFood, setShowFood] = useState(true);
const [showBackstage, setShowBackstage] = useState(true);
const [showSleep, setShowSleep] = useState(true);
const [showMerch, setShowMerch] = useState(true);
const [showMiscellaneous, setShowMiscellaneous] = useState(true);
const [showPromo, setShowPromo] = useState(true);

  return (
    <>
      <HiddenText>
        {showTechnical ? (
          <HiddenParagraph>
            THE MINIMAL SET UP for small venues, up to 150 people (microphones
            are listed in order of preference): kick, snare, overhead, bass,
            guitars, vocals. Include your line up and equipment list.
            n the first part of your tech rider, it is good practice to introduce the members of the band, mention their names and which instruments they will be playing. The idea is to give the venue a quick overview of how many people they are expecting and the kind of instrumentation. This can be done as a simple list but it can also be presented with a well organized table that highlights the band members, their instruments or for example, whether or not they are going to use an amplifier or a DI (Direct Injection) box … venues and engineers will be very appreciative if you do this!
            In a live show setting, it’s fundamental to familiarize yourself with some technical terminology. One of the most common terms used is “backline”. The backline refers to all of that equipment that is going to be required on stage for the artist(s) to perform. If possible, try to include in your tech rider a list of all the songs you are going to perform. There are a few reasons to do so:

It gives the venue and the engineers an idea of how long the show is going to be
It provides a cue sheet to understand the different sections of the concert
It is useful for lighting design
It can be used by the venue for your royalty allocation (artists should receive royalty payments even when they perform by companies like ASCAP or BMI if their songs are registered)
          </HiddenParagraph>
        ) : null}
        <button onClick={() => setShowTechnical(!showTechnical)}>
          Technical rider
        </button>
      </HiddenText>
      <HiddenText>
        {showSound ? (
          <p>
            We prefer an overall natural sound with minimal processing and
            effects. The drums need not have clicky attack sound, please use
            gates only when unavoidable and with great care. The vocals are best
            left without reverberation, maybe a bit of the female singer. The
            male singer has a very large dynamic range, please use compression.
            Lighting can be discussed during the soundcheck, it is important
            though that during the show there is always a sufficient light for
            the bass and guitar players to see the fretboard of their instrument.
            If available please use special effects like stroboscope or fog.
          </p>
        ) : null}
        <button onClick={() => setShowSound(!showSound)}>Sounds & Lighting</button>
      </HiddenText>
      <section>
        {showEquipment ? (
          <p>
            The drummer always plays his own drumset and will not share his drums
        with the other bands, except. Festivals. Apart from that we might share
        one of our guitar cabinets (4x12“), but this needs to be discussed well
        before the show. We will need an absolute minimum of 45 minutes
        soundcheck, 60 to 90 minutes including the setup would be perfect.
          </p>
        ) : null}
        <button onClick={() => setShowEquipment(!showEquipment)}>
         Equipment and soundcheck
        </button>
      </section>
      <section>
        {showArrival ? (
          <p>
             Please provide detailed directions in x language or english language
        two weeks before the date of the show with the complete adress of the
        venue and a telephone contact. We need a safe parking space fort he van
        close tot he venue. Please provie arrival, soundcheck and doors-open and
        on-stage times. The promoter or antoher person should be at the venue at
        arrival time.
          </p>
        ) : null}
        <button onClick={() => setShowArrival(!showArrival)}>
         Arriving to the venue
        </button>
      </section>
      <section>
        {showFood ? (
          <p>
        Hot meals and or normal meals or 12 € for each bandmember for buy-out, minimum 2 bottles of cooled non-carbonated water per person for the
        stage and backstage, minimum 12 liter of other cooled drinks (no alcohol!)
          </p>
        ) : null}
        <button onClick={() => setShowFood(!showFood)}>
Food & Drinks        </button>
      </section>
      <section>
        {showBackstage ? (
          <p>
        A sperate room for the band to get some rest before and after the show.
        It would be great to have sofas, tables, chairs, a mirror and sink.
          </p>
        ) : null}
        <button onClick={() => setShowBackstage(!showBackstage)}>
Backstage        </button>
      </section>
      <section>
        {showSleep ? (
          <p>
        A warm, clean, dark and quiet accomodation for all persons with
        mattresses, bath room, shower and mirror. A safe parking place near the
        sleeping accomodation sould be available. (Just for concerts further
        than 200km)
          </p>
        ) : null}
        <button onClick={() => setShowSleep(!showSleep)}>
         Accomodation
        </button>
      </section>
      <section>
        {showMerch ? (
          <p>
                A table of approx. 1.5m lenght and a small light or some candles for our
        merchandising in the same room as the show, if possible.
          </p>
        ) : null}
        <button onClick={() => setShowMerch(!showMerch)}>
Merchandise        </button>
      </section>
      <section>
        {showMiscellaneous ? (
          <p>
         A guest list of 10 persons, meet & greet, backdrops, stage risers
          </p>
        ) : null}
        <button onClick={() => setShowMiscellaneous(!showMiscellaneous)}>
         Miscellaneous
        </button>
      </section>
      <section>
        {showPromo ? (
          <p>
There’s a large amount of promo material we can send to you for
        advertising purposes. Don’t hestitate to write, if you need posters of
        flyer and promo templates, logos or pictures in various file formats.
        Just get in contact with us. There’s no corporate identity in our
        advertising, but a corporate feeling for what the band is. We appreciate
        good design, whether it’s professional or just made from the heart.          </p>
        ) : null}
        <button onClick={() => showPromo(!setShowPromo)}>
Advertising and promotion        </button>
      </section>
    </>
  );
};

export { MyApp };

const HiddenText = styled.div`
border: solid 1px;
color: white;
border-radius: 5px;
margin-bottom: 5px;
`;

const HiddenParagraph = styled.p`
  color: white;
`;