import{R as t}from"./iframe-CqOe7k5Y.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-HvZ_KFp3.js";import{B as p}from"./BarChart-muv5mYtZ.js";import{X as l}from"./XAxis-BHc3UEw3.js";import{Y as h}from"./YAxis-DEQnYc30.js";import{B as x}from"./Brush-C1hcGoA7.js";import{B as c}from"./Bar-wsvdD2Nf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uDtrY5a-.js";import"./get-CjriyByo.js";import"./throttle-BawAsSGW.js";import"./index-NjrwBPri.js";import"./index-Nzssfkwo.js";import"./RechartsWrapper-C6U1x4NS.js";import"./axisSelectors-HXuL0A3L.js";import"./polarAxisSelectors-DnFOpaLb.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-B6EefrnE.js";import"./index-C49j9LJv.js";import"./index-DQgKuLzP.js";import"./renderedTicksSlice-B-tkfTkQ.js";import"./index-CjpYzq4S.js";import"./fillDefinitions-BUUlO_ua.js";import"./CartesianChart-CGVfE0i2.js";import"./chartDataContext-B9y28Tuh.js";import"./CategoricalChart-Cm4y0z4v.js";import"./CartesianAxis-botWNN7F.js";import"./Layer-CqFOI8aQ.js";import"./Text-N8PDZP4n.js";import"./ZIndexLayer-Bx6NEOZE.js";import"./Label-yQ-nD2jU.js";import"./types-DHkZz5Qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CclxtIIf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-mBtSHpSc.js";import"./useAnimationId-_GPHqvCi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-dZojZzcj.js";import"./tooltipContext-D9JNoTMB.js";import"./ErrorBarContext-CQfvj0jY.js";import"./activeStyles-DyQy4djd.js";import"./SetGraphicalItem-5gHOvcya.js";import"./getZIndexFromUnknown-DT-UApPJ.js";import"./useEffectiveDataKey-C_dNJO7p.js";import"./omit-UGBfM6EB.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,lt as __namedExportsOrder,pt as default};
