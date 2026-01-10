import{r as n,e as t}from"./iframe-C7VEdwDl.js";import{L as p}from"./LineChart-C-Gpe0VS.js";import{R as s}from"./arrayEqualityCheck-BFuWEF_2.js";import{C as c}from"./CartesianGrid-Dk9Js2CK.js";import{X as l}from"./XAxis-lTITefqV.js";import{Y as d}from"./YAxis-BhBQhR2H.js";import{L as y}from"./Legend-Bp5MdZLe.js";import{L as h}from"./Line-CSu5WlAZ.js";import{T as u}from"./Tooltip-nM3QPx50.js";import{R as g}from"./RechartsHookInspector-zossHO9I.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DEcROWOI.js";import"./hooks-BW_tvarJ.js";import"./axisSelectors-F4Rfzy8w.js";import"./zIndexSlice-BJ_Gr8zy.js";import"./resolveDefaultProps-BUd4YoeE.js";import"./PolarUtils-DHfJA17M.js";import"./CartesianChart-Csxz-3BL.js";import"./chartDataContext-CfkWD6kk.js";import"./CategoricalChart-0Xeq1mM5.js";import"./CartesianAxis-C8p5zhNH.js";import"./Layer-CPbMT7hg.js";import"./Text-BdIA0mDm.js";import"./DOMUtils-BLCIXtr_.js";import"./Label-BR_hSEq_.js";import"./ZIndexLayer-BPo_6GDC.js";import"./types-CRh2J3nK.js";import"./Symbols-HruIKh8l.js";import"./Curve-DE9HnzTx.js";import"./useElementOffset-D7uKUYt0.js";import"./iteratee-BM75dhpc.js";import"./ReactUtils-DGKDkYPZ.js";import"./ActivePoints-BgKx4NCy.js";import"./Dot-CHwT8mvT.js";import"./RegisterGraphicalItemId-CQVzSIpL.js";import"./ErrorBarContext-D5Rmuma9.js";import"./GraphicalItemClipPath-B3ICEpzV.js";import"./SetGraphicalItem-CDbWAttj.js";import"./useAnimationId-BiiYSys9.js";import"./getRadiusAndStrokeWidthFromDot-D0ij6tUK.js";import"./ActiveShapeUtils-DxCy-J0g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk5aROAI.js";import"./Trapezoid-CiHao4Jj.js";import"./Sector-foYN3hhu.js";import"./Cross-CXIEA9TA.js";import"./index-D3VqoZ-t.js";import"./ChartSizeDimensions-DdGVjbyp.js";import"./OffsetShower-BIF6rOJj.js";import"./PlotAreaShower-YHRv7s4A.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
