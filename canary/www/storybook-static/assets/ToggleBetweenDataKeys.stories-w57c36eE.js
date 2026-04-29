import{r as n,e as t}from"./iframe-CELk_iHp.js";import{L as p}from"./LineChart-Clqo25UW.js";import{R as s}from"./arrayEqualityCheck-Jv-_2dlt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CPcwhuKo.js";import{X as d}from"./XAxis-Dkm5sOcL.js";import{Y as y}from"./YAxis-PBKVxaw1.js";import{L as h}from"./Legend-DfQvuwM2.js";import{L as u}from"./Line-BgJkyWDy.js";import{T as g}from"./Tooltip-EqoHihNy.js";import{R as K}from"./RechartsHookInspector-zC8sO4Uu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-iaOd2vsR.js";import"./index-C7-Jna_X.js";import"./immer-CNryykoH.js";import"./hooks-nYvhXGgN.js";import"./axisSelectors-B_B8N_DF.js";import"./d3-scale-CkPD6mk7.js";import"./zIndexSlice-BKa9iYJo.js";import"./renderedTicksSlice-fDAVE1e2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D2sMjbuw.js";import"./chartDataContext-BGxyOe8E.js";import"./CategoricalChart-oFZY99PF.js";import"./resolveDefaultProps-DGpqOJqH.js";import"./CartesianAxis-Bdrxnh8Y.js";import"./Layer--Pc4EXaW.js";import"./Text-Bw3NjmwC.js";import"./DOMUtils-D-Am5_eq.js";import"./Label-Bd9YpboY.js";import"./ZIndexLayer-CCDRMMaH.js";import"./types-CyX-tNTq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dx2mis7o.js";import"./symbol-DhXBBxwA.js";import"./step-BZd9qX-S.js";import"./useElementOffset-D4fadBoO.js";import"./uniqBy-BjyCkiBk.js";import"./iteratee-CUDLRjQ1.js";import"./ReactUtils-Dj0EWLrR.js";import"./ActivePoints-DO7snJgn.js";import"./Dot-dGAlOqLg.js";import"./RegisterGraphicalItemId-DNcpshuw.js";import"./ErrorBarContext-DacGNm7D.js";import"./GraphicalItemClipPath-CX61POx4.js";import"./SetGraphicalItem-HEs6iBS3.js";import"./useAnimationId-1GRLd7ca.js";import"./getRadiusAndStrokeWidthFromDot-wRVRq9dq.js";import"./ActiveShapeUtils-B3MGtfHB.js";import"./isPlainObject-BehFM2KM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CE1dlDuT.js";import"./Trapezoid-Dfk3zDGx.js";import"./Sector-DOGbklsh.js";import"./Curve-D55eTV1c.js";import"./Cross-DkjIdaRm.js";import"./index-CuVYK_Ov.js";import"./ChartSizeDimensions-M-hHKi9p.js";import"./OffsetShower-ePPaic-x.js";import"./PlotAreaShower-D-7S5_Wy.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
