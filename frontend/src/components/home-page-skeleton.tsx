import { BannerSkeleton } from './banner-skeleton';
import { InformationCardSkeleton } from './information-card-skeleton';
import { CoursesSkeleton } from './courses/courses-skeleton';
import { InformationAccordionSkeleton } from './information-accordion-skeleton';

export function HomePageSkeleton() {
  return (
    <>
      <BannerSkeleton />
      <InformationCardSkeleton />
      <CoursesSkeleton />
      <InformationAccordionSkeleton />
      <InformationAccordionSkeleton />
    </>
  );
}