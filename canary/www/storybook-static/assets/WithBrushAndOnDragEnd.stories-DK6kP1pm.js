import{R as t}from"./iframe-CEqSETwy.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CJNe71Mi.js";import{B as p}from"./BarChart-Di04Yxww.js";import{X as l}from"./XAxis-DiGyugB3.js";import{Y as h}from"./YAxis-DZdJE3LC.js";import{B as x}from"./Brush-DKWKfcDN.js";import{B as c}from"./Bar-Dgh6x45r.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DnGGP0fW.js";import"./index-BNz6dVRa.js";import"./index-BvAe43aE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CbEbpjss.js";import"./isWellBehavedNumber-DDsPS4Vv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D7k5lu9l.js";import"./axisSelectors-p_-hiMzG.js";import"./d3-scale-kHCfNVPM.js";import"./index-CKh217UZ.js";import"./index-CcAm8cKQ.js";import"./renderedTicksSlice-Bs5DanIZ.js";import"./index-BHSo_RxK.js";import"./CartesianChart-DDkHhS9o.js";import"./chartDataContext-CtXgelXS.js";import"./CategoricalChart-Cuq3_PiL.js";import"./CartesianAxis-Baoe0UzV.js";import"./Layer-C0D9GKi7.js";import"./Text-DksTiW_2.js";import"./DOMUtils-19Cjbm1E.js";import"./useId-DLOcTRFV.js";import"./useBackwardsCompatibleTheme-C18-49Mr.js";import"./Label-lnqMQjsv.js";import"./ZIndexLayer-0nUyu6n_.js";import"./types-Ddhi9krD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C2HkT0wg.js";import"./useAnimationId-gLsHzM3f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CtR9xIXP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BN_cCfJG.js";import"./tooltipContext-Q2w3dJTj.js";import"./RegisterGraphicalItemId-BZYWE3sH.js";import"./ErrorBarContext-4Qyv8RFs.js";import"./GraphicalItemClipPath-B4449nNq.js";import"./SetGraphicalItem-BqGzK2Ro.js";import"./getZIndexFromUnknown-Bcl3lt9q.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CEKaZePj.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
