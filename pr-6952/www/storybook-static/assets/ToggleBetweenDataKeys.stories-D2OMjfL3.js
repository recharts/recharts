import{r as n,e as t}from"./iframe-Ct3-EmvQ.js";import{L as p}from"./LineChart-DBIczZSa.js";import{R as s}from"./arrayEqualityCheck-6IWQNVnF.js";import{C as c}from"./CartesianGrid-InnXGM-h.js";import{X as l}from"./XAxis-BUqB6c6n.js";import{Y as d}from"./YAxis-FGYgR9Es.js";import{L as y}from"./Legend-C8SZv2ZQ.js";import{L as h}from"./Line-BFQpRJy0.js";import{T as u}from"./Tooltip-D9XcQfCI.js";import{R as g}from"./RechartsHookInspector-CNP9TKyO.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CgmBIBCZ.js";import"./hooks-PlM3qON0.js";import"./axisSelectors-CMJXMyjC.js";import"./zIndexSlice-DuEz9NCx.js";import"./resolveDefaultProps-CLCYDClS.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DTOqEhzT.js";import"./chartDataContext-mVWnipwc.js";import"./CategoricalChart-DnvqP6Kl.js";import"./CartesianAxis-C_XdVR0m.js";import"./Layer-B8MEBogB.js";import"./Text-x40PBIRp.js";import"./DOMUtils-BkPW2gQA.js";import"./Label-DHx5gLtP.js";import"./ZIndexLayer-BPGi17AG.js";import"./types-_oa_IGij.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Bp94E4fO.js";import"./Curve-C_yJ7Ryc.js";import"./useElementOffset-DDHtWwWX.js";import"./iteratee-BdHcd1Ka.js";import"./ReactUtils-DN8_9Eno.js";import"./ActivePoints-BWNwZRYi.js";import"./Dot-CFdq7_VN.js";import"./RegisterGraphicalItemId-XVqhZVps.js";import"./ErrorBarContext-DASfBuRX.js";import"./GraphicalItemClipPath-m8qPdP4H.js";import"./SetGraphicalItem-DB0AUuOj.js";import"./useAnimationId-BJitn0wZ.js";import"./getRadiusAndStrokeWidthFromDot-CQkE4Z1f.js";import"./ActiveShapeUtils-BFvFZr_D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOfd_qYz.js";import"./Trapezoid-DB54BMON.js";import"./Sector-C0TYwl3N.js";import"./Cross-Di4ryU7U.js";import"./index-CtF0TcD5.js";import"./ChartSizeDimensions-DR7HU7h8.js";import"./OffsetShower-DsW7pfd1.js";import"./PlotAreaShower-CVlOaRsI.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
