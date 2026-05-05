import{r as A,e as t}from"./iframe-DftoLjMQ.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-DM6BExtw.js";import{C as l}from"./ComposedChart-DxZ1rHvA.js";import{A as E}from"./AreaChart-hHzol2vO.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-AIv_Erh0.js";import{X as g}from"./XAxis-diXG-Ooh.js";import{Y as h}from"./YAxis-_evmKux2.js";import{A as a}from"./Area-C_A13QRr.js";import{T as u}from"./Tooltip-U8E2AMmP.js";import{R as y}from"./RechartsHookInspector-BW_p22UR.js";import{R as v}from"./arrayEqualityCheck-OUBI6cxl.js";import{L as T}from"./Legend-BWUyCpiN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DHlVG8GT.js";import"./index-uEh81NxT.js";import"./immer-CQJBkabG.js";import"./hooks-CtUEKUIT.js";import"./axisSelectors-wXsEFnMj.js";import"./d3-scale-BsmYBoZY.js";import"./zIndexSlice--T96FzXv.js";import"./renderedTicksSlice-D9MmoYOr.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dc_3s4TO.js";import"./chartDataContext-IpRtB3jy.js";import"./CategoricalChart-DhhIk46Q.js";import"./resolveDefaultProps-BarHlGRM.js";import"./CartesianAxis-D4w_zo3U.js";import"./Layer-Dsgs0O8o.js";import"./Text-BLuQUWft.js";import"./DOMUtils-DS-WaQM8.js";import"./Label-OGw7wMde.js";import"./ZIndexLayer--xl3uim8.js";import"./types-Bejjp4Hx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-5-yobk2P.js";import"./step-DzOVAhhf.js";import"./ReactUtils-D8J0Scd8.js";import"./ActivePoints-CvxxlQO1.js";import"./Dot-BPJX98FX.js";import"./RegisterGraphicalItemId-BsfM9YTI.js";import"./GraphicalItemClipPath-CA0a5dPY.js";import"./SetGraphicalItem-CtgQyVhP.js";import"./useAnimationId-HlRR6VOg.js";import"./getRadiusAndStrokeWidthFromDot-1sEj6j-N.js";import"./graphicalItemSelectors-BHTb9orb.js";import"./useElementOffset-D9nHdrIo.js";import"./uniqBy-CvQpRBMV.js";import"./iteratee-C5N7-gfq.js";import"./Cross-B1GXGlDw.js";import"./Rectangle-CdclZ8ZW.js";import"./Sector-9UyeEGs-.js";import"./index-l8sRLK9z.js";import"./ChartSizeDimensions-BJ7Qv0Pi.js";import"./OffsetShower-DBZtide3.js";import"./PlotAreaShower-DKTeWqRs.js";import"./Symbols-xJuY3fVT.js";import"./symbol--t7F40kw.js";const St={component:l},r={render:e=>t.createElement(v,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(T,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null),t.createElement(y,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null),t.createElement(y,null)))},args:{}};var i,m,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
