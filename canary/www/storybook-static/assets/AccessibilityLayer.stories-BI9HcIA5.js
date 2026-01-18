import{e as t,r as A}from"./iframe-HE4l6gpY.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-C5Q1Dlys.js";import{R as E}from"./arrayEqualityCheck-zbhzaWLf.js";import{A as a}from"./Area-DTQWrD7n.js";import{L as b}from"./Legend-BRdhBltB.js";import{X as d}from"./XAxis-DdaPXuK0.js";import{Y as g}from"./YAxis-WQBuKMWe.js";import{T as h}from"./Tooltip-nFqpvsrl.js";import{R as u}from"./RechartsHookInspector-JJmqV01h.js";import{A as v}from"./AreaChart-C0hSL71L.js";import{C as T}from"./CartesianGrid-D8OAbM8Q.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rscDC45n.js";import"./hooks-CAMR9gDE.js";import"./axisSelectors-BlI41Nqe.js";import"./zIndexSlice-CDFEuO1j.js";import"./resolveDefaultProps-ycHCQ38b.js";import"./PolarUtils-DtB8lpuj.js";import"./CartesianChart-Dff8VYzG.js";import"./chartDataContext-HKU5YHU8.js";import"./CategoricalChart-b_wn2d-T.js";import"./Curve-B2qa_Fpt.js";import"./types-CN_ngcpa.js";import"./Layer-BUJF1xKh.js";import"./ReactUtils-DzgF8jcH.js";import"./Label-D3UA2eyA.js";import"./Text-CEFvmxgj.js";import"./DOMUtils-BzGtJFJB.js";import"./ZIndexLayer-C9xwCaJR.js";import"./ActivePoints-CgH2JxOA.js";import"./Dot-qjCGP036.js";import"./RegisterGraphicalItemId-D8pM0yYi.js";import"./GraphicalItemClipPath-BnkYT85w.js";import"./SetGraphicalItem-bFi_wPR4.js";import"./useAnimationId-CIwDHleW.js";import"./getRadiusAndStrokeWidthFromDot-CV9EPUkh.js";import"./graphicalItemSelectors-CrTBi9mh.js";import"./Symbols-DoDZ9cAV.js";import"./useElementOffset-c9br3Dij.js";import"./iteratee-CTXU5arM.js";import"./CartesianAxis-DHNzlHQb.js";import"./Cross-te_z7s4G.js";import"./Rectangle-C42JoSoA.js";import"./Sector-CwzJgIqc.js";import"./index-CuPLL4UF.js";import"./ChartSizeDimensions-AwnLO8b3.js";import"./OffsetShower-B5Y-lcHm.js";import"./PlotAreaShower-Cx476p9R.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
