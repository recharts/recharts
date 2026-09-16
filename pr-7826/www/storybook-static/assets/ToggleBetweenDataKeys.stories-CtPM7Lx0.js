import{r as p,R as t}from"./iframe-BXKiYcQC.js";import{L as n}from"./LineChart-CcDx6lBn.js";import{R as s}from"./zIndexSlice-BkBU_0wW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CRSDtwsn.js";import{X as d}from"./XAxis-BXKhWSVM.js";import{Y as y}from"./YAxis-DRJndkYg.js";import{L as u}from"./Legend-CyJWAGiq.js";import{L as h}from"./Line-DftoaBqr.js";import{T as g}from"./Tooltip-BYaW-nQD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D0jZXTe7.js";import"./resolveDefaultProps-xB5H15BL.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dg1vgECj.js";import"./throttle-DvwfsdC-.js";import"./index-GSTqcvk8.js";import"./index-D60lzj2N.js";import"./isWellBehavedNumber-B0ZNfpM9.js";import"./d3-scale-CKemSFI4.js";import"./index-CLqidrW7.js";import"./index-DYRjOJPU.js";import"./renderedTicksSlice-BaGELWxj.js";import"./index-BmE7GHu6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CSl2_jhz.js";import"./chartDataContext-CuS1DNow.js";import"./CategoricalChart-BhGptR4V.js";import"./CartesianAxis-D0z983kz.js";import"./Layer-csMx_Fjy.js";import"./Text-DNCWotX8.js";import"./DOMUtils-_UiVQ5Hy.js";import"./useId-C1UlWvnO.js";import"./useBackwardsCompatibleTheme-DRIVYL1M.js";import"./Label-BTmQht23.js";import"./ZIndexLayer-BcmKCBr7.js";import"./types-DfEjGV4b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BNBCA1K-.js";import"./symbol-1KLUnhlz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cca-IpDS.js";import"./uniqBy-t0cRV3aa.js";import"./iteratee-DvbJjhc1.js";import"./Curve-eKtRh9tf.js";import"./step-z9dWT9Gq.js";import"./AnimatedItems-CWzKwhub.js";import"./useAnimationId-DnJ1WtPs.js";import"./ActivePoints-CJCyHGsQ.js";import"./Dot-BRaUdeFo.js";import"./RegisterGraphicalItemId-BECJYOqX.js";import"./ErrorBarContext-Dq8g53R2.js";import"./GraphicalItemClipPath-CbDQFeTD.js";import"./SetGraphicalItem-DR2Q_8-D.js";import"./getRadiusAndStrokeWidthFromDot-qGxx_52s.js";import"./ActiveShapeUtils-B64LrBnv.js";import"./useGraphicalItemIdentity-Cgc4UBVs.js";import"./Cross-Bu4XZQzD.js";import"./Rectangle-BBEf8joY.js";import"./util-Dxo8gN5i.js";import"./Sector-CV1LWZcE.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
