import{r as A,R as t}from"./iframe-yFUZOAXo.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CLIGRHzc.js";import{A as E}from"./AreaChart-BkLW1cyU.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DKf8gquh.js";import{X as g}from"./XAxis-VuWV4oHL.js";import{Y as h}from"./YAxis-Bm1MK_pl.js";import{A as a}from"./Area-DB9aMkim.js";import{T as u}from"./Tooltip-kufh7Sgn.js";import{R as k}from"./zIndexSlice-gBXHaIY6.js";import{L as v}from"./Legend-CuAsWV0B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bghi6ZRK.js";import"./resolveDefaultProps-B2yJhwFE.js";import"./get-CjriyByo.js";import"./axisSelectors-EZDSIF5u.js";import"./redux-toolkit.esm-D_pQmptz.js";import"./index-CHzPnfIT.js";import"./index-5xbZMWg1.js";import"./polarAxisSelectors-CFbKEyZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BRWdQdSe.js";import"./index-PETS0UhS.js";import"./index-BK6Ilp-H.js";import"./renderedTicksSlice-CilCeieo.js";import"./index-CtXM72i0.js";import"./fillDefinitions-IzAh6C3K.js";import"./CartesianChart-C-z-JDjQ.js";import"./chartDataContext-BbJwl4x7.js";import"./CategoricalChart-D9q-ZVsT.js";import"./CartesianAxis-Cl0edJ8g.js";import"./Layer-DccvzxoJ.js";import"./Text-gRe7KF5h.js";import"./ZIndexLayer-BFOdALhB.js";import"./Label-C38PHRGq.js";import"./types-DUCsLnxG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-a_asEMsX.js";import"./dataEntryStyles-D7kCW6zO.js";import"./ActivePoints-EuxxAYs7.js";import"./Dot-BxahtCeT.js";import"./activeStyles-DarVPLRL.js";import"./useAnimationId-JmfqkQro.js";import"./Symbols-BNaTe5h-.js";import"./symbol-qTHekaJz.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-ClWcTtiF.js";import"./ActiveShapeUtils-CycVwTKF.js";import"./Curve-YzirgrH8.js";import"./step-BqjoQNYS.js";import"./useEffectiveDataKey-DPchhFnV.js";import"./getUniqPayload-DAvcTrd6.js";import"./uniqBy-DOg5MgEB.js";import"./iteratee-BGJ_B21x.js";import"./isArguments-yB-y1yaH.js";import"./Cross-qaIs1wuS.js";import"./Rectangle-Btd8NkER.js";import"./util-Dxo8gN5i.js";import"./Sector-Bh9Zkm4g.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
