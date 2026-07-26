import{r as n,R as t}from"./iframe-DxMMLjq4.js";import{L as p}from"./LineChart-CUbhFaIN.js";import{R as s}from"./zIndexSlice-Crg_yDni.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BhIcGe65.js";import{X as d}from"./XAxis-ComdV9F0.js";import{Y as y}from"./YAxis-DlIt9IKA.js";import{L as u}from"./Legend-COCMtBSr.js";import{L as h}from"./Line-C6CqArUN.js";import{T as g}from"./Tooltip-D_BAavcS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-YibyDFYm.js";import"./index-BNQESuWt.js";import"./index-NKUE4uSN.js";import"./index-NaaaP08j.js";import"./index-BmvyjtDr.js";import"./throttle-BVIVorzK.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-R0A9XcRf.js";import"./axisSelectors-CtMsP7E5.js";import"./resolveDefaultProps-Bl28FH2f.js";import"./isWellBehavedNumber-C1o8zvOf.js";import"./d3-scale-DNwZMBjH.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-eEIqhBYs.js";import"./chartDataContext-CPgowj6N.js";import"./CategoricalChart-CkjssiaG.js";import"./CartesianAxis-Bt1NAYMU.js";import"./Layer-HeMPI1c4.js";import"./Text-BCYIz8FY.js";import"./DOMUtils-BdIlOhpH.js";import"./Label-BzF2Z4Ph.js";import"./ZIndexLayer-YMn514XV.js";import"./types-CGS0Nool.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-BM5DG4aB.js";import"./symbol-CdP8S3iM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BRu_GPPq.js";import"./uniqBy-CzRSAfde.js";import"./iteratee-B6VWD8nr.js";import"./Curve-HWwjIPPZ.js";import"./step-57b6j_Mi.js";import"./AnimatedItems-DZU2dyQ0.js";import"./useAnimationId-todkGmix.js";import"./ActivePoints-Cydr7Ilr.js";import"./Dot-BEKU9-XN.js";import"./RegisterGraphicalItemId-fNF2iW9l.js";import"./ErrorBarContext-f2qB8qRB.js";import"./GraphicalItemClipPath-BcLAlpwf.js";import"./SetGraphicalItem-C5-E1Ui2.js";import"./getRadiusAndStrokeWidthFromDot-Dkjblrfo.js";import"./ActiveShapeUtils-CzKC_ySI.js";import"./Cross-DUh7a5ft.js";import"./Rectangle-D__daQdm.js";import"./util-Dxo8gN5i.js";import"./Sector-rVQPkNAb.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
