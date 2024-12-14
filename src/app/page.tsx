"use client";

import DesktopView from '@/app/components/DesktopView';

import useScreenSize from '@/hooks/useScreenSize';
import MobileView from '@/app/components/MobileView';

export default function Home() {

  const screenSize = useScreenSize();

  if (screenSize === "mobile" || screenSize === "tablet") {
    return (
      <MobileView />
    )
  } else {
    return (
      <DesktopView />
    );
  }
}
