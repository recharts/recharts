import{r as A,e as t}from"./iframe-CB4rwuoz.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-YoWdVHlU.js";import{A as E}from"./AreaChart-B9idHaLj.js";import{C as b}from"./CartesianGrid-yd7HEcQz.js";import{X as d}from"./XAxis-DCt1RS6w.js";import{Y as g}from"./YAxis-BaJrW052.js";import{A as a}from"./Area-DlbXBfq_.js";import{T as h}from"./Tooltip-CbV8c3wz.js";import{R as u}from"./RechartsHookInspector-c3RyaB9m.js";import{R as v}from"./arrayEqualityCheck-B0sfDo8e.js";import{L as T}from"./Legend-IZj4yYE7.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VUmZrQSA.js";import"./index-BgC6MCXe.js";import"./immer-BWNyrJnU.js";import"./hooks-DoXZqLBz.js";import"./axisSelectors-BlEjC6I8.js";import"./d3-scale-BjYlm7DL.js";import"./zIndexSlice-CX5pCWFs.js";import"./renderedTicksSlice-B7tbCiQT.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bwy1F3hm.js";import"./chartDataContext-D2Mcqnh5.js";import"./CategoricalChart-RjnDaFgq.js";import"./resolveDefaultProps-aRufe_6H.js";import"./CartesianAxis-CMMIwY9U.js";import"./Layer-CF-S8dmg.js";import"./Text-BQ5lZJu1.js";import"./DOMUtils-CBex0cbx.js";import"./Label-C4bu2feL.js";import"./ZIndexLayer-DoMA1dJ2.js";import"./types-CgQDsaUM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DX-WNmjD.js";import"./step-BgqYgAla.js";import"./ReactUtils-BKtMub4g.js";import"./ActivePoints-CemCp_OZ.js";import"./Dot-Dh6sbB0Q.js";import"./RegisterGraphicalItemId-mDbm0o4v.js";import"./GraphicalItemClipPath-CewNEzcT.js";import"./SetGraphicalItem-Df_Fprv_.js";import"./useAnimationId-CLj3uDOB.js";import"./getRadiusAndStrokeWidthFromDot-BcBCYhRo.js";import"./graphicalItemSelectors-6Ztty2tI.js";import"./useElementOffset-K5yP77dM.js";import"./uniqBy-BiWECRxk.js";import"./iteratee-_24P-b58.js";import"./Cross-fgYQklRZ.js";import"./Rectangle-BToq8Jht.js";import"./Sector-C4kas-8x.js";import"./index-DLNZT6vI.js";import"./ChartSizeDimensions-D60uICZH.js";import"./OffsetShower-C1ie4azQ.js";import"./PlotAreaShower-T2_0B54j.js";import"./Symbols-CMdoO83a.js";import"./symbol-C980TeYk.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
