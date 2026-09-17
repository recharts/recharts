import{r as A,R as t}from"./iframe-Bz6TqJnq.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BAS1f6y5.js";import{A as E}from"./AreaChart-CNoqk_6b.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BbGpbO3P.js";import{X as g}from"./XAxis-DVlM8vXe.js";import{Y as h}from"./YAxis-CRFRlUFA.js";import{A as a}from"./Area-BTpGexIl.js";import{T as u}from"./Tooltip-BoaaN165.js";import{R as k}from"./zIndexSlice-C-cqgMlF.js";import{L as v}from"./Legend-Ba21IbkL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--vq1vTqI.js";import"./resolveDefaultProps-DEKZytWh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BfBX80u0.js";import"./throttle-BuIt2HDm.js";import"./index-BQLoICSq.js";import"./index-beBiy9wx.js";import"./isWellBehavedNumber-M6S8uXi3.js";import"./d3-scale-twe7FoUl.js";import"./index-etoInMv6.js";import"./index-DlUolpmt.js";import"./renderedTicksSlice-DQraWAfi.js";import"./index-C9aozdfF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DP7g5nZU.js";import"./chartDataContext-D2R1zViF.js";import"./CategoricalChart-CRL5ERGJ.js";import"./CartesianAxis-DH-w_D5j.js";import"./Layer-BX7MhZ6S.js";import"./Text-DOaj_kWf.js";import"./DOMUtils-Cex05Ge6.js";import"./useId-1b7xgL0h.js";import"./useBackwardsCompatibleTheme-yIhTdrUA.js";import"./Label-lSot61nz.js";import"./ZIndexLayer-DhhI2NR0.js";import"./types-4BkRWtr0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DDH0_5C2.js";import"./useAnimationId-D4N1wqR_.js";import"./ActivePoints-BVtl5KJC.js";import"./Dot--D_QZvUF.js";import"./RegisterGraphicalItemId-D64byefQ.js";import"./GraphicalItemClipPath-CDFQRsft.js";import"./SetGraphicalItem-DzfWk83Z.js";import"./getRadiusAndStrokeWidthFromDot-CF5ztDsQ.js";import"./ActiveShapeUtils-BxAOP67q.js";import"./Curve-M6KVk8IF.js";import"./step-BK8r0hX3.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CDqVZsrI.js";import"./useElementOffset-DaMWcsMn.js";import"./uniqBy-CQ7Y-pcX.js";import"./iteratee-DSPWK7cC.js";import"./Cross-BznlOoGD.js";import"./Rectangle-nQBZL8n2.js";import"./util-Dxo8gN5i.js";import"./Sector-B0YiLuYU.js";import"./Symbols-BSgJkacr.js";import"./symbol-C6b2szSj.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
