import{r as A,e as t}from"./iframe-BDTlfdm2.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-D8FjVx7b.js";import{A as E}from"./AreaChart-DgwT616h.js";import{C as b}from"./CartesianGrid-CMA7C2-6.js";import{X as d}from"./XAxis-CGiSi9HN.js";import{Y as g}from"./YAxis-ClHUtMv7.js";import{A as a}from"./Area-HHPVBxoU.js";import{T as h}from"./Tooltip-DyyKRnSh.js";import{R as u}from"./RechartsHookInspector-CwVl35lx.js";import{R as v}from"./arrayEqualityCheck--4uVIqe7.js";import{L as T}from"./Legend-7N67OVKM.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFvbTCKp.js";import"./index-B3NJv-3m.js";import"./immer-D4Dnjbsg.js";import"./hooks-CfsEtptI.js";import"./axisSelectors-Dx0oxQ7o.js";import"./d3-scale-3sh934kt.js";import"./zIndexSlice-Brj7ikm8.js";import"./renderedTicksSlice-D_ZcqCe1.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-7fZDMSO_.js";import"./chartDataContext-CSwNX1B7.js";import"./CategoricalChart-CpHz1opn.js";import"./resolveDefaultProps-Czz55H-I.js";import"./CartesianAxis-CZM1jQf4.js";import"./Layer-CqYlT3eS.js";import"./Text-HbCgBUoZ.js";import"./DOMUtils-DeXMvM2R.js";import"./Label-VxKVkBMg.js";import"./ZIndexLayer-DC39aMOh.js";import"./types-D6KN9kQt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-g-MTQgVG.js";import"./step-C4gkOhOo.js";import"./ReactUtils-ma75EdaK.js";import"./ActivePoints-o7K4rMbo.js";import"./Dot-245mRXx6.js";import"./RegisterGraphicalItemId-Ch3Q5pij.js";import"./GraphicalItemClipPath-DgjUnpLZ.js";import"./SetGraphicalItem-DG5VxVGr.js";import"./useAnimationId-CupwM_tg.js";import"./getRadiusAndStrokeWidthFromDot-CH2mR7qj.js";import"./graphicalItemSelectors-C9Ci8dGJ.js";import"./useElementOffset-nfaXeky9.js";import"./uniqBy-CASHllcH.js";import"./iteratee-DZTEQt1h.js";import"./Cross-DDkKnY9H.js";import"./Rectangle-CWWR6MHC.js";import"./Sector-ketJTAKQ.js";import"./index-CT8_ithu.js";import"./ChartSizeDimensions-C2U4uaah.js";import"./OffsetShower-Mn3nZtBJ.js";import"./PlotAreaShower-zSnLei3q.js";import"./Symbols-7yR4Wfku.js";import"./symbol-BHrPG3ZF.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
