import{r as p,R as t}from"./iframe-CsBzJ_oY.js";import{L as n}from"./LineChart-DbbLakNn.js";import{R as s}from"./zIndexSlice-DMNrA3gR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BMhewIMe.js";import{X as d}from"./XAxis-DUfavQsq.js";import{Y as y}from"./YAxis-BcwvR8DG.js";import{L as u}from"./Legend-TM2Lf8pQ.js";import{L as h}from"./Line-CCPvJikT.js";import{T as g}from"./Tooltip-Cuif1eCk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BbLnuVBa.js";import"./resolveDefaultProps-DTmgUguK.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C9oSyHKr.js";import"./throttle-BC8XINhc.js";import"./index-ZIwCGu9j.js";import"./index-ANSegWuD.js";import"./polarAxisSelectors-DNMiXlqe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-eAFxYw1v.js";import"./index-BQIdRebQ.js";import"./index-CyJaGzTs.js";import"./renderedTicksSlice-DmEF733K.js";import"./index-Dtk6Fc20.js";import"./fillDefinitions-CiGFpPDU.js";import"./CartesianChart-BkZkGsdO.js";import"./chartDataContext-C_pMILpz.js";import"./CategoricalChart-DGDB_d9-.js";import"./CartesianAxis-Ct89iDgP.js";import"./Layer-DasxrL-P.js";import"./Text-_hT2aORY.js";import"./ZIndexLayer-BgP2DxGj.js";import"./Label-BqIt3uIU.js";import"./types-BTltodPN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-u-7YXq8E.js";import"./symbol-BqQr48xZ.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CgJ049Q8.js";import"./uniqBy-BzxtSZSo.js";import"./iteratee-deGr8F35.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Hya4Z7ii.js";import"./Curve-FGayhVFg.js";import"./step-HvxF_Jgn.js";import"./dataEntryStyles-BxNkTaqU.js";import"./ActivePoints-BGfIVtPb.js";import"./Dot-CnEc0IvV.js";import"./activeStyles-CWJgi0Pp.js";import"./useAnimationId-CwEH45Ii.js";import"./ErrorBarContext-DJQ_oRWY.js";import"./SetGraphicalItem-Cd415TqE.js";import"./ActiveShapeUtils-DlQXgIQN.js";import"./useEffectiveDataKey-P2OtOQRT.js";import"./Cross-PjRGV7h_.js";import"./Rectangle-BSyLp_F2.js";import"./util-Dxo8gN5i.js";import"./Sector-B2C7gSRH.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
