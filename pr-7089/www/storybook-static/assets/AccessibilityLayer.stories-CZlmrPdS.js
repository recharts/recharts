import{r as A,e as t}from"./iframe-BOKMyF_X.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CM0vmQ8b.js";import{A as E}from"./AreaChart-CDLmd14Q.js";import{C as b}from"./CartesianGrid-CODw85-L.js";import{X as d}from"./XAxis-CZEffDuF.js";import{Y as g}from"./YAxis-CBNt9JSX.js";import{A as a}from"./Area-BklcZmB3.js";import{T as h}from"./Tooltip-B9KNGIRi.js";import{R as u}from"./RechartsHookInspector-CyXtWZCT.js";import{R as v}from"./arrayEqualityCheck-CqOdBUpx.js";import{L as T}from"./Legend-6ZkFNibP.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BbOfJK_v.js";import"./index-DyqnJuAH.js";import"./immer-BWwXhaAr.js";import"./hooks-BSpUdl1W.js";import"./axisSelectors-DKV-tPdL.js";import"./d3-scale-DFwrAk_i.js";import"./zIndexSlice-5HlspQCC.js";import"./renderedTicksSlice-BzcMdbXv.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DhtZ13KG.js";import"./chartDataContext-CzpIjlkZ.js";import"./CategoricalChart-BuHiBizY.js";import"./resolveDefaultProps-D-2ZbLU8.js";import"./CartesianAxis-DfkQ8mC4.js";import"./Layer-jqqI8J4h.js";import"./Text-v3vniUMj.js";import"./DOMUtils-BpFKs9GQ.js";import"./Label-D-SjomvA.js";import"./ZIndexLayer-BPVGtKRn.js";import"./types-BRMSpD9x.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-B4PvFjai.js";import"./step-CSZdFR4k.js";import"./ReactUtils-D8BtYMdD.js";import"./ActivePoints-BkUW_jI5.js";import"./Dot-BV_14ZK_.js";import"./RegisterGraphicalItemId-CT98v8Eq.js";import"./GraphicalItemClipPath-C2O7VO_H.js";import"./SetGraphicalItem-C9j26hww.js";import"./useAnimationId-CQeaLNgU.js";import"./getRadiusAndStrokeWidthFromDot-BEKHGib6.js";import"./graphicalItemSelectors-Ct946g8y.js";import"./useElementOffset-ChJiiPNY.js";import"./uniqBy-BIhAFqL9.js";import"./iteratee-DRSvHZog.js";import"./Cross-Ds_TSBqr.js";import"./Rectangle-DaPP8vxp.js";import"./Sector-DFBFkrCL.js";import"./index-C_V29KK9.js";import"./ChartSizeDimensions-BzpSoNcH.js";import"./OffsetShower-DzkfGY4a.js";import"./PlotAreaShower-Djb9Eb2x.js";import"./Symbols-Bgq4WsjW.js";import"./symbol-BbSh3W4q.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
