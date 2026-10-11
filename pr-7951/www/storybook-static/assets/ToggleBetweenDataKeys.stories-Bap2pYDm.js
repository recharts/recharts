import{r as p,R as t}from"./iframe-yZAwGisL.js";import{L as n}from"./LineChart-BOxsA88e.js";import{R as s}from"./zIndexSlice-vFKh36uD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Ccontk-L.js";import{X as d}from"./XAxis-6ip0YWM4.js";import{Y as y}from"./YAxis-GuJUd4De.js";import{L as u}from"./Legend-zigVBtRG.js";import{L as h}from"./Line-CIo2HQB8.js";import{T as g}from"./Tooltip-GIKsa0Rr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BFLcsvAk.js";import"./resolveDefaultProps-CpOUXIWy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CjnrZFGM.js";import"./throttle-IYJcPlE6.js";import"./index-Bt1GAe6_.js";import"./index-BTDWI4JQ.js";import"./isWellBehavedNumber-BKIZfdbp.js";import"./d3-scale-BEY7rAMO.js";import"./index-Ds4u8dOy.js";import"./index-DoEg_2wF.js";import"./renderedTicksSlice-C_b5HfBN.js";import"./index-CX6Jn8F9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CRAui4vE.js";import"./chartDataContext-x9qaucVY.js";import"./CategoricalChart-BgiEDQst.js";import"./CartesianAxis-BfrfszGM.js";import"./Layer-CD9hCFBU.js";import"./Text-DCZHKK2-.js";import"./pageBackground-CPn-UXC2.js";import"./useId-fCPF8DLN.js";import"./useBackwardsCompatibleTheme-BEC80JP4.js";import"./Label-DlvpoYCy.js";import"./ZIndexLayer-jYmr7Pld.js";import"./types-BDgd-zTs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CEACwPi4.js";import"./symbol-DNKzqBP-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXDe4gtV.js";import"./uniqBy-Dx2h-_lS.js";import"./iteratee-Boanqjnt.js";import"./Curve-DFleLHdr.js";import"./step-6P7iPqmC.js";import"./activeStyles-CKbiEpkz.js";import"./useAnimationId-D2NnZ8n8.js";import"./dataEntryStyles-heCtjgf8.js";import"./ActivePoints-X-te6dVp.js";import"./Dot-B6Z_ObGU.js";import"./ErrorBarContext-BaomqVzA.js";import"./GraphicalItemClipPath-CTekJVv_.js";import"./SetGraphicalItem-BAzuu_AW.js";import"./getRadiusAndStrokeWidthFromDot-C8mMcy-b.js";import"./ActiveShapeUtils-Bka3d7Ur.js";import"./useGraphicalItemIdentity-C_H0JivC.js";import"./Cross-CMMpBrg6.js";import"./Rectangle-Dv7__Cpn.js";import"./util-Dxo8gN5i.js";import"./Sector-CFtj1kdJ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
