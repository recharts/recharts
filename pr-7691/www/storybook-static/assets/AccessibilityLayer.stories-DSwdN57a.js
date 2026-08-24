import{r as A,R as t}from"./iframe-CIi4aQFr.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B_APHvQA.js";import{A as E}from"./AreaChart-COJ_QTZA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CqgviFUZ.js";import{X as g}from"./XAxis-CiR2CsZh.js";import{Y as h}from"./YAxis-NZvB3wWl.js";import{A as a}from"./Area-DpYlVUYN.js";import{T as u}from"./Tooltip-O8EnSUQM.js";import{R as k}from"./zIndexSlice-Dh5k7YSi.js";import{L as v}from"./Legend-DiuqNEG1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ZkQqyZzz.js";import"./index-DIad8aWY.js";import"./index-DQ9ajMSc.js";import"./index-b81EtH6z.js";import"./index-glf-Y2ea.js";import"./throttle-DwQobNkr.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B5t0SRDA.js";import"./resolveDefaultProps-DFD1zbAv.js";import"./isWellBehavedNumber-C0qU1KvT.js";import"./d3-scale-DpZDns7V.js";import"./renderedTicksSlice-CDlJiGOR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D66kwqNc.js";import"./chartDataContext-Dyx-NDOp.js";import"./CategoricalChart-DmxebrUR.js";import"./CartesianAxis-DFqSm48C.js";import"./Layer--pVrB_zY.js";import"./Text-MCLT9Uur.js";import"./DOMUtils-BGqmQoYm.js";import"./useId-6CqpgxoT.js";import"./useBackwardsCompatibleTheme-rhWVmcC-.js";import"./Label-_CQ4siSe.js";import"./ZIndexLayer-1sxgmC4q.js";import"./types-jFK-aXqG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BDFnApNF.js";import"./useAnimationId-DYWYqd07.js";import"./ActivePoints-B-l9jXx9.js";import"./Dot-D1RE6CX3.js";import"./RegisterGraphicalItemId-Bb9-v4SQ.js";import"./GraphicalItemClipPath-3c2R7Wr9.js";import"./SetGraphicalItem-BSa5SMWZ.js";import"./getRadiusAndStrokeWidthFromDot-Bp1zRMUA.js";import"./ActiveShapeUtils-DOGuq5rw.js";import"./Curve-CmPgMf6O.js";import"./step-WUQpfHT0.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DDMdjh60.js";import"./useElementOffset-BIPd_XJO.js";import"./uniqBy-Dpw5nYtX.js";import"./iteratee-C1zppXlK.js";import"./Cross-jMHs3ke5.js";import"./Rectangle-DZaoOiFu.js";import"./util-Dxo8gN5i.js";import"./Sector-D6tbLl1i.js";import"./Symbols-DmvYGZj0.js";import"./symbol-Bh1A56tJ.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
