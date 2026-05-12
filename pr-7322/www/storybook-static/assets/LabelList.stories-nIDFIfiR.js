import{e}from"./iframe-Br7b33cR.js";import{g as l}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-WaUbZ0sz.js";import{R as c}from"./arrayEqualityCheck-BDKsVEjv.js";import{L as d}from"./LineChart-iy1JPxwg.js";import{p as u}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-DiemE468.js";import{R as f}from"./RechartsHookInspector-DLRUlTlC.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-SApjRgym.js";import"./clsx-B-dksMZM.js";import"./Text-D-_zWi9U.js";import"./DOMUtils-B_HE9eSD.js";import"./resolveDefaultProps-CdmMjLyp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D-LZtBsa.js";import"./zIndexSlice-DsbsVgFf.js";import"./immer-BhWlJGD4.js";import"./Layer-IwfPtrhx.js";import"./index-DVsOwuOo.js";import"./RechartsWrapper-D63T188Y.js";import"./hooks-BC1xVB-F.js";import"./axisSelectors-hQ7yLifF.js";import"./d3-scale-DdreInNE.js";import"./renderedTicksSlice-BcwlNeh2.js";import"./CartesianChart-Cn-qy5pU.js";import"./chartDataContext-CpalcXUw.js";import"./CategoricalChart-xWzy3I98.js";import"./ActivePoints-DDCoLWpR.js";import"./Dot-D2QBiTth.js";import"./types-CjQO2tSW.js";import"./RegisterGraphicalItemId-Bvds7-Cj.js";import"./ErrorBarContext-BxzjAj_b.js";import"./GraphicalItemClipPath-B3sq3Fvy.js";import"./SetGraphicalItem-rBYE9Kbl.js";import"./useAnimationId-DXRTa-xv.js";import"./getRadiusAndStrokeWidthFromDot-CxbakQi2.js";import"./ActiveShapeUtils-Dqrm1tKM.js";import"./isPlainObject-ggbrHHb5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D361kRQy.js";import"./Trapezoid-CU7AezY8.js";import"./Sector-BovvqAup.js";import"./Symbols-LMEzLfWp.js";import"./symbol-dl1ml4W0.js";import"./step-BTmPe7Fi.js";import"./Curve-BrUwP9tn.js";import"./index-Cr6FWzjz.js";import"./ChartSizeDimensions-D_sBOB8N.js";import"./OffsetShower-dRSZPBrC.js";import"./PlotAreaShower-BUasdGew.js";const s={angle:{description:`Text rotation angle in degrees.
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
