import{r as n,R as t}from"./iframe-Dn7uhoyL.js";import{L as p}from"./LineChart-CfNnjFeB.js";import{R as s}from"./zIndexSlice-CVPi3ttj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-NxJU1X0z.js";import{X as d}from"./XAxis-CM-PbRui.js";import{Y as y}from"./YAxis-BfFk8v58.js";import{L as u}from"./Legend-VoyKXnXv.js";import{L as h}from"./Line-Dj80C8Yq.js";import{T as g}from"./Tooltip-CmBrx--3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxRk2Gdp.js";import"./index-Bq40lsYa.js";import"./index-DD0InOiJ.js";import"./index-Cy5HZ0nr.js";import"./index-CSiJtewq.js";import"./immer-jPz9tOCf.js";import"./get-BWJg7GwY.js";import"./renderedTicksSlice-C-NsLko8.js";import"./axisSelectors-CcayQcVn.js";import"./d3-scale-Cgmb0cG0.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CdaF0R9o.js";import"./isWellBehavedNumber-CWLsfq8q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BTxfKGwU.js";import"./chartDataContext-CxM1m1he.js";import"./CategoricalChart-vFRRVoOy.js";import"./CartesianAxis-BFlE9wN2.js";import"./Layer-0_0lU0ce.js";import"./Text-Coel_U_-.js";import"./DOMUtils-DMf79wlK.js";import"./Label-BkxCdWVF.js";import"./ZIndexLayer-DWtyWVlG.js";import"./types-Bnw4G7MR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D0L3NZVE.js";import"./symbol-Sc7zzrJc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BS2jKIzO.js";import"./uniqBy-BegxbEUU.js";import"./iteratee-BQ8u-VLy.js";import"./Curve-dLTkUQDk.js";import"./step-DtaB3Afi.js";import"./AnimatedItems-BOxaWbpG.js";import"./useAnimationId-DyeHQUGR.js";import"./ActivePoints-BJJpASAl.js";import"./Dot-BCY87lLt.js";import"./RegisterGraphicalItemId-DNlA1n-y.js";import"./ErrorBarContext-8EwqaTjA.js";import"./GraphicalItemClipPath-Ml5Lm9cP.js";import"./SetGraphicalItem-r_k8Lha2.js";import"./getRadiusAndStrokeWidthFromDot-BlZL4Q4R.js";import"./ActiveShapeUtils-dzMUbVJX.js";import"./Cross-D5X-79vf.js";import"./Rectangle-C7YkQMq8.js";import"./Sector-D2HI9UwR.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
