import{r as n,R as t}from"./iframe-CIwxHuVP.js";import{L as p}from"./LineChart-Ex0lUY6d.js";import{R as s}from"./zIndexSlice-4cOqtSJ1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BhJ75ZQ_.js";import{X as d}from"./XAxis-CIHUnpyu.js";import{Y as y}from"./YAxis-COiio6CI.js";import{L as u}from"./Legend-DvlL2ORD.js";import{L as h}from"./Line-JFyqB5U2.js";import{T as g}from"./Tooltip-C8H5wACs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-saup7v4_.js";import"./resolveDefaultProps-BqjvsCVB.js";import"./get-C2VjdU0L.js";import"./axisSelectors-YcB3o8_5.js";import"./throttle-DyeZ31Gg.js";import"./index-DYcgeWKW.js";import"./index-BBY9vn-H.js";import"./isWellBehavedNumber-DnH2FQ7z.js";import"./d3-scale-BsCK15DF.js";import"./index-Dret-drz.js";import"./index-KtvOjFJW.js";import"./renderedTicksSlice-BymeN3Gd.js";import"./index-CgMi-XQz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BuIzZkiF.js";import"./chartDataContext-BnEwWcTU.js";import"./CategoricalChart-BsI6BCbz.js";import"./CartesianAxis-D27Sw88P.js";import"./Layer-QH0nRmzc.js";import"./Text-DdeI7QFK.js";import"./DOMUtils-DJmg_ALb.js";import"./useId-CvnBUwAn.js";import"./useBackwardsCompatibleTheme-CaEtd9Gi.js";import"./Label-P76xZGuB.js";import"./ZIndexLayer-DSlR-fbE.js";import"./types-CaxJYW3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DRT-U5W8.js";import"./symbol-D8FGjzG1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C8fj9EDe.js";import"./uniqBy-Ck5EUTAW.js";import"./iteratee-Do4CuqXa.js";import"./Curve-ByjfkPmA.js";import"./step-CKl1-sZu.js";import"./AnimatedItems-CJSCuTfT.js";import"./useAnimationId-CRxHEUg9.js";import"./ActivePoints-DbUUlzxv.js";import"./Dot-USLgQRMp.js";import"./RegisterGraphicalItemId-Bx9h1qwh.js";import"./ErrorBarContext-BBpfpkXa.js";import"./GraphicalItemClipPath-DfR7F3pr.js";import"./SetGraphicalItem-DCJicVim.js";import"./getRadiusAndStrokeWidthFromDot-CxoI2rZS.js";import"./ActiveShapeUtils-C_X8XuiV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BaBq-Hrh.js";import"./Rectangle-Dicx6LJz.js";import"./util-Dxo8gN5i.js";import"./Sector-DMRej8x1.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
