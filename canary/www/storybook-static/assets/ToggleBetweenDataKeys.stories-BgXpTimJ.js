import{r as p,R as t}from"./iframe-C-3ZsddJ.js";import{L as n}from"./LineChart-lnaFk1Bt.js";import{R as s}from"./zIndexSlice-CznyzfFG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DaW9DFl3.js";import{X as d}from"./XAxis-ZaXNF9D9.js";import{Y as y}from"./YAxis-D4KLVqJs.js";import{L as u}from"./Legend-CIfx6KHV.js";import{L as h}from"./Line-eY7q5xtu.js";import{T as g}from"./Tooltip-iM448N5g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-wMqgqvbl.js";import"./resolveDefaultProps-4qg6ukUo.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BJ1i-OvH.js";import"./throttle-B2MnXNQi.js";import"./index-DEbaciLb.js";import"./index--fwLI_yC.js";import"./isWellBehavedNumber-CP7J40iL.js";import"./d3-scale-DV_TqrZd.js";import"./index-CcPqlA3d.js";import"./index-CyMO1IzJ.js";import"./renderedTicksSlice-ICI7wfEt.js";import"./index-ClJuK0WQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-COKBOn7U.js";import"./chartDataContext-BcbpFEXE.js";import"./CategoricalChart-sAB9uLf6.js";import"./CartesianAxis-BdVIPGTu.js";import"./Layer-Cx38LgLI.js";import"./Text-gCPwfBz1.js";import"./pageBackground-Bkm5uuC-.js";import"./useId-BDuxZkB8.js";import"./useBackwardsCompatibleTheme-X6WlIU0M.js";import"./Label-DKMse05f.js";import"./ZIndexLayer-G1m3PEiN.js";import"./dataEntryStyles-CEJLUdCX.js";import"./types-DCBC51xd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-OLVEorTH.js";import"./symbol-CerJsWCH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHApDFqY.js";import"./uniqBy-B15nsN6v.js";import"./iteratee-iSL6B2R2.js";import"./isArguments-yB-y1yaH.js";import"./Curve-W1QfAwKp.js";import"./step-DTUF9rZD.js";import"./activeStyles-L7DCCiqF.js";import"./useAnimationId-SiWxI2IO.js";import"./ActivePoints-BcMP_3VG.js";import"./Dot-BAgolGjt.js";import"./RegisterGraphicalItemId-CDIE6wwE.js";import"./ErrorBarContext-CDKXoSuu.js";import"./SetGraphicalItem-BIMysWhn.js";import"./getRadiusAndStrokeWidthFromDot-DU6SJcR2.js";import"./ActiveShapeUtils-DDCkf_lK.js";import"./useEffectiveDataKey-B7scz4IZ.js";import"./Cross-B6l53nAc.js";import"./Rectangle-BFI7v7xW.js";import"./util-Dxo8gN5i.js";import"./Sector-CGlTysj4.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
