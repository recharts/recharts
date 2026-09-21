import{R as t}from"./iframe-CgTT5dPO.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CPGUCnGo.js";import{B as p}from"./BarChart-CeHl3qSZ.js";import{X as l}from"./XAxis-ClmjXtMB.js";import{Y as h}from"./YAxis-DSfP3iJV.js";import{B as x}from"./Brush-DPsaVE-d.js";import{B as c}from"./Bar-C9fZ3q-n.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMr0TIll.js";import"./index-yjPGP_Pi.js";import"./index-DsTCyvOd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CKA35xz0.js";import"./isWellBehavedNumber-BWfrrYUp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B51pwKIk.js";import"./axisSelectors-Gtv_llo9.js";import"./d3-scale-oJuzrlfE.js";import"./index-9dlMxjgk.js";import"./index-BDFV0rCg.js";import"./renderedTicksSlice-B7hU_9zD.js";import"./index-Db1ep0ty.js";import"./CartesianChart-P3XUrVp3.js";import"./chartDataContext-Cp4ZgLCD.js";import"./CategoricalChart-Ce5ExZbX.js";import"./CartesianAxis-1GG6rVOn.js";import"./Layer-CviKKqfs.js";import"./Text-BTX7KMwr.js";import"./DOMUtils-DNAAiWqJ.js";import"./useId-C9Sf9QRu.js";import"./useBackwardsCompatibleTheme-BnQi9_9k.js";import"./Label-DgIJd16K.js";import"./ZIndexLayer-CL4lnoUk.js";import"./types-DZAseBJP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-mZXv8WCL.js";import"./useAnimationId-D6-p5R60.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-huBGhNer.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCEW4taa.js";import"./tooltipContext-DGgnm00g.js";import"./RegisterGraphicalItemId-DeFFmfLc.js";import"./ErrorBarContext-CmOtwBbz.js";import"./GraphicalItemClipPath-qWvJymnR.js";import"./SetGraphicalItem-BFHpZd6Q.js";import"./getZIndexFromUnknown-DYmP8LaL.js";import"./useGraphicalItemIdentity-CKmqq4Ws.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dragIndexes, setDragIndexes] = React.useState<BrushStartEndIndex>({
      startIndex: 0,
      endIndex: dateWithValueData.length - 1
    });
    return (
      // Calc compensates for the text above the chart
      <div style={{
        width: '100%',
        height: 'calc(100% - 84px)'
      }}>
        <div>
          Start index:
          {dragIndexes.startIndex}
        </div>
        <div>
          End index:
          {dragIndexes.endIndex}
        </div>
        <ResponsiveContainer>
          <BarChart data={dateWithValueData}>
            <XAxis dataKey="value" />
            <YAxis />
            <Brush dataKey="name" height={30} onDragEnd={indexes => {
              setDragIndexes(indexes as BrushStartEndIndex);
            }} />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
