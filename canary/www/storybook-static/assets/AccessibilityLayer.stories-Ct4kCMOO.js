import{r as A,R as t}from"./iframe-G0Ik9O6t.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-B4cIjG4K.js";import{A as E}from"./AreaChart-HW4u1yWi.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-SNQDCFgv.js";import{X as g}from"./XAxis-CWTgMLCK.js";import{Y as h}from"./YAxis-CryECj4R.js";import{A as a}from"./Area-BadJRlJi.js";import{T as u}from"./Tooltip-UEHO_gYO.js";import{R as k}from"./zIndexSlice-CYnNRWxE.js";import{L as v}from"./Legend-d7TBOIw0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0SK3-tY.js";import"./resolveDefaultProps-6jYqE8VH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D9yir6Xs.js";import"./throttle-0RzAOwSl.js";import"./index-DJn7_RRX.js";import"./index-BSx-eOuX.js";import"./polarAxisSelectors-DbTpX6rz.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B1oMv4d2.js";import"./index-CZjz2J7d.js";import"./index-CrEwjtpS.js";import"./renderedTicksSlice-DJGvkPcQ.js";import"./index-yaYz5_hL.js";import"./fillDefinitions-DtfSekMJ.js";import"./CartesianChart-D9yJCYyl.js";import"./ZIndexPortal-DXabDpK4.js";import"./CategoricalChart-62rauA-s.js";import"./CartesianAxis-CcGZ5e89.js";import"./Layer-DsYtJDK_.js";import"./Text-B4HlcW6K.js";import"./DOMUtils-BLMelfj-.js";import"./ZIndexLayer-rUK8h3YF.js";import"./Label-CylpphjQ.js";import"./types-D7lN_jRq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Bc94H-h2.js";import"./ActivePoints-DtZW7fDP.js";import"./Dot-CCKVvK0p.js";import"./activeStyles-BHukLnjd.js";import"./useAnimationId-BSSTqixR.js";import"./dataEntryStyles-C4cqIMlE.js";import"./Symbols-DuXBDnMk.js";import"./symbol-D_Su1EIX.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CbwdoUqN.js";import"./getRadiusAndStrokeWidthFromDot-BGcbbY8R.js";import"./ActiveShapeUtils-BT1ALZoA.js";import"./Curve-BM_Sw2Bx.js";import"./step-CKk5L9t9.js";import"./useEffectiveDataKey-DGTKBWN-.js";import"./useElementOffset-Cix9UpUK.js";import"./uniqBy-CkgI_JIc.js";import"./iteratee-lKPQ2sEZ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BC0HZx5f.js";import"./Rectangle-BekZI2Ti.js";import"./util-Dxo8gN5i.js";import"./Sector-23XJgAX_.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
