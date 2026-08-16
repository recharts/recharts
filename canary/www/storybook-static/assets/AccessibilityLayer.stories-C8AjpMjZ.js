import{r as A,R as t}from"./iframe-GNxtioUR.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-Dx410X4q.js";import{A as E}from"./AreaChart-VzmyHoac.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Wlk7YG0e.js";import{X as g}from"./XAxis-5j17aH8X.js";import{Y as h}from"./YAxis-CbYUO1fa.js";import{A as a}from"./Area-BndWXGHE.js";import{T as u}from"./Tooltip-Di5rr9qC.js";import{R as k}from"./zIndexSlice-D4haQxNn.js";import{L as v}from"./Legend-DfblxIhj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5Lqdjjzz.js";import"./index-CV7IGYk1.js";import"./index-BJVo2ffI.js";import"./index-CN1r47eQ.js";import"./index-DT7OqoJJ.js";import"./throttle-Du4Eduzv.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CsnJkuOW.js";import"./resolveDefaultProps-D5DCSoJx.js";import"./isWellBehavedNumber-B1loF3DE.js";import"./d3-scale-CsslalFd.js";import"./renderedTicksSlice-BNEcUsku.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B0x1kr2K.js";import"./chartDataContext-DEGQ_Aoe.js";import"./CategoricalChart-m_Ids5fk.js";import"./CartesianAxis-NbOP1W-o.js";import"./Layer-DR6S9zl-.js";import"./Text-C79V-s10.js";import"./DOMUtils-UzZI-9_5.js";import"./RechartsThemeContext-BZnANilh.js";import"./Label-C7cFT6-M.js";import"./ZIndexLayer-D7CqA8Uv.js";import"./types-omsl4D4O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ct2IhasV.js";import"./useAnimationId-B4U03xNw.js";import"./ActivePoints-qyzQPqTK.js";import"./Dot-BaVZ6R7S.js";import"./RegisterGraphicalItemId-BVyZPmQY.js";import"./GraphicalItemClipPath-BK71gx_X.js";import"./SetGraphicalItem-vjMpKlni.js";import"./getRadiusAndStrokeWidthFromDot-DMvsMn3-.js";import"./ActiveShapeUtils-McNEEg_Y.js";import"./Curve-DKHt29i6.js";import"./step-b1TCH5-c.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BM42DxsS.js";import"./useElementOffset-nHeneq3D.js";import"./uniqBy-zsY9CiPb.js";import"./iteratee-C5pGeNoI.js";import"./Cross-afqebICI.js";import"./Rectangle-D_z4MU1Y.js";import"./util-Dxo8gN5i.js";import"./Sector-Bj0ATzCd.js";import"./Symbols-C7tvQ4Yw.js";import"./symbol-DxTZmGTB.js";const Dt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Ft=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ft as __namedExportsOrder,Dt as default};
