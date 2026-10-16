import{r as A,R as t}from"./iframe-CXO7LpG4.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CX86GF1x.js";import{A as E}from"./AreaChart-D1tW7zC6.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BQWzY8ya.js";import{X as g}from"./XAxis-BMVFXruj.js";import{Y as h}from"./YAxis-DOeYdqQk.js";import{A as a}from"./Area-BLwG5CDE.js";import{T as u}from"./Tooltip-xGIgtC3h.js";import{R as k}from"./zIndexSlice-DfFYBEeE.js";import{L as v}from"./Legend-OHAT7ssA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-sOQIHtEN.js";import"./resolveDefaultProps-C5dcOo8R.js";import"./get-C2VjdU0L.js";import"./axisSelectors-PR70UCKy.js";import"./throttle-DaNNjE4n.js";import"./index-C7BEDOmI.js";import"./index-dHCi8WFp.js";import"./isWellBehavedNumber-Xxh63OZA.js";import"./d3-scale-DchtYoFX.js";import"./index-BmGLfy3v.js";import"./index-D_a3nOcX.js";import"./renderedTicksSlice-DvrMDUgG.js";import"./index-C9lYrgEX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cr8OfXtw.js";import"./chartDataContext-DJlEdu52.js";import"./CategoricalChart-Du8kaQ2V.js";import"./CartesianAxis-C3NdPzIM.js";import"./Layer-D31-Hvub.js";import"./Text-CQgXuSK-.js";import"./pageBackground-C22aj54-.js";import"./useId-CFkdxUsD.js";import"./useBackwardsCompatibleTheme-Cgf-vIhj.js";import"./Label-CPCjl1xH.js";import"./ZIndexLayer-8oHJlBan.js";import"./types-B806ejcH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BJ4YqvBn.js";import"./useAnimationId-BbnDDjkN.js";import"./dataEntryStyles-VHSSmKTo.js";import"./ActivePoints-D48l0kHu.js";import"./Dot-zqLpNykC.js";import"./GraphicalItemClipPath-Bdz9TeZ1.js";import"./SetGraphicalItem-DftB5RCs.js";import"./getRadiusAndStrokeWidthFromDot-CRQLZCgz.js";import"./ActiveShapeUtils-B5MsqJFC.js";import"./Curve-B0_ANcrk.js";import"./step-4HDWVyZ1.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-B0ZkPejj.js";import"./useElementOffset-BfmKGhNj.js";import"./uniqBy-CnxfY6gQ.js";import"./iteratee-DH4OJnDe.js";import"./Cross-C8Mo-H_X.js";import"./Rectangle-CsIBLxAK.js";import"./util-Dxo8gN5i.js";import"./Sector-CMS8t1ZW.js";import"./Symbols-C_oR1yez.js";import"./symbol-D7bf8irw.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
