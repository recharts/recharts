import{r as n,R as t}from"./iframe-CuVm1Ncb.js";import{L as p}from"./LineChart-BpuR7sUl.js";import{R as s}from"./zIndexSlice-BZOjM71k.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C3fOygfX.js";import{X as d}from"./XAxis-JtvtAXXy.js";import{Y as y}from"./YAxis-BIy4mhNn.js";import{L as u}from"./Legend-imVRhXb7.js";import{L as h}from"./Line-D32p7G7d.js";import{T as g}from"./Tooltip-DBLd4KtR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DT5GAsrf.js";import"./index-2Eta-fPv.js";import"./index-CIKLroCx.js";import"./index-DS-VAELW.js";import"./index-ezvYWD77.js";import"./immer-qI_Lx1cT.js";import"./get-mh9AHsYH.js";import"./renderedTicksSlice-Cq4cXI7l.js";import"./axisSelectors-BqRugZOv.js";import"./d3-scale-DhSEg32F.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DXODA9k0.js";import"./isWellBehavedNumber-Cs5mv3EE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BLDYaQ2w.js";import"./chartDataContext-CM4lnGiM.js";import"./CategoricalChart-BJmxSqzB.js";import"./CartesianAxis-COqdKxvc.js";import"./Layer-CQ8j0Llf.js";import"./Text-LNz2FUpv.js";import"./DOMUtils-C4aU1diQ.js";import"./Label-CyUXMRAJ.js";import"./ZIndexLayer-HG2Tdc6L.js";import"./types-DjM_wMjP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Cc3MwC4A.js";import"./symbol-DsUPOcEP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-WvcCUeh1.js";import"./uniqBy-DQgue2C1.js";import"./iteratee-CrZQWday.js";import"./Curve-CK2N7RgZ.js";import"./step-BGKZVTtP.js";import"./AnimatedItems-D-7ryyyq.js";import"./useAnimationId-DGicD8fh.js";import"./ActivePoints-rNykwE9f.js";import"./Dot-Dt98x6dx.js";import"./RegisterGraphicalItemId-Ji3BKNxF.js";import"./ErrorBarContext-ftGml07d.js";import"./GraphicalItemClipPath-BofgE1jJ.js";import"./SetGraphicalItem-DDjVRXYZ.js";import"./getRadiusAndStrokeWidthFromDot-DDhP_K7H.js";import"./ActiveShapeUtils-ClNcGcwL.js";import"./Cross-DTx7UCxu.js";import"./Rectangle-fz3Cheh_.js";import"./Sector-CAZA4MrW.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
