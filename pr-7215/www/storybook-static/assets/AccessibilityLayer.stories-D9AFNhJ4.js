import{u as A,e as t}from"./iframe-Cbg-fKNU.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Cte27ylB.js";import{A as E}from"./AreaChart-D-rClzG7.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-B52730MV.js";import{X as g}from"./XAxis-scJ13O_U.js";import{Y as h}from"./YAxis-DeM2VHlz.js";import{A as a}from"./Area-CQsBb6ZC.js";import{T as u}from"./Tooltip-QqR-Kvw7.js";import{R as y}from"./RechartsHookInspector-D7okJ7xS.js";import{g as v}from"./arrayEqualityCheck-hFPRsS2v.js";import{L as T}from"./Legend-BGilQiwd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-EdxkrsQJ.js";import"./index-tFSrK1wv.js";import"./immer-S1zDTrNa.js";import"./hooks-CL-gQxGz.js";import"./axisSelectors-COlbOcyl.js";import"./d3-scale-DuHK7VZm.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-ByH7lQpu.js";import"./renderedTicksSlice-BAcUufvh.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-IEffqnC4.js";import"./chartDataContext-BUHR6knq.js";import"./CategoricalChart-DAwQUD4-.js";import"./resolveDefaultProps-D6T4fIvs.js";import"./CartesianAxis-A8y-DKmq.js";import"./Layer-OlYOmPUf.js";import"./Text-BtrwnnO1.js";import"./DOMUtils-BOYR8naz.js";import"./Label-Dne7i20P.js";import"./ZIndexLayer-qeHNPcT8.js";import"./types-BpyuZwQS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-POHvOeVE.js";import"./useAnimationId-ClgLuj6x.js";import"./ActivePoints-CVBcNwxF.js";import"./Dot-CvNBt79L.js";import"./RegisterGraphicalItemId-CwmBMhGa.js";import"./GraphicalItemClipPath-B0xiuhMH.js";import"./SetGraphicalItem-BIH6QpC3.js";import"./getRadiusAndStrokeWidthFromDot-Cg3OgevG.js";import"./ActiveShapeUtils-Drq8bts1.js";import"./Curve-C22NWxJ6.js";import"./step-CgbJhf5W.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C0F3swNy.js";import"./useElementOffset-DGafWhz7.js";import"./uniqBy-C9mCQonC.js";import"./iteratee-BMHEy9Yu.js";import"./Cross-DbVYaY0D.js";import"./Rectangle-DIyqwkit.js";import"./Sector-jEv1BStD.js";import"./index-BkDgLzYn.js";import"./ChartSizeDimensions-D9mNUeVH.js";import"./OffsetShower-DsmXSBYW.js";import"./PlotAreaShower-CeGNuSiV.js";import"./Symbols-UYaWffC4.js";import"./symbol-DEGNIwBZ.js";const Ft={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
