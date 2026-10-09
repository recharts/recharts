import{r as p,R as t}from"./iframe-B-SNMp2P.js";import{L as n}from"./LineChart-DEFSl2h4.js";import{R as s}from"./zIndexSlice-MJVhEUVa.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BboA69Qq.js";import{X as d}from"./XAxis-DbFPHXfw.js";import{Y as y}from"./YAxis-Cm6hvxXf.js";import{L as u}from"./Legend-CULdgsny.js";import{L as h}from"./Line-COMV_M1P.js";import{T as g}from"./Tooltip-DcDDxMTq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gPNydgch.js";import"./resolveDefaultProps-D6GIFGnh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-_pmBWC24.js";import"./throttle-7fi-ZXpb.js";import"./index-BIs-1f0J.js";import"./index-BZQvw8Sg.js";import"./isWellBehavedNumber-0l1sLwCq.js";import"./d3-scale-CF8UPnnv.js";import"./index-Dj60m7pl.js";import"./index-DGXVsrKV.js";import"./renderedTicksSlice-2xqGDKha.js";import"./index-CvUwvd6n.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-K-vFTXTH.js";import"./chartDataContext-BccgPSEz.js";import"./CategoricalChart-BNp-LaIc.js";import"./CartesianAxis-D1aWQaVv.js";import"./Layer-CVSv3BXM.js";import"./Text-3FjWr6Un.js";import"./DOMUtils-CVvGSXS1.js";import"./useId-DCI_CeQs.js";import"./useBackwardsCompatibleTheme-CE1PvRpo.js";import"./Label-yF0NhCgr.js";import"./ZIndexLayer-DTIKWgf_.js";import"./types-BNVaobqj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DzV4gd5Z.js";import"./symbol-DyubpzeR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BiHyJ0md.js";import"./uniqBy-B66cnVOa.js";import"./iteratee-BXTpeJD1.js";import"./Curve-CJXjFqV6.js";import"./step-HC0u4nw9.js";import"./AnimatedItems-D-Mi-zOF.js";import"./useAnimationId-CiVfXoZZ.js";import"./ActivePoints-0GRfHXwb.js";import"./Dot-CFiUGY51.js";import"./dataEntryStyles-Bq_a6L7W.js";import"./ErrorBarContext-D0XxzFi4.js";import"./GraphicalItemClipPath-C3pTbqJ4.js";import"./SetGraphicalItem-B2JrzKrx.js";import"./getRadiusAndStrokeWidthFromDot-BOwP_unw.js";import"./ActiveShapeUtils-BCJOz4d0.js";import"./useGraphicalItemIdentity-DsWLL8GU.js";import"./Cross-DKtnmeHW.js";import"./Rectangle-DleIA4hH.js";import"./util-Dxo8gN5i.js";import"./Sector-BC91dQbQ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
