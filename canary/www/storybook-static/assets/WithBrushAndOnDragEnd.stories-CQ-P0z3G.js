import{R as t}from"./iframe-FAdFbT6J.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-COO8R9lj.js";import{B as p}from"./BarChart-dGFHAaL7.js";import{X as l}from"./XAxis-2xPTd-UO.js";import{Y as h}from"./YAxis-T_mO5jU8.js";import{B as x}from"./Brush-B0cHQGAV.js";import{B as c}from"./Bar-BSXujitS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./throttle-DmbGe_oo.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./RechartsWrapper-B8CA35TH.js";import"./axisSelectors-DjwIFZga.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfdNPJMp.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";import"./CartesianAxis-_1uLVGpU.js";import"./Layer-DDi6JECL.js";import"./Text-Cndhy6VG.js";import"./pageBackground-CQW2qZWO.js";import"./ZIndexLayer-5IISokl0.js";import"./Label-MEQSQEMP.js";import"./dataEntryStyles-CEjpbRUj.js";import"./types-BX8ZQcvG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BYdzk1TZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BbbHCzWy.js";import"./useAnimationId-CiJHzCVR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CppGq9PY.js";import"./tooltipContext-BRDiEJW9.js";import"./RegisterGraphicalItemId-DlZGROHe.js";import"./ErrorBarContext-C30p0TOk.js";import"./activeStyles-D7U9MU9g.js";import"./SetGraphicalItem-CbZ_Osbr.js";import"./getZIndexFromUnknown-Dfm4DS3J.js";import"./useEffectiveDataKey-DTWxfT2D.js";import"./omit-DZlTO-Gm.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
