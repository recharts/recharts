import{r as A,e as t}from"./iframe-B0wKxNpK.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-CLdtbTIL.js";import{A as E}from"./AreaChart-BCV0JRxr.js";import{C as b}from"./CartesianGrid-BXbLZ40w.js";import{X as d}from"./XAxis-y_MJiFx9.js";import{Y as g}from"./YAxis-Cj3ZlpOa.js";import{A as a}from"./Area-Cb-CUICG.js";import{T as h}from"./Tooltip-DJaVq7DJ.js";import{R as u}from"./RechartsHookInspector-DYn9zJB9.js";import{R as v}from"./arrayEqualityCheck-5nuhtSeT.js";import{L as T}from"./Legend-Z02505nm.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CrtUXLbx.js";import"./index-Cnz4_p8Q.js";import"./immer-DUb1bWtb.js";import"./hooks-oSTNajEI.js";import"./axisSelectors-C1uueI6X.js";import"./d3-scale-CQFM5VB3.js";import"./zIndexSlice-BcKpuoZl.js";import"./renderedTicksSlice-dfIm6fl5.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLpt04B_.js";import"./chartDataContext-CfWR9eN6.js";import"./CategoricalChart-DBWdCLL2.js";import"./resolveDefaultProps-CIdIqjjC.js";import"./CartesianAxis-BqdAX1QZ.js";import"./Layer-DSIwel9q.js";import"./Text-DlBKXZA-.js";import"./DOMUtils-CSAF-8sx.js";import"./Label-BdkcMQDU.js";import"./ZIndexLayer-70VD5Z7C.js";import"./types-CYNiifb0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DiJIjJff.js";import"./step-CkYKWKxI.js";import"./ReactUtils-sKOkm0_2.js";import"./ActivePoints-BSvrQoGF.js";import"./Dot-DXpreqzJ.js";import"./RegisterGraphicalItemId-CDkf5IwF.js";import"./GraphicalItemClipPath-BCjuGXXY.js";import"./SetGraphicalItem-Be0sJCS3.js";import"./useAnimationId-BdZ_5XMP.js";import"./getRadiusAndStrokeWidthFromDot-C3Mll_Mr.js";import"./graphicalItemSelectors-wU_IDqMH.js";import"./useElementOffset-B49r8Ahh.js";import"./uniqBy-Dhf1Ehe8.js";import"./iteratee-C1h-EimB.js";import"./Cross--xo8aNh2.js";import"./Rectangle-BLIXCh-E.js";import"./Sector-CjeW4NDg.js";import"./index-CyRoQl_d.js";import"./ChartSizeDimensions-Bu6AufwQ.js";import"./OffsetShower-Crn6XKfz.js";import"./PlotAreaShower-YsEXXYRG.js";import"./Symbols-D24cFx-Z.js";import"./symbol-CrLzL-Wg.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={300}>
        <ComposedChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Area isAnimationActive={false} dataKey="uv" {...args} />
          {/* All further components are added to show the interaction with the Area properties */}
          <Legend />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: getStoryArgsFromArgsTypesObject(ComposedChartArgs),
  parameters: {
    docs: {
      description: {
        story: 'You can tab to this chart. From there, you can use the arrow keys to navigate along the chart.'
      }
    }
  }
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [toggle, setToggle] = useState(true);
    return <div>
        <button type="button" onClick={() => setToggle(!toggle)}>
          Toggle Tooltip
        </button>

        <AreaChart width={500} height={400} data={pageData} margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
          {toggle && <Tooltip />}
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
