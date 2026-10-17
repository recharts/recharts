import{r as A,R as t}from"./iframe-DJb0mK8M.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CuzfZC2T.js";import{A as E}from"./AreaChart-BHJ5PETY.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DsLQknLw.js";import{X as g}from"./XAxis-rFQD6Pba.js";import{Y as h}from"./YAxis-CWLYUyep.js";import{A as a}from"./Area-B5d_M_bf.js";import{T as u}from"./Tooltip-yYvD3jWx.js";import{R as k}from"./zIndexSlice-CT0NLGnJ.js";import{L as v}from"./Legend-COUILfwW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cglq1y_f.js";import"./resolveDefaultProps-C1NQQxfw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-E250IIX0.js";import"./throttle-BS7HrNsT.js";import"./index-CM4XLoJ2.js";import"./index-DkIcBYOu.js";import"./isWellBehavedNumber-BNoJVovK.js";import"./d3-scale-BU1MyCto.js";import"./index-Co9bt_zj.js";import"./index-BZmySJQF.js";import"./renderedTicksSlice-CwZjK2uF.js";import"./index-CyzL3WIR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJ8n3cc1.js";import"./chartDataContext-CJdXqT5i.js";import"./CategoricalChart-Dsw_Culz.js";import"./CartesianAxis-C-rsFQTF.js";import"./Layer-DK2FwCPg.js";import"./Text-COb6PIBf.js";import"./pageBackground-CexaD8jP.js";import"./useId-BX-mSSik.js";import"./useBackwardsCompatibleTheme-CKzY57lx.js";import"./Label-BzZymjIq.js";import"./ZIndexLayer-DD8rlV_m.js";import"./types-B-rYYW-g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-DMsULg9O.js";import"./useAnimationId-CFtssWv7.js";import"./dataEntryStyles-DWwC517V.js";import"./ActivePoints-CCNXmb9c.js";import"./Dot--GGfWb34.js";import"./GraphicalItemClipPath-BFBWrIDQ.js";import"./SetGraphicalItem-BBlb6zhf.js";import"./getRadiusAndStrokeWidthFromDot-9uxOnNFL.js";import"./ActiveShapeUtils-s8ySMG5_.js";import"./Curve-Byf9oq4a.js";import"./step-Bi1Gxitb.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BCzrZ4XH.js";import"./useElementOffset-DTnbgc86.js";import"./uniqBy-BuCtx4yQ.js";import"./iteratee-B4Qh_7Gw.js";import"./Cross-BJwlxOAF.js";import"./Rectangle-KMUMkJf8.js";import"./util-Dxo8gN5i.js";import"./Sector-CQqm1E0g.js";import"./Symbols-8udjdX-_.js";import"./symbol-CxL7yEpn.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
