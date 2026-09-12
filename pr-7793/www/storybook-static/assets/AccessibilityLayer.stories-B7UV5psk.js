import{r as A,R as t}from"./iframe-DqI8fZWc.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C5b2LV09.js";import{A as E}from"./AreaChart-CGBcEGCh.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CnIMtQFj.js";import{X as g}from"./XAxis-DN7qZjW9.js";import{Y as h}from"./YAxis-BOv489WA.js";import{A as a}from"./Area-ClTsFjsK.js";import{T as u}from"./Tooltip-DIfzN9Q7.js";import{R as k}from"./zIndexSlice-9oYbhSdQ.js";import{L as v}from"./Legend-Dy0tOTjK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQO3SMEw.js";import"./resolveDefaultProps-DCvOVDv2.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Degnf0cl.js";import"./throttle-BTCEGSKU.js";import"./index-MGrO6GOL.js";import"./index-CocOIjDa.js";import"./isWellBehavedNumber-nhVdkpqH.js";import"./d3-scale-dm0sSvQ9.js";import"./index-DPzk3hMl.js";import"./index-iQ4O5AGP.js";import"./renderedTicksSlice-DO7ESVP5.js";import"./index-DPm6oXEP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVIppYKX.js";import"./chartDataContext-bZQzIS86.js";import"./CategoricalChart-Dc9zhX9p.js";import"./CartesianAxis-BLk0unaa.js";import"./Layer-Ckim_S0G.js";import"./Text-9XM6GnGO.js";import"./DOMUtils-C2uAcB2d.js";import"./useId-BEya5Sow.js";import"./useBackwardsCompatibleTheme-Cdm9q7mi.js";import"./Label-B6t_CsQ4.js";import"./ZIndexLayer-CmCgphBH.js";import"./types-D6uFqDQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-rYif9Enh.js";import"./useAnimationId-sXalVax-.js";import"./ActivePoints-BpZWKXXH.js";import"./Dot-D3i3k8Cq.js";import"./RegisterGraphicalItemId-BfKE_Ywq.js";import"./GraphicalItemClipPath-BYdmvJgQ.js";import"./SetGraphicalItem-BIIukDTU.js";import"./getRadiusAndStrokeWidthFromDot-Bz_0HqQj.js";import"./ActiveShapeUtils-Ba4zh4k1.js";import"./Curve-BfuijxKL.js";import"./step-CpsUov4P.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-iLjVYJ7t.js";import"./useElementOffset-BmnmgRHV.js";import"./uniqBy-D9j1xmZr.js";import"./iteratee-Dfs9TkuY.js";import"./Cross-D9YNJK_K.js";import"./Rectangle-scNawCgP.js";import"./util-Dxo8gN5i.js";import"./Sector-CYr5d1sJ.js";import"./Symbols-CEX8TaeC.js";import"./symbol-CjwAsj25.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
