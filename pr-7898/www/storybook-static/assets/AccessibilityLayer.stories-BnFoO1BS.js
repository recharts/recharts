import{r as A,R as t}from"./iframe-Ek26OKJE.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Bemin9MV.js";import{A as E}from"./AreaChart-CM1CksGA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BHY1kSwY.js";import{X as g}from"./XAxis-BnPYeIW7.js";import{Y as h}from"./YAxis-DEoqYThk.js";import{A as a}from"./Area-CJNKvKIo.js";import{T as u}from"./Tooltip-F2mg1-7E.js";import{R as k}from"./zIndexSlice-Cb7AOhUN.js";import{L as v}from"./Legend-Cz3kEQrZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_5MzBNC.js";import"./resolveDefaultProps-DikHbtvd.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BZyUnxor.js";import"./throttle-nAaWLAvW.js";import"./index-Bhq43Y8T.js";import"./index-CH5hGN9X.js";import"./isWellBehavedNumber-C3YqTazs.js";import"./d3-scale-Di7qtVT_.js";import"./index-CVfvjw4V.js";import"./index-CddS4NP_.js";import"./renderedTicksSlice-Bw9pF84S.js";import"./index-tmDn5Ue5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BUYt3N23.js";import"./chartDataContext-q8RiqEic.js";import"./CategoricalChart-Co9RgHLu.js";import"./CartesianAxis-D3cjFJua.js";import"./Layer-DRl71Sg_.js";import"./Text-DbwWqm58.js";import"./DOMUtils-BY_uPlRS.js";import"./useId-rsWHAn-D.js";import"./useBackwardsCompatibleTheme-Drt73puE.js";import"./Label-Bl-xJBza.js";import"./ZIndexLayer-CR_MqsJe.js";import"./types-USIGaiIt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B7V8aYKV.js";import"./useAnimationId-CwN306xk.js";import"./ActivePoints-CnBuc0OH.js";import"./Dot-CSgA8HWq.js";import"./RegisterGraphicalItemId-DmFzdfAb.js";import"./GraphicalItemClipPath-BeXUWsOJ.js";import"./SetGraphicalItem-OIwhrDsV.js";import"./getRadiusAndStrokeWidthFromDot-Dg98J8GV.js";import"./ActiveShapeUtils-AftK0wfE.js";import"./Curve-8tFNvOBV.js";import"./step-DzHhz21P.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CLabRpL-.js";import"./useElementOffset-C5V_fM0x.js";import"./uniqBy-Cj7_lSTC.js";import"./iteratee-DmOgoTF5.js";import"./Cross-DN6pFmsJ.js";import"./Rectangle-9wtqsi7b.js";import"./util-Dxo8gN5i.js";import"./Sector-DSsbKQvu.js";import"./Symbols-B5r7o9db.js";import"./symbol-CFHkB0SW.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
