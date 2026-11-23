import{R as t}from"./iframe-kLrggBpZ.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CKCGde2F.js";import{B as p}from"./BarChart-DeoqZT21.js";import{X as l}from"./XAxis-B-2vEHb0.js";import{Y as h}from"./YAxis-B5avTU_X.js";import{B as x}from"./Brush-Dgv4enb5.js";import{B as c}from"./Bar-BJ67uZXE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D_LYpz2f.js";import"./throttle-BkTfx27C.js";import"./index-Bv7OV-9Z.js";import"./index-C-cjgJnd.js";import"./RechartsWrapper-DVOP9mMm.js";import"./axisSelectors-D6wM5g8f.js";import"./polarAxisSelectors-Dxnj4FFJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DE-4LfFJ.js";import"./index-iHP1RapJ.js";import"./index-B46QsuJB.js";import"./renderedTicksSlice-DgOqiypa.js";import"./index-DVOdnQdm.js";import"./fillDefinitions-CMyVvOcV.js";import"./CartesianChart-DP_q0vfs.js";import"./chartDataContext-DDJgrWCU.js";import"./CategoricalChart-CZkForA1.js";import"./CartesianAxis-Dfi_5bxP.js";import"./Layer-DQPijciL.js";import"./Text-DNntKRRw.js";import"./ZIndexLayer-CZ_FttOi.js";import"./Label-CpspZ4dp.js";import"./types-jTiWDmD0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DxslDEhK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-f81kex-M.js";import"./useAnimationId-CEVcGH0v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBiGMeQC.js";import"./tooltipContext-Ddmapz-Y.js";import"./ErrorBarContext-MaEtcn-S.js";import"./activeStyles-BevLUsk4.js";import"./SetGraphicalItem-BJQeWc-6.js";import"./getZIndexFromUnknown-DNluFhwA.js";import"./useEffectiveDataKey-BIUvIyD8.js";import"./omit-B2VxqQbn.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
