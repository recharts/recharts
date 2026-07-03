import{r as A,R as t}from"./iframe-Dlbg_GZB.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BqgVwKSR.js";import{A as E}from"./AreaChart-D9UxdxDc.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-g5KYVCwt.js";import{X as g}from"./XAxis-g3Yqs_q0.js";import{Y as h}from"./YAxis-K45jOkJG.js";import{A as a}from"./Area-CcWnxKLq.js";import{T as u}from"./Tooltip-DcxPDA9e.js";import{R as k}from"./zIndexSlice-CMn4Cwlm.js";import{L as v}from"./Legend-D4rjc0mf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_RHeF5kh.js";import"./index-5rk_KAjc.js";import"./index-De4F06zW.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./throttle-C3Y4hQMj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./axisSelectors-C_hiMAlk.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./d3-scale-DJYjYDtT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./CategoricalChart-BQo9vmvV.js";import"./CartesianAxis-dbSJQeo2.js";import"./Layer-DlhGxg7N.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./Label-d3wc6rF5.js";import"./ZIndexLayer-feAlcx_0.js";import"./types-Ctdv5TaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-xmicP7QL.js";import"./useAnimationId-K2Oa5cBe.js";import"./ActivePoints-CEnLoFiW.js";import"./Dot-DZ8iWzlt.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";import"./getRadiusAndStrokeWidthFromDot-rZ7RT_fb.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./Curve-Dcq__Vxv.js";import"./step-BcjH0w06.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bb2tv3Tj.js";import"./useElementOffset-CDDZoyN1.js";import"./uniqBy-DQCU_Q9Y.js";import"./iteratee-CC9cIx0G.js";import"./Cross-CxODRasK.js";import"./Rectangle-CRztim86.js";import"./util-Dxo8gN5i.js";import"./Sector-trkJxZEY.js";import"./Symbols-CUnsQXWy.js";import"./symbol-BBKXJ5vn.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
