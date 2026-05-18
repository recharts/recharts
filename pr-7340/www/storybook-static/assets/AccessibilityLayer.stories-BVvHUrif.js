import{u as A,e as t}from"./iframe-CVCS2awI.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-CZbWLpnK.js";import{A as E}from"./AreaChart-BfrSBXSi.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-Di5zgPXB.js";import{X as g}from"./XAxis-DEoN5sn7.js";import{Y as h}from"./YAxis-ofBsFmOO.js";import{A as a}from"./Area-CqK3jWeL.js";import{T as u}from"./Tooltip-d7WOHUx5.js";import{R as y}from"./RechartsHookInspector-3dEt4e8Z.js";import{g as v}from"./arrayEqualityCheck-BScHcl7E.js";import{L as T}from"./Legend-CcKK5dE7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CsYjkcUu.js";import"./index-DBY1MSkk.js";import"./immer-BGDSirDa.js";import"./hooks-DdU_FuUR.js";import"./axisSelectors-Ci1MJvZY.js";import"./d3-scale-BXP4l8lb.js";import"./zIndexSlice-CYiE3KZh.js";import"./renderedTicksSlice-DEe4uQXq.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-g3EB1H8Z.js";import"./chartDataContext-CE4uM-kC.js";import"./CategoricalChart-DjXgWEwo.js";import"./resolveDefaultProps-ByXJQ66f.js";import"./CartesianAxis-PbPLy1Ao.js";import"./Layer-ByxoiXYR.js";import"./Text-CDmz-7H5.js";import"./DOMUtils-DM2Mtfvr.js";import"./Label-DaKOoJ3c.js";import"./ZIndexLayer-qvuGpwS0.js";import"./types-Dgqt75FW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CrfOdonX.js";import"./step-3E9Doowe.js";import"./ReactUtils-rjXWPyV6.js";import"./ActivePoints-hZ66QtRZ.js";import"./Dot-BYrokBNa.js";import"./RegisterGraphicalItemId-DdbYzmem.js";import"./GraphicalItemClipPath-_oXfIigP.js";import"./SetGraphicalItem-2oqi_YeH.js";import"./useAnimationId-B8F28VZa.js";import"./getRadiusAndStrokeWidthFromDot-l3MHvEmn.js";import"./graphicalItemSelectors-CGc9iKmK.js";import"./useElementOffset-CI8CiQoP.js";import"./uniqBy-Bxp-pBrY.js";import"./iteratee-CHH-nYCc.js";import"./Cross-MuHqrs7m.js";import"./Rectangle-DLDHpE0T.js";import"./Sector-C1cGt--Q.js";import"./index-D6BiGzwv.js";import"./ChartSizeDimensions-Cz6I6g2_.js";import"./OffsetShower-mSbEp68m.js";import"./PlotAreaShower-Bh-nVQY_.js";import"./Symbols-Dz4m2MlL.js";import"./symbol-DdzOPpJh.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
