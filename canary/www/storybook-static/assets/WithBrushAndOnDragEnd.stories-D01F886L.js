import{R as t}from"./iframe-Bq5XC69E.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CH_ot-kn.js";import{B as p}from"./BarChart-CxUERrvn.js";import{X as l}from"./XAxis-CJ__L0zP.js";import{Y as h}from"./YAxis-C-Z0y3eM.js";import{B as x}from"./Brush-A5kwHGBf.js";import{B as c}from"./Bar-Cbc5Uo5e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DoKMFVBl.js";import"./throttle-Ct-rPSxx.js";import"./index-DLG40tqd.js";import"./index-C2BKaTPh.js";import"./RechartsWrapper-bjxa_6pD.js";import"./axisSelectors-BOZBH3Nn.js";import"./polarAxisSelectors-CEQjO6UJ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-MB7Peh3q.js";import"./index-C-17JylX.js";import"./index-3Uw_iAKp.js";import"./renderedTicksSlice-BwIYCUgi.js";import"./index-DzbJHNcA.js";import"./fillDefinitions-Dhgql6la.js";import"./CartesianChart-moaB2ENx.js";import"./ZIndexPortal-D4Ob-hnX.js";import"./CategoricalChart-mibAt8bj.js";import"./CartesianAxis-D7JxrcAJ.js";import"./Layer-Cnu5LwAi.js";import"./Text-BD2GyaNh.js";import"./DOMUtils-DK-6QFhi.js";import"./ZIndexLayer-DBkhZGBE.js";import"./Label-CGkLvakU.js";import"./types-L3YuI5Vg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-0FCseyju.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CdaMHBMZ.js";import"./useAnimationId-DwGbNOL_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Gk8oTWam.js";import"./tooltipContext-T6g8p_Fs.js";import"./dataEntryStyles-DVS0RaWt.js";import"./ErrorBarContext-JgTKdwbz.js";import"./activeStyles-BIBdu-Bw.js";import"./SetGraphicalItem-D8FNyAZb.js";import"./getZIndexFromUnknown-E-yaDm0v.js";import"./useEffectiveDataKey-DNNImqCq.js";import"./omit-B5Gs5zHP.js";import"./isArguments-yB-y1yaH.js";const ht={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(c,{dataKey:"value"}))))}},xt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
