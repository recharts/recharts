import{e as t}from"./iframe-BExdC6gN.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-DOMqUAof.js";import{B as p}from"./BarChart-wwxxXEOb.js";import{X as l}from"./XAxis-CiJpP_bt.js";import{Y as h}from"./YAxis-CJCe92Ep.js";import{B as c}from"./Brush-r26Dkpy0.js";import{B as x}from"./Bar-2vKPTGfq.js";import{R as u}from"./RechartsHookInspector-jedlPGVn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BABy-fAx.js";import"./immer-fLQu0D5z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFXm4Z4I.js";import"./index-dnhQRVhY.js";import"./hooks-f9uoWTfr.js";import"./axisSelectors-G4Ozr4C7.js";import"./d3-scale-CPvJwxK1.js";import"./zIndexSlice-DqK4zht4.js";import"./renderedTicksSlice-Cgs3_pbO.js";import"./CartesianChart-DEFw3dUf.js";import"./chartDataContext-zs3q_52z.js";import"./CategoricalChart-GKia85wb.js";import"./CartesianAxis-DOEtdq2b.js";import"./Layer-Bn8zfoRz.js";import"./Text-DprtRutp.js";import"./DOMUtils-DUHeo9eF.js";import"./Label-BEYaNe1v.js";import"./ZIndexLayer-7iJ9Z1BS.js";import"./types-DfAw3uAA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Bht36Dkp.js";import"./ReactUtils-Dgl8JF7u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUkG5lzX.js";import"./useAnimationId-DlRyv4oq.js";import"./ActiveShapeUtils-BBh91YEI.js";import"./isPlainObject-Eh4Z7yDc.js";import"./isPlainObject-BSutPv-K.js";import"./RegisterGraphicalItemId-CGA7gaf-.js";import"./ErrorBarContext-B68PiQ82.js";import"./GraphicalItemClipPath-B5kn33G8.js";import"./SetGraphicalItem-DVUCQsv1.js";import"./getZIndexFromUnknown-Ct-rTpnU.js";import"./graphicalItemSelectors-BxkHt0qJ.js";import"./index-Bb8SVNOL.js";import"./ChartSizeDimensions-DVous5ni.js";import"./OffsetShower-DTmFDKEr.js";import"./PlotAreaShower-D_ibhKaV.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ct=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,ht as default};
