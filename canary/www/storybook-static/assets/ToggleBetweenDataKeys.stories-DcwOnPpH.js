import{r as p,R as t}from"./iframe-DHcJjYhp.js";import{L as n}from"./LineChart-BzjvebKF.js";import{R as s}from"./zIndexSlice-Cc80mhc9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ZdT5meIL.js";import{X as d}from"./XAxis-BsCapYe_.js";import{Y as y}from"./YAxis-CgAAJes1.js";import{L as u}from"./Legend-C8YJ-FLQ.js";import{L as h}from"./Line-CQxvfX6V.js";import{T as g}from"./Tooltip-C3DlAGnj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DW6cza7Q.js";import"./resolveDefaultProps-BvovYCe7.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CcZJHo_q.js";import"./throttle-GOg0Fvd7.js";import"./index-DrarxPoz.js";import"./index-DIJK83CB.js";import"./polarAxisSelectors-CcC4x2tN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CySl75ZF.js";import"./index-CKtel9-l.js";import"./index-Cln2IwYT.js";import"./renderedTicksSlice-Bl5XAOUo.js";import"./index-D3Qy2UUT.js";import"./CartesianChart-B9teWspu.js";import"./ZIndexPortal-pZH-aZp_.js";import"./CategoricalChart-mtPMptXy.js";import"./CartesianAxis-I4Gfetq1.js";import"./Layer-BayIcTfz.js";import"./Text-BAIudaB2.js";import"./pageBackground-CtNdVSAn.js";import"./ZIndexLayer-_GMRW-y_.js";import"./Label-CDs-ZtGW.js";import"./dataEntryStyles-DyEOYp64.js";import"./types-BNrWE8hx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-yzipNpVJ.js";import"./symbol-l4VrHHkB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bh8_OLoh.js";import"./uniqBy-B6G9ZnVo.js";import"./iteratee-DxJ21J1F.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CK2uyVOO.js";import"./step-CaKisAF4.js";import"./LabelList-CQ-NHiOO.js";import"./ActivePoints-D-AhTPsw.js";import"./Dot-CC8f5qsB.js";import"./activeStyles-CGuSRajE.js";import"./useAnimationId-r_2cTbPz.js";import"./RegisterGraphicalItemId-CLn33yWX.js";import"./ErrorBarContext-GsyzIiJa.js";import"./SetGraphicalItem-CQRz0ej3.js";import"./getRadiusAndStrokeWidthFromDot-xrAdJmyj.js";import"./ActiveShapeUtils-BGsGLrPh.js";import"./useEffectiveDataKey-wQhirjtm.js";import"./Cross-C_SeJ845.js";import"./Rectangle-Cb_93E_H.js";import"./util-Dxo8gN5i.js";import"./Sector-Dl0iMyjQ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
