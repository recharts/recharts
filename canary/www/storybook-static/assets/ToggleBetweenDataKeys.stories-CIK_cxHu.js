import{r as n,R as t}from"./iframe-BCd41l8E.js";import{L as p}from"./LineChart--rT6z1G3.js";import{R as s}from"./zIndexSlice-vwglsLr7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CjqtIjwN.js";import{X as d}from"./XAxis-B6fLtz1T.js";import{Y as y}from"./YAxis-HwtSiSZk.js";import{L as u}from"./Legend-DQcAn4kt.js";import{L as h}from"./Line-Bu3kEO38.js";import{T as g}from"./Tooltip-Dxc-2dxe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAuP6JTc.js";import"./index-B6Q7w6aQ.js";import"./index-BUl2VpQi.js";import"./index-DqhoEKLL.js";import"./index-DbWv8bq-.js";import"./throttle-COzcAqD2.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-DGgd7qJG.js";import"./axisSelectors-BWK81-bk.js";import"./resolveDefaultProps-CfjrcH5k.js";import"./isWellBehavedNumber-By99v6ya.js";import"./d3-scale-BUxy_yCJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C3_p9XVE.js";import"./chartDataContext-Drys5Aq2.js";import"./CategoricalChart-D4f6D4jQ.js";import"./CartesianAxis-B_R0lNNU.js";import"./Layer-BlOdZtAq.js";import"./Text-rlFfv_Ik.js";import"./DOMUtils--ioWONbC.js";import"./Label-BGS-IakE.js";import"./ZIndexLayer-C4KPetXp.js";import"./types-CEIkXXH7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BUnkOlSA.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DLSOvSIF.js";import"./symbol-BkoVcfiX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-P2rqDW92.js";import"./uniqBy-DVKsDt21.js";import"./iteratee-Dj9diA2M.js";import"./Curve-5IbJhmxY.js";import"./step-B-Fp4nlk.js";import"./AnimatedItems-Dw69Yp-8.js";import"./useAnimationId-CGoXgsW2.js";import"./ActivePoints-Ca9ELXuu.js";import"./Dot-k24tsyTI.js";import"./RegisterGraphicalItemId-BNOR99Vc.js";import"./ErrorBarContext-ChbGQHV7.js";import"./GraphicalItemClipPath-mTO3f3R8.js";import"./SetGraphicalItem-C-GN70LS.js";import"./getRadiusAndStrokeWidthFromDot-Cs1a3Mwu.js";import"./ActiveShapeUtils-B7pKCaaA.js";import"./Cross-6F6iIWdN.js";import"./Rectangle-DzQvr8Y1.js";import"./util-Dxo8gN5i.js";import"./Sector-B1oSRv3z.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
