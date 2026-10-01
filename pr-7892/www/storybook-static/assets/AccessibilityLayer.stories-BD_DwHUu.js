import{r as A,R as t}from"./iframe-C9psKz5H.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DVW7IlRi.js";import{A as E}from"./AreaChart-WWH03LoM.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-D3n5VgzI.js";import{X as g}from"./XAxis-7TSk_dxf.js";import{Y as h}from"./YAxis-hQp9fU0j.js";import{A as a}from"./Area-CheCHD_0.js";import{T as u}from"./Tooltip-D7estliL.js";import{R as k}from"./zIndexSlice-DpmGRp-Q.js";import{L as v}from"./Legend-D-FmtXzI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DBEUhNwk.js";import"./resolveDefaultProps-DXpX2jzi.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BVR1qW5C.js";import"./throttle-ybqMtWK8.js";import"./index-D90R4_Ry.js";import"./index-DO4kgVpb.js";import"./isWellBehavedNumber-DtoestQf.js";import"./d3-scale-DOPiKI9I.js";import"./index-Boed59-W.js";import"./index-C0Ds42Ok.js";import"./renderedTicksSlice-C81k7Y0M.js";import"./index-C4HmYpYK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqQaN6li.js";import"./chartDataContext-C8FZLZVj.js";import"./CategoricalChart-oiLx-c2-.js";import"./CartesianAxis-QX-AYICp.js";import"./Layer-D1lf7NaI.js";import"./Text-CxmkIGJJ.js";import"./DOMUtils-5QLcrI6X.js";import"./useId-BmRjTouL.js";import"./useBackwardsCompatibleTheme-u-6iGz_C.js";import"./Label-tLoAdhBg.js";import"./ZIndexLayer-Dp6mI4S2.js";import"./types-Bo9cWGoI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CEzVE_qf.js";import"./useAnimationId-NO-aRC2z.js";import"./ActivePoints-DV3QsG_s.js";import"./Dot-CoxDYTLK.js";import"./RegisterGraphicalItemId-Bou02MzC.js";import"./GraphicalItemClipPath-BiRBEzG3.js";import"./SetGraphicalItem-DbUk56bY.js";import"./getRadiusAndStrokeWidthFromDot-D95GFJQd.js";import"./ActiveShapeUtils-B_bGVHtn.js";import"./Curve-ejO9vv5H.js";import"./step-Ba-sjoMn.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CFJPU_4U.js";import"./useElementOffset-BFRDXyQs.js";import"./uniqBy-vdai6ABx.js";import"./iteratee-CxOXUx_n.js";import"./Cross-Bqsji87y.js";import"./Rectangle-DiC0sGbs.js";import"./util-Dxo8gN5i.js";import"./Sector-BJeHlwhS.js";import"./Symbols-CmEK9_Zz.js";import"./symbol-Csc8y23F.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
