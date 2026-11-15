import{R as t}from"./iframe-8C24Tydd.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Dw4Oq4dL.js";import{B as p}from"./BarChart-CJQDOMMw.js";import{X as l}from"./XAxis-CI8sx2Rv.js";import{Y as h}from"./YAxis-jbouJBfL.js";import{B as x}from"./Brush-DqexZr96.js";import{B as c}from"./Bar-DVGMb1fc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-jF8yDnYL.js";import"./throttle-BnR0knX4.js";import"./index-BZrrsPsq.js";import"./index-B9s4wujy.js";import"./RechartsWrapper-CN9elUVX.js";import"./axisSelectors-wolYJBqC.js";import"./polarAxisSelectors-OkcN41hW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhysOGqs.js";import"./index-C0a8p3x4.js";import"./index-DTGVc3OM.js";import"./renderedTicksSlice-pib7h8IS.js";import"./index-DqK9E7FS.js";import"./fillDefinitions-DW2cY3tE.js";import"./CartesianChart-CGDUobj1.js";import"./chartDataContext-31zmIAvn.js";import"./CategoricalChart-Bwnqw4e-.js";import"./CartesianAxis-CNwz3srm.js";import"./Layer-D45TlyFk.js";import"./Text-CBQ4JzNL.js";import"./ZIndexLayer-DlPMEPXU.js";import"./Label-D_2s_KcH.js";import"./types-BD1-xaIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-XtYPtKfF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DEd6ta5Q.js";import"./useAnimationId-CvLS5yyi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CytN3lSp.js";import"./tooltipContext-DlcS1gLa.js";import"./ErrorBarContext-CfhLJDta.js";import"./activeStyles-D92_uiFB.js";import"./SetGraphicalItem-BzYY5Na5.js";import"./getZIndexFromUnknown-BAROIWne.js";import"./useEffectiveDataKey-DR3UcTsu.js";import"./omit-BSR9Vs8s.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
