import{r as A,e as t}from"./iframe-DSZ2QiJB.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-B_grCv6v.js";import{A as E}from"./AreaChart-C_iAcecb.js";import{C as b}from"./CartesianGrid-tCMk91Zb.js";import{X as d}from"./XAxis-C40iw1gZ.js";import{Y as g}from"./YAxis-x1YS6WwT.js";import{A as a}from"./Area-BU1pyJ8G.js";import{T as h}from"./Tooltip-BUjbNrjQ.js";import{R as u}from"./RechartsHookInspector-CbZDQ_xN.js";import{R as v}from"./arrayEqualityCheck-rt-62tKM.js";import{L as T}from"./Legend-BvZZgudz.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BWBPYC1r.js";import"./index-1kC-pV_c.js";import"./immer-D42ZyI8P.js";import"./hooks-Bla0K3sY.js";import"./axisSelectors-DvTXpJxJ.js";import"./d3-scale-Bj0Wd2Rm.js";import"./zIndexSlice-Dv9Y9W3b.js";import"./renderedTicksSlice-C2PuzhHM.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YjLZrE0S.js";import"./chartDataContext-BuXntJJ8.js";import"./CategoricalChart-3Wrbo8_n.js";import"./resolveDefaultProps-_H3sYQ_H.js";import"./CartesianAxis-BOemEoe1.js";import"./Layer-CfeiBM7_.js";import"./Text-Dt_FG9bq.js";import"./DOMUtils-n5N7L4PT.js";import"./Label-DwmX4z8O.js";import"./ZIndexLayer-BB6UhYUp.js";import"./types-DHG31Cql.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-1v3U2npm.js";import"./step-28_znSZY.js";import"./ReactUtils-BPco_pTv.js";import"./ActivePoints-DGvp93MP.js";import"./Dot-DvBHW_pK.js";import"./RegisterGraphicalItemId-DpTWPNPm.js";import"./GraphicalItemClipPath-DGAu4crQ.js";import"./SetGraphicalItem-A8lByKkr.js";import"./useAnimationId-CVC-EATQ.js";import"./getRadiusAndStrokeWidthFromDot-3P602oOp.js";import"./graphicalItemSelectors-CYRK5fZq.js";import"./useElementOffset-DO-lVvkB.js";import"./uniqBy-aig2Gkf7.js";import"./iteratee-CEjlmyDu.js";import"./Cross-Bmyi6vQQ.js";import"./Rectangle-U6qmZG0w.js";import"./Sector-Cw_z1t88.js";import"./index-DDQU038C.js";import"./ChartSizeDimensions-Cqws91-P.js";import"./OffsetShower-Bc2DkPnc.js";import"./PlotAreaShower-B81JCCGH.js";import"./Symbols-D1J3is_N.js";import"./symbol-Bi67EGLP.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
