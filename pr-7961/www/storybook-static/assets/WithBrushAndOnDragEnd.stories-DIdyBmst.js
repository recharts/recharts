import{R as t}from"./iframe-FwppTpHM.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cdyw1_Nw.js";import{B as p}from"./BarChart-C8L56KUo.js";import{X as l}from"./XAxis-Dfnm77SQ.js";import{Y as h}from"./YAxis-XAPAfHiU.js";import{B as x}from"./Brush-D3JTHgIs.js";import{B as c}from"./Bar-DDB9rMia.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DynP12Or.js";import"./index-CTPoMXid.js";import"./index-C7fIk2L2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dg1uW6dq.js";import"./isWellBehavedNumber-BtAr22s4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dkm03yWw.js";import"./axisSelectors-CYDcyh2t.js";import"./d3-scale-CvbHukpk.js";import"./index-j_zzBaKn.js";import"./index-CjtLyLD1.js";import"./renderedTicksSlice-CFwd7tbS.js";import"./index-BJCItLgT.js";import"./CartesianChart-C3hX79Jh.js";import"./chartDataContext-Cg_fY9Ny.js";import"./CategoricalChart-fXjCF4k1.js";import"./CartesianAxis-DkQ_2z38.js";import"./Layer-RexR8ZVM.js";import"./Text-BHYGaRJX.js";import"./pageBackground-b_qu_h6D.js";import"./useId-BHaTovYI.js";import"./useBackwardsCompatibleTheme-C6cobGh6.js";import"./Label-CAlmg9Ax.js";import"./ZIndexLayer-DRZokez8.js";import"./types-X--Y4OUw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BjBEPVwb.js";import"./useAnimationId-C9td6Uok.js";import"./dataEntryStyles-DQ6Q68IL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cyh7rUiN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DfcLFOOu.js";import"./tooltipContext-LtYkioxh.js";import"./ErrorBarContext-DXeoB9w9.js";import"./GraphicalItemClipPath-DQPgZbCX.js";import"./SetGraphicalItem-y_hedEIa.js";import"./getZIndexFromUnknown-Cxd0y3W6.js";import"./useEffectiveDataKey-edM5h020.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
