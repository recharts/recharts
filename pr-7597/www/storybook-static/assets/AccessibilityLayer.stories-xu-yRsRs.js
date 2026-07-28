import{r as A,R as t}from"./iframe-BpGtcNOk.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-B3v6uaK5.js";import{A as E}from"./AreaChart-DqQoodxi.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BVqjpfKu.js";import{X as g}from"./XAxis-xA3C2iEm.js";import{Y as h}from"./YAxis-CzpQ82Ya.js";import{A as a}from"./Area-BjWIbToj.js";import{T as u}from"./Tooltip-B_Inm8uT.js";import{R as k}from"./zIndexSlice-BUkXJe7m.js";import{L as v}from"./Legend-CQdudEPA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8zW8Q-QW.js";import"./index-CWPU6MDT.js";import"./index-B2c9XwPD.js";import"./index-CHBEpFe4.js";import"./index-CEaO1Ily.js";import"./throttle-D7JHSkAt.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CgSHpo4d.js";import"./axisSelectors-DvNlgVd_.js";import"./resolveDefaultProps-Bzz9qGby.js";import"./isWellBehavedNumber-CgtKnfGk.js";import"./d3-scale-BIg-AE9c.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D_T5BGrl.js";import"./chartDataContext-BnIwxX66.js";import"./CategoricalChart-cfDxlkao.js";import"./CartesianAxis-C36sPR-f.js";import"./Layer-CuHhWFqD.js";import"./Text-C5eSQgGe.js";import"./DOMUtils-Bd2Qm1G_.js";import"./Label-CVd1F7qG.js";import"./ZIndexLayer-Cu4Swk1f.js";import"./types-CFaUoyvU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CLwClxTv.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-I1ECyx5O.js";import"./useAnimationId-B7_Ne5YB.js";import"./ActivePoints-Bk3RD_iz.js";import"./Dot-DC3GiKbg.js";import"./RegisterGraphicalItemId-fTSs4quI.js";import"./GraphicalItemClipPath-CBj-Oygo.js";import"./SetGraphicalItem-Dc3K4Fiu.js";import"./getRadiusAndStrokeWidthFromDot-DErAjZBx.js";import"./ActiveShapeUtils-BdR0GCmt.js";import"./Curve-DyH_liqO.js";import"./step-BGQUnAp4.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CxriLMeL.js";import"./useElementOffset-DPOTi7dF.js";import"./uniqBy-CRLvWKL0.js";import"./iteratee-B4OnOvXg.js";import"./Cross-DFN9xvam.js";import"./Rectangle-1PkWZRq5.js";import"./util-Dxo8gN5i.js";import"./Sector-DAj_BRZU.js";import"./Symbols-DX3n3dc6.js";import"./symbol-DLa0yamx.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
