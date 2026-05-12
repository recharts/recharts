import{e}from"./iframe-m4iUvHHE.js";import{g as l}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-BGxD9cqm.js";import{R as c}from"./arrayEqualityCheck-h_ZmhyNH.js";import{L as d}from"./LineChart-OazyYQzk.js";import{p as u}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-B2TAto9y.js";import{R as f}from"./RechartsHookInspector-DquHYSn_.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-BCusTt26.js";import"./clsx-B-dksMZM.js";import"./Text-B9di0q31.js";import"./DOMUtils-BJmvgBqy.js";import"./resolveDefaultProps-DyxbBsOP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DebxKBww.js";import"./zIndexSlice-CKy2olf2.js";import"./immer-g1bGLmSg.js";import"./Layer-CcrS99IB.js";import"./index-CrxMp6gE.js";import"./RechartsWrapper-F72CiqvA.js";import"./hooks-DWsntCpj.js";import"./axisSelectors-DfPlbHbP.js";import"./d3-scale-Y-jFDeRI.js";import"./renderedTicksSlice-BEB6E7mo.js";import"./CartesianChart-_tfuwHZj.js";import"./chartDataContext-BiqezE3h.js";import"./CategoricalChart-9uAdVsVQ.js";import"./ActivePoints-MuJUPiBM.js";import"./Dot-NbYBXchV.js";import"./types-ipm49NW_.js";import"./RegisterGraphicalItemId-uusu-k8r.js";import"./ErrorBarContext-CisfXBtR.js";import"./GraphicalItemClipPath-BgZNml_V.js";import"./SetGraphicalItem-DEb8ASoe.js";import"./useAnimationId-CowdAHeu.js";import"./getRadiusAndStrokeWidthFromDot-uhw_xs2j.js";import"./ActiveShapeUtils-DWhLewKE.js";import"./isPlainObject-BVIwbHuq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNlZhouO.js";import"./Trapezoid-BQrLMZHr.js";import"./Sector-0LK2YG6H.js";import"./Symbols-B9jGSpgT.js";import"./symbol-Chx5djFD.js";import"./step-BaU1N5Sx.js";import"./Curve-lACOSqJl.js";import"./index-5r_S6fe4.js";import"./ChartSizeDimensions-L8mur3p1.js";import"./OffsetShower-BU7tduPK.js";import"./PlotAreaShower-C2wXuw9M.js";const s={angle:{description:`Text rotation angle in degrees.
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
