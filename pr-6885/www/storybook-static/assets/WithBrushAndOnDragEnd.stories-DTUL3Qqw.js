import{e}from"./iframe-DYFx2r-j.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-DCVaqN9G.js";import{B as p}from"./BarChart-BmlbQS8b.js";import{X as l}from"./XAxis-CrWNcebb.js";import{Y as h}from"./YAxis-BQSE3w1-.js";import{B as c}from"./Brush-CE9F6rez.js";import{B as x}from"./Bar-BY5cU1ag.js";import{R as u}from"./RechartsHookInspector-8HiD6XU_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BTmxXdy3.js";import"./PolarUtils-C1zbAlbA.js";import"./RechartsWrapper-C83nyDwr.js";import"./hooks-DjCJ821w.js";import"./axisSelectors-CNJps_KV.js";import"./zIndexSlice-CSYHepNq.js";import"./CartesianChart-CZCpz_Bc.js";import"./chartDataContext-BcNxXqiP.js";import"./CategoricalChart-D0ijd2iH.js";import"./CartesianAxis-DetyPtZ0.js";import"./Layer-BC3vDM2H.js";import"./Text-CehOywt1.js";import"./DOMUtils-dzsDioow.js";import"./Label-DjuisPzU.js";import"./ZIndexLayer-CCFXe3ig.js";import"./types-Cik9NZHM.js";import"./tooltipContext-DOjE1Le6.js";import"./ReactUtils-B5hh0nCE.js";import"./ActiveShapeUtils-5VBSo5Lq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Du9Z9pvb.js";import"./useAnimationId-xTCLSGwz.js";import"./Trapezoid-B1aN-PmS.js";import"./Sector-Cw_s6D-z.js";import"./Symbols-DOMt1Ple.js";import"./Curve-7IBZZol0.js";import"./RegisterGraphicalItemId-CuPr_ukv.js";import"./ErrorBarContext-BaEgtdW6.js";import"./GraphicalItemClipPath-CYj9KQXB.js";import"./SetGraphicalItem-BLQ-q15z.js";import"./getZIndexFromUnknown-Cftz78Dm.js";import"./graphicalItemSelectors-hED77aIZ.js";import"./index-BqI5oxI8.js";import"./ChartSizeDimensions-CyZcFbe9.js";import"./OffsetShower-D26sUntH.js";import"./PlotAreaShower--zaCCVLK.js";const me={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},t={render:()=>{const[r,d]=e.useState({startIndex:0,endIndex:a.length-1});return e.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},e.createElement("div",null,"Start index:",r.startIndex),e.createElement("div",null,"End index:",r.endIndex),e.createElement(s,null,e.createElement(p,{data:a},e.createElement(l,{dataKey:"value"}),e.createElement(h,null),e.createElement(c,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),e.createElement(x,{dataKey:"value"}),e.createElement(u,null))))}};var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const se=["WithBrushAndOnDragEnd"];export{t as WithBrushAndOnDragEnd,se as __namedExportsOrder,me as default};
