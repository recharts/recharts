import{r as A,e as t}from"./iframe-B5OZyTLO.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-DpUDvMYQ.js";import{A as E}from"./AreaChart-hk8usTRX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-B88auzH8.js";import{X as g}from"./XAxis-zb4VUPh6.js";import{Y as h}from"./YAxis-Dux7TOCI.js";import{A as a}from"./Area-Bd-BuIxT.js";import{T as u}from"./Tooltip-Bk-yGqEO.js";import{R as y}from"./RechartsHookInspector-_hFKO12C.js";import{R as v}from"./arrayEqualityCheck-CWhdwSDm.js";import{L as T}from"./Legend-D4s-p13t.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CQQb0kbC.js";import"./index-hV-3VpKL.js";import"./immer-TWt97Mx7.js";import"./hooks-BezBw8uS.js";import"./axisSelectors-ABOgVma3.js";import"./d3-scale-CN5ZQXr4.js";import"./zIndexSlice-BhJZ8kMU.js";import"./renderedTicksSlice-D_AhA4OM.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FhsaLguc.js";import"./chartDataContext-B484Lq8t.js";import"./CategoricalChart-zasF99ZZ.js";import"./resolveDefaultProps-CAPxLZ6Q.js";import"./CartesianAxis-DF2T2i1R.js";import"./Layer-DY3DBIYw.js";import"./Text-CpciUZWD.js";import"./DOMUtils-CaAH8jO5.js";import"./Label-DrAV5Ysg.js";import"./ZIndexLayer--mzOMN2C.js";import"./types-CBKdJqtE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CZezSHJu.js";import"./step--d94ZHvF.js";import"./ReactUtils-50LnJO-z.js";import"./ActivePoints-BCl6lkYq.js";import"./Dot-DW8dVVMQ.js";import"./RegisterGraphicalItemId-DI_yJ9XE.js";import"./GraphicalItemClipPath-DqNQMvK4.js";import"./SetGraphicalItem-DtNxMT9p.js";import"./useAnimationId-C8kgPVjG.js";import"./getRadiusAndStrokeWidthFromDot-BwBEHiBz.js";import"./graphicalItemSelectors-VHFRil1c.js";import"./useElementOffset-CMyZblD5.js";import"./uniqBy-Bjy84KJm.js";import"./iteratee-DcHlFybE.js";import"./Cross-Bo9V-nNr.js";import"./Rectangle-CluG0cnR.js";import"./Sector-DWNWDgn6.js";import"./index-1eVRlG7n.js";import"./ChartSizeDimensions-UHLg_21n.js";import"./OffsetShower-C1QQvoSP.js";import"./PlotAreaShower-Bz0iMrs_.js";import"./Symbols-CYtIKOUS.js";import"./symbol-OBCxgJUM.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
