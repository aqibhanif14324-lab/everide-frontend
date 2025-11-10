import { HiArrowNarrowDown } from 'react-icons/hi'
import '../styles/EmptyState.css'

function EmptyState({ icon, title, description, pageInfo }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icon}</div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-description">{description}</p>
      <div className="down-arrow"><svg data-v-c1522958="" data-v-289b1a2d="" width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="min-h-[6rem] min-w-[6rem]"><path data-v-c1522958="" d="M37.9278 37.0586C37.9591 36.2461 37.4942 35.4922 36.752 35.1602C36.0098 34.8242 35.1426 34.9687 34.5489 35.5312L27.9083 41.6758L27.9083 3C27.92 2.27734 27.5411 1.60937 26.9161 1.24609C26.295 0.878906 25.5216 0.878906 24.9005 1.24609C24.2755 1.60937 23.8966 2.27734 23.9083 3L23.9083 41.6758L17.2676 35.5312C16.7442 35.0312 15.9942 34.8555 15.3028 35.0664C14.6114 35.2773 14.088 35.8437 13.9317 36.5469C13.7755 37.2539 14.0137 37.9883 14.5489 38.4687L25.9083 48.9727L37.2676 38.4687C37.6661 38.1094 37.9083 37.5977 37.9278 37.0586Z" fill="currentColor"></path></svg></div>
      <div className="page-info">{pageInfo}</div>
    </div>
  )
}

export default EmptyState