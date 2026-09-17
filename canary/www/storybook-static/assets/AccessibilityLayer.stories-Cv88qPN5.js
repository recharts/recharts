import{r as A,R as t}from"./iframe-u4ce63CG.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-C2sXY6fb.js";import{A as E}from"./AreaChart-DWESgjk_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-UD8jMOa9.js";import{X as g}from"./XAxis-ycYuR5GD.js";import{Y as h}from"./YAxis-BSJWLgXb.js";import{A as a}from"./Area-BW87PAw6.js";import{T as u}from"./Tooltip-av0dbo9i.js";import{R as k}from"./zIndexSlice-BYJycarP.js";import{L as v}from"./Legend-BtGPt8jj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Zz5ful62.js";import"./resolveDefaultProps-CgaWkI-c.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CGHflyYT.js";import"./throttle-B6MgLZYN.js";import"./index-BVP_svq1.js";import"./index-BKlhDgWa.js";import"./isWellBehavedNumber-DjD-6vVv.js";import"./d3-scale-B8KmfmKn.js";import"./index-pI1Zm9lH.js";import"./index-PkCf_CwH.js";import"./renderedTicksSlice-Cs4cysVU.js";import"./index-CMticpJd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ddb32mjN.js";import"./chartDataContext-0PEmuSXk.js";import"./CategoricalChart-BiBJy5y7.js";import"./CartesianAxis-BCYFcWgI.js";import"./Layer-DNxK11xQ.js";import"./Text-B-fKZlN3.js";import"./DOMUtils-DPz05X-i.js";import"./useId-CDzZCSG6.js";import"./useBackwardsCompatibleTheme-BMXS8hwA.js";import"./Label-D-DGLST-.js";import"./ZIndexLayer-BDv8sIeq.js";import"./types-BSKo_D-h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B0QYHb0Z.js";import"./useAnimationId-CFY7vA8F.js";import"./ActivePoints-CmJoQcI8.js";import"./Dot-CyCokxWF.js";import"./RegisterGraphicalItemId-CERn6dbU.js";import"./GraphicalItemClipPath-BkjNj3rm.js";import"./SetGraphicalItem-R2AcNzTI.js";import"./getRadiusAndStrokeWidthFromDot-BNYPB0Rc.js";import"./ActiveShapeUtils-D76eZVf4.js";import"./Curve-Cpv10agS.js";import"./step-B8l-YbAv.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DQSDp_oq.js";import"./useElementOffset-DFmVgwFI.js";import"./uniqBy-DhJnILqR.js";import"./iteratee-DjERPAQW.js";import"./Cross-DeyWm1qc.js";import"./Rectangle-Azk4KVCz.js";import"./util-Dxo8gN5i.js";import"./Sector-DH7UX8LT.js";import"./Symbols-ChXPCZdB.js";import"./symbol-je1hzkfs.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
