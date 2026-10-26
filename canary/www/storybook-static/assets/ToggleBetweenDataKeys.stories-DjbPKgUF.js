import{r as p,R as t}from"./iframe-DHiXiYOt.js";import{L as n}from"./LineChart-C_u8nnlW.js";import{R as s}from"./zIndexSlice-K2mOff9O.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BTti1Wp0.js";import{X as d}from"./XAxis-D6ROrCNU.js";import{Y as y}from"./YAxis-CSlSkAf_.js";import{L as u}from"./Legend-CeWgDI8a.js";import{L as h}from"./Line-DwxSpxuq.js";import{T as g}from"./Tooltip-CUOeBo8F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRTUKx29.js";import"./resolveDefaultProps-CZL46Cig.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BDB90zwk.js";import"./throttle-9IxKLS84.js";import"./index-Zkovv_Mu.js";import"./index-D_YreF5U.js";import"./polarAxisSelectors-CfAL7aRK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-mRNKtGCI.js";import"./index-8ZsYbMQX.js";import"./index-coRvk7yp.js";import"./renderedTicksSlice-Bih8KR78.js";import"./index-CvPWQYz_.js";import"./CartesianChart-OeiKzUqX.js";import"./chartDataContext-NYE-dDPb.js";import"./CategoricalChart-Ddy3kJ44.js";import"./CartesianAxis-BSNVQcOz.js";import"./Layer-DJ7NPFY5.js";import"./Text-BC_B-bRG.js";import"./pageBackground-D2gDVXk4.js";import"./useId-C22RmVdj.js";import"./ZIndexLayer-DeVgP8h4.js";import"./Label-Gr9qDnB4.js";import"./dataEntryStyles-CfpC7ekH.js";import"./types-rgikEiEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CWw_TPA_.js";import"./symbol-BqJAsPmG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BB2XL7B2.js";import"./uniqBy-Cs-chbgd.js";import"./iteratee-Cq8SxEsF.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D9Rxfik5.js";import"./step-Bo1xvdEx.js";import"./activeStyles-CUDvtf42.js";import"./useAnimationId-Ca9jA2_m.js";import"./ActivePoints-4PNB8ast.js";import"./Dot-BAUuju1I.js";import"./RegisterGraphicalItemId-BCzoSTNC.js";import"./ErrorBarContext-CZu1Y3hj.js";import"./SetGraphicalItem-BBSXIdI5.js";import"./getRadiusAndStrokeWidthFromDot-CmFu8Xh3.js";import"./ActiveShapeUtils-CHG_GvWA.js";import"./useEffectiveDataKey-Gb-Ai2uq.js";import"./Cross-CU1Tgcnz.js";import"./Rectangle-Cnk8SPPS.js";import"./util-Dxo8gN5i.js";import"./Sector-DX2LvG5K.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
