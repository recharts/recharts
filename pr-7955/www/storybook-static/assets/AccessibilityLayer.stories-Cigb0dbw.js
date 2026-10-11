import{r as A,R as t}from"./iframe-CwCc9vh-.js";import{g as f}from"./utils-ePvtT4un.js";import{C}from"./ComposedChartArgs-CZCIiHke.js";import{C as l}from"./ComposedChart-CBS_Pqtt.js";import{A as E}from"./AreaChart-Ci6XcawW.js";import{p as d}from"./Page-Cj8EiXz7.js";import{C as b}from"./CartesianGrid-CdE1ddqd.js";import{X as g}from"./XAxis-Ck9YwMSg.js";import{Y as h}from"./YAxis-5QleAohG.js";import{A as a}from"./Area-C-gb1HIM.js";import{T as u}from"./Tooltip-SSRdF5XD.js";import{R as k}from"./zIndexSlice-Cze2qQ6L.js";import{L as v}from"./Legend-BhXl-QpG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJt_1m2P.js";import"./resolveDefaultProps-C0sTGtoa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CpT7QqC8.js";import"./throttle-_lHGrg8X.js";import"./index-iNTF2uXo.js";import"./index-DH3c4tMg.js";import"./isWellBehavedNumber-C8Zfj1Nz.js";import"./d3-scale-QIRFRCXO.js";import"./index-CI9Eu4p_.js";import"./index-BLCS5Ged.js";import"./renderedTicksSlice-BhImPZzn.js";import"./index-DQ_TsVb-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BLB-Ua7j.js";import"./chartDataContext-DHHqBQtJ.js";import"./CategoricalChart-a-9gkYtz.js";import"./CartesianAxis-DXF_4xE6.js";import"./Layer-DOFh0lwh.js";import"./Text-BJucpPtg.js";import"./pageBackground-BpRJwl3U.js";import"./useId-DJcNFVPz.js";import"./useBackwardsCompatibleTheme-pKoGpidZ.js";import"./Label-BR9Px2Ae.js";import"./ZIndexLayer-DyEPtPYc.js";import"./types-CQwCfrQn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-PzRACl7b.js";import"./useAnimationId-DnYkrRJp.js";import"./dataEntryStyles-YnhjRNXA.js";import"./ActivePoints-CX_PcgP1.js";import"./Dot-CD_kBVmM.js";import"./GraphicalItemClipPath-DVsVu3E2.js";import"./SetGraphicalItem-0C32PbV4.js";import"./getRadiusAndStrokeWidthFromDot-LnlHxG9T.js";import"./ActiveShapeUtils-BUtkHcUW.js";import"./Curve-nSJilM-Q.js";import"./step-njiuEB0s.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CMqBM7fj.js";import"./useElementOffset-Ywty36ho.js";import"./uniqBy-DTquvHLz.js";import"./iteratee-mrtzC2yj.js";import"./Cross-P1dyhGNf.js";import"./Rectangle-B2tapUkb.js";import"./util-Dxo8gN5i.js";import"./Sector-BTBp3A0f.js";import"./Symbols-k6TXs3KJ.js";import"./symbol-IMV7K2Oq.js";const Ft={component:l},r={render:e=>t.createElement(k,{width:"100%",height:300},t.createElement(l,{margin:{top:20,right:20,bottom:20,left:20},data:d},t.createElement(a,{isAnimationActive:!1,dataKey:"uv",...e}),t.createElement(v,null),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(u,null))),args:f(C),parameters:{docs:{description:{story:"You can tab to this chart. From there, you can use the arrow keys to navigate along the chart."}}}},o={render:()=>{const[e,y]=A.useState(!0);return t.createElement("div",null,t.createElement("button",{type:"button",onClick:()=>y(!e)},"Toggle Tooltip"),t.createElement(E,{width:500,height:400,data:d,margin:{top:10,right:30,left:0,bottom:0}},t.createElement(b,{strokeDasharray:"3 3"}),t.createElement(g,{dataKey:"name"}),t.createElement(h,null),t.createElement(a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),t.createElement(a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),t.createElement(a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),e&&t.createElement(u,null)))},args:{}},Wt=["AreaChartWithAccessibilityLayer","AccessibleWithButton"];var n,i,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
