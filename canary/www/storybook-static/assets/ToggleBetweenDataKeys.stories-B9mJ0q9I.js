import{r as p,R as t}from"./iframe-BVidFuBg.js";import{L as n}from"./LineChart-6wRhXT5W.js";import{R as s}from"./zIndexSlice-BVu_VJKn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CE1nnXHn.js";import{X as d}from"./XAxis-D6ghc140.js";import{Y as y}from"./YAxis-CAK7lAdx.js";import{L as u}from"./Legend-BCcfS3Kt.js";import{L as h}from"./Line-BwWsnMpN.js";import{T as g}from"./Tooltip-D2nd5wLd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-7A4GvPw3.js";import"./resolveDefaultProps-BnMAchLG.js";import"./get-cF5BDHN6.js";import"./axisSelectors-7sszg3SW.js";import"./throttle-BSCmJhty.js";import"./index-qH4-zIlS.js";import"./index-DBJQpaC5.js";import"./isWellBehavedNumber-Bgrep7-b.js";import"./d3-scale-n9zBPjXr.js";import"./index-BiOB95Co.js";import"./index-k6xKkYdd.js";import"./renderedTicksSlice-X2qP0nh3.js";import"./index-CYZL9Ecm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BVao4mhK.js";import"./chartDataContext-KRrlptML.js";import"./CategoricalChart-B9oBZckD.js";import"./CartesianAxis-B6O3GOLV.js";import"./Layer-BamX7bDZ.js";import"./Text-B-jeJZdK.js";import"./pageBackground-DWUaDsTL.js";import"./useId-B-SrM2oo.js";import"./useBackwardsCompatibleTheme-CdbVLEqd.js";import"./Label-Dkr2cH3E.js";import"./ZIndexLayer-Diklw-mz.js";import"./types-d1h9D5Nt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Ce81nxL9.js";import"./symbol-B3XC6ocG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DGDKGLsn.js";import"./uniqBy-DnZxk8gC.js";import"./iteratee-BSh9UVJS.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DADC3Qn9.js";import"./step-DQ_5Whcs.js";import"./activeStyles-DLYfLCId.js";import"./useAnimationId-DUX3gKYN.js";import"./dataEntryStyles-doFW0jSZ.js";import"./ActivePoints-CkjWSogS.js";import"./Dot-08nNQsA3.js";import"./ErrorBarContext-DCSMt2xY.js";import"./GraphicalItemClipPath-BHt5dg8Z.js";import"./SetGraphicalItem-COgSsKbs.js";import"./getRadiusAndStrokeWidthFromDot-DtsjXIq5.js";import"./ActiveShapeUtils-OFRSQ0pw.js";import"./useEffectiveDataKey-BG2pu5J2.js";import"./Cross-B_3lqDDg.js";import"./Rectangle-BXXUvRMI.js";import"./util-Dxo8gN5i.js";import"./Sector-Dc8MKQa3.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
