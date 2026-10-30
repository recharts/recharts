import{R as t}from"./iframe-C_yGAyrl.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-BJ-JuQhh.js";import{B as p}from"./BarChart-i5BQ5AYF.js";import{X as l}from"./XAxis-BCyVXA2-.js";import{Y as h}from"./YAxis-lwhG3-Lu.js";import{B as x}from"./Brush-BsrPwYAB.js";import{B as c}from"./Bar-CLFeXbE0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B8DgtWv7.js";import"./throttle-BAXAw3D6.js";import"./index-DrbolqVI.js";import"./index-ddpbYnm-.js";import"./RechartsWrapper-BSGXC4_F.js";import"./axisSelectors-5FYthY9Y.js";import"./polarAxisSelectors-ut8KXzAo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-PQcr3dQu.js";import"./index-C36DrKNt.js";import"./index-RS1OPqlJ.js";import"./renderedTicksSlice-DkVAJH0_.js";import"./index-ClVDXgD6.js";import"./CartesianChart-CokpCbyl.js";import"./ZIndexPortal-BbHy9i_X.js";import"./CategoricalChart-vhidTTy9.js";import"./CartesianAxis-DMLFVqxV.js";import"./Layer-DRwTYvg4.js";import"./Text-DzacdUSY.js";import"./DOMUtils-DAgrf4y-.js";import"./ZIndexLayer-B7Tlmy9n.js";import"./Label-BnQGI-qv.js";import"./types-Cxyr58RE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-o4uUgS5K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DTDM3K3u.js";import"./useAnimationId-HAfaQzyp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHVm68Z9.js";import"./tooltipContext-CJMN-mb7.js";import"./dataEntryStyles-DACXFNb8.js";import"./ErrorBarContext-BFE3xm4o.js";import"./activeStyles-B0RsKEFJ.js";import"./SetGraphicalItem-ByCBXbFB.js";import"./getZIndexFromUnknown-7pUA36BO.js";import"./useEffectiveDataKey-DU6lMzAC.js";import"./fillDefinitions-BmGKFoo3.js";import"./omit-DF37_2xs.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
