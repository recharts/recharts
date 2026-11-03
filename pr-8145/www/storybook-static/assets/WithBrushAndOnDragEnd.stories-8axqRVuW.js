import{R as t}from"./iframe-C9Icmvn-.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BtEgXkTj.js";import{B as p}from"./BarChart-DfPGU-GC.js";import{X as l}from"./XAxis-3c-aZ5Pt.js";import{Y as h}from"./YAxis-EbKXu10L.js";import{B as x}from"./Brush-BCVGCyNP.js";import{B as c}from"./Bar-BylXbNGS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ca82pTCc.js";import"./throttle-BP58Oxor.js";import"./index-Dmxp60UK.js";import"./index-OnkxBtFQ.js";import"./RechartsWrapper-CtHkjOy7.js";import"./axisSelectors-C12AZXdM.js";import"./polarAxisSelectors-BlT-4ON5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DZcRnjza.js";import"./index-WAfrpxeX.js";import"./index-D9kzRPzU.js";import"./renderedTicksSlice-wh0y1ne7.js";import"./index-Dwiu-D7S.js";import"./fillDefinitions-BsgJeWYO.js";import"./CartesianChart-TwWF9vdI.js";import"./ZIndexPortal-Dm-GjtZl.js";import"./CategoricalChart-PMdsySjF.js";import"./CartesianAxis-R6B48fBq.js";import"./Layer-wqByJTCO.js";import"./Text-sNGi1G51.js";import"./DOMUtils-B21FeQ1N.js";import"./ZIndexLayer-B_nMkGpF.js";import"./Label-B5iIonTH.js";import"./types-C9Uy4GKt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BBURyYAC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BsmVPfs4.js";import"./useAnimationId-BL9AhoYr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B_TPSWTk.js";import"./tooltipContext-kO2lJoKe.js";import"./dataEntryStyles-BjZqswDr.js";import"./ErrorBarContext-BlDg14Jm.js";import"./activeStyles-h91K6JZi.js";import"./SetGraphicalItem-xkXC5Q40.js";import"./getZIndexFromUnknown-Dfmzqvri.js";import"./useEffectiveDataKey-C0LxQIpq.js";import"./omit-DYtv04xC.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
