import{r as p,R as t}from"./iframe-C4it_pSb.js";import{L as n}from"./LineChart-KVA9jY2F.js";import{R as s}from"./zIndexSlice-Bh8QqGYC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BtOhkG_Q.js";import{X as d}from"./XAxis-D3_RnCQs.js";import{Y as y}from"./YAxis-C2MK_IRI.js";import{L as u}from"./Legend-RzUEKwqZ.js";import{L as h}from"./Line-CuCKpMKL.js";import{T as g}from"./Tooltip-i3axsvmf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-WzaEVVng.js";import"./resolveDefaultProps-Bk5elTFQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-iywT_uRR.js";import"./throttle-BWURsltW.js";import"./index-Djot3vWG.js";import"./index-CyjOeiI7.js";import"./isWellBehavedNumber-C0XEinXA.js";import"./d3-scale-CNOoHAop.js";import"./index-B26DTqYo.js";import"./index-BP3VCIYx.js";import"./renderedTicksSlice-B9Dyi-a8.js";import"./index-EJd8pUya.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CHj9PLOA.js";import"./chartDataContext-BS14VVpw.js";import"./CategoricalChart-CdGO65GN.js";import"./CartesianAxis-zFiEPAc_.js";import"./Layer-Y_kQ5bDn.js";import"./Text-C95jy76s.js";import"./DOMUtils-CPJ15NMN.js";import"./useId-CmMKngVw.js";import"./useBackwardsCompatibleTheme-DQJyo6AF.js";import"./Label-n6TZOZVu.js";import"./ZIndexLayer-Np7ngrTh.js";import"./types-B3II6rjl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D0RMIlOv.js";import"./symbol-BJtlaRgk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkE284wq.js";import"./uniqBy-Cc1N6SgR.js";import"./iteratee-DFkmPQiY.js";import"./Curve-Bl8IUEFk.js";import"./step-XVUSGLsl.js";import"./AnimatedItems-BXHU6KSj.js";import"./useAnimationId-DGQm40Oa.js";import"./ActivePoints-BN6Y-cEq.js";import"./Dot-4_fuURZm.js";import"./RegisterGraphicalItemId-C6_S5Zs0.js";import"./ErrorBarContext-CcVjks2v.js";import"./GraphicalItemClipPath-DOE5ucpL.js";import"./SetGraphicalItem-Crl-vV7P.js";import"./getRadiusAndStrokeWidthFromDot-BA3wP3nC.js";import"./ActiveShapeUtils-D3E5vr02.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BuHkVBYA.js";import"./Rectangle-BBBlhEC2.js";import"./util-Dxo8gN5i.js";import"./Sector-DOEkN6ER.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
