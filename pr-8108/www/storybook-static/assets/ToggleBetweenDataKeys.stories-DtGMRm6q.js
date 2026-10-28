import{r as p,R as t}from"./iframe-BPaILHrg.js";import{L as n}from"./LineChart-CFjYsDli.js";import{R as s}from"./zIndexSlice-Bmw1fph3.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dm5IA2uO.js";import{X as d}from"./XAxis-Bp49XRaF.js";import{Y as y}from"./YAxis-CZAlOOP6.js";import{L as u}from"./Legend-uniXBVqh.js";import{L as h}from"./Line-cHlCiH4v.js";import{T as g}from"./Tooltip-Cs06hDj9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7MXGog1.js";import"./resolveDefaultProps-fs0FwHaQ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BgmzCmWH.js";import"./throttle-B9kMlkpl.js";import"./index-CkFyYTJL.js";import"./index-CA_30Yt5.js";import"./polarAxisSelectors-CP4AmDBe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CvctqLlv.js";import"./index-CnIUZT6I.js";import"./index-B04q1BNb.js";import"./renderedTicksSlice-BvsmzMN6.js";import"./index-BFOFl-I4.js";import"./CartesianChart-DVMMqgwd.js";import"./ZIndexPortal-bECtAjmI.js";import"./CategoricalChart-DVM1oU_Q.js";import"./CartesianAxis-DqZBHpVR.js";import"./Layer-BYN-xjEA.js";import"./Text-CtKpv6li.js";import"./pageBackground-CWFMyAd2.js";import"./ZIndexLayer-DOVmR1lD.js";import"./Label-r7ey19qR.js";import"./types-DUbTKtwp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Dk1_zaB2.js";import"./symbol-hCExAh31.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYi5LIP9.js";import"./uniqBy-CQUkPewS.js";import"./iteratee-BSjHlBKG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DgfwLhV2.js";import"./step-D2WZnOIE.js";import"./LabelList-BA53HbEo.js";import"./ActivePoints-BAgIMyf9.js";import"./Dot-Eg6Ew0GK.js";import"./activeStyles-BRvUZ3GA.js";import"./useAnimationId-BDqdHn7D.js";import"./dataEntryStyles-DyygVVmF.js";import"./ErrorBarContext-CUfKSzjm.js";import"./SetGraphicalItem-CsCmCIZL.js";import"./getRadiusAndStrokeWidthFromDot-DTWprENN.js";import"./ActiveShapeUtils-By1qTU3M.js";import"./useEffectiveDataKey-Bbwl3GsC.js";import"./Cross-s4IhzTKS.js";import"./Rectangle-zVYi39zS.js";import"./util-Dxo8gN5i.js";import"./Sector-BsE-OmPw.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
