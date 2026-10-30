import{R as t}from"./iframe-GbU_LfIz.js";import{R as m}from"./zIndexSlice-B-uY-xMG.js";import{L as s}from"./LineChart-Ce4ukB4U.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-Cz7gfFzY.js";import{X as l}from"./XAxis-BQz4ccrC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DaFP4Osr.js";import"./throttle-lL1L3VRP.js";import"./index-DYswmNhd.js";import"./index-CWvB4q6F.js";import"./RechartsWrapper-CBlrkAx1.js";import"./axisSelectors-plpcnepy.js";import"./polarAxisSelectors-CUkA6wv5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-m-_CTi_p.js";import"./index-Dg1dPLnL.js";import"./index-DZowzVKz.js";import"./renderedTicksSlice-D3e3FCUI.js";import"./index-C9cCXc93.js";import"./CartesianChart-6Jqeuu6_.js";import"./ZIndexPortal-CkMateYW.js";import"./CategoricalChart-C2S0aau2.js";import"./Layer-DZ-BC5fp.js";import"./Curve-BXWlStzO.js";import"./types-D5h1KHjm.js";import"./step-B7eAtOky.js";import"./path-DyVhHtw_.js";import"./LabelList-BpWQDUee.js";import"./Label-BKofA95f.js";import"./Text-CcmXBTPp.js";import"./DOMUtils-pcjvu5Mx.js";import"./ZIndexLayer-jPVQwjvI.js";import"./ActivePoints-CJ_A0ZwJ.js";import"./Dot-BZZrGYAN.js";import"./activeStyles-7gml8bSR.js";import"./useAnimationId-3m5wK_ws.js";import"./dataEntryStyles-C8Sz1tul.js";import"./Symbols-RIc_sULF.js";import"./symbol-B34bQZE8.js";import"./ErrorBarContext-pjK3YX1O.js";import"./SetGraphicalItem-SS1PjTU8.js";import"./getRadiusAndStrokeWidthFromDot-DZIWxG1k.js";import"./ActiveShapeUtils-t8cc3cab.js";import"./useEffectiveDataKey-DF49AIat.js";import"./CartesianAxis-DWEGImEY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
