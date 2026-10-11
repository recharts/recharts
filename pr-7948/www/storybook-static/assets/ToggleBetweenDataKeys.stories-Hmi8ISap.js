import{r as p,R as t}from"./iframe-B5nqGCFx.js";import{L as n}from"./LineChart-DmcWbqPZ.js";import{R as s}from"./zIndexSlice-fA6rJzVB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C57lX0yd.js";import{X as d}from"./XAxis-BbfaJWKY.js";import{Y as y}from"./YAxis-BgoYMJlL.js";import{L as u}from"./Legend-DbTPlpw_.js";import{L as h}from"./Line-rcGSoU24.js";import{T as g}from"./Tooltip-BcK9JY4b.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ba7GDCRC.js";import"./resolveDefaultProps-DTwkyIYB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DRuLrEYP.js";import"./throttle-8usPf-nG.js";import"./index-COQrJFEi.js";import"./index-BRJwV6Tu.js";import"./isWellBehavedNumber-CTlIu6VQ.js";import"./d3-scale-Cvdyq6r4.js";import"./index-D7H2LPLl.js";import"./index-C0uKubiT.js";import"./renderedTicksSlice-D3liRtIY.js";import"./index-DNc7GpB0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bo-Bdmuv.js";import"./chartDataContext-BLw5SzU5.js";import"./CategoricalChart-BPnw4lhz.js";import"./CartesianAxis-nGdi1wTE.js";import"./Layer-SWDQGPXc.js";import"./Text-D2l9VyZ3.js";import"./pageBackground-Do8lEaLA.js";import"./useId-D5UXkky-.js";import"./useBackwardsCompatibleTheme-DdYC-jFL.js";import"./Label-Dboddtc6.js";import"./ZIndexLayer-udH7BH-f.js";import"./types-CilMbPhc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DHtTH7TJ.js";import"./symbol-daI3B66U.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7bOm6Io.js";import"./uniqBy-BrQ249xF.js";import"./iteratee-D4GTaDc4.js";import"./Curve-CUMSQUCB.js";import"./step-Bc1udJt4.js";import"./activeStyles-LGVgbHeS.js";import"./useAnimationId-DegqvOnN.js";import"./dataEntryStyles-CA9fGSl9.js";import"./ActivePoints-BouQ6dSD.js";import"./Dot-CdI0Le8G.js";import"./ErrorBarContext-BKhVL6zW.js";import"./GraphicalItemClipPath-RjRlios3.js";import"./SetGraphicalItem-B1zewZJg.js";import"./getRadiusAndStrokeWidthFromDot-CpJam9J5.js";import"./ActiveShapeUtils-BaXicK3x.js";import"./useGraphicalItemIdentity-C3gqRS6g.js";import"./Cross-DCP6BZuO.js";import"./Rectangle-BlT3bA6g.js";import"./util-Dxo8gN5i.js";import"./Sector-Ch-MSYlU.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
