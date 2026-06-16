import{r as A,R as t}from"./iframe-Cgvurs-_.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CzftpN1s.js";import{A as E}from"./AreaChart-D9V4IFhD.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CGp0VVQ0.js";import{X as g}from"./XAxis-CfwTV-KQ.js";import{Y as h}from"./YAxis-BXqkMu3a.js";import{A as a}from"./Area-DVl5jyaa.js";import{T as u}from"./Tooltip-DBJ0bUIr.js";import{R as k}from"./zIndexSlice-B_EZWJad.js";import{L as v}from"./Legend-D-00xTEP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dz-OqOgD.js";import"./index-BumewqgT.js";import"./index-COSZGJYp.js";import"./index-qEaPtvJ4.js";import"./index-DUeZpKgX.js";import"./immer-BqIPbCUY.js";import"./get-DKeAvde6.js";import"./renderedTicksSlice-CFCAMk-H.js";import"./axisSelectors-Qbk3cIqD.js";import"./d3-scale-C6AR89xW.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CKD-pks7.js";import"./isWellBehavedNumber-wdbvvMft.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-F9cdjQs_.js";import"./chartDataContext-D5SqleTT.js";import"./CategoricalChart-vxMjiHHj.js";import"./CartesianAxis-BZbrDelp.js";import"./Layer-BfP1S3qE.js";import"./Text-BoAtXQm_.js";import"./DOMUtils-DYR9owTl.js";import"./Label-CsnYNS62.js";import"./ZIndexLayer-CAbZgrje.js";import"./types-bZuMx1t8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DU8uToRY.js";import"./useAnimationId-DTgCoSkV.js";import"./ActivePoints-ByYPPJm9.js";import"./Dot-CWR0wmvP.js";import"./RegisterGraphicalItemId-Dza9jiXm.js";import"./GraphicalItemClipPath-BYm3GjGL.js";import"./SetGraphicalItem-B22TqrnA.js";import"./getRadiusAndStrokeWidthFromDot-CpehKYWF.js";import"./ActiveShapeUtils-mXcowNCt.js";import"./Curve-fHqvHXD4.js";import"./step-BqWVDUYB.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DwW4vJEc.js";import"./useElementOffset-BwaQaS3A.js";import"./uniqBy-6bgl0NGd.js";import"./iteratee-_BM_Lsph.js";import"./Cross-sKVT2Eib.js";import"./Rectangle-SDGp320Q.js";import"./Sector-oFfzS_Kk.js";import"./Symbols-Dm791b9Q.js";import"./symbol-DNYQHQcv.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
