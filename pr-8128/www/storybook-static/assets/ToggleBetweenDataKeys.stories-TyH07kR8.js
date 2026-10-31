import{r as p,R as t}from"./iframe-BJZBYlXs.js";import{L as n}from"./LineChart-C1bMhcCL.js";import{R as s}from"./zIndexSlice-4kzTBdEO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-OVGlQqeu.js";import{X as d}from"./XAxis-BODArBrx.js";import{Y as y}from"./YAxis-8yYBvtiR.js";import{L as u}from"./Legend-Bq7JYcGs.js";import{L as h}from"./Line-DsC7P6_G.js";import{T as g}from"./Tooltip-D_m6xZp8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xMruxvG5.js";import"./resolveDefaultProps-DGRFLMT5.js";import"./get-cF5BDHN6.js";import"./axisSelectors-fPyxXNp-.js";import"./throttle-m042I2dJ.js";import"./index-r1c9axOK.js";import"./index-YjQ_vGf6.js";import"./polarAxisSelectors-BW13raLn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fXkyVTj6.js";import"./index-CLntLmjf.js";import"./index-CbX7_COp.js";import"./renderedTicksSlice-BfBzdz3z.js";import"./index-ztNxUc0B.js";import"./CartesianChart-8Ns5ZAmP.js";import"./ZIndexPortal-Dk8L0y9I.js";import"./CategoricalChart-CIocy3rX.js";import"./CartesianAxis-DuzHYXrg.js";import"./Layer-BiONajIB.js";import"./Text-D_QESfNW.js";import"./DOMUtils-CSm0nbrI.js";import"./pageBackground-OPtbMqw3.js";import"./ZIndexLayer-9eIJN5cX.js";import"./Label-BB8sjzzI.js";import"./types-BRBV9Zbz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-DO9vEba-.js";import"./fillDefinitions-DzwllWHv.js";import"./Symbols-iu0turDo.js";import"./symbol-DqzbJzzt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-7dnw2xrI.js";import"./uniqBy-C8XE-Jln.js";import"./iteratee-B-U3qR3F.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BZZJQhfg.js";import"./step-C9q08w-O.js";import"./LabelList-CjXuEtRO.js";import"./ActivePoints-DOT1DbFw.js";import"./Dot-B7xctmF8.js";import"./activeStyles-CNDsNUTt.js";import"./useAnimationId-t_dEgl2e.js";import"./dataEntryStyles-O6Ub96yy.js";import"./ErrorBarContext-B2TtUlqL.js";import"./SetGraphicalItem-N6zbMYsO.js";import"./getRadiusAndStrokeWidthFromDot-DjRQ5aRa.js";import"./ActiveShapeUtils-C_it4ZOO.js";import"./useEffectiveDataKey-BoPTmL0v.js";import"./Cross-BSgYYV6b.js";import"./Rectangle-DcbqjYEw.js";import"./util-Dxo8gN5i.js";import"./Sector-Rmkv_xXG.js";const Rt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Tt as __namedExportsOrder,Rt as default};
