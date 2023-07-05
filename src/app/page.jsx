// import Image from 'next/image'
// import styles from './page.module.css'
import Image from 'next/image';
// import logo_image from "../images/logo.png";
// import phone_img from "../images/phone_img.png"

const page = () => {
  return (
    <>
      {/* // Navbar */}
      <header>
        <div className="header_hero">
          <nav className='navigation'>
            <div className='logo' >
              <img src="images/logo.png" alt="logo" width={30} />
              <p>ZEROTIER</p>
            </div>
            <ul>
              <li>Feature</li>
              <li>Price</li>
              <li>Download</li>
              <li>Company</li>
              <li>Support</li>
            </ul>
            <div className='nav_button' >
              <button className="login" >Login</button>
              <button className="signup" >Signup</button>
            </div>
          </nav>

          <div className="hero">
            <h1> Securely connect any device, anywhere </h1>
            <p> ZeroTier lets you build modern, secure multi-point virtualized networks of almost any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we enable global connectivity with the simplicity of a local network.</p>
            <div className='hero_button' >
              <button className="zero" >Get Zero Tier</button>
              <button className="more" >Learn More</button>
            </div>
          </div>
        </ div>
      </header >
      {/* // end Navbar */}

      {/* // main */}
      <main>

        <p>Latest version: 1.10.6 | ZeroTier is available on MikroTik. Read more.</p>

        <div className="cardOne" >
          <img src="images/phone_img.png" alt="phone_img" />
          <div className="right_detail" >
            <h1>It just works</h1>
            <p> ZeroTier combines the capabilities of VPN and SD-WAN, simplifying network management. Enjoy flexibility while avoiding costly hardware vendor lock in.</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="cardOne cardTwo" >
          <img src="images/secure-technology.png" alt="phone_img" />
          <div className="right_detail" >
            <h1>Speed, flexibility, and security
            </h1>
            <p>  Set up ZeroTier in minutes with remote, automated deployment. <br /><br />

              Emulates Layer 2 Ethernet with multipath, multicast, and bridging capabilities. <br /><br />

              ZeroTier’s zero-trust networking solution provides scalable security with 256-bit end-to-end encryption.</p>
            <button>Get Zero Tier</button>
          </div>
        </div>

        {/* gradiant cards */}
        <div className='all_innovative_cards' >
          <h1>Used by the world's most innovative teams</h1>

          <div className="innovative_card">
            <img src="/images/user-icon.png" alt="user-icon" width={60} />
            <p>"In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us." <br /><br />
              PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY</p>
          </div>
          <div className="innovative_card">
            <img src="/images/user-icon.png" alt="user-icon" width={60} />
            <p>"In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us." <br /><br />
              PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY</p>
          </div>
          <div className="innovative_card">
            <img src="/images/user-icon.png" alt="user-icon" width={60} />
            <p>"In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us." <br /><br />
              PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY</p>
          </div>

        </div>
        {/* end gradiant cards */}

        {/* secure networcks section */}
        <div className='all_secure_cards' >
          <h1>Secure networks for teams of any size</h1>

          <div className="all_secure">

            <div className="two_card">
              <div className="one_card">
                <img src="/images/game-icon.png" alt="game-icon.png" width={180} />
                <h1>Individuals
                </h1>
                <p>Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere <br />
                  Conveniently share files and data, or even play LAN games with others <br />
                  Manage secure network access to users of choice</p>
              </div>
              <div className="one_card">
                <img src="/images/game-icon.png" alt="game-icon.png" width={180} />
                <h1>Individuals
                </h1>
                <p>Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere <br />
                  Conveniently share files and data, or even play LAN games with others <br />
                  Manage secure network access to users of choice</p>
              </div>
            </div>
            <div className="two_card">
              <div className="one_card">
                <img src="/images/game-icon.png" alt="game-icon.png" width={180} />
                <h1>Individuals
                </h1>
                <p>Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere <br />
                  Conveniently share files and data, or even play LAN games with others <br />
                  Manage secure network access to users of choice</p>
              </div>
              <div className="one_card">
                <img src="/images/game-icon.png" alt="game-icon.png" width={180} />
                <h1>Individuals
                </h1>
                <p>Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere <br />
                  Conveniently share files and data, or even play LAN games with others <br />
                  Manage secure network access to users of choice</p>
              </div>
            </div>

          </div>
        </div>
        {/* end secure networcks section */}

      </main>
      {/* // end main */}


    </>
  )
}

export default page