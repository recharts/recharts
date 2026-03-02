import{r as A,e as t}from"./iframe-YHIi0zNq.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-Dbe-cyVJ.js";import{A as E}from"./AreaChart-CNlbommh.js";import{C as b}from"./CartesianGrid-By76E-K9.js";import{X as d}from"./XAxis-kqqXeMbl.js";import{Y as g}from"./YAxis-EBaaYeoG.js";import{A as a}from"./Area-DcC-3s5w.js";import{T as h}from"./Tooltip-VKyMuC7a.js";import{R as u}from"./RechartsHookInspector-Cdc_RxXj.js";import{R as v}from"./arrayEqualityCheck-CiMVM-SL.js";import{L as T}from"./Legend-CR50tVr1.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-o-AfycQs.js";import"./index-u4istH96.js";import"./immer-D_GJadju.js";import"./hooks-CFdjgn4I.js";import"./axisSelectors-87SRvgUu.js";import"./d3-scale-DMZnVruV.js";import"./zIndexSlice-DeqvswTX.js";import"./renderedTicksSlice-DxRvDe1C.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bvl8nfic.js";import"./chartDataContext-BapHi4AL.js";import"./CategoricalChart-BRn4vti9.js";import"./resolveDefaultProps-BuJwUxEP.js";import"./CartesianAxis-DCRdhe3Y.js";import"./Layer-xP0kyya2.js";import"./Text-BfyXYVHl.js";import"./DOMUtils-B22dZqv4.js";import"./Label-DOPySTsx.js";import"./ZIndexLayer-ntDhn9GI.js";import"./types-D6q9wb44.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-fcCSfps7.js";import"./step-ByfP7lrq.js";import"./ReactUtils-HN0dEhAf.js";import"./ActivePoints-B8MIZ72J.js";import"./Dot-D6GGo-vt.js";import"./RegisterGraphicalItemId-LQPm_pAb.js";import"./GraphicalItemClipPath-Iw5JYGhP.js";import"./SetGraphicalItem-CUARmGp-.js";import"./useAnimationId-ZghgqyXB.js";import"./getRadiusAndStrokeWidthFromDot-CvwGNHbQ.js";import"./graphicalItemSelectors-CSTEPztl.js";import"./useElementOffset-Bus-3Dt3.js";import"./uniqBy-B1iZPEDj.js";import"./iteratee-lh3PvcGG.js";import"./Cross-DBtFHX1V.js";import"./Rectangle-BtRVLgVP.js";import"./Sector-BgEwi5iM.js";import"./index-Cat5Cyt-.js";import"./ChartSizeDimensions-CGxCw1zc.js";import"./OffsetShower-450EX_p_.js";import"./PlotAreaShower-dE-HeGlr.js";import"./Symbols-jxhochxb.js";import"./symbol-B8nih3Ay.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
