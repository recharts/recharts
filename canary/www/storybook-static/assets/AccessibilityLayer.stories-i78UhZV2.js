import{e as t,r as A}from"./iframe-D1NCNqUw.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-3m62MgnI.js";import{R as E}from"./arrayEqualityCheck-CQjIdQCx.js";import{A as a}from"./Area-ClLkIZOw.js";import{L as b}from"./Legend-DUBEmted.js";import{X as d}from"./XAxis-u0hdrjRw.js";import{Y as g}from"./YAxis-A9YbMvOB.js";import{T as h}from"./Tooltip-DNRnEVuU.js";import{R as u}from"./RechartsHookInspector-ZreWXCAw.js";import{A as v}from"./AreaChart-g9ljPGz-.js";import{C as T}from"./CartesianGrid-Bd5YNvuL.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHOsEYDB.js";import"./hooks-JIh16Fdo.js";import"./axisSelectors-I3OUkjeV.js";import"./zIndexSlice-B6vCGJts.js";import"./resolveDefaultProps-Djsbq22w.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-JOI6h5bX.js";import"./chartDataContext-Dg8xMp5I.js";import"./CategoricalChart-Dz9zkg_l.js";import"./Curve-C3pHY6tL.js";import"./types-gvwBC4-3.js";import"./Layer-BCRy6dX1.js";import"./ReactUtils-BB1Bvtm-.js";import"./Label-BNrwDKuI.js";import"./Text-IRTIkJKa.js";import"./DOMUtils-DHPWyRpf.js";import"./ZIndexLayer-DGrkiEgC.js";import"./ActivePoints-B3fzw2dP.js";import"./Dot-Cs7zSf6c.js";import"./RegisterGraphicalItemId-C1aQBUzf.js";import"./GraphicalItemClipPath-BqkTWDYP.js";import"./SetGraphicalItem-D7KZSAt9.js";import"./useAnimationId-CaRLwgfn.js";import"./getRadiusAndStrokeWidthFromDot-CMWXAyTc.js";import"./graphicalItemSelectors-DXCn_-5D.js";import"./Symbols-DMX5HiXT.js";import"./useElementOffset-CxGOc-CC.js";import"./iteratee-B-7bARrX.js";import"./CartesianAxis-C56nwzMo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-DHzBM6ad.js";import"./Rectangle-BNiHE16P.js";import"./Sector-TTqZtEvI.js";import"./index-BmYae47F.js";import"./ChartSizeDimensions-CQGmt7Jm.js";import"./OffsetShower-jlBTnn9Z.js";import"./PlotAreaShower-CLC5srun.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Tt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Tt as __namedExportsOrder,vt as default};
