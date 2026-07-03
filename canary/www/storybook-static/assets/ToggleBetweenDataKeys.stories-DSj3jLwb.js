import{r as n,R as t}from"./iframe-DIEAN2hv.js";import{L as p}from"./LineChart-Dhuskdyl.js";import{R as s}from"./zIndexSlice-h_BQOYV2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CeGdZb4b.js";import{X as d}from"./XAxis-DiChMU6m.js";import{Y as y}from"./YAxis-D9ayUFuH.js";import{L as u}from"./Legend-p4WMLJ9t.js";import{L as h}from"./Line-C7_Wtgt6.js";import{T as g}from"./Tooltip-lQC9vtCe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-a7tD0_PW.js";import"./index-DbRgicKF.js";import"./index-BvKFxAi3.js";import"./index-Ck53zJJh.js";import"./index-DM6nPyH7.js";import"./throttle-DcPgljw6.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CR60noDO.js";import"./axisSelectors-CGWz1F9h.js";import"./resolveDefaultProps-DUc1ArnZ.js";import"./isWellBehavedNumber-9xmYcKjE.js";import"./d3-scale-iAsu0ejP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-GGBraKX7.js";import"./chartDataContext-DLLGaQBY.js";import"./CategoricalChart-Ceegmo7R.js";import"./CartesianAxis-BIjXN90W.js";import"./Layer-B-cLPPNh.js";import"./Text-BNRKLEiU.js";import"./DOMUtils-C1Qec3X5.js";import"./Label-LaTn0MyB.js";import"./ZIndexLayer-chy9WqcQ.js";import"./types-avIm2VNf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CRaBoqAe.js";import"./symbol-aEESUuL5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BvrQ-UF9.js";import"./uniqBy-2YSsId_u.js";import"./iteratee-CbGVDYM_.js";import"./Curve-DWZWWV6c.js";import"./step-B5sxv5_w.js";import"./AnimatedItems-CVRAeMdn.js";import"./useAnimationId-D28s5KK7.js";import"./ActivePoints-BoeM8OQc.js";import"./Dot-DvzB0nD2.js";import"./RegisterGraphicalItemId-ZGmSkN-p.js";import"./ErrorBarContext-Clnj01jz.js";import"./GraphicalItemClipPath-B9S_-7Qm.js";import"./SetGraphicalItem-Dyls43Kb.js";import"./getRadiusAndStrokeWidthFromDot-Cvj7EGO9.js";import"./ActiveShapeUtils-DzejIYqw.js";import"./Cross-ajTZFrVl.js";import"./Rectangle-ChtQzbKm.js";import"./util-Dxo8gN5i.js";import"./Sector-3i6lcn3h.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
