import{r as A,R as t}from"./iframe-B_nNZpI2.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-IJuZ_x55.js";import{A as E}from"./AreaChart-C4ZXMZkA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Coq5qgFM.js";import{X as g}from"./XAxis-BnGisaM6.js";import{Y as h}from"./YAxis-2XrZ_LwE.js";import{A as a}from"./Area-B4LWQU_O.js";import{T as u}from"./Tooltip-D8OOgtrt.js";import{R as k}from"./zIndexSlice-FViTDxbD.js";import{L as v}from"./Legend-ZqNJUdO7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-v3LlOW.js";import"./resolveDefaultProps-BCFRFaLp.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BlrbKtsJ.js";import"./throttle-CfowHFSP.js";import"./index-CvC1anYi.js";import"./index-CLDy2H7V.js";import"./polarAxisSelectors-c40A3UY1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BP2r_61E.js";import"./index-D3rZTjme.js";import"./index-CMcdxE-j.js";import"./renderedTicksSlice-BZkCDNTa.js";import"./index-CkI1O38Z.js";import"./fillDefinitions-BvN15Ps2.js";import"./CartesianChart-Ct6HzlQ7.js";import"./ZIndexPortal-fcfY6DBt.js";import"./CategoricalChart-CN7dS280.js";import"./CartesianAxis-CmpohTUe.js";import"./Layer-BI_5R4V_.js";import"./Text-D-JNnNjs.js";import"./DOMUtils-adSDEv62.js";import"./ZIndexLayer-DP7ICro2.js";import"./Label-CETIJz5j.js";import"./types-CwUR8ti8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DxewBo1N.js";import"./ActivePoints-2YuDFMtV.js";import"./Dot-DlBvAs_S.js";import"./activeStyles-BsBbQeVt.js";import"./useAnimationId-DARA-gCu.js";import"./dataEntryStyles-RBGB6YIO.js";import"./Symbols-zxsCudAN.js";import"./symbol-CQ43VyHp.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BWi71ya4.js";import"./getRadiusAndStrokeWidthFromDot-C7tNLDQS.js";import"./ActiveShapeUtils-B2gG84cu.js";import"./Curve-CDY88Bak.js";import"./step-Bq7ByKAT.js";import"./useEffectiveDataKey-BKhq6vYl.js";import"./useElementOffset-Q6NphwPQ.js";import"./uniqBy-B6gg-PM7.js";import"./iteratee-pGgkjcUZ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-_mk-19-J.js";import"./Rectangle-C8RP3-tc.js";import"./util-Dxo8gN5i.js";import"./Sector-PJXI1L2R.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
