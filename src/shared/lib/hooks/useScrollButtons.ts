import { useEffect, useState } from 'react';

import { useVerticalScroll } from './useVerticalScroll';

const useScrollButtons = (
  headlinesLength: number,
  isNeedToReCalculate?: boolean[]
) => {
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [elementActionsPosition, setElementActionsPosition] =
    useState<number>(0);
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(false);

  const element = document.getElementById('data-grid-scroll');
  const elementLoading = document.getElementById('data-grid-loading');
  const elementPreloading = document.getElementById('data-grid-preloading');
  const elementEmpty = document.getElementById('data-grid-empty-list');
  const elementActions = document.getElementById('data-grid-actions');

  const currentScrollPosition = useVerticalScroll('data-grid-scroll');

  console.log('currentScrollPosition=>', currentScrollPosition);

  const onLeftButtonClick = () => {
    element?.scrollTo({
      left: currentScrollPosition - 100
    });

    const newScrollPosition = Math.max(currentScrollPosition - 100, 0);

    if (elementLoading) {
      elementLoading.style.left = `${newScrollPosition}px`;
    }

    if (elementActions && element) {
      setElementActionsPosition(element?.clientWidth);
    }

    if (elementEmpty) {
      elementEmpty.style.left = `${newScrollPosition}px`;
    }

    if (elementPreloading) {
      elementPreloading.style.left = `${newScrollPosition}px`;
    }

    if (elementActions) {
      setElementActionsPosition((prev) => Math.max(prev - 100, 0));
    }
  };

  const onRightButtonClick = () => {
    element?.scrollTo({
      left: currentScrollPosition + 100
    });

    const newScrollPosition = Math.min(
      currentScrollPosition + 100,
      scrollWidth
    );

    if (elementEmpty) {
      elementEmpty.style.left = `${newScrollPosition}px`;
    }

    if (elementPreloading) {
      elementPreloading.style.left = `${newScrollPosition}px`;
    }

    if (elementLoading) {
      elementLoading.style.left = `${newScrollPosition}px`;
    }

    if (elementActions) {
      setElementActionsPosition((prev) => Math.min(prev + 100, scrollWidth));
    }
  };

  useEffect(() => {
    if (element) {
      element.scrollTo({ left: 0 });

      setElementActionsPosition(element.clientWidth || 0);

      setScrollWidth((element.scrollWidth || 0) - (element.clientWidth || 0));
    }
  }, [headlinesLength, element]);

  useEffect(() => {
    if (element) {
      setElementWidth(element.clientWidth || 0);

      setScrollWidth((element.scrollWidth || 0) - (element.clientWidth || 0));

      setElementActionsPosition(
        (element.clientWidth || 0) + currentScrollPosition
      );
    }

    if (elementEmpty) {
      elementEmpty.style.left = `0px`;
    }

    if (elementLoading) {
      elementLoading.style.left = `0px`;
    }
  }, [element, isNeedToReCalculate, currentScrollPosition]);

  useEffect(() => {
    setShowLeftButton(currentScrollPosition > 0);

    setShowRightButton(currentScrollPosition < scrollWidth);
  }, [currentScrollPosition, scrollWidth]);

  return {
    elementActionsPosition,
    elementWidth,
    showLeftButton,
    showRightButton,
    onLeftButtonClick,
    onRightButtonClick
  };
};

export { useScrollButtons };
