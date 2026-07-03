import{r as n,R as t}from"./iframe-uEKx9k1N.js";import{L as p}from"./LineChart-mzuSYokE.js";import{R as s}from"./zIndexSlice-DY2SAwlF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B5l8Wvsy.js";import{X as d}from"./XAxis-DqNwoQQz.js";import{Y as y}from"./YAxis-tAwATeqy.js";import{L as u}from"./Legend-BjQN7rgW.js";import{L as h}from"./Line-BSIz3Wv8.js";import{T as g}from"./Tooltip-BmPyy6Ks.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B8Jh4kUL.js";import"./index-Du90D5xv.js";import"./index-CgS1QQ0H.js";import"./index-CSsm5ETf.js";import"./index-DPeMAw3v.js";import"./throttle-BszORo1S.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DY-iZALX.js";import"./axisSelectors-w7ZWZmhc.js";import"./resolveDefaultProps-ht_nEGGy.js";import"./isWellBehavedNumber-DQ4HTAG3.js";import"./d3-scale-CoMxsikp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BzS97Wq2.js";import"./chartDataContext-w4FL8Pti.js";import"./CategoricalChart-ablhttF3.js";import"./CartesianAxis-StFKOZ7o.js";import"./Layer-BH5XLyL8.js";import"./Text-B8QKaTlG.js";import"./DOMUtils-CMP-Fz_P.js";import"./Label-CitoXnqP.js";import"./ZIndexLayer-ClIbinrc.js";import"./types-BnkDZvgK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B4e3bZfl.js";import"./symbol-BzXGVBf4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Sr2wxqk0.js";import"./uniqBy-CM6A5tFB.js";import"./iteratee-C_fPFM1j.js";import"./Curve-DneOA6Ls.js";import"./step-F10w8TN4.js";import"./AnimatedItems-B35P9OvY.js";import"./useAnimationId-ZeyHjL0b.js";import"./ActivePoints-BymWNzxJ.js";import"./Dot-F2Exn6rv.js";import"./RegisterGraphicalItemId-CTEk8rED.js";import"./ErrorBarContext-YXBGRjgp.js";import"./GraphicalItemClipPath-BIARRVEG.js";import"./SetGraphicalItem-CwhlaQHa.js";import"./getRadiusAndStrokeWidthFromDot-DTQnNiya.js";import"./ActiveShapeUtils-BahjRs48.js";import"./Cross-HkOkxvvA.js";import"./Rectangle-9Jy7qhLH.js";import"./util-Dxo8gN5i.js";import"./Sector-CRwdZ_1k.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
