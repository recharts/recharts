import{R as t}from"./iframe-Dt9aG847.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-C3sOwbsK.js";import{B as p}from"./BarChart-BfzdVlPn.js";import{X as l}from"./XAxis-ChVo-6Tw.js";import{Y as h}from"./YAxis-AwRjL7js.js";import{B as x}from"./Brush-DrGmQ34O.js";import{B as c}from"./Bar-D3CcsYoq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cnn2TL20.js";import"./throttle-DjDKvtka.js";import"./index-Ckb0wJr8.js";import"./index-ZaO1fpAq.js";import"./RechartsWrapper-CgsNUza7.js";import"./axisSelectors-Bm-O_fE3.js";import"./polarAxisSelectors-BE-JLCIi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLGbz4xh.js";import"./index-DaFKSt3L.js";import"./index-C7FBrTyJ.js";import"./renderedTicksSlice-CiUiD4jz.js";import"./index-Cy9hP7c-.js";import"./fillDefinitions-Cturf6E_.js";import"./CartesianChart-ZS3wTvyi.js";import"./ZIndexPortal-C6GfDihg.js";import"./CategoricalChart-CcRrPC5A.js";import"./CartesianAxis-DnXkFBgJ.js";import"./Layer-Z8zmzF48.js";import"./Text-6YRDeSKh.js";import"./DOMUtils-DacRhvVS.js";import"./ZIndexLayer-D4w_arr1.js";import"./Label-0OpL57DR.js";import"./types-CAYyOejn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Dmjy57ut.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DDhWHAzv.js";import"./useAnimationId-CJa-E4MR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BCHVEK9a.js";import"./tooltipContext-UvrNDSbW.js";import"./dataEntryStyles-V0ugCGFO.js";import"./ErrorBarContext-BlC639ix.js";import"./activeStyles-D2EMNXIV.js";import"./SetGraphicalItem-KzVnPo4P.js";import"./getZIndexFromUnknown-Cls4SazI.js";import"./useEffectiveDataKey-DvT2OXI-.js";import"./omit-DQn6Z1Av.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
