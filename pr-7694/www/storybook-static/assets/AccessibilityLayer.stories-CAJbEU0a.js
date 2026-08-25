import{r as A,R as t}from"./iframe-CkYMKdj_.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CgvqQqFx.js";import{C as l}from"./ComposedChart-aFeYXy0e.js";import{A as E}from"./AreaChart-7GiFgpDP.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-Dh6FTCJi.js";import{X as g}from"./XAxis-C0aJOre-.js";import{Y as h}from"./YAxis-U8fHQD44.js";import{A as a}from"./Area-D8Jc6JqZ.js";import{T as u}from"./Tooltip-BRYuRKa0.js";import{R as k}from"./zIndexSlice-BYtB_o4a.js";import{L as v}from"./Legend-JWH7LkBR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-nO0TmJ-v.js";import"./index-E2SMYanO.js";import"./index-DL62tWXC.js";import"./index-C3dUdvXE.js";import"./index-DXIKdrQ_.js";import"./throttle-BoLMdPdD.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C8zY5_Jl.js";import"./resolveDefaultProps-Cash8-Wc.js";import"./isWellBehavedNumber-D3nu-dTg.js";import"./d3-scale-DbX3n6Vg.js";import"./renderedTicksSlice-BQ9kQeWp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CFe3I3j0.js";import"./chartDataContext-B1d2oGRw.js";import"./CategoricalChart-ceXzvbTP.js";import"./CartesianAxis-CwqvTQH4.js";import"./Layer-DM-j75FJ.js";import"./Text-DLxJgi7q.js";import"./DOMUtils-CRMwsydF.js";import"./useId-vngItXwU.js";import"./useBackwardsCompatibleTheme-BDT9ZxVM.js";import"./Label-nwXUgC1e.js";import"./ZIndexLayer-CYcyrDOa.js";import"./types-lWnA8D12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DOwp1bhS.js";import"./useAnimationId-BMO_95FO.js";import"./ActivePoints-SNTIAa6X.js";import"./Dot-DTKTIC4o.js";import"./RegisterGraphicalItemId-xAUQoTNg.js";import"./GraphicalItemClipPath-65lu28GO.js";import"./SetGraphicalItem-BDY3wpRw.js";import"./getRadiusAndStrokeWidthFromDot-B4vOHjlt.js";import"./ActiveShapeUtils-DdvFeJee.js";import"./Curve-BKPB57y0.js";import"./step-CVVw7_T2.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DtWqI1-3.js";import"./useElementOffset-Dp-ixcz-.js";import"./uniqBy-ae7h2v4h.js";import"./iteratee-wG1Ynzn8.js";import"./Cross-DxzeFLuu.js";import"./Rectangle-BmPDkiT-.js";import"./util-Dxo8gN5i.js";import"./Sector-DqYEpefa.js";import"./Symbols-BU2IqvHD.js";import"./symbol-ClBpnaaq.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}};var i,m,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Wt as __namedExportsOrder,Ft as default};
