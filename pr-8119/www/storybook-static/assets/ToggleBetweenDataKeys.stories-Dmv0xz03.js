import{r as p,R as t}from"./iframe-BVlfuHR1.js";import{L as n}from"./LineChart-CktRJK1Z.js";import{R as s}from"./zIndexSlice-DKBlzg_K.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cxx4AsEE.js";import{X as d}from"./XAxis-DixivmhH.js";import{Y as y}from"./YAxis-4InIcFXf.js";import{L as u}from"./Legend-CiJARbEk.js";import{L as h}from"./Line-D92Dv_C3.js";import{T as g}from"./Tooltip-CeEsAu0L.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRZJzitw.js";import"./resolveDefaultProps-2dAZYWIG.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Brqs7zw9.js";import"./throttle-B2Qtjc3W.js";import"./index-BQP9-3uy.js";import"./index-Y_wwfQb4.js";import"./polarAxisSelectors-DnZiXFIF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BNlCtWSy.js";import"./index-DNy-3Gid.js";import"./index-DZEpaPFi.js";import"./renderedTicksSlice-CoA4ci_o.js";import"./index-CCVms-fF.js";import"./CartesianChart-ZoKsxEgh.js";import"./ZIndexPortal-DaL6GVrS.js";import"./CategoricalChart-DD3gjEAO.js";import"./CartesianAxis-CPYLIIET.js";import"./Layer-B5eXi8NV.js";import"./Text-BxId80OJ.js";import"./DOMUtils-Dtel_m_3.js";import"./ZIndexLayer-6Z0WH24s.js";import"./Label-Ckax5Juk.js";import"./types-DYWAvxYY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Djyf5WWk.js";import"./symbol-ucn0ySfm.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-B4sFAt8T.js";import"./dataEntryStyles-DSEQ0COb.js";import"./useElementOffset-CrNfCBWI.js";import"./uniqBy-B5YMrEOh.js";import"./iteratee-B_C-TQMi.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D680kDYc.js";import"./step-O-KWti3S.js";import"./LabelList-qAsFJxAr.js";import"./ActivePoints-CI1sJ5FS.js";import"./Dot-Btb-E3dw.js";import"./activeStyles-B82PQSZb.js";import"./useAnimationId-eAQDadKJ.js";import"./ErrorBarContext-DAUTVb2k.js";import"./SetGraphicalItem-Cncgk9Qh.js";import"./getRadiusAndStrokeWidthFromDot-Cneka8AD.js";import"./ActiveShapeUtils--AsRwBXZ.js";import"./useEffectiveDataKey-BtHFWZML.js";import"./Cross-CBOhtoV3.js";import"./Rectangle-zs3F46mh.js";import"./util-Dxo8gN5i.js";import"./Sector-D9xN3Yrf.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
