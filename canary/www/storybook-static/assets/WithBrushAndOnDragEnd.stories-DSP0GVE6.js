import{e as t}from"./iframe-cnMzeIJZ.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-Diz3n3Hs.js";import{B as p}from"./BarChart-oUvMP_ia.js";import{X as l}from"./XAxis-CwsNG3zV.js";import{Y as h}from"./YAxis-DADsk3iq.js";import{B as c}from"./Brush-OFltfWyY.js";import{B as x}from"./Bar-Cf0xdrP2.js";import{R as u}from"./RechartsHookInspector-z-0196Jh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BJEUNe0z.js";import"./immer-CEVvpJh0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9N_K_8iJ.js";import"./index-DcitoB6s.js";import"./hooks-DbNIViQP.js";import"./axisSelectors-JTUQkC92.js";import"./d3-scale-BBoVmphj.js";import"./zIndexSlice-KCSxBezz.js";import"./renderedTicksSlice-CttqerD-.js";import"./CartesianChart-v4VQpoAp.js";import"./chartDataContext-DuCir45J.js";import"./CategoricalChart-CbexdhNs.js";import"./CartesianAxis-DKEuyvio.js";import"./Layer-C2d9GIhW.js";import"./Text-B1T-uFVD.js";import"./DOMUtils-8Qso1Lek.js";import"./Label-r0BVcH36.js";import"./ZIndexLayer-DgSpDsSo.js";import"./types-CvoSDie4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-COhO-iGX.js";import"./ReactUtils-Cvax_Sun.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-gcJ89Q36.js";import"./isPlainObject-D33aVf8i.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXYQFJg_.js";import"./useAnimationId-BIlplKMu.js";import"./Trapezoid-D7-33KRZ.js";import"./Sector-q4gGdICU.js";import"./Symbols-zGmBpapW.js";import"./symbol-CLamLFlr.js";import"./step-CVx5i_lR.js";import"./Curve-BYV27PWl.js";import"./RegisterGraphicalItemId-CKB_e_SX.js";import"./ErrorBarContext-UNWUxf6o.js";import"./GraphicalItemClipPath-D7TSUiOR.js";import"./SetGraphicalItem-CHoRTGzo.js";import"./getZIndexFromUnknown-CJRhBx7x.js";import"./graphicalItemSelectors-C_5mqXOB.js";import"./index-CSSLHj9Z.js";import"./ChartSizeDimensions-BiOnGwPS.js";import"./OffsetShower-BBJcAEb8.js";import"./PlotAreaShower-C0UNL5CH.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
