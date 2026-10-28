import{r as p,R as t}from"./iframe-D4oHTXd2.js";import{L as n}from"./LineChart-BV3E2dkf.js";import{R as s}from"./zIndexSlice-FaOQzDXI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-rvbRojsQ.js";import{X as d}from"./XAxis--JtbYt43.js";import{Y as y}from"./YAxis-BYtNm8pH.js";import{L as u}from"./Legend-Dw8wxeVg.js";import{L as h}from"./Line-icQsYXEb.js";import{T as g}from"./Tooltip-V4ocUqZm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDz0Qovh.js";import"./resolveDefaultProps-56IWAvtJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CDRP_sNf.js";import"./throttle-IWj5GY0g.js";import"./index-8QB0C-JA.js";import"./index-BcDiyi9x.js";import"./polarAxisSelectors-DA0Sn49S.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C56RpY6Y.js";import"./index-CN0lIDDr.js";import"./index-BEOZMuKY.js";import"./renderedTicksSlice-9pxfuVSu.js";import"./index-CCJYRnuL.js";import"./CartesianChart-DqtOCB7I.js";import"./ZIndexPortal-BwTgdPOx.js";import"./CategoricalChart-BGUOI4WC.js";import"./CartesianAxis-Ck0BSfZw.js";import"./Layer-Cc-amHQh.js";import"./Text-CD7lZJQl.js";import"./pageBackground-ClBhdff4.js";import"./ZIndexLayer-CtwITcxK.js";import"./Label-DP7jFvS8.js";import"./dataEntryStyles-CDeLNDqG.js";import"./types-D44DYR1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Dayf-cZG.js";import"./symbol-Cv4qssrt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DyenIFMf.js";import"./uniqBy-DxBxaEGL.js";import"./iteratee-B-_7egyo.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B88JiAwJ.js";import"./step-hZT5qMl0.js";import"./LabelList-hm91Y5t7.js";import"./ActivePoints-D0g5NkQl.js";import"./Dot-7MN5UfYI.js";import"./activeStyles-BnisSvy3.js";import"./useAnimationId-DDFQzbLJ.js";import"./RegisterGraphicalItemId-D_uZK7cP.js";import"./ErrorBarContext-BjrF48Vy.js";import"./SetGraphicalItem-3CIjS8yi.js";import"./getRadiusAndStrokeWidthFromDot-jULpS_BY.js";import"./ActiveShapeUtils-CKRVzd2S.js";import"./useEffectiveDataKey-56V2wZBO.js";import"./Cross-BTVpfL3S.js";import"./Rectangle-DUbFm90a.js";import"./util-Dxo8gN5i.js";import"./Sector-B5EL7_ii.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
