import Input from '../common/Input'
import { LucideFilter } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className="bg-card-light dark:bg-card-dark p-4 sm:p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
        <Input placeholder="Search property name or location..." />
        <div className="flex space-x-2">
          <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <LucideFilter className="h-4 w-4 sm:h-5 sm:w-5 text-text-light dark:text-text-dark" />
          </button>
        </div>
      </div>
      <p className="text-text-light dark:text-text-dark text-xs sm:text-sm mt-2">Simply enter the property name or location and press the search button (e.g., 'beach house' or 'Nairobi').</p>
    </div>
  )
}

export default SearchBar