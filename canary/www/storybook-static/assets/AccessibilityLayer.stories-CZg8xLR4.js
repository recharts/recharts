import{r as A,R as t}from"./iframe-Cimk_otj.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Dtd08tsU.js";import{A as E}from"./AreaChart-B3eVwduE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BuEh-2En.js";import{X as g}from"./XAxis-ByDDt0Jf.js";import{Y as h}from"./YAxis-Bv-UC-Jk.js";import{A as a}from"./Area-CqknKiZ2.js";import{T as u}from"./Tooltip-iHYM4Kfb.js";import{R as k}from"./zIndexSlice-CzTLX9Ul.js";import{L as v}from"./Legend-mJb9ktQo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-qjuL0Rr3.js";import"./index-C-Q8rOGq.js";import"./index-DpbiwnIc.js";import"./index-ByALFeZD.js";import"./index-2URJhorS.js";import"./throttle-QmRScbE8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BjpwO9gg.js";import"./resolveDefaultProps-D_EjTjeu.js";import"./isWellBehavedNumber-CkDKja6q.js";import"./d3-scale-BqwCILGz.js";import"./renderedTicksSlice-CI4nPvu-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dDfHuBVf.js";import"./chartDataContext-BpdsFuQG.js";import"./CategoricalChart-B7puZOGH.js";import"./CartesianAxis-GRhBxYn8.js";import"./Layer-CCEBq6CR.js";import"./Text-qgns90rX.js";import"./DOMUtils-702B5NVq.js";import"./Label-DQCQB4o-.js";import"./ZIndexLayer-DKEQN7E1.js";import"./types-BP4gFlyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BOkXgDyG.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-tyjZKRCa.js";import"./useAnimationId-CWH9KLrM.js";import"./ActivePoints-DtOrXveG.js";import"./Dot-DcWN47E-.js";import"./RegisterGraphicalItemId-Cwz21l7x.js";import"./GraphicalItemClipPath-C4jOZ0zB.js";import"./SetGraphicalItem-BARCofhG.js";import"./graphicalItemIdentity-dpRLTV2V.js";import"./ActiveShapeUtils-BOZkqM_j.js";import"./Curve-VqOwF4YW.js";import"./step-CBLStXIf.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Y0I5Brjj.js";import"./useElementOffset-CjumVQtv.js";import"./uniqBy-CdIGlW57.js";import"./iteratee-F9gv8B-y.js";import"./Cross-DMlRKkj6.js";import"./Rectangle-CgoJ-bg6.js";import"./util-Dxo8gN5i.js";import"./Sector-BivCzjVW.js";import"./Symbols-BWwzL4bj.js";import"./symbol-D3PRm8fB.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
