import{R as t}from"./iframe-CsUTfbme.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-DJN3Z2tA.js";import{B as p}from"./BarChart-Be0e9mjS.js";import{X as l}from"./XAxis-B66nDtTW.js";import{Y as h}from"./YAxis-DU0GmGih.js";import{B as x}from"./Brush-CCR42GrF.js";import{B as c}from"./Bar-B3hUCiu-.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BS6zuvPx.js";import"./index-CpMCAhl1.js";import"./index-C0tTD0a-.js";import"./get-CGtvq50a.js";import"./resolveDefaultProps-DOSPF-U5.js";import"./isWellBehavedNumber-CaHmgZiw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bz5AtJCZ.js";import"./index-84tIClUK.js";import"./index-CiR04iLY.js";import"./renderedTicksSlice-DKAjtNca.js";import"./axisSelectors-BaY3t_zv.js";import"./d3-scale-D08hqUcH.js";import"./CartesianChart-xV6uxcxT.js";import"./chartDataContext-Dks_l25O.js";import"./CategoricalChart-CDn_aEvK.js";import"./CartesianAxis-D0Iddbyw.js";import"./Layer-C0UzjkXP.js";import"./Text-1xaaQRGr.js";import"./DOMUtils-CCNMXYAS.js";import"./Label-BrqLuQxp.js";import"./ZIndexLayer-BszTzZbW.js";import"./types-CNmnDBmM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-wiAPXXIa.js";import"./ReactUtils-CIWjNZdp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DR8qZyZF.js";import"./useAnimationId-DbHaBqmd.js";import"./ActiveShapeUtils-eKrzz-9L.js";import"./RegisterGraphicalItemId-Bdk-Jfc1.js";import"./ErrorBarContext-BqDYRxxf.js";import"./GraphicalItemClipPath-ciWvPzTM.js";import"./SetGraphicalItem-X5S3Yot0.js";import"./getZIndexFromUnknown-BTzAmo9f.js";import"./graphicalItemSelectors-B5605qJb.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const dt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,dt as __namedExportsOrder,ot as default};
