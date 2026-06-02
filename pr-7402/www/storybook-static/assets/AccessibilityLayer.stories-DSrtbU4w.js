import{P as A,c as t}from"./iframe-CbFBC3pt.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-Bc5HbX-g.js";import{A as E}from"./AreaChart-Cd26NaDa.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-1z4GSZj5.js";import{X as g}from"./XAxis-CuiMGrX2.js";import{Y as h}from"./YAxis-DVG7yXmp.js";import{A as a}from"./Area-Izlx5UVK.js";import{T as u}from"./Tooltip-srpLNmE9.js";import{g as k}from"./zIndexSlice-B8XantvI.js";import{L as v}from"./Legend-B3P9K48B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C8YdywQb.js";import"./index-C4IztgfQ.js";import"./index-TGdP4Icg.js";import"./index-ZsssZYUM.js";import"./index-C2rCfHQ6.js";import"./immer-BwRByMMH.js";import"./get-CeJ-O4Ro.js";import"./renderedTicksSlice-DaB_pXBU.js";import"./axisSelectors-DV4HNdRQ.js";import"./d3-scale-C98YhsaH.js";import"./resolveDefaultProps-DZFSM3t8.js";import"./isWellBehavedNumber-D0PjXqnv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ByXMh7XU.js";import"./chartDataContext-DASovuhK.js";import"./CategoricalChart-BMWFvZBg.js";import"./CartesianAxis-CA9u32-P.js";import"./Layer-DTzSPWpf.js";import"./Text-BLKgh8ue.js";import"./DOMUtils-rSL8yp4p.js";import"./Label-8xdcvYL4.js";import"./ZIndexLayer-BgzH297Q.js";import"./types-CX4nwvsZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BlF3DWpa.js";import"./step-NntPL7PC.js";import"./path-DyVhHtw_.js";import"./ReactUtils-PDSB0db_.js";import"./ActivePoints-losSAyHn.js";import"./Dot-rYx1Cydy.js";import"./RegisterGraphicalItemId-BWff6MJa.js";import"./GraphicalItemClipPath-3Dbzdjfh.js";import"./SetGraphicalItem-D4AnrrJM.js";import"./useAnimationId-B6jMJ5_9.js";import"./getRadiusAndStrokeWidthFromDot-Dg3y-0Vr.js";import"./graphicalItemSelectors-BU-bA2Rl.js";import"./useElementOffset-WNt73Ltm.js";import"./uniqBy-DX3rhGUr.js";import"./iteratee-C94OH8qj.js";import"./Cross-D1PvKyxV.js";import"./Rectangle-BaQ7rI5r.js";import"./Sector-g-iQgKRp.js";import"./Symbols-xbBzb2HM.js";import"./symbol-CDDmFjF_.js";const It={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
