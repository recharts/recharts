import{r as A,R as t}from"./iframe-B8oHBE2B.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-D7HXrnrm.js";import{A as E}from"./AreaChart-DM_pKL1I.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-2imRBn1n.js";import{X as g}from"./XAxis-ZjtmoAYX.js";import{Y as h}from"./YAxis-xlwnxq94.js";import{A as a}from"./Area-DiffzYiv.js";import{T as u}from"./Tooltip-B9TIEJjx.js";import{R as k}from"./zIndexSlice-CY69X-_e.js";import{L as v}from"./Legend-DfVTvwto.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DFBUYq9O.js";import"./resolveDefaultProps-CgUiyAYX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ds5h7JK9.js";import"./throttle-CUYrrG0C.js";import"./index-DmSsi07Q.js";import"./index-cJCZbnBh.js";import"./polarAxisSelectors-D2FYbhjQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CbMuV4Xw.js";import"./index-DMrvH4_y.js";import"./index-DGZRfgJf.js";import"./renderedTicksSlice-a5-uxQKT.js";import"./index-BO756sza.js";import"./fillDefinitions-DKQEn6JZ.js";import"./CartesianChart-Cx94wGq6.js";import"./chartDataContext-DF9RfUto.js";import"./CategoricalChart-B_DdruJc.js";import"./CartesianAxis-DLXM_Mrp.js";import"./Layer-d-LKmDNk.js";import"./Text-CvT3zU9x.js";import"./ZIndexLayer-ctGMKsDO.js";import"./Label-Do0pS3hb.js";import"./types-pqA8tR2L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BdZkCN9m.js";import"./ActivePoints-Cp4H5Nc6.js";import"./Dot-BJ0YQTw_.js";import"./activeStyles-B9e3PXPC.js";import"./useAnimationId-DstXvFRQ.js";import"./Symbols-DlTVDDFq.js";import"./symbol-DwKqx-k1.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CNXf_JK1.js";import"./getRadiusAndStrokeWidthFromDot-CwP227yr.js";import"./ActiveShapeUtils-DvU5i_JD.js";import"./Curve-DGAKYDzB.js";import"./step-BZkNkw_J.js";import"./useEffectiveDataKey-R28HVoPp.js";import"./useElementOffset-BUgTmqWV.js";import"./uniqBy-CWI3Th2f.js";import"./iteratee-BSURygRC.js";import"./isArguments-yB-y1yaH.js";import"./Cross-QgFbzuj_.js";import"./Rectangle-DSfNDwxH.js";import"./util-Dxo8gN5i.js";import"./Sector-CVmZoiCJ.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
