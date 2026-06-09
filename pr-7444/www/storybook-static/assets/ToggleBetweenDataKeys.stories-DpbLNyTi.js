import{r as n,R as t}from"./iframe-Bvg5iw6Z.js";import{L as p}from"./LineChart-BVY-T8Yd.js";import{R as s}from"./zIndexSlice-Ds_NjbNn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-391TdCFj.js";import{X as d}from"./XAxis-DCRWzJVy.js";import{Y as y}from"./YAxis-DfqNaUIm.js";import{L as u}from"./Legend-By9J81jo.js";import{L as h}from"./Line-X30bFimQ.js";import{T as g}from"./Tooltip-Lj7TyvUX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CHMdqOJQ.js";import"./index-D6uOIfEh.js";import"./index-DjoxYWbz.js";import"./index-Ce12os93.js";import"./index-C7ALVEHS.js";import"./immer-DHoEBynv.js";import"./get-DHB3VUn4.js";import"./renderedTicksSlice-BOSAcKeB.js";import"./axisSelectors-ChUTyiTu.js";import"./d3-scale-C3JFNDzB.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-DdhPeWBo.js";import"./isWellBehavedNumber-BfXcmwrI.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B5xnpDkJ.js";import"./chartDataContext-C4maze1A.js";import"./CategoricalChart-D7IINMSs.js";import"./CartesianAxis-_p8UXmcr.js";import"./Layer-irp4ME8h.js";import"./Text-DjnMaOWq.js";import"./DOMUtils-DJUlICsZ.js";import"./Label-DkRUWIp2.js";import"./ZIndexLayer-BSVnK8Dt.js";import"./types-C-xtjdCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Cq3i7-Qm.js";import"./symbol-ht2nF6AE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DAsw9AdB.js";import"./uniqBy-B9Wdfl7r.js";import"./iteratee-BBjRdKWi.js";import"./Curve-C6rubuUm.js";import"./step-CEyafom-.js";import"./AnimatedItems-BUtl3ij7.js";import"./useAnimationId-BOUeGlQ3.js";import"./ActivePoints-DfDHJRbx.js";import"./Dot-dsakJdmW.js";import"./RegisterGraphicalItemId-DtXuMSpf.js";import"./ErrorBarContext-CM-RxSPr.js";import"./GraphicalItemClipPath-VUPv1woh.js";import"./SetGraphicalItem-DwOFrAeq.js";import"./getRadiusAndStrokeWidthFromDot-DrdS8yiS.js";import"./ActiveShapeUtils-DAESvJMs.js";import"./Cross-1MdmmQOd.js";import"./Rectangle-prsUXg1E.js";import"./Sector-DYXtSTxy.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
