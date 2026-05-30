import{P as A,c as t}from"./iframe-CR5xUcH4.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-DbazSM9x.js";import{A as E}from"./AreaChart-CMomHFv8.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-DwdQhCQQ.js";import{X as g}from"./XAxis-CPvIxoVT.js";import{Y as h}from"./YAxis-7a5sZdUx.js";import{A as a}from"./Area--Ktv_cOk.js";import{T as u}from"./Tooltip-BOQV87c3.js";import{g as k}from"./zIndexSlice-Coakq-0y.js";import{L as v}from"./Legend-DErFnSmW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DqbEnq-O.js";import"./index-BL2MNBFa.js";import"./index-C1C-S7u7.js";import"./index-vQTj3wjJ.js";import"./index-BwAW1XSH.js";import"./immer-MiNeKFai.js";import"./get-CdpBIjqV.js";import"./renderedTicksSlice-BX_9N5fQ.js";import"./axisSelectors-GqEe5nOB.js";import"./d3-scale-Cr_JmSke.js";import"./resolveDefaultProps-Ceeul6CI.js";import"./isWellBehavedNumber-VNzXGTrj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C1PsmK-N.js";import"./chartDataContext-YedE8BO5.js";import"./CategoricalChart-DNMItnv2.js";import"./CartesianAxis-CM2xAnRM.js";import"./Layer-DDAYqTxx.js";import"./Text-Diq_68Pn.js";import"./DOMUtils-HE2atAIH.js";import"./Label-gV3sJO-c.js";import"./ZIndexLayer-Br2sJvd3.js";import"./types-vWyLmemb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-7AAFvrE4.js";import"./step-CBodA2th.js";import"./path-DyVhHtw_.js";import"./ReactUtils-D5HGwZm0.js";import"./ActivePoints-BYKq7ayk.js";import"./Dot-DyT4z2sM.js";import"./RegisterGraphicalItemId-BwAGbVF8.js";import"./GraphicalItemClipPath-BXgSat3L.js";import"./SetGraphicalItem-Duk0nTzk.js";import"./useAnimationId-qfC-4EnL.js";import"./getRadiusAndStrokeWidthFromDot-CVCg-N3i.js";import"./graphicalItemSelectors-BfOvLmPr.js";import"./useElementOffset-Bf2VABox.js";import"./uniqBy-CLyAGTeC.js";import"./iteratee-BLXBanMB.js";import"./Cross-B-S6Hkm2.js";import"./Rectangle-IJojDNZ6.js";import"./Sector-CARaIeNp.js";import"./Symbols-BSKmi5cj.js";import"./symbol-Cf9z5SBx.js";const It={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Lt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Lt as __namedExportsOrder,It as default};
