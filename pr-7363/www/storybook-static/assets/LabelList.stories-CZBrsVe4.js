import{e}from"./iframe-CA2bza4n.js";import{g as p}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-CEO6nkw8.js";import{g as c}from"./arrayEqualityCheck-DAdSVd1l.js";import{L as d}from"./LineChart-C9-EZLwB.js";import{p as u}from"./Page-DPte-9pC.js";import{L as h}from"./Line-WMeTlkKP.js";import{R as f}from"./RechartsHookInspector-QZX819t0.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-BmhtQvJ8.js";import"./clsx-B-dksMZM.js";import"./Text-GI5oKEYa.js";import"./DOMUtils-DrG-za0U.js";import"./resolveDefaultProps-BnLaySgP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-_xwh97le.js";import"./zIndexSlice-CSAGQhtB.js";import"./immer-DasQIOIX.js";import"./Layer-2pQ-0vOW.js";import"./index-CsA15_6S.js";import"./RechartsWrapper-B5q3WxuV.js";import"./hooks-C5pIdCPM.js";import"./axisSelectors-To1e2V6V.js";import"./d3-scale-rP3V7GwL.js";import"./renderedTicksSlice-DH7mHkyS.js";import"./CartesianChart-DK-SLcv_.js";import"./chartDataContext-DoiK_cA8.js";import"./CategoricalChart-eE49ceQM.js";import"./Curve-7nNudVZs.js";import"./types-CZ_BmrzD.js";import"./step-BK3O3AGs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-rXvPQbuC.js";import"./Dot-C7a5PgHO.js";import"./RegisterGraphicalItemId-DMySGUM1.js";import"./ErrorBarContext-CKpFXypA.js";import"./GraphicalItemClipPath-qf9cPUyg.js";import"./SetGraphicalItem-iX6trfIf.js";import"./useAnimationId-CvBgWeeZ.js";import"./getRadiusAndStrokeWidthFromDot-M3B-XLBm.js";import"./ActiveShapeUtils-k84bNm8s.js";import"./index-DZjuuzp6.js";import"./ChartSizeDimensions-BRPqgDFi.js";import"./OffsetShower-CTWF0vR4.js";import"./PlotAreaShower-CqWXxpLn.js";const s={angle:{description:`Text rotation angle in degrees.
Positive values rotate clockwise, negative values rotate counterclockwise.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0"}},defaultValue:0},clockWise:{description:"The parameter to calculate the view box of label in radial charts.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General"}},content:{description:`If set a React element, the option is the customized React element of rendering each label.
If set to a function, the function is called once for each item`,table:{type:{summary:"Function | ReactNode"},category:"General"}},dataKey:{description:`Decides how to extract the value of each label from the data:
- \`string\`: the name of the field in the data object;
- \`number\`: the index of the field in the data;
- \`function\`: a function that receives the data object and returns the value of each label.

If set, then valueAccessor will be ignored.

Scatter requires this prop to be set.
Other graphical components will show the same value as the dataKey of the component by default.`,table:{type:{summary:"Function | number | string"},category:"General"}},formatter:{description:`Function to customize how content is serialized before rendering.

This should return a renderable text - something that the {@link Text} component can render.
Typically, a string or number.
Custom components are not supported here - use the \`content\` prop instead.`,table:{type:{summary:"Function"},category:"General"}},id:{description:"Unique identifier of this component.\nUsed as an HTML attribute `id`.",control:{type:"text"},table:{type:{summary:"string"},category:"General"}},offset:{description:`The offset to the specified "position".
Direction of the offset depends on the position.`,table:{type:{summary:"number | string"},category:"General",defaultValue:{summary:"5"}},defaultValue:5},position:{description:"The position of label relative to the view box.",table:{type:{summary:'"bottom" | "center" | "centerBottom" | "centerTop" | "end" | "inside" | "insideBottom" | "insideBottomLeft" | "insideBottomRight" | "insideEnd" | "insideLeft" | "insideRight" | "insideStart" | "insideTop" | "insideTopLeft" | "insideTopRight" | "left" | "middle" | "outside" | "right" | "top" | { x?: string | number | undefined; y?: string | number | undefined; }'},category:"General",defaultValue:{summary:"middle"}},defaultValue:"middle"},textBreakAll:{control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"false"}},defaultValue:!1},valueAccessor:{description:"The accessor function to get the value of each label. Is ignored if dataKey is specified.",table:{type:{summary:"Function"},category:"General"}},zIndex:{description:`Z-Index of this component and its children. The higher the value,
the more on top it will be rendered.
Components with higher zIndex will appear in front of components with lower zIndex.
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},se={argTypes:s,component:n},t={render:m=>{const[l,o]=[600,300];return e.createElement(c,{width:"100%",height:o},e.createElement(d,{width:l,height:o,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(h,{dataKey:"uv"},e.createElement(n,{...m})),e.createElement(f,null)))},args:{...p(s),dataKey:"uv",position:"top"}};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          {/* The target component */}
          <Line dataKey="uv">
            <LabelList {...args} />
          </Line>
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LabelListArgs),
    // This API story should have explicit values for all props
    dataKey: 'uv',
    position: 'top'
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const me=["API"];export{t as API,me as __namedExportsOrder,se as default};
