import{r as n,e as t}from"./iframe-B6ZCI1X-.js";import{L as p}from"./LineChart-DoCvcKkM.js";import{R as s}from"./arrayEqualityCheck-Vy2dcV_o.js";import{C as c}from"./CartesianGrid-C7UogyGe.js";import{X as l}from"./XAxis-C4uw1-2Q.js";import{Y as d}from"./YAxis-Bknejqsk.js";import{L as y}from"./Legend-BxFuXWyV.js";import{L as h}from"./Line-B1fwKAvO.js";import{T as u}from"./Tooltip-C7m83EDP.js";import{R as g}from"./RechartsHookInspector-B_-BIKM5.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cm4MNb60.js";import"./hooks-B7AKPgu3.js";import"./axisSelectors-B7jgX05e.js";import"./zIndexSlice-CZ608RYy.js";import"./resolveDefaultProps-BfRNrOjX.js";import"./PolarUtils-DT5LUPN4.js";import"./CartesianChart-3kl8J4OM.js";import"./chartDataContext-K1HgDw51.js";import"./CategoricalChart-DmGE5R29.js";import"./CartesianAxis-Cgh_nqbT.js";import"./Layer-fYHElE4I.js";import"./Text-1BcInixy.js";import"./DOMUtils-DnJTSxHK.js";import"./Label-D44TMXj3.js";import"./ZIndexLayer-NdV45W3l.js";import"./types-lQyAqjcM.js";import"./Symbols-BpZDCS87.js";import"./Curve-xA1LMbbI.js";import"./useElementOffset-4jS_X3SG.js";import"./iteratee-BH1cr4Fj.js";import"./ReactUtils-DztpHcKA.js";import"./ActivePoints-Dua7vnpk.js";import"./Dot-BNoOq719.js";import"./RegisterGraphicalItemId-CkZvvq8r.js";import"./ErrorBarContext-CRJ4zZZo.js";import"./GraphicalItemClipPath-BH-LuHt6.js";import"./SetGraphicalItem-BsBYfoCl.js";import"./useAnimationId-Czd9yhg2.js";import"./getRadiusAndStrokeWidthFromDot-CTkwUqhN.js";import"./ActiveShapeUtils-CayjX_j1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dvu--PZM.js";import"./Trapezoid-CWebkWYz.js";import"./Sector-oW786f9C.js";import"./Cross-Nm4nOG6c.js";import"./index-DYaSePyf.js";import"./ChartSizeDimensions-B6sRHlXe.js";import"./OffsetShower-BW9M7Gqo.js";import"./PlotAreaShower-BOQNx6Qk.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
