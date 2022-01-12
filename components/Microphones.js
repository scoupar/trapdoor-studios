const Microphones = () => {
  return (
    <div className="microphones-container">
      <div className="microphones-text-container">
        <h2>MICROPHONES</h2>
        <ul>
          <p>Condenser Mics</p>
          <hr></hr>
          <li>2x JZ Mics V67</li>
          <li>1x JZ Mics BB29</li>
          <li>1x SE Gemini III Valve Condenser</li>
          <li>2x CAD M179</li>
          <li>3x SE1a Pencil</li>
          <li>2x T-Bone Pencil Condenser</li>
          <p>Ribbon Mics</p>
          <hr></hr>
          <li>1x AEA R88 Stereo Ribbon</li>
          <li>1x SE RT1 Valve Ribbon</li>
          <li>2x SE R1</li>
          <li>1x OldBox M4</li>
          <p>Dynamic Mics</p>
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
      <img src="/microphones.jpg" className="microphones-img" />
    </div>
  );
};

export default Microphones;
