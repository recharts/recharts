import{R as t}from"./iframe-DHcJjYhp.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-Cc80mhc9.js";import{B as p}from"./BarChart-DgmmP0n1.js";import{X as l}from"./XAxis-BsCapYe_.js";import{Y as h}from"./YAxis-CgAAJes1.js";import{B as x}from"./Brush-CTETOB-L.js";import{B as c}from"./Bar-mo96EehO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BvovYCe7.js";import"./throttle-GOg0Fvd7.js";import"./index-DrarxPoz.js";import"./index-DIJK83CB.js";import"./RechartsWrapper-DW6cza7Q.js";import"./axisSelectors-CcZJHo_q.js";import"./polarAxisSelectors-CcC4x2tN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CySl75ZF.js";import"./index-CKtel9-l.js";import"./index-Cln2IwYT.js";import"./renderedTicksSlice-Bl5XAOUo.js";import"./index-D3Qy2UUT.js";import"./CartesianChart-B9teWspu.js";import"./ZIndexPortal-pZH-aZp_.js";import"./CategoricalChart-mtPMptXy.js";import"./CartesianAxis-I4Gfetq1.js";import"./Layer-BayIcTfz.js";import"./Text-BAIudaB2.js";import"./pageBackground-CtNdVSAn.js";import"./ZIndexLayer-_GMRW-y_.js";import"./Label-CDs-ZtGW.js";import"./dataEntryStyles-DyEOYp64.js";import"./types-BNrWE8hx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CQ-NHiOO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cb_93E_H.js";import"./useAnimationId-r_2cTbPz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BGsGLrPh.js";import"./tooltipContext-CrLb3nMo.js";import"./RegisterGraphicalItemId-CLn33yWX.js";import"./ErrorBarContext-GsyzIiJa.js";import"./activeStyles-CGuSRajE.js";import"./SetGraphicalItem-CQRz0ej3.js";import"./getZIndexFromUnknown-bTFBCnQw.js";import"./useEffectiveDataKey-wQhirjtm.js";import"./omit-E6Q7P6CQ.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
