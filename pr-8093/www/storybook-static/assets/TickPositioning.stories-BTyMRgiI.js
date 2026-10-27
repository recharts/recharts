import{R as t}from"./iframe-BhkmDUK8.js";import{R as m}from"./zIndexSlice-Cx3NgCbD.js";import{L as s}from"./LineChart-DdO-IcuH.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DgKeyyKw.js";import{X as l}from"./XAxis-C6NctsPw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CBrUOLtb.js";import"./throttle-BvBRI7mu.js";import"./index-BGM2KozU.js";import"./index-Co7lnbSI.js";import"./RechartsWrapper-DFqlV8En.js";import"./axisSelectors-iANbDNdr.js";import"./polarAxisSelectors-BxjhUIGd.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-6P_5w6kZ.js";import"./index-CMvdSvcn.js";import"./index-DbiGNxfl.js";import"./renderedTicksSlice-BaGEcMV8.js";import"./index-EMj2ovmv.js";import"./CartesianChart-DAEGsrX3.js";import"./ZIndexPortal-B4U04QBk.js";import"./CategoricalChart-DsbjL1iZ.js";import"./Layer-DN_2iRDC.js";import"./Curve-BHBAmygs.js";import"./types-CU7_71qS.js";import"./step-Bs1-0DQI.js";import"./path-DyVhHtw_.js";import"./LabelList-CB1bAazX.js";import"./Label-BVWylkM-.js";import"./Text-DMX7oKTI.js";import"./pageBackground-4Wz1Kk9n.js";import"./ZIndexLayer-CK_kCyLL.js";import"./dataEntryStyles-BVrjnugi.js";import"./ActivePoints-BLD8htC5.js";import"./Dot-Cu6BzPzv.js";import"./activeStyles-Bn41iv6z.js";import"./useAnimationId-49rixTyB.js";import"./Symbols-DztLe2AE.js";import"./symbol-C9i3gtuu.js";import"./RegisterGraphicalItemId-BQIh3gpM.js";import"./ErrorBarContext-BtfMVugS.js";import"./SetGraphicalItem-B5IS3skS.js";import"./getRadiusAndStrokeWidthFromDot-B2MvN2Za.js";import"./ActiveShapeUtils-DRwsgq7-.js";import"./useEffectiveDataKey-C5G10thl.js";import"./CartesianAxis-BmcJMrp5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const st={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},ct=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{r as TickPositioning,ct as __namedExportsOrder,st as default};
