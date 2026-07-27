import{r as n,R as t}from"./iframe-BvniDb9M.js";import{L as p}from"./LineChart-D435iLrU.js";import{R as s}from"./zIndexSlice-BcwOacrL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CzVr-k9g.js";import{X as d}from"./XAxis-BS2okIrv.js";import{Y as y}from"./YAxis-C-4Yxbjy.js";import{L as u}from"./Legend-tPSv8ExG.js";import{L as h}from"./Line-C3qRiAp2.js";import{T as g}from"./Tooltip-D3-yx6j9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0MN2RCFI.js";import"./index-DjBFZJXg.js";import"./index-Qpj6j6nv.js";import"./index-D2mR6oQd.js";import"./index-Be0pPrY3.js";import"./throttle-BEm3mroc.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BGoDlWDo.js";import"./axisSelectors-DxOnbDS4.js";import"./resolveDefaultProps-C1GGU34C.js";import"./isWellBehavedNumber-sm35pCXt.js";import"./d3-scale-B3McImOd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BIATkAst.js";import"./chartDataContext-C9IBj5vS.js";import"./CategoricalChart-COioiDUR.js";import"./CartesianAxis-DPYSgkyQ.js";import"./Layer-BeZmz3fH.js";import"./Text-uf6L8i_t.js";import"./DOMUtils-tzx2ZbvF.js";import"./Label-CRekt_d8.js";import"./ZIndexLayer-zEe-x6YM.js";import"./types-7Vi0xZSr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-Dh_Ja7Yn.js";import"./symbol-DYXxaJLg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BCU-HEUT.js";import"./uniqBy-C0TLtkCt.js";import"./iteratee-DcuBj_VF.js";import"./Curve-Y4TbuSkA.js";import"./step-BGMWJs8n.js";import"./AnimatedItems-BpsFGEZb.js";import"./useAnimationId-DrHlUTZ7.js";import"./ActivePoints-AbGS36L4.js";import"./Dot-BP3XG1sW.js";import"./RegisterGraphicalItemId-MKP5vUa-.js";import"./ErrorBarContext-NX_u8AwJ.js";import"./GraphicalItemClipPath-BlXsJvMF.js";import"./SetGraphicalItem-CUESYdxZ.js";import"./getRadiusAndStrokeWidthFromDot-DoEYDn4i.js";import"./ActiveShapeUtils-CNIg2u1g.js";import"./Cross-CkvF70p1.js";import"./Rectangle-C1l69Ju4.js";import"./util-Dxo8gN5i.js";import"./Sector-CJx1waeo.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
