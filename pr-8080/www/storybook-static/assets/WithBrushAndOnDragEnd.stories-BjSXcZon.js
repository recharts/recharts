import{R as t}from"./iframe-CrWtoPAX.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DMPrIjTD.js";import{B as p}from"./BarChart-C8zPE3Io.js";import{X as l}from"./XAxis-6CbcM3Se.js";import{Y as h}from"./YAxis-xU-pi3Qa.js";import{B as x}from"./Brush-BpymYEsk.js";import{B as c}from"./Bar-CqrMZ8nV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cl_vq3lE.js";import"./throttle-ByP8enHW.js";import"./index-CQ_XqvtJ.js";import"./index-D6uwIsxD.js";import"./RechartsWrapper-MJk6C7sG.js";import"./axisSelectors-B0-aB2Y5.js";import"./polarAxisSelectors-DnnAPhgk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Pq_E9xXF.js";import"./index-gHXYJ75j.js";import"./index-BbFlaPL7.js";import"./renderedTicksSlice-CetFWcek.js";import"./index-IYAiXkdd.js";import"./CartesianChart--l1pMg4t.js";import"./chartDataContext-BATi9LfG.js";import"./CategoricalChart-CRgz8QMs.js";import"./CartesianAxis-D6bXO0ci.js";import"./Layer-Bc-8Aj4A.js";import"./Text-CyQrUZZg.js";import"./pageBackground-B_OyKJz4.js";import"./useId-CevBbkmx.js";import"./ZIndexLayer-mnQ0PTjZ.js";import"./Label-9ANtnaX1.js";import"./dataEntryStyles-CcroDQaP.js";import"./types-sEVDNypc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-D8qfovJq.js";import"./useAnimationId-DIVMX3ZS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNbdX1IY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BHD3PSWQ.js";import"./tooltipContext-DgMOrrVJ.js";import"./RegisterGraphicalItemId-DIduc0Gm.js";import"./ErrorBarContext-BGhx7PeS.js";import"./SetGraphicalItem-B4ZcrH9I.js";import"./getZIndexFromUnknown-CBjIuuRk.js";import"./useEffectiveDataKey-DRFzjTt4.js";import"./omit-BCdzxml0.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
