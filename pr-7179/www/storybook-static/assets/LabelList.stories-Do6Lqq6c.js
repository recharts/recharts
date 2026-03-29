import{e}from"./iframe-DqE0HhDh.js";import{g as l}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-D5QixmYd.js";import{R as c}from"./arrayEqualityCheck-BhYj9TRB.js";import{L as d}from"./LineChart-DNBEZuxS.js";import{L as u}from"./Line-CRKf7T1y.js";import{R as h}from"./RechartsHookInspector-euBm-j1Q.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-BC1NNDJR.js";import"./clsx-B-dksMZM.js";import"./Text-BvcQj2uR.js";import"./DOMUtils-Rt6oxOkz.js";import"./resolveDefaultProps-B0zUW797.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DiFU3mdL.js";import"./zIndexSlice-VVzaKraz.js";import"./immer-DaO_pvPG.js";import"./Layer-DVJHVubL.js";import"./index-CKBMJiTG.js";import"./RechartsWrapper-HEjAodTD.js";import"./hooks-yD69KcYZ.js";import"./axisSelectors-DBPKow-C.js";import"./d3-scale-BFk6iKoW.js";import"./renderedTicksSlice-DXSpE_fB.js";import"./CartesianChart-yHIHv3q8.js";import"./chartDataContext-Bc6WqcUu.js";import"./CategoricalChart-CIvi1KrP.js";import"./ActivePoints-CSJ_ljSz.js";import"./Dot-KnUtLjFJ.js";import"./types-DTL0qiru.js";import"./RegisterGraphicalItemId-CEsZ-P-v.js";import"./ErrorBarContext-B9B0bG7x.js";import"./GraphicalItemClipPath-iQzHXFpk.js";import"./SetGraphicalItem-BjVOdg4M.js";import"./useAnimationId-BH8Y0C-h.js";import"./getRadiusAndStrokeWidthFromDot-CIcwAwcp.js";import"./ActiveShapeUtils-DeEcXvYf.js";import"./isPlainObject-ClSQ8ayO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CjxlKMCH.js";import"./Trapezoid-BrfeAX72.js";import"./Sector-HtnhKewF.js";import"./Symbols-OgGFg2Oe.js";import"./symbol-CIQc0sSb.js";import"./step-Mkfg8JSi.js";import"./Curve-DSraN8-A.js";import"./index-BN77NN_W.js";import"./ChartSizeDimensions-DB_WkeO6.js";import"./OffsetShower-D_wBefSQ.js";import"./PlotAreaShower-CX6NyhGu.js";const s={angle:{description:`Text rotation angle in degrees.
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
