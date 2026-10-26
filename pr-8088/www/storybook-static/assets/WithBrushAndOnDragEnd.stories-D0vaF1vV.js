import{R as t}from"./iframe-DcaMyu57.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-D63TC5wE.js";import{B as p}from"./BarChart-PXVSjQ6t.js";import{X as l}from"./XAxis-CpQfhxVu.js";import{Y as h}from"./YAxis-Ctjpx2tI.js";import{B as x}from"./Brush-BqQIi8Z2.js";import{B as c}from"./Bar-CWFZ-DmD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BIhtVjr1.js";import"./throttle-DTKuFpeU.js";import"./index-LUaWadAh.js";import"./index-C1eYPsJe.js";import"./RechartsWrapper-s9QE5BnJ.js";import"./axisSelectors-DeMGjxl4.js";import"./polarAxisSelectors-C8YroQFB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CtXzbLe9.js";import"./index-DhjSPGN6.js";import"./index-CGLqJivQ.js";import"./renderedTicksSlice-B7oGrXiB.js";import"./index-CZJeyZvE.js";import"./CartesianChart-Doy7puzJ.js";import"./chartDataContext-Cvuxfrl6.js";import"./CategoricalChart-Oo-gpddM.js";import"./CartesianAxis-CeZT8ZwV.js";import"./Layer-Buw-ejS2.js";import"./Text-BDVAjJGp.js";import"./pageBackground-DJiDI2js.js";import"./useId-2CjiTV-a.js";import"./ZIndexLayer-BAtegXWd.js";import"./Label-CNqQQqDH.js";import"./dataEntryStyles-Dvqex9ju.js";import"./types-CezfUA9a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-DWP2-Wsz.js";import"./useAnimationId-CY8QIDMT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BG3wMj9I.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EJ-BM8cF.js";import"./tooltipContext-BLvne3kB.js";import"./RegisterGraphicalItemId-Bf7_3i_n.js";import"./ErrorBarContext-4Q2l69vj.js";import"./SetGraphicalItem-CCEEUI7s.js";import"./getZIndexFromUnknown-DYOFYyvu.js";import"./useEffectiveDataKey-90ZX8Dti.js";import"./omit-y-u6NmAA.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
