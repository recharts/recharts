import{R as t}from"./iframe-C60CeSr1.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-OJv_DQrU.js";import{B as p}from"./BarChart-6sA1-0_D.js";import{X as l}from"./XAxis-BvEbbPhK.js";import{Y as h}from"./YAxis-BsYuPRXA.js";import{B as x}from"./Brush-DmxzUCY5.js";import{B as c}from"./Bar-CgnOA4st.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-4y-zsF2K.js";import"./index-CLcnbG-9.js";import"./index-Bqwda9Fq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BGY8S9MU.js";import"./isWellBehavedNumber-ps2XZnBQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GqvtI-xq.js";import"./axisSelectors-8LjSDh6r.js";import"./d3-scale-CKiULClT.js";import"./index-BORXIxjx.js";import"./index-BpZ-_TsI.js";import"./renderedTicksSlice-tOvQVNJQ.js";import"./index-BHPplqCM.js";import"./CartesianChart-Dx5XpQWF.js";import"./chartDataContext-wxbL5Q17.js";import"./CategoricalChart-DorDSMvO.js";import"./CartesianAxis-CFb2o3L1.js";import"./Layer-BkafIlY5.js";import"./Text-DbOMyqnY.js";import"./DOMUtils-DGbVIUY3.js";import"./useId-DOhjH30T.js";import"./useBackwardsCompatibleTheme-NWguYV1j.js";import"./Label-D00_RuVZ.js";import"./ZIndexLayer-DZjPHzll.js";import"./types-Bt5cyCk_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BorEvTXc.js";import"./useAnimationId-SZ0HilGc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Efiryd3x.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D3L9NjGk.js";import"./tooltipContext-D0bzrnnA.js";import"./RegisterGraphicalItemId-TGLRvyhw.js";import"./ErrorBarContext-D1-31f6l.js";import"./GraphicalItemClipPath-D_FqHT2B.js";import"./SetGraphicalItem-BDVcT93s.js";import"./getZIndexFromUnknown-CkNexGW1.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C7UE_d1E.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
