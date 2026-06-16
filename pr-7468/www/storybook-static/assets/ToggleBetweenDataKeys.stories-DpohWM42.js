import{r as n,R as t}from"./iframe-Cgvurs-_.js";import{L as p}from"./LineChart-DhV1ge9n.js";import{R as s}from"./zIndexSlice-B_EZWJad.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CGp0VVQ0.js";import{X as d}from"./XAxis-CfwTV-KQ.js";import{Y as y}from"./YAxis-BXqkMu3a.js";import{L as u}from"./Legend-D-00xTEP.js";import{L as h}from"./Line-gOmghgbw.js";import{T as g}from"./Tooltip-DBJ0bUIr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dz-OqOgD.js";import"./index-BumewqgT.js";import"./index-COSZGJYp.js";import"./index-qEaPtvJ4.js";import"./index-DUeZpKgX.js";import"./immer-BqIPbCUY.js";import"./get-DKeAvde6.js";import"./renderedTicksSlice-CFCAMk-H.js";import"./axisSelectors-Qbk3cIqD.js";import"./d3-scale-C6AR89xW.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CKD-pks7.js";import"./isWellBehavedNumber-wdbvvMft.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-F9cdjQs_.js";import"./chartDataContext-D5SqleTT.js";import"./CategoricalChart-vxMjiHHj.js";import"./CartesianAxis-BZbrDelp.js";import"./Layer-BfP1S3qE.js";import"./Text-BoAtXQm_.js";import"./DOMUtils-DYR9owTl.js";import"./Label-CsnYNS62.js";import"./ZIndexLayer-CAbZgrje.js";import"./types-bZuMx1t8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Dm791b9Q.js";import"./symbol-DNYQHQcv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BwaQaS3A.js";import"./uniqBy-6bgl0NGd.js";import"./iteratee-_BM_Lsph.js";import"./Curve-fHqvHXD4.js";import"./step-BqWVDUYB.js";import"./AnimatedItems-DU8uToRY.js";import"./useAnimationId-DTgCoSkV.js";import"./ActivePoints-ByYPPJm9.js";import"./Dot-CWR0wmvP.js";import"./RegisterGraphicalItemId-Dza9jiXm.js";import"./ErrorBarContext-h79zKdGg.js";import"./GraphicalItemClipPath-BYm3GjGL.js";import"./SetGraphicalItem-B22TqrnA.js";import"./getRadiusAndStrokeWidthFromDot-CpehKYWF.js";import"./ActiveShapeUtils-mXcowNCt.js";import"./Cross-sKVT2Eib.js";import"./Rectangle-SDGp320Q.js";import"./Sector-oFfzS_Kk.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
