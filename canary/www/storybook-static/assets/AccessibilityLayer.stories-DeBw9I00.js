import{r as A,R as t}from"./iframe-CgifVdGo.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CGqH3jPg.js";import{A as E}from"./AreaChart-C0-qu04J.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Chud-6bi.js";import{X as g}from"./XAxis-CZyFu1IP.js";import{Y as h}from"./YAxis-CdCViLx5.js";import{A as a}from"./Area-CksipODj.js";import{T as u}from"./Tooltip-CqjX73dw.js";import{R as k}from"./zIndexSlice-cYNAtEFZ.js";import{L as v}from"./Legend-7_W2X7gA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bdtf4nFv.js";import"./index-B-WSnDkr.js";import"./index-BIPnoVIq.js";import"./index-CE-jOOb9.js";import"./index-2TSMvrpE.js";import"./throttle-RNDoIp5v.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CdxlE0u2.js";import"./axisSelectors-BoKC2N9p.js";import"./resolveDefaultProps-BWqJsMaX.js";import"./isWellBehavedNumber-B5I1Y8ko.js";import"./d3-scale-B4rm30Tj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-5X0OU6Ae.js";import"./chartDataContext-Cgkpv-Wp.js";import"./CategoricalChart-gWPq6G-r.js";import"./CartesianAxis-5D6mywdN.js";import"./Layer-CeyNxq54.js";import"./Text-CP2PjM28.js";import"./DOMUtils-D8x8v_7W.js";import"./Label-TzQ7qbgp.js";import"./ZIndexLayer-D9Ef8fDH.js";import"./types-IwSvkxMz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-wyY7R1ar.js";import"./useAnimationId-B2JL6a3u.js";import"./ActivePoints-CRIrUZTw.js";import"./Dot-ki06ENMH.js";import"./RegisterGraphicalItemId-DWqGyRZG.js";import"./GraphicalItemClipPath-ChEyBJAa.js";import"./SetGraphicalItem-DiTEFY4D.js";import"./getRadiusAndStrokeWidthFromDot-CVuDAoNN.js";import"./ActiveShapeUtils-PZHl54QD.js";import"./Curve-kzqc65C_.js";import"./step-BTn_xVWj.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BbHJl_IG.js";import"./useElementOffset-Ddd5eBYU.js";import"./uniqBy-B-PlV6wf.js";import"./iteratee-Cmxxp19p.js";import"./Cross--7zgNnvK.js";import"./Rectangle-0uJ_DBQ4.js";import"./util-Dxo8gN5i.js";import"./Sector-DZQjM1rK.js";import"./Symbols-Cv5yDpJ-.js";import"./symbol-DQfiD1hp.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
