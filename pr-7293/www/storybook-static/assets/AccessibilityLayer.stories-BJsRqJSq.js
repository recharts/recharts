import{r as A,e as t}from"./iframe-CGwnqAI9.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-C3W32EcH.js";import{A as E}from"./AreaChart-Bgb_ATT9.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BrzCw4F9.js";import{X as g}from"./XAxis-B1wOh-_6.js";import{Y as h}from"./YAxis-DQ_Ub3Le.js";import{A as a}from"./Area-VSvpMi14.js";import{T as u}from"./Tooltip-BrfQv9eX.js";import{R as y}from"./RechartsHookInspector-Dp5vB4hQ.js";import{R as v}from"./arrayEqualityCheck-DRh0NsZa.js";import{L as T}from"./Legend-DN_hPw8G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DByz9jGi.js";import"./index-mavG575g.js";import"./immer-DfOKcAuw.js";import"./hooks-CyDmPBvG.js";import"./axisSelectors-BGY1T7LG.js";import"./d3-scale-DlZgn0s2.js";import"./zIndexSlice-BTBhIRz7.js";import"./renderedTicksSlice-C0ADS2ij.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bbfh0WUo.js";import"./chartDataContext-oPYA1VCq.js";import"./CategoricalChart-COt4unt0.js";import"./resolveDefaultProps-DSTq7oxQ.js";import"./CartesianAxis-4LCb4x4u.js";import"./Layer-CQ6uqOgk.js";import"./Text-DNmyQGES.js";import"./DOMUtils-nZK1ZF4e.js";import"./Label-CJpeNkBK.js";import"./ZIndexLayer-CMaPWngm.js";import"./types-VBg1tlke.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-kVtEDQbb.js";import"./step-BVKFw9bQ.js";import"./ReactUtils-CbJaRrjx.js";import"./ActivePoints-Cr6dU73k.js";import"./Dot-0lNFu7iq.js";import"./RegisterGraphicalItemId-nbnlv4b-.js";import"./GraphicalItemClipPath-kWf0wfBs.js";import"./SetGraphicalItem-p36bNdDU.js";import"./useAnimationId-DHwy2PIZ.js";import"./getRadiusAndStrokeWidthFromDot-8id4PXjH.js";import"./graphicalItemSelectors-D4cd_ynK.js";import"./useElementOffset-CXOBSiaG.js";import"./uniqBy-DiZ8Z3bH.js";import"./iteratee-DjpPVy9L.js";import"./Cross-Cf1ElWMr.js";import"./Rectangle-BsqGVbsk.js";import"./Sector-NwDh2164.js";import"./index-JaLX6-zQ.js";import"./ChartSizeDimensions-DcTb07cJ.js";import"./OffsetShower-DNDx_7Gv.js";import"./PlotAreaShower-C1OT31tE.js";import"./Symbols-CWdafSUI.js";import"./symbol-D9RrWTM2.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
