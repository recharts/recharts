import{R as t}from"./iframe-B-FpQGVE.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Be4STqbb.js";import{B as p}from"./BarChart-BZ504ttZ.js";import{X as l}from"./XAxis-BLmB4Uxb.js";import{Y as h}from"./YAxis-BmhJWmSw.js";import{B as x}from"./Brush-BxSyhzwN.js";import{B as c}from"./Bar-CMgdfZkX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fO2SI_hD.js";import"./index-Bwqm2cxX.js";import"./index-zzhJWva7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dtl_SfnV.js";import"./isWellBehavedNumber-DgH__KwF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1D1pk27.js";import"./axisSelectors-BKBkYNOt.js";import"./d3-scale-BVd2nsAD.js";import"./index-BOg1JrYi.js";import"./index-DrqVEo4b.js";import"./renderedTicksSlice-C87TKpMP.js";import"./index-BSKvdyte.js";import"./CartesianChart-CZbjQu0s.js";import"./chartDataContext-BgCxNtXs.js";import"./CategoricalChart-DYpdXtUy.js";import"./CartesianAxis-AFvQJOoy.js";import"./Layer-CC5u66Wi.js";import"./Text-Djuu9tRj.js";import"./DOMUtils-miVyGpMZ.js";import"./useId-DAIuZYFe.js";import"./useBackwardsCompatibleTheme-CLDALELV.js";import"./Label-CsGEr2R8.js";import"./ZIndexLayer-BnTzkaQy.js";import"./types-DD3qZx3A.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-e1etCO8j.js";import"./useAnimationId-BcCVwFd_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiqGpkxr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DC9lclqW.js";import"./tooltipContext-BsSoT0gm.js";import"./RegisterGraphicalItemId-1yR8tuVZ.js";import"./ErrorBarContext-BYOHAx31.js";import"./GraphicalItemClipPath-Cm6Nokyc.js";import"./SetGraphicalItem-Bih-NG2S.js";import"./getZIndexFromUnknown-BewXohwm.js";import"./useGraphicalItemIdentity-DhhteXck.js";import"./dataEntryStyles-CWDGc5BF.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
