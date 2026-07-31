import{r as A,R as t}from"./iframe-BNn_UWWx.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-iCBZpoeK.js";import{A as E}from"./AreaChart-jihwPw5M.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DbZp0pXH.js";import{X as g}from"./XAxis-DzOTQwY3.js";import{Y as h}from"./YAxis-BcmUZyL1.js";import{A as a}from"./Area-DUFOPQCJ.js";import{T as u}from"./Tooltip-Df9xmlZA.js";import{R as k}from"./zIndexSlice-DE7GeAH-.js";import{L as v}from"./Legend-l_ee7Eod.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWGaw5tQ.js";import"./index-DbExzsUk.js";import"./index-C_8szxEx.js";import"./index-Bj9l6yop.js";import"./index-D_0E2Dfj.js";import"./throttle-Dubphbjd.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-CR8grWP_.js";import"./axisSelectors-C-S7b24Y.js";import"./resolveDefaultProps-BEtD5DPC.js";import"./isWellBehavedNumber-BKaWcWBZ.js";import"./d3-scale-Dfsy3Tmh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CP3XnrfD.js";import"./chartDataContext-rNOOEU-v.js";import"./CategoricalChart-DKj_eLFg.js";import"./CartesianAxis-DOE8j2mB.js";import"./Layer-C9Gg67SI.js";import"./Text-BkqgwmxZ.js";import"./DOMUtils-kgC6vmME.js";import"./Label-BR5BCwPX.js";import"./ZIndexLayer-DbGeHIXa.js";import"./types-BuPE8SUX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-MW3Vir6H.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DzsSkQFR.js";import"./useAnimationId-DDbhsfXp.js";import"./ActivePoints-OEb_V2h_.js";import"./Dot-BO-47chS.js";import"./RegisterGraphicalItemId-BNqd9LzC.js";import"./GraphicalItemClipPath-n0yD8gXz.js";import"./SetGraphicalItem-DKdZ-jRK.js";import"./graphicalItemIdentity-BD7rPDFr.js";import"./ActiveShapeUtils-w8zJ4JkR.js";import"./Curve-B398d6Gz.js";import"./step-1QEEOZnW.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-6pmbpWWP.js";import"./useElementOffset-P4rP0RLr.js";import"./uniqBy-D-I4fNAI.js";import"./iteratee-DsQTe1TT.js";import"./Cross-BSR1dAMZ.js";import"./Rectangle-BIKDq1_W.js";import"./util-Dxo8gN5i.js";import"./Sector-BM4nRum4.js";import"./Symbols-DdqJjdJl.js";import"./symbol-duGx-9jG.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
