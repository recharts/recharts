import{e}from"./iframe-C1fnHnKT.js";import{g as l}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-Dm1SJpk1.js";import{R as c}from"./arrayEqualityCheck-l6uT4Usv.js";import{L as d}from"./LineChart-DtqLvayy.js";import{p as u}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-CMzeYv-o.js";import{R as f}from"./RechartsHookInspector-ewceuCfq.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-8_9z-Hx3.js";import"./clsx-B-dksMZM.js";import"./Text-BUAHuXAg.js";import"./DOMUtils-CXwfjRJu.js";import"./resolveDefaultProps-0awOkESO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-UU7tiK14.js";import"./zIndexSlice-BoAv0LH1.js";import"./immer-hlXcvFio.js";import"./Layer-BIYNx1xN.js";import"./index-C2jDSQT9.js";import"./RechartsWrapper-CsoN9NQZ.js";import"./hooks-D4TdCpxu.js";import"./axisSelectors-AIxg2YTu.js";import"./d3-scale-Br8Qy1nV.js";import"./renderedTicksSlice-DAUXyaQX.js";import"./CartesianChart-DJhd_WoR.js";import"./chartDataContext-DOE3KdCn.js";import"./CategoricalChart-oohW2fAH.js";import"./ActivePoints-CLnaFdlX.js";import"./Dot-CuqwvLTE.js";import"./types-C6vI6gcr.js";import"./RegisterGraphicalItemId-BcT6ipJt.js";import"./ErrorBarContext-BJ-bLhxe.js";import"./GraphicalItemClipPath-_2MLatM1.js";import"./SetGraphicalItem-ByOhwbI-.js";import"./useAnimationId-mn0ugSXH.js";import"./getRadiusAndStrokeWidthFromDot-DMYxlHUI.js";import"./ActiveShapeUtils-CJoqVDNw.js";import"./isPlainObject-BdficFEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKvxhVC9.js";import"./Trapezoid-DbflFOBZ.js";import"./Sector-BUT460qv.js";import"./Symbols-Bo3RkkJn.js";import"./symbol-D-2KK1gt.js";import"./step-BfW9Id0A.js";import"./Curve-CnB-6T_0.js";import"./index-BXsfGSea.js";import"./ChartSizeDimensions-Dhy2eg61.js";import"./OffsetShower-C23rQ0FG.js";import"./PlotAreaShower-P9zfdMTd.js";const s={angle:{description:`Text rotation angle in degrees.
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
