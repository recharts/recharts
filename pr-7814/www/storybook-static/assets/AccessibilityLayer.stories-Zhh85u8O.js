import{r as A,R as t}from"./iframe-u9oyaNDa.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-CjiIL43I.js";import{A as E}from"./AreaChart-DTltBHfm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-3za1VbL9.js";import{X as g}from"./XAxis-mDQaQsGs.js";import{Y as h}from"./YAxis-DcziBOs8.js";import{A as a}from"./Area-B07BPvpa.js";import{T as u}from"./Tooltip-DiUmtIlX.js";import{R as k}from"./zIndexSlice-CP6DEYJK.js";import{L as v}from"./Legend-CcRC945r.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUYC64MV.js";import"./resolveDefaultProps-DAwvazXN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-OhjP93PE.js";import"./throttle-BNJMxzFn.js";import"./index-Cf659ixt.js";import"./index-KfJc4WDj.js";import"./isWellBehavedNumber-BM97SC6u.js";import"./d3-scale-CXFCyIt2.js";import"./index-BqftORPs.js";import"./index-CBGd9m5k.js";import"./renderedTicksSlice-Kslt8j3i.js";import"./index-DWf2p5U7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GMYsDnOd.js";import"./chartDataContext-CUbnBmUW.js";import"./CategoricalChart-DAgdBpFV.js";import"./CartesianAxis-BInpl5Mc.js";import"./Layer-DjumWApv.js";import"./Text-BjcDy3qe.js";import"./DOMUtils-ClqiwCzY.js";import"./useId-C7h_mhKQ.js";import"./useBackwardsCompatibleTheme-B4wBZYcr.js";import"./Label-Q8r239gm.js";import"./ZIndexLayer-CWsudvRq.js";import"./types-DQ_9ILU-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BOaP-WB5.js";import"./useAnimationId-DzZz4Iie.js";import"./ActivePoints-CvbD508d.js";import"./Dot-CL6-lJmb.js";import"./RegisterGraphicalItemId-DN5KjZcx.js";import"./GraphicalItemClipPath-DV3LH61r.js";import"./SetGraphicalItem-Cs7cmOu4.js";import"./getRadiusAndStrokeWidthFromDot-CN_YkoZo.js";import"./ActiveShapeUtils-DNXHDk_r.js";import"./Curve-DGZmW8IJ.js";import"./step-BrZPGksV.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BpDjC4sF.js";import"./useElementOffset-C-12Rct7.js";import"./uniqBy-ThGgtOY0.js";import"./iteratee-TQ17fPkk.js";import"./Cross-DBjhH0rb.js";import"./Rectangle-un1MW7QV.js";import"./util-Dxo8gN5i.js";import"./Sector-qC3sba4E.js";import"./Symbols-CGPR52E1.js";import"./symbol-LPq4H3NR.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
