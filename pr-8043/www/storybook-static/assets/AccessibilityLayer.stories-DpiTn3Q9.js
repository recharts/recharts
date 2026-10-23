import{r as A,R as t}from"./iframe-prTVX46R.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-JM9IJLAu.js";import{A as E}from"./AreaChart-BRDuw9MW.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-S_RK1IMs.js";import{X as g}from"./XAxis-CAekIzf1.js";import{Y as h}from"./YAxis-BP1gJNh-.js";import{A as a}from"./Area-Im90c1HG.js";import{T as u}from"./Tooltip-hoRkM0Mq.js";import{R as k}from"./zIndexSlice-BBM3QNxr.js";import{L as v}from"./Legend-BKupqERZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3mCvzlT.js";import"./resolveDefaultProps-CgD2AS6S.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C2RKwHTh.js";import"./throttle-DvEGNDvN.js";import"./index-DxBxvBWq.js";import"./index-Bh60i1A4.js";import"./isWellBehavedNumber-sGfX6V07.js";import"./d3-scale-CFQbB9BF.js";import"./index-BB-SpmyJ.js";import"./index-DnW1VngH.js";import"./renderedTicksSlice-iUiCR_an.js";import"./index-BQtEBMtF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5BTPRp4.js";import"./chartDataContext-C7eScBxX.js";import"./CategoricalChart-DhkwWrJ_.js";import"./CartesianAxis-vl41q2bl.js";import"./Layer-1a5Zn_r7.js";import"./Text-DjfbNrah.js";import"./pageBackground-DWO83YrS.js";import"./useId-ClNpWPkJ.js";import"./useBackwardsCompatibleTheme-CSXD7-a6.js";import"./Label-CVltcmCw.js";import"./ZIndexLayer-BUy73e0U.js";import"./dataEntryStyles-D6au6UrY.js";import"./types-D57XnYuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-DLUKuBq3.js";import"./useAnimationId-BWMAKk3V.js";import"./ActivePoints-BByUh20Z.js";import"./Dot-B6R-m7zq.js";import"./RegisterGraphicalItemId-Cwh2uO7M.js";import"./GraphicalItemClipPath-BBiEKuCI.js";import"./SetGraphicalItem-FbCkTx_q.js";import"./getRadiusAndStrokeWidthFromDot-GrV3uc-f.js";import"./ActiveShapeUtils-CXxeeNqe.js";import"./Curve-CuhJA6qj.js";import"./step-DkGj8L15.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-Byody78s.js";import"./useElementOffset-BcZCpHmW.js";import"./uniqBy-GbBgnUco.js";import"./iteratee-CH0cPLcN.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DSI7tRai.js";import"./Rectangle-3LSQXoSu.js";import"./util-Dxo8gN5i.js";import"./Sector-DsyWTF3x.js";import"./Symbols-woS2u2gC.js";import"./symbol-ChpfS0ot.js";const Xt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ot=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
