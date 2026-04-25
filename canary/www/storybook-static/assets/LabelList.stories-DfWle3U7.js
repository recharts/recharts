import{e}from"./iframe-CPCZOK1n.js";import{g as l}from"./utils-ePvtT4un.js";import{L as n}from"./ReactUtils-CSglJ9G5.js";import{R as c}from"./arrayEqualityCheck-8pkbG_5i.js";import{L as d}from"./LineChart-DcWMl4XS.js";import{p as u}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-CGyBz7yI.js";import{R as f}from"./RechartsHookInspector-BtGo_ncg.js";import"./preload-helper-Dp1pzeXC.js";import"./Label-CTXaFaVv.js";import"./clsx-B-dksMZM.js";import"./Text-Cl6E4AYb.js";import"./DOMUtils-C8mAxLIU.js";import"./resolveDefaultProps-oWFt7rla.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-PN2_dLzy.js";import"./zIndexSlice-CzIf2J47.js";import"./immer-BU-gze6F.js";import"./Layer-DgSzLvrX.js";import"./index-DASNqNcn.js";import"./RechartsWrapper-kO2YHyse.js";import"./hooks-BA_spPLW.js";import"./axisSelectors-BKubAPhx.js";import"./d3-scale-Bak8-ygn.js";import"./renderedTicksSlice-CpVIhZJh.js";import"./CartesianChart-COi-Fufa.js";import"./chartDataContext-DQ34TJEj.js";import"./CategoricalChart-DA_LUwfH.js";import"./ActivePoints-MCeE4Hpe.js";import"./Dot-Drgga1HN.js";import"./types-tTbnguye.js";import"./RegisterGraphicalItemId-C7ZsFXSM.js";import"./ErrorBarContext-Cm1Er5q-.js";import"./GraphicalItemClipPath-D7ojsTyF.js";import"./SetGraphicalItem-Cdrd-n17.js";import"./useAnimationId-BOEFbdDG.js";import"./getRadiusAndStrokeWidthFromDot-DT85GWcH.js";import"./ActiveShapeUtils-BsAVSgeR.js";import"./isPlainObject-hFLIJzKO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBBYhjQV.js";import"./Trapezoid-t3_zdwFX.js";import"./Sector-BjRPzYK4.js";import"./Symbols-BRdBssbX.js";import"./symbol-hTM2V_3p.js";import"./step-B2es0Z9s.js";import"./Curve-Bm35dzge.js";import"./index-CZMWO916.js";import"./ChartSizeDimensions-DT2M52ae.js";import"./OffsetShower-DYRUehRC.js";import"./PlotAreaShower-CM2fQjBs.js";const s={angle:{description:`Text rotation angle in degrees.
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
