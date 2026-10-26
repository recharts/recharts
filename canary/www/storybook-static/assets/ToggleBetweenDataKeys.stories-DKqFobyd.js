import{r as p,R as t}from"./iframe-DfmqqqCr.js";import{L as n}from"./LineChart-CvLyjXJ6.js";import{R as s}from"./zIndexSlice-d0YHK6xw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CRNF13y_.js";import{X as d}from"./XAxis-B0knr_7L.js";import{Y as y}from"./YAxis-b9ABcoaF.js";import{L as u}from"./Legend-BmgcmV92.js";import{L as h}from"./Line-Dip9Rer8.js";import{T as g}from"./Tooltip-C6TAD7LP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6KUw4si.js";import"./resolveDefaultProps-ComwQ6WC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DWglHHAi.js";import"./throttle-DAA8X2l5.js";import"./index-Lp2jcwfG.js";import"./index-CSO17-J0.js";import"./polarAxisSelectors-DpDn-hFD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ci_zYY1V.js";import"./index-pJqwg3_d.js";import"./index-hdUN889v.js";import"./renderedTicksSlice-C4mLmnSQ.js";import"./index-CQMOT26p.js";import"./CartesianChart-LSHb6JPq.js";import"./ZIndexPortal-BDrojabW.js";import"./CategoricalChart-BsBaBvnF.js";import"./CartesianAxis-CYll20RU.js";import"./Layer-BrcDHHcB.js";import"./Text-CG3VrxOm.js";import"./pageBackground-dHeomk-I.js";import"./ZIndexLayer-Cvk6PIs7.js";import"./Label-C130jv2t.js";import"./dataEntryStyles-CeCkFK1K.js";import"./types-9Kx7AXVb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BOmwAADp.js";import"./symbol-CvaR8Ff4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BIpV4hkj.js";import"./uniqBy-B-Zb9oWg.js";import"./iteratee-KP65sc9-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DdFuR-cZ.js";import"./step-pAgvwVo8.js";import"./LabelList-C0IeivS9.js";import"./ActivePoints-h83UhP7R.js";import"./Dot-BTf9HS3j.js";import"./activeStyles-CHOILxkP.js";import"./useAnimationId-RNI69aEn.js";import"./RegisterGraphicalItemId-CzjpJBeg.js";import"./ErrorBarContext-C3AKnlrm.js";import"./SetGraphicalItem-41fol6Y1.js";import"./getRadiusAndStrokeWidthFromDot-CCLTT3lF.js";import"./ActiveShapeUtils-Csx1hMVo.js";import"./useEffectiveDataKey-Ri-wD3JN.js";import"./Cross-I7yLc-X5.js";import"./Rectangle-CCmTs9GK.js";import"./util-Dxo8gN5i.js";import"./Sector-BnHkZCan.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
