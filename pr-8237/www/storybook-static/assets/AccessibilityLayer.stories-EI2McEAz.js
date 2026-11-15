import{r as A,R as t}from"./iframe-C75BlFXB.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Bw6iA5fE.js";import{A as E}from"./AreaChart-BEkbI-Wv.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-BLhPxh__.js";import{X as g}from"./XAxis-bu4t9p5Z.js";import{Y as h}from"./YAxis-CM0RKDPz.js";import{A as a}from"./Area-Bmz2h3eF.js";import{T as u}from"./Tooltip-CsPa7k05.js";import{R as k}from"./zIndexSlice-4GxCw66H.js";import{L as v}from"./Legend-tyGKAzo8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Di9_KxKG.js";import"./resolveDefaultProps-CF3TLSY4.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DvLkyA4P.js";import"./throttle-BrgJpY2A.js";import"./index-Ce13AGyB.js";import"./index-CWJaW9bb.js";import"./polarAxisSelectors-Dz-eHC-D.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-PhqlfAou.js";import"./index-BoIFErVW.js";import"./index-EzgMka2g.js";import"./renderedTicksSlice-Culw3tiU.js";import"./index-aBb4My7l.js";import"./fillDefinitions-Bn6BAHMd.js";import"./CartesianChart-DnnmNz3w.js";import"./chartDataContext-BTXdmqoO.js";import"./CategoricalChart-FqiOzffn.js";import"./CartesianAxis-Cq0K36Zo.js";import"./Layer-9txovic7.js";import"./Text-CFNdT-9W.js";import"./ZIndexLayer-SbUjc4VB.js";import"./Label-D2Ecv790.js";import"./types-B1z8Z6Cy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-D_1EIJ1_.js";import"./ActivePoints-CHWcM_kG.js";import"./Dot-DNLFUQdl.js";import"./activeStyles-DZYHYdm_.js";import"./useAnimationId-BsyXEGTp.js";import"./Symbols-DWw2Hw6G.js";import"./symbol-BbI-T7nn.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CZU_HqN4.js";import"./getRadiusAndStrokeWidthFromDot-DHebNLcs.js";import"./ActiveShapeUtils-5rtEYr00.js";import"./Curve-BlWbOZj8.js";import"./step--aXjfd4u.js";import"./useEffectiveDataKey-8cfDXulc.js";import"./useElementOffset-ryIYl6el.js";import"./uniqBy-IpgSihwf.js";import"./iteratee-BtVXkLhx.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CNymXMwN.js";import"./Rectangle-LhN5JgeO.js";import"./util-Dxo8gN5i.js";import"./Sector-DFCDDdkD.js";const Yt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Dt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
