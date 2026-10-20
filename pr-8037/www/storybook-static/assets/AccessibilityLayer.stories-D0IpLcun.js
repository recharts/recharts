import{r as A,R as t}from"./iframe-DtNEXb77.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D7gBmB-e.js";import{A as E}from"./AreaChart-BgnJ3CG7.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DQ51llt0.js";import{X as g}from"./XAxis-B8fOHSNk.js";import{Y as h}from"./YAxis-BIfcFYbQ.js";import{A as a}from"./Area-judVUBz7.js";import{T as u}from"./Tooltip-B7uEKN2c.js";import{R as k}from"./zIndexSlice-C61cTRUd.js";import{L as v}from"./Legend-PSAl3kQK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3jS1aTx.js";import"./resolveDefaultProps-Ci1CA8vh.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CRqNtGDu.js";import"./throttle-DHRCkM2S.js";import"./index-DqUzV6Pu.js";import"./index-Da1Kct3U.js";import"./isWellBehavedNumber-C5_DATUj.js";import"./d3-scale-4c7z9Afg.js";import"./index-By0oCmzG.js";import"./index-B8VSKNpf.js";import"./renderedTicksSlice-BLHzyPiU.js";import"./index-BsnYyY0R.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bw3KaQeV.js";import"./chartDataContext-BMn1S1Pl.js";import"./CategoricalChart-IPQiQcsO.js";import"./CartesianAxis-BqiHJNgo.js";import"./Layer-809xSg6I.js";import"./Text-M6NyH5bl.js";import"./pageBackground-CwZqZ7-z.js";import"./useId-fj0geEgf.js";import"./useBackwardsCompatibleTheme-By9gF9DG.js";import"./Label-9NLOMOhr.js";import"./ZIndexLayer-CBx6DJIh.js";import"./types-CsDLwvl0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-BtinU4U_.js";import"./useAnimationId-B5nilSLl.js";import"./dataEntryStyles-DdoWImTb.js";import"./ActivePoints-Cq7N-Rzx.js";import"./Dot-wiF8eMia.js";import"./GraphicalItemClipPath-D1LTNIcZ.js";import"./SetGraphicalItem-CBRl2Ktm.js";import"./getRadiusAndStrokeWidthFromDot-50sO_gfq.js";import"./ActiveShapeUtils-CKa9wY87.js";import"./Curve-C4o5b1LX.js";import"./step-DBGMRA4B.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BFzz_xKL.js";import"./useElementOffset-BQLGRE_E.js";import"./uniqBy-DRVk0Ehd.js";import"./iteratee-rlP-A4cC.js";import"./isArguments-yB-y1yaH.js";import"./Cross-_SAGdCEj.js";import"./Rectangle-C_OpsUN-.js";import"./util-Dxo8gN5i.js";import"./Sector-CkM0ROhk.js";import"./Symbols-BU9qCE7s.js";import"./symbol-C8bXqKh9.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
