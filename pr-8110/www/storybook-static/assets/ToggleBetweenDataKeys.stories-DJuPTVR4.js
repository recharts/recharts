import{r as p,R as t}from"./iframe-Diz1MxK0.js";import{L as n}from"./LineChart-pdEv1FZP.js";import{R as s}from"./zIndexSlice-De03ARmf.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D6mypkCo.js";import{X as d}from"./XAxis-o44om-aN.js";import{Y as y}from"./YAxis-wJW4f648.js";import{L as u}from"./Legend-BFYiT0Jb.js";import{L as h}from"./Line-Bw4KMoLA.js";import{T as g}from"./Tooltip-CBXupBXG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dua8Yzn2.js";import"./resolveDefaultProps-DXx0w5ol.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DSSqtEqI.js";import"./throttle-D6Fnchfm.js";import"./index-BRB5AgXV.js";import"./index-BLbVat5F.js";import"./polarAxisSelectors-Bv8wAAst.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DzLjpFUT.js";import"./index-F_sHq6h9.js";import"./index-B9EOw7DU.js";import"./renderedTicksSlice-BDuqmjwG.js";import"./index-B5mD0-P8.js";import"./CartesianChart-DgKauYA5.js";import"./ZIndexPortal-DkIbXTbh.js";import"./CategoricalChart-BQk2mTyl.js";import"./CartesianAxis-g7INsdPw.js";import"./Layer-Bs_jv2-i.js";import"./Text-Cd2gwijp.js";import"./DOMUtils-CLoOggbb.js";import"./ZIndexLayer-DarFSaif.js";import"./Label-BN-_qB9f.js";import"./types-DOhta01o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-wvGU_BGG.js";import"./symbol-DdzwEmp4.js";import"./path-DyVhHtw_.js";import"./FillDefinition-CPr5Eo8P.js";import"./dataEntryStyles-D0onuRNm.js";import"./useElementOffset-DwoWFN5w.js";import"./uniqBy-BQH3eG4y.js";import"./iteratee-D_QiXIJe.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DjbP1tEr.js";import"./step-BTIR3rT6.js";import"./LabelList-UNOP6jku.js";import"./ActivePoints-CsnFafYW.js";import"./Dot-BJelZ-T3.js";import"./activeStyles-DMKa5gXh.js";import"./useAnimationId-DrJNkikT.js";import"./ErrorBarContext-8rAmb_-m.js";import"./SetGraphicalItem-R77n_H2E.js";import"./getRadiusAndStrokeWidthFromDot-CVdmuuRJ.js";import"./ActiveShapeUtils-lZsBLYLZ.js";import"./useEffectiveDataKey-CP6w9Jk7.js";import"./Cross-CJz9Q9v7.js";import"./Rectangle-ibll1vv0.js";import"./util-Dxo8gN5i.js";import"./Sector-BC22SmBD.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
