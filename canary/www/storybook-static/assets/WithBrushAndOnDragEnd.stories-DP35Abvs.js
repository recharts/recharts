import{R as t}from"./iframe-NSpsGxr3.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CegrvH4P.js";import{B as p}from"./BarChart-BVdmW6Dp.js";import{X as l}from"./XAxis-DNhoou9P.js";import{Y as h}from"./YAxis-s1ngqAL7.js";import{B as x}from"./Brush-CZxtvBTz.js";import{B as c}from"./Bar-BgATints.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-oOh5DhdY.js";import"./index-4AzzKt7j.js";import"./index-0HEoT-e5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BlFb5h3I.js";import"./isWellBehavedNumber-pwlbiGoO.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtJCjJYR.js";import"./axisSelectors-BkwFONEa.js";import"./d3-scale-C3gnRv6y.js";import"./index-BsIlyQNm.js";import"./index-DWO3hHqn.js";import"./renderedTicksSlice-DYxvbfog.js";import"./index-CYtbOF9C.js";import"./CartesianChart-CvLKYupN.js";import"./chartDataContext-DJ-2f6vo.js";import"./CategoricalChart-Dg01q-nM.js";import"./CartesianAxis-BwBDYPDu.js";import"./Layer-BnG363as.js";import"./Text-BtwC4msG.js";import"./DOMUtils-CWTrI1E5.js";import"./useId-BVXNnfLZ.js";import"./useBackwardsCompatibleTheme-C2Bmbb6o.js";import"./Label-BIdOyJIr.js";import"./ZIndexLayer-C4urMDBy.js";import"./types-Co_GWDov.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BkT2_sP2.js";import"./useAnimationId-N_fuM4i0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CmsXYr1b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pIseDvg-.js";import"./tooltipContext-B_PEljFz.js";import"./RegisterGraphicalItemId-wt0KspV9.js";import"./ErrorBarContext-CEiAdeUz.js";import"./GraphicalItemClipPath-CcSo6wES.js";import"./SetGraphicalItem-C1qAtScX.js";import"./getZIndexFromUnknown-BYBItVqo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-MpFTBnWD.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const xt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
