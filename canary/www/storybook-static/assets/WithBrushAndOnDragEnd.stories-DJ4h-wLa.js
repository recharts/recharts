import{R as t}from"./iframe-Cuw567ao.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BuAoIKSs.js";import{B as p}from"./BarChart-DfnkKr8k.js";import{X as l}from"./XAxis-CFLpq8b6.js";import{Y as h}from"./YAxis-CbSfE1QD.js";import{B as x}from"./Brush-C5EaH6vu.js";import{B as c}from"./Bar-cFy0R7Np.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bjmeh804.js";import"./index-DPZE1hYp.js";import"./index-CitLG62V.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-EeLa_nJM.js";import"./isWellBehavedNumber-B73u9WX2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dc_lFngx.js";import"./axisSelectors-C6YnqdB_.js";import"./d3-scale-sEI--FZR.js";import"./index-DSKcUbNG.js";import"./index-1-Kpwwt_.js";import"./renderedTicksSlice-DdMSNSAt.js";import"./index-CYPd_aD4.js";import"./CartesianChart-D-_oA4AU.js";import"./chartDataContext-CU7BnpPX.js";import"./CategoricalChart-BLUN9mEz.js";import"./CartesianAxis-D-JaI_zt.js";import"./Layer-T72FoYEi.js";import"./Text-DEJPj4XQ.js";import"./DOMUtils-mjR2JQA6.js";import"./useId-JkOEL8Mu.js";import"./useBackwardsCompatibleTheme-CpTahyhZ.js";import"./Label-BJjrjkoL.js";import"./ZIndexLayer-b9cpcpRU.js";import"./types-BooOBCdC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B1juRf7B.js";import"./useAnimationId-7XVM7nxW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCUZMkY0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-P98ujLW0.js";import"./tooltipContext-JHMIN8eF.js";import"./RegisterGraphicalItemId-COeScAua.js";import"./ErrorBarContext-DsK39YKv.js";import"./GraphicalItemClipPath-DroKw-TI.js";import"./SetGraphicalItem--pdnWjmL.js";import"./getZIndexFromUnknown-ErE1ru6P.js";import"./useGraphicalItemIdentity-DXn-ONdl.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
