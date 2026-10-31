import{R as t}from"./iframe-7ia7cOns.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CNZG0Y5y.js";import{B as p}from"./BarChart-BB2ETJ2Z.js";import{X as l}from"./XAxis-CyA_GXTr.js";import{Y as h}from"./YAxis-ClD5PA34.js";import{B as x}from"./Brush-CmL2BNvh.js";import{B as c}from"./Bar-DK_1j_ll.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C774hdeP.js";import"./throttle-CuvGuAUJ.js";import"./index-CbtDNwdV.js";import"./index-lD6nPUSg.js";import"./RechartsWrapper-CDikf3PH.js";import"./axisSelectors-D31_gBEg.js";import"./polarAxisSelectors-0UsOTGQK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DDTCvpuX.js";import"./index-B7Wz_zu1.js";import"./index-uEerYH_x.js";import"./renderedTicksSlice-DHygufHc.js";import"./index-DP-wgMO5.js";import"./CartesianChart-C1quWpWE.js";import"./ZIndexPortal-CBpzcmkv.js";import"./CategoricalChart-BjEI-7io.js";import"./CartesianAxis-B17J1uIc.js";import"./Layer-DH-Bpj5F.js";import"./Text-CkBg3X4g.js";import"./DOMUtils-BskzGjW1.js";import"./ZIndexLayer-BsU293fp.js";import"./Label-Y02zXLeF.js";import"./types-CoWppO1p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-B_wPexqX.js";import"./LabelList-BkznOaj8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nIz-cHMY.js";import"./useAnimationId-dFi6qGfW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--ULkn_AA.js";import"./tooltipContext-CcM6rWLf.js";import"./dataEntryStyles-B9lOpBft.js";import"./fillDefinitions-Bh-Idu0v.js";import"./ErrorBarContext-CxoeLCh5.js";import"./activeStyles-CyfixWYK.js";import"./SetGraphicalItem-Cl9ASqDV.js";import"./getZIndexFromUnknown-C-J3wMPR.js";import"./useEffectiveDataKey-DpgRN79Y.js";import"./omit-CSH6g66U.js";import"./isArguments-yB-y1yaH.js";const xt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},ct=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ct as __namedExportsOrder,xt as default};
