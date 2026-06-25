import{r as A,R as t}from"./iframe-DlHhS40N.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BU1MizAG.js";import{A as E}from"./AreaChart-PKcEJ46v.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CIzmoIHy.js";import{X as g}from"./XAxis-BYYxNJmZ.js";import{Y as h}from"./YAxis-Co8rzPpk.js";import{A as a}from"./Area-CNjXuovH.js";import{T as u}from"./Tooltip-BtHSkzPH.js";import{R as k}from"./zIndexSlice-BvmXOpzL.js";import{L as v}from"./Legend-Box85XiO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQ3sg0O8.js";import"./index-BvgD5YGJ.js";import"./index-BmuILyMJ.js";import"./index-BUtjLbCz.js";import"./index-eOMfBDqm.js";import"./immer-C3uuw8B2.js";import"./get-BPDhRHlu.js";import"./renderedTicksSlice-DXDO0JDp.js";import"./axisSelectors-pVGzxNLo.js";import"./d3-scale-Be18i-DH.js";import"./resolveDefaultProps-4rQlADP4.js";import"./isWellBehavedNumber-BWgZXzoO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DhGeGokB.js";import"./chartDataContext-DsGTg2xD.js";import"./CategoricalChart-CoJqtrPl.js";import"./CartesianAxis-CWmejQ4H.js";import"./Layer-DqnJz-la.js";import"./Text-C8e4MCrJ.js";import"./DOMUtils-BzX9kZMs.js";import"./Label-CKxxcWab.js";import"./ZIndexLayer-BO_RiOSE.js";import"./types-CJTuBoPn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DaDDpUgR.js";import"./useAnimationId-BsYp4mlV.js";import"./ActivePoints-Bbf_RAsZ.js";import"./Dot-C-4HVrb7.js";import"./RegisterGraphicalItemId-CerVMuzL.js";import"./GraphicalItemClipPath-DrafemYl.js";import"./SetGraphicalItem-SnNwrY5U.js";import"./getRadiusAndStrokeWidthFromDot-CEpeo8VH.js";import"./ActiveShapeUtils-BvZP5z0J.js";import"./Curve-2z5qlXH8.js";import"./step-CzcXqax1.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DyoI6Nh-.js";import"./useElementOffset-uYsnFzO5.js";import"./uniqBy--hIWrqYh.js";import"./iteratee-Bg1jPrtH.js";import"./Cross-a7lz-KW-.js";import"./Rectangle-ByySwgNe.js";import"./util-Dxo8gN5i.js";import"./Sector-VIE_wHVz.js";import"./Symbols-C-zaMuJt.js";import"./symbol-CAoOuc3N.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
