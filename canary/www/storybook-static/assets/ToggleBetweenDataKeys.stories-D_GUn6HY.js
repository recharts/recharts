import{r as p,R as t}from"./iframe-CwjnBdPJ.js";import{L as n}from"./LineChart-78NyXzRo.js";import{R as s}from"./zIndexSlice-DCK0oMjs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bt64PR7p.js";import{X as d}from"./XAxis-DGiS1jyS.js";import{Y as y}from"./YAxis-BJPBUcLn.js";import{L as u}from"./Legend-hOsISys7.js";import{L as h}from"./Line-BtP8MguI.js";import{T as g}from"./Tooltip-B0A_l91o.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DssFoHZN.js";import"./resolveDefaultProps-CiT0yrYA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-yVNmvCZQ.js";import"./throttle-NOTipQ48.js";import"./index-Dd-h_ysm.js";import"./index-BjJumBGZ.js";import"./isWellBehavedNumber-UCnnTJQS.js";import"./d3-scale-B8EUKI5D.js";import"./index-CmMtCp92.js";import"./index-D5HInSgc.js";import"./renderedTicksSlice-dymauRC4.js";import"./index-Bgw_dChb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CAYSFbYO.js";import"./chartDataContext-Caz9nZMs.js";import"./CategoricalChart-C1fI2_Bl.js";import"./CartesianAxis-BCC92CcD.js";import"./Layer-mPZxMc5S.js";import"./Text-CkJvnqMb.js";import"./pageBackground-CPZsdU6n.js";import"./useId-LApi4aFA.js";import"./useBackwardsCompatibleTheme-BaLhcLyB.js";import"./Label-DUPKJ4wq.js";import"./ZIndexLayer-Cf72LToz.js";import"./dataEntryStyles-MXIeXXjf.js";import"./types-Bf6WAwuG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-XtZsXKyx.js";import"./symbol-pwE7MqIW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BUBjRfVb.js";import"./uniqBy-DM5ILEe5.js";import"./iteratee-BCmgj2Iv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-_mg3fY-T.js";import"./step-_ilYVkYV.js";import"./activeStyles-Dq37JbhA.js";import"./useAnimationId-CsReVCtf.js";import"./ActivePoints-B-LCBBeH.js";import"./Dot-j5DVnIjt.js";import"./RegisterGraphicalItemId-D_0UWgiO.js";import"./ErrorBarContext-Dx-lWvRW.js";import"./GraphicalItemClipPath-BaNkPOAO.js";import"./SetGraphicalItem-r-YteBa3.js";import"./getRadiusAndStrokeWidthFromDot-B0N-TNeB.js";import"./ActiveShapeUtils-5uA1VhfG.js";import"./useEffectiveDataKey-Cb7tOd6S.js";import"./Cross-CU2uWUVS.js";import"./Rectangle-CYb6tTOo.js";import"./util-Dxo8gN5i.js";import"./Sector-BzlkSSva.js";const Rt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
