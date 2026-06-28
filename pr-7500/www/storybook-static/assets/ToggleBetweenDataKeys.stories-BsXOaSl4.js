import{r as n,R as t}from"./iframe-Cz3m2SJ3.js";import{L as p}from"./LineChart-BIvRVyWP.js";import{R as s}from"./zIndexSlice-Cjh-3nYc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D6CVlZsH.js";import{X as d}from"./XAxis-BOtH_Bb_.js";import{Y as y}from"./YAxis-DcGNi3Zk.js";import{L as u}from"./Legend-DUVvpxnh.js";import{L as h}from"./Line-C1Jzdpj9.js";import{T as g}from"./Tooltip-C9yhbHaY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B4Ii8FQX.js";import"./index-BaDzCXFV.js";import"./index-CMdFAdtp.js";import"./index-Ch8SxpQ7.js";import"./index-NxrJrzZn.js";import"./immer-BpZE7kkB.js";import"./get-DnJGsTBL.js";import"./renderedTicksSlice-CFzmMv1J.js";import"./axisSelectors-kRjEmRJx.js";import"./d3-scale-WEKEQNVu.js";import"./resolveDefaultProps-C8QIhMpF.js";import"./isWellBehavedNumber-CDOyudGY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BLcm5KGH.js";import"./chartDataContext-BYln8BgM.js";import"./CategoricalChart-DoGmIe9w.js";import"./CartesianAxis-C3-vjNSw.js";import"./Layer-DT2BS3Fo.js";import"./Text-CM8vLpAR.js";import"./DOMUtils-DZThnrL0.js";import"./Label-DtW8Frf2.js";import"./ZIndexLayer-dXuwT3rZ.js";import"./types-CfBB8f9x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BFmTZdyG.js";import"./symbol-CIafXP9T.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWoELxA5.js";import"./uniqBy-C-5jUlDv.js";import"./iteratee-BYbJoUdv.js";import"./Curve-Bwoz_RSs.js";import"./step-Cw3d9gls.js";import"./AnimatedItems-BHx4y2NH.js";import"./useAnimationId-BTiOYTQB.js";import"./ActivePoints-CgF4v4_S.js";import"./Dot-D0XFaE4d.js";import"./RegisterGraphicalItemId-CDGD75SL.js";import"./ErrorBarContext--7X7cLyV.js";import"./GraphicalItemClipPath-Bz4IuZP3.js";import"./SetGraphicalItem-Ci_nDVmD.js";import"./getRadiusAndStrokeWidthFromDot-C8BKdMCZ.js";import"./ActiveShapeUtils-CXFbPlV-.js";import"./Cross-DTqDEQzI.js";import"./Rectangle-pvDgbZGd.js";import"./util-Dxo8gN5i.js";import"./Sector-BXolgb6h.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
