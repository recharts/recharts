import{r as A,R as t}from"./iframe-DMp7qWBc.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-r_H9u5_0.js";import{A as E}from"./AreaChart-Xaf3TTWS.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-FVIu4V9p.js";import{X as g}from"./XAxis-BEU7rEXV.js";import{Y as h}from"./YAxis-Csr1iP4L.js";import{A as a}from"./Area-BoisnnoQ.js";import{T as u}from"./Tooltip-DWEhkbfW.js";import{R as k}from"./zIndexSlice-DwEqiBQ-.js";import{L as v}from"./Legend-DfI93GLz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8C7w0fBl.js";import"./index-Bwz7camG.js";import"./index-BjkWDWFl.js";import"./index-DJULArvF.js";import"./index-FSdFZP1-.js";import"./immer-Cdu3yC2y.js";import"./get-xm_p6-0H.js";import"./renderedTicksSlice-xTgogQQT.js";import"./axisSelectors-CBZu9wu4.js";import"./d3-scale-BXmCrXPd.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CCMYu7HG.js";import"./isWellBehavedNumber-B2IEwkWH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-k38Maw3n.js";import"./chartDataContext-CQxGEncO.js";import"./CategoricalChart-Wp3XMWTG.js";import"./CartesianAxis-BpcewqQP.js";import"./Layer-CuLdBvJ8.js";import"./Text-BUBM5ImZ.js";import"./DOMUtils-u8y8aNP3.js";import"./Label-CTVwy9Ni.js";import"./ZIndexLayer-r-UQ7MHf.js";import"./types-nrPXTQ41.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BdLU55_g.js";import"./useAnimationId-Bo28EVo_.js";import"./ActivePoints-BbdycfO-.js";import"./Dot-BLk4Ltpd.js";import"./RegisterGraphicalItemId-CQp3zThr.js";import"./GraphicalItemClipPath-BhBDN4-E.js";import"./SetGraphicalItem-DeAOJWfR.js";import"./getRadiusAndStrokeWidthFromDot-3yPUTvTw.js";import"./ActiveShapeUtils-B9LOxtfw.js";import"./Curve-ClaSDCwv.js";import"./step-BmHxAVOq.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-S6DhiXfP.js";import"./useElementOffset-DiViSUwj.js";import"./uniqBy-CQGZokB0.js";import"./iteratee-g85ug9Sr.js";import"./Cross-CwfmxRKV.js";import"./Rectangle-hZTYOPpO.js";import"./Sector-Di9ZlAww.js";import"./Symbols-B2QFfdKs.js";import"./symbol-C-pIEiEF.js";const Rt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const St=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,St as __namedExportsOrder,Rt as default};
