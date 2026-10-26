import{R as t}from"./iframe-CV_Focqb.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BMlZ-BTA.js";import{B as p}from"./BarChart-CRXv3eUx.js";import{X as l}from"./XAxis-CbmbdddR.js";import{Y as h}from"./YAxis-B-5hoebp.js";import{B as x}from"./Brush-Bq0Ftn0P.js";import{B as c}from"./Bar-DRk89vZc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BHR6OE-9.js";import"./throttle-B3rCyY-p.js";import"./index-CjhSLlbk.js";import"./index-Beg8UZ9d.js";import"./RechartsWrapper-gHoUEC4B.js";import"./axisSelectors-BxeWYXvo.js";import"./polarAxisSelectors-C3BM8mNN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaWFw3Yv.js";import"./index-CURBXMxT.js";import"./index-B3f3WOos.js";import"./renderedTicksSlice-BoOYYKQz.js";import"./index-M6ICInBl.js";import"./CartesianChart-Db9Ekhbm.js";import"./ZIndexPortal-AZ5cZsws.js";import"./CategoricalChart-DWAHsGuD.js";import"./CartesianAxis-CQt-kkqP.js";import"./Layer-CsEez_y-.js";import"./Text-DkcQkg85.js";import"./pageBackground-CnYdCkRU.js";import"./ZIndexLayer-mZMt123c.js";import"./Label-Du5iQDtH.js";import"./dataEntryStyles-BVJSTixW.js";import"./types-DM7Vi8Am.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DREKrdKH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkrXeBYw.js";import"./useAnimationId-DuuBzQL8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-180icphM.js";import"./tooltipContext-C5kefYz7.js";import"./RegisterGraphicalItemId-r-VYbJMs.js";import"./ErrorBarContext-CdrVSUrx.js";import"./activeStyles-gddFfhxG.js";import"./SetGraphicalItem-BpTteZzJ.js";import"./getZIndexFromUnknown-hBVwK3Ok.js";import"./useEffectiveDataKey-CjigGJWt.js";import"./omit-COEAGa6S.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
