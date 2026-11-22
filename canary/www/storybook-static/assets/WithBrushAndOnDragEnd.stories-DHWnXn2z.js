import{R as t}from"./iframe-CGGZfnCV.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BqswsCB2.js";import{B as p}from"./BarChart-B-I_9cDv.js";import{X as l}from"./XAxis-D0RGLID7.js";import{Y as h}from"./YAxis-DBOKklMV.js";import{B as x}from"./Brush-MTUvrEa0.js";import{B as c}from"./Bar-tPMtoLyP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DB16si7p.js";import"./throttle-CPPktxFr.js";import"./index-hNRKJP-1.js";import"./index-BFvwi7Fr.js";import"./RechartsWrapper-CBqoZXqJ.js";import"./axisSelectors-ClqRDW4l.js";import"./polarAxisSelectors-BM3r_eW-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH0gLY6W.js";import"./index-DZ2zDC6C.js";import"./index-gZNixUu0.js";import"./renderedTicksSlice-CQP8AqXM.js";import"./index-1Wp7cDto.js";import"./fillDefinitions-DVvVBqIn.js";import"./CartesianChart-Bh5zn2Cs.js";import"./chartDataContext-L797Ywu5.js";import"./CategoricalChart-DAMpVLQr.js";import"./CartesianAxis-BDMs3FLV.js";import"./Layer-BEhjTHM-.js";import"./Text-BWSViN8b.js";import"./ZIndexLayer-DLjlC1Ho.js";import"./Label-BodzTsEv.js";import"./types-D01_wvtH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BLU3QW0Z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdMdJi_F.js";import"./useAnimationId-CKpnbEUf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dr8eZSqA.js";import"./tooltipContext-tytBYaal.js";import"./ErrorBarContext-C-uWWZZj.js";import"./activeStyles-C8mJMGZo.js";import"./SetGraphicalItem-CpKKIpFz.js";import"./getZIndexFromUnknown-CnwO_WEL.js";import"./useEffectiveDataKey-CaAnzbHC.js";import"./omit-BVNq-1Xe.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
