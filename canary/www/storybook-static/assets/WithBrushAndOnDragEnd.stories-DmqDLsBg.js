import{R as t}from"./iframe-C9RR7JmE.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-9FgFGtgA.js";import{B as p}from"./BarChart-D0Lgqwkh.js";import{X as l}from"./XAxis-B6hKXJep.js";import{Y as h}from"./YAxis-Bsmg8WZC.js";import{B as x}from"./Brush-DkMIrWzq.js";import{B as c}from"./Bar-CLVp3j9W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BS9vZKxy.js";import"./throttle-CSzDQiVS.js";import"./index-C9sROg_Y.js";import"./index-DobETtGM.js";import"./RechartsWrapper-Bb98fXCM.js";import"./axisSelectors-TgtedVmF.js";import"./polarAxisSelectors-fbcgHrSa.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFw4t_7I.js";import"./index-Bp7vSvmR.js";import"./index-C4LPcI60.js";import"./renderedTicksSlice-DG_92KFR.js";import"./index-Dim785Oy.js";import"./fillDefinitions-BD293OF_.js";import"./CartesianChart-bv1G3A4F.js";import"./chartDataContext--IWIWppp.js";import"./CategoricalChart-CUD-tLds.js";import"./CartesianAxis-DmiMG-c8.js";import"./Layer-CF0GFBX9.js";import"./Text-m7bywbsW.js";import"./ZIndexLayer-CRt4gP-q.js";import"./Label-BaLJb5QI.js";import"./types-DEp2f933.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-B4uCvMTS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DHyKIA3T.js";import"./useAnimationId-P10-1iqt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-xp9QUtvW.js";import"./tooltipContext-DYnawDxk.js";import"./ErrorBarContext-D5q20nPS.js";import"./activeStyles-psvB14ar.js";import"./SetGraphicalItem-D9jhbnIr.js";import"./getZIndexFromUnknown-Ar2F7VLj.js";import"./useEffectiveDataKey-rhz_g6ic.js";import"./omit-DBKPegXf.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
