import{r as p,R as t}from"./iframe-DU9JCgt3.js";import{L as n}from"./LineChart-Cf54f7mt.js";import{R as s}from"./zIndexSlice-CxGcNVtb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BIs6mNFY.js";import{X as d}from"./XAxis-aQms9ffh.js";import{Y as y}from"./YAxis-BhPAk-qT.js";import{L as u}from"./Legend-B5xGGAYm.js";import{L as h}from"./Line--t4nfpf_.js";import{T as g}from"./Tooltip-B8DR2I5Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-EGU-JwYV.js";import"./resolveDefaultProps-DjHw4YyH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ba1wHviL.js";import"./throttle-BSvWgvBy.js";import"./index-BY0VFtFS.js";import"./index-CswZpk24.js";import"./polarAxisSelectors-2A6VXBMe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D71t0tOP.js";import"./index-BABuRh0J.js";import"./index-CiCV4MQd.js";import"./renderedTicksSlice-Dpx6Aro9.js";import"./index-BMDBiiS9.js";import"./fillDefinitions-CAZ5LaLK.js";import"./CartesianChart-D0Nvp_pW.js";import"./chartDataContext-D3U_nlv4.js";import"./CategoricalChart-BN1LMHzB.js";import"./CartesianAxis-CbM1zHQj.js";import"./Layer-8TmRCycn.js";import"./Text-CxPCVLsv.js";import"./ZIndexLayer-DyKyG2im.js";import"./Label-TtbmFLuu.js";import"./types-BRIT5d70.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CqwNhkfd.js";import"./symbol-C9biWcKI.js";import"./path-BBMZd4YL.js";import"./useElementOffset-n2MkMml8.js";import"./uniqBy-y429opov.js";import"./iteratee-Hdf7I3vo.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DhmVJFDn.js";import"./Curve-CiFPjJzw.js";import"./step-CSLjLb0b.js";import"./dataEntryStyles-BKp-1fzi.js";import"./ActivePoints-BMENxG1Z.js";import"./Dot-Cq9hKL4h.js";import"./activeStyles-DjdKzu9Y.js";import"./useAnimationId-CMFzH8KV.js";import"./ErrorBarContext-Cf3Qd7xR.js";import"./SetGraphicalItem-Dj9i93RZ.js";import"./ActiveShapeUtils-CkxgtXn-.js";import"./useEffectiveDataKey-9kbdNBk-.js";import"./Cross-DvFr-zYd.js";import"./Rectangle-Cr7srdQH.js";import"./util-Dxo8gN5i.js";import"./Sector-CMcVdojt.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
