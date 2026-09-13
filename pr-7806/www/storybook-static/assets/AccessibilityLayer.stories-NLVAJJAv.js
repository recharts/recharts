import{r as A,R as t}from"./iframe-DMwBeJR9.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C1dXdi20.js";import{A as E}from"./AreaChart-BgguhxBm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DOILjndp.js";import{X as g}from"./XAxis-CXH1fd9N.js";import{Y as h}from"./YAxis-CzX5Dj-l.js";import{A as a}from"./Area-DXr7bFWr.js";import{T as u}from"./Tooltip-B2XNuoJR.js";import{R as k}from"./zIndexSlice-BP1SI4lk.js";import{L as v}from"./Legend-CQzlz703.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQf4ekbV.js";import"./resolveDefaultProps-FbHkIvMQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BzRm_10h.js";import"./throttle-JhdtWwel.js";import"./index-W8It9SHe.js";import"./index-CW9TVSnL.js";import"./isWellBehavedNumber-BWBsnwkO.js";import"./d3-scale-CTZXeK9y.js";import"./index-C4TxoYVJ.js";import"./index-KvfSCZEN.js";import"./renderedTicksSlice-Dl_Tlvvx.js";import"./index-CR-86fOk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C4QG-pAm.js";import"./chartDataContext-ClQA_jr_.js";import"./CategoricalChart-BZsjmvUf.js";import"./CartesianAxis-BJRJUBpp.js";import"./Layer-DMhp_Srr.js";import"./Text-BAFoSTNm.js";import"./DOMUtils-DtiMQzYq.js";import"./useId-BlKh4dfu.js";import"./useBackwardsCompatibleTheme-ujSziCXW.js";import"./Label-B67df_fL.js";import"./ZIndexLayer-CFNoJ68M.js";import"./types-CMazcurm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-H6knMzOg.js";import"./useAnimationId-1Z-BMfjp.js";import"./ActivePoints-BaKtG9_T.js";import"./Dot-CC7p1g3t.js";import"./RegisterGraphicalItemId-D2Rdl-pC.js";import"./GraphicalItemClipPath-DH2vwsgS.js";import"./SetGraphicalItem-BmbkJBqp.js";import"./getRadiusAndStrokeWidthFromDot-MjPGd6X0.js";import"./ActiveShapeUtils-D9qWvVvy.js";import"./Curve-BLRaA_Xy.js";import"./step-DujtKqi5.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-1ETpT5kl.js";import"./useElementOffset-BgsP0NQQ.js";import"./uniqBy-BrSK9-IV.js";import"./iteratee-IvuUwhdK.js";import"./Cross-0dAFBkGb.js";import"./Rectangle-eD4VGTbA.js";import"./util-Dxo8gN5i.js";import"./Sector-BhnsCJ2u.js";import"./Symbols-tCjh6GHl.js";import"./symbol-C5kjLuRU.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
