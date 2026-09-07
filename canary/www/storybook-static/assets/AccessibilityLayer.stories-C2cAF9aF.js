import{r as A,R as t}from"./iframe-B9f439XI.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-C-QIoD4C.js";import{A as E}from"./AreaChart-BTUeI80S.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-C4GjJN79.js";import{X as g}from"./XAxis-DOU84Hlo.js";import{Y as h}from"./YAxis-JNrwnee_.js";import{A as a}from"./Area-CB0yt_jV.js";import{T as u}from"./Tooltip-Cq18l-O4.js";import{R as k}from"./zIndexSlice-C6Otyq85.js";import{L as v}from"./Legend-DX-GvFUk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DhjKeyZf.js";import"./resolveDefaultProps-gOTjLOeS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CtkTbFLc.js";import"./throttle-Cul9o8Fv.js";import"./index-BbETDB0j.js";import"./index-Ba5C8sSe.js";import"./isWellBehavedNumber-CYewbHK2.js";import"./d3-scale-D5l0Isqr.js";import"./index-C3T5ZoZg.js";import"./index--FioM-W6.js";import"./renderedTicksSlice-v2nQGwWu.js";import"./index-Dmy_GPO_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DaH8zaVP.js";import"./chartDataContext-1z3k21sD.js";import"./CategoricalChart-7BozNq5r.js";import"./CartesianAxis-DdFgmu19.js";import"./Layer-JExDg_3T.js";import"./Text-Bow6SjUp.js";import"./DOMUtils-DhGAIzWN.js";import"./useId-C9eyJZjo.js";import"./useBackwardsCompatibleTheme-CPO8fYQ4.js";import"./Label-DVN-Hwwb.js";import"./ZIndexLayer-C4eGne8u.js";import"./types-BsF4BT96.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-17rMBNfA.js";import"./useAnimationId-7tiok7vs.js";import"./ActivePoints-Uofgco9H.js";import"./Dot-T9Kvs1vN.js";import"./RegisterGraphicalItemId-CMz-uJdk.js";import"./GraphicalItemClipPath-CarNY15C.js";import"./SetGraphicalItem-6PuFIxdb.js";import"./getRadiusAndStrokeWidthFromDot-C7sSECjk.js";import"./ActiveShapeUtils-Djn55Wjw.js";import"./Curve-BNGAgwsP.js";import"./step-Cd0cogV_.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Rx4jvPS9.js";import"./useElementOffset-CX1bHy_W.js";import"./uniqBy-DENRboCh.js";import"./iteratee-CJfDgSnT.js";import"./Cross-Cn07LQ6x.js";import"./Rectangle-B0vFWPEb.js";import"./util-Dxo8gN5i.js";import"./Sector-CeMmEBx2.js";import"./Symbols-CAnsshcC.js";import"./symbol-CisfiURK.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
