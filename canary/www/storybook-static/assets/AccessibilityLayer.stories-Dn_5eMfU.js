import{r as A,R as t}from"./iframe-RJgsiaPL.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-De4rYWqF.js";import{A as E}from"./AreaChart-DHusao86.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DdILdtqv.js";import{X as g}from"./XAxis-D1NHLWzc.js";import{Y as h}from"./YAxis-BC94qFyI.js";import{A as a}from"./Area-DXxPyYVD.js";import{T as u}from"./Tooltip-DLD8jhoi.js";import{R as k}from"./zIndexSlice-CaPb3BS1.js";import{L as v}from"./Legend-BpJRPX2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rp6dEN_z.js";import"./resolveDefaultProps-B7TAC97Z.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BvLTD4U6.js";import"./throttle-2XjV57Y3.js";import"./index-CUt9-oqi.js";import"./index-CYBMXNtj.js";import"./isWellBehavedNumber-BCdm_Taf.js";import"./d3-scale-a8xW28JY.js";import"./index-DvWZFtCS.js";import"./index-Bde12l31.js";import"./renderedTicksSlice-AZZMQyv9.js";import"./index-CETpxp5N.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJVuJ2_B.js";import"./chartDataContext-DMrvaJTD.js";import"./CategoricalChart-BIS8XmXt.js";import"./CartesianAxis-BXFp-lIC.js";import"./Layer-CDx7YXT6.js";import"./Text-DZ5ZEdji.js";import"./DOMUtils-BwBerndY.js";import"./useId-D3absDYU.js";import"./useBackwardsCompatibleTheme-DcNVN6Kh.js";import"./Label-DPnPk4i3.js";import"./ZIndexLayer-BoWVhfOi.js";import"./types-C_mapbFf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ct76uSB6.js";import"./useAnimationId-DsRwG-rm.js";import"./ActivePoints-B4kNxET0.js";import"./Dot-RwYGEtPS.js";import"./RegisterGraphicalItemId-CnzhIxcb.js";import"./GraphicalItemClipPath-BmrXFZmB.js";import"./SetGraphicalItem-D4Kx71sv.js";import"./getRadiusAndStrokeWidthFromDot-BnbceeR1.js";import"./ActiveShapeUtils-BQ-YCn0D.js";import"./Curve-CFCl1kCW.js";import"./step-K1SJUhGX.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BL8Yfc_I.js";import"./useElementOffset-ZiVaw6LG.js";import"./uniqBy-DLupEHg_.js";import"./iteratee-DLy57EFC.js";import"./Cross-D6ax-tR9.js";import"./Rectangle-0ZcZVEk0.js";import"./util-Dxo8gN5i.js";import"./Sector-Cu3Rz7Q0.js";import"./Symbols-BfkRpYNl.js";import"./symbol-bC4XhbYr.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
