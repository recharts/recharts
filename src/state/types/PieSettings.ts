import { BasePolarGraphicalItemSettings } from '../graphicalItemsSlice';
import { DataKey, LegendType } from '../../util/types';
import { TooltipType } from '../../component/DefaultTooltipContent';

export interface PieSettings extends BasePolarGraphicalItemSettings {
  type: 'pie';
  name: string | number | undefined;
  nameKey: DataKey<any>;
  tooltipType: TooltipType | undefined;

  legendType: LegendType;
  fill: string;

  cx: number | string;
  cy: number | string;
  startAngle: number;
  endAngle: number;
  paddingAngle: number;
  minAngle: number;
  innerRadius: number | string;
  outerRadius: number | string | ((element: any) => number);
  cornerRadius: number | string | undefined;
  presentationProps: Record<string, string | number>;
}
