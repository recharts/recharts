import{R as e}from"./iframe-CqMmO9Xr.js";import{R as c}from"./zIndexSlice-DFZjSdbQ.js";import{C as d}from"./ComposedChart-uPkxZ6ZI.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-sIWeY3fg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-QEuO__ZS.js";import"./index-DM7XJZkc.js";import"./index-C7a4ZWQb.js";import"./get-Bd1LrVMt.js";import"./resolveDefaultProps-B4mfWg2L.js";import"./isWellBehavedNumber-BQfelr5r.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CnEYhKO1.js";import"./index-4Y0h8bRC.js";import"./index-DUkcUndf.js";import"./renderedTicksSlice-CRwA1chB.js";import"./axisSelectors-DNmvLHVP.js";import"./d3-scale-QPfz2uTg.js";import"./CartesianChart-9yjUQzO4.js";import"./chartDataContext-C_w1UWdz.js";import"./CategoricalChart-D2FUAiwR.js";import"./Layer-B_iZYaDE.js";import"./AnimatedItems-CVpfsiGm.js";import"./Label-I1gAWal3.js";import"./Text-CEmf9w7F.js";import"./DOMUtils-Ds2cGO5I.js";import"./ZIndexLayer-pq6FNmg5.js";import"./useAnimationId-CUS7kjlN.js";import"./ActivePoints-Cv3N35qL.js";import"./Dot-DuJvVQ71.js";import"./types-DVuTAt9Y.js";import"./RegisterGraphicalItemId-CKAuGKYu.js";import"./GraphicalItemClipPath-BKxNv1YA.js";import"./SetGraphicalItem-DZlHA3su.js";import"./getRadiusAndStrokeWidthFromDot-Ctxaag6G.js";import"./ActiveShapeUtils-B4C1Nqw7.js";import"./Curve-DqnHYjX3.js";import"./step-CnWsiLlx.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DDHZ_A4y.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
