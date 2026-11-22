import{r as p,R as t}from"./iframe-CGGZfnCV.js";import{L as n}from"./LineChart-CI15s-fZ.js";import{R as s}from"./zIndexSlice-BqswsCB2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D4IW1LFi.js";import{X as d}from"./XAxis-D0RGLID7.js";import{Y as y}from"./YAxis-DBOKklMV.js";import{L as u}from"./Legend-B6u0LYsj.js";import{L as h}from"./Line-B9-Nh0Th.js";import{T as g}from"./Tooltip-Dyy4ArfB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBqoZXqJ.js";import"./resolveDefaultProps-DB16si7p.js";import"./get-cF5BDHN6.js";import"./axisSelectors-ClqRDW4l.js";import"./throttle-CPPktxFr.js";import"./index-hNRKJP-1.js";import"./index-BFvwi7Fr.js";import"./polarAxisSelectors-BM3r_eW-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH0gLY6W.js";import"./index-DZ2zDC6C.js";import"./index-gZNixUu0.js";import"./renderedTicksSlice-CQP8AqXM.js";import"./index-1Wp7cDto.js";import"./fillDefinitions-DVvVBqIn.js";import"./CartesianChart-Bh5zn2Cs.js";import"./chartDataContext-L797Ywu5.js";import"./CategoricalChart-DAMpVLQr.js";import"./CartesianAxis-BDMs3FLV.js";import"./Layer-BEhjTHM-.js";import"./Text-BWSViN8b.js";import"./ZIndexLayer-DLjlC1Ho.js";import"./Label-BodzTsEv.js";import"./types-D01_wvtH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BkuE8ueA.js";import"./symbol-CmPSaat-.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BSU2Mggc.js";import"./uniqBy-awSaeX3A.js";import"./iteratee-CqSBOUYa.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-B05KFCuA.js";import"./Curve-CCF7pO5F.js";import"./step-CUQPzItX.js";import"./dataEntryStyles-BLU3QW0Z.js";import"./ActivePoints-xFZqNI2F.js";import"./Dot-DwUXPQPe.js";import"./activeStyles-C8mJMGZo.js";import"./useAnimationId-CKpnbEUf.js";import"./ErrorBarContext-C-uWWZZj.js";import"./SetGraphicalItem-CpKKIpFz.js";import"./ActiveShapeUtils-Dr8eZSqA.js";import"./useEffectiveDataKey-CaAnzbHC.js";import"./Cross-DqhWgWA8.js";import"./Rectangle-DdMdJi_F.js";import"./util-Dxo8gN5i.js";import"./Sector-BLwaXQQU.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
