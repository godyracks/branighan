import { LucideMessageCircle } from 'lucide-react'

  const HouseCard = ({ title, price, image }) => {
    const whatsappMessage = encodeURIComponent(`I'm interested in ${title}`);
    const whatsappLink = `https://wa.me/+254712345678?text=${whatsappMessage}`; // Replace with your WhatsApp number

    return (
      <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
        <img src={image} alt={title} className="w-full h-40 sm:h-48 object-cover" />
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-medium text-text-light dark:text-text-dark">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">This modern, cozy apartment boasts a minimalist design with sleek lines and ample natural light.</p>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-3 sm:mt-4 space-y-2 sm:space-y-0">
            <span className="text-lg sm:text-xl font-bold text-primary dark:text-secondary">Ksh. {price.toLocaleString()}</span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 sm:px-4 sm:py-2 bg-accent-light dark:bg-accent-dark text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors flex items-center text-sm sm:text-base"
            >
              <LucideMessageCircle className="h-4 w-4 sm:h-5 sm:w-5 inline mr-2" />
              Enquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    )
  }

  export default HouseCard