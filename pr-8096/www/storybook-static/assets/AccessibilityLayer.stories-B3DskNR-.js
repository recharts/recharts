import{r as A,R as t}from"./iframe-u5XvksY5.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-bB_CptVE.js";import{A as E}from"./AreaChart-BNExUZjw.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D9vtnhpP.js";import{X as g}from"./XAxis-FOCUFVAl.js";import{Y as h}from"./YAxis-D_j8mX6u.js";import{A as a}from"./Area-Bi1cY9Lq.js";import{T as u}from"./Tooltip-CZaSC32l.js";import{R as k}from"./zIndexSlice-qPjBbXUc.js";import{L as v}from"./Legend-CF6hqVxX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-By94_cXW.js";import"./resolveDefaultProps-BLkmbHVR.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Bi0OjrmZ.js";import"./throttle-B8qtKcg2.js";import"./index-vwmUrPFZ.js";import"./index-CtoGLGiN.js";import"./polarAxisSelectors-D58IkYNc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C5Gzvvl7.js";import"./index-BpuM8AnC.js";import"./index-HZYgYW5E.js";import"./renderedTicksSlice-CduAdCWE.js";import"./index-DkZbI5V5.js";import"./CartesianChart-9oGErKhp.js";import"./ZIndexPortal-B1bAvAqr.js";import"./CategoricalChart-BBgGbCCg.js";import"./CartesianAxis-C9X2Uzsi.js";import"./Layer-DZaDPYK5.js";import"./Text-DCsWNeTw.js";import"./pageBackground-XEfDP_WE.js";import"./ZIndexLayer-Y9UkGb_Q.js";import"./Label-VbOnr0hr.js";import"./types-B_Vy1dAM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BkhbrOAx.js";import"./ActivePoints-BV0ddqGy.js";import"./Dot-Wys9DpOC.js";import"./activeStyles-CGX86F5-.js";import"./useAnimationId-BOOGmCHa.js";import"./dataEntryStyles-RGg8_IXa.js";import"./Symbols-dBRKeymS.js";import"./symbol-CdXzcvWo.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-kkTP1No9.js";import"./getRadiusAndStrokeWidthFromDot-bEnvbNkp.js";import"./ActiveShapeUtils-I4oRUBzq.js";import"./Curve-DQLFDL8K.js";import"./step-Bpvz6PO-.js";import"./useEffectiveDataKey-CHJtUCr7.js";import"./useElementOffset-BLaMOS3s.js";import"./uniqBy-BCkqKtFw.js";import"./iteratee-CAJfiHj4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cd30wCuH.js";import"./Rectangle-Bs9jcdbm.js";import"./util-Dxo8gN5i.js";import"./Sector-Dx_HQUzt.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
