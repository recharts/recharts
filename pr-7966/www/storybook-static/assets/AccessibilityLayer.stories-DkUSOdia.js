import{r as A,R as t}from"./iframe-BPWq5wK1.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-eM1OIXHR.js";import{A as E}from"./AreaChart-BFzEo89g.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Da39FRA_.js";import{X as g}from"./XAxis-DwVZ8t6S.js";import{Y as h}from"./YAxis-fdw9Kawy.js";import{A as a}from"./Area-DFrjdrGo.js";import{T as u}from"./Tooltip-DBkA8X4O.js";import{R as k}from"./zIndexSlice--l6A9Cgd.js";import{L as v}from"./Legend-CrfNFMxt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DsTQCipn.js";import"./resolveDefaultProps-DC_merMH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B8iXPLx4.js";import"./throttle-BczP5WrX.js";import"./index-CBsqFzOA.js";import"./index-CMYr15XQ.js";import"./isWellBehavedNumber-DPMDsRl8.js";import"./d3-scale-t9m5JmsQ.js";import"./index-QtD_rERt.js";import"./index-CIFWdTWa.js";import"./renderedTicksSlice-B7Vn66iT.js";import"./index-BlcYejsd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDcEhH92.js";import"./chartDataContext-D-s48IOU.js";import"./CategoricalChart-D94cXkjn.js";import"./CartesianAxis-XsFsrZXE.js";import"./Layer-CeC_x2uD.js";import"./Text-Dv2kvEh7.js";import"./pageBackground-BKi1BKrf.js";import"./useId-BNAqUaya.js";import"./useBackwardsCompatibleTheme-DmujFuGs.js";import"./Label-DfIBtU5a.js";import"./ZIndexLayer-Du5K3aCJ.js";import"./types-BIKEZWlZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Fhy11XH6.js";import"./useAnimationId-37s3ARsg.js";import"./dataEntryStyles-3NXA5k2R.js";import"./ActivePoints-BfMx66PR.js";import"./Dot-C_XJnXRn.js";import"./GraphicalItemClipPath-DqP6JkJs.js";import"./SetGraphicalItem-C-FePfke.js";import"./getRadiusAndStrokeWidthFromDot-CKPkLz7f.js";import"./ActiveShapeUtils-DkTWf27X.js";import"./Curve-hjGlvn7z.js";import"./step-1i9O5IHq.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CfXPni2y.js";import"./useElementOffset-BfvhBRS5.js";import"./uniqBy-8hswHbWk.js";import"./iteratee-CyJf82nu.js";import"./Cross-CbZllH3r.js";import"./Rectangle-D1alOuUj.js";import"./util-Dxo8gN5i.js";import"./Sector-DpRb4p_0.js";import"./Symbols-DEpzjYFo.js";import"./symbol-2xHRf_v0.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
