import{R as t}from"./iframe-x9YCwuVc.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BV1eDa8t.js";import{B as p}from"./BarChart-707SFHyX.js";import{X as l}from"./XAxis-DOrrA_AO.js";import{Y as h}from"./YAxis-CcW9nNm_.js";import{B as x}from"./Brush-oQk73Hfc.js";import{B as c}from"./Bar-DFnJDgvs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFpl0b0L.js";import"./index-4vAc-1PY.js";import"./index-_DnjTFHH.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-IMSWVxjI.js";import"./isWellBehavedNumber-BfcoqVbY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DuSi3yuo.js";import"./axisSelectors-DUrnAUTK.js";import"./d3-scale-DeFHX2Lm.js";import"./index-CnDSa4vm.js";import"./index-BC1Gmj01.js";import"./renderedTicksSlice-BQZVpqNr.js";import"./index-BC2a9-E_.js";import"./CartesianChart-pmy50aWE.js";import"./chartDataContext-CCIkzP_F.js";import"./CategoricalChart-DqHAXNep.js";import"./CartesianAxis-C1FOk_u6.js";import"./Layer-byU46PKm.js";import"./Text-COBhbjuo.js";import"./pageBackground-TE-MQad5.js";import"./useId-CMngnmGp.js";import"./useBackwardsCompatibleTheme-BQTuAdi2.js";import"./Label-BWVi17tM.js";import"./ZIndexLayer-DrSAG7iO.js";import"./dataEntryStyles-Drm_aJ2X.js";import"./types-fCYwQ83-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-B5NsC4ZM.js";import"./useAnimationId-DxnlQorl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-VzFgv3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYeGEQWR.js";import"./tooltipContext-xDqSQrod.js";import"./RegisterGraphicalItemId-DNM5emxE.js";import"./ErrorBarContext-a5it_Nak.js";import"./GraphicalItemClipPath-DXDK6Y35.js";import"./SetGraphicalItem-D1wyT9-l.js";import"./getZIndexFromUnknown-DLpSImyH.js";import"./useEffectiveDataKey-D48S_iiZ.js";import"./omit-CcqWmCMh.js";import"./isArguments-yB-y1yaH.js";const ct={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ut=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ut as __namedExportsOrder,ct as default};
