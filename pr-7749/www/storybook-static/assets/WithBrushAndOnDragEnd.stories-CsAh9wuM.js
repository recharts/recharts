import{R as t}from"./iframe-DTRlEa3u.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CDXLYYsJ.js";import{B as p}from"./BarChart-DPq8u0rE.js";import{X as l}from"./XAxis-C0dwGi3V.js";import{Y as h}from"./YAxis-Ds-oNmVm.js";import{B as x}from"./Brush-DsHqQG-4.js";import{B as c}from"./Bar-GmA7ObGT.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D6N_0nid.js";import"./index-CS48B7tj.js";import"./index-o_WhDpRH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BJzTCoJ3.js";import"./isWellBehavedNumber-BJiDbB8v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BBFKLgiK.js";import"./axisSelectors-DdPePiMV.js";import"./d3-scale-5lZtxq-z.js";import"./index-CpmklETy.js";import"./index-Cvz-VVDw.js";import"./renderedTicksSlice-CMohq2ew.js";import"./index-BE7ByIQm.js";import"./CartesianChart-C0fRKmIL.js";import"./chartDataContext-0lwkG_AO.js";import"./CategoricalChart-Br64IOu-.js";import"./CartesianAxis-CKsN-hMj.js";import"./Layer-Cxb9aykb.js";import"./Text-BwGttioZ.js";import"./DOMUtils-BlPhfohB.js";import"./useId-DA93zQ1i.js";import"./useBackwardsCompatibleTheme-Tyqh7EHZ.js";import"./Label-CwRVD2C4.js";import"./ZIndexLayer-B42FtzLK.js";import"./types-BPUiziHz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D3NTNo-L.js";import"./useAnimationId-BQWcd1jo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DwF3_6Yk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0NSyvuwL.js";import"./tooltipContext-DfxumADO.js";import"./RegisterGraphicalItemId-NS8Y_EHr.js";import"./ErrorBarContext-B04e9oFc.js";import"./GraphicalItemClipPath-DCT6ZGzY.js";import"./SetGraphicalItem-D-a-mss5.js";import"./getZIndexFromUnknown-BJiZVUJQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CL95YKlR.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,xt as __namedExportsOrder,ht as default};
