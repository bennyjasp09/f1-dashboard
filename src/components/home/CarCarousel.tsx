import React from 'react';
import { motion } from 'framer-motion';

const cars = [
  {
    id: 1,
    name: 'Mercedes W12',
    image: 'https://images.unsplash.com/photo-1635083658914-e7ba4060c3e7?auto=format&fit=crop&q=80&w=1200',
    team: 'Mercedes-AMG Petronas',
    year: '2021'
  },
  {
    id: 2,
    name: 'Red Bull RB16B',
    image: 'https://images.unsplash.com/photo-1541743314877-721d6afe52d7?auto=format&fit=crop&q=80&w=1200',
    team: 'Red Bull Racing',
    year: '2021'
  },
  {
    id: 3,
    name: 'Ferrari SF21',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200',
    team: 'Scuderia Ferrari',
    year: '2021'
  }
];

const CarCarousel = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-900 to-black rounded-xl overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-display text-white mb-8 text-center"
        >
          Iconic F1 Cars
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
              >
                <h3 className="text-xl font-display text-white mb-2">{car.name}</h3>
                <p className="text-gray-300">{car.team}</p>
                <p className="text-sm text-gray-400">{car.year}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarCarousel;