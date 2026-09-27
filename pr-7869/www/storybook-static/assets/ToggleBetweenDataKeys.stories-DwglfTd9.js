import{r as p,R as t}from"./iframe-DjMXRMWw.js";import{L as n}from"./LineChart-au_bLx7m.js";import{R as s}from"./zIndexSlice-CtOSUbKS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-PpUdbw0t.js";import{X as d}from"./XAxis-CEqdRxfv.js";import{Y as y}from"./YAxis-CsW9B0iy.js";import{L as u}from"./Legend-afF_4FYA.js";import{L as h}from"./Line-inedNkom.js";import{T as g}from"./Tooltip-DMwQL-tp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BnIn7gPv.js";import"./resolveDefaultProps-B1XIyHIw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CNz5a2R6.js";import"./throttle-inystY2z.js";import"./index-DVy8JuJj.js";import"./index-C8KOxsb8.js";import"./isWellBehavedNumber-umHPGaL1.js";import"./d3-scale-CRgYiiwr.js";import"./index-DYIYCqg3.js";import"./index-Bhr5x-9R.js";import"./renderedTicksSlice-DVXswGI9.js";import"./index-BD7yu4TT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CDSIXDAD.js";import"./chartDataContext-DOQrMEHc.js";import"./CategoricalChart-DvjYEnPS.js";import"./CartesianAxis-CyNRu8rC.js";import"./Layer-CXKDxib5.js";import"./Text-BAKQyfL2.js";import"./DOMUtils-C8lW23C1.js";import"./useId-_ZeDNFzq.js";import"./useBackwardsCompatibleTheme-nOUNGopJ.js";import"./Label-bBUf40Mc.js";import"./ZIndexLayer-BeupKQ39.js";import"./types-CHoZYlJ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D7EyCHsi.js";import"./symbol-CBruGsGe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jSBsXjkO.js";import"./uniqBy-l_xI2UHC.js";import"./iteratee-D1sHNf4H.js";import"./Curve-OU_i7PV7.js";import"./step-Cub6k3wO.js";import"./AnimatedItems-B8zijpSk.js";import"./useAnimationId-DqHnZ7Fe.js";import"./ActivePoints-D8eJWPdK.js";import"./Dot-DcNcFyGg.js";import"./RegisterGraphicalItemId-Dt04SWfb.js";import"./ErrorBarContext-B-5bQ8PS.js";import"./GraphicalItemClipPath-BWZ1AOYB.js";import"./SetGraphicalItem-7PkPViNi.js";import"./getRadiusAndStrokeWidthFromDot-D039ugpa.js";import"./ActiveShapeUtils-B380iXXR.js";import"./useGraphicalItemIdentity-CLXu1wVJ.js";import"./Cross-DCRf1ebt.js";import"./Rectangle-MaeOvePl.js";import"./util-Dxo8gN5i.js";import"./Sector-B2ibbG-s.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
