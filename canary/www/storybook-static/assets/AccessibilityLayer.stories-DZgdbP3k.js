import{e as t,r as A}from"./iframe-CTxRHOGj.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DXKkF88H.js";import{C as l}from"./ComposedChart-CJXRd14X.js";import{R as E}from"./arrayEqualityCheck-B_rRIojj.js";import{A as a}from"./Area-B0tZObQE.js";import{L as b}from"./Legend-Dq7ShxQ8.js";import{X as d}from"./XAxis-BNIlZlch.js";import{Y as g}from"./YAxis-D6e6Qj3m.js";import{T as h}from"./Tooltip-D5lRIm6g.js";import{R as u}from"./RechartsHookInspector-Dvolm171.js";import{A as v}from"./AreaChart-D13UqZ1W.js";import{C as T}from"./CartesianGrid-BpC0r6wr.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B2RXwXeU.js";import"./hooks-C7jgZ8ZG.js";import"./axisSelectors-Dmr46G9_.js";import"./zIndexSlice-fEtQltEu.js";import"./resolveDefaultProps-DMjdAuvI.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Dac5W46z.js";import"./chartDataContext-lkL8bl_R.js";import"./CategoricalChart-CwXcJ4KD.js";import"./Curve-Dmxl7Q3I.js";import"./types-CAlg1Faj.js";import"./Layer-NDmuZa_H.js";import"./ReactUtils-BZY6277w.js";import"./Label-D926DJYr.js";import"./Text-mcy7Wgv9.js";import"./DOMUtils-DAlT2U1x.js";import"./ZIndexLayer-hZNMFSqY.js";import"./ActivePoints-ColTAJU4.js";import"./Dot-BjkBWsnl.js";import"./RegisterGraphicalItemId-Cw9P8hA6.js";import"./GraphicalItemClipPath-C6n7_76l.js";import"./SetGraphicalItem-BipBgEa4.js";import"./useAnimationId-BmKrhVKp.js";import"./getRadiusAndStrokeWidthFromDot-DhHV37ye.js";import"./graphicalItemSelectors-C3EXFv3_.js";import"./Symbols-BBka0yme.js";import"./useElementOffset-DEG1gE-F.js";import"./iteratee-BzekVtn2.js";import"./CartesianAxis-BedncvxG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-Cw4BhdHo.js";import"./Rectangle-BxJQxHPh.js";import"./Sector-DQFWjz1_.js";import"./index-HMl1pmjv.js";import"./ChartSizeDimensions-aD96KjA6.js";import"./OffsetShower-BkNDrOWW.js";import"./PlotAreaShower-hX4_8FHk.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
