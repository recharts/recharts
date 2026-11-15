import{r as A,R as t}from"./iframe-Ca1UrYHb.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BQRHe03d.js";import{A as E}from"./AreaChart-BcT4ki3r.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DzzAYDlT.js";import{X as g}from"./XAxis-fyR759Im.js";import{Y as h}from"./YAxis--Ne3LUdW.js";import{A as a}from"./Area-7ea9QB8L.js";import{T as u}from"./Tooltip-B8lwG9Ea.js";import{R as k}from"./zIndexSlice-DkJuOKqH.js";import{L as v}from"./Legend-CKpK190F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DpgD45ps.js";import"./resolveDefaultProps-C7Zn3GIw.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dxz5Fo81.js";import"./throttle-CQ25M_Sr.js";import"./index-DyyWsaDx.js";import"./index-BL3iJc3a.js";import"./polarAxisSelectors-BJjdmelv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BSpvxsSq.js";import"./index-CGbgMVTZ.js";import"./index-CeJ-_gAW.js";import"./renderedTicksSlice-C6Llf2gZ.js";import"./index-CXh6mJLx.js";import"./fillDefinitions-CGDilicc.js";import"./CartesianChart-Ahhse01G.js";import"./chartDataContext-Nvu6nj5u.js";import"./CategoricalChart-Cbl_4Ofw.js";import"./CartesianAxis-C2LROGDs.js";import"./Layer-YpjF2SE4.js";import"./Text-CG61ars6.js";import"./ZIndexLayer-84bYvzQv.js";import"./Label-Df_VmgSa.js";import"./types-DxtdvItD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-HIGj4PG3.js";import"./ActivePoints-DFCTzNYL.js";import"./Dot-7od_5Z4B.js";import"./activeStyles-gkqlHaiP.js";import"./useAnimationId-Dpl0bF--.js";import"./Symbols-DCcF1Btd.js";import"./symbol-C0Dz9CIF.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BYm76vy-.js";import"./getRadiusAndStrokeWidthFromDot-B4kLZYpF.js";import"./ActiveShapeUtils-83_vs6lS.js";import"./Curve-_7igEkPt.js";import"./step-BwzpgB8P.js";import"./useEffectiveDataKey-mZIPn9UL.js";import"./useElementOffset-bheOR33N.js";import"./uniqBy-BWay3J3F.js";import"./iteratee-D2oTiGUc.js";import"./isArguments-yB-y1yaH.js";import"./Cross-COR7fnF3.js";import"./Rectangle-CrzCB3zu.js";import"./util-Dxo8gN5i.js";import"./Sector-D52HjYRR.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Dt as __namedExportsOrder,Yt as default};
