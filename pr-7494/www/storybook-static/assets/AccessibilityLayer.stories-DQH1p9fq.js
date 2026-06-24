import{r as A,R as t}from"./iframe-BeltcMgq.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-naju1Utf.js";import{A as E}from"./AreaChart-BLwaBbA7.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-HasRi3wP.js";import{X as g}from"./XAxis-DT2umrlt.js";import{Y as h}from"./YAxis-Dm0u982e.js";import{A as a}from"./Area-BQsI6TaJ.js";import{T as u}from"./Tooltip-VcPokJLr.js";import{R as k}from"./zIndexSlice-ChbQV9za.js";import{L as v}from"./Legend-2zPRZsJk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-afo15-1c.js";import"./index-DN-_Sx45.js";import"./index-BWKSKuqG.js";import"./index-DdbLs963.js";import"./index-D1BJqAdU.js";import"./immer-BYDh_fcZ.js";import"./get-Blzhyn8O.js";import"./renderedTicksSlice-BWzIqvlP.js";import"./axisSelectors-DoBuhKXQ.js";import"./d3-scale-D9qfoPRi.js";import"./resolveDefaultProps-Bi5xr7q4.js";import"./isWellBehavedNumber-Ho-XzrAB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DU3tYN-2.js";import"./chartDataContext-BTBnexhV.js";import"./CategoricalChart-CYbFsyR9.js";import"./CartesianAxis-SUuO_eM5.js";import"./Layer-CtUZ3qxP.js";import"./Text-zWkWuZ8O.js";import"./DOMUtils-BiPI68kE.js";import"./Label-CRfC-ZbS.js";import"./ZIndexLayer-CXY-gIuZ.js";import"./types-BjpCNPaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Dkw2Nvms.js";import"./useAnimationId-CnyBiRCJ.js";import"./ActivePoints-Ba7rTZZ7.js";import"./Dot-BQsxsBTP.js";import"./RegisterGraphicalItemId-B1kcHgmx.js";import"./GraphicalItemClipPath-CSrYVdhv.js";import"./SetGraphicalItem-D8n7ZbTI.js";import"./getRadiusAndStrokeWidthFromDot-BvOJydOS.js";import"./ActiveShapeUtils-BaRNo4pA.js";import"./Curve-CGP8Kyx3.js";import"./step-BCv6lKfH.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-rHdypOwQ.js";import"./useElementOffset-RMclYIFs.js";import"./uniqBy-DrzaHxV1.js";import"./iteratee-CApTMtkb.js";import"./Cross-Cu-v3FDR.js";import"./Rectangle-tmcejSqz.js";import"./util-Dxo8gN5i.js";import"./Sector-D5WoZfqi.js";import"./Symbols-Db0C4PWO.js";import"./symbol-DG8eC_6U.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
