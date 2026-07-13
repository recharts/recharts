import{R as t}from"./iframe-DeA6Jpe3.js";import{R as m}from"./zIndexSlice-BC0f17EQ.js";import{L as s}from"./LineChart-DX8Xurzd.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-DX7Ebcir.js";import{X as l}from"./XAxis-CWYh7d5o.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CrUA5muc.js";import"./index-COu95pDD.js";import"./index-Cgi5iiaO.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CSkrQNmh.js";import"./isWellBehavedNumber-QapkByze.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B64-BdAv.js";import"./index-DH7_6A6k.js";import"./index-_OzwQHli.js";import"./renderedTicksSlice-BS64flHf.js";import"./axisSelectors-D1wvQQnO.js";import"./d3-scale-BpDmqGQL.js";import"./CartesianChart-BM30Ht3L.js";import"./chartDataContext-DUEOLv6k.js";import"./CategoricalChart-BGS1Syzx.js";import"./Layer-EcnCd1Gq.js";import"./Curve-hairJGsw.js";import"./types-Dc_zINiL.js";import"./step-cipjXRUD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C9_zvyTE.js";import"./Label-DxF7lRqe.js";import"./Text-D2SjxJqk.js";import"./DOMUtils-Bt_ISucd.js";import"./ZIndexLayer-B9FDBqTJ.js";import"./useAnimationId-DmZXjvo1.js";import"./ActivePoints-DXrZqI9p.js";import"./Dot-BnJj13Wl.js";import"./RegisterGraphicalItemId-DYqiPt6w.js";import"./ErrorBarContext-DdrEBPjm.js";import"./GraphicalItemClipPath-BPKm-IHy.js";import"./SetGraphicalItem-D9c-Ll1Q.js";import"./getRadiusAndStrokeWidthFromDot-JO35KbEr.js";import"./ActiveShapeUtils-DhlcDB3a.js";import"./CartesianAxis-D6SDyMBH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";const it={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ot=["TickPositioning"];export{r as TickPositioning,ot as __namedExportsOrder,it as default};
