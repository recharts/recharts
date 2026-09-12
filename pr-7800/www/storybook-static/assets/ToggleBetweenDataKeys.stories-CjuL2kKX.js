import{r as p,R as t}from"./iframe-BnZHUF9X.js";import{L as n}from"./LineChart-DpITsjT-.js";import{R as s}from"./zIndexSlice-ONbH2CMm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-m_0SQtv7.js";import{X as d}from"./XAxis-CRqJ7xsJ.js";import{Y as y}from"./YAxis-C5pkUNB3.js";import{L as u}from"./Legend-CnuG6WaE.js";import{L as h}from"./Line-cVcFSyJN.js";import{T as g}from"./Tooltip-PPlXlT90.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ztAk4E9P.js";import"./resolveDefaultProps-CS-Gahor.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DSOG4fe3.js";import"./throttle-DYWyyBD4.js";import"./index-DwyAhWM9.js";import"./index-Ck__QTcD.js";import"./isWellBehavedNumber-Bn5kvLQQ.js";import"./d3-scale-hcynQqTx.js";import"./index-ksKJqe-L.js";import"./index-BrEYDHSM.js";import"./renderedTicksSlice-CKzVsDw2.js";import"./index-CVXi-tnN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-a0B_k2pR.js";import"./chartDataContext-CxsSdioC.js";import"./CategoricalChart-CSXyHKQE.js";import"./CartesianAxis-CnqpkBi3.js";import"./Layer-D4LkPBUk.js";import"./Text-CPiy7pnu.js";import"./DOMUtils-C0afjJmd.js";import"./useId-nraStDaz.js";import"./useBackwardsCompatibleTheme-CLSYsBSa.js";import"./Label-hOa9Xaax.js";import"./ZIndexLayer-CIa5rzLp.js";import"./types-CA0d64vS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cqtcw8wG.js";import"./symbol-i8QsJMqg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-TFsjHbYB.js";import"./uniqBy-BpF-KHKu.js";import"./iteratee-B0GexjSp.js";import"./Curve-SQL-HHnd.js";import"./step-BHb_S66N.js";import"./AnimatedItems-Bxt2Mhs_.js";import"./useAnimationId-CuFFFGhn.js";import"./ActivePoints-CIdvMm3W.js";import"./Dot-CjRUlFgj.js";import"./RegisterGraphicalItemId-eknPVKNp.js";import"./ErrorBarContext-DNaI9-CH.js";import"./GraphicalItemClipPath-DFiiV3dA.js";import"./SetGraphicalItem-BS2ba3Ul.js";import"./getRadiusAndStrokeWidthFromDot-6T9qPj9L.js";import"./ActiveShapeUtils-nVjPub3k.js";import"./useGraphicalItemIdentity-esDnMWhm.js";import"./Cross-DPVWnZFy.js";import"./Rectangle-Cx8oRFI-.js";import"./util-Dxo8gN5i.js";import"./Sector-CsgGEWRb.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
