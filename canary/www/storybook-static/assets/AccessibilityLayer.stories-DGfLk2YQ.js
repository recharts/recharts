import{e as t,r as A}from"./iframe-C2QqRKe7.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-XS1PtTuL.js";import{R as E}from"./arrayEqualityCheck-PWQDmerQ.js";import{A as a}from"./Area-BgdcPnFu.js";import{L as b}from"./Legend-ClNQMLK0.js";import{X as d}from"./XAxis-DNcvFPfK.js";import{Y as g}from"./YAxis-21rUvSzF.js";import{T as h}from"./Tooltip-B0rpxfs0.js";import{R as u}from"./RechartsHookInspector-CgITLFRP.js";import{A as v}from"./AreaChart-Tkeobr2Q.js";import{C as T}from"./CartesianGrid-D-1j0FVM.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-uOO6_n61.js";import"./index-rLwxE0hv.js";import"./immer-CHIvT254.js";import"./hooks-mESitlr_.js";import"./axisSelectors-BKaUJCrd.js";import"./d3-scale-dRIxyhfO.js";import"./zIndexSlice-BpAhelXi.js";import"./renderedTicksSlice-psJG_LWq.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-_z898-at.js";import"./chartDataContext-Cua8pUoe.js";import"./CategoricalChart-DTUutzp0.js";import"./resolveDefaultProps-7LXz8kjz.js";import"./Curve-CBR7IDRo.js";import"./types-DlfTkI4e.js";import"./step--bjVkvqq.js";import"./Layer-DCLj2Osy.js";import"./ReactUtils-D05HJqIj.js";import"./Label-s7jamoYW.js";import"./Text-DIlIMQQ1.js";import"./DOMUtils-9UeuBFxq.js";import"./ZIndexLayer-DIR-sv8W.js";import"./ActivePoints-DEfaZ0g5.js";import"./Dot-CoSgEVxE.js";import"./RegisterGraphicalItemId-j0z2KBnl.js";import"./GraphicalItemClipPath-IOucdNEs.js";import"./SetGraphicalItem-C5oBx3dN.js";import"./useAnimationId-Bi88RhdV.js";import"./getRadiusAndStrokeWidthFromDot-BGZ245Ii.js";import"./graphicalItemSelectors-CXVWP7v4.js";import"./Symbols-B81oQNtv.js";import"./symbol-CnCwPTjr.js";import"./useElementOffset-BzleAjZ-.js";import"./uniqBy-CS1JI9OO.js";import"./iteratee-G7IUGyAd.js";import"./CartesianAxis-se2SzLtu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-4gLCtwOQ.js";import"./Rectangle-BOyb4uG2.js";import"./Sector-BVmDGxYU.js";import"./index-BnZqoCYA.js";import"./ChartSizeDimensions-BWtVWwLO.js";import"./OffsetShower-BY6uYDHq.js";import"./PlotAreaShower-DlAzy3wu.js";const St={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
