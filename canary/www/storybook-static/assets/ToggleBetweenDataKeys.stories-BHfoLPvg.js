import{r as p,R as t}from"./iframe-ZxQmCvwy.js";import{L as n}from"./LineChart-BJJjRIM0.js";import{R as s}from"./zIndexSlice-RPdwBP9f.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D02Jx2Pp.js";import{X as d}from"./XAxis-Bl2tbEmW.js";import{Y as y}from"./YAxis-B8sk4GXn.js";import{L as u}from"./Legend-CZaLFHxf.js";import{L as h}from"./Line-BzfmnxQQ.js";import{T as g}from"./Tooltip-Ch_z1NOA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BdNFCoW6.js";import"./resolveDefaultProps-DpipilcU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BWbFpFtg.js";import"./throttle-DmwvZWHb.js";import"./index-BPMVDNb6.js";import"./index-BDLiH1an.js";import"./isWellBehavedNumber-sAavL0dG.js";import"./d3-scale-CzTTxW2Z.js";import"./index-BWm52sKa.js";import"./index-BS98XUV2.js";import"./renderedTicksSlice-BYZOrskl.js";import"./index-CABC13wD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-SPk4tXhy.js";import"./chartDataContext-DINqA_zr.js";import"./CategoricalChart-CFCUhC_p.js";import"./CartesianAxis-D6DZF6-J.js";import"./Layer-B0D5UKjQ.js";import"./Text-BO32xjCe.js";import"./DOMUtils-CnJnyfSI.js";import"./useId-CDbRoZtb.js";import"./useBackwardsCompatibleTheme-rwc4Ui1J.js";import"./Label-jkryqT5d.js";import"./ZIndexLayer-CHR5usSt.js";import"./types-CAEm0sG6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DyrvYund.js";import"./symbol-8zizbiR8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CWsrqzYy.js";import"./uniqBy-Blp6aEMv.js";import"./iteratee-C4SJTDea.js";import"./Curve-Bnqw1l-2.js";import"./step-BZUQ-l0Y.js";import"./AnimatedItems-DNQqwiG9.js";import"./useAnimationId-BzN7QWtj.js";import"./ActivePoints-CZGIVnLi.js";import"./Dot-D5ITAbBb.js";import"./RegisterGraphicalItemId-TiGOVH9L.js";import"./ErrorBarContext-DUW_9KGf.js";import"./GraphicalItemClipPath-BQlyOKfz.js";import"./SetGraphicalItem-BoNO2rRn.js";import"./getRadiusAndStrokeWidthFromDot-DYQBE5cH.js";import"./ActiveShapeUtils-C_YMBjW3.js";import"./useGraphicalItemIdentity-BCt8bdV6.js";import"./Cross-DpbwQXpR.js";import"./Rectangle-BYMvNR2N.js";import"./util-Dxo8gN5i.js";import"./Sector-CUdfplpR.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
