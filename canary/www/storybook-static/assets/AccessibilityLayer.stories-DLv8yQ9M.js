import{r as A,R as t}from"./iframe-Cy0y2ns8.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CZFSAvco.js";import{A as E}from"./AreaChart-DSH80-IN.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-vQeV11Fy.js";import{X as g}from"./XAxis-I6ByZryQ.js";import{Y as h}from"./YAxis-CsAJfuiU.js";import{A as a}from"./Area-kjat5t9S.js";import{T as u}from"./Tooltip-EYcLPG4A.js";import{R as k}from"./zIndexSlice-DIpYS2pc.js";import{L as v}from"./Legend-BMezv6hX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tnntysZI.js";import"./resolveDefaultProps-W2SA8EIl.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B794UmHN.js";import"./throttle-GHjNdOLX.js";import"./index-Cannfx1n.js";import"./index-MdLyaQUy.js";import"./isWellBehavedNumber-BHC-xMw7.js";import"./d3-scale-Bptb5_HU.js";import"./index-ed9S2gc_.js";import"./index-DMDvJQSi.js";import"./renderedTicksSlice-CcSlQNqm.js";import"./index-z8Y8cGgG.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CkZRPVAF.js";import"./chartDataContext-_Lx0KL5V.js";import"./CategoricalChart-C4X2uKz7.js";import"./CartesianAxis-DZCowAwb.js";import"./Layer-Dt1c85pW.js";import"./Text-CR6ssGu_.js";import"./pageBackground-C3xeFLUy.js";import"./useId-DoEOHgvO.js";import"./useBackwardsCompatibleTheme-DoDvRsUd.js";import"./Label-VahG2YbD.js";import"./ZIndexLayer-DfeIwWxW.js";import"./types-es-lSoS7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Cnxc9Yt_.js";import"./useAnimationId-DaE5gtmK.js";import"./dataEntryStyles-D42MsVUE.js";import"./ActivePoints-B8MUv4SH.js";import"./Dot-BhegBlK5.js";import"./GraphicalItemClipPath-ANLjpQPo.js";import"./SetGraphicalItem-jtlbfoJE.js";import"./getRadiusAndStrokeWidthFromDot-BVS64Mww.js";import"./ActiveShapeUtils-XGy6Fbre.js";import"./Curve-5eCLnpsK.js";import"./step-aUPxj0fJ.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BEJg52qX.js";import"./useElementOffset-sgSlwsLC.js";import"./uniqBy-9BG5xD31.js";import"./iteratee-D9gJLSIg.js";import"./Cross-c7XLk4es.js";import"./Rectangle-BAcsN_iB.js";import"./util-Dxo8gN5i.js";import"./Sector-CnsMqGLC.js";import"./Symbols-DCYwnKrZ.js";import"./symbol-CMOY-E8i.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
