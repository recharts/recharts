import{r as A,R as t}from"./iframe-DUrhAGem.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-ymO5UTEI.js";import{A as E}from"./AreaChart-BFz2xisJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DS7fbmD7.js";import{X as g}from"./XAxis-RIRw3T0L.js";import{Y as h}from"./YAxis--wp8j7v5.js";import{A as a}from"./Area-iDMPcWKr.js";import{T as u}from"./Tooltip-CgqeczDe.js";import{R as k}from"./zIndexSlice-DdMK3B0N.js";import{L as v}from"./Legend-C6612Dil.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BnFDuvuz.js";import"./index-Cpmma9TD.js";import"./index-CNLWSLM9.js";import"./index-DCvD1AlG.js";import"./index-Ci9yztB-.js";import"./throttle-D3vyfJ8U.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DZdK350N.js";import"./axisSelectors-DZbM2Ze4.js";import"./resolveDefaultProps-BTGu5wQu.js";import"./isWellBehavedNumber-DFEWDh2V.js";import"./d3-scale-SkNolWO8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CWlmKWcs.js";import"./chartDataContext-DaAbIer4.js";import"./CategoricalChart-CpTQxP4M.js";import"./CartesianAxis-IffF52gj.js";import"./Layer-Dt-vE1vN.js";import"./Text-BrHlFoZT.js";import"./DOMUtils-CoHfxK0O.js";import"./Label-Y4Dm0VZ7.js";import"./ZIndexLayer-CXa7SyiJ.js";import"./types-ClGgKr9E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DPqqk1vy.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-wThfzOGn.js";import"./useAnimationId-VITr_DdB.js";import"./ActivePoints-CwAypjqz.js";import"./Dot-pQkDRCWY.js";import"./RegisterGraphicalItemId-Ck0eBYhQ.js";import"./GraphicalItemClipPath-DZHG2jah.js";import"./SetGraphicalItem-D3CB3LDo.js";import"./getRadiusAndStrokeWidthFromDot-CJOj0WiY.js";import"./ActiveShapeUtils-0ZcDx16I.js";import"./Curve-95W41D07.js";import"./step-1cVCQ5Jl.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DBNUyimm.js";import"./useElementOffset-G25gOvED.js";import"./uniqBy-jcaqdoDx.js";import"./iteratee-B2QDbcSu.js";import"./Cross-CcQ18uYf.js";import"./Rectangle-D_OnYWLV.js";import"./util-Dxo8gN5i.js";import"./Sector-C15_tvGW.js";import"./Symbols-DFoWMewR.js";import"./symbol-BhNE3Frx.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
