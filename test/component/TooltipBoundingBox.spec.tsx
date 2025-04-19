import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { TooltipBoundingBox, TooltipBoundingBoxProps } from '../../src/component/TooltipBoundingBox';

describe('TooltipBoundingBox', () => {
  const defaultProps: TooltipBoundingBoxProps = {
    innerRef(): void {},
    lastBoundingBox: {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    },
    active: true,
    hasPayload: true,
    children: 'Hello world!',
    coordinate: { x: 1, y: 2 },
    allowEscapeViewBox: {
      x: false,
      y: false,
    },
    animationDuration: 0,
    animationEasing: 'ease',
    isAnimationActive: false,
    offset: 0,
    position: {},
    reverseDirection: {
      x: false,
      y: false,
    },
    useTranslate3d: false,
    viewBox: {},
    wrapperStyle: {},
    hasPortalFromProps: false,
  };
  it('should render children when active prop is true', () => {
    render(<TooltipBoundingBox {...defaultProps} />);
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
    expect(screen.getByText('Hello world!')).toBeVisible();
  });

  it('should hide children when active prop is false', () => {
    render(<TooltipBoundingBox {...defaultProps} active={false} />);
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
    expect(screen.getByText('Hello world!')).not.toBeVisible();
  });

  it('should hide children when there is no payload', () => {
    render(<TooltipBoundingBox {...defaultProps} hasPayload={false} />);
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
    expect(screen.getByText('Hello world!')).not.toBeVisible();
  });

  it('should hide children when dismissed using Escape key', () => {
    render(<TooltipBoundingBox {...defaultProps} active={false} />);
    userEvent.keyboard('{Escape}');
    expect(screen.getByText('Hello world!')).toBeInTheDocument();
    expect(screen.getByText('Hello world!')).not.toBeVisible();
  });
});
