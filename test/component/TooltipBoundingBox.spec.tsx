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

  it('should hide children when dismissed using Escape key', async () => {
    render(<TooltipBoundingBox {...defaultProps} />);
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime.bind(vi),
    });
    const element = screen.getByText('Hello world!');

    expect(element).toBeVisible();

    await user.keyboard('{Escape}');
    expect(element).toBeInTheDocument();
    expect(element).not.toBeVisible();
  });

  describe('offset prop', () => {
    it('should accept number offset', () => {
      render(<TooltipBoundingBox {...defaultProps} offset={15} />);
      expect(screen.getByText('Hello world!')).toBeInTheDocument();
    });

    it('should accept Coordinate offset with different x and y values', () => {
      render(<TooltipBoundingBox {...defaultProps} offset={{ x: 10, y: 20 }} />);
      expect(screen.getByText('Hello world!')).toBeInTheDocument();
    });

    it('should accept Coordinate offset with negative values', () => {
      render(<TooltipBoundingBox {...defaultProps} offset={{ x: -5, y: 15 }} />);
      expect(screen.getByText('Hello world!')).toBeInTheDocument();
    });
  });
});
