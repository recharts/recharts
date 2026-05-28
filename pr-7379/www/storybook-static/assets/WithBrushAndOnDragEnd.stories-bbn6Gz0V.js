import{e as t}from"./iframe-KzgC6yl3.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./arrayEqualityCheck-CI6mjpz-.js";import{B as p}from"./BarChart-BFuywltk.js";import{X as l}from"./XAxis-CQ-aN71n.js";import{Y as h}from"./YAxis-Dll4Gv0X.js";import{B as c}from"./Brush-YoxTbU_c.js";import{B as x}from"./Bar-C-cs7rDv.js";import{R as u}from"./RechartsHookInspector-CbwNoaPW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DbdijU9i.js";import"./immer-BD-tkhpl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlAfZ1fX.js";import"./index-D1VqXYN0.js";import"./hooks-Bk-p3SZZ.js";import"./axisSelectors-BGTsJTqw.js";import"./d3-scale-CYshLe_K.js";import"./zIndexSlice-CoKEHAdo.js";import"./renderedTicksSlice-jEvY63xF.js";import"./CartesianChart-B-Y1gwjz.js";import"./chartDataContext-DWNsgPih.js";import"./CategoricalChart-BntpVIm6.js";import"./CartesianAxis-IwDruP1d.js";import"./Layer-LeweOpyN.js";import"./Text-DMdLrMxb.js";import"./DOMUtils-CBtmXe9D.js";import"./Label-DkRj53y4.js";import"./ZIndexLayer-B24S8uuv.js";import"./types-eUgvlmUM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BkO_MTjD.js";import"./ReactUtils-CwLFTC_n.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kA7xLTPQ.js";import"./useAnimationId-Djb8H1Ge.js";import"./ActiveShapeUtils-C7hoslI5.js";import"./RegisterGraphicalItemId-C-ghpo4L.js";import"./ErrorBarContext-Ch4fukf7.js";import"./GraphicalItemClipPath-fwgnm59t.js";import"./SetGraphicalItem-D3MvL0nb.js";import"./getZIndexFromUnknown-BLfCL2lL.js";import"./graphicalItemSelectors-CI7mViEK.js";import"./index-BPaFEgS3.js";import"./ChartSizeDimensions-DC6_U8Aq.js";import"./OffsetShower-CrK-LA7q.js";import"./PlotAreaShower-CZGD6-xs.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const lt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
