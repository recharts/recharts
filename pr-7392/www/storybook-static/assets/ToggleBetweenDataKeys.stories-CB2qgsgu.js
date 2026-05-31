import{P as n,c as t}from"./iframe-BLrz4bzL.js";import{L as p}from"./LineChart-DVaYxeYN.js";import{g as s}from"./zIndexSlice-c7WW4zRb.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-DCVHdoQU.js";import{X as d}from"./XAxis-B81A99CY.js";import{Y as y}from"./YAxis-7eks4-ql.js";import{L as u}from"./Legend-BRGZIZox.js";import{L as g}from"./Line-DP0xx6zw.js";import{T as h}from"./Tooltip-D7rWINP6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9Liyr6r.js";import"./index-DkCredV6.js";import"./index-CZQ5QhT1.js";import"./index-DA1Z20ZR.js";import"./index-B0WUClSq.js";import"./immer-Cj0-obxe.js";import"./get-CEp8r7kA.js";import"./renderedTicksSlice-ReLUkucO.js";import"./axisSelectors-DEfJzTHu.js";import"./d3-scale-DXSYU9tD.js";import"./resolveDefaultProps-NE4wXzst.js";import"./isWellBehavedNumber-Di3xCgEJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-m5bXXKFS.js";import"./chartDataContext-Bv2SQjN_.js";import"./CategoricalChart-xCWpyDx3.js";import"./CartesianAxis-BoM_TQOb.js";import"./Layer-CRR_7s_x.js";import"./Text-dr0MBeU-.js";import"./DOMUtils-CfWUtkPu.js";import"./Label-cQgelXjE.js";import"./ZIndexLayer-DQpprPKw.js";import"./types-C_iF2heC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-TiNOGsKl.js";import"./symbol-CAXeb-zQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BAtvFamF.js";import"./uniqBy-10OvI55m.js";import"./iteratee-CZgOWLEv.js";import"./Curve-DsJ0vDb9.js";import"./step-BiB5duu3.js";import"./ReactUtils-_7naDrvk.js";import"./ActivePoints-QQtgh7iH.js";import"./Dot-C1lQjxdh.js";import"./RegisterGraphicalItemId-BL7Ao-U_.js";import"./ErrorBarContext-C7bZMesM.js";import"./GraphicalItemClipPath-pnbh5A5H.js";import"./SetGraphicalItem-BUgSHz80.js";import"./useAnimationId-3KXs9R46.js";import"./getRadiusAndStrokeWidthFromDot-DElyUSRS.js";import"./ActiveShapeUtils-CXhzrWSQ.js";import"./Cross-DZz_-ucf.js";import"./Rectangle-BW1N7Z3u.js";import"./Sector-Cn6A8M5a.js";const ft={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(g,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(h,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
