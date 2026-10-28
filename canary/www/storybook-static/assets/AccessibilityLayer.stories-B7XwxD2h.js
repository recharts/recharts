import{r as A,R as t}from"./iframe-BmTk4yvk.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Bc1PW_h6.js";import{A as E}from"./AreaChart-C7vmcjA_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DAZJ0ohS.js";import{X as g}from"./XAxis-p_vhpROA.js";import{Y as h}from"./YAxis-BmZ1tujZ.js";import{A as a}from"./Area-DDX-1dA6.js";import{T as u}from"./Tooltip-Dbu0x0bj.js";import{R as k}from"./zIndexSlice-Yn5j7TCZ.js";import{L as v}from"./Legend-zZbYOXdd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4oIzQNw.js";import"./resolveDefaultProps-Cn0PCCle.js";import"./get-cF5BDHN6.js";import"./axisSelectors-jta8-9EA.js";import"./throttle-C169ds0A.js";import"./index-iOVTbJVR.js";import"./index-DmmaZxkJ.js";import"./polarAxisSelectors-DyW5Xsuk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_DRoaP4.js";import"./index-D6yCXLHc.js";import"./index-D-9h2rsp.js";import"./renderedTicksSlice-Dl_orwkE.js";import"./index-DOadfo9X.js";import"./CartesianChart-Fep-b6_D.js";import"./ZIndexPortal-CWm5UVGf.js";import"./CategoricalChart-D92RpbLO.js";import"./CartesianAxis-DCukA67Z.js";import"./Layer-DW7OR7eh.js";import"./Text-U4GGp_wV.js";import"./pageBackground-QX1GlboQ.js";import"./ZIndexLayer-DvmFXfZN.js";import"./Label-CYaQfkAd.js";import"./types-BwQb0UT4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DAIqpE2b.js";import"./ActivePoints-D2fdi6S1.js";import"./Dot-DCITuPps.js";import"./activeStyles-PiE_qWsW.js";import"./useAnimationId-Crx209Lx.js";import"./dataEntryStyles-D6I3YMTN.js";import"./Symbols-C5McylxL.js";import"./symbol-DPYOxqZZ.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DFIrza8W.js";import"./getRadiusAndStrokeWidthFromDot-K0OFVwh2.js";import"./ActiveShapeUtils-DOogD9OD.js";import"./Curve-DHjJHUtL.js";import"./step-X3pWD_rY.js";import"./useEffectiveDataKey-B__g_9Jm.js";import"./useElementOffset-DovHdXKI.js";import"./uniqBy-CVbVBefT.js";import"./iteratee-Hm5_kqpS.js";import"./isArguments-yB-y1yaH.js";import"./Cross-lS0mKWas.js";import"./Rectangle-BQWOwYE7.js";import"./util-Dxo8gN5i.js";import"./Sector-D6DggYJm.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
