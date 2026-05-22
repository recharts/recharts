import{e}from"./iframe-Cag7wSRv.js";import{g as p}from"./utils-ePvtT4un.js";import{L as n}from"./AnimatedItems-CluPQFSi.js";import{g as c}from"./arrayEqualityCheck-DIS5wzHQ.js";import{L as d}from"./LineChart-xYtqufeh.js";import{p as u}from"./Page-DPte-9pC.js";import{L as h}from"./Line-DfIGhKaB.js";import{R as f}from"./RechartsHookInspector-BY5Jlwrh.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-C9zkgYEJ.js";import"./clsx-B-dksMZM.js";import"./Text-5aD9nx6b.js";import"./DOMUtils-BK1rzgLA.js";import"./resolveDefaultProps-Xc1HLF5N.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DmSAjehE.js";import"./zIndexSlice-D-tflLzN.js";import"./immer-284wn8VQ.js";import"./Layer-BKYLP7Ft.js";import"./index-g0QlUGKs.js";import"./useAnimationId-DTrmZnPm.js";import"./string-yHBgcFlJ.js";import"./RechartsWrapper-BwHua0WY.js";import"./hooks-BrXnztNy.js";import"./axisSelectors-m8f3aizN.js";import"./d3-scale-e6S4jaCB.js";import"./renderedTicksSlice-CDJVjsUp.js";import"./CartesianChart-z1NmO9ak.js";import"./chartDataContext-WcgYQIEB.js";import"./CategoricalChart-CRN8hCqy.js";import"./Curve-DBPrYDrF.js";import"./types-VwRdPpC4.js";import"./step-CkDKckf6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CnGlv9Fu.js";import"./Dot-DnmND_ux.js";import"./RegisterGraphicalItemId-CXcdRHxm.js";import"./ErrorBarContext-CXe2vi8A.js";import"./GraphicalItemClipPath-BLjl5NXz.js";import"./SetGraphicalItem-UxGNHPNY.js";import"./getRadiusAndStrokeWidthFromDot-BiYvEIsX.js";import"./ActiveShapeUtils-36BEpEpw.js";import"./index-BKRpgk4a.js";import"./ChartSizeDimensions-DvhfRAM1.js";import"./OffsetShower-_fcX7Can.js";import"./PlotAreaShower-DCoj4aUc.js";const s={angle:{description:`Text rotation angle in degrees.
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
If undefined or 0, the content is rendered in the default layer without portals.`,control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"2000"}},defaultValue:2e3}},me={argTypes:s,component:n},t={render:m=>{const[l,o]=[600,300];return e.createElement(c,{width:"100%",height:o},e.createElement(d,{width:l,height:o,margin:{top:20,right:20,bottom:20,left:20},data:u},e.createElement(h,{dataKey:"uv"},e.createElement(n,{...m})),e.createElement(f,null)))},args:{...p(s),dataKey:"uv",position:"top"}};var r,i,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const le=["API"];export{t as API,le as __namedExportsOrder,me as default};
