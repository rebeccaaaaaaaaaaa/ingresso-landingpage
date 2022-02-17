/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
  const { title } = pricing;

  return (
    <section className={`bg-background py-8`} id="horarios">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              {/*
                  "Segunda-feira - 18:00 - 22:50",
                  "Terça-feira - 18:00 - 22:50",
                  "Quarta-feira - 18:00 - 22:50",
                  "Quinta-feira - 18:00 - 22:50",
                  "Sexta-feira - 18:00 - 22:50"
                */}
              <div
                className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center py-5 text-base font-bold`}>
               <li className={`px-6 my-5 mb-5`}>
                  <span className={`text-primary`}>
                    Segunda-feira - 18:00 - 22:50
                  </span>
                  
               </li>
               <li className={`px-6 my-5 mb-5`}>
                  <span className={`text-primary`}>
                    Terça-feira - 18:00 - 22:50
                  </span>
                  
               </li>
               <li className={`px-6 my-5 mb-5`}>
                  <span className={`text-primary`}>
                    Quarta-feira - 18:00 - 22:50
                  </span>
                  
               </li>
               <li className={`px-6 my-5 mb-5`}>
                  <span className={`text-primary`}>
                    Quinta-feira - 18:00 - 22:50
                  </span>
                  
               </li>
               <li className={`px-6 my-5 mb-5`}>
                  <span className={`text-primary`}>
                    Sexta-feira - 18:00 - 22:50
                  </span>
                  
               </li>

               <li className={`px-6 my-5 mb-5`}>
                  <span className={`text-primary`}>
                    * exceto feriados
                  </span>
                  
               </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
