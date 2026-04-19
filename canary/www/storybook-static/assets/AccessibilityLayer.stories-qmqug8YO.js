import{r as A,e as t}from"./iframe-DnKPxY7a.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-CHH2nWqC.js";import{A as E}from"./AreaChart-D2sdGzVv.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BUMSM3nv.js";import{X as g}from"./XAxis-BAn9u7ZP.js";import{Y as h}from"./YAxis-RGcfB1__.js";import{A as a}from"./Area-BWPidFuT.js";import{T as u}from"./Tooltip-BuKln3FH.js";import{R as y}from"./RechartsHookInspector-C1a5f-X8.js";import{R as v}from"./arrayEqualityCheck-BRLe4SS-.js";import{L as T}from"./Legend-CdgpsJ7x.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-nQtYlSir.js";import"./index-CC8a_PKZ.js";import"./immer-D9hLCfsI.js";import"./hooks-DeeMtons.js";import"./axisSelectors-BXdD8PxV.js";import"./d3-scale-C2xqHqad.js";import"./zIndexSlice-KD1BDYTU.js";import"./renderedTicksSlice-CFEn4_Md.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Coa75cqV.js";import"./chartDataContext-CJJd-wkg.js";import"./CategoricalChart-hpH9n4Dg.js";import"./resolveDefaultProps-DOqUyIeg.js";import"./CartesianAxis-BuD04Hve.js";import"./Layer-DeK52Cv4.js";import"./Text-CqYxA_ST.js";import"./DOMUtils-0c6Z1U3w.js";import"./Label-75Lwdv3P.js";import"./ZIndexLayer-BFRrJfPa.js";import"./types-CYYN-QxE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-Dkc-iOzw.js";import"./step-xT0L5jQX.js";import"./ReactUtils-4peIRB2B.js";import"./ActivePoints-DbUAoEhp.js";import"./Dot-CNgvsTba.js";import"./RegisterGraphicalItemId-DwM7Te_7.js";import"./GraphicalItemClipPath-DAZ9bgmo.js";import"./SetGraphicalItem-BlPK52Q_.js";import"./useAnimationId-DEpRCopS.js";import"./getRadiusAndStrokeWidthFromDot-C1w0XMVH.js";import"./graphicalItemSelectors-xl6jxkwV.js";import"./useElementOffset-DzUiSj4Y.js";import"./uniqBy-BCgakUVh.js";import"./iteratee-BZCWsX37.js";import"./Cross-lPBROCZR.js";import"./Rectangle-y2LFFHGo.js";import"./Sector-CnwcOah-.js";import"./index-CdavTI8c.js";import"./ChartSizeDimensions-CY_4B8hK.js";import"./OffsetShower-BXqoFf7d.js";import"./PlotAreaShower-CJTPHZ_L.js";import"./Symbols-KdBGH5vz.js";import"./symbol-CiognWkM.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
