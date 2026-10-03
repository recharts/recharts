import{r as A,R as t}from"./iframe-C2y7-rH2.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CwCxFjZe.js";import{A as E}from"./AreaChart-Dc4lsbE9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CoBayb9K.js";import{X as g}from"./XAxis-BRv-fAhZ.js";import{Y as h}from"./YAxis-B28w59_W.js";import{A as a}from"./Area-DTDjC4ht.js";import{T as u}from"./Tooltip-DjLxwRTA.js";import{R as k}from"./zIndexSlice-BQPOy7As.js";import{L as v}from"./Legend-Bz20O50v.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BcfYPaoe.js";import"./resolveDefaultProps-vPK17mKC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bw0Qwigf.js";import"./throttle-BDe4zlG9.js";import"./index-Bz54eCtj.js";import"./index-ChrJmNNe.js";import"./isWellBehavedNumber-6_l4g7Xi.js";import"./d3-scale-D07iQYqn.js";import"./index-DyeRA5Td.js";import"./index-OvZqyYfZ.js";import"./renderedTicksSlice-DVIPHfrA.js";import"./index-DN97KnNV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B1na8-qP.js";import"./chartDataContext-ClTM7zwW.js";import"./CategoricalChart-BgXqKpLI.js";import"./CartesianAxis-DwUPIt0X.js";import"./Layer-Y5hBKOyR.js";import"./Text-Dg2YZl1D.js";import"./DOMUtils-CYVmP7ld.js";import"./useId-rIBzQY0F.js";import"./useBackwardsCompatibleTheme-xd8BeFgY.js";import"./Label-CSUQJf-z.js";import"./ZIndexLayer-Cqkx5XlC.js";import"./types-DDulV5vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CrKX7S12.js";import"./useAnimationId-BlRPNYZD.js";import"./ActivePoints-DOuEp3Ot.js";import"./Dot-Di-XdVIz.js";import"./RegisterGraphicalItemId-CD4HP7HF.js";import"./GraphicalItemClipPath-SSZXiCnp.js";import"./SetGraphicalItem-B36qE1ly.js";import"./getRadiusAndStrokeWidthFromDot-AXkwLV7A.js";import"./ActiveShapeUtils-CXM-saMn.js";import"./Curve-Bc1dsSwG.js";import"./step-CDQ_m3Wy.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B5eIfUAt.js";import"./useElementOffset-kO2xZAmN.js";import"./uniqBy-Cquckdt6.js";import"./iteratee-CbQmO-Fp.js";import"./Cross-Bw1RGGbC.js";import"./Rectangle-X3oIIIHx.js";import"./util-Dxo8gN5i.js";import"./Sector-BnOOyIft.js";import"./Symbols-D5N7fhe9.js";import"./symbol-BfZZVleY.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
