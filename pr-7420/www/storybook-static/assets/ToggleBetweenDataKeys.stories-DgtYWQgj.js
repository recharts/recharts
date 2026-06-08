import{r as n,R as t}from"./iframe-BGeanFOP.js";import{L as p}from"./LineChart-CgYgf-1f.js";import{R as s}from"./zIndexSlice-DNSx6PWp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DIYWtD6j.js";import{X as d}from"./XAxis-DgRdCkIO.js";import{Y as y}from"./YAxis-nfM60xrE.js";import{L as u}from"./Legend-W3eeAJ18.js";import{L as h}from"./Line-DMiEAOHx.js";import{T as g}from"./Tooltip-Cc5Cgkep.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CglI8KYy.js";import"./index-Be2A9QLd.js";import"./index-DMs8Ncya.js";import"./index-ywOkgYAE.js";import"./index-D4eYnHXo.js";import"./immer-Ba__3GQM.js";import"./get-74Zc7Ouu.js";import"./renderedTicksSlice-CZmWC0Pi.js";import"./axisSelectors-B9MbVKUE.js";import"./d3-scale-DG6z6DUu.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-fa-Aou02.js";import"./isWellBehavedNumber-BHEyknYr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Da0n2f02.js";import"./chartDataContext-itTBInKu.js";import"./CategoricalChart-K-eTl3yz.js";import"./CartesianAxis-BCs8btUF.js";import"./Layer-D0e6T1oI.js";import"./Text-B_9O6xoI.js";import"./DOMUtils-CoWv9FZp.js";import"./Label-CBWHmy26.js";import"./ZIndexLayer-gVlIv7an.js";import"./types-Uf272Grm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D3KDRtFF.js";import"./symbol-DYZKPaAC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uPFxcMrP.js";import"./uniqBy-DSO5Q0bs.js";import"./iteratee-DXgvlm8k.js";import"./Curve-Db2zYE8-.js";import"./step-DzzVSfhx.js";import"./AnimatedItems-C1hTs3HP.js";import"./index-BPJnJB5S.js";import"./useAnimationId-Cqn1EcvY.js";import"./ActivePoints-iE89yCuz.js";import"./Dot-CWPUI1sE.js";import"./RegisterGraphicalItemId-DsxBoKW-.js";import"./ErrorBarContext-BGfqcTM-.js";import"./GraphicalItemClipPath-Rse-X5zx.js";import"./SetGraphicalItem-BEY5qE9v.js";import"./getRadiusAndStrokeWidthFromDot-D7EeDBWL.js";import"./ActiveShapeUtils-CNEGy-9v.js";import"./Cross-DLJoHQSf.js";import"./Rectangle-BfTmTDK0.js";import"./Sector-DEijCMgI.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
