import{R as t}from"./iframe-Cwhg5Alw.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Fv3NhYWW.js";import{B as p}from"./BarChart-BB3FvW5X.js";import{X as l}from"./XAxis-DysdhPMn.js";import{Y as h}from"./YAxis-DmjTZE4U.js";import{B as x}from"./Brush-qdEcE0A3.js";import{B as c}from"./Bar-DzfHR5uW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CkDxtqDz.js";import"./throttle-Du5pgiUX.js";import"./index-B9mn7cyH.js";import"./index-BEds7S3I.js";import"./RechartsWrapper-BxNvZ3mc.js";import"./axisSelectors-BXhIMUYz.js";import"./polarAxisSelectors-Dj6PmZ2B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-buNRHlZ7.js";import"./index-Ce6E5z2B.js";import"./index-Dq-nqpA7.js";import"./renderedTicksSlice-DNRadS3G.js";import"./index-DS0QJhYL.js";import"./fillDefinitions-zsPlWl9g.js";import"./CartesianChart-dk4HvrTk.js";import"./chartDataContext-plFejdmf.js";import"./CategoricalChart-DmZKpDkp.js";import"./CartesianAxis-lC9jf5Zn.js";import"./Layer-Cvk4I16t.js";import"./Text-Cv-7zpF9.js";import"./ZIndexLayer-Zh5FqFCx.js";import"./Label-DOhfAK-3.js";import"./types-B4BwHuKZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dl4kQBD7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJUu2CXA.js";import"./useAnimationId-B8-WGiI8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-NTKJrLNa.js";import"./tooltipContext-JpJPDcQ0.js";import"./ErrorBarContext-C5GJMenk.js";import"./activeStyles-C2N6Ab6e.js";import"./SetGraphicalItem-BZTwfoQJ.js";import"./getZIndexFromUnknown-BK-5SKkq.js";import"./useEffectiveDataKey-EnHAhUcJ.js";import"./omit-D4WZHPlr.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
