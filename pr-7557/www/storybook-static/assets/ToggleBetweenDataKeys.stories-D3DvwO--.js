import{r as n,R as t}from"./iframe-CTZq4wow.js";import{L as p}from"./LineChart-DVlEFzuv.js";import{R as s}from"./zIndexSlice-BugLLn2I.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CAoHKjYI.js";import{X as d}from"./XAxis-DLDzw0JX.js";import{Y as y}from"./YAxis-H48Xjaif.js";import{L as u}from"./Legend-BtTmIeby.js";import{L as h}from"./Line-BSq-1OIA.js";import{T as g}from"./Tooltip-DfvCrZ11.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DfAH14um.js";import"./index-B4a7aOKY.js";import"./index-C9WAMmaw.js";import"./index-BsdYqaGf.js";import"./index-CDrnfkiS.js";import"./throttle-CyDwbdt-.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CnaOGMsT.js";import"./axisSelectors-CvXoECki.js";import"./resolveDefaultProps-HvEOYUSi.js";import"./isWellBehavedNumber-o0IYSWOi.js";import"./d3-scale-oRxS8xLw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D9JMH5Z9.js";import"./chartDataContext-CjbWGJuj.js";import"./CategoricalChart-xMgetrMq.js";import"./CartesianAxis-Fbl6c-dp.js";import"./Layer-B0eWkEir.js";import"./Text-Cu7BMLGl.js";import"./DOMUtils-DAhFjHam.js";import"./Label-BA3Mm5Cp.js";import"./ZIndexLayer-JO4x2o2R.js";import"./types-Cmo79yaU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CyYUR82X.js";import"./symbol-BfAs-hZf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CKa6iluZ.js";import"./uniqBy-CatM64vN.js";import"./iteratee-BUImv9wm.js";import"./Curve-B2-DT88v.js";import"./step-BOqrsqeu.js";import"./AnimatedItems-TPOIkuad.js";import"./useAnimationId-N1bAbizC.js";import"./ActivePoints-DduaoRit.js";import"./Dot-Ck1gikCj.js";import"./RegisterGraphicalItemId-CBhnZQJL.js";import"./ErrorBarContext-4wXqzGb4.js";import"./GraphicalItemClipPath-C2c2EBGK.js";import"./SetGraphicalItem-Dzd1nu2B.js";import"./getRadiusAndStrokeWidthFromDot-DY4tcjGE.js";import"./ActiveShapeUtils-BYg3ncJn.js";import"./Cross-Bea8cF3l.js";import"./Rectangle-Zzn1I1q3.js";import"./util-Dxo8gN5i.js";import"./Sector-CkMR5IsZ.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
