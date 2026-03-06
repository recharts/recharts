import{e as t}from"./iframe-D0SJPJ1y.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CYS0izrw.js";import{B as p}from"./BarChart-DUjHBerq.js";import{X as l}from"./XAxis-CwSSbwpc.js";import{Y as h}from"./YAxis-DF4qEhbE.js";import{B as c}from"./Brush-XRgaMuMA.js";import{B as x}from"./Bar-DMcU348Z.js";import{R as u}from"./RechartsHookInspector-4NIikMun.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnSf9MnV.js";import"./immer-BFjNfeIQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DR1v2TsK.js";import"./index-CPz14I3O.js";import"./hooks-V_cOlgcg.js";import"./axisSelectors-Bl05SH9I.js";import"./d3-scale-CYyK-SUf.js";import"./zIndexSlice-CqQsXxK3.js";import"./renderedTicksSlice-oZMg51oo.js";import"./CartesianChart-CwFfh_0J.js";import"./chartDataContext-Jo-HA9ql.js";import"./CategoricalChart-FrfPjT_B.js";import"./CartesianAxis-D59EO1CG.js";import"./Layer-Dax6EhgB.js";import"./Text-CvTZwd3j.js";import"./DOMUtils-DfKOz27u.js";import"./Label-Cf3oENl6.js";import"./ZIndexLayer-DYNk2l8y.js";import"./types-Cyc_Gww5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-BCgsFGCF.js";import"./ReactUtils-a6BVn4Bt.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CH3V2Gcs.js";import"./isPlainObject-CjD1Y_nD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj_IkvMc.js";import"./useAnimationId-wUwzbzyQ.js";import"./Trapezoid-Dz2cKjjq.js";import"./Sector-2V2J5PIx.js";import"./Symbols-Doo8obb_.js";import"./symbol--3m7hGn6.js";import"./step-RKAN_I-J.js";import"./Curve-Cx3Ohe6s.js";import"./RegisterGraphicalItemId-CivjBHhq.js";import"./ErrorBarContext-Bzp3Zzcb.js";import"./GraphicalItemClipPath-637j1oGj.js";import"./SetGraphicalItem-C-583XhE.js";import"./getZIndexFromUnknown-DN1MhQT1.js";import"./graphicalItemSelectors-CeFUDeRv.js";import"./index-CBc708fQ.js";import"./ChartSizeDimensions-ChXleD3h.js";import"./OffsetShower-D49YcvPA.js";import"./PlotAreaShower-BqwlsAkt.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const vt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,vt as __namedExportsOrder,It as default};
