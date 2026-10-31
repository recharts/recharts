import{r as A,R as t}from"./iframe-COxqCazb.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DWRPdfx_.js";import{A as E}from"./AreaChart-BxhKRFfh.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DGVWDWQH.js";import{X as g}from"./XAxis-DQrBzVHK.js";import{Y as h}from"./YAxis-ZsGxmqjy.js";import{A as a}from"./Area-Dayzia-L.js";import{T as u}from"./Tooltip-D5HdmfjY.js";import{R as k}from"./zIndexSlice-B4X5qRzI.js";import{L as v}from"./Legend-pYlKdEL-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-MgEDcD8h.js";import"./resolveDefaultProps-yMt3tC3j.js";import"./get-cF5BDHN6.js";import"./axisSelectors-uSjAZrah.js";import"./throttle-D4LJPOuI.js";import"./index-CmlNloJu.js";import"./index-BFPgWdWH.js";import"./polarAxisSelectors-a1oAG-SZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8xTnIof.js";import"./index-BQ5RDrN3.js";import"./index-BymcG2zO.js";import"./renderedTicksSlice-CPgi-eJ3.js";import"./index-BE8xWht0.js";import"./CartesianChart-lA_wA_-C.js";import"./ZIndexPortal-B9PAyW6q.js";import"./CategoricalChart-C0aYCun5.js";import"./CartesianAxis-CjYDk6nf.js";import"./Layer-D2zViLNQ.js";import"./Text-C4rvSXOn.js";import"./DOMUtils-BLBk64WL.js";import"./pageBackground-zdIyeBG0.js";import"./ZIndexLayer-cSzqGwkX.js";import"./Label-BiNM6_QG.js";import"./types-3E7AO6tV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-HVISG19w.js";import"./LabelList-DLxGydTH.js";import"./ActivePoints-DN4_EmYC.js";import"./Dot-DR7axIwT.js";import"./activeStyles-Dz5dwfdA.js";import"./useAnimationId-CI1eTN6X.js";import"./dataEntryStyles-DJkgxm7x.js";import"./Symbols-pJe31Clp.js";import"./symbol-DFh_91jg.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DfnH2C1-.js";import"./getRadiusAndStrokeWidthFromDot-gHegAbBA.js";import"./ActiveShapeUtils-DhrWvn7z.js";import"./Curve-C7Cjm8FO.js";import"./step-CbCZbxFO.js";import"./useEffectiveDataKey-DbCVmzAC.js";import"./useElementOffset-DaKnhcyx.js";import"./uniqBy-CV6Bdmxk.js";import"./iteratee-B9rlrEY4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Df7b1Ed4.js";import"./Rectangle-DcH1741B.js";import"./util-Dxo8gN5i.js";import"./Sector-ChBjKAX8.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
