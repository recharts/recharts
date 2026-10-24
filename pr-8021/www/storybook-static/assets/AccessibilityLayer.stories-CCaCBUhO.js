import{r as A,R as t}from"./iframe-TJn1iDy_.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CjLYC499.js";import{A as E}from"./AreaChart-CJIu2EGi.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DZkiD9Lt.js";import{X as g}from"./XAxis-B_y5feDu.js";import{Y as h}from"./YAxis-BwpngE3S.js";import{A as a}from"./Area-gJsL3PNd.js";import{T as u}from"./Tooltip-BSqGhAg7.js";import{R as k}from"./zIndexSlice-DcxCrJas.js";import{L as v}from"./Legend-PfieIbyg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGWm-04h.js";import"./resolveDefaultProps-B1uePsee.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BRmQ6VbT.js";import"./throttle-boe4gmWF.js";import"./index-CAYNC06-.js";import"./index-BNRC9x_2.js";import"./isWellBehavedNumber-BKYnvYyY.js";import"./d3-scale-VVBOPfYG.js";import"./index-Cwz_ZaMA.js";import"./index-CAMm0n22.js";import"./renderedTicksSlice-SWpas3hv.js";import"./index-DfZWRiOw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-a7iVuIbn.js";import"./chartDataContext-Lnk93lz4.js";import"./CategoricalChart-CtiAUO9e.js";import"./CartesianAxis-D8sqtaMD.js";import"./Layer-tyJENV3V.js";import"./Text-Lhe6e02h.js";import"./pageBackground-CtZ35NZS.js";import"./useId-DKCqn9Eo.js";import"./useBackwardsCompatibleTheme-BsIvvZ0r.js";import"./Label-DOD1E2dd.js";import"./ZIndexLayer-qm_XHo-2.js";import"./dataEntryStyles-XnzxZhd6.js";import"./types-Bczg7GWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-C-8W4HoU.js";import"./useAnimationId-BdprCSjI.js";import"./ActivePoints-BHSnIp6Z.js";import"./Dot-DGaRCVJg.js";import"./RegisterGraphicalItemId-BU8lHAsW.js";import"./GraphicalItemClipPath-CEc-GXor.js";import"./SetGraphicalItem-DSOEOPaP.js";import"./getRadiusAndStrokeWidthFromDot-uMuQLm3-.js";import"./ActiveShapeUtils-BTqqsbMk.js";import"./Curve-DyBM506c.js";import"./step-L1YHvbsX.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-7HT13U9Y.js";import"./useElementOffset-ByIXs8dn.js";import"./uniqBy-D8c_4GJh.js";import"./iteratee-uwfmLxFV.js";import"./isArguments-yB-y1yaH.js";import"./Cross-n-dHaQZZ.js";import"./Rectangle-Bx76BAa_.js";import"./util-Dxo8gN5i.js";import"./Sector-D5ozlMYp.js";import"./Symbols-D6Gufs_M.js";import"./symbol-BnJbKXnp.js";const Xt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ot=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{o as AccessibleWithButton,r as AreaChartWithAccessibilityLayer,Ot as __namedExportsOrder,Xt as default};
