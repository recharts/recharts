import{e as t,r as A}from"./iframe-_im4GKTL.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-BY8obHgx.js";import{R as E}from"./arrayEqualityCheck-DQWePApg.js";import{A as a}from"./Area-CNdipZtO.js";import{L as b}from"./Legend-CHw6DFha.js";import{X as d}from"./XAxis-BtqRyYI3.js";import{Y as g}from"./YAxis-D-u8YWMK.js";import{T as h}from"./Tooltip-B8xCykt7.js";import{R as u}from"./RechartsHookInspector-2hFEojhh.js";import{A as v}from"./AreaChart-BovpTAxV.js";import{C as T}from"./CartesianGrid-DiDHt8mA.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DKFQy6Ae.js";import"./hooks-DKOVFqS5.js";import"./axisSelectors-DpIDWeTq.js";import"./zIndexSlice-CPIWfeLh.js";import"./resolveDefaultProps-CaxhqgES.js";import"./PolarUtils-DcWiW1XO.js";import"./CartesianChart-DG1wjONq.js";import"./chartDataContext-DX2vSSsK.js";import"./CategoricalChart-CQUZMGEq.js";import"./Curve-CjWJcBC1.js";import"./types-CFuB44L5.js";import"./Layer-ojK6bjXb.js";import"./ReactUtils-CAkOWUwD.js";import"./Label-CTy8eywr.js";import"./Text-DEtZyA_I.js";import"./DOMUtils-BcupyZUP.js";import"./ZIndexLayer-DmWCVoEY.js";import"./ActivePoints-DX8NdDb8.js";import"./Dot-D7h6v8mz.js";import"./RegisterGraphicalItemId-B4K3Ftz3.js";import"./GraphicalItemClipPath-BfdvnoI7.js";import"./SetGraphicalItem-fuqPKC-n.js";import"./useAnimationId-iCdU_Q_k.js";import"./getRadiusAndStrokeWidthFromDot-ClQkEbgX.js";import"./graphicalItemSelectors-BsyuKHhZ.js";import"./Symbols-aMSa3fiu.js";import"./useElementOffset-C2SIKvmg.js";import"./iteratee-CjrhkTpo.js";import"./CartesianAxis-BZEJptN1.js";import"./Cross-D1pWve48.js";import"./Rectangle-ejGTCKcw.js";import"./Sector-BGg8SpOK.js";import"./index-B3zuwbjl.js";import"./ChartSizeDimensions-Db8YW_qh.js";import"./OffsetShower-C0adziBs.js";import"./PlotAreaShower-BEBglPgm.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
