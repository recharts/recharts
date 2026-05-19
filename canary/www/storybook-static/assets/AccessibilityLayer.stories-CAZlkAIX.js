import{u as A,e as t}from"./iframe-Dm92CwFH.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-_dvL9nac.js";import{C as l}from"./ComposedChart-8hVtFBq4.js";import{A as E}from"./AreaChart-CXpJUsFd.js";import{p as d}from"./Page-DPte-9pC.js";import{C as b}from"./CartesianGrid-DhhWGcMk.js";import{X as g}from"./XAxis-BxDV4NmS.js";import{Y as h}from"./YAxis-LNhJTikZ.js";import{A as a}from"./Area-BH_rzYes.js";import{T as u}from"./Tooltip-AjXhhwjO.js";import{R as y}from"./RechartsHookInspector-DjDPWpLA.js";import{g as v}from"./arrayEqualityCheck-CILmZ2ng.js";import{L as T}from"./Legend-DxpUmIGw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcwR86Ee.js";import"./index-BZhNoNV_.js";import"./immer-C2lunnZL.js";import"./hooks-BzHpEskF.js";import"./axisSelectors-BHYp1qXz.js";import"./d3-scale-irW0mVOo.js";import"./zIndexSlice-CZsiKlhz.js";import"./renderedTicksSlice-Cbab3bWB.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-mnMBiiJP.js";import"./chartDataContext-BodkpG5F.js";import"./CategoricalChart-VO60zbCA.js";import"./resolveDefaultProps-URK34NLy.js";import"./CartesianAxis-DhxbGkzM.js";import"./Layer-CpozC2HI.js";import"./Text-DeU0frga.js";import"./DOMUtils-CrpDH3yL.js";import"./Label-C3d_UHx_.js";import"./ZIndexLayer-BRpAcZD_.js";import"./types-CksUkFiR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-gF21399W.js";import"./step-BOUe13iO.js";import"./ReactUtils-vWuNVuHD.js";import"./ActivePoints-CqTWkagC.js";import"./Dot-D9ItCAkE.js";import"./RegisterGraphicalItemId-Bgnu5jtR.js";import"./GraphicalItemClipPath-C8gejsmY.js";import"./SetGraphicalItem-C8FWpJGs.js";import"./useAnimationId-DN3FgicD.js";import"./getRadiusAndStrokeWidthFromDot-EjdN7dQP.js";import"./graphicalItemSelectors-BeyTcZ1c.js";import"./useElementOffset-D-mxBOd4.js";import"./uniqBy-CnkbcL_D.js";import"./iteratee-DgYznPUB.js";import"./Cross-D0w41uNF.js";import"./Rectangle-BYOH8rGO.js";import"./Sector-BkPUWzJ_.js";import"./index-BuoG88Tj.js";import"./ChartSizeDimensions-f0wD3mfa.js";import"./OffsetShower-VDfu5cmL.js";import"./PlotAreaShower-DIqDk6Vd.js";import"./Symbols-D8RnZW1D.js";import"./symbol-aLdk9boG.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
