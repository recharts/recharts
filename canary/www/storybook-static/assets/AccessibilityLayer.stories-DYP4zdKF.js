import{e as t,r as A}from"./iframe-B_h1eZxb.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-CjquZQyc.js";import{C as l}from"./ComposedChart-DmYHdEo-.js";import{R as E}from"./arrayEqualityCheck-BQ7vn4Fs.js";import{A as a}from"./Area-E2LWIFKb.js";import{L as b}from"./Legend-CyfSve0g.js";import{X as d}from"./XAxis-Mxp9ktjo.js";import{Y as g}from"./YAxis-DgW-EgkF.js";import{T as h}from"./Tooltip-DpipJDfY.js";import{R as u}from"./RechartsHookInspector-CaskrBRm.js";import{A as v}from"./AreaChart-BHCJZzUK.js";import{C as T}from"./CartesianGrid-Dn1eke1q.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GoD8D7jd.js";import"./hooks-tOZxoK0e.js";import"./axisSelectors-BH0L-ggM.js";import"./zIndexSlice-DBtbpS_b.js";import"./resolveDefaultProps-B1vNlzd5.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BDgEI9ov.js";import"./chartDataContext-BQaQDl0i.js";import"./CategoricalChart-Ba1gSjPg.js";import"./Curve-BIskmgLq.js";import"./types-DbDrWtQW.js";import"./Layer-YFSiP5O_.js";import"./ReactUtils-DsQBac2C.js";import"./Label-B4qm1C3r.js";import"./Text-3ZnKfMzL.js";import"./DOMUtils-CPt0eNTU.js";import"./ZIndexLayer-O03ayMNB.js";import"./ActivePoints-BWqrE6Pi.js";import"./Dot-5EH031rg.js";import"./RegisterGraphicalItemId-DWqCI4mY.js";import"./GraphicalItemClipPath-CYkgNVtV.js";import"./SetGraphicalItem-BXR0TSlG.js";import"./useAnimationId-BJhibfpC.js";import"./getRadiusAndStrokeWidthFromDot-B64kjpoC.js";import"./graphicalItemSelectors-DbZWmw28.js";import"./Symbols-3gLai2FA.js";import"./useElementOffset-C7pRLK6G.js";import"./iteratee-JecoT9nP.js";import"./CartesianAxis-DOEAGTwm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-DBGWeScq.js";import"./Rectangle-EuLtLzS8.js";import"./Sector-CFscv7k5.js";import"./index-iiBRXnxx.js";import"./ChartSizeDimensions-KhnO1Uhi.js";import"./OffsetShower-DZ8KqkSb.js";import"./PlotAreaShower-CXGDRKi2.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
