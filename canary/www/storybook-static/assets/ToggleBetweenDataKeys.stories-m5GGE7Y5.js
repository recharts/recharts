import{r as n,R as t}from"./iframe-Yg2vC8jl.js";import{L as p}from"./LineChart-CncEzfcg.js";import{R as s}from"./zIndexSlice-BElsb48m.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B6EPQvSG.js";import{X as d}from"./XAxis-BCD8PGRZ.js";import{Y as y}from"./YAxis-C7vKKbMF.js";import{L as u}from"./Legend-D2QQ31Cv.js";import{L as h}from"./Line-Cc2La8TY.js";import{T as g}from"./Tooltip-CTKLNEBy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rNmWVTcA.js";import"./resolveDefaultProps-Bsa29K_S.js";import"./get-C2VjdU0L.js";import"./axisSelectors-nv9p39UG.js";import"./throttle-BaCh1BSI.js";import"./index-CHZ1utW3.js";import"./index-CN9KpfAX.js";import"./isWellBehavedNumber-DQgk1tKw.js";import"./d3-scale-DXOKnb1o.js";import"./index--8spWne3.js";import"./index-B_F5nQFz.js";import"./renderedTicksSlice-ChVEhIgt.js";import"./index-CqWRosMe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C7IlXP4I.js";import"./chartDataContext-Dlt4sLo1.js";import"./CategoricalChart-EUZHEGq1.js";import"./CartesianAxis-D_n_4bqq.js";import"./Layer-B4IabIdW.js";import"./Text-DdvnI_Yn.js";import"./DOMUtils-CUUEg-Ut.js";import"./useId-CIFQ64hu.js";import"./useBackwardsCompatibleTheme-ByLQZtu6.js";import"./Label-D-3Je9Ku.js";import"./ZIndexLayer-DxM-QnJb.js";import"./types-DJ9rCugd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CUEb3Vdg.js";import"./symbol-CTUXJ_bE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4hd-uwJ-.js";import"./uniqBy-D5HXXEeh.js";import"./iteratee-Bl4bR9Yp.js";import"./Curve-DpihRFk6.js";import"./step-DK4VgiZ3.js";import"./AnimatedItems-CaVCuQAN.js";import"./useAnimationId-DsPfmOTd.js";import"./ActivePoints-BlvoLXcy.js";import"./Dot-C9WYn9kj.js";import"./RegisterGraphicalItemId-DblvaP9s.js";import"./ErrorBarContext-BRhPIJ9q.js";import"./GraphicalItemClipPath-Ow_WyG3Z.js";import"./SetGraphicalItem-V-QFpaIF.js";import"./getRadiusAndStrokeWidthFromDot-hxmc-IYv.js";import"./ActiveShapeUtils-Ch49efhn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-4DAXadOZ.js";import"./Rectangle-DLhCf_Js.js";import"./util-Dxo8gN5i.js";import"./Sector-IFYvrVGg.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
