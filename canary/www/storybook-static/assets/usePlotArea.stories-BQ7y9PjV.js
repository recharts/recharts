import{R as t}from"./iframe-DP6zAp54.js";import{z as a}from"./RechartsWrapper-DOH9cWj9.js";import{R as p}from"./zIndexSlice-CdFbAgG_.js";import{C as n}from"./ComposedChart-Djbyfnt-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CatZrMVF.js";import{X as l}from"./XAxis-wrPg27KZ.js";import{Y as h}from"./YAxis-CRTIqg01.js";import{L as c}from"./Legend-dg9X3PkL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CSMJ250z.js";import"./get-CjriyByo.js";import"./axisSelectors-Rm4q15PI.js";import"./throttle-D7lh8v3-.js";import"./index-XgfMJOXy.js";import"./index-CYR3TkYm.js";import"./polarAxisSelectors-DrRxC45o.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Ct01c8MP.js";import"./index-DFp-_Wbz.js";import"./index-yomVPEkO.js";import"./renderedTicksSlice-BhuX61Ra.js";import"./index-BfoEz1rZ.js";import"./fillDefinitions-BqFRhPDs.js";import"./CartesianChart-DMNhl37Y.js";import"./chartDataContext-Dgk8EHkE.js";import"./CategoricalChart-C4A4gzgw.js";import"./getRadiusAndStrokeWidthFromDot-DHwNW-IB.js";import"./Layer-44h3-wN_.js";import"./Curve-DQP2JLjt.js";import"./types-DNQC58zt.js";import"./step-DvtT47Gl.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DojbuA9r.js";import"./Label-DIQKMqhX.js";import"./Text-DGNAB76g.js";import"./ZIndexLayer-DcCIRQcN.js";import"./ActivePoints-C-GzPRnQ.js";import"./Dot-P3TO-0hC.js";import"./activeStyles-B0VCWO8T.js";import"./useAnimationId-EekDlSpG.js";import"./Symbols-D-J-NUlP.js";import"./symbol-CoNKi1UW.js";import"./ErrorBarContext-CmnSonHd.js";import"./SetGraphicalItem-CNROvnrS.js";import"./ActiveShapeUtils-DYM7TwK-.js";import"./useEffectiveDataKey-DdiUIHde.js";import"./CartesianAxis-BW9v8-VT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CL3Lm6d5.js";import"./uniqBy-BNdjw3X0.js";import"./iteratee-BHwSZVIk.js";import"./isArguments-yB-y1yaH.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ut=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
