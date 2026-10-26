import{r as A,R as t}from"./iframe-CV_Focqb.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-MH3garqG.js";import{A as E}from"./AreaChart-DybU_mQJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BS3o8ll8.js";import{X as g}from"./XAxis-CbmbdddR.js";import{Y as h}from"./YAxis-B-5hoebp.js";import{A as a}from"./Area-D6p8A8rj.js";import{T as u}from"./Tooltip-DeD9NHFI.js";import{R as k}from"./zIndexSlice-BMlZ-BTA.js";import{L as v}from"./Legend-BTHfZ4-s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gHoUEC4B.js";import"./resolveDefaultProps-BHR6OE-9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BxeWYXvo.js";import"./throttle-B3rCyY-p.js";import"./index-CjhSLlbk.js";import"./index-Beg8UZ9d.js";import"./polarAxisSelectors-C3BM8mNN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaWFw3Yv.js";import"./index-CURBXMxT.js";import"./index-B3f3WOos.js";import"./renderedTicksSlice-BoOYYKQz.js";import"./index-M6ICInBl.js";import"./CartesianChart-Db9Ekhbm.js";import"./ZIndexPortal-AZ5cZsws.js";import"./CategoricalChart-DWAHsGuD.js";import"./CartesianAxis-CQt-kkqP.js";import"./Layer-CsEez_y-.js";import"./Text-DkcQkg85.js";import"./pageBackground-CnYdCkRU.js";import"./ZIndexLayer-mZMt123c.js";import"./Label-Du5iQDtH.js";import"./dataEntryStyles-BVJSTixW.js";import"./types-DM7Vi8Am.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DREKrdKH.js";import"./ActivePoints-CZ1Bkl4s.js";import"./Dot-BSQDV2JF.js";import"./activeStyles-gddFfhxG.js";import"./useAnimationId-DuuBzQL8.js";import"./Symbols-iEBpa06p.js";import"./symbol-CX01f9Tn.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-r-VYbJMs.js";import"./SetGraphicalItem-BpTteZzJ.js";import"./getRadiusAndStrokeWidthFromDot-BmGx7Z4E.js";import"./ActiveShapeUtils-180icphM.js";import"./Curve-BuhBl-mk.js";import"./step-BlU7WG28.js";import"./useEffectiveDataKey-CjigGJWt.js";import"./useElementOffset-BdGXytv2.js";import"./uniqBy-CNcyodij.js";import"./iteratee-D2eul8Fy.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DKgdkYiG.js";import"./Rectangle-DkrXeBYw.js";import"./util-Dxo8gN5i.js";import"./Sector-BG1ok6Xp.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
