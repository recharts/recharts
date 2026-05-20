import{u as A,e as t}from"./iframe-HCWlV7eT.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-nAk3IKvH.js";import{A as E}from"./AreaChart-D4cEOCI1.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-CkVEYY7L.js";import{X as g}from"./XAxis-Cvv7ki52.js";import{Y as h}from"./YAxis-D1dMwbfR.js";import{A as a}from"./Area-DvX_98Kc.js";import{T as u}from"./Tooltip-CyjjdyJU.js";import{R as y}from"./RechartsHookInspector-DiUR5-Rd.js";import{g as v}from"./arrayEqualityCheck-Cf1iFAtr.js";import{L as T}from"./Legend-DW4BvmKE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3_OF8yL.js";import"./index-CG6p6UQd.js";import"./immer-CyT7MAhj.js";import"./hooks-Bu1aMOxG.js";import"./axisSelectors-kc4WL651.js";import"./d3-scale-DGA5oTTZ.js";import"./zIndexSlice-BUPMHSoM.js";import"./renderedTicksSlice-DNGVWtDy.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CIcvcNyp.js";import"./chartDataContext-C29Qu4zj.js";import"./CategoricalChart-DsLokalm.js";import"./resolveDefaultProps-CKTz6CIA.js";import"./CartesianAxis-Br883KRe.js";import"./Layer-BieoRt7-.js";import"./Text-Sb1Xn8CY.js";import"./DOMUtils-Bqm3Lq_z.js";import"./Label-Cz3tNLpR.js";import"./ZIndexLayer-DYTZmJpE.js";import"./types-BVJNSeSn.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-B-66MxCQ.js";import"./step-BzEMV51B.js";import"./ReactUtils-C2TKIy08.js";import"./ActivePoints-cTIowq9F.js";import"./Dot-CSOnHbFY.js";import"./RegisterGraphicalItemId-S6JUBuqk.js";import"./GraphicalItemClipPath-BdouDh12.js";import"./SetGraphicalItem-C9MUiNjo.js";import"./useAnimationId-BbyheOhI.js";import"./getRadiusAndStrokeWidthFromDot-ClmLFBR-.js";import"./graphicalItemSelectors-BNNBGRzE.js";import"./useElementOffset-fRCyg0pc.js";import"./uniqBy-Bh4jR5DJ.js";import"./iteratee-AiWfzrMQ.js";import"./Cross-xAvLItQj.js";import"./Rectangle-CsPKVDyM.js";import"./Sector-BWvy9RzL.js";import"./index-BHZHrA64.js";import"./ChartSizeDimensions-DdWY1IL4.js";import"./OffsetShower-XZyi8iCL.js";import"./PlotAreaShower-KC6xEH0b.js";import"./Symbols-Eaix-2lc.js";import"./symbol-DfBAaUU7.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
