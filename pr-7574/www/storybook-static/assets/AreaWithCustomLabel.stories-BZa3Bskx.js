import{R as e}from"./iframe-BJ6rGQc6.js";import{R as c}from"./zIndexSlice-BthxejHI.js";import{C as d}from"./ComposedChart-DAq7OREE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CjoW66mu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-cNz-OreL.js";import"./index-BmNs2kCE.js";import"./index-CByH2eT_.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BO6O7yzj.js";import"./isWellBehavedNumber-DPc5CIJW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChNksolv.js";import"./index-mopUcmNZ.js";import"./index-Bmr20IMW.js";import"./renderedTicksSlice-C0Y7ZKTU.js";import"./axisSelectors-BLC4H6fV.js";import"./d3-scale-DN-uWHg9.js";import"./CartesianChart-Bgx90lkE.js";import"./chartDataContext-sqlI8BYS.js";import"./CategoricalChart-BQ-Zgg5z.js";import"./Layer-CWFT9o_4.js";import"./AnimatedItems-DC-H_ZkC.js";import"./Label-GAUKfLbl.js";import"./Text-B3HJfVNK.js";import"./DOMUtils-B9FEHnPQ.js";import"./ZIndexLayer-Ux9EkA8k.js";import"./useAnimationId-DQh6YXIz.js";import"./ActivePoints-BWSLTzTs.js";import"./Dot-WtNB5uJQ.js";import"./types-C1lw_8rt.js";import"./RegisterGraphicalItemId-Bwp-eRlf.js";import"./GraphicalItemClipPath-C6Rgg4xk.js";import"./SetGraphicalItem-D1cCKorc.js";import"./getRadiusAndStrokeWidthFromDot-BpprK3MD.js";import"./ActiveShapeUtils-CUDn-tDt.js";import"./Curve-BjFMHVU-.js";import"./step-D3keTh0D.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Cd7Bkold.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
