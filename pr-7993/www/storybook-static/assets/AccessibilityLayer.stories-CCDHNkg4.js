import{r as A,R as t}from"./iframe-ChR0bWJE.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-ClNwId6E.js";import{A as E}from"./AreaChart-BynNRJnu.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CJXtM4Q6.js";import{X as g}from"./XAxis-DMWQS67d.js";import{Y as h}from"./YAxis-CGpwp8Ub.js";import{A as a}from"./Area-BLadnGeK.js";import{T as u}from"./Tooltip-Bkfw7jzk.js";import{R as k}from"./zIndexSlice-BhLIr8Wn.js";import{L as v}from"./Legend-VTdcvbZi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcESOjG2.js";import"./resolveDefaultProps-DDJR-IFM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D10lFE-B.js";import"./throttle-DlIXztO0.js";import"./index-DG8BxRhE.js";import"./index-B9kAIK4B.js";import"./isWellBehavedNumber-v660MqsB.js";import"./d3-scale-Be-Yls2-.js";import"./index-C2XNNLS0.js";import"./index-CIRFvFA-.js";import"./renderedTicksSlice-DGFTmoGv.js";import"./index-4WBQ6tEH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Csbt_4F2.js";import"./chartDataContext-B7Ty1jH-.js";import"./CategoricalChart-e5ydFkpC.js";import"./CartesianAxis-ColQ2GQs.js";import"./Layer-sRcONOkX.js";import"./Text-C-MZlV37.js";import"./pageBackground-Ck_Bl7JJ.js";import"./useId-Boe0dqcZ.js";import"./useBackwardsCompatibleTheme-vM76QVPo.js";import"./Label-6wqjlAjr.js";import"./ZIndexLayer-WvB5637-.js";import"./types-Db9gT7h1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Dl6zrhPi.js";import"./useAnimationId-rUKK14dF.js";import"./dataEntryStyles-dyS1ZoD1.js";import"./ActivePoints-DAC5J4Og.js";import"./Dot-DFd9j2yF.js";import"./GraphicalItemClipPath-C95rKyMf.js";import"./SetGraphicalItem-AEMUK-yG.js";import"./getRadiusAndStrokeWidthFromDot-D411Veho.js";import"./ActiveShapeUtils-DUs_pJxd.js";import"./Curve-CCeOu5Un.js";import"./step-BH3hwvXb.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DlXPwpKd.js";import"./useElementOffset-DJkk5NRy.js";import"./uniqBy-D8tZ5Ja2.js";import"./iteratee-BlHCl97E.js";import"./Cross-BhKpEJ2j.js";import"./Rectangle-DhVq85Wn.js";import"./util-Dxo8gN5i.js";import"./Sector-D0eICGeV.js";import"./Symbols-crxZ1UiM.js";import"./symbol-kvahnOWs.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
