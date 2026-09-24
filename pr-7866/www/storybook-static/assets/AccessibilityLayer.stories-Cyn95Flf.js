import{r as A,R as t}from"./iframe-DNbvw14a.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-x_AAjUrD.js";import{A as E}from"./AreaChart-3EuXpOFp.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-SPB17rX4.js";import{X as g}from"./XAxis-DKCor6Yv.js";import{Y as h}from"./YAxis-BGn7xsJM.js";import{A as a}from"./Area-ClSMW_BQ.js";import{T as u}from"./Tooltip-RJu4KBeB.js";import{R as k}from"./zIndexSlice-BHD22v5p.js";import{L as v}from"./Legend-DuIJmZwb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-vWLTzty1.js";import"./resolveDefaultProps-Dv9OS7x0.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B6LUaqOe.js";import"./throttle-TrQ-NrIz.js";import"./index-ChGtG0Z1.js";import"./index-mPJfSQ4a.js";import"./isWellBehavedNumber-B4X7Ovgo.js";import"./d3-scale-DdoY8Kw0.js";import"./index-CiQ39v7Z.js";import"./index-CqQ_TYAw.js";import"./renderedTicksSlice-DnMPpzr7.js";import"./index-BcAi-B8x.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D_zqHIPC.js";import"./chartDataContext-mj0-05pU.js";import"./CategoricalChart-DTINRHZI.js";import"./CartesianAxis-CQJhlqIf.js";import"./Layer-Ca0bY5rb.js";import"./Text-BgAYGcmu.js";import"./DOMUtils-gpe3mW7P.js";import"./useId-BIiTcBjO.js";import"./useBackwardsCompatibleTheme-CUWrJJ-Y.js";import"./Label-B7KQBAEU.js";import"./ZIndexLayer-aQMxqOVX.js";import"./types-BqFGOrry.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-wgqiGiqn.js";import"./useAnimationId-DYgsmh0H.js";import"./ActivePoints-DVti48Uk.js";import"./Dot-DUpVpfPG.js";import"./RegisterGraphicalItemId-C8sRnX7V.js";import"./GraphicalItemClipPath-CB7JJ2kx.js";import"./SetGraphicalItem-nJGBA7YQ.js";import"./getRadiusAndStrokeWidthFromDot-DuDTJHD_.js";import"./ActiveShapeUtils-Bvp6wNuu.js";import"./Curve-DfXzeARC.js";import"./step-DhjEjZzQ.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CCeSwNH2.js";import"./useElementOffset-Dtm3zjK0.js";import"./uniqBy-D5Wbig9S.js";import"./iteratee-DgFx9-tJ.js";import"./Cross-B4JdyUGd.js";import"./Rectangle-BtsBI90d.js";import"./util-Dxo8gN5i.js";import"./Sector-x9gTTj3e.js";import"./Symbols-CsETl9L_.js";import"./symbol-AShXVAA2.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
