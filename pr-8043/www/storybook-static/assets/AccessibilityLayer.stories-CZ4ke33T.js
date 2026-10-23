import{r as A,R as t}from"./iframe-x9YCwuVc.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-vHYW6JZh.js";import{A as E}from"./AreaChart-CbTp43rX.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dj6fKyXJ.js";import{X as g}from"./XAxis-DOrrA_AO.js";import{Y as h}from"./YAxis-CcW9nNm_.js";import{A as a}from"./Area-D_5oQPJV.js";import{T as u}from"./Tooltip-CXDzUWmd.js";import{R as k}from"./zIndexSlice-BV1eDa8t.js";import{L as v}from"./Legend-6UoBpxle.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DuSi3yuo.js";import"./resolveDefaultProps-IMSWVxjI.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DUrnAUTK.js";import"./throttle-CFpl0b0L.js";import"./index-4vAc-1PY.js";import"./index-_DnjTFHH.js";import"./isWellBehavedNumber-BfcoqVbY.js";import"./d3-scale-DeFHX2Lm.js";import"./index-CnDSa4vm.js";import"./index-BC1Gmj01.js";import"./renderedTicksSlice-BQZVpqNr.js";import"./index-BC2a9-E_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-pmy50aWE.js";import"./chartDataContext-CCIkzP_F.js";import"./CategoricalChart-DqHAXNep.js";import"./CartesianAxis-C1FOk_u6.js";import"./Layer-byU46PKm.js";import"./Text-COBhbjuo.js";import"./pageBackground-TE-MQad5.js";import"./useId-CMngnmGp.js";import"./useBackwardsCompatibleTheme-BQTuAdi2.js";import"./Label-BWVi17tM.js";import"./ZIndexLayer-DrSAG7iO.js";import"./dataEntryStyles-Drm_aJ2X.js";import"./types-fCYwQ83-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-B5NsC4ZM.js";import"./useAnimationId-DxnlQorl.js";import"./ActivePoints-BL8qk4Kh.js";import"./Dot-B98z2wU8.js";import"./RegisterGraphicalItemId-DNM5emxE.js";import"./GraphicalItemClipPath-DXDK6Y35.js";import"./SetGraphicalItem-D1wyT9-l.js";import"./getRadiusAndStrokeWidthFromDot-DRWTNSpx.js";import"./ActiveShapeUtils-CYeGEQWR.js";import"./Curve-8b-Qxogq.js";import"./step-DWJVpFVS.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-D48S_iiZ.js";import"./useElementOffset-Q7vbrrOH.js";import"./uniqBy-bvQ6Ay4K.js";import"./iteratee-_rf4IMM8.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B9ZBBQd6.js";import"./Rectangle-B-VzFgv3.js";import"./util-Dxo8gN5i.js";import"./Sector-e9C-YfcB.js";import"./Symbols-BrPTbFSx.js";import"./symbol-DYEAEcXk.js";const Xt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ot=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ot as __namedExportsOrder,Xt as default};
