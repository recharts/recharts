import{r as A,R as t}from"./iframe-DghEAMN6.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CHfOsQFV.js";import{A as E}from"./AreaChart-BFN1rdVQ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D5a1CLTf.js";import{X as g}from"./XAxis-BmVtlHU0.js";import{Y as h}from"./YAxis-S3ValhBK.js";import{A as a}from"./Area-B-nqXIJp.js";import{T as u}from"./Tooltip-tQ4ohRou.js";import{R as k}from"./zIndexSlice-DZVgvaAB.js";import{L as v}from"./Legend-CApeEcJt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--epX0hHz.js";import"./index-CHxwPLCw.js";import"./index-FvypkAhj.js";import"./index-DwTkm5Gc.js";import"./index-BNbzKJUN.js";import"./immer-Dzr4hzbh.js";import"./get-OeFwIBZb.js";import"./renderedTicksSlice-xCX0SP0o.js";import"./axisSelectors-Cx52Tyf1.js";import"./d3-scale-CUSv4nyH.js";import"./resolveDefaultProps-DtqwpnL6.js";import"./isWellBehavedNumber-2WeEbslz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B2gIIl6u.js";import"./chartDataContext-DmtHMzxl.js";import"./CategoricalChart-mficH34_.js";import"./CartesianAxis-BBXp2oHY.js";import"./Layer-4aUlzdTp.js";import"./Text-3TARh6pc.js";import"./DOMUtils-Qs3kgbuH.js";import"./Label-5l5u0djs.js";import"./ZIndexLayer-DDP5Eu2k.js";import"./types-Beb7Z0cf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-ChrydhAM.js";import"./useAnimationId-bXkDgMGB.js";import"./ActivePoints-bLjk4mq2.js";import"./Dot-CKGCQ671.js";import"./RegisterGraphicalItemId-BH9Fw2h1.js";import"./GraphicalItemClipPath-B_ue0lJA.js";import"./SetGraphicalItem-DyRJQvTd.js";import"./getRadiusAndStrokeWidthFromDot-7qCiPA0M.js";import"./ActiveShapeUtils-_OCeFGs0.js";import"./Curve-AO8nrk2K.js";import"./step-mxE-OcC-.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-r2j0e_dY.js";import"./useElementOffset-D7P9ru3F.js";import"./uniqBy-C8hQkly0.js";import"./iteratee-B9fRV5MV.js";import"./Cross-B2Awi3bU.js";import"./Rectangle-DBtpOBt5.js";import"./util-Dxo8gN5i.js";import"./Sector-BRXriwAi.js";import"./Symbols-DCW_1DOh.js";import"./symbol-kK5tHu0k.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
