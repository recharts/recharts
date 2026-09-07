import{r as A,R as t}from"./iframe-CGBDVxE-.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BXiAbWC5.js";import{A as E}from"./AreaChart-C1gBPJrX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dzue6Pof.js";import{X as g}from"./XAxis-Ynp2iGfo.js";import{Y as h}from"./YAxis-CATKcxKg.js";import{A as a}from"./Area-DzFQGswC.js";import{T as u}from"./Tooltip-B0x42Fjv.js";import{R as k}from"./zIndexSlice-Dcoi5C6v.js";import{L as v}from"./Legend-geTiDdps.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-R5wdE7Du.js";import"./resolveDefaultProps-DFx1_FeE.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DpEiq2v9.js";import"./throttle-r4SgwsRS.js";import"./index-hboVxxbY.js";import"./index-DBtrqjyz.js";import"./isWellBehavedNumber-BDUfwR7p.js";import"./d3-scale-BEr64TMX.js";import"./index-BIKEo4sh.js";import"./index-WvwT3848.js";import"./renderedTicksSlice-D93v-Tca.js";import"./index-DyBKUzQK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DkeZbNrD.js";import"./chartDataContext-BUzll-9F.js";import"./CategoricalChart-_qdlKxZa.js";import"./CartesianAxis-BmUJzq6P.js";import"./Layer-BQpheWca.js";import"./Text-DzBijb3H.js";import"./DOMUtils-D0ua0v6z.js";import"./useId-BXTAvIyb.js";import"./useBackwardsCompatibleTheme-B_EiPeE9.js";import"./Label-rN0i5HX0.js";import"./ZIndexLayer-BQMQ-79w.js";import"./types-ALxpiXvN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BodTqMda.js";import"./useAnimationId-Dg5PDt8u.js";import"./ActivePoints-DVb5cL5_.js";import"./Dot-CBmDQuzq.js";import"./RegisterGraphicalItemId-B6GAZHe-.js";import"./GraphicalItemClipPath-CHQFwdrq.js";import"./SetGraphicalItem-CIMjPr92.js";import"./getRadiusAndStrokeWidthFromDot-XfT2XWrG.js";import"./ActiveShapeUtils-tQSQ8w1p.js";import"./Curve-D7CJuFyB.js";import"./step-DHP97Yog.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CeH-sbSH.js";import"./useElementOffset-Bo3nBkz1.js";import"./uniqBy-Dq6L1riV.js";import"./iteratee-DZ9WVhQn.js";import"./Cross-D8x6YHTw.js";import"./Rectangle-BrNBFEk8.js";import"./util-Dxo8gN5i.js";import"./Sector-CmmqCzxU.js";import"./Symbols-JKCROK7U.js";import"./symbol-BL1c8F5w.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
