import{r as A,R as t}from"./iframe-CMVn_SNm.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CtvSTeFH.js";import{A as E}from"./AreaChart-CmGhIeLb.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Wjo40xqZ.js";import{X as g}from"./XAxis-BK_m78bZ.js";import{Y as h}from"./YAxis-8PetJcY4.js";import{A as a}from"./Area-VlVCwSbH.js";import{T as u}from"./Tooltip-Dbl1c9aE.js";import{R as k}from"./zIndexSlice-5bfS2JCG.js";import{L as v}from"./Legend-_-zNynGN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcTKM8HZ.js";import"./index-DgABY5rS.js";import"./index-o3wTHYCY.js";import"./index-BHUmbQo-.js";import"./index-BNNprLMB.js";import"./immer-BrNA81ld.js";import"./get-CIPBGhdg.js";import"./renderedTicksSlice-B8N2zN9Q.js";import"./axisSelectors-Dk5pLmzI.js";import"./d3-scale-p_vnFVNW.js";import"./resolveDefaultProps-CRaaAotp.js";import"./isWellBehavedNumber-C4Dcoy8i.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bhmmmn5c.js";import"./chartDataContext-Dg2f8fbZ.js";import"./CategoricalChart-DUjGX6JP.js";import"./CartesianAxis-HAFu0ua0.js";import"./Layer-NKsa_8yv.js";import"./Text-DjHHlwuG.js";import"./DOMUtils-DEDVnuPv.js";import"./Label-DCWSGF-w.js";import"./ZIndexLayer-qzvYtv-n.js";import"./types-DXSGjGm9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-i8neEi91.js";import"./useAnimationId-DARzAta0.js";import"./ActivePoints-BTW7Abvw.js";import"./Dot-BUoSKBIz.js";import"./RegisterGraphicalItemId-B5nu-pPZ.js";import"./GraphicalItemClipPath-CTln66En.js";import"./SetGraphicalItem-rX6NUfmr.js";import"./getRadiusAndStrokeWidthFromDot-CIJw8Q-v.js";import"./ActiveShapeUtils-DbnUcZo7.js";import"./Curve-Bldv1TQU.js";import"./step-BXHdJ1Cz.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CVpIZw14.js";import"./useElementOffset-C51qjBi2.js";import"./uniqBy-DICaK5oX.js";import"./iteratee-C6Ehk9Ya.js";import"./Cross-sXi5GBj7.js";import"./Rectangle-DOnpVfWW.js";import"./util-Dxo8gN5i.js";import"./Sector-BnI29xdT.js";import"./Symbols-C8L8AvrN.js";import"./symbol-BJC98dA9.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
