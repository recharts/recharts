import{r as A,e as t}from"./iframe-DOwSMESw.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-DebGIEfT.js";import{A as E}from"./AreaChart-DhbmOdrO.js";import{C as b}from"./CartesianGrid-DEbxUIAb.js";import{X as d}from"./XAxis-BPbWU4yR.js";import{Y as g}from"./YAxis-DIarP6QG.js";import{A as a}from"./Area-CdvyzIAs.js";import{T as h}from"./Tooltip-49ah_KvT.js";import{R as u}from"./RechartsHookInspector-CcCJcHZ5.js";import{R as v}from"./arrayEqualityCheck-CX9-bfYH.js";import{L as T}from"./Legend-D_NaL7mR.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ls6tVJyv.js";import"./index-BBfb_97C.js";import"./immer-ZyDpTiiy.js";import"./hooks-xQD_-akz.js";import"./axisSelectors-BKSMdbwV.js";import"./d3-scale-D4rgCaup.js";import"./zIndexSlice-DitFxlYL.js";import"./renderedTicksSlice-B9YC84oJ.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DFwJmcFp.js";import"./chartDataContext-CzK82F7Z.js";import"./CategoricalChart-CxUtgmSG.js";import"./resolveDefaultProps-ChqUwM3U.js";import"./CartesianAxis-BJnnwpTK.js";import"./Layer-Dw0puBgf.js";import"./Text-DHnTXj9j.js";import"./DOMUtils-DbGofJNd.js";import"./Label-CGJJW7mt.js";import"./ZIndexLayer-Dk3cu7q_.js";import"./types-BVuvkN0T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-HyoTL5em.js";import"./step-CPI5XPf7.js";import"./ReactUtils-D4p-v0tr.js";import"./ActivePoints-Bwmmy_Xm.js";import"./Dot-aBSUYWpk.js";import"./RegisterGraphicalItemId-BYUuyceh.js";import"./GraphicalItemClipPath-CYCx10_G.js";import"./SetGraphicalItem-CB9uDBjU.js";import"./useAnimationId-B99eNrnj.js";import"./getRadiusAndStrokeWidthFromDot-BkGX9HE7.js";import"./graphicalItemSelectors-DvSC0wdE.js";import"./useElementOffset-CFSq58AV.js";import"./uniqBy-ByHGQN-F.js";import"./iteratee-DHfnXdiR.js";import"./Cross-D1qFAUvf.js";import"./Rectangle-CMknbwVL.js";import"./Sector-BzLVEcjl.js";import"./index-aBvahWCN.js";import"./ChartSizeDimensions-BCHrYjTL.js";import"./OffsetShower-DAQHvvGL.js";import"./PlotAreaShower-CtS1URyh.js";import"./Symbols-Vm2a1c-r.js";import"./symbol-5SXgtl89.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
