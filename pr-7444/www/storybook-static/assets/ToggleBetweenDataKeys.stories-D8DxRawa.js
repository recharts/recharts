import{r as n,R as t}from"./iframe-DHxweIO9.js";import{L as p}from"./LineChart-IliHyqHz.js";import{R as s}from"./zIndexSlice-oAGhcyxs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DHwHIsHn.js";import{X as d}from"./XAxis-by-9KJMG.js";import{Y as y}from"./YAxis-Cdmy20fv.js";import{L as u}from"./Legend-C4UURlGM.js";import{L as h}from"./Line-i-hk5T1C.js";import{T as g}from"./Tooltip-B0F9H5iz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1v1VArt.js";import"./index-Cen9NMit.js";import"./index-1DHoilgY.js";import"./index-BPm8HOAZ.js";import"./index-D2s_06CJ.js";import"./immer-LtTlQghk.js";import"./get-C0Lt804T.js";import"./renderedTicksSlice-D0SVQkh2.js";import"./axisSelectors-BtfV9moc.js";import"./d3-scale-8GVIzX8d.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BFfik0lP.js";import"./isWellBehavedNumber-zbgy0N68.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-FIs-jkte.js";import"./chartDataContext-BdeADzKD.js";import"./CategoricalChart-DTsRp_4F.js";import"./CartesianAxis-CVNW_DPG.js";import"./Layer-Ck33QkwT.js";import"./Text-r1UAkK_M.js";import"./DOMUtils-CB5jUme8.js";import"./Label-Hedzo6WI.js";import"./ZIndexLayer-tleOLVC8.js";import"./types-D6mO4BwK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C8MLAtkU.js";import"./symbol-DF_ydgJ-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CQBXWs47.js";import"./uniqBy-DNFOk9_5.js";import"./iteratee-B_9DEeWv.js";import"./Curve-BHn37Kg3.js";import"./step-CNOFf0Gl.js";import"./AnimatedItems-CcOK_yF7.js";import"./useAnimationId-CKZSDbra.js";import"./ActivePoints-BYS8rjGP.js";import"./Dot-CpI4OitO.js";import"./RegisterGraphicalItemId-D9fHh-dg.js";import"./ErrorBarContext-Dm9lKBps.js";import"./GraphicalItemClipPath-DNkFii-i.js";import"./SetGraphicalItem-BdtIdG4P.js";import"./getRadiusAndStrokeWidthFromDot-DwZJEjHx.js";import"./ActiveShapeUtils-BTTuLaTo.js";import"./Cross-o6lG5OwG.js";import"./Rectangle-eYgp7t5C.js";import"./Sector-CiNQMXQF.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
