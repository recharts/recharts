import{r as A,e as t}from"./iframe-Br7b33cR.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-BA7IAlKp.js";import{A as E}from"./AreaChart-Dn0T1rHA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CELJYdNz.js";import{X as g}from"./XAxis-TVgTAVSm.js";import{Y as h}from"./YAxis-BOEj2uLm.js";import{A as a}from"./Area-noY2kAVa.js";import{T as u}from"./Tooltip-CcRSnhaL.js";import{R as y}from"./RechartsHookInspector-DLRUlTlC.js";import{R as v}from"./arrayEqualityCheck-BDKsVEjv.js";import{L as T}from"./Legend-mcm1bE2i.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D63T188Y.js";import"./index-DVsOwuOo.js";import"./immer-BhWlJGD4.js";import"./hooks-BC1xVB-F.js";import"./axisSelectors-hQ7yLifF.js";import"./d3-scale-DdreInNE.js";import"./zIndexSlice-DsbsVgFf.js";import"./renderedTicksSlice-BcwlNeh2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cn-qy5pU.js";import"./chartDataContext-CpalcXUw.js";import"./CategoricalChart-xWzy3I98.js";import"./resolveDefaultProps-CdmMjLyp.js";import"./CartesianAxis-Dlnx8Z1G.js";import"./Layer-IwfPtrhx.js";import"./Text-D-_zWi9U.js";import"./DOMUtils-B_HE9eSD.js";import"./Label-SApjRgym.js";import"./ZIndexLayer-D-LZtBsa.js";import"./types-CjQO2tSW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BrUwP9tn.js";import"./step-BTmPe7Fi.js";import"./ReactUtils-WaUbZ0sz.js";import"./ActivePoints-DDCoLWpR.js";import"./Dot-D2QBiTth.js";import"./RegisterGraphicalItemId-Bvds7-Cj.js";import"./GraphicalItemClipPath-B3sq3Fvy.js";import"./SetGraphicalItem-rBYE9Kbl.js";import"./useAnimationId-DXRTa-xv.js";import"./getRadiusAndStrokeWidthFromDot-CxbakQi2.js";import"./graphicalItemSelectors-BxWopPOu.js";import"./useElementOffset-w8M65t7d.js";import"./uniqBy-CKMV7Df5.js";import"./iteratee-D20FIo_7.js";import"./Cross-BUGC4fBZ.js";import"./Rectangle-D361kRQy.js";import"./Sector-BovvqAup.js";import"./index-Cr6FWzjz.js";import"./ChartSizeDimensions-D_sBOB8N.js";import"./OffsetShower-dRSZPBrC.js";import"./PlotAreaShower-BUasdGew.js";import"./Symbols-LMEzLfWp.js";import"./symbol-dl1ml4W0.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
