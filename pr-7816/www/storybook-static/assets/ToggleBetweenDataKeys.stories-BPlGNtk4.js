import{r as p,R as t}from"./iframe-CuYkZAih.js";import{L as n}from"./LineChart-DEuZT58V.js";import{R as s}from"./zIndexSlice-0x3uku_R.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-_OfLj8s1.js";import{X as d}from"./XAxis-CuSaxTWM.js";import{Y as y}from"./YAxis-2PiHbRgB.js";import{L as u}from"./Legend-Ce-6Z8Xs.js";import{L as h}from"./Line-DV8dDFgR.js";import{T as g}from"./Tooltip-oFUqYZul.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-COZpTTaF.js";import"./resolveDefaultProps-B8cjP6Xa.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DIa8K2JO.js";import"./throttle-gMp3XSAK.js";import"./index-D8cZoCL4.js";import"./index-BxmeqXxm.js";import"./isWellBehavedNumber-BcDmyfQy.js";import"./d3-scale-DA_CpRjn.js";import"./index-TSt0tMTq.js";import"./index-27otVVTa.js";import"./renderedTicksSlice-Cf_8fVTa.js";import"./index-C60udeJw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-dlpQhUsY.js";import"./chartDataContext-FQ-3D9_1.js";import"./CategoricalChart-CzQsygRV.js";import"./CartesianAxis-D3i-DiW_.js";import"./Layer-GHV7gJU9.js";import"./Text-CXyYB23t.js";import"./DOMUtils-CE__HHZf.js";import"./useId-m8zXXplu.js";import"./useBackwardsCompatibleTheme-D-5GiVJq.js";import"./Label-DkhadSFF.js";import"./ZIndexLayer-DhyZBBI_.js";import"./types-CPc5yIEA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Nxac4q2q.js";import"./symbol-CM4B46nT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tb76Zf_3.js";import"./uniqBy-B5r4YX5y.js";import"./iteratee-CqsXLn41.js";import"./Curve-C6S_ZKxy.js";import"./step-xkx3tdDV.js";import"./AnimatedItems-B6_FAdg8.js";import"./useAnimationId-CKSd0jBH.js";import"./ActivePoints-989YAHN3.js";import"./Dot-lCEMTHT5.js";import"./RegisterGraphicalItemId-DI2Sgslq.js";import"./ErrorBarContext-DQRpVtQS.js";import"./GraphicalItemClipPath-BA9HfA5b.js";import"./SetGraphicalItem-Bwlc4Qg6.js";import"./getRadiusAndStrokeWidthFromDot-C8_uSveN.js";import"./ActiveShapeUtils-48Bcq-tK.js";import"./useGraphicalItemIdentity-DpHd4fG4.js";import"./Cross-DHX-Bmnk.js";import"./Rectangle-CNLbh1Ie.js";import"./util-Dxo8gN5i.js";import"./Sector-YkGfoLeU.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
