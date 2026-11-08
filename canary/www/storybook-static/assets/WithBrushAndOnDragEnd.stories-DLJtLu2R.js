import{R as t}from"./iframe-Cn8BbXdc.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cplo4OJz.js";import{B as p}from"./BarChart-D8UqvDvS.js";import{X as l}from"./XAxis-OdkIm8mG.js";import{Y as h}from"./YAxis-CvKMQQHY.js";import{B as x}from"./Brush-C3kiZF3t.js";import{B as c}from"./Bar-qhbqxOwN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dx-UV5kK.js";import"./throttle-BbuJxkpw.js";import"./index-Vt5NnRCL.js";import"./index-r2FQlKmQ.js";import"./RechartsWrapper-CCqZUt6C.js";import"./axisSelectors-Cb1wJ0Tf.js";import"./polarAxisSelectors-Dlr2J2lS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BDIN99PH.js";import"./index-CIAdjncW.js";import"./index-apP2Ny11.js";import"./renderedTicksSlice-CBPyHODM.js";import"./index-CkmJfaR7.js";import"./fillDefinitions-Dqk1J0Zs.js";import"./CartesianChart-Cu7ICiUo.js";import"./chartDataContext-CsFOc9VE.js";import"./CategoricalChart-D66OJrIZ.js";import"./CartesianAxis-CrDF4n3X.js";import"./Layer-B5iMOq_s.js";import"./Text-C0NLdB6_.js";import"./ZIndexLayer-CPj3ZDvt.js";import"./Label-BMteoko4.js";import"./types-7A15NfYp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-fXcaT9lZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSJXIYeh.js";import"./useAnimationId-BQvfHsDD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dlfc7hut.js";import"./tooltipContext-BE-7S2XF.js";import"./ErrorBarContext-zwHjEd7p.js";import"./activeStyles-DvMk-MBL.js";import"./SetGraphicalItem-7Fal13Qm.js";import"./getZIndexFromUnknown-Cj4eVme7.js";import"./useEffectiveDataKey-D8YFmfQj.js";import"./omit-nMd1Jn9K.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
