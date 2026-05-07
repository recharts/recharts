import{e as t}from"./iframe-CA8OhNxH.js";import{d as a}from"./Time-CZh6Vidc.js";import{R as s}from"./arrayEqualityCheck-CL-Z01lB.js";import{B as p}from"./BarChart-BL3iiJk6.js";import{X as l}from"./XAxis-fFf7Kpu6.js";import{Y as h}from"./YAxis-DXR1Un-U.js";import{B as c}from"./Brush-BIsV0Mb2.js";import{B as x}from"./Bar-9-ZbhPD4.js";import{R as u}from"./RechartsHookInspector-BugLDhSF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C1cg3qcu.js";import"./immer-CLqkMfUW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXeUN3o5.js";import"./index-CuTjkf5v.js";import"./hooks-CyxhoeqI.js";import"./axisSelectors-BooSDkXq.js";import"./d3-scale-DD8ooXHD.js";import"./zIndexSlice-DR6ZwnqZ.js";import"./renderedTicksSlice-DkCMmWDM.js";import"./CartesianChart-DIopKqdp.js";import"./chartDataContext-BaaZuqtU.js";import"./CategoricalChart-G3zYlJLo.js";import"./CartesianAxis-f2zOKi0X.js";import"./Layer-51jxPk-z.js";import"./Text-QadmgfLW.js";import"./DOMUtils-BdRmP8Tt.js";import"./Label-B9rEotsE.js";import"./ZIndexLayer-BbCOJVvb.js";import"./types-DIwXheU2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./tooltipContext-Ys6e0CnQ.js";import"./ReactUtils-DijgxaRr.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CHm7mV1T.js";import"./isPlainObject-BB9dmDmF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0apUPF6.js";import"./useAnimationId-CFa_WVC3.js";import"./Trapezoid-DD5_8Z8z.js";import"./Sector-Dda5EE-9.js";import"./Symbols-BdJUl3ke.js";import"./symbol-GRJr5T5S.js";import"./step-Cu2k92Ir.js";import"./Curve-cpd6A-Ga.js";import"./RegisterGraphicalItemId-WQn-qxjl.js";import"./ErrorBarContext-HJShwkTe.js";import"./GraphicalItemClipPath-D8pqnZaq.js";import"./SetGraphicalItem-dL7nqQCK.js";import"./getZIndexFromUnknown-DOv9TbMx.js";import"./graphicalItemSelectors-D9CjbfVH.js";import"./index-BZ4hO2WS.js";import"./ChartSizeDimensions-CM9slMDG.js";import"./OffsetShower-B_M2I77E.js";import"./PlotAreaShower-gcaUHmcI.js";const It={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,m]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(c,{dataKey:"name",height:30,onDragEnd:d=>{m(d)}}),t.createElement(x,{dataKey:"value"}),t.createElement(u,null))))}};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
