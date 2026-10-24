import{r as p,R as t}from"./iframe-Bibrvi93.js";import{L as n}from"./LineChart-D-0PUWPs.js";import{R as s}from"./zIndexSlice-IRdU2Eq4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ALKh-GIq.js";import{X as d}from"./XAxis-DJh80Lk8.js";import{Y as y}from"./YAxis-C5_c0VAl.js";import{L as u}from"./Legend-DbZ6ctwJ.js";import{L as h}from"./Line-pqhmcNHN.js";import{T as g}from"./Tooltip-DEVGfLDM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bt5qeROs.js";import"./resolveDefaultProps-DuLA9rob.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DSlGSk_i.js";import"./throttle-BYyvulfq.js";import"./index-DMM3MhtL.js";import"./index-30mt-Xh2.js";import"./isWellBehavedNumber-DEJNr0Qw.js";import"./d3-scale-Cv38ge3f.js";import"./index-DWooAmJS.js";import"./index-DnZq9tde.js";import"./renderedTicksSlice-B9WL6t6z.js";import"./index-BJXhTZS7.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CEqCUP4y.js";import"./chartDataContext-uGfw2Upg.js";import"./CategoricalChart-DFHR8N3d.js";import"./CartesianAxis-Cuzpv6zD.js";import"./Layer-DE86HNiB.js";import"./Text-BO_ppYYl.js";import"./pageBackground-XzqliJgP.js";import"./useId-BgICeW4-.js";import"./useBackwardsCompatibleTheme-DU3b-TNc.js";import"./Label-cYp5UoGe.js";import"./ZIndexLayer-CR2StRvF.js";import"./dataEntryStyles-DDDSAcpo.js";import"./types-Bq4foVci.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D6qSh5xw.js";import"./symbol-pYdEuRJm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CvZM-d1p.js";import"./uniqBy-BUWcx4Iz.js";import"./iteratee-c_7BWdlz.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CMNJVVoM.js";import"./step-CRsn2MAq.js";import"./activeStyles-DrZDHncN.js";import"./useAnimationId-CyOwunze.js";import"./ActivePoints-BrjJnJ33.js";import"./Dot-DajOJSdD.js";import"./RegisterGraphicalItemId-Cbm3m_DF.js";import"./ErrorBarContext-BkgPrLn0.js";import"./SetGraphicalItem-CE5ARGmx.js";import"./getRadiusAndStrokeWidthFromDot-CuI68Hzl.js";import"./ActiveShapeUtils-D9IZw5gW.js";import"./useEffectiveDataKey-BbVSYZl7.js";import"./Cross-C-7lXx0r.js";import"./Rectangle-tEZ4S3O4.js";import"./util-Dxo8gN5i.js";import"./Sector-Czo3fx6_.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
