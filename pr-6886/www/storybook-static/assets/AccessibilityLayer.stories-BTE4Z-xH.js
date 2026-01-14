import{e as t,r as A}from"./iframe-AMdIPtJ_.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-CdZS-7p_.js";import{R as E}from"./arrayEqualityCheck-3UyTPjiS.js";import{A as a}from"./Area-DPurmNsA.js";import{L as b}from"./Legend-C8erwHas.js";import{X as d}from"./XAxis-CXCVRDkD.js";import{Y as g}from"./YAxis-L1AiUQKA.js";import{T as h}from"./Tooltip-Diu-5ejz.js";import{R as u}from"./RechartsHookInspector-Bq93gymj.js";import{A as v}from"./AreaChart-CzYgH8Aq.js";import{C as T}from"./CartesianGrid-Cp4flrLp.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-QBdH5qJC.js";import"./hooks-BddCSC5x.js";import"./axisSelectors-CYvP6yih.js";import"./zIndexSlice-CLEOTtEz.js";import"./resolveDefaultProps-eDHOoSb6.js";import"./PolarUtils-KOfaMXsG.js";import"./CartesianChart-C7nb5Il8.js";import"./chartDataContext-BsDdYGEp.js";import"./CategoricalChart-C39w_Gis.js";import"./Curve-CXXZiBGe.js";import"./types-CQP6j9X1.js";import"./Layer-s4o8RnMf.js";import"./ReactUtils-BJF5ZjW2.js";import"./Label-BXNXe9p5.js";import"./Text-Bmd0wKqf.js";import"./DOMUtils-Bw_kQjwH.js";import"./ZIndexLayer-DJXgyukI.js";import"./ActivePoints-Du82FzFM.js";import"./Dot-BW7Cs_-q.js";import"./RegisterGraphicalItemId-BIrQ-TMI.js";import"./GraphicalItemClipPath-CU1RZZTa.js";import"./SetGraphicalItem-BrubgrnS.js";import"./useAnimationId-DD0SbbDQ.js";import"./getRadiusAndStrokeWidthFromDot-dgMzj4wl.js";import"./graphicalItemSelectors-Bdgj_snZ.js";import"./Symbols-B091hayX.js";import"./useElementOffset-B3aomIQv.js";import"./iteratee-Y8fEdtnU.js";import"./CartesianAxis-5YsJLijc.js";import"./Cross-D2A-BP76.js";import"./Rectangle-BXzCN27L.js";import"./Sector-DeLHi04Y.js";import"./index-C1Q9sGQl.js";import"./ChartSizeDimensions-C4K5r_rw.js";import"./OffsetShower-DJsmVlcW.js";import"./PlotAreaShower-poQ332x-.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
