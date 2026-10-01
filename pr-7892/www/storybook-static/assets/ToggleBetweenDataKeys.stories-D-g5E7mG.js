import{r as p,R as t}from"./iframe-C9psKz5H.js";import{L as n}from"./LineChart-5QRg-rPX.js";import{R as s}from"./zIndexSlice-DpmGRp-Q.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D3n5VgzI.js";import{X as d}from"./XAxis-7TSk_dxf.js";import{Y as y}from"./YAxis-hQp9fU0j.js";import{L as u}from"./Legend-D-FmtXzI.js";import{L as h}from"./Line-DANxSI-f.js";import{T as g}from"./Tooltip-D7estliL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DBEUhNwk.js";import"./resolveDefaultProps-DXpX2jzi.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BVR1qW5C.js";import"./throttle-ybqMtWK8.js";import"./index-D90R4_Ry.js";import"./index-DO4kgVpb.js";import"./isWellBehavedNumber-DtoestQf.js";import"./d3-scale-DOPiKI9I.js";import"./index-Boed59-W.js";import"./index-C0Ds42Ok.js";import"./renderedTicksSlice-C81k7Y0M.js";import"./index-C4HmYpYK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqQaN6li.js";import"./chartDataContext-C8FZLZVj.js";import"./CategoricalChart-oiLx-c2-.js";import"./CartesianAxis-QX-AYICp.js";import"./Layer-D1lf7NaI.js";import"./Text-CxmkIGJJ.js";import"./DOMUtils-5QLcrI6X.js";import"./useId-BmRjTouL.js";import"./useBackwardsCompatibleTheme-u-6iGz_C.js";import"./Label-tLoAdhBg.js";import"./ZIndexLayer-Dp6mI4S2.js";import"./types-Bo9cWGoI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CmEK9_Zz.js";import"./symbol-Csc8y23F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFRDXyQs.js";import"./uniqBy-vdai6ABx.js";import"./iteratee-CxOXUx_n.js";import"./Curve-ejO9vv5H.js";import"./step-Ba-sjoMn.js";import"./AnimatedItems-CEzVE_qf.js";import"./useAnimationId-NO-aRC2z.js";import"./ActivePoints-DV3QsG_s.js";import"./Dot-CoxDYTLK.js";import"./RegisterGraphicalItemId-Bou02MzC.js";import"./ErrorBarContext-C0X-i2LX.js";import"./GraphicalItemClipPath-BiRBEzG3.js";import"./SetGraphicalItem-DbUk56bY.js";import"./getRadiusAndStrokeWidthFromDot-D95GFJQd.js";import"./ActiveShapeUtils-B_bGVHtn.js";import"./useGraphicalItemIdentity-CFJPU_4U.js";import"./Cross-Bqsji87y.js";import"./Rectangle-DiC0sGbs.js";import"./util-Dxo8gN5i.js";import"./Sector-BJeHlwhS.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
