import{R as t}from"./iframe-CFREJgKh.js";import{R as m}from"./zIndexSlice-BlChPiJc.js";import{L as s}from"./LineChart-BsM3JoCk.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-RQeT_xTt.js";import{X as l}from"./XAxis-C8rslJeD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D2NJN12P.js";import"./throttle-D0fuDWYv.js";import"./index-BnRinVhV.js";import"./index-9ppQqeZ5.js";import"./RechartsWrapper-i5dbrXIz.js";import"./axisSelectors-BWBf8JbO.js";import"./polarAxisSelectors-U9vqJLN4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CSfabLms.js";import"./index-DNbnfthz.js";import"./index-CXWxUzol.js";import"./renderedTicksSlice-BlPhjOzM.js";import"./index-BMrIm2ob.js";import"./CartesianChart-DKqxdz5e.js";import"./ZIndexPortal-CxkIiCll.js";import"./CategoricalChart-wyRiJqKi.js";import"./Layer-C0qOZ959.js";import"./Curve-CftG2h3G.js";import"./types-DVbjgkU5.js";import"./step-BcalNNwl.js";import"./path-DyVhHtw_.js";import"./LabelList-D_a5qFT1.js";import"./Label-CqB5IeGz.js";import"./Text-CdYm4waL.js";import"./pageBackground-BhcEVreL.js";import"./ZIndexLayer-C1WGeCae.js";import"./ActivePoints-C0jpDbhM.js";import"./Dot-CbZEK9HK.js";import"./activeStyles-DZOohqxv.js";import"./useAnimationId-D_reCqg_.js";import"./dataEntryStyles-D-tUw7To.js";import"./Symbols-C448CvWL.js";import"./symbol-nJMR8kbN.js";import"./ErrorBarContext-Ckc5teto.js";import"./SetGraphicalItem-DdrEYt3d.js";import"./getRadiusAndStrokeWidthFromDot-C8BFWNtM.js";import"./ActiveShapeUtils-D0KAMjVA.js";import"./useEffectiveDataKey-D5PSAWPt.js";import"./CartesianAxis-DYae0Cq3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";const mt={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const a=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),a.map((i,p)=>t.createElement(l,{dataKey:"value",key:i,interval:i,xAxisId:p,label:i,height:70}))))}},st=["TickPositioning"];var e,o,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
