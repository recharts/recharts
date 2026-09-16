import{r as A,R as t}from"./iframe-14XWblZL.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-BWmJnIiB.js";import{A as E}from"./AreaChart-D-4VpqCE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-sqAOvoii.js";import{X as g}from"./XAxis-C7X69uLj.js";import{Y as h}from"./YAxis-B3LGD4EX.js";import{A as a}from"./Area-CNwPLML_.js";import{T as u}from"./Tooltip-CBVgz2Nn.js";import{R as k}from"./zIndexSlice-bTipO816.js";import{L as v}from"./Legend-BErzQH-F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCy9svnE.js";import"./resolveDefaultProps-CeALBfEq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CIwAjqs7.js";import"./throttle-BdJ0G1gd.js";import"./index-BoYHIswN.js";import"./index-CyB2tElA.js";import"./isWellBehavedNumber-MwCzfGE9.js";import"./d3-scale-Do0_JEbV.js";import"./index-kqeHVlrV.js";import"./index-CT88W_qc.js";import"./renderedTicksSlice-MhpbyeSe.js";import"./index-0t1fABOK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CccXTSFB.js";import"./chartDataContext-TCJzUoES.js";import"./CategoricalChart-BYZHR-yl.js";import"./CartesianAxis-CBKTwxf2.js";import"./Layer-DfNVM8Fr.js";import"./Text-DR2swdHV.js";import"./DOMUtils-BDBx2TYe.js";import"./useId-B0oD1V4p.js";import"./useBackwardsCompatibleTheme-CUWKt_Td.js";import"./Label-CvRLouIN.js";import"./ZIndexLayer-BpIepiPk.js";import"./types-DUuownuR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dweh6qvQ.js";import"./useAnimationId-BF3NsOWV.js";import"./ActivePoints-CmDJ2stf.js";import"./Dot-CVbI_zwl.js";import"./RegisterGraphicalItemId-Bdmh3jKn.js";import"./GraphicalItemClipPath-7jxlsFlx.js";import"./SetGraphicalItem-DlBXFH4y.js";import"./getRadiusAndStrokeWidthFromDot-CkcS_CHs.js";import"./ActiveShapeUtils-qHfZYwQx.js";import"./Curve-CiXwsAAl.js";import"./step-JufzNNlH.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-QKGsdlin.js";import"./useElementOffset-cDBpeZWA.js";import"./uniqBy-BGqFg_4C.js";import"./iteratee-CcTmIxFv.js";import"./Cross-XOLMLvha.js";import"./Rectangle-Btq3c2bb.js";import"./util-Dxo8gN5i.js";import"./Sector-BC_KIWW7.js";import"./Symbols-VjYZPiRG.js";import"./symbol-BSOWQiAM.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
