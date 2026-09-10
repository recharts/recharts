import{r as p,R as t}from"./iframe-Cuw567ao.js";import{L as n}from"./LineChart-DNTH3u8j.js";import{R as s}from"./zIndexSlice-BuAoIKSs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DVQTrB9r.js";import{X as d}from"./XAxis-CFLpq8b6.js";import{Y as y}from"./YAxis-CbSfE1QD.js";import{L as u}from"./Legend-DTP5ocpZ.js";import{L as h}from"./Line-DlwGtjpP.js";import{T as g}from"./Tooltip-Cptx_Upa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dc_lFngx.js";import"./resolveDefaultProps-EeLa_nJM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C6YnqdB_.js";import"./throttle-Bjmeh804.js";import"./index-DPZE1hYp.js";import"./index-CitLG62V.js";import"./isWellBehavedNumber-B73u9WX2.js";import"./d3-scale-sEI--FZR.js";import"./index-DSKcUbNG.js";import"./index-1-Kpwwt_.js";import"./renderedTicksSlice-DdMSNSAt.js";import"./index-CYPd_aD4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-_oA4AU.js";import"./chartDataContext-CU7BnpPX.js";import"./CategoricalChart-BLUN9mEz.js";import"./CartesianAxis-D-JaI_zt.js";import"./Layer-T72FoYEi.js";import"./Text-DEJPj4XQ.js";import"./DOMUtils-mjR2JQA6.js";import"./useId-JkOEL8Mu.js";import"./useBackwardsCompatibleTheme-CpTahyhZ.js";import"./Label-BJjrjkoL.js";import"./ZIndexLayer-b9cpcpRU.js";import"./types-BooOBCdC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DVfNN2xc.js";import"./symbol-DKb90v9t.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DmR9p-uX.js";import"./uniqBy-CsdKAqlX.js";import"./iteratee-B0sRemCe.js";import"./Curve-DpAcFiD4.js";import"./step-oaTKbJ5-.js";import"./AnimatedItems-B1juRf7B.js";import"./useAnimationId-7XVM7nxW.js";import"./ActivePoints-DUj5MP15.js";import"./Dot-DhnV0obD.js";import"./RegisterGraphicalItemId-COeScAua.js";import"./ErrorBarContext-DsK39YKv.js";import"./GraphicalItemClipPath-DroKw-TI.js";import"./SetGraphicalItem--pdnWjmL.js";import"./getRadiusAndStrokeWidthFromDot-D9Yg2xkO.js";import"./ActiveShapeUtils-P98ujLW0.js";import"./useGraphicalItemIdentity-DXn-ONdl.js";import"./Cross-DNmypU88.js";import"./Rectangle-DCUZMkY0.js";import"./util-Dxo8gN5i.js";import"./Sector-C8gb8Py2.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
