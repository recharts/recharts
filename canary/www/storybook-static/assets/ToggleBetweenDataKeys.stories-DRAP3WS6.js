import{r as p,R as t}from"./iframe-Cn8BbXdc.js";import{L as n}from"./LineChart-BsS3e4DC.js";import{R as s}from"./zIndexSlice-Cplo4OJz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DfLIIGrV.js";import{X as d}from"./XAxis-OdkIm8mG.js";import{Y as y}from"./YAxis-CvKMQQHY.js";import{L as u}from"./Legend-8QFc7Zvg.js";import{L as h}from"./Line-B2HjGTuQ.js";import{T as g}from"./Tooltip-Bw31npbB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CCqZUt6C.js";import"./resolveDefaultProps-Dx-UV5kK.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cb1wJ0Tf.js";import"./throttle-BbuJxkpw.js";import"./index-Vt5NnRCL.js";import"./index-r2FQlKmQ.js";import"./polarAxisSelectors-Dlr2J2lS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BDIN99PH.js";import"./index-CIAdjncW.js";import"./index-apP2Ny11.js";import"./renderedTicksSlice-CBPyHODM.js";import"./index-CkmJfaR7.js";import"./fillDefinitions-Dqk1J0Zs.js";import"./CartesianChart-Cu7ICiUo.js";import"./chartDataContext-CsFOc9VE.js";import"./CategoricalChart-D66OJrIZ.js";import"./CartesianAxis-CrDF4n3X.js";import"./Layer-B5iMOq_s.js";import"./Text-C0NLdB6_.js";import"./ZIndexLayer-CPj3ZDvt.js";import"./Label-BMteoko4.js";import"./types-7A15NfYp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-V0KMXGx3.js";import"./symbol-B1AYOCFp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BZTAY-ym.js";import"./uniqBy-BDioFPwN.js";import"./iteratee-Bi5Bqc-D.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DPXO0w3v.js";import"./step-CpKrc_Vd.js";import"./dataEntryStyles-fXcaT9lZ.js";import"./ActivePoints-CvLcmOKu.js";import"./Dot-DHIPOa_F.js";import"./activeStyles-DvMk-MBL.js";import"./useAnimationId-BQvfHsDD.js";import"./ErrorBarContext-zwHjEd7p.js";import"./SetGraphicalItem-7Fal13Qm.js";import"./getRadiusAndStrokeWidthFromDot-CQo2Z7L1.js";import"./ActiveShapeUtils-Dlfc7hut.js";import"./useEffectiveDataKey-D8YFmfQj.js";import"./Cross-cZpc8_bO.js";import"./Rectangle-DSJXIYeh.js";import"./util-Dxo8gN5i.js";import"./Sector-Lq1kEL0B.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
