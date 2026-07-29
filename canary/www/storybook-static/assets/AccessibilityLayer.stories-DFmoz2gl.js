import{r as A,R as t}from"./iframe-DHvlXZZp.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C7ZUQvNE.js";import{A as E}from"./AreaChart-BCPHeL3m.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-ClkzgT-p.js";import{X as g}from"./XAxis-C0xAN7Vm.js";import{Y as h}from"./YAxis-DYTJhxlv.js";import{A as a}from"./Area-C9cy34iR.js";import{T as u}from"./Tooltip-B5NiwQTr.js";import{R as k}from"./zIndexSlice-D7_5YQCx.js";import{L as v}from"./Legend-DfYfxjVN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CaVHAbWI.js";import"./index-CDvSCu-7.js";import"./index-B_pekVWz.js";import"./index-rrh18h4R.js";import"./index-DGFoeBTW.js";import"./throttle-Bg-VcpoN.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C2TzwS0g.js";import"./axisSelectors-lbKqd9aP.js";import"./resolveDefaultProps-DAXfWdSl.js";import"./isWellBehavedNumber-D3uQHhq6.js";import"./d3-scale-Cey7ctPf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DFvBiy9D.js";import"./chartDataContext-kJZSLmpd.js";import"./CategoricalChart-sk98qpS9.js";import"./CartesianAxis-DdKNIbtf.js";import"./Layer-BW5xomOj.js";import"./Text-D-2er-qS.js";import"./DOMUtils-CXaSfF0Q.js";import"./Label-TKCFRexK.js";import"./ZIndexLayer-D7_As1-8.js";import"./types-CRJA0nge.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BqfUunGe.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-BVZCnb1h.js";import"./useAnimationId-uiW7aOrL.js";import"./ActivePoints-oifiU6yf.js";import"./Dot-Btw86tRD.js";import"./RegisterGraphicalItemId-DWC6_slS.js";import"./GraphicalItemClipPath-b_iqRJZZ.js";import"./SetGraphicalItem-D2M9GsyT.js";import"./getRadiusAndStrokeWidthFromDot-B-WHlf9E.js";import"./ActiveShapeUtils-CUQXZ3i4.js";import"./Curve-Bc6Wc-5h.js";import"./step-B2khkJJz.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DXwSa3U9.js";import"./useElementOffset-DWKaUxb_.js";import"./uniqBy-B1Poqyga.js";import"./iteratee-CZdVePke.js";import"./Cross-BBJ1Kyk2.js";import"./Rectangle-DPmaYH73.js";import"./util-Dxo8gN5i.js";import"./Sector-C_z4Y56l.js";import"./Symbols-vArPBIj6.js";import"./symbol-CMZuJUeF.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
