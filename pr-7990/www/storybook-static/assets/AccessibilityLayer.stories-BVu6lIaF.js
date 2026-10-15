import{r as A,R as t}from"./iframe--dVKNbCw.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BWbHkL8w.js";import{A as E}from"./AreaChart-BpySmJO7.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DgaxWxgi.js";import{X as g}from"./XAxis-CO1xFj8-.js";import{Y as h}from"./YAxis-dK_EcPxW.js";import{A as a}from"./Area-8SpwSzCk.js";import{T as u}from"./Tooltip-CUr8_T9Y.js";import{R as k}from"./zIndexSlice-CpZXb3K1.js";import{L as v}from"./Legend-BXS76eI6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRzg3fGD.js";import"./resolveDefaultProps-19MGuD5L.js";import"./get-C2VjdU0L.js";import"./axisSelectors-asW4dLtq.js";import"./throttle-Vdk2BIuN.js";import"./index-BwEVofa3.js";import"./index-vo2of-1-.js";import"./isWellBehavedNumber-D1RSe1xb.js";import"./d3-scale-Daiirif0.js";import"./index-11dfO-im.js";import"./index-Bm7T0tPh.js";import"./renderedTicksSlice-DVZBX-9w.js";import"./index-BXnIb1gt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-H_ULY9r1.js";import"./chartDataContext-BbvPlaK7.js";import"./CategoricalChart-D868Clfo.js";import"./CartesianAxis-DUU6iCh1.js";import"./Layer-DfItUnsr.js";import"./Text-ah79KUdU.js";import"./pageBackground-BuDL1xc_.js";import"./useId--mgRrHy6.js";import"./useBackwardsCompatibleTheme-D4D1b67A.js";import"./Label-BMbpqhNX.js";import"./ZIndexLayer-BW0svFjl.js";import"./types-CJbJ0IDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Kpuk4WPq.js";import"./useAnimationId-Rf69jy07.js";import"./dataEntryStyles-Cq_oAnz_.js";import"./ActivePoints-DkHKRT6s.js";import"./Dot-SmgdmdqO.js";import"./GraphicalItemClipPath-CTsg__fe.js";import"./SetGraphicalItem-BLl6tKFV.js";import"./getRadiusAndStrokeWidthFromDot-CZD0qUAD.js";import"./ActiveShapeUtils-DZz0A4i8.js";import"./Curve-goXmosWw.js";import"./step-Cg-bszWe.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DluS1fAA.js";import"./useElementOffset-Bk-O-pyy.js";import"./uniqBy--toTvk6J.js";import"./iteratee-DuvGNWXG.js";import"./Cross-D5_gCULz.js";import"./Rectangle-60MF1n22.js";import"./util-Dxo8gN5i.js";import"./Sector-BY6auqMT.js";import"./Symbols-C18p8MLn.js";import"./symbol-DAEoc_mM.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
