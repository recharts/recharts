import{R as t}from"./iframe-CB0-Apig.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-MYAc-BZR.js";import{B as p}from"./BarChart-Cc45PQOq.js";import{X as l}from"./XAxis-BkLwCB-i.js";import{Y as h}from"./YAxis-CyKUvs_P.js";import{B as x}from"./Brush-LlURMBdc.js";import{B as c}from"./Bar-DQrss4Zm.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B_JaSpEU.js";import"./index-DsRbpnGV.js";import"./index-zuDkrAQT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-zQutOK7U.js";import"./isWellBehavedNumber-CTvZevfR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DVGUOxKt.js";import"./axisSelectors-CXDnm6lL.js";import"./d3-scale-D9ownlTm.js";import"./index-C1lwWxUG.js";import"./index-DTSkq74U.js";import"./renderedTicksSlice-CvPVjrK_.js";import"./index-DyoNT_fx.js";import"./CartesianChart-BJI6UZNQ.js";import"./chartDataContext-BshA8PFe.js";import"./CategoricalChart-DMYjcOfv.js";import"./CartesianAxis-DyZuqlDa.js";import"./Layer-Dp8UDcUQ.js";import"./Text-B6lqzzDo.js";import"./DOMUtils-B6gqp-ty.js";import"./useId-CWVN7Jyj.js";import"./useBackwardsCompatibleTheme-Db0J--Ta.js";import"./Label-EQpvr0td.js";import"./ZIndexLayer-elhV8gwp.js";import"./types-DBJDNIT-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DE_zCwRM.js";import"./useAnimationId-DZZDX8rQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-I4VbBUFX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C6gEbnuv.js";import"./tooltipContext-Cru-qqfD.js";import"./RegisterGraphicalItemId-DP4ziMhF.js";import"./ErrorBarContext-B7WUKUL2.js";import"./GraphicalItemClipPath-BfYW0QzE.js";import"./SetGraphicalItem-D-uUzHqS.js";import"./getZIndexFromUnknown-C3jS8EI2.js";import"./useGraphicalItemIdentity-CxywVdEz.js";import"./dataEntryStyles--RLXloXa.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
