import{e}from"./iframe-Dnf4AlLR.js";import{g as p}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-C1SR2qhB.js";import{g as c}from"./arrayEqualityCheck-UrcKYzS0.js";import{L as d}from"./LineChart-iH7N-Fqd.js";import{p as u}from"./Page-DPte-9pC.js";import{L as h}from"./Line-rMlsh7WZ.js";import{R as f}from"./RechartsHookInspector-OLBh2oCI.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-B_crGnD8.js";import"./clsx-B-dksMZM.js";import"./Text-BH203wB1.js";import"./DOMUtils-DeOIiqB-.js";import"./resolveDefaultProps-BqkLROOU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DOX2ldNu.js";import"./zIndexSlice-BgXAgJL3.js";import"./immer-DA9BPlnc.js";import"./Layer-V8ImnEZB.js";import"./index-D1BDiruz.js";import"./RechartsWrapper-DAmqBWgG.js";import"./hooks-ByMCROpL.js";import"./axisSelectors-VRydpu3s.js";import"./d3-scale-Cb8N1VfB.js";import"./renderedTicksSlice-CTDdadeF.js";import"./CartesianChart-CTkTDluY.js";import"./chartDataContext-D6OzkCBP.js";import"./CategoricalChart-DESZNtyF.js";import"./Curve-Ca-XrmBQ.js";import"./types-DHYQQjs9.js";import"./step-BhFSNpdr.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DtjEEYK2.js";import"./Dot-2Bj9Ykgw.js";import"./RegisterGraphicalItemId-26wIU3J0.js";import"./ErrorBarContext-DnPqunZ7.js";import"./GraphicalItemClipPath-u2mX7OG7.js";import"./SetGraphicalItem-B1dso5Ln.js";import"./useAnimationId-Bo3VYg8c.js";import"./getRadiusAndStrokeWidthFromDot-DUWC1cP5.js";import"./ActiveShapeUtils-D2qQQTmk.js";import"./index-DhYdY39W.js";import"./ChartSizeDimensions-xg99Q5LG.js";import"./OffsetShower-CsmBnO90.js";import"./PlotAreaShower-CowJNvBY.js";const s={angle:{description:`Text rotation angle in degrees.
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
