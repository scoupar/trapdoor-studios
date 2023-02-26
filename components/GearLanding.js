import Image from "next/image";
import studioImage from "../public/mics-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faMicrophoneLines,
  faGuitar,
  faDrum,
} from "@fortawesome/free-solid-svg-icons";
import Toggle from "./Toggle";
import FadeInSection from "./FadeInSection";

const GearHeader = () => {
  return (
    <section id="gear">
      <div className="gear-text">
        <FadeInSection>
          <h2 className="text-title">
            Trapdoor has a great selection of gear to help keep your creativity
            moving.
          </h2>
        </FadeInSection>
      </div>
    </section>
  );
};

const GearLanding = () => {
  return (
    <div className="gear-landing">
      <GearHeader />

      <div className="gear-text">
        <FadeInSection>
          <hr></hr>
          <p>
            It is subject to change at a moment's notice but we try to keep this
            list as up-to-date as possible.
          </p>
          <div className="yellow-section-image-container">
            <Image
              src={studioImage}
              className="studio-gear-image"
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </FadeInSection>
      </div>
      <div className="gear-container">
        <section id="studio-gear">
          <div className="studio-gear-container">
            <div className="studio-gear-text">
              <ul>
                <FontAwesomeIcon icon={faSliders} size="3x" color="black" />
                <Toggle title="STUDIO">
                  <h4>MONITORING</h4>
                  {/* <hr></hr> */}
                  <li>Neumann KH310s</li>
                  <li>Quested S6Rs</li>
                  <li>AKG K701s</li>
                  <h4>CONSOLE AND OUTBOARD</h4>
                  {/* <hr></hr> */}
                  <li>TL Audio M1 12 Channel Valve Console</li>
                  <li>Rupert Neve Designs 5024</li>
                  <li>Universal Audio 4-710D</li>
                  <li> Universal Audio Apollo Unison Pres</li>
                  <li>Focusrite Octopre Dynamic MkII</li>
                  <li>Focusrite Voicemaster Pro </li>
                  <h4>Interfaces and Computer</h4>
                  {/* <hr></hr> */}
                  <li>Universal Audio Apollo 16 MkII</li>
                  <li>Universal Audio Apollo 8 MKII</li>
                  <li>Universal Audio Twin MKII</li>
                  <li>2015 Apple iMac 3.3ghz i7 16GB RAM Pro Tools 2020</li>
                </Toggle>
              </ul>
            </div>
          </div>
        </section>
        <section id="mics">
          <div className="microphones-container">
            <div className="studio-gear-text">
              <ul>
                <FontAwesomeIcon
                  icon={faMicrophoneLines}
                  size="3x"
                  color="black"
                />
                <Toggle title="MICROPHONES">
                  <h4>Condenser Mics</h4>
                  <li>2x JZ Mics V67</li>
                  <li>1x JZ Mics BB29</li>
                  <li>1x SE Gemini III Valve Condenser</li>
                  <li>2x CAD M179</li>
                  <li>3x SE1a Pencil</li>
                  <li>2x T-Bone Pencil Condenser</li>
                  <h4>Ribbon Mics</h4>
                  <li>1x AEA R88 Stereo Ribbon</li>
                  <li>1x SE RT1 Valve Ribbon</li>
                  <li>2x SE R1</li>
                  <li>1x OldBox M4</li>
                  <h4>Dynamic Mics</h4>
                  <li>1x Shure SM7b</li>
                  <li>1x Shure SM57</li>
                  <li>1x Shure SM58</li>
                  <li>1x AKG D12VR</li>
                  <li>1x Audix D6</li>
                  <li>1x Audix i5</li>
                  <li>1x Sennheiser e604</li>
                  <li>1x Sennheiser e904</li>
                  <li>1x Sennheiser e602</li>
                </Toggle>
              </ul>
            </div>
          </div>
        </section>
        <div className="guitars-container">
          <section id="instruments">
            <div className="studio-gear-text">
              <ul>
                <FontAwesomeIcon icon={faGuitar} size="3x" color="black" />

                <Toggle title="INSTRUMENTS">
                  <h4>Guitars</h4>
                  <li>2004 Fender Telecaster Highway One in Daphne Blue</li>
                  <li>2015 Fender Telecaster Classic Player Triple in Black</li>
                  <li>
                    2020 'Montana' Telecaster with Monty's Telecaster Pickups in
                    Walnut
                  </li>
                  <li>
                    2020 Thorp Special DC Les Paul Custom with P90s 2005 (ish)
                  </li>
                  <li>
                    Shed/Handmade ‘Brender’ Weirdo Guitar in Forest Green (p90
                    and coil tapped PAF)
                  </li>

                  <h4>Amps</h4>
                  <li>Soldano Astroverb 2×12 combo</li>
                  <li>Soldano Hot Rod 50 head</li>
                  <li>Victory Sheriff 44 head</li>
                  <li>Marshall JMP head</li>
                  <li>Selmer Treble and Bass 50</li>
                  <li>Ampeg SVT Pro 4</li>
                  <li>Ashdown ABM 600</li>
                  <li>G Electronics/Tipton Electronics 50 watt head</li>
                  <li>Victory 2×12 Celestion V30 Loaded Cab</li>
                  <li>Blackstar 4×12 V30 Loaded Cab</li>
                  <li>Ashdown 6×10 Bass Cab</li>

                  <h4>Effects</h4>
                  <li>Paul Cochrane Tim Transparent Overdrive</li>
                  <li>Hermida Audio Zendrive</li>
                  <li>Blackout Effectors Blunderbuss Fuzz</li>
                  <li>Digitech Whammy 5</li>
                  <li>Digitech Whammy 4</li>
                  <li>EHX Micro Pog</li>
                  <li>Boss OC2 Octaver</li>
                  <li>Strymon Timeline Delay</li>
                  <li>Strymon Bluesky Reverb</li>
                  <li>Collision Devices Blackhole Symmetry</li>
                  <li>Boss DM2W Delay</li>
                  <li>Line 6 M5</li>
                  <li>Boss Chorus</li>
                  <li>Korg Pitchblack Tuner</li>
                  <li>Boss ES8 Effects Switcher</li>
                  <li>EHX Ring Thing Ring Modulator</li>

                  <h4>Keys</h4>
                  <li>Chapel Upright Piano</li>
                  <li>Pedal Harmonium</li>
                </Toggle>
              </ul>
            </div>
          </section>
        </div>

        <div className="other-container">
          <div className="studio-gear-text">
            <ul>
              <FontAwesomeIcon icon={faDrum} size="3x" color="black" />
              <Toggle title="DRUMS">
                <h4>Drums</h4>
                <li>
                  Gretsch Catalina Club Mod drum kit in limited ‘Black Widow’
                  finish 10×8, 14×12, 20×20
                </li>
                <li>Gretsch Catalina 18 floor tom</li>
                <li>Sonor vintage 12 Rack Tom</li>
                <li>Sonor vintage 14x4 Steel Snare</li>
                <li>Tama Steelworks 14×6.5 Steel Snare Drum</li>
                <li>Humdrum 14x6.5 Maple Snare Drum</li>
                <li>Various hardware and percussion</li>

                <h4>Cymbals</h4>
                <li>Istanbul 20 Radiant Crash</li>
                <li>Meinl 20 Byzance Ride</li>
                <li>Zildjian 14 K Custom Dark Hi-Hats</li>
                <li>Sabian 16 AAX Stage Crash</li>
                <li>Sabian 17 Signature Saturation Crash</li>
                <li>Stagg 12 China</li>
                <li>Stagg 10 Splash</li>
              </Toggle>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearLanding;
