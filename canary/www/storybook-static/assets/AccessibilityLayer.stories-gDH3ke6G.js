import{r as A,R as t}from"./iframe-WNWxHA5w.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DpKMEvwE.js";import{A as E}from"./AreaChart-CGk8gXAW.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DHdAq2Ns.js";import{X as g}from"./XAxis-DfMY5qBP.js";import{Y as h}from"./YAxis-C2XMsDVi.js";import{A as a}from"./Area-DrJcAxtg.js";import{T as u}from"./Tooltip-Bx7RtV8V.js";import{R as k}from"./zIndexSlice-BVgHV45y.js";import{L as v}from"./Legend-Dh7TdA43.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-MLPBuzwi.js";import"./resolveDefaultProps-B2gYQvk0.js";import"./get-CjriyByo.js";import"./axisSelectors-DqPRQxzX.js";import"./throttle-DWlA00LM.js";import"./index-C5BrRLOu.js";import"./index-B_zAmF-o.js";import"./polarAxisSelectors-CgU14Zha.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-zFOgTZT_.js";import"./index-CWM66Coj.js";import"./index-CN82-OMW.js";import"./renderedTicksSlice-DXbq9Sus.js";import"./index-Ihw2JtUd.js";import"./fillDefinitions-Byjs2RvA.js";import"./CartesianChart-CStGKL8K.js";import"./chartDataContext-CQ2a4iuz.js";import"./CategoricalChart-DxS1nkjF.js";import"./CartesianAxis-BHmhgeQf.js";import"./Layer-DaOdaJ8o.js";import"./Text-Cw_EXTQi.js";import"./ZIndexLayer-yj-imWcv.js";import"./Label-CezBD4yi.js";import"./types-jc9vmIop.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-7Ou40HZN.js";import"./dataEntryStyles-Dk4XNyaK.js";import"./ActivePoints-Dr8JqR2c.js";import"./Dot-DNElWDLL.js";import"./activeStyles-CeKhNTWp.js";import"./useAnimationId-PYVmWLIg.js";import"./Symbols-DIUF60nI.js";import"./symbol-Cx8bofxp.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-Cb_G_uW5.js";import"./ActiveShapeUtils-MT88_CXC.js";import"./Curve-aBjBuLLa.js";import"./step-QSf3RYd6.js";import"./useEffectiveDataKey-Dv_aTiOG.js";import"./useElementOffset-Ds0hVeZw.js";import"./uniqBy-BzMIYtmN.js";import"./iteratee-Dl7MZIU4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BVtygh5W.js";import"./Rectangle-bHpKFJEG.js";import"./util-Dxo8gN5i.js";import"./Sector-CTWU1_bF.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
