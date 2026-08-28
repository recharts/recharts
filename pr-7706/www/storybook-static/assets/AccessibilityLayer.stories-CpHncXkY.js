import{r as A,R as t}from"./iframe-CIwxHuVP.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-D9qEBqM1.js";import{A as E}from"./AreaChart-fEYGNrba.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BhJ75ZQ_.js";import{X as g}from"./XAxis-CIHUnpyu.js";import{Y as h}from"./YAxis-COiio6CI.js";import{A as a}from"./Area-BsZtGFQV.js";import{T as u}from"./Tooltip-C8H5wACs.js";import{R as k}from"./zIndexSlice-4cOqtSJ1.js";import{L as v}from"./Legend-DvlL2ORD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-saup7v4_.js";import"./resolveDefaultProps-BqjvsCVB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-YcB3o8_5.js";import"./throttle-DyeZ31Gg.js";import"./index-DYcgeWKW.js";import"./index-BBY9vn-H.js";import"./isWellBehavedNumber-DnH2FQ7z.js";import"./d3-scale-BsCK15DF.js";import"./index-Dret-drz.js";import"./index-KtvOjFJW.js";import"./renderedTicksSlice-BymeN3Gd.js";import"./index-CgMi-XQz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BuIzZkiF.js";import"./chartDataContext-BnEwWcTU.js";import"./CategoricalChart-BsI6BCbz.js";import"./CartesianAxis-D27Sw88P.js";import"./Layer-QH0nRmzc.js";import"./Text-DdeI7QFK.js";import"./DOMUtils-DJmg_ALb.js";import"./useId-CvnBUwAn.js";import"./useBackwardsCompatibleTheme-CaEtd9Gi.js";import"./Label-P76xZGuB.js";import"./ZIndexLayer-DSlR-fbE.js";import"./types-CaxJYW3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CJSCuTfT.js";import"./useAnimationId-CRxHEUg9.js";import"./ActivePoints-DbUUlzxv.js";import"./Dot-USLgQRMp.js";import"./RegisterGraphicalItemId-Bx9h1qwh.js";import"./GraphicalItemClipPath-DfR7F3pr.js";import"./SetGraphicalItem-DCJicVim.js";import"./getRadiusAndStrokeWidthFromDot-CxoI2rZS.js";import"./ActiveShapeUtils-C_X8XuiV.js";import"./Curve-ByjfkPmA.js";import"./step-CKl1-sZu.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BMtT3rRV.js";import"./useElementOffset-C8fj9EDe.js";import"./uniqBy-Ck5EUTAW.js";import"./iteratee-Do4CuqXa.js";import"./Cross-BaBq-Hrh.js";import"./Rectangle-Dicx6LJz.js";import"./util-Dxo8gN5i.js";import"./Sector-DMRej8x1.js";import"./Symbols-DRT-U5W8.js";import"./symbol-D8FGjzG1.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
