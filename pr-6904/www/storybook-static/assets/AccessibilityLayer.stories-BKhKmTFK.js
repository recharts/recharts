import{e as t,r as A}from"./iframe-CpNu1JlZ.js";import{g as C}from"./utils-ePvtT4un.js";import{C as k}from"./ComposedChartArgs-C2i17Xi4.js";import{C as l}from"./ComposedChart-BI4mwn7j.js";import{R as E}from"./arrayEqualityCheck-BJH8Jf6v.js";import{A as a}from"./Area-DW1Mf95P.js";import{L as b}from"./Legend-CMxJpZ-g.js";import{X as d}from"./XAxis-4Sxw4UkR.js";import{Y as g}from"./YAxis-B8FElgTt.js";import{T as h}from"./Tooltip-BDYCU4M-.js";import{R as u}from"./RechartsHookInspector-BmpKM6Nz.js";import{A as v}from"./AreaChart-_HFENysE.js";import{C as T}from"./CartesianGrid-I2wQTv9V.js";import{p as y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0hOTWq_R.js";import"./hooks-C6Ia6Lfs.js";import"./axisSelectors-BBvb1V6K.js";import"./zIndexSlice-DY-K2-IQ.js";import"./resolveDefaultProps-W5bbcHB0.js";import"./PolarUtils-D3v-RsLH.js";import"./CartesianChart-DJav-J6T.js";import"./chartDataContext-D9xDPkuR.js";import"./CategoricalChart-BHgD9gAO.js";import"./Curve-BgSSBByK.js";import"./types-DLbIt3jn.js";import"./Layer-CgGUTlVA.js";import"./ReactUtils-DkvyTuz_.js";import"./Label-BZ3pAw6v.js";import"./Text-CcMcwnEY.js";import"./DOMUtils-Bq1JWBRd.js";import"./ZIndexLayer-BhjXIlXu.js";import"./ActivePoints-DW3qXorP.js";import"./Dot-DHMhFj_F.js";import"./RegisterGraphicalItemId-D7Qen5Xd.js";import"./GraphicalItemClipPath-CxPnAcc7.js";import"./SetGraphicalItem-B-5mlAj6.js";import"./useAnimationId-B5QsM2o0.js";import"./getRadiusAndStrokeWidthFromDot-CA6t2h0u.js";import"./graphicalItemSelectors-Cu7wL7ie.js";import"./Symbols-BLQ2T1a8.js";import"./useElementOffset-CTfVH7U4.js";import"./iteratee-CHvlDlHn.js";import"./CartesianAxis-DHgD0c-6.js";import"./Cross-DZ0IO1Uo.js";import"./Rectangle-DpK3ty__.js";import"./Sector-CFrzjDGx.js";import"./index-BjecE5DL.js";import"./ChartSizeDimensions-Q_MjQJbH.js";import"./OffsetShower-CV2zUXL0.js";import"./PlotAreaShower-Bf09ZPlm.js";const bt={component:l},r={render:e=>t.createElement(E,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:y},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(b,null),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(h,null),t.createElement(u,null))),args:C(k),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,f]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>f(!e)},"Toggle Tooltip"),t.createElement(v,{width:500,height:400,data:y,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(h,null),t.createElement(u,null)))},args:{}};var i,n,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,p,c;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const vt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,vt as __namedExportsOrder,bt as default};
