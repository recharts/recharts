import{r as A,R as t}from"./iframe-DEalUshl.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CdALL1sF.js";import{A as E}from"./AreaChart-DG4pgwrR.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CkISHoQE.js";import{X as g}from"./XAxis-BITqqVCe.js";import{Y as h}from"./YAxis-DlX9l8Ve.js";import{A as a}from"./Area-CDtV9PJE.js";import{T as u}from"./Tooltip-BCvfBg18.js";import{R as k}from"./zIndexSlice-CAksOI_1.js";import{L as v}from"./Legend-DiL1Iu_V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BK5G7zbx.js";import"./resolveDefaultProps-BRTQsXjp.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DjgJ2Mrx.js";import"./throttle-DufRm-wd.js";import"./index-Bi7Cs1mM.js";import"./index-DdKBddy3.js";import"./polarAxisSelectors-BYiBdmVV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-R09LkYsV.js";import"./index-XZ5w84xu.js";import"./index-C7wIczSG.js";import"./renderedTicksSlice-f1LuiShq.js";import"./index-DCjef1wh.js";import"./CartesianChart-BhhkInk7.js";import"./ZIndexPortal-CZV1ifs7.js";import"./CategoricalChart-pEhIoip4.js";import"./CartesianAxis-kcZBykzp.js";import"./Layer-Bw1dSYwu.js";import"./Text-DnHyAqDr.js";import"./pageBackground-CVwWBmc5.js";import"./ZIndexLayer-BXnvY1k7.js";import"./Label-CBgDJ6T5.js";import"./types-CObAiW_q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-hToPfPST.js";import"./ActivePoints-CRXr9H7D.js";import"./Dot-DCVDv1q-.js";import"./activeStyles-DOcC-AXu.js";import"./useAnimationId-_MrDTWeG.js";import"./dataEntryStyles-D4Y7WVvW.js";import"./Symbols-BT8pREls.js";import"./symbol-DXqIeeEX.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-QRv9uJVL.js";import"./getRadiusAndStrokeWidthFromDot-DBGr2m_l.js";import"./ActiveShapeUtils-C0qxzm6E.js";import"./Curve-BXiJvEeV.js";import"./step-BwbLlF7G.js";import"./useEffectiveDataKey-Bk8kAFIQ.js";import"./useElementOffset-DRy_rfXg.js";import"./uniqBy-D0fLoUi4.js";import"./iteratee-aVpqpOpW.js";import"./isArguments-yB-y1yaH.js";import"./Cross-zedPutIO.js";import"./Rectangle-CnZc9_Rc.js";import"./util-Dxo8gN5i.js";import"./Sector-Ou1iFUt1.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
