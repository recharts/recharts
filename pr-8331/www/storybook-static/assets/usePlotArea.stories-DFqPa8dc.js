import{R as t}from"./iframe-CjYP3ojB.js";import{z as a}from"./RechartsWrapper-UTu-k1rT.js";import{R as p}from"./zIndexSlice-Cy7CLl9Z.js";import{C as n}from"./ComposedChart-Bpv-zdhu.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-COY0vFQs.js";import{X as l}from"./XAxis-Blplutoc.js";import{Y as h}from"./YAxis-Bt-Cr0Xc.js";import{L as c}from"./Legend-25wTq1-O.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKyPqSHv.js";import"./get-CjriyByo.js";import"./axisSelectors-CPJSjERY.js";import"./redux-toolkit.esm-DZ87n3n2.js";import"./index-Dxgip7sp.js";import"./index-ChIvmNbe.js";import"./polarAxisSelectors-DdQAYS9z.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-HdrCxTIi.js";import"./index-cwlxkqz2.js";import"./index-CvkAYdqK.js";import"./renderedTicksSlice-CI60Ea5b.js";import"./index-CpZXho2T.js";import"./fillDefinitions-BUdB36JD.js";import"./CartesianChart-C5nFTC9G.js";import"./chartDataContext-ksA5CmmE.js";import"./CategoricalChart-zTEQjMMp.js";import"./getRadiusAndStrokeWidthFromDot-C_KRSABn.js";import"./Layer-BI-kTcme.js";import"./Curve-CNaKNyZA.js";import"./types-D4qLdpQF.js";import"./step-BZQ3UPaP.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BvceDOIn.js";import"./Label-CaJS6zCA.js";import"./Text-DjT8udYf.js";import"./ZIndexLayer-BebYx5XY.js";import"./ActivePoints-D4hUXiIf.js";import"./Dot-BzVdtL2Q.js";import"./activeStyles-D9A5DeQH.js";import"./useAnimationId-C3slNkW8.js";import"./Symbols-CAjbkOs6.js";import"./symbol-Lqckysps.js";import"./ErrorBarContext-DD39jyt1.js";import"./SetGraphicalItem-B_iWrnd9.js";import"./ActiveShapeUtils-DicChUyh.js";import"./useEffectiveDataKey-BSYT-tLD.js";import"./CartesianAxis-5Yui6JuQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getUniqPayload-DT0aDQpX.js";import"./uniqBy-Bdlm7mbE.js";import"./iteratee-DlQmRZQR.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
