import{R as t}from"./iframe-Dzq6KhZI.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DYy_9E3f.js";import{B as p}from"./BarChart-C6p7NAYr.js";import{X as l}from"./XAxis-Cwq9lpMm.js";import{Y as h}from"./YAxis-BZEADbr5.js";import{B as x}from"./Brush-C_PVeA_U.js";import{B as c}from"./Bar-LqRue3qu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRjkVoLn.js";import"./throttle-PAjjPANm.js";import"./index-BecjNu5M.js";import"./index-DZ0fS5qA.js";import"./RechartsWrapper-Du3nHOoA.js";import"./axisSelectors-B8Xp5jln.js";import"./polarAxisSelectors-BWIDzk5M.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BwgC5IAo.js";import"./index-CVNCOx1i.js";import"./index-CMF9Loaq.js";import"./renderedTicksSlice-B-37bEiL.js";import"./index-DAhgw1CA.js";import"./fillDefinitions-BkZRDt9Y.js";import"./CartesianChart-Bid-fMci.js";import"./ZIndexPortal-D7MLJjGY.js";import"./CategoricalChart-dB5tt0RG.js";import"./CartesianAxis-DeYfDX_6.js";import"./Layer-DdRdeMHx.js";import"./Text-D6SfU34x.js";import"./DOMUtils-Dv3oYuXo.js";import"./ZIndexLayer-B0fPlQAE.js";import"./Label-ns1HN8QT.js";import"./types-Bt-JjK9T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-0dTnEet5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BEWurK0o.js";import"./useAnimationId-B5vYW3bS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-qY34SWQy.js";import"./tooltipContext-Dantp0Or.js";import"./dataEntryStyles-BDzv2dJf.js";import"./ErrorBarContext-DWqusyea.js";import"./activeStyles-B6qdsX9q.js";import"./SetGraphicalItem-C8-iEcE-.js";import"./getZIndexFromUnknown-Cvy0i2cX.js";import"./useEffectiveDataKey-2DeBYWTa.js";import"./omit-CIlgakHL.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
