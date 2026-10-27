import{R as t}from"./iframe-u5XvksY5.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-qPjBbXUc.js";import{B as p}from"./BarChart-BzEM4U-E.js";import{X as l}from"./XAxis-FOCUFVAl.js";import{Y as h}from"./YAxis-D_j8mX6u.js";import{B as x}from"./Brush-CAWEbAJL.js";import{B as c}from"./Bar-BHyHw6JB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BLkmbHVR.js";import"./throttle-B8qtKcg2.js";import"./index-vwmUrPFZ.js";import"./index-CtoGLGiN.js";import"./RechartsWrapper-By94_cXW.js";import"./axisSelectors-Bi0OjrmZ.js";import"./polarAxisSelectors-D58IkYNc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C5Gzvvl7.js";import"./index-BpuM8AnC.js";import"./index-HZYgYW5E.js";import"./renderedTicksSlice-CduAdCWE.js";import"./index-DkZbI5V5.js";import"./CartesianChart-9oGErKhp.js";import"./ZIndexPortal-B1bAvAqr.js";import"./CategoricalChart-BBgGbCCg.js";import"./CartesianAxis-C9X2Uzsi.js";import"./Layer-DZaDPYK5.js";import"./Text-DCsWNeTw.js";import"./pageBackground-XEfDP_WE.js";import"./ZIndexLayer-Y9UkGb_Q.js";import"./Label-VbOnr0hr.js";import"./types-B_Vy1dAM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BkhbrOAx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bs9jcdbm.js";import"./useAnimationId-BOOGmCHa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-I4oRUBzq.js";import"./tooltipContext-DWQIE0BH.js";import"./dataEntryStyles-RGg8_IXa.js";import"./ErrorBarContext-D-07T4-U.js";import"./activeStyles-CGX86F5-.js";import"./SetGraphicalItem-kkTP1No9.js";import"./getZIndexFromUnknown-THeWY3ae.js";import"./useEffectiveDataKey-CHJtUCr7.js";import"./omit-CyNPTrPa.js";import"./isArguments-yB-y1yaH.js";const lt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},ht=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};export{e as WithBrushAndOnDragEnd,ht as __namedExportsOrder,lt as default};
