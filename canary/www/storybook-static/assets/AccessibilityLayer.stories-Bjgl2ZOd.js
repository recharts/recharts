import{r as A,R as t}from"./iframe-VXxHrawH.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-DtvVrtdx.js";import{A as E}from"./AreaChart-BunInHs3.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DjEkEXgI.js";import{X as g}from"./XAxis-D4xzCV5d.js";import{Y as h}from"./YAxis-DtlJkghU.js";import{A as a}from"./Area-CDEtXZOw.js";import{T as u}from"./Tooltip-DB9KHRHu.js";import{R as k}from"./zIndexSlice-DgTA0TxE.js";import{L as v}from"./Legend-BnroRKQA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CQIlqS7p.js";import"./resolveDefaultProps-D5Zdg-cB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BQNA_-kz.js";import"./throttle-BWlQSnjt.js";import"./index-Cou_EQ7F.js";import"./index-Ci4a_PyE.js";import"./isWellBehavedNumber-CkFzhS37.js";import"./d3-scale-CUjoKVS8.js";import"./index-BrnOmBWl.js";import"./index-CdTW_BBW.js";import"./renderedTicksSlice-S6Tl6gbL.js";import"./index-CcyipSPh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BwhDl5kl.js";import"./chartDataContext-CR1OC3WJ.js";import"./CategoricalChart-CT9rs-6L.js";import"./CartesianAxis-Dhdcn9ZL.js";import"./Layer-B3kAMod2.js";import"./Text-DwkoCOGf.js";import"./DOMUtils-xAHEQowW.js";import"./useId-poNdh1JU.js";import"./useBackwardsCompatibleTheme-CAqean3d.js";import"./Label-KqVvCdTF.js";import"./ZIndexLayer-ChcfhIs7.js";import"./types-DHxYQYQn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DqmSFpoj.js";import"./useAnimationId-UYFwfxUz.js";import"./ActivePoints-CibEdzP4.js";import"./Dot-lnLlnOqd.js";import"./RegisterGraphicalItemId-DSKBKWtn.js";import"./GraphicalItemClipPath-DKgFqHTa.js";import"./SetGraphicalItem-DwIcSm4l.js";import"./getRadiusAndStrokeWidthFromDot-Csruxjgw.js";import"./ActiveShapeUtils-C7gHs5iI.js";import"./Curve-WFRVj-wP.js";import"./step-DGUF12xu.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B5hnsjtf.js";import"./useElementOffset-DVcYrHEz.js";import"./uniqBy-C4BhnRCt.js";import"./iteratee-C-nIvaib.js";import"./Cross-Bd5rULmC.js";import"./Rectangle-DH4DXc0Y.js";import"./util-Dxo8gN5i.js";import"./Sector-CGI8Z1To.js";import"./Symbols-CFw6SlXs.js";import"./symbol-BFw8lO9u.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
