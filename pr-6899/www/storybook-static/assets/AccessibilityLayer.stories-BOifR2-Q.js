import{e as t,r as A}from"./iframe-DVbcaGEk.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-CkOG6aXI.js";import{R as E}from"./arrayEqualityCheck-D_Ccs7mG.js";import{A as a}from"./Area-CZ8z41SG.js";import{L as b}from"./Legend-D8WJHscn.js";import{X as d}from"./XAxis-3cZu4ol_.js";import{Y as g}from"./YAxis-C7ETLAW_.js";import{T as h}from"./Tooltip-COhbepB5.js";import{R as u}from"./RechartsHookInspector-CNkljFSC.js";import{A as v}from"./AreaChart-0frAsNwK.js";import{C as T}from"./CartesianGrid-BC7g-EtZ.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CI_kVB3D.js";import"./hooks-DrJQ9o1U.js";import"./axisSelectors-Dq8ysKg7.js";import"./zIndexSlice-C3Z2iJoi.js";import"./resolveDefaultProps-BvhwmIy1.js";import"./PolarUtils-BCmS2GQK.js";import"./CartesianChart-DwoXLAKx.js";import"./chartDataContext-BHEPpTwp.js";import"./CategoricalChart-DaQkrRKt.js";import"./Curve-DRY3YzYB.js";import"./types-glyr-q7x.js";import"./Layer-CTeRo74K.js";import"./ReactUtils-PeKnJ7eE.js";import"./Label-Vy4t0U1x.js";import"./Text-BnUgu-YX.js";import"./DOMUtils-C3Nevwge.js";import"./ZIndexLayer-DQcVBq3k.js";import"./ActivePoints-iMOiVhGw.js";import"./Dot-BVLrssPS.js";import"./RegisterGraphicalItemId-sqkoY2pX.js";import"./GraphicalItemClipPath-58Cq7fMH.js";import"./SetGraphicalItem-CMkDLn5I.js";import"./useAnimationId-BsgPO1Qj.js";import"./getRadiusAndStrokeWidthFromDot-Bc3iZ5Rn.js";import"./graphicalItemSelectors-BOv0msDD.js";import"./Symbols-D0zgYynQ.js";import"./useElementOffset-BihE1waz.js";import"./iteratee-BDIycRH5.js";import"./CartesianAxis-DJav8QwX.js";import"./Cross-C3FT44Tn.js";import"./Rectangle-CDg01dVF.js";import"./Sector-D5CuENkF.js";import"./index-BAtGFOnL.js";import"./ChartSizeDimensions-B0rnWoCy.js";import"./OffsetShower-DI4Pwzeh.js";import"./PlotAreaShower-CPYGkOSs.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
