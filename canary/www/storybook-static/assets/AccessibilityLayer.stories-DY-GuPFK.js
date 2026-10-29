import{r as A,R as t}from"./iframe-DlbVoy8b.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-kpOOzPnf.js";import{A as E}from"./AreaChart-DjPMmZ3o.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Ba7QntMw.js";import{X as g}from"./XAxis-S-cm4cjH.js";import{Y as h}from"./YAxis-BhrY96Pd.js";import{A as a}from"./Area-BA2rV1vu.js";import{T as u}from"./Tooltip-Dx6POBvv.js";import{R as k}from"./zIndexSlice-DIPR8J8Q.js";import{L as v}from"./Legend-CmCZgCji.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0Cl8XbA.js";import"./resolveDefaultProps-DXzjMp61.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C1oz2VfT.js";import"./throttle-DlhUrerR.js";import"./index-CDdiRPnr.js";import"./index-CPhEmyt7.js";import"./polarAxisSelectors-DH-8MkIE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-wuSABge9.js";import"./index-CPt_GVUx.js";import"./index-D-eNMO6C.js";import"./renderedTicksSlice-GxAdOI9L.js";import"./index-CIlMrkEO.js";import"./CartesianChart-fxjI_rYy.js";import"./ZIndexPortal-BXiuLmxD.js";import"./CategoricalChart-C4dlmPak.js";import"./CartesianAxis-xtm5bwXL.js";import"./Layer-Cgk1UHKb.js";import"./Text-D-UClZ_j.js";import"./pageBackground-CUuPx32S.js";import"./ZIndexLayer-bE8wUUDO.js";import"./Label-Db_JATF8.js";import"./types-wgD9JhdB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DZdmLQwZ.js";import"./ActivePoints-nWjJ13Ya.js";import"./Dot-C73t_xwp.js";import"./activeStyles-68fYVlFc.js";import"./useAnimationId-69ly1h0S.js";import"./dataEntryStyles-CWf0jd4a.js";import"./Symbols-pvCFqWA7.js";import"./symbol-Con-2uFn.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem--R52djyG.js";import"./getRadiusAndStrokeWidthFromDot-BM1c-Ckc.js";import"./ActiveShapeUtils-hcn-O4rR.js";import"./Curve-CwM7Cya8.js";import"./step-D9Q180Zj.js";import"./useEffectiveDataKey-Cxmpzb2d.js";import"./useElementOffset-BikB_Nzb.js";import"./uniqBy-dmJ8LW9D.js";import"./iteratee-ZueROYHY.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BZ_YBMHg.js";import"./Rectangle-6c5uuZ_V.js";import"./util-Dxo8gN5i.js";import"./Sector-Ce4Tme9N.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
