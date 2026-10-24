import{r as p,R as t}from"./iframe-DZbjLUQo.js";import{L as n}from"./LineChart-434l-fjy.js";import{R as s}from"./zIndexSlice-kNjtHJvr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DMDlODhK.js";import{X as d}from"./XAxis-Cb9he-VA.js";import{Y as y}from"./YAxis-C0N5iwNJ.js";import{L as u}from"./Legend-yulZ2p1K.js";import{L as h}from"./Line-IagRplkI.js";import{T as g}from"./Tooltip-2fzgYbwj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7gpneaA.js";import"./resolveDefaultProps-7vFM5A8a.js";import"./get-cF5BDHN6.js";import"./axisSelectors-SzDg3mS0.js";import"./throttle-Cj_7MghT.js";import"./index--Cvbr4ei.js";import"./index-s3XojKdv.js";import"./isWellBehavedNumber-C3IgPBb_.js";import"./d3-scale-BGQa_b-A.js";import"./index-Fa7FBVrf.js";import"./index-DZ5C6rYB.js";import"./renderedTicksSlice-Ds3e7SoF.js";import"./index-DGK0wEWr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xRZlZbQd.js";import"./chartDataContext-DvL8FmIv.js";import"./CategoricalChart-D0VTS456.js";import"./CartesianAxis-Bk45HDsq.js";import"./Layer-Dh4rshAh.js";import"./Text-DfE0Fd2l.js";import"./pageBackground-j9oVi7TB.js";import"./useId-uis-dzmY.js";import"./useBackwardsCompatibleTheme-BfjKogZ5.js";import"./Label-QWXq4PsH.js";import"./ZIndexLayer-CKCEdo-g.js";import"./dataEntryStyles-OfgH0EAC.js";import"./types-BIiFdC-Q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BG9p6Mv4.js";import"./symbol-COTSugY-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BqEhG3ye.js";import"./uniqBy-COgWTsrM.js";import"./iteratee-DFCPY5kb.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C9le9A2W.js";import"./step-BWJj5B7H.js";import"./activeStyles-jlHAdlvX.js";import"./useAnimationId-CK6aB1Dm.js";import"./ActivePoints-Dic5JSob.js";import"./Dot-DCKsVFDm.js";import"./RegisterGraphicalItemId-DrXewaeQ.js";import"./ErrorBarContext-BdWQYqFr.js";import"./GraphicalItemClipPath-BDvSZObJ.js";import"./SetGraphicalItem-BJ2EKqIC.js";import"./getRadiusAndStrokeWidthFromDot-ff8SiQS6.js";import"./ActiveShapeUtils-ncETWQyV.js";import"./useEffectiveDataKey-DRn6J3kp.js";import"./Cross-_uoJFZOo.js";import"./Rectangle--8czTBQy.js";import"./util-Dxo8gN5i.js";import"./Sector-B41kLOtL.js";const Rt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Tt as __namedExportsOrder,Rt as default};
