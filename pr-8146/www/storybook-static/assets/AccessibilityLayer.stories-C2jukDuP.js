import{r as A,R as t}from"./iframe-BSZdIOb1.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CDWJbZ6n.js";import{A as E}from"./AreaChart-D24sKAS2.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CjVxY4bS.js";import{X as g}from"./XAxis-G0FofNWa.js";import{Y as h}from"./YAxis-BidQV3Bs.js";import{A as a}from"./Area-DhrgwX1F.js";import{T as u}from"./Tooltip-CqW2RsM8.js";import{R as k}from"./zIndexSlice-x95uaAeG.js";import{L as v}from"./Legend-DTU0g8fL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BkCZoC17.js";import"./resolveDefaultProps-D3SG1Voa.js";import"./get-cF5BDHN6.js";import"./axisSelectors-YkanTYDO.js";import"./throttle-CSUb4-AW.js";import"./index-MExGibHi.js";import"./index-zsHkXx4R.js";import"./polarAxisSelectors-3PQGkC2Y.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-4UnkzbhN.js";import"./index-bJBh3omb.js";import"./index-TMoyXsD5.js";import"./renderedTicksSlice-BJuGaZyZ.js";import"./index-KnfBFAge.js";import"./fillDefinitions-DxVVI7tr.js";import"./CartesianChart-Bw5m5b1-.js";import"./ZIndexPortal-4kIQjZh0.js";import"./CategoricalChart-DA0Cyxxs.js";import"./CartesianAxis-DAsXTQiH.js";import"./Layer-uHX297jU.js";import"./Text-Bz3RDDRF.js";import"./DOMUtils-bqeGnrQd.js";import"./ZIndexLayer-yq1Eddx2.js";import"./Label-Cim8hMW4.js";import"./types-Dvrgl9IY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-lC_U3aX6.js";import"./ActivePoints-x8Ig6mBR.js";import"./Dot-BTQ1Y3aj.js";import"./activeStyles-DKcFBEEB.js";import"./useAnimationId-CA_zjy4c.js";import"./dataEntryStyles-CFBEHlKQ.js";import"./Symbols-CWFcXiNy.js";import"./symbol-DRMp_7qO.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C-eJsLZg.js";import"./getRadiusAndStrokeWidthFromDot-CVUy3O5W.js";import"./ActiveShapeUtils-D_M0EMWZ.js";import"./Curve-ClwfprbW.js";import"./step-DTMXh9wp.js";import"./useEffectiveDataKey-e2XyZYHS.js";import"./useElementOffset-d8UGFEqu.js";import"./uniqBy-BVEW4IKF.js";import"./iteratee-dTH4fWHS.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BJ4HZEIQ.js";import"./Rectangle-CmV7ANCN.js";import"./util-Dxo8gN5i.js";import"./Sector-BvCyOl-r.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
