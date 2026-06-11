import{r as n,R as t}from"./iframe-DVB9NpZr.js";import{L as p}from"./LineChart-fS5lZA04.js";import{R as s}from"./zIndexSlice-inUr0xCU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D6RpYwoO.js";import{X as d}from"./XAxis-CjffC60d.js";import{Y as y}from"./YAxis-CIOeYwaY.js";import{L as u}from"./Legend-TiAv2XOH.js";import{L as h}from"./Line-DLH78_Xg.js";import{T as g}from"./Tooltip-DvsPMFHN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-dTztbV_h.js";import"./index-r4smWfCS.js";import"./index-DwUGYNg_.js";import"./index-jND3wDEX.js";import"./index-BFwMZWAZ.js";import"./immer-cUFuezMs.js";import"./get-DFBBhs2u.js";import"./renderedTicksSlice-BJczlu3R.js";import"./axisSelectors-ORdVTni-.js";import"./d3-scale-wZkz8Wtl.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-B0kvhTPY.js";import"./isWellBehavedNumber-B9edeUWc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DFuv_KZ0.js";import"./chartDataContext-8-Op06e4.js";import"./CategoricalChart-onThNRP3.js";import"./CartesianAxis-BFFWpUHq.js";import"./Layer-CznYhS6e.js";import"./Text-RO4N7_ds.js";import"./DOMUtils-b4dXHa1v.js";import"./Label-C-9e4xzc.js";import"./ZIndexLayer-YpWmKYVa.js";import"./types-CmHpCyOi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DrVUv3XW.js";import"./symbol-vftm-K-Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXbw_jYn.js";import"./uniqBy-DDqwjX8c.js";import"./iteratee-DxauXe4m.js";import"./Curve-Ct2rphZk.js";import"./step-CVw2yAQM.js";import"./AnimatedItems-DN0vzfw4.js";import"./useAnimationId-D_d0Diy_.js";import"./ActivePoints-B3oYHQTk.js";import"./Dot-EUv2v8ot.js";import"./RegisterGraphicalItemId-Vv-Ra_xy.js";import"./ErrorBarContext-C6AudozV.js";import"./GraphicalItemClipPath-BA-fwdVj.js";import"./SetGraphicalItem-CkCRo3rW.js";import"./getRadiusAndStrokeWidthFromDot-CSFUoSlb.js";import"./ActiveShapeUtils-BQiDuR0w.js";import"./Cross-CRWYoA5L.js";import"./Rectangle-eOEMHMNE.js";import"./Sector-ByTnutuv.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
