import{r as A,e as t}from"./iframe-BSb16JoR.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-BAoNDz5r.js";import{A as E}from"./AreaChart-DGZQYrFw.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-p9dbqERn.js";import{X as g}from"./XAxis-BHgcURqr.js";import{Y as h}from"./YAxis-BjWuIzzh.js";import{A as a}from"./Area-CriF3674.js";import{T as u}from"./Tooltip-DORXG9Ys.js";import{R as y}from"./RechartsHookInspector-DGV6Ct7j.js";import{R as v}from"./arrayEqualityCheck-CKi6Epe4.js";import{L as T}from"./Legend-Dv6bvMS9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-z7IieHp6.js";import"./index-Bpi9g4Xy.js";import"./immer-BeuBwnCt.js";import"./hooks-CGl6g5Kn.js";import"./axisSelectors-CQJQ3hKV.js";import"./d3-scale-BCQZ4ydZ.js";import"./zIndexSlice-Bd2Z7-yF.js";import"./renderedTicksSlice-ZjnECHzq.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B4OwK7Ni.js";import"./chartDataContext-Cmf9_heI.js";import"./CategoricalChart-b3cJbLQD.js";import"./resolveDefaultProps-Cg9Aa6Xm.js";import"./CartesianAxis-DMpwxzt3.js";import"./Layer-DZYtcC2w.js";import"./Text-GlnZRYGI.js";import"./DOMUtils-B7NSRuk7.js";import"./Label-tcp5Z6P8.js";import"./ZIndexLayer-8dStJwlU.js";import"./types-BvVKlSL_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CJKywfJT.js";import"./step-g_dGXwfI.js";import"./ReactUtils-v-8YVmpF.js";import"./ActivePoints-CXu9VOq4.js";import"./Dot-CVpd23iI.js";import"./RegisterGraphicalItemId-C80kvS_1.js";import"./GraphicalItemClipPath-DRfMkQNb.js";import"./SetGraphicalItem-Drb-mPqH.js";import"./useAnimationId-BRGMijHA.js";import"./getRadiusAndStrokeWidthFromDot-CY2Vn6BR.js";import"./graphicalItemSelectors-BxDLltGA.js";import"./useElementOffset-CAWkhzoo.js";import"./uniqBy-KIGisAvA.js";import"./iteratee-DKK5omGB.js";import"./Cross-BnybQRNa.js";import"./Rectangle-C6I9faxi.js";import"./Sector-C6wRPjnp.js";import"./index-ZiErzFNv.js";import"./ChartSizeDimensions-BpGSMkxu.js";import"./OffsetShower-C7hr8qqJ.js";import"./PlotAreaShower-CvbFoVDy.js";import"./Symbols-SIMNkJGH.js";import"./symbol-CgA8__kL.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
