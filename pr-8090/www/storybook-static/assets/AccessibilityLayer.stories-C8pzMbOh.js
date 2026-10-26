import{r as A,R as t}from"./iframe-Dop2FCJV.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Om7t0Gx9.js";import{A as E}from"./AreaChart-Bq0PvLXm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-mIBlq79R.js";import{X as g}from"./XAxis-BotDK1s5.js";import{Y as h}from"./YAxis-B3k634-q.js";import{A as a}from"./Area-CB9dlfuW.js";import{T as u}from"./Tooltip-DMaf7PGT.js";import{R as k}from"./zIndexSlice-nsfMN2si.js";import{L as v}from"./Legend-BueZ2WTQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ziCTvKBS.js";import"./resolveDefaultProps-DqELWZLJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CeHIB0K5.js";import"./throttle-D7xfBLch.js";import"./index-DDOIydJq.js";import"./index-CUtMqYq0.js";import"./polarAxisSelectors-C3wFvSyu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cxj7JE2J.js";import"./index-V2eSo_Pn.js";import"./index-CjK1kGrZ.js";import"./renderedTicksSlice-CNT_Edzm.js";import"./index-DD0oc2h8.js";import"./CartesianChart-DS3MFgQ4.js";import"./ZIndexPortal-D3fjmMCx.js";import"./CategoricalChart-W3056MsQ.js";import"./CartesianAxis-DU3QwiMj.js";import"./Layer-B-MIuFUl.js";import"./Text-umIfGz-9.js";import"./pageBackground-BKmWYBJ8.js";import"./ZIndexLayer-mYkteocL.js";import"./Label-BDgfZPfI.js";import"./dataEntryStyles-DYOt2-v1.js";import"./types-BszWz-w9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DYliLjPH.js";import"./ActivePoints-BOSFqPiQ.js";import"./Dot-CHpl-5cF.js";import"./activeStyles-DnOLUEXC.js";import"./useAnimationId-CQv1eLqe.js";import"./Symbols-nX61tU3C.js";import"./symbol-DyAd0qFf.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-CAURusbQ.js";import"./SetGraphicalItem--5ECUYsd.js";import"./getRadiusAndStrokeWidthFromDot-CybZPC8K.js";import"./ActiveShapeUtils-BAcgfjQM.js";import"./Curve-0Qnio8ZJ.js";import"./step-CV2mnDR5.js";import"./useEffectiveDataKey-gZcrHKmB.js";import"./useElementOffset-D9LA4JWt.js";import"./uniqBy-BuyM_tyo.js";import"./iteratee-By-O6bqn.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DmMkSZCd.js";import"./Rectangle-CLrutJrV.js";import"./util-Dxo8gN5i.js";import"./Sector-Bv00or61.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
