import{e}from"./iframe-CB3xDsCu.js";import{g as l}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-VpSEOCqX.js";import{R as c}from"./arrayEqualityCheck-BR3R0AIc.js";import{L as d}from"./LineChart-DeIU3Ddh.js";import{p as u}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-B3-O5qK3.js";import{R as f}from"./RechartsHookInspector-YR9f7y3a.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-Br8zkPUL.js";import"./clsx-B-dksMZM.js";import"./Text-UtkJ3ap3.js";import"./DOMUtils-D031Yf3A.js";import"./resolveDefaultProps-D2yjNbgT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cz6Wxl3N.js";import"./zIndexSlice-BDUpIrxI.js";import"./immer-DVlX7gWW.js";import"./Layer-Ch9gTjDA.js";import"./index-dzLlUSBq.js";import"./RechartsWrapper-DzH2iSQ0.js";import"./hooks-DFjGEA5J.js";import"./axisSelectors-BD2wGdYf.js";import"./d3-scale-DBjacL5V.js";import"./renderedTicksSlice-DTGPDQhB.js";import"./CartesianChart-Cn7O9-Sb.js";import"./chartDataContext-BOo6jc00.js";import"./CategoricalChart-D8l_W_kj.js";import"./ActivePoints-BkwIf39h.js";import"./Dot-DjIPoMxO.js";import"./types-DISef9EU.js";import"./RegisterGraphicalItemId-CB7Ow1C1.js";import"./ErrorBarContext-CBtIL5Hk.js";import"./GraphicalItemClipPath-CS8dxw6f.js";import"./SetGraphicalItem-gnY-9bMd.js";import"./useAnimationId-DK8UFsIQ.js";import"./getRadiusAndStrokeWidthFromDot-BuBjGrUL.js";import"./ActiveShapeUtils-Bccy3ucd.js";import"./isPlainObject-YEY4Yrhn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B5g_Hqxg.js";import"./Trapezoid-C2jtUOqg.js";import"./Sector-CIMNq_ez.js";import"./Symbols-BHAxghFO.js";import"./symbol-B_QpE6oW.js";import"./step-Dz5tlK5n.js";import"./Curve-BUSUbFqo.js";import"./index-DOjZWx7H.js";import"./ChartSizeDimensions-B9c3BCsk.js";import"./OffsetShower-Cd2a_SDI.js";import"./PlotAreaShower-DozSiwxV.js";const s={angle:{description:`Text rotation angle in degrees.
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
