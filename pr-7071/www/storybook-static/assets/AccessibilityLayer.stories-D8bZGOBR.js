import{r as A,e as t}from"./iframe-BKMt6m5h.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-vbwTFmCk.js";import{C as l}from"./ComposedChart-BsCm5Nj2.js";import{A as E}from"./AreaChart-DMEZlOj8.js";import{C as b}from"./CartesianGrid-_qyEGuWy.js";import{X as d}from"./XAxis-CDLcqOUJ.js";import{Y as g}from"./YAxis-BewdCXRw.js";import{A as a}from"./Area-DUeytk5J.js";import{T as h}from"./Tooltip-7r_hEISl.js";import{R as u}from"./RechartsHookInspector-C8vh1C69.js";import{R as v}from"./arrayEqualityCheck-DKiSJyxs.js";import{L as T}from"./Legend-DSw_VX6C.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBmXgxrR.js";import"./index-0ICx_Jh1.js";import"./immer-119-Vx0I.js";import"./hooks-CVLKfhqZ.js";import"./axisSelectors-_eXkUPwd.js";import"./d3-scale-eFzonIBi.js";import"./zIndexSlice-C-hcpEb_.js";import"./renderedTicksSlice-CoSXmQJE.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DIHhcgBc.js";import"./chartDataContext-BHrrZZEw.js";import"./CategoricalChart-BQZ3b4pY.js";import"./resolveDefaultProps-DRqv39RM.js";import"./CartesianAxis-BvH7Qvln.js";import"./Layer-C7IPz0M5.js";import"./Text-DA8ucQjy.js";import"./DOMUtils-AZdfoklW.js";import"./Label-COa6_klK.js";import"./ZIndexLayer-BVz5K0QN.js";import"./types-CWEN2hKj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CIJPKaTL.js";import"./step-q1byNl46.js";import"./ReactUtils-ChQm2gA4.js";import"./ActivePoints-DcGeiB2-.js";import"./Dot-D-9lW8I7.js";import"./RegisterGraphicalItemId-Cr9Zp2xj.js";import"./GraphicalItemClipPath-DfzX8699.js";import"./SetGraphicalItem-DCaX05zE.js";import"./useAnimationId-CMiOk1pX.js";import"./getRadiusAndStrokeWidthFromDot-Cc011FPr.js";import"./graphicalItemSelectors-DyRpgfDi.js";import"./useElementOffset-FwvcWI3b.js";import"./uniqBy-CJDeFpd1.js";import"./iteratee-BA49Xtzo.js";import"./Cross-D82pKC1H.js";import"./Rectangle-B_C8hcZh.js";import"./Sector-_bf6LJcr.js";import"./index-CM5FbTKx.js";import"./ChartSizeDimensions-DMUyiIA2.js";import"./OffsetShower-r91l4zph.js";import"./PlotAreaShower-Sm9yLIMv.js";import"./Symbols-DEMmgvtO.js";import"./symbol-Mq3R2Ynh.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
