import{r as A,R as t}from"./iframe-B87OnEHe.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CPmtdHf0.js";import{A as E}from"./AreaChart-BCpXAfIw.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-2Uj5TCaq.js";import{X as g}from"./XAxis-P4dvE_Lf.js";import{Y as h}from"./YAxis-CIV2IRSG.js";import{A as a}from"./Area-cVYv24Fj.js";import{T as u}from"./Tooltip-BGTHTN15.js";import{R as k}from"./zIndexSlice-CayLxsD5.js";import{L as v}from"./Legend-DWHYJm5C.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4kU4M5n.js";import"./resolveDefaultProps-BO6btQ4Q.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZJywaTf.js";import"./throttle-DxXe2fSX.js";import"./index-BAzLdDjX.js";import"./index-DvKC7fGa.js";import"./polarAxisSelectors-DUkdlQZC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoPllMsy.js";import"./index-BmBjwPgJ.js";import"./index-Cizw57Lu.js";import"./renderedTicksSlice-Db8-13BV.js";import"./index-DKiqyqcX.js";import"./CartesianChart-B_5wOWKW.js";import"./ZIndexPortal-BhrD04L0.js";import"./CategoricalChart-DOgCDtrc.js";import"./CartesianAxis-O93eF2fQ.js";import"./Layer-B5mZFZkh.js";import"./Text-DwFYMnaM.js";import"./pageBackground-CO_WqCks.js";import"./ZIndexLayer-v9eepHO2.js";import"./Label-CCuY2Era.js";import"./dataEntryStyles-B54Iq7xi.js";import"./types-CvQS_eYG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DteE4Y6d.js";import"./ActivePoints-Bws5v7as.js";import"./Dot-5T458_dG.js";import"./activeStyles-gtCHrDIH.js";import"./useAnimationId-DHS0idNw.js";import"./Symbols-C5l9Kmbi.js";import"./symbol-Bou66IFx.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-CXcrjxG2.js";import"./SetGraphicalItem-t5mD_xbz.js";import"./getRadiusAndStrokeWidthFromDot-tXoAwvPO.js";import"./ActiveShapeUtils-KYdt019M.js";import"./Curve-CzFk349I.js";import"./step-Dlj9Cqyz.js";import"./useEffectiveDataKey-D32F3nXW.js";import"./useElementOffset-BRYlrKrP.js";import"./uniqBy-V2CyeYbI.js";import"./iteratee-BGK8_Z9h.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DlkNvcOC.js";import"./Rectangle-XssNjNyZ.js";import"./util-Dxo8gN5i.js";import"./Sector-DlmqajRv.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
