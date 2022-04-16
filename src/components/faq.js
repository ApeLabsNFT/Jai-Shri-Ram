import React from 'react';
import './faq.css';

function FAQ() {
  return (<>
	  <div className='faq-container' style={{ display: 'flex'}}>
		  <div style={{color: 'white', paddingTop: '20px',  width: '70%', margin: 'auto'}}>
      <div >
	  <h1  className="con">"  FAQ  "</h1> 
		  <div class="intro-colapse" style={{ paddingBottom: '20px', color:"white"}}>
		</div>

	<details class="details-comp">
		<summary class="summary-colapse">
        What makes Ram avatars unique and investor friendly?
		</summary>
		<p> The heritage and moral significance of Shri Ram himself and his devotion to do the right thing inspired the team to create this utility based and visually appealing NFT collection, which allows investors the trust in our economics mechanism as well as inginutive design possibilities that appeal to the masses.</p>
	</details>

	<details class="details-comp">
		<summary class="summary-colapse">
        What blockchain is this project using?
		</summary>
		<p> This project will be on Solana blockchain, NFTs be minted using Phantom, Solflare etc.</p>
	</details>

	<details class="details-comp">
		<summary class="summary-colapse">
        What is “Mandir of Quant”?
		</summary>
		<p> “Mandir of Quant” or the temple of quant will be our monthly report published to all holders at the end of every month. This report will have insights on latest profitable development useful for our holders to make gains according to their appetite based on the data of on-chain analysis.</p>
	</details>

	<details class="details-comp">
		<summary class="summary-colapse">
        How does data play a significant role in investing?
		</summary>
		<p> Big data companies are wealthier than oil corporations and on-chain data analysis allows us to refine our entries in the market as well as WEB3 deal in anonymity and security. We aim to make it a bit simpler to understand and easy to use.</p>
	</details>

	<details class="details-comp">
		<summary class="summary-colapse">
        Launching a coin anytime soon?
		</summary>
		<p> No, we will wait for a 50%-75% sell-out to form a Mandir DAO where the government coin will be Mandir coin, but for now, we will wait until the team feels that the investors are confident enough to support the decision.</p>
	</details>
    <details class="details-comp">
		<summary class="summary-colapse">
        Are the creators doxxed? What is the team background?
		</summary>
		<p>  Team doxx links</p>
	</details>
    <details class="details-comp">
		<summary class="summary-colapse">
        Can Jai Shri Ram be the next CryptoPunk or Bored Ape?
		</summary>
		<p>We plan to host spiritual events and put out a merchandise line after 50% is sold out, and we aim to grow bigger than these 2 as they are not on top now, proving that NFTs are built for utility.  </p>
	</details>
    <details class="details-comp">
		<summary class="summary-colapse">
        What kind of development are we planning to assist in Ram Mandir?
		</summary>
		<p>If Ram Mandir Trust like our plan to support a better visual appeal idea, we will have digital screens to promote NFTs and a cleaning service kiosk for the temple.</p>
	</details>
    <details class="details-comp">
		<summary class="summary-colapse">
        Will you cover the whole Ramayana in Phase 2?
		</summary>
		<p>Our big picture idea is to make a “Witcher 3” like Ramayana game and animated series for the next generation of India, as it carries our heritage in the most secure way possible as well as show our creative independence as a society.</p>
	</details>
	  </div>
	  </div>
	  </div></>
);
}
export default FAQ;
