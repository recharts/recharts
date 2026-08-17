import{r as A,R as t}from"./iframe-D_SBmach.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-D6p63Jnk.js";import{A as E}from"./AreaChart-j_ih6Yn_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CtMN1VZ-.js";import{X as g}from"./XAxis-DH-ZgwOK.js";import{Y as h}from"./YAxis-DDmw5Iip.js";import{A as a}from"./Area-BmqModuK.js";import{T as u}from"./Tooltip-B3XzVpFR.js";import{R as k}from"./zIndexSlice-C-84-lKY.js";import{L as v}from"./Legend-DMOWzC1s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFoCu-Y8.js";import"./index-rdN2tPCT.js";import"./index-Dl7bNBwv.js";import"./index-cqta4xpR.js";import"./index-B3RrYXmh.js";import"./throttle-Dlx_LjAj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-T3miAVW7.js";import"./resolveDefaultProps-Bvyrx_D_.js";import"./isWellBehavedNumber-CqdfCsRm.js";import"./d3-scale-BqLpL1Tc.js";import"./renderedTicksSlice-D04XWQ7B.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-TtiOfZnr.js";import"./chartDataContext-DBogxY-2.js";import"./CategoricalChart-lLmfaMcS.js";import"./CartesianAxis-BQ5_-jT8.js";import"./Layer-Be605v_j.js";import"./Text-Bw10gxla.js";import"./DOMUtils-DrunKDJC.js";import"./useBackwardsCompatibleTheme-CD7phNhZ.js";import"./Label-CdDqsnQd.js";import"./ZIndexLayer-B6Mf8DJp.js";import"./types-CKo4Bnww.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DZGph_C9.js";import"./useAnimationId-BA2h0Ua8.js";import"./ActivePoints-CURbINes.js";import"./Dot-CVIHEjDA.js";import"./RegisterGraphicalItemId-Cdozmspz.js";import"./GraphicalItemClipPath-D8_vcKpW.js";import"./SetGraphicalItem-BiSwI4Xl.js";import"./getRadiusAndStrokeWidthFromDot-Cq9L4k3r.js";import"./ActiveShapeUtils-CZ0w88RB.js";import"./Curve-Mu286cSN.js";import"./step-DTNf_sWS.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DMdb4hau.js";import"./useElementOffset-DsoUZQYy.js";import"./uniqBy-DSeKXx74.js";import"./iteratee-C0hKcmwL.js";import"./Cross-BsquGNoJ.js";import"./Rectangle-DL8Pps38.js";import"./util-Dxo8gN5i.js";import"./Sector-DVBc4NAA.js";import"./Symbols-BcJmvpQX.js";import"./symbol-D3RE43u2.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
