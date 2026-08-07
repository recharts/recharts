import{r as A,R as t}from"./iframe-B67xakaW.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DYPq6hki.js";import{A as E}from"./AreaChart-DCasfG_z.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CG4D2kRB.js";import{X as g}from"./XAxis-FKOR1g-7.js";import{Y as h}from"./YAxis-CgnEOw1P.js";import{A as a}from"./Area-DVqKNuHn.js";import{T as u}from"./Tooltip-BYC_rTBi.js";import{R as k}from"./zIndexSlice-D0TzJ1fR.js";import{L as v}from"./Legend-Cm48ptZU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cx8TqoHO.js";import"./index-CvOnsJ-w.js";import"./index-Dk_c5Xjv.js";import"./index-C636565A.js";import"./index-hWCiHkWI.js";import"./throttle-BKrvbeAi.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DXeKf5vs.js";import"./resolveDefaultProps-B29-kufx.js";import"./isWellBehavedNumber-ClgfPGEs.js";import"./d3-scale-DAYedkSi.js";import"./renderedTicksSlice-B7Sc1x4H.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BLDHGv8m.js";import"./chartDataContext-CfIiS_I3.js";import"./CategoricalChart-DgP4TH9i.js";import"./CartesianAxis-CPVS6EgD.js";import"./Layer-DydnlLJq.js";import"./Text-Cz97PcLA.js";import"./DOMUtils-B9paDAsr.js";import"./Label-DIs948ZI.js";import"./ZIndexLayer-Bldiyv4x.js";import"./types-CBHC2Uao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CKqExDZQ.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dlexmd5j.js";import"./useAnimationId-pFv40dAf.js";import"./ActivePoints-C6zOCKUI.js";import"./Dot-DQCUJJj2.js";import"./RegisterGraphicalItemId-Ci2aQjFq.js";import"./GraphicalItemClipPath-CLLzWZH-.js";import"./SetGraphicalItem-D_jFiRTP.js";import"./graphicalItemIdentity-7Y65Hlf3.js";import"./ActiveShapeUtils-i_QMKwre.js";import"./Curve-us0lQGQS.js";import"./step-BtzpbeJ-.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DZTsQwib.js";import"./useElementOffset-D4Es4Bm1.js";import"./uniqBy-C2sdVxSX.js";import"./iteratee-qHco-Mg-.js";import"./Cross-Bw_v2_li.js";import"./Rectangle-eKfFzmse.js";import"./util-Dxo8gN5i.js";import"./Sector-2_svyaSR.js";import"./Symbols-Qt_DOPis.js";import"./symbol-CsiZkFNB.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
