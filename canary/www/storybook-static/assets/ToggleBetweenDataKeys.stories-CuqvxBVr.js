import{r as p,R as t}from"./iframe-zm2RFiAA.js";import{L as n}from"./LineChart-xlOLMTjJ.js";import{R as s}from"./zIndexSlice-DqZBLIbU.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-_vwIk58n.js";import{X as d}from"./XAxis-BmR_Q4ey.js";import{Y as y}from"./YAxis-QmJ3fv5f.js";import{L as u}from"./Legend-3YSW8Cw0.js";import{L as h}from"./Line-BYHn6zsd.js";import{T as g}from"./Tooltip-Biq5tAED.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bnt3Xjg2.js";import"./resolveDefaultProps-DVyNUYq0.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D_XgtjC9.js";import"./throttle-8D1mAr5a.js";import"./index-DYoeUBFv.js";import"./index-C05Q7pAX.js";import"./isWellBehavedNumber-BsUHNZ1L.js";import"./d3-scale-CIfEmdT5.js";import"./index-Cyz_PThi.js";import"./index-0SlDOcWE.js";import"./renderedTicksSlice-DM7SAuzg.js";import"./index-DpXVo8J4.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CZZG3tzb.js";import"./chartDataContext-ChtOwbQ7.js";import"./CategoricalChart-Cc-dXh8l.js";import"./CartesianAxis-BTS4yOao.js";import"./Layer-CBvDM-ZR.js";import"./Text-bm4_J_IC.js";import"./DOMUtils-Dj43lFCA.js";import"./useId-DIhnWHEa.js";import"./useBackwardsCompatibleTheme-DTCZ1OkH.js";import"./Label-Dpn-Rbeg.js";import"./ZIndexLayer-fVuj_SHP.js";import"./types-DQCUIdcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Be1ARyPs.js";import"./symbol-D4dBulFC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DwCmeGut.js";import"./uniqBy-9E3wEZWV.js";import"./iteratee-BczLgGSK.js";import"./Curve-KfMVJIMR.js";import"./step-BBLL9Nmi.js";import"./AnimatedItems-Cn3auVQS.js";import"./useAnimationId-DbteGMIo.js";import"./ActivePoints-Bo7SycvC.js";import"./Dot-DeAdYXSf.js";import"./RegisterGraphicalItemId-CFLy-PgK.js";import"./ErrorBarContext-gzjuFQOm.js";import"./GraphicalItemClipPath-CrDoK_iS.js";import"./SetGraphicalItem-CMYFNCGq.js";import"./getRadiusAndStrokeWidthFromDot-Db_AAYxl.js";import"./ActiveShapeUtils-ClA9znOB.js";import"./useGraphicalItemIdentity-C6EWaBUb.js";import"./Cross-CMoi-VYV.js";import"./Rectangle-CqUtXW6N.js";import"./util-Dxo8gN5i.js";import"./Sector-CixyiijL.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
