import{r as A,R as t}from"./iframe-DNsV3xvw.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-DUPDtyKq.js";import{A as E}from"./AreaChart-D6TtoR54.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DGcV3WTC.js";import{X as g}from"./XAxis-BbuAR6XK.js";import{Y as h}from"./YAxis-B4nJYauW.js";import{A as a}from"./Area-D7YjPhoR.js";import{T as u}from"./Tooltip-dsGCuWUX.js";import{R as k}from"./zIndexSlice-BkDmHlXx.js";import{L as v}from"./Legend-B1543AzP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BitdsUuz.js";import"./resolveDefaultProps-DaIQaOsN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DtPl2Lwd.js";import"./throttle-CpyfnSH3.js";import"./index-Dztf8_-N.js";import"./index-CvtjAZLm.js";import"./polarAxisSelectors-wmmlw52W.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Y31MRKoT.js";import"./index-DpSt1MRy.js";import"./index-Byk9LK8-.js";import"./renderedTicksSlice-gGubTrlw.js";import"./index-HmVV84Ak.js";import"./CartesianChart-CQXK8dPk.js";import"./ZIndexPortal-D_VHs3j1.js";import"./CategoricalChart-Dkljh1MP.js";import"./CartesianAxis-BNXXsiE3.js";import"./Layer-CxNpu0Gw.js";import"./Text-D6nhI6eC.js";import"./pageBackground-DcwhSKr2.js";import"./ZIndexLayer-B29GXU_O.js";import"./Label-DxEHX6q3.js";import"./dataEntryStyles-BPFhmlnt.js";import"./types-En29vQtS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Dxbb0X28.js";import"./ActivePoints-Wn9kmDE8.js";import"./Dot-2Y-Kuv4T.js";import"./activeStyles-BmYbBsXF.js";import"./useAnimationId-BFFnWfJy.js";import"./Symbols-CXxyrJ-f.js";import"./symbol-Da48TnzF.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-0BinVrEN.js";import"./SetGraphicalItem-BMxaBFjY.js";import"./getRadiusAndStrokeWidthFromDot-DYbmzRmX.js";import"./ActiveShapeUtils-DHdP5lJT.js";import"./Curve-CuwsmGsN.js";import"./step-Bt130Gb4.js";import"./useEffectiveDataKey-BlrFpRwa.js";import"./useElementOffset-D3m42K-G.js";import"./uniqBy-C1A792zL.js";import"./iteratee-D19tejeG.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BZdzCkxq.js";import"./Rectangle-DYTWCfMr.js";import"./util-Dxo8gN5i.js";import"./Sector-C0Y8jgkt.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
