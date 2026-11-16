import{r as A,R as t}from"./iframe-DHoXusD1.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CDDK98iJ.js";import{A as E}from"./AreaChart-MUlUUrlV.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dfi9spYg.js";import{X as g}from"./XAxis-hvLT-HVR.js";import{Y as h}from"./YAxis-_YVzx5KE.js";import{A as a}from"./Area-3apoXoPv.js";import{T as u}from"./Tooltip-D3ME52ET.js";import{R as k}from"./zIndexSlice-FsvXxdXV.js";import{L as v}from"./Legend-DPl65V_h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B415nsX3.js";import"./resolveDefaultProps-htUurm4w.js";import"./get-cF5BDHN6.js";import"./axisSelectors-pR92cyKp.js";import"./throttle-bPL_CYHd.js";import"./index-CCctG3OF.js";import"./index-lVEyBlWW.js";import"./polarAxisSelectors-BGegD2Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrVNT65M.js";import"./index-Dy3TNkua.js";import"./index-DNIoQSRO.js";import"./renderedTicksSlice-BXV4OD99.js";import"./index-DVO0bVkJ.js";import"./fillDefinitions-BK2qfHam.js";import"./CartesianChart-0nvsDd6J.js";import"./chartDataContext-Cv05qjwa.js";import"./CategoricalChart-C50aZvEG.js";import"./CartesianAxis-D3kgYeFy.js";import"./Layer-DvTlLbe7.js";import"./Text-DGMTORnL.js";import"./ZIndexLayer-ZLuJl0PO.js";import"./Label-DH0ZiH3v.js";import"./types-BuL5d7PW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DjrRjJ6y.js";import"./ActivePoints-Okwmojju.js";import"./Dot-DjtRy0VI.js";import"./activeStyles-CtCkxF9Y.js";import"./useAnimationId-BUoKLqt_.js";import"./Symbols-Buf-PQNY.js";import"./symbol-CzqK2yND.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-x9UkOjiz.js";import"./getRadiusAndStrokeWidthFromDot-JLWstI7V.js";import"./ActiveShapeUtils-CJDCK8tA.js";import"./Curve-CobFJY2m.js";import"./step-7L3GLQ3k.js";import"./useEffectiveDataKey-Ckh-4MN_.js";import"./useElementOffset-0dudveHh.js";import"./uniqBy-Cb8Ka0OF.js";import"./iteratee-DACkWKhu.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dbucp1-Q.js";import"./Rectangle-DvIJVMhk.js";import"./util-Dxo8gN5i.js";import"./Sector-CkJljpkv.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
