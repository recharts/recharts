import{r as A,R as t}from"./iframe-PFnyvlis.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CYoxv7K5.js";import{A as E}from"./AreaChart-Roylj437.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CciC7zHF.js";import{X as g}from"./XAxis-DhJ_whev.js";import{Y as h}from"./YAxis-B7MGVxIC.js";import{A as a}from"./Area-BmyR2Ehy.js";import{T as u}from"./Tooltip-DLtoj8G7.js";import{R as k}from"./zIndexSlice-B0qSSbxG.js";import{L as v}from"./Legend-Ci_zbGqr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3E-J46N.js";import"./resolveDefaultProps-w5xflEp3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DhkVgott.js";import"./throttle-GW0_gATC.js";import"./index-Bnt3KeU-.js";import"./index-sAeTipYl.js";import"./isWellBehavedNumber-fJrag4D_.js";import"./d3-scale-Ct392CQc.js";import"./index-D5l8ABkB.js";import"./index-Cd7PqRR0.js";import"./renderedTicksSlice-CEcKwYs8.js";import"./index-Bz4JWd5z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CsLYaxaY.js";import"./chartDataContext-DOm0tmmB.js";import"./CategoricalChart-C-GflChV.js";import"./CartesianAxis-D8jcLweO.js";import"./Layer-8HYYz2ZX.js";import"./Text-Bjtm-BnX.js";import"./pageBackground-D9EVWege.js";import"./useId-B6VTORgN.js";import"./useBackwardsCompatibleTheme-BHl7LW2d.js";import"./Label-CHf8Dh9F.js";import"./ZIndexLayer-B4ISEqyM.js";import"./types-Cdq40KHv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-DeGfiuQP.js";import"./useAnimationId-E_cgqRBb.js";import"./dataEntryStyles-DVpontPM.js";import"./ActivePoints-DOitargu.js";import"./Dot-FM4Coi4D.js";import"./GraphicalItemClipPath-Bhp27ob6.js";import"./SetGraphicalItem-TVDRdMaU.js";import"./getRadiusAndStrokeWidthFromDot-fHs-9w3x.js";import"./ActiveShapeUtils-1mgFNr1z.js";import"./Curve-BDK-Xp5l.js";import"./step-DeVCdmYq.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-YcO-x1ZM.js";import"./useElementOffset-B06hB-J_.js";import"./uniqBy-BFzf7hr-.js";import"./iteratee-i8eYuUbO.js";import"./Cross-C9IeymZz.js";import"./Rectangle-BVeyAWJr.js";import"./util-Dxo8gN5i.js";import"./Sector-CuI7D498.js";import"./Symbols-Bca_e3aR.js";import"./symbol-BWUUdokJ.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
