import{r as A,R as t}from"./iframe-DsTklGd_.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CSeGHIwL.js";import{A as E}from"./AreaChart-BJxyiMIY.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dey6FAmb.js";import{X as g}from"./XAxis-CCdXtDxp.js";import{Y as h}from"./YAxis-BOZCya1S.js";import{A as a}from"./Area-DyBdlvpf.js";import{T as u}from"./Tooltip-CpWUFYTg.js";import{R as k}from"./zIndexSlice-BtbFiuZY.js";import{L as v}from"./Legend-DM9P43pw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DgwcOqsJ.js";import"./resolveDefaultProps-Bms6p2jX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DYheqAyK.js";import"./throttle-DdQ2CShf.js";import"./index-BXaEWxS9.js";import"./index-CDyKR3cz.js";import"./isWellBehavedNumber-CnKVaaX2.js";import"./d3-scale-m8FOg4h4.js";import"./index-DPiom88R.js";import"./index-DwiZHk90.js";import"./renderedTicksSlice-BKqQhYx3.js";import"./index-blk6unfu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPHbQoR9.js";import"./chartDataContext-PmdzKedQ.js";import"./CategoricalChart-DoFDJCgx.js";import"./CartesianAxis-CPZLjXk4.js";import"./Layer-CZKgQj5k.js";import"./Text-BbSBkVqk.js";import"./pageBackground-BHVKZknb.js";import"./useId-Dh4XaEh2.js";import"./useBackwardsCompatibleTheme-DVVyS6sc.js";import"./Label-D9BiQh3x.js";import"./ZIndexLayer-DFFwnPWa.js";import"./types-CPppnSS0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CRt5O3EE.js";import"./useAnimationId-DDiQkgxw.js";import"./dataEntryStyles-Cfp8oK59.js";import"./ActivePoints-B7jiKkUq.js";import"./Dot-DzYpmtjj.js";import"./GraphicalItemClipPath-K8g7er1I.js";import"./SetGraphicalItem-Bi7lJTO4.js";import"./getRadiusAndStrokeWidthFromDot-D7P1mq2m.js";import"./ActiveShapeUtils-Cg3stx7N.js";import"./Curve-BNsFHGFj.js";import"./step-DT1sNEdD.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-yxNF_elp.js";import"./useElementOffset-uGLvwzdi.js";import"./uniqBy-Mv52plNv.js";import"./iteratee-Dj6SgMgn.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B_kNLhXT.js";import"./Rectangle-VOQBKS27.js";import"./util-Dxo8gN5i.js";import"./Sector-CgGX8g4n.js";import"./Symbols-C05NrL44.js";import"./symbol-BCG62I2C.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
