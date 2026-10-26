import{R as t}from"./iframe-CcLWsqZ6.js";import{z as a}from"./RechartsWrapper-BXLQXmKg.js";import{R as p}from"./zIndexSlice-qEbbRsug.js";import{C as n}from"./ComposedChart-EaqAREPx.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CqlVNCGh.js";import{X as l}from"./XAxis-BgOtkzm1.js";import{Y as h}from"./YAxis-BSdoGpjP.js";import{L as c}from"./Legend-CnZ3wN7p.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DIHsajMe.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DKMD16Y3.js";import"./throttle-QCGHXTx2.js";import"./index-BFIBYpnF.js";import"./index-DS2FinM5.js";import"./polarAxisSelectors-ChPgG8gV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4Z54rtJ.js";import"./index-53ZRgOab.js";import"./index-DTchXhsD.js";import"./renderedTicksSlice-ByXwp7t2.js";import"./index-DgxdHgy0.js";import"./CartesianChart-DtQ910PV.js";import"./chartDataContext-BOZiBkOs.js";import"./CategoricalChart-xvgg784f.js";import"./Layer-Cid6c7Vb.js";import"./Curve-CkzSpo54.js";import"./types-B5Ef_z7I.js";import"./step-Dkisf4Kt.js";import"./path-DyVhHtw_.js";import"./activeStyles-l3ZfSaP4.js";import"./Label-FbOJbP-p.js";import"./Text-B8YpIyQn.js";import"./pageBackground-LUiwpw9x.js";import"./useId-HcHlz_oH.js";import"./ZIndexLayer-DNvaLTFc.js";import"./dataEntryStyles-Cm1A0_Zh.js";import"./useAnimationId-D35HAJRU.js";import"./ActivePoints-Ch_IhoTN.js";import"./Dot-DxmHRpLN.js";import"./Symbols-CqDetlVC.js";import"./symbol-CfzxdKp_.js";import"./RegisterGraphicalItemId-DuSlzxcR.js";import"./ErrorBarContext-BFxrQbxP.js";import"./SetGraphicalItem-DRC1z2NN.js";import"./getRadiusAndStrokeWidthFromDot-Dy2q91XH.js";import"./ActiveShapeUtils-B0HZ1tIg.js";import"./useEffectiveDataKey-7iKmBNHY.js";import"./CartesianAxis-nGOA1KMV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-CzNyUy0f.js";import"./uniqBy-Bl1hupsk.js";import"./iteratee-BmEXTGiW.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
