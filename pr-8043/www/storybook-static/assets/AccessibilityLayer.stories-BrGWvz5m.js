import{r as A,R as t}from"./iframe-BJwrbqqi.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BZiAB31H.js";import{A as E}from"./AreaChart-DaXaTNnN.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-t9_8Qbmt.js";import{X as g}from"./XAxis-B7ZX8Kfa.js";import{Y as h}from"./YAxis-BRttk8mJ.js";import{A as a}from"./Area-zULqpF4Y.js";import{T as u}from"./Tooltip-D-aHLOso.js";import{R as k}from"./zIndexSlice-Dgyv34Z4.js";import{L as v}from"./Legend-CXIWKYSv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DeuEZMtn.js";import"./resolveDefaultProps-C-uvAkWz.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C5NObvkt.js";import"./throttle-pfeYxzRR.js";import"./index-G7qNEGy_.js";import"./index-DvHXQAWB.js";import"./isWellBehavedNumber-pfE5Q5mt.js";import"./d3-scale-DSWUCzXy.js";import"./index-DsGTB-aY.js";import"./index-WSINJmPt.js";import"./renderedTicksSlice-BnrduSeF.js";import"./index-BP4AOHzk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLAnODbR.js";import"./chartDataContext-BDqLbH1o.js";import"./CategoricalChart-Db_HBiCU.js";import"./CartesianAxis-CmiU-XO8.js";import"./Layer-eN5gk5Rs.js";import"./Text-KHiJMqsX.js";import"./pageBackground-BIIIhWKR.js";import"./useId-DQUV3KXo.js";import"./useBackwardsCompatibleTheme-B8str_Tp.js";import"./Label-XjwS876P.js";import"./ZIndexLayer-BJ-hVFwd.js";import"./dataEntryStyles-D7ilp65R.js";import"./types-BBGLRMuE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-JM_riMMZ.js";import"./useAnimationId-Cz6ggmzR.js";import"./ActivePoints-5m6R4yet.js";import"./Dot-Bsu5ZBhw.js";import"./RegisterGraphicalItemId-CPxaQHtW.js";import"./GraphicalItemClipPath-D57dspwd.js";import"./SetGraphicalItem-Dgy41JCB.js";import"./getRadiusAndStrokeWidthFromDot-DpwEmJ7r.js";import"./ActiveShapeUtils-DSUQ40Ee.js";import"./Curve-DpfItrvf.js";import"./step-CFdztVjQ.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-dwhPZ08z.js";import"./useElementOffset-B3zfLjYP.js";import"./uniqBy-CLTRPXtC.js";import"./iteratee-DM8gut2i.js";import"./isArguments-yB-y1yaH.js";import"./Cross-b_5sADJx.js";import"./Rectangle-DKcQQ7tK.js";import"./util-Dxo8gN5i.js";import"./Sector-CfxM3osn.js";import"./Symbols-BIb_pKxd.js";import"./symbol-5eUW0bsj.js";const Xt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ot=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ot as __namedExportsOrder,Xt as default};
