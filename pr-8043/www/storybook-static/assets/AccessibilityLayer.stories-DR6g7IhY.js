import{r as A,R as t}from"./iframe-BP-lIJn6.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-Di3osW4J.js";import{A as E}from"./AreaChart-tTvB3bgq.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-DjveYuJT.js";import{X as g}from"./XAxis-D7UL0yEG.js";import{Y as h}from"./YAxis-Dyx7Nivk.js";import{A as a}from"./Area-50GoY6LY.js";import{T as u}from"./Tooltip-ChEod8ex.js";import{R as k}from"./zIndexSlice-D3RgJgQF.js";import{L as v}from"./Legend-CqS47HBY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BGn36pC9.js";import"./resolveDefaultProps-BpLU83gk.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B6bM08CR.js";import"./throttle-CRwrBkn8.js";import"./index-B8dZU-9J.js";import"./index-C8ITQajG.js";import"./isWellBehavedNumber-B-TYzgiQ.js";import"./d3-scale-BUOxWIbI.js";import"./index-BOoGZrpB.js";import"./index-j3_diSu4.js";import"./renderedTicksSlice-B2e0mRjq.js";import"./index-BmFIm_LJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BrvlcuUX.js";import"./chartDataContext-DxnoCrzs.js";import"./CategoricalChart-BLzi3Mv1.js";import"./CartesianAxis-B7dTibl7.js";import"./Layer-Dh6XQbJK.js";import"./Text-sFd385s3.js";import"./pageBackground-BxeZOm5U.js";import"./useId-BEGNTi1u.js";import"./useBackwardsCompatibleTheme-CNFi_woZ.js";import"./Label-eMzNaTJc.js";import"./ZIndexLayer-C0Gq1XyH.js";import"./dataEntryStyles-DtR4SG-M.js";import"./types-BDcuyNFB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CaOdi5W_.js";import"./useAnimationId-BeUNfbh5.js";import"./ActivePoints-BnUbRfQW.js";import"./Dot-B-Fku2ox.js";import"./RegisterGraphicalItemId-CJi8bpow.js";import"./GraphicalItemClipPath-_Vh94eGb.js";import"./SetGraphicalItem-CL36LKX_.js";import"./getRadiusAndStrokeWidthFromDot-Bcq6fsJt.js";import"./ActiveShapeUtils-QZxg5z0Q.js";import"./Curve-B-WHWf6z.js";import"./step-1Avpntyj.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-C-3Q7bIW.js";import"./useElementOffset-B4j4ZMKA.js";import"./uniqBy-4sj4Loax.js";import"./iteratee-SNrVc_V2.js";import"./isArguments-yB-y1yaH.js";import"./Cross-HFdQ01ZH.js";import"./Rectangle-CNpXiGQR.js";import"./util-Dxo8gN5i.js";import"./Sector-IagwWihv.js";import"./Symbols-D9c9uDF_.js";import"./symbol-DhQfft-S.js";const Xt={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Ot=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var i,n,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
