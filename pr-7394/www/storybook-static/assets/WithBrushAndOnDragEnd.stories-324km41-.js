import{c as t}from"./iframe-DcZ25aZq.js";import{a}from"./Time-D4Einjlh.js";import{g as s}from"./zIndexSlice-Bx385Wu5.js";import{B as p}from"./BarChart-DFQplHxf.js";import{X as l}from"./XAxis-DyhIsrPh.js";import{Y as h}from"./YAxis-C_fkHFUI.js";import{B as x}from"./Brush-DdQur2-7.js";import{B as c}from"./Bar-t_I4kfRf.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CNH0Qykv.js";import"./index-DUKnKSji.js";import"./index-6by7EgtV.js";import"./get-BBHPk0wF.js";import"./resolveDefaultProps-C_CQ9UBc.js";import"./isWellBehavedNumber-DH8Wjvkj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DsTdodcN.js";import"./index-CxwbJNHI.js";import"./index-kO-m-NHC.js";import"./renderedTicksSlice-CAWK7f2V.js";import"./axisSelectors-C3VexB3f.js";import"./d3-scale-COdDGNPP.js";import"./CartesianChart-Cl4arGk4.js";import"./chartDataContext-DIHsMymB.js";import"./CategoricalChart-im9vFRI0.js";import"./CartesianAxis-BygLm6pY.js";import"./Layer-BPFmWcLz.js";import"./Text-B5Z71jGK.js";import"./DOMUtils-CBs1V0PN.js";import"./Label-madSHGhS.js";import"./ZIndexLayer-CX9fDFPC.js";import"./types-CDVpgISI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./tooltipContext-DRhfxuNN.js";import"./ReactUtils-BfQpQwdE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BMeCNBC5.js";import"./useAnimationId-wbWpU06B.js";import"./ActiveShapeUtils-cdOmSqYT.js";import"./RegisterGraphicalItemId-Cyx6k34u.js";import"./ErrorBarContext-3J6T58S3.js";import"./GraphicalItemClipPath-CXNX3kTP.js";import"./SetGraphicalItem-BsEDaVAo.js";import"./getZIndexFromUnknown-CWr4yDyL.js";import"./graphicalItemSelectors-onWYZPz1.js";const ot={title:"Examples/cartesian/Bar/With Brush and onDragEnd"},e={render:()=>{const[r,d]=t.useState({startIndex:0,endIndex:a.length-1});return t.createElement("div",{style:{width:"100%",height:"calc(100% - 84px)"}},t.createElement("div",null,"Start index:",r.startIndex),t.createElement("div",null,"End index:",r.endIndex),t.createElement(s,null,t.createElement(p,{data:a},t.createElement(l,{dataKey:"value"}),t.createElement(h,null),t.createElement(x,{dataKey:"name",height:30,onDragEnd:m=>{d(m)}}),t.createElement(c,{dataKey:"value"}))))}};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const dt=["WithBrushAndOnDragEnd"];export{e as WithBrushAndOnDragEnd,dt as __namedExportsOrder,ot as default};
