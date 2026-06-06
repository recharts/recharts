import{r as n,R as t}from"./iframe-DSGjjpNU.js";import{L as p}from"./LineChart-D0j0IUaw.js";import{R as s}from"./zIndexSlice-CA6E8vFi.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DwPMXtVv.js";import{X as d}from"./XAxis-CyP8TOeF.js";import{Y as y}from"./YAxis-CHK17H-d.js";import{L as u}from"./Legend-K0A5kyBq.js";import{L as h}from"./Line-_u_cC6u5.js";import{T as g}from"./Tooltip-DRaTN_7A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLTVJ7et.js";import"./index-BppypMuk.js";import"./index-BXnOwVVg.js";import"./index-zgKj8xSX.js";import"./index-BP6oFGIz.js";import"./immer-Py-Ymz2c.js";import"./get-DWY5eETe.js";import"./renderedTicksSlice-Dt_MkN4R.js";import"./axisSelectors-ChSlicBm.js";import"./d3-scale-DFnee9kt.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-C7JBpnaB.js";import"./isWellBehavedNumber-DJkwFvMJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dc9cHP3f.js";import"./chartDataContext-dw-RuqgE.js";import"./CategoricalChart-4qFfYNuc.js";import"./CartesianAxis-Cj3_cZt6.js";import"./Layer-CQXD14hs.js";import"./Text-CzUj4xGW.js";import"./DOMUtils-91PmpcqE.js";import"./Label-BCa7jxpl.js";import"./ZIndexLayer-BY8ImL1x.js";import"./types-C1TBc4OL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DZEhmn-G.js";import"./symbol-DHHi8foU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DuixBUl9.js";import"./uniqBy-sInfNE8L.js";import"./iteratee-BfP38f8d.js";import"./Curve-gomJXmPu.js";import"./step-MzBMmcWb.js";import"./AnimatedItems-DmxYIflg.js";import"./useAnimationId-Da38KlFl.js";import"./ActivePoints-CI7vIZx0.js";import"./Dot-BA1tdqH4.js";import"./RegisterGraphicalItemId-Cr8a7rd9.js";import"./ErrorBarContext-LCSn87i7.js";import"./GraphicalItemClipPath-JjCltWFk.js";import"./SetGraphicalItem-CMSYXoAN.js";import"./getRadiusAndStrokeWidthFromDot-B6xtN6Lv.js";import"./ActiveShapeUtils-c7K_sKfu.js";import"./Cross-5PMfY0nB.js";import"./Rectangle-DkHbTKKp.js";import"./Sector-B0jiapeC.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
