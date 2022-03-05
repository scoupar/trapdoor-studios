import Image from "next/image";
import studioImage from "../public/services-img.jpg";
import microphoneImage from "../public/microphones-2.jpg";
import pedalsImage from "../public/pedals.jpg";
import drumsImage from "../public/drums.jpg";

const GearLanding = () => {
  return (
    <>
      <div className="image-container">
        <Image
          src={studioImage}
          className="studio-gear-image"
          layout="responsive"
        />
      </div>
      <section id="studio">
        <div className="studio-gear-container">
          <div className="studio-gear-text">
            <ul>
              <h3>MONITORING</h3>
              <hr></hr>
              <li>Neumann KH310s</li>
              <li>Quested S6Rs</li>
              <li>AKG K701s</li>
              <h3>CONSOLE AND OUTBOARD</h3>
              <hr></hr>
              <li>TL Audio M1 12 Channel Valve Console</li>
              <li>Rupert Neve Designs 5024</li>
              <li>Universal Audio 4-710D</li>
              <li> Universal Audio Apollo Unison Pres</li>
              <li>Focusrite Octopre Dynamic MkII</li>
              <li>Focusrite Voicemaster Pro </li>
              <h3>Interfaces and Computer</h3>
              <hr></hr>
              <li>Universal Audio Apollo 16 MkII</li>
              <li>Universal Audio Apollo 8 MKII</li>
              <li>Universal Audio Twin MKII</li>
              <li>2015 Apple iMac 3.3ghz i7 16GB RAM Pro Tools 2020</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="image-container">
        <Image
          src={microphoneImage}
          className="microphone-image"
          layout="responsive"
        />
      </div>
      <section id="mics">
        <div className="microphones-container">
          <div className="microphones-text">
            <ul>
              <h3>Condenser Mics</h3>
              <hr></hr>
              <li>2x JZ Mics V67</li>
              <li>1x JZ Mics BB29</li>
              <li>1x SE Gemini III Valve Condenser</li>
              <li>2x CAD M179</li>
              <li>3x SE1a Pencil</li>
              <li>2x T-Bone Pencil Condenser</li>
              <h3>Ribbon Mics</h3>
              <hr></hr>
              <li>1x AEA R88 Stereo Ribbon</li>
              <li>1x SE RT1 Valve Ribbon</li>
              <li>2x SE R1</li>
              <li>1x OldBox M4</li>
              <h3>Dynamic Mics</h3>
              <hr></hr>
              <li>1x Shure SM7b</li>
              <li>1x Shure SM57</li>
              <li>1x Shure SM58</li>
              <li>1x AKG D12VR</li>
              <li>1x Audix D6</li>
              <li>1x Audix i5</li>
              <li>1x Sennheiser e604</li>
              <li>1x Sennheiser e904</li>
              <li>1x Sennheiser e602</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="guitars-container">
        <div className="image-container">
          <Image
            src={pedalsImage}
            className="pedals-image"
            layout="responsive"
          />
        </div>
        <section id="instruments">
          <div className="guitars-text">
            <ul>
              <h3>Guitars</h3>
              <hr></hr>
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
                Shed/Handmade ‘Brender’ Weirdo Guitar in Forest Green (p90 and
                coil tapped PAF)
              </li>
            </ul>
            <ul>
              <h3>Amps</h3>
              <hr></hr>
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
            </ul>
            <ul>
              <h3>Effects</h3>
              <hr></hr>
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
            </ul>
          </div>
        </section>
      </div>

      <div className="other-container">
        <div className="image-container">
          <Image src={drumsImage} className="drums-image" layout="responsive" />
        </div>
        <div className="drums-text">
          <ul>
            <h3>Drums</h3>
            <hr></hr>
            <li>
              Gretsch Catalina Club Mod drum kit in limited ‘Black Widow’ finish
              10×8, 14×12, 20×20
            </li>
            <li>Gretsch Catalina 18 floor tom</li>
            <li>Sonor vintage 12 Rack Tom</li>
            <li>Sonor vintage 14x4 Steel Snare</li>
            <li>Tama Steelworks 14×6.5 Steel Snare Drum</li>
            <li>Humdrum 14x6.5 Maple Snare Drum</li>
            <li>Various hardware and percussion</li>
          </ul>
          <ul>
            <h3>Cymbals</h3>
            <hr></hr>
            <li>Istanbul 20 Radiant Crash</li>
            <li>Meinl 20 Byzance Ride</li>
            <li>Zildjian 14 K Custom Dark Hi-Hats</li>
            <li>Sabian 16 AAX Stage Crash</li>
            <li>Sabian 17 Signature Saturation Crash</li>
            <li>Stagg 12 China</li>
            <li>Stagg 10 Splash</li>
          </ul>
          <ul>
            <h3>Keys</h3>
            <hr></hr>
            <li>Chapel Upright Piano</li>
            <li>Pedal Harmonium</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GearLanding;
