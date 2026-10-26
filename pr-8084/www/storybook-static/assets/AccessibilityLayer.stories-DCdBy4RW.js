import{r as A,R as t}from"./iframe-sVYf0T4K.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-79IdZ4r_.js";import{A as E}from"./AreaChart-CwNVrkrx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dc3gAsdP.js";import{X as g}from"./XAxis-DBp8xvXF.js";import{Y as h}from"./YAxis-CNIo2SjU.js";import{A as a}from"./Area-BhsiFVc5.js";import{T as u}from"./Tooltip-lnOD4kE7.js";import{R as k}from"./zIndexSlice-DCYn61_Z.js";import{L as v}from"./Legend-C9mntufH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-cX9KnfoQ.js";import"./resolveDefaultProps-BNjxkguA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DeiSy_-h.js";import"./throttle-B5u3GWWh.js";import"./index-DiC6i9Zs.js";import"./index--6n540TN.js";import"./polarAxisSelectors-BsaBqdPx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaVFs3zj.js";import"./index-hsh9HVaA.js";import"./index-ByFnZ7XW.js";import"./renderedTicksSlice-BPEsWmdR.js";import"./index-BXr1355W.js";import"./CartesianChart-DjuWDgK1.js";import"./chartDataContext-Dkn-AagS.js";import"./CategoricalChart-BAqEzU7h.js";import"./CartesianAxis-BI1VsAr7.js";import"./Layer-BIjeoEg2.js";import"./Text-BWcB5EFj.js";import"./pageBackground-DIQ0WB3A.js";import"./useId-V8WWGbBi.js";import"./ZIndexLayer-BVANdKv1.js";import"./Label-DWNcL86V.js";import"./dataEntryStyles-4CyLqaB1.js";import"./types-ZHVwXJa3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BGq7qwld.js";import"./useAnimationId-D71D5MAL.js";import"./ActivePoints-qLv8n1bM.js";import"./Dot-CyGoxzEw.js";import"./Symbols-B9IhfDAO.js";import"./symbol-BnKq_a6Q.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-CPgTzLUz.js";import"./SetGraphicalItem-BDTNcAra.js";import"./getRadiusAndStrokeWidthFromDot-C9_Ol6X7.js";import"./ActiveShapeUtils-CcGGZZs1.js";import"./Curve-DRJ9KjAo.js";import"./step-DuwXt4tv.js";import"./useEffectiveDataKey-TZEf5iHD.js";import"./useElementOffset-Mops_opC.js";import"./uniqBy-DE0GfQ2f.js";import"./iteratee-BQC4Cygg.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DbRi0_-s.js";import"./Rectangle--uO5acWR.js";import"./util-Dxo8gN5i.js";import"./Sector-CUgX515f.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
