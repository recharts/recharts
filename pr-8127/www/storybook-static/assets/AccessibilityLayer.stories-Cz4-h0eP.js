import{r as A,R as t}from"./iframe-DG1yZPWZ.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Bg3J3jLh.js";import{A as E}from"./AreaChart-CWw2xxB7.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Y-jvjIpU.js";import{X as g}from"./XAxis-Cx1v_iob.js";import{Y as h}from"./YAxis-D8fDz-Jg.js";import{A as a}from"./Area-CreZnMgk.js";import{T as u}from"./Tooltip-Br9DqoGC.js";import{R as k}from"./zIndexSlice-asfAkO72.js";import{L as v}from"./Legend-Bg__uj4m.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bchp_o7p.js";import"./resolveDefaultProps-zC97C8Ii.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BLyrYAI0.js";import"./throttle-QLzPTGhw.js";import"./index-B8R5wD7Q.js";import"./index-Cm9Dvuha.js";import"./polarAxisSelectors-D8A3KxdK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-p1mp5kit.js";import"./index-BlTUNZQc.js";import"./index-Bt1QYmkD.js";import"./renderedTicksSlice-DtyZfQXr.js";import"./index-D_9rD6su.js";import"./CartesianChart-JxE9ej3_.js";import"./ZIndexPortal-iKAZRpeg.js";import"./CategoricalChart-C_RyWiZg.js";import"./CartesianAxis-D2CTuJLk.js";import"./Layer-DzG8YxQe.js";import"./Text-jtW7RKFp.js";import"./DOMUtils-CnKUAWGq.js";import"./ZIndexLayer-Bf1pNdwz.js";import"./Label-CP0s7Q77.js";import"./types-DqMoKlmp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-D_uX30kF.js";import"./fillDefinitions-C7BJRYTP.js";import"./LabelList-DDOiPfis.js";import"./ActivePoints-CGsYeesF.js";import"./Dot-BvOm6Swm.js";import"./activeStyles-BM7qy7T1.js";import"./useAnimationId-C_9VGehw.js";import"./dataEntryStyles-B8PPCs32.js";import"./Symbols-0F73g9aR.js";import"./symbol-B3qgj-xo.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Cvt15Nbt.js";import"./getRadiusAndStrokeWidthFromDot-Bzdqwx5x.js";import"./ActiveShapeUtils-Dl04D47U.js";import"./Curve-DcJDRZ_G.js";import"./step-U1uI6C26.js";import"./useEffectiveDataKey-Qa_0ZIQ7.js";import"./useElementOffset-gChE2lz3.js";import"./uniqBy-BMDahjm8.js";import"./iteratee-Bd2duUdb.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Or7waBDb.js";import"./Rectangle-BvctkOLL.js";import"./util-Dxo8gN5i.js";import"./Sector-Y0udpFtU.js";const Wt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Xt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
