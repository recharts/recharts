import{r as A,e as t}from"./iframe-C_RKSEYG.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-BzOUY-Ur.js";import{A as E}from"./AreaChart-BYSapmTZ.js";import{C as b}from"./CartesianGrid-4JwPmv1I.js";import{X as d}from"./XAxis-3q4SInU2.js";import{Y as g}from"./YAxis-Dw1AfdQf.js";import{A as a}from"./Area-BV1-Rv3Y.js";import{T as h}from"./Tooltip-siVcffEm.js";import{R as u}from"./RechartsHookInspector-2DLThljJ.js";import{R as v}from"./arrayEqualityCheck-XhN9n2BV.js";import{L as T}from"./Legend-0q0gcXTg.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJ6mrGyY.js";import"./index-BRt1FalZ.js";import"./immer-BXvw-sb6.js";import"./hooks-BUBBsNP0.js";import"./axisSelectors-octxjJ6L.js";import"./d3-scale-Bly9GB_U.js";import"./zIndexSlice-Dau3iHk3.js";import"./renderedTicksSlice-BsnvkrRv.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dpt-Gkc_.js";import"./chartDataContext-Dj8ePN8G.js";import"./CategoricalChart-BeDTe7Ft.js";import"./resolveDefaultProps-wWOI_tEY.js";import"./CartesianAxis-Q9iq7WI3.js";import"./Layer-Bdbbvous.js";import"./Text-DZ8oBtno.js";import"./DOMUtils-D3avAUhw.js";import"./Label-DjnSNkR5.js";import"./ZIndexLayer-C2eZ7492.js";import"./types-DsqucEgb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-C9iWhVEb.js";import"./step-CZqcHwF_.js";import"./ReactUtils-CN-zxxkn.js";import"./ActivePoints-CR4cquNR.js";import"./Dot-DdhwcviA.js";import"./RegisterGraphicalItemId-BrlGhgM7.js";import"./GraphicalItemClipPath-mtAKD-sR.js";import"./SetGraphicalItem-DAHF2TwR.js";import"./useAnimationId-A_rRmY4T.js";import"./getRadiusAndStrokeWidthFromDot-wxvSaUa-.js";import"./graphicalItemSelectors-DBJYgnRR.js";import"./useElementOffset-UIzr0A2v.js";import"./uniqBy-BK5HoLxp.js";import"./iteratee-Dn6k9_7E.js";import"./Cross-DVB_poyJ.js";import"./Rectangle-BR00ZYjW.js";import"./Sector-C6nUzz_C.js";import"./index-CYNR1kH5.js";import"./ChartSizeDimensions-Du4NUIhU.js";import"./OffsetShower-B118pl0X.js";import"./PlotAreaShower-BicDzRP-.js";import"./Symbols-D-Mqycxx.js";import"./symbol-CQ2DdqBk.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(n=(m=r.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </AreaChart>
      </div>;
  },
  args: {}
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Yt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Yt as __namedExportsOrder,St as default};
