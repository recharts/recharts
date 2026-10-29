import{R as t}from"./iframe-BWDOX6-u.js";import{R as m}from"./zIndexSlice-DNz64E0x.js";import{L as s}from"./LineChart-BSMb-Lal.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-CuDWoKpi.js";import{X as l}from"./XAxis-Bg1rIWpH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BcUHQ_F5.js";import"./throttle-CylvlJBG.js";import"./index-DzgZ7zsu.js";import"./index-DnIYcPIz.js";import"./RechartsWrapper-BRyXUEk1.js";import"./axisSelectors-DEg5_gPJ.js";import"./polarAxisSelectors-DK35yTF0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B4wSjZj4.js";import"./index-BJ2UcSZQ.js";import"./index-w7-d2vln.js";import"./renderedTicksSlice-BqxX5aIt.js";import"./index-KUhAAXQC.js";import"./CartesianChart-BPCuN6sc.js";import"./ZIndexPortal-BU5aU1wi.js";import"./CategoricalChart--0r08YsN.js";import"./Layer-DzTaBPhB.js";import"./Curve-CrU39aeO.js";import"./types-Kg6mNYCQ.js";import"./step-Cs1Ofcpa.js";import"./path-DyVhHtw_.js";import"./LabelList-Bpfp_vOc.js";import"./Label-C7PH8HeI.js";import"./Text-BC76d3cf.js";import"./pageBackground-B9VN7P3l.js";import"./ZIndexLayer-BpYNbZQ_.js";import"./ActivePoints-CMBx6Neg.js";import"./Dot-BD2cxhmc.js";import"./activeStyles-1bnNLlnc.js";import"./useAnimationId-DnCcjn8H.js";import"./dataEntryStyles-BX1vU1kO.js";import"./Symbols-BzcCXNpL.js";import"./symbol-X6QlfoW2.js";import"./ErrorBarContext-CMdxFUFX.js";import"./SetGraphicalItem-DERdfH3j.js";import"./getRadiusAndStrokeWidthFromDot-02xZ6iGX.js";import"./ActiveShapeUtils-7f2VgziP.js";import"./useEffectiveDataKey-D_c8pfvC.js";import"./CartesianAxis-DBuYWNnG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,st as __namedExportsOrder,mt as default};
