import{r as p,R as t}from"./iframe-Dkncjqe5.js";import{L as n}from"./LineChart-CIP8CLEW.js";import{R as s}from"./zIndexSlice-3Eut4nle.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BC3bQ9Jk.js";import{X as d}from"./XAxis-BAQVI_cg.js";import{Y as y}from"./YAxis-Dxbos16T.js";import{L as u}from"./Legend-CzQeFDEi.js";import{L as h}from"./Line-dCs9wtK9.js";import{T as g}from"./Tooltip-C0BJ45cZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BbHdyrKZ.js";import"./resolveDefaultProps-DKbDW2P0.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DzgXC3ir.js";import"./throttle-fiJaoKIv.js";import"./index-DuZYSu8x.js";import"./index-CEbzYCUB.js";import"./isWellBehavedNumber-h0zKWQQH.js";import"./d3-scale-D7_DItYV.js";import"./index-Bw7gNQT7.js";import"./index-BWQ516bg.js";import"./renderedTicksSlice-DBigkG9b.js";import"./index-DULW3GES.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-_Rd0DLP-.js";import"./chartDataContext-BPkdx2D0.js";import"./CategoricalChart-DpeOMck6.js";import"./CartesianAxis-Dwpurh4e.js";import"./Layer-CZ9ZIOVu.js";import"./Text-BwfQxnJz.js";import"./pageBackground-CmllYwCr.js";import"./useId-ZYm6mEVk.js";import"./useBackwardsCompatibleTheme-BCpg7K4A.js";import"./Label-V2ZN4uKZ.js";import"./ZIndexLayer-DaEkt6aU.js";import"./types-BHEXbjwq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-ijaf1hhE.js";import"./symbol-DXJ6pf0F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-y8lH1pNC.js";import"./uniqBy-B0GiVIZ3.js";import"./iteratee-DxR0_ujM.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CjcQUAYM.js";import"./step-CArLTb5W.js";import"./activeStyles-DQuNqkwN.js";import"./useAnimationId-MEfDv_ZE.js";import"./dataEntryStyles-DXfoX1Tx.js";import"./ActivePoints-ClxMx5Mk.js";import"./Dot-sRIGaLzT.js";import"./ErrorBarContext-e-s-GcHB.js";import"./GraphicalItemClipPath-DPL4dOJ-.js";import"./SetGraphicalItem-Bg3q-OfM.js";import"./getRadiusAndStrokeWidthFromDot-eYGtCAeF.js";import"./ActiveShapeUtils-B1bflkee.js";import"./useEffectiveDataKey-CjhYhiH-.js";import"./Cross-CPU9vQPK.js";import"./Rectangle-A_cS0CAA.js";import"./util-Dxo8gN5i.js";import"./Sector-DATmQyYx.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
