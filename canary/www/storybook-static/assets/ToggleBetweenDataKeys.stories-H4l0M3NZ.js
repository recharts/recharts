import{r as p,R as t}from"./iframe-DsTklGd_.js";import{L as n}from"./LineChart-BdsV4prH.js";import{R as s}from"./zIndexSlice-BtbFiuZY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dey6FAmb.js";import{X as d}from"./XAxis-CCdXtDxp.js";import{Y as y}from"./YAxis-BOZCya1S.js";import{L as u}from"./Legend-DM9P43pw.js";import{L as h}from"./Line-BpWz7ZGo.js";import{T as g}from"./Tooltip-CpWUFYTg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DgwcOqsJ.js";import"./resolveDefaultProps-Bms6p2jX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DYheqAyK.js";import"./throttle-DdQ2CShf.js";import"./index-BXaEWxS9.js";import"./index-CDyKR3cz.js";import"./isWellBehavedNumber-CnKVaaX2.js";import"./d3-scale-m8FOg4h4.js";import"./index-DPiom88R.js";import"./index-DwiZHk90.js";import"./renderedTicksSlice-BKqQhYx3.js";import"./index-blk6unfu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPHbQoR9.js";import"./chartDataContext-PmdzKedQ.js";import"./CategoricalChart-DoFDJCgx.js";import"./CartesianAxis-CPZLjXk4.js";import"./Layer-CZKgQj5k.js";import"./Text-BbSBkVqk.js";import"./pageBackground-BHVKZknb.js";import"./useId-Dh4XaEh2.js";import"./useBackwardsCompatibleTheme-DVVyS6sc.js";import"./Label-D9BiQh3x.js";import"./ZIndexLayer-DFFwnPWa.js";import"./types-CPppnSS0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C05NrL44.js";import"./symbol-BCG62I2C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uGLvwzdi.js";import"./uniqBy-Mv52plNv.js";import"./iteratee-Dj6SgMgn.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BNsFHGFj.js";import"./step-DT1sNEdD.js";import"./activeStyles-CRt5O3EE.js";import"./useAnimationId-DDiQkgxw.js";import"./dataEntryStyles-Cfp8oK59.js";import"./ActivePoints-B7jiKkUq.js";import"./Dot-DzYpmtjj.js";import"./ErrorBarContext-BpgUGbiX.js";import"./GraphicalItemClipPath-K8g7er1I.js";import"./SetGraphicalItem-Bi7lJTO4.js";import"./getRadiusAndStrokeWidthFromDot-D7P1mq2m.js";import"./ActiveShapeUtils-Cg3stx7N.js";import"./useEffectiveDataKey-yxNF_elp.js";import"./Cross-B_kNLhXT.js";import"./Rectangle-VOQBKS27.js";import"./util-Dxo8gN5i.js";import"./Sector-CgGX8g4n.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
