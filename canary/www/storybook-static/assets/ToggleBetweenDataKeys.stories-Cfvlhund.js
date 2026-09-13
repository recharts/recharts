import{r as p,R as t}from"./iframe-GEWoEgYU.js";import{L as n}from"./LineChart-cOfvf3h5.js";import{R as s}from"./zIndexSlice-m50y9bt7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ifwHriUt.js";import{X as d}from"./XAxis-BNnHyyR6.js";import{Y as y}from"./YAxis-Do1ezRev.js";import{L as u}from"./Legend-Baxiyi7r.js";import{L as h}from"./Line-JrrQ0b5K.js";import{T as g}from"./Tooltip-BAVFGGcA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUhcDKTP.js";import"./resolveDefaultProps-DpAlDskP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-3BecUZh2.js";import"./throttle-DQWr01n7.js";import"./index-jF3_l_DR.js";import"./index-BmM7Rlr-.js";import"./isWellBehavedNumber-Btl-gf2F.js";import"./d3-scale-DtRX2T9P.js";import"./index-BTro793U.js";import"./index-BkcefAXR.js";import"./renderedTicksSlice-Cm6mh1F9.js";import"./index-xNr63OGc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D7rp_ejt.js";import"./chartDataContext-BO36yNvS.js";import"./CategoricalChart-B9B91N22.js";import"./CartesianAxis-DN5o5nX3.js";import"./Layer-B28G2hIY.js";import"./Text-DisRgGpM.js";import"./DOMUtils-_s9ELKXC.js";import"./useId-CSqY47p_.js";import"./useBackwardsCompatibleTheme-CDx1dLi4.js";import"./Label-BrqW8KDJ.js";import"./ZIndexLayer-UqU4qgkO.js";import"./types-BibJ3Nmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BS2jIWeJ.js";import"./symbol-CcpcFect.js";import"./path-DyVhHtw_.js";import"./useElementOffset-sZ_quz8S.js";import"./uniqBy-D4LQ95gw.js";import"./iteratee-uHmSd5oe.js";import"./Curve-BIh3ht4a.js";import"./step-CWzaE13R.js";import"./AnimatedItems-BGlMg_gS.js";import"./useAnimationId-DCtzAZ-Q.js";import"./ActivePoints-DTY2TMLV.js";import"./Dot-DbC-8y4h.js";import"./RegisterGraphicalItemId-oyNCw2MY.js";import"./ErrorBarContext-n9OrelsP.js";import"./GraphicalItemClipPath-CQvdMfqc.js";import"./SetGraphicalItem-CiQmIVfI.js";import"./getRadiusAndStrokeWidthFromDot-COR5YxZm.js";import"./ActiveShapeUtils-Bfg_gjnw.js";import"./useGraphicalItemIdentity-CuKg9Fcq.js";import"./Cross-BeFe6Kls.js";import"./Rectangle-CjQE5fD5.js";import"./util-Dxo8gN5i.js";import"./Sector-DKArG2GN.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
