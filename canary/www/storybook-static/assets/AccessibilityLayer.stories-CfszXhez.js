import{r as A,R as t}from"./iframe-DnRkZCcZ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DAKOEFgJ.js";import{A as E}from"./AreaChart-CxqoNVAC.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-hU5F1JD4.js";import{X as g}from"./XAxis-DPYXDMnu.js";import{Y as h}from"./YAxis-CL5uWkoX.js";import{A as a}from"./Area-B1kSsJqf.js";import{T as u}from"./Tooltip-wJ4R_9Xj.js";import{R as k}from"./zIndexSlice-DwWcIzrA.js";import{L as v}from"./Legend-CA1OSly7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9w9bgII.js";import"./resolveDefaultProps-CKyaaGET.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BG0FGZa0.js";import"./throttle-bNdHLYfF.js";import"./index-B8arTVtL.js";import"./index-D7PdTPCI.js";import"./polarAxisSelectors-WP4kwRUA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DjImCkyz.js";import"./index-Cppy_ggM.js";import"./index-BXa8wql-.js";import"./renderedTicksSlice-qkBzJXk3.js";import"./index-BKTGKznB.js";import"./fillDefinitions-B6SeDiRz.js";import"./CartesianChart-lnVa2-zz.js";import"./chartDataContext-C9AcD8jJ.js";import"./CategoricalChart-DJEPvlGT.js";import"./CartesianAxis-CI0fZc9H.js";import"./Layer-ziHQUSdD.js";import"./Text-CdYpRkXo.js";import"./ZIndexLayer-Cfgieq6O.js";import"./Label-DX2yrrpT.js";import"./types-DV0KiZQI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CMeF7NbT.js";import"./dataEntryStyles-BgjT13Al.js";import"./ActivePoints-CRsFnWGy.js";import"./Dot-CK54vFWX.js";import"./activeStyles-DRi4KJX5.js";import"./useAnimationId-p0AfOAw0.js";import"./Symbols-DOGEiW8S.js";import"./symbol-BhVTcXut.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Cr3rFtC8.js";import"./ActiveShapeUtils-sdvrDPyr.js";import"./Curve-QoxdgH9q.js";import"./step-CKBO-I2d.js";import"./useEffectiveDataKey-BIuaq2EX.js";import"./useElementOffset-DMMTuYam.js";import"./uniqBy-DI2IzLG0.js";import"./iteratee-guzWnx9p.js";import"./isArguments-yB-y1yaH.js";import"./Cross-p5xAMhDn.js";import"./Rectangle-EcRxuzMl.js";import"./util-Dxo8gN5i.js";import"./Sector-BXNROzdl.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
