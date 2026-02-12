import{r as n,e as t}from"./iframe-CMiM_Qgn.js";import{L as p}from"./LineChart-CM90tniu.js";import{R as s}from"./arrayEqualityCheck-_vyoivmV.js";import{C as c}from"./CartesianGrid-fLuhqndc.js";import{X as l}from"./XAxis-DaiKeapO.js";import{Y as d}from"./YAxis-Dt3qo-M7.js";import{L as y}from"./Legend-YSI1bbWS.js";import{L as h}from"./Line-ByFuaooi.js";import{T as u}from"./Tooltip-mnca8GkQ.js";import{R as g}from"./RechartsHookInspector-DmT1dtLd.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NJ0Ez51E.js";import"./hooks-BePoF5l4.js";import"./axisSelectors-Cx7ZtEIH.js";import"./zIndexSlice-BExtdyub.js";import"./resolveDefaultProps-41R1n5JW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CauNMHrH.js";import"./chartDataContext-By2fKgIb.js";import"./CategoricalChart-O0vVyZYM.js";import"./CartesianAxis-BZUH34_W.js";import"./Layer-CgUnyU8v.js";import"./Text-BCzzepAd.js";import"./DOMUtils-DDwkXkUm.js";import"./Label-gyqygLIm.js";import"./ZIndexLayer-BI90jm2U.js";import"./types-CyIMtLrt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BXDeECV7.js";import"./Curve-BXAMzxgI.js";import"./useElementOffset-DHbCjGEK.js";import"./iteratee-CYb7fGYl.js";import"./ReactUtils-BtLAWZFM.js";import"./ActivePoints-BMo7GV7Z.js";import"./Dot-B0Edv62r.js";import"./RegisterGraphicalItemId-ChahBClM.js";import"./ErrorBarContext-DTmAcjw7.js";import"./GraphicalItemClipPath-DrjjmV4D.js";import"./SetGraphicalItem-DFpoPkFf.js";import"./useAnimationId-Cub4YggD.js";import"./getRadiusAndStrokeWidthFromDot-guaPTICv.js";import"./ActiveShapeUtils-DqPdrrUk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-PYLd1R2f.js";import"./Trapezoid-BG55ZEGY.js";import"./Sector-D5UzUxjZ.js";import"./Cross-Btay1-TD.js";import"./index-1Y0M71Of.js";import"./ChartSizeDimensions-DBnJjpf_.js";import"./OffsetShower-D9-0tfso.js";import"./PlotAreaShower-Dq9EyHFw.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
