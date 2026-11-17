import{R as t}from"./iframe-66xGksI9.js";import{d as n}from"./Time-CZh6Vidc.js";import{R as s}from"./zIndexSlice-CYY5i5GC.js";import{B as p}from"./BarChart-CfGZDtlT.js";import{X as l}from"./XAxis-CXNDEo4D.js";import{Y as h}from"./YAxis-BiYwIvVw.js";import{B as x}from"./Brush-DBFQEUgt.js";import{B as c}from"./Bar-DqIGdAPS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CNf-20ax.js";import"./throttle-pB5GcO80.js";import"./index-BdwqiePa.js";import"./index-BY9aQbpp.js";import"./RechartsWrapper-CBtKgDqJ.js";import"./axisSelectors-c7Es3nNM.js";import"./polarAxisSelectors-CBhhjzdU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ni_fDMoN.js";import"./index-DfrMyUP0.js";import"./index-BRQLVN4e.js";import"./renderedTicksSlice-C3z0elvI.js";import"./index-BykASSPU.js";import"./fillDefinitions-bQfE-RQi.js";import"./CartesianChart-Cqx4FTn2.js";import"./chartDataContext-Bw9Xn6sV.js";import"./CategoricalChart-cIWfYphX.js";import"./CartesianAxis-DQXtF-Wj.js";import"./Layer-C1IdSUB2.js";import"./Text-DBDWQ-k-.js";import"./ZIndexLayer-CW7ymMrJ.js";import"./Label-CZY2Xnwr.js";import"./types-D-bLaOPe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-D5RB-ObJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_Uv0gGo.js";import"./useAnimationId-CE-ISBvq.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CCTJSoY2.js";import"./tooltipContext-B-UZ8kkJ.js";import"./ErrorBarContext-Cekx66Ji.js";import"./activeStyles-ueUYGAtI.js";import"./SetGraphicalItem-BwgsUtDt.js";import"./getZIndexFromUnknown-B1X1P9Vg.js";import"./useEffectiveDataKey-Dw6tI5XK.js";import"./omit-DAnAWpso.js";import"./isArguments-yB-y1yaH.js";const pt={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:n.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:n},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}},lt=["WithBrushAndOnDragEnd"];var a,i,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
