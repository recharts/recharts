import{r as n,R as t}from"./iframe-BieQWE3D.js";import{L as p}from"./LineChart-Dk6SXHR_.js";import{R as s}from"./zIndexSlice-BYxygo-S.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid--7GT9PaX.js";import{X as d}from"./XAxis-G4vRwmKg.js";import{Y as y}from"./YAxis-ChNLm74a.js";import{L as u}from"./Legend-CgVWCWtz.js";import{L as h}from"./Line-2mh_gerJ.js";import{T as g}from"./Tooltip-ud6--Qhj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQPdhE90.js";import"./index-BK9-NO1n.js";import"./index-D3zDokgn.js";import"./index-DS0rELK-.js";import"./index-CiDtTrDL.js";import"./throttle-C6pqxX0n.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BWxb2yva.js";import"./axisSelectors-CKN_GV_q.js";import"./resolveDefaultProps-0J6uDFJb.js";import"./isWellBehavedNumber-By2uQy27.js";import"./d3-scale-Sw7i2UsL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D6JA1RXb.js";import"./chartDataContext-DiNSnyrd.js";import"./CategoricalChart-BTFUnlUn.js";import"./CartesianAxis-DpF5IQ2O.js";import"./Layer-NUCJMvF3.js";import"./Text-DkEmFVu0.js";import"./DOMUtils-B828G3hP.js";import"./Label-D0PWYGmJ.js";import"./ZIndexLayer-BHodRoAu.js";import"./types-CIzADBdv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D18tkWgS.js";import"./symbol-C7neZgKU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DsSZYmDt.js";import"./uniqBy-CU_ixT1X.js";import"./iteratee-WoDKDUag.js";import"./Curve-SVdp-0Yk.js";import"./step-DHAVsB3S.js";import"./AnimatedItems-fhCf9-7A.js";import"./useAnimationId-3OlCfqca.js";import"./ActivePoints-DO-UWoAa.js";import"./Dot-80pmkl_3.js";import"./RegisterGraphicalItemId-DxgNfXcN.js";import"./ErrorBarContext-D6txdMKi.js";import"./GraphicalItemClipPath-O6SSxJbU.js";import"./SetGraphicalItem-ucOefQZ-.js";import"./getRadiusAndStrokeWidthFromDot-BzkGhJ7K.js";import"./ActiveShapeUtils-CZK7c2Ij.js";import"./Cross-DbjBe-Jq.js";import"./Rectangle-2NfmC8rx.js";import"./util-Dxo8gN5i.js";import"./Sector-WfPlP255.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
