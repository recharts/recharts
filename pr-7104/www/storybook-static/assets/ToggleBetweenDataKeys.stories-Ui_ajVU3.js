import{r as n,e as t}from"./iframe-B_nHVd2r.js";import{L as p}from"./LineChart-BOD7rZvv.js";import{R as s}from"./arrayEqualityCheck-DY9D726-.js";import{C as c}from"./CartesianGrid-DxD1gzBq.js";import{X as l}from"./XAxis-CW60u556.js";import{Y as d}from"./YAxis-CHeSJRY3.js";import{L as y}from"./Legend-BmKGcTGD.js";import{L as h}from"./Line-DeMf4hlA.js";import{T as u}from"./Tooltip-UTq_piku.js";import{R as g}from"./RechartsHookInspector-fNULTbt1.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzqzeMkT.js";import"./index-Ccd-ueyn.js";import"./immer-BI8B3IAj.js";import"./hooks-J0Oqh1od.js";import"./axisSelectors-BMRY7YQG.js";import"./d3-scale-B9XrMCDb.js";import"./zIndexSlice-CcXit2BS.js";import"./renderedTicksSlice-BzSKsfOY.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DEWcUEuJ.js";import"./chartDataContext-CnxSTV7I.js";import"./CategoricalChart-BQ2UlDix.js";import"./resolveDefaultProps-4kbUPRd1.js";import"./CartesianAxis-CcM516-L.js";import"./Layer-CuJ2fFlM.js";import"./Text-DiyzG_aV.js";import"./DOMUtils-DYxHXfua.js";import"./Label-Dso9Y4kd.js";import"./ZIndexLayer-BUYIYBsc.js";import"./types-BNmhs72m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DkF8brZX.js";import"./symbol-DVZ8Ov9_.js";import"./step-DYOoDPDf.js";import"./useElementOffset-C3UWFn_c.js";import"./uniqBy-Co66ylAO.js";import"./iteratee-BX1xRums.js";import"./ReactUtils-DvQ3Bihg.js";import"./ActivePoints-kvA6RkM9.js";import"./Dot-Bdj5CCRw.js";import"./RegisterGraphicalItemId-DYT3txR2.js";import"./ErrorBarContext-D0DhrZWs.js";import"./GraphicalItemClipPath-rjxHDAAK.js";import"./SetGraphicalItem-BcnT6vB3.js";import"./useAnimationId-DeeI7Yuu.js";import"./getRadiusAndStrokeWidthFromDot-DJFnzptW.js";import"./ActiveShapeUtils-Bm79eQGO.js";import"./isPlainObject-Bku77CDs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsvkISRN.js";import"./Trapezoid-Bt86oLyu.js";import"./Sector-BoI-sHTN.js";import"./Curve-RQsVLKEt.js";import"./Cross-DbZKvBdu.js";import"./index-D4ywjx6k.js";import"./ChartSizeDimensions-CZvd_Zg7.js";import"./OffsetShower-8fEwfkJg.js";import"./PlotAreaShower-DdlKlbvs.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
