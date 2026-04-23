import{e}from"./iframe-B9O9PLmj.js";import{g as l}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-BBiT48UQ.js";import{R as c}from"./arrayEqualityCheck-DC5CCiaX.js";import{L as d}from"./LineChart-u0nXp41P.js";import{p as u}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-C5FWVrxM.js";import{R as f}from"./RechartsHookInspector-oD2s6CPO.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-CyHBMA3l.js";import"./clsx-B-dksMZM.js";import"./Text-BILB17Zq.js";import"./DOMUtils-CwoLiA_U.js";import"./resolveDefaultProps-BG5-jm5o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DYfC-fux.js";import"./zIndexSlice-CXYg_MdN.js";import"./immer-CorX8m6_.js";import"./Layer-CeeJrP8o.js";import"./index-CAnKFVeM.js";import"./RechartsWrapper-DGbm3XN2.js";import"./hooks-BTzSQdIL.js";import"./axisSelectors-D00_Gdzw.js";import"./d3-scale-CExCS1t0.js";import"./renderedTicksSlice-M3URujhE.js";import"./CartesianChart-CzHYXFWb.js";import"./chartDataContext-CXYcSTD1.js";import"./CategoricalChart-CMv5R2DQ.js";import"./ActivePoints-DwZhrzjl.js";import"./Dot-CuQoBawd.js";import"./types-wS1CwaJ6.js";import"./RegisterGraphicalItemId-B6wW9i8n.js";import"./ErrorBarContext-CdQGiGFg.js";import"./GraphicalItemClipPath-CTLEHBag.js";import"./SetGraphicalItem-C1WNJGNc.js";import"./useAnimationId-CEyoSkEC.js";import"./getRadiusAndStrokeWidthFromDot-BJYT2kqZ.js";import"./ActiveShapeUtils-BZRBvXfn.js";import"./isPlainObject-DKUUO2R6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD4TDJ91.js";import"./Trapezoid-BTKQS4gb.js";import"./Sector-Cr5FAs6h.js";import"./Symbols-CFtKhMEP.js";import"./symbol-gibfx3Ew.js";import"./step-DmhUsuIO.js";import"./Curve-CnUGNDOG.js";import"./index-B7585ExM.js";import"./ChartSizeDimensions-BLFdg5d7.js";import"./OffsetShower-BZwyeReB.js";import"./PlotAreaShower-4RtYHx69.js";const s={angle:{description:`Text rotation angle in degrees.
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},ue={argTypes:s,component:n},t={render:m=>{const[p,o]=[600,300];return e.createElement(c,{width:"100%",height:o},e.createElement(d,{width:p,height:o,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(h,{dataKey:"uv"},e.createElement(n,{...m})),e.createElement(f,null)))},args:{...l(s),dataKey:"uv",position:"top"}};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const he=["API"];export{t as API,he as __namedExportsOrder,ue as default};
