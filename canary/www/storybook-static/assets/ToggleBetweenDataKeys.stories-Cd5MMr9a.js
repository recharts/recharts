import{r as n,R as t}from"./iframe-CGx2OEYg.js";import{L as p}from"./LineChart-Btih9Pj2.js";import{R as s}from"./zIndexSlice-pdvjw9VY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B0E-iVsf.js";import{X as d}from"./XAxis-DIPoApAz.js";import{Y as y}from"./YAxis-BsBoxekz.js";import{L as u}from"./Legend-CWe23moz.js";import{L as h}from"./Line-CifdSMqw.js";import{T as g}from"./Tooltip-X3z-XELC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CnFoLhZv.js";import"./index-CIdFwa8F.js";import"./index-Cey4EIAC.js";import"./index-C4Z_dumW.js";import"./index-BL6WHaeN.js";import"./immer-BdXE1DYA.js";import"./get-CzV2OpXY.js";import"./renderedTicksSlice-CWw-Qe8F.js";import"./axisSelectors-B0UwcuKI.js";import"./d3-scale-DUV6_L5z.js";import"./resolveDefaultProps-D3B6MFw_.js";import"./isWellBehavedNumber-CKQRWs7o.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BiUQ--Jb.js";import"./chartDataContext-BDew7MkD.js";import"./CategoricalChart-DuzT5byy.js";import"./CartesianAxis-CmH7UKiI.js";import"./Layer-CdlD8-Bq.js";import"./Text-JACEtH7g.js";import"./DOMUtils-Ccjd7ivz.js";import"./Label-CkpiET6q.js";import"./ZIndexLayer-DGG-pQT2.js";import"./types-C4QX8ert.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BZnVYgxJ.js";import"./symbol-Bhi30j9H.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kXeLLBXV.js";import"./uniqBy-D7gZTNBj.js";import"./iteratee-QFBEUu-H.js";import"./Curve-DLzFalE6.js";import"./step-BRyMFbya.js";import"./AnimatedItems-ZpkkXdAG.js";import"./useAnimationId-DrQktf3K.js";import"./ActivePoints-N3tMfhSo.js";import"./Dot-CeKZXbQB.js";import"./RegisterGraphicalItemId-xU42uzR6.js";import"./ErrorBarContext-Gbubk7c-.js";import"./GraphicalItemClipPath-CIDK8z3L.js";import"./SetGraphicalItem-CM0l2hGK.js";import"./getRadiusAndStrokeWidthFromDot-2cj_fDMP.js";import"./ActiveShapeUtils-BMsaHZ8h.js";import"./Cross-CpF8qJ66.js";import"./Rectangle-CsueepJD.js";import"./util-Dxo8gN5i.js";import"./Sector-CW1HuHDn.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
