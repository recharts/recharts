import{r as A,R as t}from"./iframe-Czgh02fE.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B0gx7MIp.js";import{A as E}from"./AreaChart-D5AztmJT.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-8J7rlyPn.js";import{X as g}from"./XAxis-C2Mn3Na8.js";import{Y as h}from"./YAxis-B9WbRmEP.js";import{A as a}from"./Area-jO6wXOW9.js";import{T as u}from"./Tooltip-Cd1ARCyE.js";import{R as k}from"./zIndexSlice-Do8f9YWK.js";import{L as v}from"./Legend-C3UeOl1B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIxKKW90.js";import"./index-BjeOf0Dt.js";import"./index-B1amEOit.js";import"./index-BzAJTpLC.js";import"./index-BnAmj1WN.js";import"./throttle-D1C4cigO.js";import"./get-C2VjdU0L.js";import"./axisSelectors-H5jwzs9R.js";import"./resolveDefaultProps-D61FhKsp.js";import"./isWellBehavedNumber-BenVrlkW.js";import"./d3-scale-DjzQ61DY.js";import"./renderedTicksSlice-DljNETqX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BAydra3V.js";import"./chartDataContext-9fwvPw2D.js";import"./CategoricalChart-BgAf9cWH.js";import"./CartesianAxis-B4k6OJQ9.js";import"./Layer-zCmZcP2I.js";import"./Text-CR_8UZPv.js";import"./DOMUtils-CFgNHwO1.js";import"./useBackwardsCompatibleTheme-CqikxVTG.js";import"./Label-4BEQg_vH.js";import"./ZIndexLayer-s-28Q74q.js";import"./types-BOqsceM0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DQ5WKLo7.js";import"./useAnimationId-CBLxCaT-.js";import"./ActivePoints-D5lyHxm4.js";import"./Dot-BPNUB50S.js";import"./RegisterGraphicalItemId-_1lxrS6Z.js";import"./GraphicalItemClipPath-BFEL_l8x.js";import"./SetGraphicalItem-BSCJBMvO.js";import"./getRadiusAndStrokeWidthFromDot-DSA1Map0.js";import"./ActiveShapeUtils-DxWOnmm2.js";import"./Curve--OBRtabt.js";import"./step-BjIepLza.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-v_kQR1u7.js";import"./useElementOffset-cCtdJ_2d.js";import"./uniqBy-DH6vkAOH.js";import"./iteratee-dtD612zi.js";import"./Cross-bL23mcd1.js";import"./Rectangle-BuJcrudB.js";import"./util-Dxo8gN5i.js";import"./Sector-Dbvha4hq.js";import"./Symbols-3zu5f5DX.js";import"./symbol-BkB6eAni.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
