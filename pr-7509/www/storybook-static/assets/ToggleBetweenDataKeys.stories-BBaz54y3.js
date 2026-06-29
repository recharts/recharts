import{r as n,R as t}from"./iframe-4vtyrily.js";import{L as p}from"./LineChart-BpuSHe94.js";import{R as s}from"./zIndexSlice-DsxXMu10.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DDBtHf46.js";import{X as d}from"./XAxis-D8jscbum.js";import{Y as y}from"./YAxis-BZLq-Yvr.js";import{L as u}from"./Legend-6rO4izAO.js";import{L as h}from"./Line-Dj9X0Qtq.js";import{T as g}from"./Tooltip-C922immd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BkIEJRAG.js";import"./index-DmmOL2VS.js";import"./index-lWQepKyy.js";import"./index-058gmbYq.js";import"./index-WdI8WwRZ.js";import"./throttle-BJLHAoQW.js";import"./get-CmTlD__X.js";import"./renderedTicksSlice-DadNz-JQ.js";import"./axisSelectors-b6USA22d.js";import"./d3-scale-BRChu2o4.js";import"./resolveDefaultProps-CluH8H00.js";import"./isWellBehavedNumber-BgzphtrB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-COMuthXy.js";import"./chartDataContext-Cvy_uDzX.js";import"./CategoricalChart-Cbi53qJN.js";import"./CartesianAxis-CiqNB0Kv.js";import"./Layer-BeOWFmV4.js";import"./Text-BI23BLmu.js";import"./DOMUtils-BhADA_J0.js";import"./Label-BGwY3uMh.js";import"./ZIndexLayer-BSkjb5Ga.js";import"./types-CBN3GvJG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BWJBnJCf.js";import"./symbol-SUsw5YqF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-aY7P-FDX.js";import"./uniqBy-Dg7J4PMx.js";import"./iteratee-BJakvES8.js";import"./Curve-lJlCi-Lp.js";import"./step-BvrGRSpq.js";import"./AnimatedItems-DdVQ6WRa.js";import"./useAnimationId-CorgOjgO.js";import"./ActivePoints-B8FHMCJl.js";import"./Dot-CRumXoSO.js";import"./RegisterGraphicalItemId-3aiZPuQN.js";import"./ErrorBarContext-DZAGOXyd.js";import"./GraphicalItemClipPath-Cc5Lg0-u.js";import"./SetGraphicalItem-Brisep9j.js";import"./getRadiusAndStrokeWidthFromDot-C0aT6Dgm.js";import"./ActiveShapeUtils-DwhByUak.js";import"./Cross-DJYNimuK.js";import"./Rectangle-DdosgUZ5.js";import"./util-Dxo8gN5i.js";import"./Sector-BEKJvdH5.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
