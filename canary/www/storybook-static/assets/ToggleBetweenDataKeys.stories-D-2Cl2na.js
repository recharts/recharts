import{r as p,R as t}from"./iframe-B9f439XI.js";import{L as n}from"./LineChart-BgSEIfnY.js";import{R as s}from"./zIndexSlice-C6Otyq85.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C4GjJN79.js";import{X as d}from"./XAxis-DOU84Hlo.js";import{Y as y}from"./YAxis-JNrwnee_.js";import{L as u}from"./Legend-DX-GvFUk.js";import{L as h}from"./Line-B7UaIz2p.js";import{T as g}from"./Tooltip-Cq18l-O4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DhjKeyZf.js";import"./resolveDefaultProps-gOTjLOeS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CtkTbFLc.js";import"./throttle-Cul9o8Fv.js";import"./index-BbETDB0j.js";import"./index-Ba5C8sSe.js";import"./isWellBehavedNumber-CYewbHK2.js";import"./d3-scale-D5l0Isqr.js";import"./index-C3T5ZoZg.js";import"./index--FioM-W6.js";import"./renderedTicksSlice-v2nQGwWu.js";import"./index-Dmy_GPO_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DaH8zaVP.js";import"./chartDataContext-1z3k21sD.js";import"./CategoricalChart-7BozNq5r.js";import"./CartesianAxis-DdFgmu19.js";import"./Layer-JExDg_3T.js";import"./Text-Bow6SjUp.js";import"./DOMUtils-DhGAIzWN.js";import"./useId-C9eyJZjo.js";import"./useBackwardsCompatibleTheme-CPO8fYQ4.js";import"./Label-DVN-Hwwb.js";import"./ZIndexLayer-C4eGne8u.js";import"./types-BsF4BT96.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CAnsshcC.js";import"./symbol-CisfiURK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CX1bHy_W.js";import"./uniqBy-DENRboCh.js";import"./iteratee-CJfDgSnT.js";import"./Curve-BNGAgwsP.js";import"./step-Cd0cogV_.js";import"./AnimatedItems-17rMBNfA.js";import"./useAnimationId-7tiok7vs.js";import"./ActivePoints-Uofgco9H.js";import"./Dot-T9Kvs1vN.js";import"./RegisterGraphicalItemId-CMz-uJdk.js";import"./ErrorBarContext-ltkmTZdi.js";import"./GraphicalItemClipPath-CarNY15C.js";import"./SetGraphicalItem-6PuFIxdb.js";import"./getRadiusAndStrokeWidthFromDot-C7sSECjk.js";import"./ActiveShapeUtils-Djn55Wjw.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Cn07LQ6x.js";import"./Rectangle-B0vFWPEb.js";import"./util-Dxo8gN5i.js";import"./Sector-CeMmEBx2.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
