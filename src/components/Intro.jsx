import React from 'react';

function Intro() {
   return (
      <div className="flex flex-col items-center justify-center text-center pt-20 pb-6">
         <div className="flex flex-col items-center mb-3">
            <img
               src="/assets/me.jpg"
               alt="Profile"
               className="w-24 h-24 rounded-full mb-2 md:w-32 md:h-32"
            />
            <div className="flex flex-col">
               <h1 className="text-2xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold">ROBIN IBAÑEZ</h1>
               <p className="text-sm md:text-base mb-3 font-medium">Tools & Technologies</p>
            </div>
         </div>
         <div className="flex flex-row">
         <a href="https://www.shopify.com/ph/ppc/online-store?term=shopify&adid=566143386710&campaignid=15433369419&branded_enterprise=1&BOID=brand&utm_medium=cpc&utm_source=google&matchtype=e&network=g&gad_source=1&gad_campaignid=15433369419&gbraid=0AAAAAC3QZJqABOBmd8czLxvIVemVL7llI&gclid=CjwKCAjwhqfPBhBWEiwAZo196n4lgJR2-LrKoVQyb47c58OeZSH8rTIhBGdS4yCq7uldjcbXj875GhoCF3sQAvD_BwE" target="_blank" rel="noopener noreferrer">
            <img
               src="/assets/shopify.png"
               alt="shopify Icon"
               className="w-12 h-12 rounded-full mr-2 md:w-16 md:h-16"
            />
            </a>
            <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer">
            <img
               src="/assets/wordpress.png"
               alt="wordpress Icon"
               className="w-12 h-12 rounded-full mr-2 md:w-16 md:h-16"
            />
            </a>
            <a href="https://www.canva.com/en_ph/" target="_blank" rel="noopener noreferrer">
            <img
               src="/assets/canva-app.jpg"
               alt="canva icon"
               className="w-12 h-12 rounded-full mr-2 md:w-16 md:h-16"
            />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
            <img
               src="/assets/js.png"
               alt="javascript Icon"
               className="w-12 h-12 rounded-full mr-2 md:w-16 md:h-16"
            />
            </a>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <img
               src="/assets/react.png"
               alt="reactjs Icon"
               className="w-12 h-12 rounded-full mr-2 md:w-16 md:h-16"
            />
            </a>
            <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
            <img
               src="/assets/vitejs.png"
               alt="vite Icon"
               className="w-12 h-12 rounded-full mr-2 md:w-16 md:h-16"
            />
            </a>
            <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
            <img
               src="/assets/nodejs.png"
               alt="node Icon"
               className="w-12 h-12 rounded-full mr-2 md:w-16 md:h-16"
            />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
            <img
               src="/assets/git.png"
               alt="git Icon"
               className="w-12 h-12 rounded-full mr-2 md:w-16 md:h-16"
            />
            </a>
          
         </div>
         <p className="text-sm max-w-xl mt-6 font-bold">
         Hello! My name is Robin Ibañez, a ecommerce professional focused on delivering efficient store management, 
         accurate product handling, and continuous optimization to improve customer experience and sales performance.
            
            <div className="flex flex-col mt-6 md:mt-8 animate-fade-in">
               <p className="text-sm md:text-base mb-3 font-medium">E-commerce Websites I Managed</p>
            </div>

         </p>
      </div>
   )
}

export default Intro;
