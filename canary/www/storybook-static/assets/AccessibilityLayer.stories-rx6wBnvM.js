import{r as A,e as t}from"./iframe-1xuwxK0i.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-CgqH6xmd.js";import{A as E}from"./AreaChart-vDIOzJ7d.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DMIlunDz.js";import{X as g}from"./XAxis-BKyyM-a9.js";import{Y as h}from"./YAxis-DxhfNzZF.js";import{A as a}from"./Area-CqmcaZ67.js";import{T as u}from"./Tooltip-C00K2uSc.js";import{R as y}from"./RechartsHookInspector-DjsmwIRA.js";import{R as v}from"./arrayEqualityCheck-CASLlqQ3.js";import{L as T}from"./Legend-C_lQXiX9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5Ekcff7f.js";import"./index-DCwL0QiS.js";import"./immer-BoNsEynp.js";import"./hooks-BzE3zYbI.js";import"./axisSelectors-DyjHckMI.js";import"./d3-scale-DUQowLdF.js";import"./zIndexSlice-DPF7rmTT.js";import"./renderedTicksSlice-Dixyj9Jy.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-4woDVZs_.js";import"./chartDataContext-BwmW5feg.js";import"./CategoricalChart-CiWFX2uU.js";import"./resolveDefaultProps-BeeagbIX.js";import"./CartesianAxis-DrIFSgXd.js";import"./Layer-HRVol_nO.js";import"./Text-BBwkToBR.js";import"./DOMUtils-BhlllvxT.js";import"./Label-EE46xwmi.js";import"./ZIndexLayer-C7GyPaOO.js";import"./types-UwWXE9AL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CAhCV73Q.js";import"./step-BCh-34yC.js";import"./ReactUtils-B2i9al3C.js";import"./ActivePoints-BVDrdHpP.js";import"./Dot-Bf3Kg0FQ.js";import"./RegisterGraphicalItemId-CklwmYhh.js";import"./GraphicalItemClipPath-BmfpOWt-.js";import"./SetGraphicalItem-BECsf1z-.js";import"./useAnimationId-CNQ0amde.js";import"./getRadiusAndStrokeWidthFromDot-CItpH8qB.js";import"./graphicalItemSelectors-Cmn0spIT.js";import"./useElementOffset-CwZilh1y.js";import"./uniqBy-CjLSqm-O.js";import"./iteratee-Dnw0ZN_g.js";import"./Cross-D3ed_C6s.js";import"./Rectangle-B47wiU0M.js";import"./Sector-2ltBV-lC.js";import"./index-l66o8zNg.js";import"./ChartSizeDimensions-lZytJoNO.js";import"./OffsetShower-DHMDBhnx.js";import"./PlotAreaShower-Dete_MNu.js";import"./Symbols-C6y5KnTy.js";import"./symbol-BMBn4bHO.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
