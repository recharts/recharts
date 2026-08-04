import{r as A,R as t}from"./iframe-DwLZZwhK.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-p1KVu18j.js";import{A as E}from"./AreaChart-DcZ4xrfi.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DLG2PZDo.js";import{X as g}from"./XAxis-DBBjIwDo.js";import{Y as h}from"./YAxis-BRmSg-U1.js";import{A as a}from"./Area-BjWRH8_3.js";import{T as u}from"./Tooltip-bD6JfZFE.js";import{R as k}from"./zIndexSlice-lVUWNgM0.js";import{L as v}from"./Legend-DKdaWvlb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6xOBDhR.js";import"./index-BRPN53-o.js";import"./index-VnXRJ0a1.js";import"./index-CyNYrL4w.js";import"./index-D2i4UmdT.js";import"./throttle-m49sR4Np.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BnOQ8D5D.js";import"./axisSelectors-Deou-VxK.js";import"./resolveDefaultProps-D_yJAfqa.js";import"./isWellBehavedNumber-DdXnDQ5z.js";import"./d3-scale-CjSqz0E9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart--QBa1qTn.js";import"./chartDataContext-BGrP4bw5.js";import"./CategoricalChart-Bx727tBC.js";import"./CartesianAxis-ByQIstMG.js";import"./Layer-BVmot7FB.js";import"./Text-Bh0YxhQF.js";import"./DOMUtils-BGpns11t.js";import"./Label-tECJL-37.js";import"./ZIndexLayer-BAEsl3nH.js";import"./types-B7g8Th-s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-pLBMwypQ.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DKnm6tp0.js";import"./useAnimationId-C3Y_zOxU.js";import"./ActivePoints-CdWhr2jU.js";import"./Dot-CGLhLTV3.js";import"./RegisterGraphicalItemId-CzEEk6Dd.js";import"./GraphicalItemClipPath-C29F_2hP.js";import"./SetGraphicalItem-DX7YElzO.js";import"./graphicalItemIdentity-CtF6lVXQ.js";import"./ActiveShapeUtils-BFi0EA_4.js";import"./Curve-Cv92tytC.js";import"./step-DqN0Bx6a.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CsGPPAWZ.js";import"./useElementOffset-Df4AHCQV.js";import"./uniqBy-BbT4zose.js";import"./iteratee-DaU-OdzY.js";import"./Cross-CLLkCYoT.js";import"./Rectangle-DhnvvCg-.js";import"./util-Dxo8gN5i.js";import"./Sector-DHs-qAjC.js";import"./Symbols-DVjBjeOn.js";import"./symbol-CjHagoG3.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
