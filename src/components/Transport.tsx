import React from 'react';
import { Car, Shield, Users, Clock, Fuel, Snowflake, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Transport = () => {
  const services = [
    {
      title: 'Трансфер из аэропорта',
      description: 'Встретим вас в аэропорту и доставим в отель',
      price: '800₽',
      duration: '15 минут'
    },
    {
      title: 'Городские поездки',
      description: 'Комфортные поездки по городу и окрестностям',
      price: '500₽',
      duration: 'от 30 минут'
    },
    {
      title: 'Поездки на пляж',
      description: 'Доставка на лучшие пляжи Абхазии',
      price: '400₽',
      duration: '10 минут'
    },
    {
      title: 'Экскурсионные туры',
      description: 'Поездки к достопримечательностям с гидом',
      price: '2000₽',
      duration: '6-8 часов'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Опытные водители с безупречной репутацией'
    },
    {
      icon: Snowflake,
      title: 'Комфорт',
      description: 'Кондиционер и удобные сидения'
    },
    {
      icon: Users,
      title: 'Вместимость',
      description: 'До 8 пассажиров в комфортабельном авто'
    },
    {
      icon: Fuel,
      title: 'Надёжность',
      description: 'Регулярное техническое обслуживание'
    }
  ];

  return (
    <section id="transport" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Транспортные услуги</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Комфортабельный транспорт для всех ваших поездок по Абхазии. 
            Современные автомобили с кондиционером и опытными водителями.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Car Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Комфортабельный автомобиль для трансфера"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Mercedes-Benz Sprinter</h3>
                  <p className="text-sm opacity-90">
                    Комфортабельный микроавтобус для групповых поездок и трансфера
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-primary-500">{service.price}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">за поездку</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Car size={16} />
                      <span>Комфорт класс</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Заказать трансфер
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mt-16 transition-colors duration-300"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Нужен трансфер?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования трансфера или получения дополнительной информации. 
            Мы обеспечим комфортную и безопасную поездку.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/7840123456?text=Здравствуйте! Нужен трансфер."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-200 flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Написать в WhatsApp</span>
            </a>
            <a
              href="tel:+7840123456"
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Позвонить</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Transport;