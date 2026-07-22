import{R as t}from"./iframe-DzzybHr3.js";import{R as m}from"./zIndexSlice-APm024yE.js";import{L as s}from"./LineChart-D1ikP5A7.js";import{t as c}from"./Tick-DyycEu3I.js";import{L as d}from"./Line-B14pcOUO.js";import{X as l}from"./XAxis-C2N3vX2E.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DXJQ7qa7.js";import"./index-CNtIrdbG.js";import"./index-YXsj3yx_.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CV8kmKtp.js";import"./isWellBehavedNumber-DhXkb0Zj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQrYaWuY.js";import"./index-DKv_ekDa.js";import"./index-BbqbzQag.js";import"./renderedTicksSlice-BnoTH0LX.js";import"./axisSelectors-DxliL3D-.js";import"./d3-scale-ikjFpXkq.js";import"./CartesianChart-C60EyfpF.js";import"./chartDataContext-mNy84WxM.js";import"./CategoricalChart-B7eTVHmG.js";import"./Layer-DBuOEsC-.js";import"./Curve-CgifKxr5.js";import"./types-Ck7x6Nhk.js";import"./step-CE07F2xj.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJCL0mBl.js";import"./Label-Yw7Q0JfB.js";import"./Text-CKYGhwj_.js";import"./DOMUtils-CofpyxHf.js";import"./ZIndexLayer-B65O7Oyl.js";import"./useAnimationId--dSVNcdm.js";import"./ActivePoints-gO5Bi9Sm.js";import"./Dot-BL6lif_-.js";import"./RegisterGraphicalItemId-r8RRCwhl.js";import"./ErrorBarContext-CW8Stc7O.js";import"./GraphicalItemClipPath-BPmTqE-t.js";import"./SetGraphicalItem-Dv_WYCgN.js";import"./getRadiusAndStrokeWidthFromDot-40lXrNs0.js";import"./ActiveShapeUtils-CXtuLtCa.js";import"./CartesianAxis-Bp9IVHGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";const ot={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(m,null,t.createElement(s,{data:c,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(d,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(l,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70}))))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const at=["TickPositioning"];export{r as TickPositioning,at as __namedExportsOrder,ot as default};
