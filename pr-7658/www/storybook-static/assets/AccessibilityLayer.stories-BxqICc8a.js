import{r as A,R as t}from"./iframe-BEU0VEzj.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-NpRQQbTs.js";import{A as E}from"./AreaChart-BhkpqiS_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DLMroFrg.js";import{X as g}from"./XAxis-DHuUhI2Z.js";import{Y as h}from"./YAxis-Bwob8VzU.js";import{A as a}from"./Area-CKS7jORS.js";import{T as u}from"./Tooltip-fDadjpQf.js";import{R as k}from"./zIndexSlice-mhTpFGis.js";import{L as v}from"./Legend-Bq1E_AiK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BgY8CE2w.js";import"./index-C2ItmsS3.js";import"./index-urNlcYtz.js";import"./index-C8ohCoZb.js";import"./index-DaENtIET.js";import"./throttle-BnTbmX16.js";import"./get-C2VjdU0L.js";import"./axisSelectors-X6Iztzs2.js";import"./resolveDefaultProps-3wYQv28v.js";import"./isWellBehavedNumber-C2k8qIGv.js";import"./d3-scale-D-iBl5g_.js";import"./renderedTicksSlice-xgVkluQT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-SjLeJZWR.js";import"./chartDataContext-DlMENguP.js";import"./CategoricalChart-venkO3Qs.js";import"./CartesianAxis-I3SN0dPC.js";import"./Layer-BxzS3V_h.js";import"./Text-1VnO-5nk.js";import"./DOMUtils-B3nT0fft.js";import"./useId-DlO5xKwO.js";import"./useBackwardsCompatibleTheme-DbNZLS-G.js";import"./Label-ChFEzAZk.js";import"./ZIndexLayer-nwUJ9Z8I.js";import"./types-BcpteXUs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C1OsdHSy.js";import"./useAnimationId-BpSAAbQy.js";import"./ActivePoints-DmPjn1vV.js";import"./Dot-BaUbFdJY.js";import"./RegisterGraphicalItemId-C3EeC43L.js";import"./GraphicalItemClipPath-DWoEZRp9.js";import"./SetGraphicalItem-BO4L7W4Z.js";import"./getRadiusAndStrokeWidthFromDot-U5qUSWt7.js";import"./ActiveShapeUtils-DJPjSqHL.js";import"./Curve-DRodi9QH.js";import"./step-B0HdwPOl.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D4g6qdze.js";import"./useElementOffset-kyh44B3q.js";import"./uniqBy-ClPneOeo.js";import"./iteratee-BNBpiK-0.js";import"./Cross-CQdePycd.js";import"./Rectangle-BBifCncj.js";import"./util-Dxo8gN5i.js";import"./Sector-DYrzJMn1.js";import"./Symbols-BStY3Nch.js";import"./symbol-ByyL1C9a.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
