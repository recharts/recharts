import{r as n,R as t}from"./iframe-DsrD6wpT.js";import{L as p}from"./LineChart-DFHmcXCC.js";import{R as s}from"./zIndexSlice-DkgP7dBP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-36WiabID.js";import{X as d}from"./XAxis-DizM2ccM.js";import{Y as y}from"./YAxis-C8AD80e7.js";import{L as u}from"./Legend-V82r6LGZ.js";import{L as h}from"./Line-dtEvmWP5.js";import{T as g}from"./Tooltip-EAczPu4K.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIY-yJrq.js";import"./index-D23QGT2y.js";import"./index-DLTbKQJZ.js";import"./index-Z0dAwhZH.js";import"./index-CKvlhhLQ.js";import"./immer-BAPcb6RO.js";import"./get-C10pg2Pt.js";import"./renderedTicksSlice-VRajnlWn.js";import"./axisSelectors-CJUUuARo.js";import"./d3-scale-CqXFZCr9.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DQfgYWkZ.js";import"./isWellBehavedNumber-CgPFccj7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BgP_pNrE.js";import"./chartDataContext-CD2wssdB.js";import"./CategoricalChart-BwGaQnIJ.js";import"./CartesianAxis-CiwuyPTT.js";import"./Layer-Cn-q1z5M.js";import"./Text-BEnCKmcO.js";import"./DOMUtils-Cn9VGpSS.js";import"./Label-TNDcrVM2.js";import"./ZIndexLayer-D3qjSsRd.js";import"./types-B5JJF1dm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DVJc4iiL.js";import"./symbol-DrFIzzE-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-LYJk09nJ.js";import"./uniqBy-DzPJq-Cc.js";import"./iteratee-D1ZEtHwF.js";import"./Curve-CpP-gaVa.js";import"./step-7WGc90nH.js";import"./AnimatedItems-8lESwhOr.js";import"./useAnimationId-BDJzCpgi.js";import"./ActivePoints-Bk2Pfh1p.js";import"./Dot-Cd38Ah6o.js";import"./RegisterGraphicalItemId-Ch7WvGaf.js";import"./ErrorBarContext-H2sebB4O.js";import"./GraphicalItemClipPath-CeOkm8u8.js";import"./SetGraphicalItem-DZD_Etrn.js";import"./getRadiusAndStrokeWidthFromDot-BIBWddww.js";import"./ActiveShapeUtils-BxUohkw2.js";import"./Cross-Bg8qnscY.js";import"./Rectangle-Di4BNLUB.js";import"./Sector-DwqNoys3.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
