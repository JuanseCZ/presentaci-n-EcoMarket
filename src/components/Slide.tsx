import React from 'react';
import CoverSlide from './slides/CoverSlide';
import ListSlide from './slides/ListSlide';
import PointsSlide from './slides/PointsSlide';
import CodeSlide from './slides/CodeSlide';
import ColorsSlide from './slides/ColorsSlide';
import ModulesSlide from './slides/ModulesSlide';
import FlowSlide from './slides/FlowSlide';
import TimelineSlide from './slides/TimelineSlide';
import TwoColumnsSlide from './slides/TwoColumnsSlide';
import ArchitectureSlide from './slides/ArchitectureSlide';
import MVCSlide from './slides/MVCSlide';
import ScrumSlide from './slides/ScrumSlide';
import DatabaseSlide from './slides/DatabaseSlide';
import MockupsSlide from './slides/MockupsSlide';
import ChallengesSlide from './slides/ChallengesSlide';
import MetricsSlide from './slides/MetricsSlide';
import OpportunitiesSlide from './slides/OpportunitiesSlide';
import ImpactSlide from './slides/ImpactSlide';
import ThanksSlide from './slides/ThanksSlide';

interface SlideProps {
  slide: any;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  // Select the appropriate slide component based on the type
  switch (slide.type) {
    case 'cover':
      return <CoverSlide slide={slide} />;
    case 'list':
      return <ListSlide slide={slide} />;
    case 'points':
      return <PointsSlide slide={slide} />;
    case 'code':
      return <CodeSlide slide={slide} />;
    case 'colors':
      return <ColorsSlide slide={slide} />;
    case 'modules':
      return <ModulesSlide slide={slide} />;
    case 'flow':
      return <FlowSlide slide={slide} />;
    case 'timeline':
      return <TimelineSlide slide={slide} />;
    case 'two-columns':
      return <TwoColumnsSlide slide={slide} />;
    case 'architecture':
      return <ArchitectureSlide slide={slide} />;
    case 'mvc':
      return <MVCSlide slide={slide} />;
    case 'scrum':
      return <ScrumSlide slide={slide} />;
    case 'database':
      return <DatabaseSlide slide={slide} />;
    case 'mockups':
      return <MockupsSlide slide={slide} />;
    case 'challenges':
      return <ChallengesSlide slide={slide} />;
    case 'metrics':
      return <MetricsSlide slide={slide} />;
    case 'opportunities':
      return <OpportunitiesSlide slide={slide} />;
    case 'impact':
      return <ImpactSlide slide={slide} />;
    case 'thanks':
      return <ThanksSlide slide={slide} />;
    default:
      return (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
          <p className="text-gray-700">Contenido no disponible</p>
        </div>
      );
  }
};

export default Slide;