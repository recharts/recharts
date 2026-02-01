import{e as t,r as A}from"./iframe-S3w8vazP.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DXKkF88H.js";import{C as l}from"./ComposedChart-Bs1sqtrj.js";import{R as E}from"./arrayEqualityCheck-CVVcuOqH.js";import{A as a}from"./Area-BkSFT0XD.js";import{L as b}from"./Legend-CY90PPf5.js";import{X as d}from"./XAxis-y9KwpsE4.js";import{Y as g}from"./YAxis-BLaSPofG.js";import{T as h}from"./Tooltip-CrYts5Zz.js";import{R as u}from"./RechartsHookInspector-BtEk5fyn.js";import{A as v}from"./AreaChart-DF6jCA5Y.js";import{C as T}from"./CartesianGrid-DDXkKXYO.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BglxN53s.js";import"./hooks-BIoyKUdn.js";import"./axisSelectors-C9fo5mxJ.js";import"./zIndexSlice-C8yB0SjJ.js";import"./resolveDefaultProps-DUh5CxZw.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Di7ZLiW9.js";import"./chartDataContext-C3H726Iv.js";import"./CategoricalChart-BpFyN0NS.js";import"./Curve-DzPn9elm.js";import"./types-46Crnp6z.js";import"./Layer-Dpjv3Z7H.js";import"./ReactUtils-DdWnBm1Y.js";import"./Label-BFw783un.js";import"./Text-Ch2i1yLS.js";import"./DOMUtils-BYd--jqE.js";import"./ZIndexLayer-DtdorfOg.js";import"./ActivePoints-Dejn0HsJ.js";import"./Dot-Bjvjl7Nl.js";import"./RegisterGraphicalItemId-B2X6SVeo.js";import"./GraphicalItemClipPath-D9qCdAxL.js";import"./SetGraphicalItem-BpO8akWh.js";import"./useAnimationId-Pi9wCxwd.js";import"./getRadiusAndStrokeWidthFromDot-aysjhdrr.js";import"./graphicalItemSelectors-bqgSTEDn.js";import"./Symbols-DWbc74gd.js";import"./useElementOffset-DsT0Vt7J.js";import"./iteratee-DBpy2Zkw.js";import"./CartesianAxis-CWMaA0v8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Cross-TvPCTj9A.js";import"./Rectangle-ClBH0-aW.js";import"./Sector-JtnSW-LM.js";import"./index-DLTKO4-0.js";import"./ChartSizeDimensions-DHpkkx7o.js";import"./OffsetShower-By9PfpSa.js";import"./PlotAreaShower-BawApXcc.js";const vt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
