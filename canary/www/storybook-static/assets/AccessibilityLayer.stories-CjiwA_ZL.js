import{r as A,R as t}from"./iframe-CQZPQf4O.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-BrH5TOj4.js";import{A as E}from"./AreaChart-DZETEFDZ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-9KogdII6.js";import{X as g}from"./XAxis-vMRVH8Ao.js";import{Y as h}from"./YAxis-BXIOSjAZ.js";import{A as a}from"./Area-PuaUrlsv.js";import{T as u}from"./Tooltip-EX89F-vs.js";import{R as k}from"./zIndexSlice-BxTiYWdU.js";import{L as v}from"./Legend-BUo0Nb3s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CKHlp-Rt.js";import"./resolveDefaultProps-DgVJwWbR.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Or82bYZb.js";import"./throttle-AnGuXVWW.js";import"./index-CHepiqPh.js";import"./index-D3lB8fDF.js";import"./isWellBehavedNumber-BVjPIj2C.js";import"./d3-scale-Dh160Q_7.js";import"./index-CEP5bmmA.js";import"./index-BCncLH8b.js";import"./renderedTicksSlice-DwLtgLm9.js";import"./index-XXc_9p_2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BGmWQkFH.js";import"./chartDataContext-BFYg2JX8.js";import"./CategoricalChart-DpdoG3FY.js";import"./CartesianAxis-CO8voLuT.js";import"./Layer-C-YS-hE0.js";import"./Text-FG9LsITf.js";import"./pageBackground-VSL8VAH8.js";import"./useId-CKB20m-R.js";import"./useBackwardsCompatibleTheme-DinZCZAi.js";import"./Label-CwpPaPRc.js";import"./ZIndexLayer-BKLTAFCk.js";import"./types-Q9Uebpou.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CbDR06hO.js";import"./useAnimationId-C5Lal4Ku.js";import"./dataEntryStyles-CEFXctA4.js";import"./ActivePoints-DDJZk_do.js";import"./Dot-D6DMXsNr.js";import"./GraphicalItemClipPath-BdCokK_0.js";import"./SetGraphicalItem-LkBJ9I3O.js";import"./getRadiusAndStrokeWidthFromDot-DsehLS7A.js";import"./ActiveShapeUtils-Dx4Ozko3.js";import"./Curve-CEf8Z_wT.js";import"./step-B5PbnVsw.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CCE12RzB.js";import"./useElementOffset-CNsQVFGU.js";import"./uniqBy-CT-lLGIP.js";import"./iteratee-rt63w_5K.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BVgaSCxL.js";import"./Rectangle-DRkwNU_p.js";import"./util-Dxo8gN5i.js";import"./Sector-B8sO8x4j.js";import"./Symbols-C7CdNj5F.js";import"./symbol-OvqjbrCm.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Xt as __namedExportsOrder,Wt as default};
