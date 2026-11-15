import{R as t}from"./iframe-Zh2ccugb.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DEmBd4ZB.js";import{B as p}from"./BarChart-B0UHEtch.js";import{X as l}from"./XAxis-Csr8aJtN.js";import{Y as h}from"./YAxis-DZs1fmzf.js";import{B as x}from"./Brush-CYqyTPGx.js";import{B as c}from"./Bar-BP724zKh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-fH52x6Wq.js";import"./throttle-B3lkaQcW.js";import"./index-DCPtMhny.js";import"./index-Bpm_0b-N.js";import"./RechartsWrapper-CwKOWqmW.js";import"./axisSelectors-CeETa2Oh.js";import"./polarAxisSelectors-ODY0eR4B.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oTva27Ef.js";import"./index-BTZK7nKb.js";import"./index-WmNaFkcT.js";import"./renderedTicksSlice-DqNUbck1.js";import"./index-CMNAmNto.js";import"./fillDefinitions-CSMYcBHa.js";import"./CartesianChart-nM5gdBcu.js";import"./chartDataContext-CFkN0KVz.js";import"./CategoricalChart-DWn3sGtD.js";import"./CartesianAxis-CIOwjTNM.js";import"./Layer-C95YSbsg.js";import"./Text-MWlHmKAn.js";import"./ZIndexLayer-Xr-T5Ltv.js";import"./Label-DiL3sO7Q.js";import"./types-aszg7ufr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BE_TnqZR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ898oCF.js";import"./useAnimationId-CwFbYXoE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wgF5Hj2i.js";import"./tooltipContext-BIpiKwdI.js";import"./ErrorBarContext-f9PwKgv4.js";import"./activeStyles-D6kWvGgQ.js";import"./SetGraphicalItem-Dg3wmm6w.js";import"./getZIndexFromUnknown-DA2_TRCf.js";import"./useEffectiveDataKey-Ctjc01_U.js";import"./omit-B1CaXPmp.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
