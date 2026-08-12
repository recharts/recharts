import{r as A,R as t}from"./iframe-BIMbD8mx.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BBbivD2D.js";import{A as E}from"./AreaChart-9E7Ozt_6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-zFs8ZGAv.js";import{X as g}from"./XAxis-79yd8ZPy.js";import{Y as h}from"./YAxis-yZR3Ev9U.js";import{A as a}from"./Area-BOxNnHWa.js";import{T as u}from"./Tooltip-CWcALCEY.js";import{R as k}from"./zIndexSlice-wO_dW_9z.js";import{L as v}from"./Legend-coXETLK_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-QNCP9nY0.js";import"./index-A5Cgym80.js";import"./index-BP-geqPm.js";import"./index-DwWghGbc.js";import"./index-BRQlGlsm.js";import"./throttle-DiXkeT8N.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BtNyQa3m.js";import"./resolveDefaultProps-CZ6QiDkA.js";import"./isWellBehavedNumber-CazuspJq.js";import"./d3-scale-DL9ezE1-.js";import"./renderedTicksSlice-B-RvvD_k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CABLVMKg.js";import"./chartDataContext-CXOVrzNd.js";import"./CategoricalChart-rgEOMHEL.js";import"./CartesianAxis-B1RojcCV.js";import"./Layer-1Cdcr0Iy.js";import"./Text-D6zl2tjY.js";import"./DOMUtils-DjDyXH_P.js";import"./RechartsThemeContext-BjZ7jnPh.js";import"./Label-DfQOptl9.js";import"./ZIndexLayer-YpWri7rk.js";import"./types-Dp-Ax4LT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-QaKLnfOP.js";import"./useAnimationId-hHgrQgML.js";import"./ActivePoints-BrY5sxJW.js";import"./Dot-N76mer2J.js";import"./RegisterGraphicalItemId-DN1O3Sjb.js";import"./GraphicalItemClipPath-nqtdT7cB.js";import"./SetGraphicalItem-DRMG3qH2.js";import"./getRadiusAndStrokeWidthFromDot-Dpt2Y5Zj.js";import"./ActiveShapeUtils-CBR4xzcn.js";import"./Curve-BJXCkxMN.js";import"./step-O2UOarbe.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D596YBmA.js";import"./useElementOffset-678MNwLN.js";import"./uniqBy-BwBRvZ4r.js";import"./iteratee-BcVPr63I.js";import"./Cross-Dc-kmE9q.js";import"./Rectangle-DSfjoyTs.js";import"./util-Dxo8gN5i.js";import"./Sector-CktWcgyk.js";import"./Symbols-BuDeeCqi.js";import"./symbol-BfJA77nw.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
