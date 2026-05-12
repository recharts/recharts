import{r as A,e as t}from"./iframe-m4iUvHHE.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-C6EOsY3Y.js";import{A as E}from"./AreaChart-BcJcuuq8.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Cyz0CANa.js";import{X as g}from"./XAxis-D0aRIGij.js";import{Y as h}from"./YAxis-CCDUaJX1.js";import{A as a}from"./Area-D79HM4Qy.js";import{T as u}from"./Tooltip-BAvz0IgL.js";import{R as y}from"./RechartsHookInspector-DquHYSn_.js";import{R as v}from"./arrayEqualityCheck-h_ZmhyNH.js";import{L as T}from"./Legend-CQ4XniSJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-F72CiqvA.js";import"./index-CrxMp6gE.js";import"./immer-g1bGLmSg.js";import"./hooks-DWsntCpj.js";import"./axisSelectors-DfPlbHbP.js";import"./d3-scale-Y-jFDeRI.js";import"./zIndexSlice-CKy2olf2.js";import"./renderedTicksSlice-BEB6E7mo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-_tfuwHZj.js";import"./chartDataContext-BiqezE3h.js";import"./CategoricalChart-9uAdVsVQ.js";import"./resolveDefaultProps-DyxbBsOP.js";import"./CartesianAxis-CqSuAZnU.js";import"./Layer-CcrS99IB.js";import"./Text-B9di0q31.js";import"./DOMUtils-BJmvgBqy.js";import"./Label-BCusTt26.js";import"./ZIndexLayer-DebxKBww.js";import"./types-ipm49NW_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-lACOSqJl.js";import"./step-BaU1N5Sx.js";import"./ReactUtils-BGxD9cqm.js";import"./ActivePoints-MuJUPiBM.js";import"./Dot-NbYBXchV.js";import"./RegisterGraphicalItemId-uusu-k8r.js";import"./GraphicalItemClipPath-BgZNml_V.js";import"./SetGraphicalItem-DEb8ASoe.js";import"./useAnimationId-CowdAHeu.js";import"./getRadiusAndStrokeWidthFromDot-uhw_xs2j.js";import"./graphicalItemSelectors-9l1_z7YU.js";import"./useElementOffset-6zzYdDiL.js";import"./uniqBy-DhVYOpcE.js";import"./iteratee-Cfg_AXlo.js";import"./Cross-CuBoQy-M.js";import"./Rectangle-BNlZhouO.js";import"./Sector-0LK2YG6H.js";import"./index-5r_S6fe4.js";import"./ChartSizeDimensions-L8mur3p1.js";import"./OffsetShower-BU7tduPK.js";import"./PlotAreaShower-C2wXuw9M.js";import"./Symbols-B9jGSpgT.js";import"./symbol-Chx5djFD.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
