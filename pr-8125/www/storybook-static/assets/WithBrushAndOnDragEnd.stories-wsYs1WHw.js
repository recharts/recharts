import{R as t}from"./iframe-DfPB0Wpx.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Vk5rQcki.js";import{B as p}from"./BarChart-CghrV6Mm.js";import{X as l}from"./XAxis-COzQcKyh.js";import{Y as h}from"./YAxis-BQ4oN9O6.js";import{B as x}from"./Brush-MBz65EtU.js";import{B as c}from"./Bar-BxCpO4Sd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bt24D4BM.js";import"./throttle-DIfZf6Rg.js";import"./index-Ax9OSmSr.js";import"./index-jmk38lRQ.js";import"./RechartsWrapper-DGPnCUTJ.js";import"./axisSelectors-CYP2U9Wf.js";import"./polarAxisSelectors-UZRyPZtr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CsMflnTp.js";import"./index-TI8GAjTb.js";import"./index-C7rcjmTF.js";import"./renderedTicksSlice-DnnXNCqP.js";import"./index-DZEvNl2j.js";import"./CartesianChart-C7bLJAaP.js";import"./ZIndexPortal-BHohkWL-.js";import"./CategoricalChart-B65nKayz.js";import"./CartesianAxis-CNCSz6Km.js";import"./Layer-8vRP1mbc.js";import"./Text-DaqQgel7.js";import"./DOMUtils-C1IGffYG.js";import"./ZIndexLayer-no9MVuHN.js";import"./Label-2zEOllgr.js";import"./types-D0-9LK1x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-Nkxiy7Jt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWBHAPFe.js";import"./useAnimationId-C0yM1MFO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CvH07gq7.js";import"./tooltipContext-A7BcXb7p.js";import"./dataEntryStyles-Dc4guk2V.js";import"./ErrorBarContext-CQDbXt_x.js";import"./activeStyles-ChnEmJqB.js";import"./SetGraphicalItem-BxFlQPUr.js";import"./getZIndexFromUnknown-wwgBEGf2.js";import"./useEffectiveDataKey-DKbAeGMk.js";import"./omit-C14swPMG.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
