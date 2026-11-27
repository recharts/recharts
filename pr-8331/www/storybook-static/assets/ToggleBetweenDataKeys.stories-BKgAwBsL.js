import{r as p,R as t}from"./iframe-CjYP3ojB.js";import{L as n}from"./LineChart-C0L_5442.js";import{R as s}from"./zIndexSlice-Cy7CLl9Z.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DU9XZ5iM.js";import{X as d}from"./XAxis-Blplutoc.js";import{Y as y}from"./YAxis-Bt-Cr0Xc.js";import{L as u}from"./Legend-25wTq1-O.js";import{L as h}from"./Line-COY0vFQs.js";import{T as g}from"./Tooltip-CBfzwhg-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-UTu-k1rT.js";import"./resolveDefaultProps-BKyPqSHv.js";import"./get-CjriyByo.js";import"./axisSelectors-CPJSjERY.js";import"./redux-toolkit.esm-DZ87n3n2.js";import"./index-Dxgip7sp.js";import"./index-ChIvmNbe.js";import"./polarAxisSelectors-DdQAYS9z.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-HdrCxTIi.js";import"./index-cwlxkqz2.js";import"./index-CvkAYdqK.js";import"./renderedTicksSlice-CI60Ea5b.js";import"./index-CpZXho2T.js";import"./fillDefinitions-BUdB36JD.js";import"./CartesianChart-C5nFTC9G.js";import"./chartDataContext-ksA5CmmE.js";import"./CategoricalChart-zTEQjMMp.js";import"./CartesianAxis-5Yui6JuQ.js";import"./Layer-BI-kTcme.js";import"./Text-DjT8udYf.js";import"./ZIndexLayer-BebYx5XY.js";import"./Label-CaJS6zCA.js";import"./types-D4qLdpQF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CAjbkOs6.js";import"./symbol-Lqckysps.js";import"./path-BBMZd4YL.js";import"./getUniqPayload-DT0aDQpX.js";import"./uniqBy-Bdlm7mbE.js";import"./iteratee-DlQmRZQR.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-C_KRSABn.js";import"./Curve-CNaKNyZA.js";import"./step-BZQ3UPaP.js";import"./dataEntryStyles-BvceDOIn.js";import"./ActivePoints-D4hUXiIf.js";import"./Dot-BzVdtL2Q.js";import"./activeStyles-D9A5DeQH.js";import"./useAnimationId-C3slNkW8.js";import"./ErrorBarContext-DD39jyt1.js";import"./SetGraphicalItem-B_iWrnd9.js";import"./ActiveShapeUtils-DicChUyh.js";import"./useEffectiveDataKey-BSYT-tLD.js";import"./Cross-osWFHJZ7.js";import"./Rectangle-Cr5lBSuf.js";import"./util-Dxo8gN5i.js";import"./Sector-CL89JWyI.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
