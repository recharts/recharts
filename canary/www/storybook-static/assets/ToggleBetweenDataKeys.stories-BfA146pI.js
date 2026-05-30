import{P as n,c as t}from"./iframe-CFdw7OF0.js";import{L as p}from"./LineChart-VPFolWZW.js";import{g as s}from"./zIndexSlice-D5FBk225.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-CObU4swe.js";import{X as d}from"./XAxis-oGl6YnV0.js";import{Y as y}from"./YAxis-BAT_0iNE.js";import{L as u}from"./Legend-C2EvpoVf.js";import{L as g}from"./Line-cOG-eLoA.js";import{T as h}from"./Tooltip-LgSYFZHU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-pofiw2Fq.js";import"./index-DM95XG_1.js";import"./index-C5nAfqWm.js";import"./index-CM5vwHXM.js";import"./index-RIEQ7tnC.js";import"./immer-3q52nOMc.js";import"./get-i3QN0OCy.js";import"./renderedTicksSlice-CvMrYJlr.js";import"./axisSelectors-CDxqGeGZ.js";import"./d3-scale-B-4cH8vj.js";import"./resolveDefaultProps-T_Ifm--9.js";import"./isWellBehavedNumber-Bx2m4Paj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DSPLLrgp.js";import"./chartDataContext-zA7-YeX3.js";import"./CategoricalChart-AW1pE9Yw.js";import"./CartesianAxis-DvetSxxI.js";import"./Layer-DVYMAObc.js";import"./Text-Cow_E4O9.js";import"./DOMUtils-BavBrzJ4.js";import"./Label-2Qw5xNff.js";import"./ZIndexLayer-K1WjLJ6s.js";import"./types-DRUeCAti.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C2-Wolt1.js";import"./symbol-D61DaMaA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C84_aF81.js";import"./uniqBy-Chp8xrv6.js";import"./iteratee-D26QWFLa.js";import"./Curve-CMXh5glG.js";import"./step-Crajo5M3.js";import"./ReactUtils-CaBU1i2i.js";import"./ActivePoints-BRiCC5vc.js";import"./Dot-BIcdqveY.js";import"./RegisterGraphicalItemId-BaAIN_Bd.js";import"./ErrorBarContext-B3ComckR.js";import"./GraphicalItemClipPath-DcU2KTuM.js";import"./SetGraphicalItem-D0G49xVf.js";import"./useAnimationId-opl2QVve.js";import"./getRadiusAndStrokeWidthFromDot-DulN0eDG.js";import"./ActiveShapeUtils-CucidJwG.js";import"./Cross-DeOAH8tZ.js";import"./Rectangle-Od57b66I.js";import"./Sector-CIx1PkfB.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const vt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,vt as __namedExportsOrder,ft as default};
