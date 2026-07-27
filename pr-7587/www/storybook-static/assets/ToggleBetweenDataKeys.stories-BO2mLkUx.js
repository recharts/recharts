import{r as n,R as t}from"./iframe-DPsVQxbE.js";import{L as p}from"./LineChart-BidktN2X.js";import{R as s}from"./zIndexSlice-1brzNbqc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Catfq7QH.js";import{X as d}from"./XAxis-CYt1-RxN.js";import{Y as y}from"./YAxis-BS8G-HFw.js";import{L as u}from"./Legend-CTD1e9MS.js";import{L as h}from"./Line-CWQOFj66.js";import{T as g}from"./Tooltip-BlDZy0rG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCXiW-f1.js";import"./index-DB0est9g.js";import"./index-CYr1DPeq.js";import"./index-B1wCn-3B.js";import"./index-B_Y-xmpq.js";import"./throttle-Cj8wAsiz.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CC_kknQZ.js";import"./axisSelectors-CEp7-2uA.js";import"./resolveDefaultProps-BIwKMjhn.js";import"./isWellBehavedNumber-Chc7VT9N.js";import"./d3-scale-BNrinBxy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DMOmnFKA.js";import"./chartDataContext-Cc6AxfML.js";import"./CategoricalChart-Bd2BlG5y.js";import"./CartesianAxis-D5qEkVje.js";import"./Layer-DGWGYgzk.js";import"./Text-B4JB7zPj.js";import"./DOMUtils-D6NwHzOL.js";import"./Label-C2Rhcs8s.js";import"./ZIndexLayer-MqiRX2rl.js";import"./types-ColFKgNS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-kHTiKlEK.js";import"./symbol-CakplyVk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-d53krvrq.js";import"./uniqBy-DsIVeImw.js";import"./iteratee-CvNQaPV0.js";import"./Curve-DtEeL5Gu.js";import"./step-BU8nTjqD.js";import"./AnimatedItems-BlseN1Dx.js";import"./useAnimationId-CtVxLpdf.js";import"./ActivePoints-qcduKxyw.js";import"./Dot-COXcIf5D.js";import"./RegisterGraphicalItemId-MGM9At2R.js";import"./ErrorBarContext-B2jO-XEn.js";import"./GraphicalItemClipPath-Dj3im7iZ.js";import"./SetGraphicalItem-CNwLGNNY.js";import"./getRadiusAndStrokeWidthFromDot-f0ZiEHIa.js";import"./ActiveShapeUtils-iUHBQUNz.js";import"./Cross-j0ZUM9sw.js";import"./Rectangle-BYpMekmC.js";import"./util-Dxo8gN5i.js";import"./Sector-CKL9xBrw.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
