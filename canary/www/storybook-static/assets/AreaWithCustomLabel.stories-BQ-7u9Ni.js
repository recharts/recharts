import{R as e}from"./iframe-GELhAUTo.js";import{R as c}from"./zIndexSlice-ClN2s-1U.js";import{C as d}from"./ComposedChart-CdCgkykE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BhvqMF5P.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DU3kigO2.js";import"./index-DTm2_Ebd.js";import"./index-Ch3aQyu8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-i6Bf8Qe5.js";import"./isWellBehavedNumber-qNvGNJqB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSC6kLWa.js";import"./index-fkyqtveo.js";import"./index-De1BUZgG.js";import"./renderedTicksSlice-DtvoFkYT.js";import"./axisSelectors-DqMTsyvT.js";import"./d3-scale-BXdsYgex.js";import"./CartesianChart-CnHKmmwZ.js";import"./chartDataContext-C1NesgAa.js";import"./CategoricalChart-DWJWD5d1.js";import"./Layer-1dFGvAkG.js";import"./AnimatedItems-D0mvcaGm.js";import"./Label-D2gt0uaB.js";import"./Text-COlbwtoq.js";import"./DOMUtils-vC9OxNpg.js";import"./ZIndexLayer-BJaQcl6Z.js";import"./useAnimationId-Cjs3Y5s0.js";import"./ActivePoints-D0W1le7m.js";import"./Dot-Dfp7LnYV.js";import"./types-CDH6nNS8.js";import"./RegisterGraphicalItemId-CBE0jEK0.js";import"./GraphicalItemClipPath-BR4J-JYN.js";import"./SetGraphicalItem-CbnVMng4.js";import"./getRadiusAndStrokeWidthFromDot-DdGOUs2v.js";import"./ActiveShapeUtils-GEyAcK7d.js";import"./Curve-C2-sTxrm.js";import"./step-DYVQ7D-O.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Djhj5DPh.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
