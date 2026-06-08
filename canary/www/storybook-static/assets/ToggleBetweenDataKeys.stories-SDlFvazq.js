import{r as n,R as t}from"./iframe-CLYMtVVU.js";import{L as p}from"./LineChart-Ba7TkoBl.js";import{R as s}from"./zIndexSlice-CYEFLgyb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DirQ_tPE.js";import{X as d}from"./XAxis-CBhmV7sv.js";import{Y as y}from"./YAxis-Cpo1C8HM.js";import{L as u}from"./Legend-DcD6k0Sc.js";import{L as h}from"./Line-BFselYwC.js";import{T as g}from"./Tooltip-BE-R9wvc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-jnQrHFKT.js";import"./index-D3KBwDZ7.js";import"./index-CUSuyme2.js";import"./index-D6XAYvxn.js";import"./index-C3oYNXo1.js";import"./immer-C-1Bq0C7.js";import"./get-DSRRGDfq.js";import"./renderedTicksSlice-6fh8zoWq.js";import"./axisSelectors-BM98nGPd.js";import"./d3-scale-Beg35rGW.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CfuK3i5d.js";import"./isWellBehavedNumber-Dc0RpdQ2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BTxrU-fy.js";import"./chartDataContext-BVNdEBob.js";import"./CategoricalChart-DtR6LZhP.js";import"./CartesianAxis-BkW0Yyb6.js";import"./Layer-Bl-M4NCf.js";import"./Text-qYO8jmtc.js";import"./DOMUtils-4OHTktxt.js";import"./Label-m25-3SN6.js";import"./ZIndexLayer-DaVYg93h.js";import"./types-Bp6tCXm1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BbFN5qez.js";import"./symbol-DT-DdzbR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BBQpNMyz.js";import"./uniqBy-CZClMibn.js";import"./iteratee-Dvvu4gyG.js";import"./Curve-CECgUjTc.js";import"./step-BUm_V17B.js";import"./AnimatedItems-fTI7Y-Cy.js";import"./useAnimationId-CPzMxfeA.js";import"./ActivePoints-CLviZOj_.js";import"./Dot-Xh8APYeF.js";import"./RegisterGraphicalItemId-DiMQaNFZ.js";import"./ErrorBarContext-CoCRg6bd.js";import"./GraphicalItemClipPath-DWrBQcDT.js";import"./SetGraphicalItem-B11_FOSD.js";import"./getRadiusAndStrokeWidthFromDot-DBkbTiQk.js";import"./ActiveShapeUtils-BVcr_xDt.js";import"./Cross-CrvnL4kK.js";import"./Rectangle-Dixlt82o.js";import"./Sector-vSfHJqng.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
