import{P as A,c as t}from"./iframe-DmBQ8HMz.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-DNElitZJ.js";import{A as E}from"./AreaChart-BV6dm1wA.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-DF0OJWzH.js";import{X as g}from"./XAxis-BaDVYnrk.js";import{Y as h}from"./YAxis-D8ss-GGA.js";import{A as a}from"./Area-COz49T4C.js";import{T as u}from"./Tooltip-ggIM9FnY.js";import{g as k}from"./zIndexSlice-DIRHIjeL.js";import{L as v}from"./Legend-CvCXD82i.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DWg7_V2c.js";import"./index-o0mRVwTr.js";import"./index-Drn3R5Q6.js";import"./index-kdRFnVq9.js";import"./index-RSqbnpUZ.js";import"./immer-CvETSy6i.js";import"./get-Ckx5uNL8.js";import"./renderedTicksSlice-DVSCP4nP.js";import"./axisSelectors-COTb3exH.js";import"./d3-scale-CE7Es6uL.js";import"./resolveDefaultProps-DuJ2-4bL.js";import"./isWellBehavedNumber-BHVm_SNT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-uAfb6KQX.js";import"./chartDataContext-CpJyWUlD.js";import"./CategoricalChart-DUJKtdcW.js";import"./CartesianAxis-B9da2UAY.js";import"./Layer-BhYZ1XdM.js";import"./Text-DDANB2NF.js";import"./DOMUtils-o09_GivZ.js";import"./Label-C1M61kae.js";import"./ZIndexLayer-eAbRrt0r.js";import"./types-DUdiMbO-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Ddn0Q7My.js";import"./step-CN9Am_zJ.js";import"./path-DyVhHtw_.js";import"./ReactUtils-DKCxnkHT.js";import"./ActivePoints-BCqOvBdY.js";import"./Dot-nij0AL23.js";import"./RegisterGraphicalItemId-Dup5UL4N.js";import"./GraphicalItemClipPath-pcxJ2TmH.js";import"./SetGraphicalItem-CsbBVlmH.js";import"./useAnimationId-BZ5U8z_o.js";import"./getRadiusAndStrokeWidthFromDot-CZpBgath.js";import"./graphicalItemSelectors-CAXxuBta.js";import"./useElementOffset-DsYLvXSH.js";import"./uniqBy-KElqJvHA.js";import"./iteratee-D3O-hQgd.js";import"./Cross-C3zVbeHE.js";import"./Rectangle-i0rACkhx.js";import"./Sector-DfvY5sWv.js";import"./Symbols-L1gtdK7X.js";import"./symbol-D5N6_vHE.js";const It={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Lt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Lt as __namedExportsOrder,It as default};
