import{e}from"./iframe-rLfMAXZA.js";import{g as l}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-BClzbOkG.js";import{R as c}from"./arrayEqualityCheck-OjJIGGxq.js";import{L as d}from"./LineChart-DNxeWufw.js";import{L as u}from"./Line-CyeIrLy7.js";import{R as h}from"./RechartsHookInspector-CGMMyBd8.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-BHs-e8Zr.js";import"./clsx-B-dksMZM.js";import"./Text-BWQYbcH-.js";import"./DOMUtils-CYiDz4oM.js";import"./resolveDefaultProps-Cy3Gz-UL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CsEI63Vc.js";import"./zIndexSlice-CNK81FG0.js";import"./immer-DvqdMPbs.js";import"./Layer-B0Vv-b1h.js";import"./index-1CgFOnhG.js";import"./RechartsWrapper-C5rZD4qh.js";import"./hooks-DgA2khsF.js";import"./axisSelectors-Cq_h1C-j.js";import"./d3-scale-DULTCxaQ.js";import"./renderedTicksSlice-BlSnCr41.js";import"./CartesianChart-C_VZaAy7.js";import"./chartDataContext-B3WND6K7.js";import"./CategoricalChart-CTzB8VLC.js";import"./ActivePoints-l6297kMX.js";import"./Dot-0q9wAizM.js";import"./types-BRd5e3b8.js";import"./RegisterGraphicalItemId-5AOI34gd.js";import"./ErrorBarContext-BvpDrqLU.js";import"./GraphicalItemClipPath-f54LuI1V.js";import"./SetGraphicalItem-Coif6o--.js";import"./useAnimationId-Bi7bZ4Q9.js";import"./getRadiusAndStrokeWidthFromDot-CJ49ydrZ.js";import"./ActiveShapeUtils-BxNoVXTY.js";import"./isPlainObject-xuio5Ndz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CweQqCr6.js";import"./Trapezoid-BajFM_G_.js";import"./Sector-Bx3vc8cf.js";import"./Symbols-DNEFR3nz.js";import"./symbol-CTj6pWvp.js";import"./step-DkSlwgc8.js";import"./Curve-DS3UGKj9.js";import"./index-Ck4Yf9Sw.js";import"./ChartSizeDimensions-83vg2xh3.js";import"./OffsetShower-E_iTtzu1.js";import"./PlotAreaShower-Df-GR4o6.js";const s={angle:{description:`Text rotation angle in degrees.
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},ue={argTypes:s,component:n},t={render:m=>{const[p,o]=[600,300];return e.createElement(c,{width:"100%",height:o},e.createElement(d,{width:p,height:o,margin:{top:20,right:20,bottom:20,left:20},data:f},e.createElement(u,{dataKey:"uv"},e.createElement(n,{...m})),e.createElement(h,null)))},args:{...l(s),dataKey:"uv",position:"top"}};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
