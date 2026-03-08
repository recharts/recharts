import{r as A,e as t}from"./iframe-DujSE0UK.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-DcASGjDc.js";import{A as E}from"./AreaChart-BwF-EcCr.js";import{C as b}from"./CartesianGrid-DMmCJ2YK.js";import{X as d}from"./XAxis-YY1xwgnu.js";import{Y as g}from"./YAxis-DGH9UPdi.js";import{A as a}from"./Area-CiQ6Q2lZ.js";import{T as h}from"./Tooltip-ZKuMVIqS.js";import{R as u}from"./RechartsHookInspector-CRMB31G9.js";import{R as v}from"./arrayEqualityCheck-D8VjMjvf.js";import{L as T}from"./Legend-ppfsaZvO.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CZxyCKqo.js";import"./index-BzWEaTVN.js";import"./immer-DoffRpuJ.js";import"./hooks-BfEZyruk.js";import"./axisSelectors-CplbQtmA.js";import"./d3-scale-DAOxFYCv.js";import"./zIndexSlice-DxmTVpDq.js";import"./renderedTicksSlice-qOFace14.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C8FLn_u-.js";import"./chartDataContext-C-qHRTgP.js";import"./CategoricalChart-H-u-kan4.js";import"./resolveDefaultProps-C48txAh5.js";import"./CartesianAxis-DVd0f2kI.js";import"./Layer-B-nUYb5l.js";import"./Text-qQLvw26P.js";import"./DOMUtils-CiKk1OJG.js";import"./Label-D6PynPvp.js";import"./ZIndexLayer-sSQKP7NE.js";import"./types-D6xVUDWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-BIsIHsFZ.js";import"./step-BqfvS8lo.js";import"./ReactUtils-CJKtjJwj.js";import"./ActivePoints-BzgKbyfb.js";import"./Dot-Bc7S1y82.js";import"./RegisterGraphicalItemId-CBH-yQFt.js";import"./GraphicalItemClipPath-SL3od_yD.js";import"./SetGraphicalItem-BsRnOhvR.js";import"./useAnimationId-DcYOTGVs.js";import"./getRadiusAndStrokeWidthFromDot-BIQm3Qe0.js";import"./graphicalItemSelectors-DgRwhpMi.js";import"./useElementOffset-BLNKdpxK.js";import"./uniqBy-3iDuyky4.js";import"./iteratee-BYf5_rS8.js";import"./Cross-BrrDcBeB.js";import"./Rectangle-SsDZNd-D.js";import"./Sector-FLQA7LtL.js";import"./index-B_iM8tEy.js";import"./ChartSizeDimensions-DEiQIg5P.js";import"./OffsetShower-CF4VV-Vy.js";import"./PlotAreaShower-CLUz5lpa.js";import"./Symbols-nyT1XPVO.js";import"./symbol-CaRsNxSw.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
