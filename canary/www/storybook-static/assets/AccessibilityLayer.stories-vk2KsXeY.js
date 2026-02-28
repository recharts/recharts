import{r as A,e as t}from"./iframe-DU58YqXX.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-CTPFUUjo.js";import{A as E}from"./AreaChart-CnaTar_G.js";import{C as b}from"./CartesianGrid-CFA0soYO.js";import{X as d}from"./XAxis-CqmwPZ8Q.js";import{Y as g}from"./YAxis-DIF8wKFU.js";import{A as a}from"./Area-CTPQGuJN.js";import{T as h}from"./Tooltip-X58UL_5a.js";import{R as u}from"./RechartsHookInspector-bU2QYxIO.js";import{R as v}from"./arrayEqualityCheck-CPm_ZzNM.js";import{L as T}from"./Legend-965RzLLJ.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCRQCspP.js";import"./index-CAIf49bT.js";import"./immer-CCty7oPO.js";import"./hooks-BmHTCWu2.js";import"./axisSelectors-C_NSCJzf.js";import"./d3-scale-D66UOGri.js";import"./zIndexSlice-D06B5CMj.js";import"./renderedTicksSlice-C5yXBQp1.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-2UpvhmGK.js";import"./chartDataContext-C5MRHpth.js";import"./CategoricalChart-CnCv7GAg.js";import"./resolveDefaultProps-BvRsDILo.js";import"./CartesianAxis-C18m4Bo_.js";import"./Layer-D-R-VvL4.js";import"./Text-BeOHNxA6.js";import"./DOMUtils--vhf8olX.js";import"./Label-1-xmv-OU.js";import"./ZIndexLayer-DrZECD3r.js";import"./types-BRRO6f_Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CdKz9IVe.js";import"./step-DaNDWZj1.js";import"./ReactUtils-qI72OB32.js";import"./ActivePoints-C9rhzLLD.js";import"./Dot-24Sl23lT.js";import"./RegisterGraphicalItemId-BSQp396K.js";import"./GraphicalItemClipPath-D9N1r5H3.js";import"./SetGraphicalItem-XqVw1NHm.js";import"./useAnimationId-hGktevsz.js";import"./getRadiusAndStrokeWidthFromDot-XWXBClrt.js";import"./graphicalItemSelectors-BQ1ZcZO0.js";import"./useElementOffset-CRKDW-Si.js";import"./uniqBy-B_be_HkH.js";import"./iteratee-Da9ZVL55.js";import"./Cross-Bz7Zr1I8.js";import"./Rectangle-BiaAAf2E.js";import"./Sector-NGcPnez7.js";import"./index-D73aQCF4.js";import"./ChartSizeDimensions-DA9JA8Lt.js";import"./OffsetShower-OVwVH-bI.js";import"./PlotAreaShower-Yynvk9Up.js";import"./Symbols-CeuFr1Zm.js";import"./symbol-B759Rj27.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
