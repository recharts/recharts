import{r as p,R as t}from"./iframe-BpBItmb8.js";import{L as n}from"./LineChart-fFlRAsCS.js";import{R as s}from"./zIndexSlice-Cjb21_4Z.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D3DKDnpA.js";import{X as d}from"./XAxis-tyIX1Ek0.js";import{Y as y}from"./YAxis-ggvkQSih.js";import{L as u}from"./Legend-B9j0MFCN.js";import{L as h}from"./Line-CYgss46t.js";import{T as g}from"./Tooltip-16Wzpvlu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BaBorYia.js";import"./resolveDefaultProps-BIOpi0B9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DhTQuZeq.js";import"./throttle-Cdo2rlHX.js";import"./index-CeEoeaxD.js";import"./index-BHZp9bX2.js";import"./isWellBehavedNumber-Q3FqKNV7.js";import"./d3-scale-B2krDzkw.js";import"./index-B9ogi8SM.js";import"./index-Do7_Vkj1.js";import"./renderedTicksSlice-BqaS8KpG.js";import"./index-C1AeM7Yu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDWDYlWD.js";import"./chartDataContext-CgZ-KInW.js";import"./CategoricalChart-9xHNb1kz.js";import"./CartesianAxis-BCv_yRQ4.js";import"./Layer-DJh0sOtA.js";import"./Text-BsqzutiJ.js";import"./pageBackground-Dn3J6qJY.js";import"./useId-DaRO87cF.js";import"./useBackwardsCompatibleTheme-CZ-OPOyh.js";import"./Label-D427CKrx.js";import"./ZIndexLayer-8Y_K5uPK.js";import"./dataEntryStyles-CqfS8fAi.js";import"./types-Dpz8_0OY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CndC3_OM.js";import"./symbol-D5Qx-mBR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CjCU98kl.js";import"./uniqBy-0vSrRUTV.js";import"./iteratee-BEHFzf7T.js";import"./isArguments-yB-y1yaH.js";import"./Curve-pkSnYbQi.js";import"./step-CWAoAVng.js";import"./activeStyles-BpJuNb5z.js";import"./useAnimationId-B0lGZ7N8.js";import"./ActivePoints-DOY_2oPT.js";import"./Dot-DQOKyqZV.js";import"./RegisterGraphicalItemId-CrKPJKPG.js";import"./ErrorBarContext-Dxg5DLJl.js";import"./SetGraphicalItem-CJwlJ3sC.js";import"./getRadiusAndStrokeWidthFromDot-BPVDV2Ck.js";import"./ActiveShapeUtils-BOsiS21F.js";import"./useEffectiveDataKey-UghoeVMt.js";import"./Cross-CDQrvEQG.js";import"./Rectangle-Cc2PuLg6.js";import"./util-Dxo8gN5i.js";import"./Sector-Bo0u2rms.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
